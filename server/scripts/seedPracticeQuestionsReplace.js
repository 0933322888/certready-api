/**
 * Force-reseed practice questions by enabling DROP mode.
 * This wrapper is cross-platform (works on Windows/macOS/Linux).
 */
process.env.DROP = '1';
await import('./seedPracticeQuestions.js');
