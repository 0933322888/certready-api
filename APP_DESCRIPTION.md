# CertReady — Web App Description

**CertReady** (also referenced as **TradePrep** in the repo) is an exam preparation platform for **Skilled Trades Ontario** and **Red Seal** certification candidates in Canada. The app helps tradespeople (e.g. Electricians, Plumbers, Hairstylists) prepare for their Red Seal interprovincial exams through structured courses, practice questions, mock exams, study plans, and educational content.

---

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 18, Vite, Tailwind CSS        |
| Backend  | Node.js, Express                    |
| Database | MongoDB                             |
| Auth     | JWT, optional Google OAuth          |
| Payments | Stripe Checkout                     |
| i18n     | react-i18next                       |

---

## Features

### Public (no login)

- **Home** — Hero carousel, stats (chapters, questions, hours, pass mark), “How it works,” course preview, features, testimonials, pricing, FAQ.
- **Red Seal Exam overview** — Informational page about the Red Seal exam with links to trades, readiness test, practice tests, and guides.
- **Red Seal Readiness Test** — Free timed quiz (≈20% of full exam duration) by trade; choose trade, answer questions, see results with score and topic breakdown (strong/weak areas). No account required.
- **Trades listing** — List of supported trades (e.g. Hairstylist, Plumber, Construction Electrician) with links to trade-specific pages.
- **Trade pages (two types)**  
  - **Course/purchase page** (`/trades/:tradeSlug` e.g. `/trades/construction-electrician`) — Course info, pricing, purchase via Stripe, CTA to buy or preview.  
  - **Trade guide page** (`/trades/:tradeSlug-red-seal` e.g. `/trades/construction-electrician-red-seal`) — SEO-oriented guide content (exam format, weighting, FAQs, study tips) for that trade.
- **Practice tests hub** — List of practice tests by trade with links to practice mode and mock exam.
- **Practice by trade** (`/practice-tests/:tradeSlug`) — Start a practice session (e.g. 20 questions), answer with immediate feedback, session saved in `localStorage`; topic stats and strong/weak areas on completion.
- **Mock exam** (`/practice-tests/:tradeSlug/mock-exam`) — Timed full-length (or near full-length) exam simulation with question count and duration per trade; mark for review, submit to see score and topic breakdown.
- **Free practice landing pages** — SEO landing pages for electrician, plumber, and hairstylist Red Seal practice questions (e.g. `/electrician-red-seal-practice-questions`).
- **Guides** — Index of guides plus per-slug guide articles (e.g. how to pass Red Seal, exam format, cost, trade-specific guides from `tradeGuides.js`).
- **Blog** — Blog index and individual posts: “How to Pass the Red Seal Exam,” “How Hard Is the Red Seal Exam,” “Red Seal Exam Format,” “Red Seal Exam Cost.”
- **Learn (preview)** — First 2 chapters of each course are free; `/learn/:slug` shows course content with chapter sidebar. Locked chapters require purchase.
- **About, Contact, Terms, Privacy** — Static/legal and contact (form posts to API).
- **Auth flows** — Login, Register, Forgot password, Reset password; optional Google Sign-In.

### Protected (login required)

- **Dashboard** — Welcome message, **study plans** (create by trade + exam date, daily/weekly plan, mark items complete, delete plan), **My Courses** (purchased courses with progress and “Continue learning”), **Progress summary** (chapters completed, overall progress %, practice questions count).
- **Profile** — User profile management (likely name/email; backend supports `PUT /api/users/profile`).
- **Full course access** — After purchase, all chapters on `/learn/:slug` are unlocked; progress (last chapter, completed chapters) is tracked (e.g. via `localStorage` and/or backend).
- **Checkout** — Stripe Checkout success (`/checkout/success`) and cancel (`/checkout/cancel`) pages.

### Payments & backend

- **Stripe** — Create checkout session, promo validation, webhook for fulfillment; purchase history stored for user.
- **Study plans API** — CRUD for study plans; generate plan by course slug and exam date; toggle item completion.
- **Practice API** — Questions by trade, readiness questions, topics, count (optional auth for extended access).
- **Courses API** — List courses, course by slug, access check, sitemap.
- **Auth API** — Register, login, Google, forgot/reset password, change password, `GET /me`.
- **Contact** — Submit contact form to backend.

---

## URL Reference

Base URL in production: `https://www.certready.ca` (see `sitemap.xml`). Below, paths are relative to the app root.

### Core & marketing

