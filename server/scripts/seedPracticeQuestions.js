/**
 * Seed practice questions from per-trade data.
 * Run: node server/scripts/seedPracticeQuestions.js
 * Questions live in practiceQuestions/ (one file per trade). Use DROP=1 to replace existing.
 */

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import connectDB from '../config/db.js';
import PracticeQuestion from '../models/PracticeQuestion.js';
import { QUESTIONS, getTopicLabel } from './practiceQuestions/index.js';

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '../../.env') });
dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '../.env') });

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not set. Create a .env file in the server/ directory with MONGO_URI=mongodb://...');
  process.exit(1);
}

async function run() {
  await connectDB();

  const withTopicLabel = QUESTIONS.map((q) => ({
    ...q,
    topicLabel: q.topicLabel || getTopicLabel(q.tradeSlug, q.topicId),
  }));

  const total = await PracticeQuestion.countDocuments();
  if (total > 0 && process.env.DROP !== '1') {
    console.log(`Practice questions already exist (${total} total). Use DROP=1 to replace.`);
    process.exit(0);
  }
  if (process.env.DROP === '1') {
    await PracticeQuestion.deleteMany({});
    console.log('Dropped existing practice questions.');
  }

  await PracticeQuestion.insertMany(withTopicLabel);
  console.log(`Seeded ${withTopicLabel.length} practice questions.`);

  const counts = await PracticeQuestion.aggregate([
    { $group: { _id: '$tradeSlug', count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  counts.forEach((c) => console.log(`  ${c._id}: ${c.count} questions`));

  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
