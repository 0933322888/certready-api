import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { embedText, generateJson as llmGenerateJson, getProviderChain } from "../lib/llmClient.js";
import { cosineSimilarity } from "../lib/chunking.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inPath = path.join(__dirname, "output", "corpus.embedded.json");
const outDir = path.join(__dirname, "output");
const courseCheckpointPath = path.join(outDir, "welderCourse.checkpoint.json");
const questionsCheckpointPath = path.join(outDir, "welderQuestions.checkpoint.json");

const TOPICS = [
  { id: "A", title: "Performs Common Occupational Skills", weight: 0.16 },
  { id: "B", title: "Performs layout and fabrication of components for welding", weight: 0.22 },
  { id: "C", title: "Performs cutting and gouging", weight: 0.18 },
  { id: "D", title: "Performs welding processes", weight: 0.44 },
];

/** Outline only: parts + chapter metadata (no sections). Built in phase 1. */
const COURSE_OUTLINE_SCHEMA_HINT = `{
  "meta": {
    "trade": "Welder",
    "redSealCode": "456A",
    "totalExamQuestions": 125,
    "version": "2025"
  },
  "parts": [
    {
      "id": "part-1",
      "number": 1,
      "title": "string",
      "description": "string",
      "weight": "16% of Total Exam",
      "chapters": [
        {
          "id": "ch-1",
          "number": 1,
          "title": "string",
          "subtitle": "string",
          "isFree": true,
          "estimatedMinutes": 30
        }
      ]
    }
  ]
}`;

const CHAPTER_BODY_SCHEMA_HINT = `{
  "sourceChunkIds": ["id-from-context-only"],
  "sections": [
    {
      "id": "ch1-s1",
      "title": "string",
      "content": [
        { "type": "paragraph", "text": "string" },
        { "type": "bullets", "title": "string", "items": ["string"] },
        { "type": "keyTerm", "term": "string", "definition": "string" },
        { "type": "table", "headers": ["string"], "rows": [["string"]] },
        { "type": "infoBox", "title": "string", "items": ["string"] }
      ]
    }
  ]
}`;

function toJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    const cleaned = value.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
    return JSON.parse(cleaned);
  }
}

async function embedQuery(query) {
  return embedText(query);
}

async function generateJson(prompt, temperature) {
  const text = await llmGenerateJson(prompt, temperature);
  return toJson(text);
}

async function readJsonIfExists(filePath) {
  try {
    const raw = await readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err?.code === "ENOENT") return null;
    throw err;
  }
}

