import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEFAULT_PROVIDER_ORDER = ["gemini", "groq", "mistral", "openai"];

dotenv.config({ path: join(__dirname, "../../../.env") });
dotenv.config({ path: join(__dirname, "../../../../.env") });

function hasKeyFor(provider) {
  switch (provider) {
    case "gemini":
      return Boolean(process.env.GEMINI_API_KEY);
    case "groq":
      return Boolean(process.env.GROQ_API_KEY);
    case "mistral":
      return Boolean(process.env.MISTRAL_API_KEY);
    case "openai":
      return Boolean(process.env.OPENAI_API_KEY);
    default:
      return false;
  }
}

/**
 * Ordered list of providers to try for chat generation (rate limits → next).
 * Default: gemini → groq → mistral → openai. Override with LLM_PROVIDER_ORDER (comma-separated).
 * If LLM_PROVIDER is set and LLM_PROVIDER_ORDER is not, that provider is tried first, then the default order.
 */
export function getProviderChain() {
  let order;
  const custom = process.env.LLM_PROVIDER_ORDER?.trim();
  if (custom) {
    order = custom.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  } else {
    const pref = process.env.LLM_PROVIDER?.trim().toLowerCase();
    if (pref && DEFAULT_PROVIDER_ORDER.includes(pref)) {
      order = [pref, ...DEFAULT_PROVIDER_ORDER.filter((p) => p !== pref)];
    } else {
      order = [...DEFAULT_PROVIDER_ORDER];
    }
  }
  const chain = order.filter((p) => DEFAULT_PROVIDER_ORDER.includes(p) && hasKeyFor(p));
  if (!chain.length) {
    throw new Error(
      "No LLM API keys found. Set one or more of GEMINI_API_KEY, GROQ_API_KEY, MISTRAL_API_KEY, OPENAI_API_KEY."
    );
  }
  return chain;
}

/** Embedding chain: Groq has no embeddings API in this pipeline, so it is skipped. */
export function getEmbedProviderChain() {
  return getProviderChain().filter((p) => p !== "groq");
}

export function getProvider() {
  return getProviderChain()[0];
}

function openaiCompatibleClient(provider) {
  if (provider === "openai") {
    return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  if (provider === "groq") {
    return new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });
  }
  if (provider === "mistral") {
    return new OpenAI({
      apiKey: process.env.MISTRAL_API_KEY,
      baseURL: "https://api.mistral.ai/v1",
    });
  }
  throw new Error(`openaiCompatibleClient: unsupported provider ${provider}`);
}

function genModelId(provider) {
  if (provider === "openai") return process.env.OPENAI_GEN_MODEL || "gpt-4.1-mini";
  if (provider === "groq") return process.env.GROQ_GEN_MODEL || "llama-3.3-70b-versatile";
  if (provider === "mistral") return process.env.MISTRAL_GEN_MODEL || "mistral-small-latest";
  throw new Error(`genModelId: unsupported provider ${provider}`);
}

/**
 * Backward-compatible: first SDK in the provider chain (same shape as before).
 */
export function createClient() {
  const provider = getProvider();
  if (provider === "gemini") {
    return { provider, sdk: new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) };
  }
  return { provider, sdk: openaiCompatibleClient(provider) };
}

/** Upper bound for JSON generation. Default 8192 works across Groq/Mistral; raise (e.g. 16384) for large one-shot course JSON on Gemini/OpenAI via LLM_MAX_OUTPUT_TOKENS. */
function resolvedMaxOutputTokens() {
  const raw = process.env.LLM_MAX_OUTPUT_TOKENS ?? process.env.GEMINI_MAX_OUTPUT_TOKENS;
  const n = raw != null ? Number(raw) : 8192;
  if (!Number.isFinite(n)) return 8192;
  return Math.max(512, Math.min(65536, Math.floor(n)));
}

