# Practice questions by trade

Questions are split by trade for easier editing:

- **carpenter.js** — Carpenter (403A)
- **constructionElectrician.js** — Construction Electrician (309A)
- **plumber.js** — Plumber (306A)
- **hairstylist.js** — Hairstylist (332A)

**To add or edit questions:** edit the corresponding `.js` file in this folder. Each file exports a default array of question objects with:

- `tradeSlug` — same as filename (e.g. `'carpenter'`)
- `topicId` — e.g. `'A'`, `'B'`, or trade-specific (e.g. `'mwa-b-protection'`)
- `topicLabel` — human-readable topic (optional; filled from `tradeTopics.js` if missing)
- `question` — question text
- `options` — array of 4 option strings
- `correctIndex` — 0–3
- `explanation` — answer explanation
- `order` — (optional) for ordering

**tradeTopics.js** — Topic IDs and titles per trade (used to fill `topicLabel` when missing).

**index.js** — Merges all per-trade arrays and exports `QUESTIONS` and `getTopicLabel` for the seed script.

After editing, run the seed from the server directory:

```bash
cd server
DROP=1 node scripts/seedPracticeQuestions.js
```

(`DROP=1` replaces existing questions; omit to skip seeding if the DB already has questions.)
