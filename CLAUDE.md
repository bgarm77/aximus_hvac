# VRV/VRF Service Website — Project Context

## Project Overview
Professional website for a VRV/VRF HVAC service company in California, USA.
English-only. Target audience: commercial building managers, facility directors,
HVAC contractors in California.

## Tech Stack
- Next.js 15+ with App Router and TypeScript
- Tailwind CSS for styling (no inline styles, no CSS files)
- MDX for blog posts (stored in src/content/blog/)
- Playwright for visual testing and screenshots
- Source code on GitLab, mirror to GitHub for Webflow Cloud deploy
- Forms via Web3Forms API (no backend needed)

## Design System (from official AXIMUS Brand Style Guide)
- Primary (Brand Navy): #0A2147 — headings, primary text, dark sections
- Secondary (Brand Blue): #124E88 — CTA buttons, links, key icons
- Accent (Brand Sky): #3288C0 — graphics, focus rings, decorative elements
- Tint (Brand Light): #A9CCE3 — background badges, light cards
- Surface: #F5FAFF — section backgrounds, airy feel
- Border Control: #7899AD — input borders, outline buttons
- Text Secondary: #264261 — secondary text, captions
- Headings font: Sora 600/700
- Body font: Inter 400/500/600
- Base: 16px, line-height 1.6, font-display: swap
- Buttons: 48px height, 12px radius, primary bg #124E88 text #FFF
- Cards: bg #FFF, border #D7E2EE, 16px radius, hover lift 2-4px
- Header: 72px height, sticky, shadow on scroll
- Hero: 560-640px, gradient linear-gradient(180deg, #FFFFFF 0%, #F5FAFF 100%)
- All images: next/image, WebP, explicit width/height, descriptive alt text
- Mobile-first responsive, WCAG AA contrast (4.5:1 text, 3:1 non-text)
- Full design specs: see AXIMUS_Content_Voice_v1.1.md → "Обновление дизайн-системы"

## SEO Rules (ALWAYS follow)
- Every page: unique title (50-60 chars), meta description (150-160 chars), canonical URL
- Title format: "Service Name | Company Name | California"
- One H1 per page with primary keyword, proper heading hierarchy
- JSON-LD on every page: LocalBusiness + page-specific schema
- Internal links: minimum 2 per page to related content
- FAQ sections with FAQPage schema where relevant
- Blog posts: 1500-2000 words, H2/H3 every 200-300 words

## Code Quality
- No inline styles — Tailwind only
- No unused imports or dead code
- TypeScript interfaces for all components
- Semantic HTML (nav, main, section, article, aside, footer)
- All interactive elements keyboard-accessible
- No console.log in production

## File Naming
- Pages: kebab-case directories (vrv-vrf-installation/)
- Components: PascalCase (ServiceCard.tsx)
- Utilities: camelCase (getBlogPosts.ts)
- Blog posts: kebab-case MDX (vrv-vs-vrf-difference.mdx)

## Git Workflow
- Main branch: main
- Commit format: type: description
- Types: feat, fix, content, style, seo, chore, release
- After EVERY meaningful change, remind user to commit
- Update CHANGELOG.md with every feature/fix

## Content Voice (MANDATORY for all text)
- All website and blog content MUST follow /content-voice skill
- Voice: confident engineer, not salesman
- Audience: B2B facility managers and property managers (NOT consumers)
- Brand promises: specialist expertise, 4-hour response, transparent documentation
- American English, contractions OK, short sentences, specific numbers
- No marketing fluff: no "cutting-edge", "state-of-the-art", "best-in-class"
- Every page answers: "Why Aximus instead of your current HVAC vendor?"
- Full voice guide: see AXIMUS_Content_Voice_v1.1.md

## Pages Status
### Active Pages (live on site)
- [x] Homepage (/)
- [x] About (/about)
- [x] Services overview (/services)
- [x] VRV/VRF Installation (/services/vrv-vrf-installation)
- [x] VRV/VRF Repair (/services/vrv-vrf-repair)
- [x] VRV/VRF Maintenance + PMA Pricing (/services/vrv-vrf-maintenance)
- [x] VRV/VRF Commissioning (/services/vrv-vrf-commissioning)
- [x] Daikin VRV Service (/services/daikin-vrv-service)
- [x] Emergency VRF Repair (/services/emergency-vrf-repair)
- [x] Mitsubishi VRF Service (/services/mitsubishi-vrf-service)
- [x] Property Managers (/property-managers)
- [x] Service Areas + City pages (/service-areas, /service-areas/[city])
- [x] Blog list + dynamic post template (/blog, /blog/[slug])
- [x] Contact (/contact)
- [x] Privacy Policy (/privacy-policy)

### Inactive Pages (created but HIDDEN from navigation, enable when ready)
(none)

### Page Toggle System
Pages are toggled via src/config/navigation.ts
Set enabled: false to hide from nav menu + sitemap but keep the code ready.

## Advanced SEO Skills (use after deployment)

### Available Skills
- /seo-technical — Deep technical audit of all pages (replaces Screaming Frog)
- /seo-keywords — Keyword clustering + content map builder
- /seo-content — SEO blog article creation from keyword map
- /seo-backlinks — Backlink prospect research + outreach email generator

### File Locations
- Keyword map: src/content/seo-keyword-map.md
- Outreach tracker: src/content/seo-outreach-tracker.md

### Post-Launch Weekly Routine (30 min/week)
1. Every week: create 1 blog post → /seo-content
2. Every month: run /seo-technical on all pages
3. Every month: update keyword map → /seo-keywords
4. Every month: 5 new backlink prospects → /seo-backlinks

### Expected Results
- Month 1: Google indexes site, rankings for long-tail keywords
- Month 2-3: Organic traffic growth, first leads from search
- Month 3-6: Strong positions for main California keywords
- Month 6-12: Stable top positions, consistent lead flow

## Known Issues
(none yet — update as issues are found)

## Last Session Notes
(update at end of each work session using the format below)

### Session YYYY-MM-DD
**Done:** (list completed tasks)
**Files changed:** (list created/modified files)
**Next:** (what to do in next session)
**Issues:** (any problems found, or "none")

### Session 2026-04-13
**Done:** Added hero images to three remaining pages (About, Service Areas, Property Managers). About and Property Managers use a 2-column hero layout matching the Daikin service page pattern (text left, image right, priority loading, shadow + rounded corners). Service Areas "Primary Service Zone" section: replaced the gradient placeholder with a real banner image under a dark left-to-right gradient overlay so the white headline stays legible. Updated `daikin-vrv-units.webp` asset. Typecheck clean. Commit `834424d`.
**Files changed:** src/app/about/page.tsx, src/app/service-areas/page.tsx, src/app/property-managers/page.tsx, public/images/services/about-skyline.webp (new), public/images/services/service-areas-banner.webp (new), public/images/services/property-managers.webp (new), public/images/services/daikin-vrv-units.webp, CLAUDE.md
**Next:** Register Web3Forms API key and wire up contact form, SEO optimization pass (titles/meta/schema audit across all 17 pages), run screenshot audit via `npm run screenshots` to verify visual consistency and responsive layouts on desktop + mobile, then deploy to Webflow Cloud via GitHub mirror
**Issues:** none

### Session 2026-04-12
**Done:** Created all 17 pages, trust components, page toggle system, service areas config, brand design system applied, sample service report created, contact form XSS protection added
**Files changed:** All pages in src/app/, all components in src/components/, src/config/navigation.ts, src/config/service-areas.ts, tailwind.config.ts, globals.css, public/downloads/aximus-sample-service-report.pdf
**Next:** Register Web3Forms API key and connect form, SEO optimization (ЭТАП 8), screenshot audit, stock photos for equipment, deploy
**Issues:** Need to verify brand colors render correctly on all pages, need Web3Forms API key for contact form

### Session 2026-04-12
**Done:** Created all 17 pages, trust components, page toggle system, service areas config, brand design system applied, sample service report created, contact form XSS protection added
**Files changed:** All pages in src/app/, all components in src/components/, src/config/navigation.ts, src/config/service-areas.ts, tailwind.config.ts, globals.css, public/downloads/aximus-sample-service-report.pdf
**Next:** Register Web3Forms API key and connect form, SEO optimization (ЭТАП 8), screenshot audit, stock photos for equipment, deploy
**Issues:** Need to verify brand colors render correctly on all pages, need Web3Forms API key for contact form

### Session 2026-04-12
**Done:** Created all 17 pages: Homepage, About, Services overview, VRV/VRF Installation, Repair, Maintenance with PMA Pricing, Commissioning, Daikin VRV Service, Mitsubishi VRF Service, Emergency Repair, Property Managers, Service Areas with city pages, Blog list + template, Contact, Privacy Policy. Plus trust components: TrustStrip, ProcessSteps, PricingCards, SampleReportCTA, ServiceAreaMap. Navigation config with page toggle system. Service areas config with ZIP codes.
**Files changed:** All page files in src/app/, all components in src/components/, src/config/navigation.ts, src/config/service-areas.ts, CHANGELOG.md
**Next:** Fix brand colors/design system, add contact form XSS protection, SEO optimization, screenshot audit
**Issues:** Brand colors not applying correctly — need to fix tailwind.config.ts and globals.css
