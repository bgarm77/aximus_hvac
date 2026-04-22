# AXIMUS HVAC — Living Project Briefing

**Live handoff document.** Paste the whole thing into any fresh Claude chat (Desktop, web, or API) and it will know exactly where the project is, what's done, what's pending, and how to continue.

**Snapshot date:** 2026-04-22
**Repo root:** `C:/VSCodeProjects/aximus_hvac`
**Live site:** https://aximushvac.com (Vercel auto-deploys from `github/main`)

---

## §0 How to use this file

- **New chat handoff:** paste this file into your first message. Claude reads §1 (what the project is), §2 (where we are right now), §4 (automation status), and gets back to work from §2.
- **Quick status check:** §2 Current State and §3 Session Log (newest entry at top) are the live sections. Everything else changes slowly.
- **Update rule:** after every meaningful action (commit, skill run, decision, manual change), §2 gets refreshed and a new entry is prepended to §3. The operator can also say "note this in the briefing" at any point to force an update.
- **Reference material** (voice guide, MDX schema, keyword map) lives in §5+ and is loaded only when actually writing content.

---

## §1 Project snapshot (static — changes rarely)

### 1.1 What this project is

Professional commercial VRF/VRV HVAC service website for AXIMUS HVAC Solutions in Orange County, California. English-only. Audience: **B2B facility managers, property management companies, GCs/MEP firms.** Not consumers.

### 1.2 Tech stack

- **Framework:** Next.js 16.2.3 (App Router, Turbopack, TypeScript 5)
- **Styling:** Tailwind CSS (no inline styles, no CSS files except `src/app/globals.css` with CSS variables)
- **Blog:** MDX via `next-mdx-remote/rsc`, frontmatter parsed by `gray-matter`, reading time by `reading-time`
- **Forms:** Web3Forms (no backend)
- **Icons:** `lucide-react` + inline SVG
- **Testing:** Playwright (`tests/screenshots.spec.ts`)
- **Hosting:** Vercel (auto-deploys from `github/main`), domain via GoDaddy
- **Analytics:** GA4 `G-JTFLNVXMWK` + Microsoft Clarity `wc2vxwrolh`
- **Node:** v24.14.1, npm

### 1.3 Remotes & deployment

- **Primary:** GitLab `origin` → `https://gitlab.com/bgarm/aximus_hvac.git`
- **Mirror (Vercel source):** GitHub `github` → `https://github.com/bgarm77/aximus_hvac.git`
- Push flow: `git push origin main && git push github main` after every commit. Vercel redeploys in ~1–2 min from `github/main`.

### 1.4 Credentials & env

- Phone (placeholder throughout site): `(800) 555-1234` / `tel:+18005551234` — replace once real number is provisioned
- Web3Forms API key: Vercel env vars only (not in repo)
- `robots.ts` currently: **noindex** (stealth until content+reviews ready)

### 1.5 Design system (quick reference)

| Token | Value | Use |
|---|---|---|
| Navy | `#0A2147` | Headings, primary text, dark sections |
| Blue | `#124E88` | CTA buttons, links, key icons |
| Sky | `#3288C0` | Graphics, focus rings, decorative |
| Light | `#A9CCE3` | Background badges, light cards |
| Surface | `#F5FAFF` | Section backgrounds |
| Border Control | `#7899AD` | Input borders, outline buttons |
| Text Secondary | `#264261` | Secondary text, captions |

Fonts: **Sora 600/700** (headings), **Inter 400/500/600** (body). Base 16px, line-height 1.6. Buttons 48px / 12px radius. Cards bg #FFF / border #D7E2EE / 16px radius / hover lift 2–4px. Sticky header 72px.

---

## §2 CURRENT STATE (live — read this first)

### 2.1 What's in progress right now

**Blog content creation — keyword map is in, first article pending.**

- Keyword map created, committed (`4935458`), user approved the first 3 article recommendations.
- First article to write: **"VRV vs VRF: What's the Actual Difference (And Why It Matters for Commercial Buildings)"** — target file `src/content/blog/vrv-vs-vrf-difference.mdx`, priority 2, Low competition, evergreen.
- `/seo-content` skill has not been invoked yet — next Claude action when user says "go" is to run `/seo-content` or write the article directly following §5 voice + §6 schema.

