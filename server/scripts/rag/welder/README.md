# Welder RAG MVP scripts

This folder contains an end-to-end MVP pipeline for generating draft Welder course assets:

1. Build text corpus from approved sources (URLs + local PDF)
2. Embed chunks using a provider chain (see **LLM providers** below)
3. Generate:
   - `welderCourse.generated.js`
   - `welderQuestions.generated.js`

## Prerequisites

- **LLM providers** ([`../lib/llmClient.js`](../lib/llmClient.js)): scripts load keys from `server/.env` (or repo `.env`). Set any combination of:
  - `GEMINI_API_KEY`
  - `GROQ_API_KEY`
  - `MISTRAL_API_KEY`
  - `OPENAI_API_KEY`
- **Default order** (generation and—where supported—embedding): Gemini → Groq → Mistral → OpenAI. Only providers with keys are used. On rate limits, quota, or similar retryable errors, the client moves to the next provider in the chain.
- **`LLM_PROVIDER_ORDER`**: optional comma-separated override, e.g. `gemini,mistral,openai`.
- **`LLM_PROVIDER`**: if `LLM_PROVIDER_ORDER` is not set, this provider is tried **first** (must be one of `gemini`, `groq`, `mistral`, `openai`), then the rest of the default order.
- **Embeddings**: Groq is **not** used for embeddings (no embedding path in this pipeline). Embeddings use, in order: Gemini → Mistral (`mistral-embed` by default, override with `MISTRAL_EMBED_MODEL`) → OpenAI.
- **Generation models** (optional overrides):
  - `GEMINI_GEN_MODEL` (default `gemini-2.0-flash`)
  - `GROQ_GEN_MODEL` (default `llama-3.3-70b-versatile`)
  - `MISTRAL_GEN_MODEL` (default `mistral-small-latest`)
  - `OPENAI_GEN_MODEL` (default `gpt-4.1-mini`)
- **`LLM_MAX_OUTPUT_TOKENS`** (or **`GEMINI_MAX_OUTPUT_TOKENS`**): ceiling for generated JSON per request (default **8192**, compatible with Groq/Mistral). Each **chapter body** is a separate call; for heavier chapters on Gemini/OpenAI try **16384**.
- **`COURSE_OUTLINE_RAG_TOP_K`**: merged unique chunks for the **outline** LLM call (default **20**, cap **40**). Lower this if **Groq** rejects the request (TPM / “request too large” on free tier ~12k tokens per request).
- **`COURSE_OUTLINE_CHUNK_CHARS`**: max characters of each chunk body in the outline prompt (default **2200**); longer chunks are clipped with `…[truncated]`.
- **`COURSE_CHAPTER_RAG_TOP_K`**: chunks per **chapter** (default **14**, cap **32**). Increase for Gemini/Mistral with headroom; decrease if Groq fallback still hits TPM limits.
- **`COURSE_CHAPTER_CHUNK_CHARS`**: per-chunk clip for chapter expansion (default **4500**).
- **Groq limits**: If Gemini returns 429 and Groq returns **413** / “request too large”, the client now **falls through** to Mistral/OpenAI when configured. You can also shrink the `COURSE_*` settings above instead of upgrading Groq tier.
- **Embedding checkpoint dimensions**: if you resume `rag:welder:embed` from `output/corpus.embedded.json`, new vectors must match the **length** of existing vectors (same provider/model). Otherwise delete the embedded corpus and re-embed, or stay on one embedding backend.
- Source manifest configured in `source-manifest.json`

## Run

From `server/`:

```bash
npm run rag:welder:build
npm run rag:welder:embed
npm run rag:welder:generate
npm run rag:welder:generate-until-done
npm run rag:welder:validate-questions
npm run rag:welder:promote-questions
```

Optional question count override:

```bash
QUESTION_COUNT=125 npm run rag:welder:generate
```

PowerShell:

```powershell
$env:QUESTION_COUNT=125; npm run rag:welder:generate
```

Provider examples (PowerShell):

```powershell
# Prefer Gemini first; fall back automatically when keys exist for other providers
$env:GEMINI_API_KEY="..."; $env:GROQ_API_KEY="..."; $env:MISTRAL_API_KEY="..."; npm run rag:welder:embed

# Custom order (embed step skips Groq)
$env:LLM_PROVIDER_ORDER="mistral,gemini,openai"; npm run rag:welder:embed
```

Recommended Gemini embedding model:

```powershell
$env:GEMINI_EMBED_MODEL="gemini-embedding-001"
```

Embedding checkpoint/resume:

- `rag:welder:embed` writes checkpoint progress to `output/corpus.embedded.json` after each batch.
- If the process stops (quota/rate-limit/network), rerun the same command and it resumes from already embedded chunks.

Generation checkpoint/resume + retry runner:

- `rag:welder:generate` checkpoints progress into:
  - `output/welderCourse.checkpoint.json` (**chapter-by-chapter**: `courseGenVersion` **2** — outline first, then each chapter’s `sections` + `sourceChunkIds`, resumable via `nextChapterIndex`)
  - `output/welderQuestions.checkpoint.json`
- If generation stops mid-way, rerun `rag:welder:generate`: the course resumes after the last completed chapter; questions resume per-topic batches as before.
- Older checkpoints **without** `courseGenVersion` are treated as a finished **legacy** one-shot course and are not re-expanded. Delete `welderCourse.checkpoint.json` to run the new pipeline from scratch.
- To auto-retry every 2 minutes until finished:

```powershell
$env:GENERATE_RETRY_MS=120000; npm run rag:welder:generate-until-done
```

Optional: reduce per-call size to help with RPM limits:

```powershell
$env:QUESTION_BATCH_SIZE=5; npm run rag:welder:generate-until-done
```

## Output

Generated files are written to:

- `server/scripts/rag/welder/output/welderCourse.generated.js`
- `server/scripts/rag/welder/output/welderQuestions.generated.js`
- `server/scripts/rag/welder/output/welderGenerationReport.json`

## Notes

- Welder **course** progress lives in `output/welderCourse.checkpoint.json`. Delete it to **restart** from a new outline (including when moving off a legacy one-shot checkpoint). If `courseGenVersion` is **2**, a normal rerun **resumes** the next unfinished chapter.
- Generated content is a draft and requires human review before publishing.
- Question objects include `citations` to keep a source trail.
- Promotion command writes and wires production files automatically:
  - `server/scripts/practiceQuestions/welder.js`
  - updates `server/scripts/practiceQuestions/index.js`
  - updates `server/scripts/practiceQuestions/tradeTopics.js`
- Validation command writes:
  - `server/scripts/rag/welder/output/welderQuestions.validationReport.json`
  - fails if schema-critical errors are found
- If your generated questions file is in a custom location, set:
  - PowerShell: `$env:WELDER_QUESTIONS_INPUT="C:/path/to/welderQuestions.generated.js"`
