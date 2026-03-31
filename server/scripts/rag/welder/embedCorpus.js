import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { embedText, getEmbedProviderChain } from "../lib/llmClient.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const corpusPath = path.join(__dirname, "output", "corpus.json");
const embeddedPath = path.join(__dirname, "output", "corpus.embedded.json");

async function readJsonIfExists(filePath) {
  try {
    const raw = await readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err?.code === "ENOENT") return null;
    throw err;
  }
}

async function run() {
  console.log(`Embedding provider chain (Groq skipped): ${getEmbedProviderChain().join(" > ")}`);
  const baseCorpus = JSON.parse(await readFile(corpusPath, "utf-8"));
  const resumeCorpus = await readJsonIfExists(embeddedPath);

  // Resume behavior: preserve prior embeddings for matching chunk IDs.
  const resumeMap = new Map(
    ((resumeCorpus?.chunks || []).filter((c) => Array.isArray(c.embedding)) || []).map((c) => [String(c.id), c.embedding])
  );
  const chunks = (baseCorpus.chunks || []).map((chunk) => {
    const existingEmbedding = resumeMap.get(String(chunk.id));
    return existingEmbedding ? { ...chunk, embedding: existingEmbedding } : chunk;
  });
  if (!chunks.length) throw new Error("No chunks found. Run buildCorpus first.");

  const alreadyEmbedded = chunks.filter((c) => Array.isArray(c.embedding)).length;
  if (alreadyEmbedded > 0) {
    console.log(`Resuming from checkpoint: ${alreadyEmbedded}/${chunks.length} chunks already embedded`);
  }

  const refChunk = chunks.find((c) => Array.isArray(c.embedding) && c.embedding.length > 0);
  const expectedDim = refChunk ? refChunk.embedding.length : 0;

  const batchSize = 24;
  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize);
    for (const chunk of batch) {
      if (Array.isArray(chunk.embedding)) continue;
      const vec = await embedText(chunk.content.slice(0, 8000));
      if (expectedDim && vec.length !== expectedDim) {
        throw new Error(
          `Embedding dimension mismatch: checkpoint vectors are length ${expectedDim}, new vector is ${vec.length}. Use a single embedding provider/model or delete ${embeddedPath} and re-embed.`
        );
      }
      chunk.embedding = vec;
    }
    const embeddedNow = chunks.filter((c) => Array.isArray(c.embedding)).length;
    await writeFile(
      embeddedPath,
      JSON.stringify({ ...baseCorpus, embeddedAt: new Date().toISOString(), chunks }, null, 2),
      "utf-8"
    );
    console.log(`Embedded ${embeddedNow}/${chunks.length}`);
  }

  await writeFile(
    embeddedPath,
    JSON.stringify({ ...baseCorpus, embeddedAt: new Date().toISOString(), chunks }, null, 2),
    "utf-8"
  );
  console.log(`Embedded corpus written: ${embeddedPath}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});