**Parallel track — automation pipeline planning.**

- User approved: fully-automatic weekly publishing after the first 3 reviewed articles, with Telegram notifications and a bot-command override to flip back to review mode.
- LLM: Anthropic API (user will provision key per §4.2).
- Scheduling: weekly, randomized day+time, to look human-authored.
- See §4 for full plan and setup steps. **Infrastructure not yet set up — waiting on user to get Anthropic key, Telegram bot, and GitHub PAT.**

### 2.2 Open tasks (prioritized)

| # | Task | Owner | Status |
|---|---|---|---|
| 1 | Write first blog article: `vrv-vs-vrf-difference.mdx` | Claude (on user "go") | Ready |
| 2 | Write second article: `daikin-vrv-error-codes.mdx` | Claude | Queued |
| 3 | Write third article: `vrf-preventive-maintenance-checklist-commercial.mdx` | Claude | Queued |
| 4 | Set up Anthropic API key (console.anthropic.com) | User | Pending |
| 5 | Create Telegram bot via @BotFather + get chat ID via @userinfobot | User | Pending |
| 6 | Check existing / create GitHub fine-grained PAT with Contents:RW on repo | User | Pending |
| 7 | Create make.com account (free tier), build "Weekly Blog Publisher" scenario | User + Claude (guided) | Pending |
| 8 | Test pipeline with article #4 (should auto-generate, commit, deploy, notify) | Pipeline | Blocked on #4–7 |
| 9 | Replace remaining stock photos with real client-site photography | User | Pending (when available) |
| 10 | Collect and publish first client reviews | User | Pending |
| 11 | Set up Google Business Profile | User | Pending |
| 12 | Flip `src/app/robots.ts` from noindex → `Allow: /` | User (decision) | Pending (after 3+ posts + reviews) |

### 2.3 Recent decisions (locked — do not re-litigate unless user reopens)

