/**
 * One-time script: loads practice questions from client course files and writes
 * the QUESTIONS array to seedPracticeQuestions.js so all questions live in one place.
 * Run from server directory: node scripts/extractPracticeQuestionsToSeed.js
 */

import { readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '../..');
const base = join(projectRoot, 'client/src/data');

const elecMod = await import(pathToFileURL(join(base, 'constructionElectrician.js')).href);
const plumberMod = await import(pathToFileURL(join(base, 'plumberCourse.js')).href);
const hairMod = await import(pathToFileURL(join(base, 'hairstylistCourse.js')).href);

const electricianCourse = elecMod.default;
const plumberCourse = plumberMod.default;
const hairstylistCourse = hairMod.hairstylistCourse;

const MWA_ELECTRICIAN = ['A', 'B', 'C', 'D', 'E', 'F'];
const MWA_PLUMBER = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const MWA_HAIRSTYLIST = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function normalizeQuestion(q, tradeSlug, topicId, topicLabel) {
  const correctIndex = q.correctIndex ?? q.correct ?? 0;
  return {
    tradeSlug,
    topicId,
    topicLabel,
    question: q.question || '',
    options: Array.isArray(q.options) ? q.options : [],
    correctIndex: typeof correctIndex === 'number' ? correctIndex : 0,
    explanation: q.explanation || '',
  };
}

const questions = [];

electricianCourse.parts.forEach((part, partIndex) => {
  const topicId = MWA_ELECTRICIAN[partIndex] || 'A';
  const topicLabel = part.title || `Part ${partIndex + 1}`;
  (part.chapters || []).forEach((ch) => {
    (ch.practiceQuestions || []).forEach((q) => {
      questions.push(normalizeQuestion(q, 'construction-electrician', topicId, topicLabel));
    });
  });
});

plumberCourse.parts.forEach((part, partIndex) => {
  const topicId = MWA_PLUMBER[partIndex] || 'A';
  const topicLabel = part.title || `Part ${partIndex + 1}`;
  (part.chapters || []).forEach((ch) => {
    (ch.practiceQuestions || []).forEach((q) => {
      questions.push(normalizeQuestion(q, 'plumber', topicId, topicLabel));
    });
  });
});

hairstylistCourse.parts.forEach((part, partIndex) => {
  const topicId = MWA_HAIRSTYLIST[partIndex] || 'A';
  const topicLabel = part.title || `Part ${partIndex + 1}`;
  (part.chapters || []).forEach((ch) => {
    (ch.practiceQuestions || []).forEach((q) => {
      questions.push(normalizeQuestion(q, 'hairstylist', topicId, topicLabel));
    });
  });
});

const seedPath = join(__dirname, 'seedPracticeQuestions.js');
let seedContent = await readFile(seedPath, 'utf-8');

function escapeForJS(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

function formatQuestion(q) {
  const question = escapeForJS(q.question);
  const explanation = escapeForJS(q.explanation);
  const options = q.options.map((o) => `'${escapeForJS(o)}'`).join(', ');
  return `  {
    tradeSlug: '${q.tradeSlug}',
    topicId: '${q.topicId}',
    topicLabel: '${q.topicLabel.replace(/'/g, "\\'")}',
    question: '${question}',
    options: [${options}],
    correctIndex: ${q.correctIndex},
    explanation: '${explanation}',
  }`;
}

const questionsBlock = 'const QUESTIONS = [\n' + questions.map(formatQuestion).join(',\n') + '\n];';

const startMarker = 'const QUESTIONS = [';
const endMarker = '];';
const startIdx = seedContent.indexOf(startMarker);
if (startIdx === -1) {
  console.error('Could not find QUESTIONS block start in seed file.');
  process.exit(1);
}
const afterStart = seedContent.slice(startIdx);
const endIdxRel = afterStart.indexOf(endMarker);
if (endIdxRel === -1) {
  console.error('Could not find QUESTIONS block end in seed file.');
  process.exit(1);
}
const endIdx = startIdx + endIdxRel + endMarker.length;
const before = seedContent.slice(0, startIdx);
const after = seedContent.slice(endIdx);
seedContent = before + questionsBlock + after;

await writeFile(seedPath, seedContent);
console.log(`Wrote ${questions.length} questions to seedPracticeQuestions.js`);
console.log('  construction-electrician:', questions.filter((q) => q.tradeSlug === 'construction-electrician').length);
console.log('  plumber:', questions.filter((q) => q.tradeSlug === 'plumber').length);
console.log('  hairstylist:', questions.filter((q) => q.tradeSlug === 'hairstylist').length);