async function writeJson(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function retrieveTopK(chunks, queryEmbedding, k = 8, sourceFilter = null) {
  const scored = chunks
    .filter((c) => Array.isArray(c.embedding) && (!sourceFilter || sourceFilter(c)))
    .map((c) => ({ chunk: c, score: cosineSimilarity(queryEmbedding, c.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
  return scored.map((s) => s.chunk);
}

function clipChunkText(text, maxChars) {
  if (text == null) return "";
  const s = String(text);
  if (!maxChars || maxChars <= 0 || s.length <= maxChars) return s;
  return `${s.slice(0, maxChars)}\n…[truncated]`;
}

/** Build multi-query RAG list; use smaller caps for outline to stay under Groq ~12k TPM per request. */
async function retrieveCourseChunksMerged(chunks, envKey, defaultCap, hardMax) {
  const maxTotal = Number(process.env[envKey] ?? defaultCap);
  const cap = Number.isFinite(maxTotal) && maxTotal > 0 ? Math.min(hardMax, Math.floor(maxTotal)) : defaultCap;
  const queries = [
    "Welder Red Seal course outline with MWA A B C D chapters",
    "Welder occupational skills tools equipment safety material handling access WHMIS",
    "Welder layout fabrication cutting gouging oxy-fuel grinding welding SMAW GMAW GTAW FCAW WPS",
  ];
  const perQuery = Math.max(6, Math.ceil(cap / queries.length));
  const seen = new Set();
  const merged = [];
  for (const qtext of queries) {
    const emb = await embedText(qtext);
    for (const c of retrieveTopK(chunks, emb, perQuery)) {
      const id = String(c.id);
      if (seen.has(id)) continue;
      seen.add(id);
      merged.push(c);
      if (merged.length >= cap) return merged;
    }
  }
  return merged;
}

/** Tighter RAG + truncation for course outline (fits Gemini + smaller tier Groq TPM). */
async function retrieveCourseOutlineChunks(chunks) {
  return retrieveCourseChunksMerged(chunks, "COURSE_OUTLINE_RAG_TOP_K", 20, 40);
}

function outlineContextFromChunks(courseChunks) {
  const maxChars = Number(process.env.COURSE_OUTLINE_CHUNK_CHARS || 2200);
  const perChunkCap = Number.isFinite(maxChars) && maxChars > 200 ? Math.min(12000, maxChars) : 2200;
  return courseChunks.map((c) => `(${c.id}) ${clipChunkText(c.content, perChunkCap)}`).join("\n\n---\n\n");
}

function chapterContextFromChunks(chapterChunks) {
  const maxChars = Number(process.env.COURSE_CHAPTER_CHUNK_CHARS || 4500);
  const perChunkCap = Number.isFinite(maxChars) && maxChars > 200 ? Math.min(16000, maxChars) : 4500;
  return chapterChunks.map((c) => `(${c.id}) ${clipChunkText(c.content, perChunkCap)}`).join("\n\n---\n\n");
}

function distributeCounts(total) {
  let remaining = total;
  const out = TOPICS.map((t, idx) => {
    if (idx === TOPICS.length - 1) return { ...t, count: remaining };
    const count = Math.round(total * t.weight);
    remaining -= count;
    return { ...t, count };
  });
  return out;
}

function normalizeOutlineCourse(course) {
  if (!course?.meta || !Array.isArray(course.parts)) throw new Error("Invalid course outline: missing meta or parts");
  for (const part of course.parts) {
    if (!Array.isArray(part.chapters)) part.chapters = [];
    for (const ch of part.chapters) {
      if (!Array.isArray(ch.sections)) ch.sections = [];
    }
  }
  return course;
}

function buildFlatChapterPlan(course) {
  const plan = [];
  course.parts.forEach((part, partIndex) => {
    (part.chapters || []).forEach((ch, chapterIndex) => {
      plan.push({ partIndex, chapterIndex });
    });
  });
  return plan;
}

function chapterNeedsExpansion(ch) {
  const secs = ch.sections || [];
  if (secs.length < 3) return true;
  let blocks = 0;
  for (const s of secs) blocks += (s.content || []).length;
  return blocks < 12;
}

function filterSourceChunkIds(ids, validSet) {
  return [...new Set((ids || []).map((id) => String(id)).filter((id) => validSet.has(id)))];
}

async function retrieveChapterChunks(chunks, queryText) {
  const k = Number(process.env.COURSE_CHAPTER_RAG_TOP_K || 14);
  const cap = Number.isFinite(k) && k > 0 ? Math.min(32, Math.floor(k)) : 14;
  const emb = await embedText(queryText);
  return retrieveTopK(chunks, emb, cap);
}

async function generateCourseOutline(chunks) {
  const courseChunks = await retrieveCourseOutlineChunks(chunks);
  console.log(
    `Course outline RAG: ${courseChunks.length} chunks (COURSE_OUTLINE_RAG_TOP_K / COURSE_OUTLINE_CHUNK_CHARS)`
  );
  const validIds = new Set(courseChunks.map((c) => String(c.id)));
  const context = outlineContextFromChunks(courseChunks);
  const prompt = `
You are a senior Red Seal instructional designer. Produce a Welder exam-prep course OUTLINE only (metadata + chapter titles). Full lesson text comes in a later step.

TASK:
Return JSON with exactly these top-level keys: meta, parts.

OUTPUT SHAPE (meta + parts with chapters that have ONLY the fields shown — no "sections" key):
${COURSE_OUTLINE_SCHEMA_HINT}

HARD REQUIREMENTS:
1) Use only facts supported by CONTEXT for titles/descriptions (no invented regulations or exam logistics).
2) Exactly 4 parts aligned to MWA A–D with weights exactly: "16% of Total Exam", "22% of Total Exam", "18% of Total Exam", "44% of Total Exam" (in that order for parts 1–4).
3) Each part: at least 2 chapters; prefer 3 chapters when CONTEXT clearly separates distinct tasks.
4) Chapter ids unique and stable (e.g. ch-1, ch-2, … across the whole course).
5) Each chapter: id, number, title, subtitle (may reference task codes from CONTEXT), isFree (first chapter of each part true, others false), estimatedMinutes (10–90, integer).
6) Part titles/descriptions must reflect Welder RSOS / Red Seal scope from CONTEXT.
7) Do not include sections, sourceChunkIds, or lesson content in this JSON.

VALID CHUNK IDS (sample): ${[...validIds].slice(0, 40).join(", ")}${validIds.size > 40 ? ", …" : ""}

CONTEXT CHUNKS:
${context}
`;
  const raw = await generateJson(prompt, 0.2);
  return normalizeOutlineCourse(raw);
}

async function expandOneChapter(chunks, course, partIndex, chapterIndex) {
  const part = course.parts[partIndex];
  const ch = part.chapters[chapterIndex];
  const mwa = TOPICS[partIndex];
  const query = `Welder Red Seal 456A ${mwa.id} ${mwa.title}. ${part.title}. Chapter: ${ch.title}. ${ch.subtitle || ""} equipment safety procedures inspection`;
  const chapterChunks = await retrieveChapterChunks(chunks, query);
  const validIds = new Set(chapterChunks.map((c) => String(c.id)));
  const context = chapterContextFromChunks(chapterChunks);
  const sectionIdPrefix = String(ch.id).replace(/\s+/g, "");

  const prompt = `
You are a senior Red Seal instructional designer writing ONE chapter of exam-prep content.

FIXED CHAPTER METADATA (do not change these fields; do not return them — only return sourceChunkIds + sections):
${JSON.stringify(
    {
      id: ch.id,
      number: ch.number,
      title: ch.title,
      subtitle: ch.subtitle,
      isFree: ch.isFree,
      estimatedMinutes: ch.estimatedMinutes,
    },
    null,
    2
  )}

PART: ${part.title} — ${part.weight}
MWA: ${mwa.id} — ${mwa.title}

TASK:
Return JSON ONLY with keys: sourceChunkIds, sections.

SHAPE:
${CHAPTER_BODY_SCHEMA_HINT}

RELEVANCE (critical):
- Every paragraph, bullet, table row, and definition must be justified by CONTEXT below. If CONTEXT lacks detail on a point, omit it rather than inventing.
- sourceChunkIds: non-empty array of chunk ids that best support this chapter; every id MUST appear in CONTEXT headers like "(id)".

DEPTH:
- At least 3 sections; unique section "id" values prefixed with "${sectionIdPrefix}-s1", "${sectionIdPrefix}-s2", …
- Each section: at least 4 content blocks; mix types (not bullets-only).
- Paragraphs: 3–6 sentences, concrete, technician-level.
- Bullet lists: at least 5 items when CONTEXT supports it.
- At least one table OR infoBox in this chapter if CONTEXT includes procedures, equipment, hazards, or comparisons.

Allowed content types only: paragraph, bullets, keyTerm, table, infoBox.

CONTEXT CHUNKS:
${context}
`;
  const body = await generateJson(prompt, 0.25);
  let sourceChunkIds = filterSourceChunkIds(body.sourceChunkIds, validIds);
  if (!sourceChunkIds.length) {
    sourceChunkIds = chapterChunks.slice(0, Math.min(5, chapterChunks.length)).map((c) => String(c.id));
    console.warn(`Chapter ${ch.id}: model cited no valid chunk ids; falling back to top retrieval ids.`);
  }
  const sections = Array.isArray(body.sections) ? body.sections : [];
  return { sourceChunkIds, sections };
}

async function generateCourse(chunks) {
  const existing = await readJsonIfExists(courseCheckpointPath);

  // Legacy: one-shot course checkpoint (no version) — keep as-is.
  if (existing?.course && existing.courseGenVersion !== 2) {
    return existing.course;
  }

  let course;
  let nextChapterIndex = 0;

  if (existing?.courseGenVersion === 2 && existing.course) {
    course = normalizeOutlineCourse(JSON.parse(JSON.stringify(existing.course)));
    nextChapterIndex = Number(existing.nextChapterIndex) || 0;
    console.log(`Resuming chapter-by-chapter course from index ${nextChapterIndex}`);
  } else {
    course = await generateCourseOutline(chunks);
    await writeJson(courseCheckpointPath, {
      courseGenVersion: 2,
      generatedAt: new Date().toISOString(),
      course,
      nextChapterIndex: 0,
    });
    console.log("Course outline saved; expanding chapters…");
  }

  const flatPlan = buildFlatChapterPlan(course);
  if (!flatPlan.length) throw new Error("Course outline has no chapters");

  while (nextChapterIndex < flatPlan.length) {
    const { partIndex, chapterIndex } = flatPlan[nextChapterIndex];
    const ch = course.parts[partIndex].chapters[chapterIndex];
    if (!chapterNeedsExpansion(ch)) {
      nextChapterIndex += 1;
      await writeJson(courseCheckpointPath, {
        courseGenVersion: 2,
        generatedAt: new Date().toISOString(),
        course,
        nextChapterIndex,
      });
      continue;
    }

    console.log(`Generating chapter ${nextChapterIndex + 1}/${flatPlan.length}: ${ch.id} — ${ch.title}`);
    const { sourceChunkIds, sections } = await expandOneChapter(chunks, course, partIndex, chapterIndex);
    ch.sourceChunkIds = sourceChunkIds;
    ch.sections = sections;

    nextChapterIndex += 1;
    await writeJson(courseCheckpointPath, {
      courseGenVersion: 2,
      generatedAt: new Date().toISOString(),
      course,
      nextChapterIndex,
    });
  }

  console.log(`Course complete: ${flatPlan.length} chapters (chapter-by-chapter).`);
  return course;
}

async function generateQuestions(chunks, totalQuestions) {
  const batchSize = Number(process.env.QUESTION_BATCH_SIZE || 10);
  const checkpoint = (await readJsonIfExists(questionsCheckpointPath)) || {
    generatedAt: null,
    totalRequested: totalQuestions,
    topics: {},
  };
  checkpoint.generatedAt = checkpoint.generatedAt || new Date().toISOString();
  checkpoint.totalRequested = totalQuestions;

  const allocations = distributeCounts(totalQuestions);
  const all = [];

  for (const topic of allocations) {
    const topicState = checkpoint.topics[topic.id] || { target: topic.count, questions: [] };
    topicState.target = topic.count;
    checkpoint.topics[topic.id] = topicState;

    // Resume per-topic, per-batch generation.
    while (topicState.questions.length < topic.count) {
      const remaining = topic.count - topicState.questions.length;
      const n = Math.min(batchSize, remaining);
      const q = await embedQuery(`Welder ${topic.id} ${topic.title} exam questions`);
      const context = retrieveTopK(chunks, q, 14).map((c) => `(${c.id}) ${c.content}`).join("\n\n");

      const existingStems = topicState.questions
        .map((qq) => String(qq?.question || "").trim())
        .filter(Boolean)
        .slice(-50);

      const prompt = `
You are a Red Seal psychometric item writer for Welder exam prep.

TASK:
Generate exactly ${n} NEW high-quality multiple-choice questions for:
- tradeSlug: "welder"
- topicId: "${topic.id}"
- topicLabel: "${topic.title}"

RETURN FORMAT:
JSON object with key "questions", where value is an array of question objects.

QUESTION OBJECT REQUIRED KEYS:
- tradeSlug (string)
- topicId (string)
- topicLabel (string)
- question (string)
- options (array of exactly 4 strings)
- correctIndex (integer 0-3)
- explanation (string)
- citations (array of 1+ chunk IDs used as evidence)

HARD CONSTRAINTS:
1) Use only provided context; do not invent facts.
2) Exactly one best answer per question.
3) No duplicates or near-duplicates.
4) Do not use "all of the above" or "none of the above".
5) Avoid trick wording and ambiguous stems.
6) Distractors must be plausible and same category as correct answer.
7) Explanations must justify the correct answer and briefly state why other options are less correct.
8) Each question must include citations with valid chunk IDs from context.
9) If evidence is insufficient, skip that idea and write another question.

TARGET DIFFICULTY MIX:
- 40% foundational recall/understanding
- 45% applied scenario-based
- 15% troubleshooting/analysis

SELF-CHECK BEFORE FINAL JSON:
- Count is exactly ${n}
- Every item has 4 options and valid correctIndex
- No unsupported claims without citation
- No repeated stem concepts

DO NOT DUPLICATE THESE EXISTING QUESTION STEMS (avoid near-duplicates too):
${existingStems.map((s) => `- ${s}`).join("\n") || "- (none)"}

CONTEXT CHUNKS:
${context}
`;
      const parsed = await generateJson(prompt, 0.3);
      const list = Array.isArray(parsed) ? parsed : parsed.questions || [];

      // Append and checkpoint immediately.
      topicState.questions.push(...list);
      await writeJson(questionsCheckpointPath, checkpoint);
      console.log(`Generated ${list.length} questions for ${topic.id} (${topicState.questions.length}/${topic.count})`);

      // Safety: if model returns empty list repeatedly, avoid infinite loop.
      if (list.length === 0) break;
    }
  }

  // Flatten in stable order A->D, preserving within-topic order.
  for (const topic of allocations) {
    const topicState = checkpoint.topics[topic.id];
    if (topicState?.questions?.length) all.push(...topicState.questions.slice(0, topic.count));
  }
  return all;
}

function toJsModule(name, data) {
  return `export const ${name} = ${JSON.stringify(data, null, 2)};\n`;
}

function toQuestionsModule(data) {
  return `/**
 * Auto-generated welder practice questions (RAG draft).
 * Review before production use.
 */
export default ${JSON.stringify(data, null, 2)};\n`;
}

async function run() {
  console.log(`Generation provider chain: ${getProviderChain().join(" > ")}`);
  const desired = Number(process.env.QUESTION_COUNT || 40);
  const corpus = JSON.parse(await readFile(inPath, "utf-8"));
  const chunks = corpus.chunks || [];
  if (!chunks.length) throw new Error("No embedded chunks found. Run embedCorpus first.");

  await mkdir(outDir, { recursive: true });

  const course = await generateCourse(chunks);
  const questions = await generateQuestions(chunks, desired);

  await writeFile(path.join(outDir, "welderCourse.generated.js"), toJsModule("welderCourseGenerated", course), "utf-8");
  await writeFile(path.join(outDir, "welderQuestions.generated.js"), toQuestionsModule(questions), "utf-8");
  await writeFile(
    path.join(outDir, "welderGenerationReport.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        questionCount: questions.length,
        requestedQuestionCount: desired,
        done: Boolean(course) && questions.length === desired,
      },
      null,
      2
    ),
    "utf-8"
  );

  console.log("Generated output:");
  console.log("- output/welderCourse.generated.js");
  console.log("- output/welderQuestions.generated.js");
  console.log("- output/welderGenerationReport.json");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