| Path | Description |
|------|-------------|
| `/` | Home |
| `/red-seal-exam` | Red Seal exam overview |
| `/red-seal-readiness-test` | Free readiness test (choose trade → timed quiz → results) |
| `/trades` | Trades listing |
| `/practice-tests` | Practice tests listing |
| `/guides` | Guides index |
| `/blog` | Blog index |
| `/about` | About |
| `/contact` | Contact |
| `/terms` | Terms of service |
| `/privacy` | Privacy policy |

### Trades (dynamic)

| Path | Description |
|------|-------------|
| `/trades/:tradeSlug` | Course/purchase page (e.g. `/trades/construction-electrician`) |
| `/trades/:tradeSlug-red-seal` | Trade guide page (e.g. `/trades/construction-electrician-red-seal`) |

Supported trade slugs (from codebase): `hairstylist`, `plumber`, `construction-electrician`.

### Practice & learning

| Path | Description |
|------|-------------|
| `/practice-tests/:tradeSlug` | Practice session (e.g. 20 questions, instant feedback) |
| `/practice-tests/:tradeSlug/mock-exam` | Timed mock exam |
| `/learn/:slug` | Course learning (chapters); first 2 chapters free |
| `/electrician-red-seal-practice-questions` | Free practice landing (electrician) |
| `/plumber-red-seal-practice-questions` | Free practice landing (plumber) |
| `/hairstylist-red-seal-practice-questions` | Free practice landing (hairstylist) |

### Guides

| Path | Description |
|------|-------------|
| `/guides/:slug` | Guide article (e.g. `/guides/how-to-pass-red-seal-exam`, `/guides/plumber`) |

### Blog (fixed posts)

| Path | Description |
|------|-------------|
| `/how-to-pass-red-seal-exam` | Blog post |
| `/how-hard-is-red-seal-exam` | Blog post |
| `/red-seal-exam-format` | Blog post |
| `/red-seal-exam-cost` | Blog post |

### Auth & account

| Path | Description |
|------|-------------|
| `/login` | Login |
| `/register` | Register |
| `/forgot-password` | Forgot password |
| `/reset-password` | Reset password (with token) |
| `/dashboard` | User dashboard (protected) |
| `/profile` | User profile (protected) |
| `/checkout/success` | Post-payment success |
| `/checkout/cancel` | Checkout cancelled |

### Fallback

| Path | Description |
|------|-------------|
| `*` | 404 Not Found page |

---

## API Endpoints (summary)

- **Health:** `GET /api/health`
- **Auth:** `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/google`, `GET /api/auth/me`, `POST /api/auth/forgot-password`, `POST /api/auth/reset-password`, `PUT /api/auth/change-password`
- **Users:** `GET /api/users/dashboard`, `GET /api/users/purchase-history`, `PUT /api/users/profile`, and under `/api/users/study-plans`: `GET /`, `GET /courses`, `POST /`, `GET /:id`, `PATCH /:id/items/:itemId`, `DELETE /:id`
- **Courses:** `GET /api/courses`, `GET /api/courses/sitemap`, `GET /api/courses/:slug`, `GET /api/courses/:slug/access`
- **Practice:** `GET /api/practice/:tradeSlug/questions`, `GET /api/practice/:tradeSlug/readiness-questions`, `GET /api/practice/:tradeSlug/topics`, `GET /api/practice/:tradeSlug/count`
- **Payments:** `POST /api/payments/validate-promo`, `POST /api/payments/create-checkout-session`, `POST /api/payments/webhook`, `GET /api/payments/verify/:sessionId`
- **Promos:** `GET /api/promos/public`, admin: `GET /`, `GET /admin`, `POST /`, `DELETE /:id`
- **Answers:** `POST /api/answers`, `GET /api/answers/:courseId/:chapterId`, `DELETE /api/answers/:questionId`
- **Contact:** `POST /api/contact`

---

## Trades & content

- **Trades:** Hairstylist (332A), Plumber (306A), Construction Electrician (309A). Trade data and exam parameters (question count, duration, weighting) live in `tradeGuideContent` and `tradeGuides`.
- **Courses:** Course content (chapters, lessons) is defined in `courseContent` and per-trade files (e.g. `hairstylistCourse.js`). Practice questions are seeded via `server/scripts/seedPracticeQuestions.js` and served by the practice API.

---

## File references (key)

- **Routes:** `client/src/App.jsx`
- **Trade routing:** `client/src/components/routing/TradePageRoute.jsx` (guide vs course page)
- **SEO sitemap:** `client/public/sitemap.xml`
- **Trade guides data:** `client/src/data/tradeGuides.js`
- **Blog posts:** `client/src/data/blogPosts.js`
- **Path helpers:** `client/src/utils/routes.js` (e.g. `paths.tradeGuide(slug)`)

This document reflects the app as of the current codebase; new routes or features should be added here as they are introduced.