- **2026-04-22** — Keyword strategy approved. 45 keywords across 5 tiers. First 3 articles picked: VRV vs VRF · Daikin error codes · PMA checklist. Rationale: all Priority 2, Low competition, 3 different intents (comparison/troubleshooting/how-to), strong internal-link coverage.
- **2026-04-22** — Automation direction chosen: **option 1-C** (full auto-publish after article #3) + optional `/reviewon` bot-command to revert to draft-approve mode. Weekly schedule with randomized day/time to avoid automation footprint.
- **2026-04-22** — LLM provider: **Anthropic API** (Claude) for automation. Alternative (OpenAI) rejected for voice consistency reasons — the content-voice guide was tuned against Claude's style.
- **2026-04-22** — Infrastructure budget: free-tier wherever possible. make.com free (1000 ops/month) sufficient for weekly cadence (~20–30 ops/mo). Only paid item: Anthropic API at ~$4/year for 52 posts.
- **2026-04-22** — Blog photos: enhanced via Real-ESRGAN + sharp pipeline, committed as WebP. 28 stock JPGs replaced. Script `tools/enhance-blog.mjs` stays in repo for future photo drops.
- **2026-04-20** — Homepage hero layout: `items-start` alignment, reduced top padding (`pt-4 sm:pt-6`), big image constrained to `max-w-[90%] mx-auto` so thumbnails land above the fold.
- **2026-04-18** — PMA pricing switched to 4 tiers: Essential $3,600 / Professional $6,200 / Premium $9,800 / Enterprise custom. Premium reports moved to quarterly cadence.

---

## §3 Session log (newest first — prepend every session)

### Session 2026-04-22 (evening) — living-doc restructure + automation plan

**Done:**
- Restructured `CLAUDE_BRIEFING.md` into live-handoff format (§0–§6). Moved "Current state" to top, added "Session log" with newest-first ordering, added full "Automation pipeline" section with setup steps.
- Captured decisions on automation: option 1-C, Anthropic API, weekly randomized schedule, optional review-mode bot command.

**Commits:** pending — waiting for user approval on this briefing revision before commit.

**Next:** user provisions Anthropic API key + Telegram bot + GitHub PAT (see §4.3), then Claude builds make.com scenario. In parallel, Claude can start writing article #1 (VRV vs VRF).

**Issues:** none.

### Session 2026-04-22 (afternoon) — keyword map + first CLAUDE_BRIEFING.md

**Done:**
- Ran `/seo-keywords` skill. Built `src/content/seo-keyword-map.md` with 45 keywords across 5 priority tiers, gap analysis, and recommended first 3 articles.
- First pass of `CLAUDE_BRIEFING.md` created (single-file project handoff).

**Commits:** `4935458` — `seo: add keyword map for blog content strategy`.

**Next:** write first article via `/seo-content`.

### Session 2026-04-22 (morning) — remaining blog photos batch-enhanced

**Done:**
- Fixed `tools/enhance-blog.mjs` to accept large-pixel inputs (`sharp({ limitInputPixels: false })`).
- Completed batch: all 28 JPGs in `public/images/blog/` converted to enhanced WebP (max 1600px long side, aspect preserved).

**Commits:** `bfa3692` — `content: convert all blog stock photos to enhanced WebP`.

**Next:** homepage hero layout fixes.

### Session 2026-04-20 — homepage hero layout fixes

**Done:**
- Enhanced 14 site photos (Real-ESRGAN 4x + sharp → WebP); replaced AI-generated imagery across home, about, services, property-managers, service-areas.
- Homepage hero alignment: `items-center` → `items-start`; reduced top padding to `pt-4 sm:pt-6`; big image capped to `max-w-[90%] mx-auto`.
- Ran Playwright screenshot audit (15 pages × 3 viewports = 45 screenshots, zero issues).

**Commits:** `e8a96cc`, `4c0b619`, `a128d9c`, `ff2fd40`, `34a72b8`.

**Next:** blog content creation.

### Session 2026-04-18 — PMA pricing refresh

**Done:** `PricingCards.tsx` rewritten as 4-tier PMA (Essential / Professional / Premium / Enterprise). Per-unit pricing disclaimer added. `lucide-react` installed.

**Commits:** `e153bac`, `65cf18c`, `ed14e00`.

**Next:** visual QA PMA section; Enterprise contact-form variant; per-unit pricing FAQ on `/services/vrv-vrf-maintenance`.

### Session 2026-04-15 — favicon + hero spacing, deployment

**Done:** full favicon set wired into root layout. Hero spacing fine-tuned. Web3Forms wired. GA4 + Clarity integrated. Vercel deploy. Domain via GoDaddy. GSC verified. All 4 SEO skills added.

**Next:** replace AI photos, collect reviews, write 3–5 blog posts, GBP, flip robots.ts.

### Session 2026-04-13 — hero images added to About / Service Areas / Property Managers

Two-column hero pattern matching Daikin service page, with priority loading + shadow + rounded corners. Service Areas banner uses gradient overlay for legible hero headline. Commit `834424d`.

### Session 2026-04-12 — site scaffolding

Created all 17 pages (homepage, about, services overview + 7 service pages, property-managers, service-areas + city template, blog list + post template, contact, privacy). Trust components (TrustStrip, ProcessSteps, PricingCards, SampleReportCTA, ServiceAreaMap). Navigation + service-areas configs. Brand colors + typography in `tailwind.config.ts` + `globals.css`.

---

## §4 Automation pipeline (make.com + Telegram + Anthropic)

### 4.1 Goal and mode

**Default mode (after article #3 published): full auto-publish.**
- Weekly, on a randomized day-of-week and time-of-day, make.com scenario:
  1. Picks the next `Status: To write` keyword from `src/content/seo-keyword-map.md` (GitHub raw URL).
  2. Calls Anthropic API with this briefing + keyword to generate a 1,500–2,000 word MDX article following §5 (voice) and §6 (schema).
  3. Commits the MDX file to `src/content/blog/<slug>.mdx` via GitHub API.
  4. Updates the keyword map: flips `To write` → `Done`.
  5. Prepends a session log entry to `CLAUDE_BRIEFING.md` §3.
  6. Vercel auto-deploys on the git push (~1–2 min).
  7. Telegram bot sends notification: title + `https://aximushvac.com/blog/<slug>`.

**Review mode (opt-in via Telegram command `/reviewon`).**
- Same flow, but between steps 2 and 3: bot sends the MDX draft to user's Telegram chat with inline buttons `✅ Publish` / `❌ Reject`.
- `✅` → triggers the "Publish" sub-scenario (steps 3–7).
- `❌` → discards draft, marks that keyword as needing rework, notifies user.
- `/reviewoff` returns to auto mode.

### 4.2 Architecture (free-tier friendly)

```
┌─────────────┐   daily trigger   ┌───────────────┐
│ make.com    │──────────────────▶│ Randomizer    │
│ "Publisher" │                   │ (this week?)  │
│ scenario    │                   └───┬───────────┘
└─────────────┘                       │ YES
                                      ▼
                              ┌───────────────────┐
                              │ GitHub API        │
                              │ - read keyword map│
                              │ - read BRIEFING   │
                              └───────┬───────────┘
                                      ▼
                              ┌───────────────────┐
                              │ Anthropic API     │
                              │ Claude Sonnet 4.6 │
                              │ → generate MDX    │
                              └───────┬───────────┘
                                      ▼
                              ┌───────────────────┐
                              │ Mode check        │──▶ review? ──▶ Telegram draft
                              │ (auto or review)  │                 + approve webhook
                              └───────┬───────────┘
                                      ▼ auto
                              ┌───────────────────┐
                              │ GitHub API        │
                              │ - create MDX file │
                              │ - update key map  │
                              │ - update BRIEFING │
                              └───────┬───────────┘
                                      ▼
                              ┌───────────────────┐
                              │ Telegram bot      │
                              │ → user            │
                              └───────────────────┘
```

**Ops per weekly run:** ~10–15 make.com operations. × 4.3 weeks/month = ~50–65 ops/month. Free tier limit: 1,000 ops/month. **Comfortable margin.**

**Randomization strategy (to avoid "every Monday 09:00 = bot" footprint):**
- make.com free tier allows scheduled runs with minimum 15-min interval, specific days/times supported.
- Create 5 triggers: Mon 10:00, Tue 14:00, Wed 16:30, Thu 11:00, Fri 15:30 (local time).
- First module in scenario: `Tools > Set variable` computes `weekKey = ISO-week-number`. Then GitHub API: did any commit touch `src/content/blog/` since last Sunday 00:00? If yes, `Flow Control > Stop`. So only the first trigger to fire in a given week actually publishes; the other 4 exit early (~2 ops each).
- Total per month: 5 triggers × 4.3 weeks = ~21 dry runs × 2 ops + 4 real runs × 12 ops = **~90 ops/month.** Still well within 1,000.

### 4.3 Setup instructions (user action required — step by step)

#### A. Anthropic API key

1. Go to https://console.anthropic.com/ and sign up (or log in if you have an account).
2. Settings → **Billing** → add a payment method. New accounts typically get $5 free credit, enough for ~70 test articles.
3. Settings → **API Keys** → **Create Key**. Name it `make-com-aximus-blog`. Copy the key (starts with `sk-ant-api...`). **Save it in a password manager — you won't see it again.**
4. Cost reference: Claude Sonnet 4.6 at ~$3/Mtok input, $15/Mtok output. One 2,000-word article ≈ 3,500 output + 5,000 input tokens = **~$0.07/article**. 52/year ≈ **$3.64/year**.

**When ready, paste the key once in chat** so Claude can help you paste it into make.com, then Claude won't reference it again and it won't be stored in the repo.

#### B. Telegram bot

1. In Telegram, open chat with **@BotFather** (the official bot).
2. Send `/newbot`.
3. Name: `Aximus Publisher Bot` (or whatever).
4. Username: must end in `bot`, e.g. `aximus_publisher_bot`.
5. BotFather returns a token like `1234567890:ABC-DEF...`. **Save it.**
6. Now get your personal chat ID: search **@userinfobot**, start the chat, it replies with your numeric chat ID. Save that too.
7. Send your bot any message (say `/start` or just "hi") so it can message you back later.

#### C. GitHub Personal Access Token (fine-grained)

Quick check if one exists already: https://github.com/settings/tokens → if you see any fine-grained tokens listed and one of them has access to `aximus_hvac`, you can reuse it. Otherwise create one:

1. Go to https://github.com/settings/tokens?type=beta → **Generate new token**.
2. Token name: `make-com-aximus-automation`.
3. Expiration: 1 year (longer if preferred).
4. Repository access: **Only select repositories** → `bgarm77/aximus_hvac`.
5. Permissions → Repository permissions:
   - **Contents:** `Read and write` (required for commits)
   - **Metadata:** `Read-only` (auto-selected)
6. Generate token. Copy (starts with `github_pat_...`). **Save.**

#### D. make.com account + scenario

1. Go to https://www.make.com/ and sign up for the **Free** plan.
2. Once Claude has your Anthropic key, Telegram token + chat ID, and GitHub PAT, Claude will provide a ready-to-import **scenario blueprint (JSON)**. You'll import it via make.com → Scenarios → Import Blueprint.
3. Inside the imported scenario, you'll configure three connections:
   - **Anthropic** — paste API key
   - **Telegram bot** — paste bot token + chat ID
   - **GitHub** — paste PAT + org/repo (`bgarm77/aximus_hvac`)
4. Enable the scenario. First real run fires on next scheduled trigger after article #3 is published.

### 4.4 Rollout plan

1. **Now → next few sessions:** Claude writes articles #1, #2, #3 manually (user reviews each). This also seeds real examples for the automation to learn from.
2. **After article #3:** user provisions the 3 credentials (steps A, B, C). Claude wires up make.com scenario blueprint.
3. **Article #4:** first auto-published article. User confirms notification lands in Telegram, checks output quality.
4. **If auto quality is OK:** continue fully auto. Expect 52 articles/year.
5. **If quality slips:** user sends `/reviewon` to bot, pipeline flips to draft-approve mode until user sends `/reviewoff`.

### 4.5 Cost summary

| Item | Monthly | Yearly |
|---|---|---|
| Anthropic API (52 articles/year) | ~$0.30 | ~$4 |
| Telegram | $0 | $0 |
| GitHub PAT | $0 | $0 |
| make.com (free tier) | $0 | $0 |
| **Total** | **~$0.30** | **~$4** |

### 4.6 State tracking (where the pipeline remembers things)

- **Next keyword to pick:** parsed from `src/content/seo-keyword-map.md` at runtime (no separate state store).
- **Already-published detection:** GitHub API query on recent commits touching `src/content/blog/`.
- **Mode flag (auto vs review):** stored in `.claude/automation-state.json` (to be created when scenario is built). Bot toggles via `/reviewon` / `/reviewoff` commands.
- **Anthropic API key, GitHub PAT, Telegram token:** stored only inside make.com connections (encrypted). Never in the repo.

---

## §5 Content voice guide (MANDATORY — load before writing any page or post)

### 5.1 Audience

1. **Facility Managers (primary)** — Director of Facilities or Building Engineer at 20,000–150,000 sq ft Class A/B office, medical office, or mixed-use property. Budget authority ≤ $25,000 for service contracts. KPIs: building uptime, energy cost per sq ft, tenant satisfaction, maintenance budget variance. Not technical HVAC engineers — they manage buildings, not refrigerant circuits. Fear: catastrophic VRF failure during peak occupancy → tenant complaints → lease non-renewals.
2. **Property Management Companies (secondary)** — VP of Operations managing 500K–5M+ sq ft across 5–50+ commercial properties. Pain: inconsistent service quality, managing multiple HVAC vendors, no portfolio-wide reporting. Want: one vendor for all VRF buildings, standardized reporting, portfolio pricing.
3. **General Contractors / MEP firms (tertiary)** — need VRF commissioning subcontractor. Want CSLB C-20 license, $1M+ insurance, certifications, competitive per-ton rates.

### 5.2 Voice: "Confident engineer, not salesman"

Write like a senior HVAC engineer explaining things to a building manager over coffee — knowledgeable, direct, helpful, zero fluff.

**Rules:**
- Short declarative sentences. Average 12–18 words.
- Lead with facts and numbers, not adjectives:
  - ✅ "We respond to emergency calls within 4 hours."
  - ✗ "We provide amazingly fast emergency response services!"
- "You/your" for reader. "We" for Aximus. Never "one" or passive voice.
- Real HVAC terminology is fine (VRF, VRV, refrigerant circuit, inverter compressor, communication error, discharge temp, subcooling). Explain obscure terms.
- American English. Contractions OK (we're, don't, it's, you'll).
- **Banned words:** cutting-edge, state-of-the-art, best-in-class, unparalleled, premier, world-class, leverage, synergy, holistic, comprehensive solution.
- **Prefer:** factory-trained, certified, documented, transparent, dedicated, specialized.

### 5.3 Three brand promises (must thread through every piece)

1. **Specialist expertise** — not general HVAC. Fix VRF on first visit because it's ALL we do.
2. **Speed** — 4-hour emergency response.
3. **Transparency** — transparent pricing, documented reports, warranty-compliant records.

### 5.4 Blog post structure (authoritative)

- **H1** (rendered by template, not in MDX): question or "How to" format matching search intent.
- **Opening:** hook with a real scenario reader recognizes. 1 paragraph. Primary keyword in first 2 sentences.
- **Body:** 3–5 H2 sections, H2/H3 every 200–300 words. Specific numbers, California regulations (Title 24, R-454B transition), brand details (Daikin error codes, Mitsubishi City Multi). Short paragraphs (2–4 sentences).
- **Practical section:** checklist, step-by-step, or decision guide (200–300 words).
- **Internal links:** ≥2 to service pages with descriptive anchor text. ≥1 to another blog post if one exists.
- **FAQ:** 4–6 questions real facility managers ask — **in frontmatter `faqs:`, not MDX body** (template renders the section + schema automatically).
- **Conclusion + CTA:** summary in 2–3 points, soft CTA ("If your VRF system shows these symptoms, schedule a diagnostic"). No "BUY NOW!!!".

**Length:** **1,500–2,000 words.**

### 5.5 Content quality rules

1. Every claim specific. ✅ "4-hour response, serving Irvine, Anaheim, Costa Mesa, Newport Beach" / ✗ "fast service across the region".
2. Every page answers "Why Aximus instead of my current HVAC vendor?" → because current vendor is a generalist; we ONLY do VRF/VRV.
3. California-specific: Title 24, R-454B timeline, Orange County commercial building types, SoCal cooling-dominant climate.
4. Pain points: generalist misdiagnoses · slow emergency response (6–24h competitors) · surprise invoices · poor documentation jeopardizing warranty · different tech every visit.
5. Emotional drivers: **fear** (HVAC fails in medical office during August), **relief** (finally a vendor who knows my Daikin VRV IV), **confidence** (I can show ownership we're properly maintained).

### 5.6 Formatting

- Paragraphs 2–4 sentences max. White space between sections.
- Lists sparingly. 3–7 items. Full sentences.
- Numbers as digits (`$185/hour`, `4-hour response`, `15 years`).
- Phone in every CTA section.

### 5.7 Good vs bad example

❌ **Bad (AI marketing):**
> At Aximus HVAC Solutions, we are proud to offer comprehensive, state-of-the-art VRF and VRV system services to businesses throughout the beautiful Orange County area. Our team of highly skilled professionals is dedicated to providing unparalleled customer service and cutting-edge solutions for all your heating and cooling needs.

✅ **Good (Aximus voice):**
> Most HVAC contractors treat VRF systems like oversized split units. They run generic diagnostics, miss communication errors between indoor and outdoor units, and leave you with the same problem two weeks later. Aximus exists because VRF systems need a specialist. Our technicians are factory-trained on Daikin VRV and Mitsubishi Electric platforms. We carry VRF-specific diagnostic tools. And every visit ends with a documented service report that keeps your manufacturer warranty intact.

---

## §6 MDX frontmatter schema + rendering contract (authoritative — matches code)

The skill docs `.claude/skills/seo-content/SKILL.md` and `.claude/skills/create-blog-post/SKILL.md` have some outdated fields. **The source of truth is `src/lib/blog.ts`**:

### 6.1 Authoritative schema

```typescript
export interface BlogFrontmatter {
  title: string;              // required — used in H1, <title>, OG
  description: string;        // required — meta description, OG description, card blurb
  date: string;               // required — ISO "YYYY-MM-DD"
  author?: string;            // optional — default "Aximus HVAC Team"
  keywords?: string[];        // optional — ARRAY of strings (not comma-separated)
  ogImage?: string;           // optional — path like "/images/blog/<slug>.webp"
  faqs?: { q: string; a: string }[];  // optional — rendered as FAQ + FAQPage JSON-LD
}
```

### 6.2 Correct MDX frontmatter (use this shape)

```mdx
---
title: "VRV vs VRF: What's the Difference and Why It Matters"
description: "VRV is Daikin's trademarked term for VRF. Learn what actually differs between Daikin VRV and other VRF systems for commercial buildings in California."
date: "2026-04-22"
author: "Aximus HVAC Solutions"
keywords:
  - "VRV vs VRF"
  - "VRV VRF difference"
  - "commercial VRF California"
ogImage: "/images/blog/vrv-vs-vrf-difference.webp"
faqs:
  - q: "Is VRV the same as VRF?"
    a: "Effectively yes — VRV (Variable Refrigerant Volume) is Daikin's trademarked name for the technology category the rest of the industry calls VRF (Variable Refrigerant Flow). The engineering principles are identical."
  - q: "Does VRV cost more than VRF?"
    a: "Equipment list price is comparable across Daikin, Mitsubishi, LG, and Samsung at a given tonnage. Installed cost depends more on refrigerant piping runs, branch selector counts, and commissioning labor than on the brand label."
---

Your intro paragraph goes here.

## First H2 section

Body content.
```

### 6.3 Common mistakes the old skill docs invite (DO NOT do these)

| ❌ Mistake | ✅ Correct per `src/lib/blog.ts` |
|---|---|
| `image: "/images/blog/x.webp"` | `ogImage: "/images/blog/x.webp"` |
| `tags: ["VRF", "VRV"]` | No `tags` field — use `keywords: []` |
| `keywords: "a, b, c"` (string) | `keywords: ["a", "b", "c"]` (array) |
| `<script type="application/ld+json">` inline in MDX | Don't — template auto-generates schema |
| `## FAQ` section with `## Q?` / answer pairs in MDX body | Use `faqs:` frontmatter — template renders section + JSON-LD |
| `# H1 title` at top of MDX body | Don't — template renders H1 from `title` frontmatter |

### 6.4 What the template renders automatically (`src/app/blog/[slug]/page.tsx`)

1. **BlogPosting JSON-LD** — from `title`, `description`, `date`, `author`, `ogImage`, `keywords`.
2. **FAQPage JSON-LD** — only if `faqs:` non-empty.
3. **Breadcrumb link** ("← Back to Resources").
4. **H1 from `title`** + author + date + reading time.
5. **MDX body** via `next-mdx-remote/rsc` with styled components (see 6.5).
6. **"Related services" aside** — hardcoded links to Maintenance, Emergency Repair, Daikin service.
7. **FAQ section** from `faqs:`.
8. **CTA band** ("Need help with your VRF system?") with phone + Request Assessment.

### 6.5 Available styled MDX components

| Tag | Styling |
|---|---|
| `h2` | text-2xl/3xl bold navy, mt-10 mb-4 |
| `h3` | text-xl semibold navy, mt-8 mb-3 |
| `p` | text-secondary, relaxed leading, my-4 |
| `a` | blue font-semibold, underline, hover-navy |
| `ul` / `ol` / `li` | standard, pl-6, space-y-2 |
| `blockquote` | left border (sky), surface bg, italic navy |
| `code` / `pre` | surface bg (inline), navy bg (block) |
| `hr` | my-10, subtle border |

Markdown only — no JSX in MDX. Images: `![alt](/images/blog/slug.webp)`. Don't use `h1` in body.

---

## §7 Keyword map (summary — full file at `src/content/seo-keyword-map.md`)

### Priority 1 — Already covered by service pages (do NOT duplicate)
VRF maintenance Orange County · VRV service Orange County · Daikin VRV service Orange County · Mitsubishi VRF service California · Emergency VRF repair Orange County · VRF commissioning California · VRF installation Orange County · VRF repair Orange County.

### Priority 2 — Top 10 blog targets (write first, Low competition)
1. VRV vs VRF difference ← **article #1**
2. Daikin VRV error codes list ← **article #2**
3. Mitsubishi City Multi error codes
4. VRF preventive maintenance checklist commercial ← **article #3**
5. VRF refrigerant leak symptoms
6. VRF system cost per ton commercial California
7. Title 24 VRF commissioning requirements California
8. VRF vs split system commercial building
9. How often should commercial VRF be serviced
10. VRF system lifespan commercial

### Priority 3 — 12 supporting articles
(See full file.)

### Priority 4 — 6 property-manager-focused
(See full file.)

### Priority 5 — Local SEO (already covered by city pages)

---

## §8 Directory / skills / git reference

### 8.1 Directory

```
src/
├── app/
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── property-managers/page.tsx
│   ├── service-areas/
│   │   ├── [city]/
│   │   └── page.tsx
│   ├── services/
│   │   ├── daikin-vrv-service/
│   │   ├── emergency-vrf-repair/
│   │   ├── mitsubishi-vrf-service/
│   │   ├── vrv-vrf-commissioning/
│   │   ├── vrv-vrf-installation/
│   │   ├── vrv-vrf-maintenance/
│   │   ├── vrv-vrf-repair/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── robots.ts
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LocalBusinessSchema.tsx
│   ├── PricingCards.tsx
│   ├── ProcessSteps.tsx
│   ├── SampleReportCTA.tsx
│   ├── ServiceAreaMap.tsx
│   └── TrustStrip.tsx
├── config/
│   ├── navigation.ts
│   ├── service-area-details.ts
│   └── service-areas.ts
├── content/
│   ├── blog/                      ← first .mdx lands here
│   └── seo-keyword-map.md
└── lib/
    └── blog.ts                    ← frontmatter schema (authoritative)
```

### 8.2 Skills (`.claude/skills/`)

| Skill | Purpose |
|---|---|
| `content-voice` | Voice/tone rules — load before any writing |
| `create-blog-post` | Short post-writing flow |
| `create-page` | Service/landing page creation |
| `deploy` | Deployment helpers |
| `screenshot-audit` | Playwright visual QA (15 pages × 3 viewports) |
| `seo-backlinks` | Backlink prospects + outreach emails |
| `seo-check` | Per-page technical SEO audit |
| `seo-content` | Full SEO article pipeline |
| `seo-keywords` | Keyword clustering + content map |
| `seo-technical` | Full-site technical SEO audit |

### 8.3 Git workflow

- Commit format: `type: description`. Types: `feat`, `fix`, `content`, `style`, `seo`, `chore`, `release`, `docs`.
- Always push to both: `git push origin main && git push github main`.
- Vercel rebuilds on `github/main` push, live in ~1–2 min.

**Recent commits (for reference):**
```
4935458 seo: add keyword map for blog content strategy
34a72b8 fix: narrow hero big image to fit thumbnails above the fold
bfa3692 content: convert all blog stock photos to enhanced WebP
ff2fd40 fix: lift homepage hero up by tightening top padding
a128d9c fix: align hero image column to top
4c0b619 chore: add photo enhancement pipeline and blog source stock
e8a96cc content: replace AI-generated photos with enhanced stock photography
```

---

## §9 Handoff prompt for next chat (copy-paste ready)

When starting a fresh chat, after pasting this whole briefing, use this as the first follow-up message:

> Read the briefing above, then tell me §2 (Current State) in 3 bullets and wait for my instruction. Don't start any work until I say go.

---

*End of briefing. Updated 2026-04-22 (evening). Next update: after article #1 is written, or when any §2 task moves to a new status.*
