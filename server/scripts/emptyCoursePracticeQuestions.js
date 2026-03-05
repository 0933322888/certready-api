/**
 * Empties practiceQuestions in course data files (questions now live in server seed).
 * Run from server: node scripts/emptyCoursePracticeQuestions.js
 */

import { readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '../..');
const clientData = join(projectRoot, 'client/src/data');

const files = [
  'constructionElectrician.js',
  'plumberCourse.js',
  'hairstylistCourse.js',
];

function emptyPracticeQuestions(content) {
  let result = '';
  let i = 0;
  const marker = 'practiceQuestions:';
  while (i < content.length) {
    const idx = content.indexOf(marker, i);
    if (idx === -1) {
      result += content.slice(i);
      break;
    }
    result += content.slice(i, idx + marker.length);
    i = idx + marker.length;
    // skip whitespace
    while (i < content.length && /[\s\n\r]/.test(content[i])) {
      result += content[i];
      i++;
    }
    if (content[i] !== '[') {
      i++;
      continue;
    }
    result += ' []';
    i++;
    let depth = 1;
    while (i < content.length && depth > 0) {
      const c = content[i];
      if (c === '[') depth++;
      else if (c === ']') depth--;
      i++;
    }
  }
  return result;
}

for (const file of files) {
  const path = join(clientData, file);
  const content = await readFile(path, 'utf-8');
  const newContent = emptyPracticeQuestions(content);
  await writeFile(path, newContent);
  console.log('Emptied practiceQuestions in', file);
}

console.log('Done. Course files no longer contain question data; use practice API (seed) for questions.');
