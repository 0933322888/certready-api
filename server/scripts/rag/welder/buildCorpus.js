import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { PDFParse } from "pdf-parse";
import { chunkText } from "../lib/chunking.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, "output");
const manifestPath = path.join(__dirname, "source-manifest.json");

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

async function readSource(source) {
  if (source.type === "url") {
    const res = await fetch(source.value);
    if (!res.ok) throw new Error(`Failed to fetch ${source.value}: ${res.status}`);
    const html = await res.text();
    return stripHtml(html);
  }
  if (source.type === "pdf") {
    const raw = await readFile(source.value);
    const parser = new PDFParse({ data: raw });
    try {
      const parsed = await parser.getText();
      return String(parsed?.text || "").replace(/\s+\n/g, "\n").trim();
    } finally {
      await parser.destroy();
    }
  }
  throw new Error(`Unsupported source type: ${source.type}`);
}

async function run() {
  const manifest = JSON.parse(await readFile(manifestPath, "utf-8"));
  await mkdir(outDir, { recursive: true });

  const chunks = [];
  const sources = [];

  for (const source of manifest.sources) {
    try {
      const text = await readSource(source);
      const sourceChunks = chunkText(text, { maxChars: 1600, overlap: 220 });
      sourceChunks.forEach((content, idx) => {
        chunks.push({
          id: `${source.id}-c${idx + 1}`,
          sourceId: source.id,
          sourceType: source.type,
          sourceValue: source.value,
          priority: source.priority ?? 5,
          content,
        });
      });
      sources.push({ ...source, status: "ok", chunkCount: sourceChunks.length });
    } catch (err) {
      sources.push({ ...source, status: "error", error: err.message, chunkCount: 0 });
    }
  }

  const out = {
    generatedAt: new Date().toISOString(),
    tradeSlug: manifest.tradeSlug,
    tradeCode: manifest.tradeCode,
    title: manifest.title,
    sources,
    chunks,
  };

  const outPath = path.join(outDir, "corpus.json");
  await writeFile(outPath, JSON.stringify(out, null, 2), "utf-8");

  console.log(`Corpus written: ${outPath}`);
  console.log(`Chunks: ${chunks.length}`);
  const failed = sources.filter((s) => s.status === "error");
  if (failed.length) {
    console.log("Some sources failed:");
    failed.forEach((f) => console.log(`- ${f.id}: ${f.error}`));
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
