import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Course from '../models/Course.js';
import { seedCourses } from '../data/seedCourses.js';

dotenv.config();

function parseSlugArg(argv) {
  const byEquals = argv.find((arg) => arg.startsWith('--slug='));
  if (byEquals) return byEquals.slice('--slug='.length).trim();

  const slugIndex = argv.findIndex((arg) => arg === '--slug');
  if (slugIndex !== -1 && argv[slugIndex + 1]) {
    return String(argv[slugIndex + 1]).trim();
  }

  return '';
}

async function run() {
  const slug = parseSlugArg(process.argv.slice(2));
  if (!slug) {
    console.error('Missing required argument: --slug <course-slug>');
    console.error('Example: npm run seed:course -- --slug welder-456a');
    process.exit(1);
  }

  const courseData = seedCourses.find((course) => course.slug === slug);
  if (!courseData) {
    console.error(`No seeded course found for slug "${slug}".`);
    console.error('Available slugs:');
    for (const course of seedCourses) {
      console.error(`- ${course.slug}`);
    }
    process.exit(1);
  }

  await connectDB();

  try {
    const existing = await Course.findOne({ slug }).select('_id').lean();
    await Course.findOneAndUpdate(
      { slug },
      { $set: courseData },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log(existing ? `Updated course: ${slug}` : `Created course: ${slug}`);
  } catch (error) {
    console.error('Failed to upsert course:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

run();
