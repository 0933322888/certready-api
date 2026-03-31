import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reportPath = path.join(__dirname, "output", "welderGenerationReport.json");

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function readReport() {
  try {
    const raw = await readFile(reportPath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function runOnce() {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(__dirname, "generateAssets.js")], {
      stdio: "inherit",
      env: process.env,
    });
    child.on("exit", (code) => resolve(code ?? 1));
  });
}

async function main() {
  const intervalMs = Number(process.env.GENERATE_RETRY_MS || 120000);
  const maxAttempts = Number(process.env.GENERATE_MAX_ATTEMPTS || 9999);

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    console.log(`\n=== Generate attempt ${attempt}/${maxAttempts} ===`);
    const code = await runOnce();
    const report = await readReport();

    if (report?.done === true) {
      console.log("Generation completed.");
      process.exit(0);
    }

    console.log(`Generation not complete (exit_code=${code}). Will retry in ${Math.round(intervalMs / 1000)}s.`);
    await sleep(intervalMs);
  }

  console.error("Exceeded max attempts without completing generation.");
  process.exit(1);
}

main().catch((err) => {
  console.error(err?.message || err);
  process.exit(1);
});

