import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serverScriptsDir = path.resolve(__dirname, "..", "..");
const practiceDir = path.join(serverScriptsDir, "practiceQuestions");

const inputPath =
  process.env.WELDER_QUESTIONS_INPUT ||
  path.join(__dirname, "output", "welderQuestions.generated.js");

const welderTopics = [
  { id: "A", title: "Performs Common Occupational Skills" },
  { id: "B", title: "Performs Layout and Fabrication of Components for Welding" },
  { id: "C", title: "Performs Cutting and Gouging" },
  { id: "D", title: "Performs Welding Processes" },
];

function parseGeneratedQuestions(jsContent) {
  const idx = jsContent.indexOf("export default");
  if (idx === -1) throw new Error("Input file does not contain `export default`");
  const arrayPart = jsContent.slice(idx + "export default".length).trim().replace(/;\s*$/, "");
  return JSON.parse(arrayPart);
}

function sanitizeQuestions(raw) {
  return raw
    .filter((q) => q && typeof q === "object")
    .map((q, i) => ({
      tradeSlug: "welder",
      topicId: String(q.topicId || "A"),
      topicLabel: String(q.topicLabel || "Performs Common Occupational Skills"),
      question: String(q.question || "").trim(),
      options: Array.isArray(q.options) ? q.options.slice(0, 4).map((o) => String(o)) : [],
      correctIndex: Number.isInteger(q.correctIndex) ? q.correctIndex : 0,
      explanation: String(q.explanation || "").trim(),
      order: Number.isInteger(q.order) ? q.order : i,
    }))
    .filter((q) => q.question && q.options.length === 4 && q.correctIndex >= 0 && q.correctIndex <= 3);
}

function renderQuestionsModule(questions) {
  return `/**
 * Practice questions for welder.
 * Generated from reviewed RAG output; run seedPracticeQuestions.js to seed DB.
 */

export default ${JSON.stringify(questions, null, 2)};
`;
}

function upsertImportAndSpread(indexContent) {
  let out = indexContent;
  if (!out.includes("import welderQuestions from './welder.js';")) {
    out = out.replace(
      "import hvacQuestions from './hvac.js';",
      "import hvacQuestions from './hvac.js';\nimport welderQuestions from './welder.js';"
    );
  }
  if (!out.includes("...welderQuestions")) {
    out = out.replace("  ...hvacQuestions,", "  ...hvacQuestions,\n  ...welderQuestions,");
  }
  return out;
}

function upsertTradeTopics(topicsContent) {
  if (topicsContent.includes("welder: [")) return topicsContent;
  const block = `  welder: [
    { id: 'A', title: 'Performs Common Occupational Skills' },
    { id: 'B', title: 'Performs Layout and Fabrication of Components for Welding' },
    { id: 'C', title: 'Performs Cutting and Gouging' },
    { id: 'D', title: 'Performs Welding Processes' },
  ],
`;
  return topicsContent.replace("export const TRADE_TOPICS = {\n", `export const TRADE_TOPICS = {\n${block}`);
}

async function run() {
  const generated = await readFile(inputPath, "utf-8");
  const rawQuestions = parseGeneratedQuestions(generated);
  const questions = sanitizeQuestions(rawQuestions);
  if (!questions.length) {
    throw new Error("No valid questions to promote after sanitization.");
  }

  const welderPath = path.join(practiceDir, "welder.js");
  await writeFile(welderPath, renderQuestionsModule(questions), "utf-8");

  const indexPath = path.join(practiceDir, "index.js");
  const indexContent = await readFile(indexPath, "utf-8");
  await writeFile(indexPath, upsertImportAndSpread(indexContent), "utf-8");

  const topicsPath = path.join(practiceDir, "tradeTopics.js");
  const topicsContent = await readFile(topicsPath, "utf-8");
  await writeFile(topicsPath, upsertTradeTopics(topicsContent), "utf-8");

  const topicCounts = welderTopics.map((t) => ({
    id: t.id,
    count: questions.filter((q) => q.topicId === t.id).length,
  }));

  console.log(`Promoted ${questions.length} welder questions.`);
  topicCounts.forEach((t) => console.log(`- ${t.id}: ${t.count}`));
  console.log("Updated files:");
  console.log("- server/scripts/practiceQuestions/welder.js");
  console.log("- server/scripts/practiceQuestions/index.js");
  console.log("- server/scripts/practiceQuestions/tradeTopics.js");
}

run().catch((err) => {
  if (err?.code === "ENOENT") {
    console.error(`Input file not found: ${inputPath}`);
    console.error("Run rag:welder:generate first or set WELDER_QUESTIONS_INPUT to a valid file path.");
  } else {
    console.error(err.message || err);
  }
  process.exit(1);
});