function isRetryableLlmError(err) {
  const status = err?.status ?? err?.statusCode ?? err?.response?.status;
  // 413: Groq TPM-per-request "too large" still uses rate_limit_exceeded — try next provider.
  if (status === 429 || status === 503 || status === 413) return true;
  const code = String(err?.code ?? err?.error?.code ?? "");
  if (code === "rate_limit_exceeded") return true;
  const msg = String(err?.message ?? err?.error?.message ?? "").toLowerCase();
  if (
    /rate.limit|quota|resource_exhausted|resource exhausted|too many requests|temporarily unavailable|overloaded|503|429|413|unavailable|request too large|tokens per minute|\btpm\b|reduce your message size/.test(
      msg
    )
  ) {
    return true;
  }
  return false;
}

async function embedGemini(text) {
  const genai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const preferred = process.env.GEMINI_EMBED_MODEL || "gemini-embedding-001";
  const candidates = [...new Set([preferred, "gemini-embedding-001", "text-embedding-004"])];
  let lastError = null;

  for (const model of candidates) {
    try {
      const res = await genai.models.embedContent({
        model,
        contents: text,
      });
      if (Array.isArray(res?.embeddings) && Array.isArray(res.embeddings[0]?.values)) {
        return res.embeddings[0].values;
      }
      if (Array.isArray(res?.embedding?.values)) return res.embedding.values;
      throw new Error(`Gemini embedding response did not contain vector values for model ${model}`);
    } catch (err) {
      lastError = err;
      const msg = String(err?.message ?? "");
      if (!/not found|not supported|404/i.test(msg)) throw err;
    }
  }

  throw lastError ?? new Error("No compatible Gemini embedding model available");
}

async function embedMistral(text) {
  const sdk = openaiCompatibleClient("mistral");
  const model = process.env.MISTRAL_EMBED_MODEL || "mistral-embed";
  const res = await sdk.embeddings.create({ model, input: text });
  return res.data[0].embedding;
}

async function embedOpenAI(text) {
  const sdk = openaiCompatibleClient("openai");
  const model = process.env.OPENAI_EMBED_MODEL || "text-embedding-3-small";
  const res = await sdk.embeddings.create({ model, input: text });
  return res.data[0].embedding;
}

/** Embed `text`, trying each provider in getEmbedProviderChain() on retryable failures. */
export async function embedText(text) {
  const chain = getEmbedProviderChain();
  let lastError = null;

  for (const provider of chain) {
    try {
      if (provider === "gemini") return await embedGemini(text);
      if (provider === "mistral") return await embedMistral(text);
      if (provider === "openai") return await embedOpenAI(text);
    } catch (err) {
      lastError = err;
      if (isRetryableLlmError(err)) {
        console.warn(
          `[embed] ${provider} failed (${err?.status ?? err?.message ?? err}); trying next provider in chain.`
        );
        continue;
      }
      throw err;
    }
  }

  throw lastError ?? new Error("Embedding failed for all providers in chain");
}

async function generateGeminiJson(prompt, temperature) {
  const genai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const res = await genai.models.generateContent({
    model: process.env.GEMINI_GEN_MODEL || "gemini-2.0-flash",
    contents: prompt,
    config: {
      temperature,
      responseMimeType: "application/json",
      maxOutputTokens: resolvedMaxOutputTokens(),
    },
  });
  return res.text || "{}";
}

async function generateOpenAICompatibleJson(provider, prompt, temperature) {
  const sdk = openaiCompatibleClient(provider);
  const model = genModelId(provider);
  const res = await sdk.chat.completions.create({
    model,
    temperature,
    max_tokens: resolvedMaxOutputTokens(),
    response_format: { type: "json_object" },
    messages: [{ role: "user", content: prompt }],
  });
  const content = res.choices[0]?.message?.content;
  return content || "{}";
}

/**
 * Generate JSON text from prompt, trying each provider in getProviderChain() on retryable failures.
 */
export async function generateJson(prompt, temperature = 0.2) {
  const chain = getProviderChain();
  let lastError = null;

  for (const provider of chain) {
    try {
      if (provider === "gemini") {
        return await generateGeminiJson(prompt, temperature);
      }
      return await generateOpenAICompatibleJson(provider, prompt, temperature);
    } catch (err) {
      lastError = err;
      if (isRetryableLlmError(err)) {
        console.warn(
          `[generate] ${provider} failed (${err?.status ?? err?.message ?? err}); trying next provider in chain.`
        );
        continue;
      }
      throw err;
    }
  }

  throw lastError ?? new Error("generateJson failed for all providers in chain");
}