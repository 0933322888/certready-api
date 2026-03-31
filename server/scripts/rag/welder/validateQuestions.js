import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const questionsPath =
  process.env.WELDER_QUESTIONS_INPUT ||
  path.join(__dirname, "output", "welderQuestions.generated.js");
const corpusPath = path.join(__dirname, "output", "corpus.embedded.json");
const reportPath = path.join(__dirname, "output", "welderQuestions.validationReport.json");

const bannedPatterns = [
  /\ball of the above\b/i,
  /\bnone of the above\b/i,
  /\balways\b/i,
  /\bnever\b/i,
];

function parseExportDefaultJson(jsContent) {
  const idx = jsContent.indexOf("export default");
  if (idx === -1) throw new Error("Input does not contain `export default`");
  const raw = jsContent.slice(idx + "export default".length).trim().replace(/;\s*$/, "");
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : parsed.questions || [];
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function validateQuestion(q, index, validChunkIds) {
  const errors = [];
  const warnings = [];

  if (!q || typeof q !== "object") {
    errors.push("Question is not an object");
    return { errors, warnings };
  }
  if (!q.question || typeof q.question !== "string") errors.push("Missing question text");
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push("Options must have exactly 4 entries");
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) errors.push("Invalid correctIndex");
  if (!q.explanation || String(q.explanation).trim().length < 40) warnings.push("Explanation appears too short");
  if (!Array.isArray(q.citations) || q.citations.length < 1) warnings.push("Missing citations");

  if (Array.isArray(q.options)) {
    const cleaned = q.options.map((o) => normalize(o));
    if (cleaned.some((o) => !o)) errors.push("One or more options are empty");
    if (new Set(cleaned).size < 4) warnings.push("Duplicate or near-duplicate options");
  }

  if (typeof q.question === "string") {
    for (const pattern of bannedPatterns) {
      if (pattern.test(q.question)) warnings.push(`Banned pattern in stem: ${pattern}`);
    }
  }

  if (Array.isArray(q.citations)) {
    const bad = q.citations.filter((id) => !validChunkIds.has(String(id)));
    if (bad.length > 0) warnings.push(`Unknown citation ids: ${bad.join(", ")}`);
  }

  return { errors, warnings, index };
}

async function run() {
  const [questionsRaw, corpusRaw] = await Promise.all([
    readFile(questionsPath, "utf-8"),
    readFile(corpusPath, "utf-8"),
  ]);
  const questions = parseExportDefaultJson(questionsRaw);
  const corpus = JSON.parse(corpusRaw);
  const validChunkIds = new Set((corpus.chunks || []).map((c) => String(c.id)));

  if (!questions.length) throw new Error("No questions found to validate");

  const findings = questions.map((q, i) => validateQuestion(q, i, validChunkIds));
  const normalizedStems = questions.map((q) => normalize(q?.question));
  const seen = new Map();
  const duplicates = [];
  normalizedStems.forEach((stem, idx) => {
    if (!stem) return;
    if (seen.has(stem)) duplicates.push([seen.get(stem), idx]);
    else seen.set(stem, idx);
  });

  const errorCount = findings.reduce((sum, f) => sum + f.errors.length, 0);
  const warningCount = findings.reduce((sum, f) => sum + f.warnings.length, 0) + duplicates.length;

  const report = {
    generatedAt: new Date().toISOString(),
    questionCount: questions.length,
    errorCount,
    warningCount,
    duplicateStemPairs: duplicates,
    findings: findings
      .map((f) => ({ index: f.index, errors: f.errors, warnings: f.warnings }))
      .filter((f) => f.errors.length || f.warnings.length),
  };

  await writeFile(reportPath, JSON.stringify(report, null, 2), "utf-8");

  console.log(`Validation report written: ${reportPath}`);
  console.log(`Questions: ${questions.length}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Warnings: ${warningCount}`);

  if (duplicates.length) {
    console.log(`Duplicate stems detected: ${duplicates.length}`);
  }
  if (errorCount > 0) {
    throw new Error("Validation failed with errors. Fix generated output before promotion.");
  }
}

run().catch((err) => {
  if (err?.code === "ENOENT") {
    console.error(`Missing required file. Questions: ${questionsPath} | Corpus: ${corpusPath}`);
    console.error("Run rag:welder:build, rag:welder:embed, rag:welder:generate first.");
  } else {
    console.error(err.message || err);
  }
  process.exit(1);
});
