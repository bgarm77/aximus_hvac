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
- [ ] Homepage (/)
- [ ] About (/about)
- [ ] Services overview (/services)
- [ ] VRV/VRF Installation (/services/vrv-vrf-installation)
- [ ] VRV/VRF Repair (/services/vrv-vrf-repair)
- [ ] VRV/VRF Maintenance + PMA Pricing (/services/vrv-vrf-maintenance)
- [ ] VRV/VRF Commissioning (/services/vrv-vrf-commissioning)
- [ ] Daikin VRV Service (/services/daikin-vrv-service)
- [ ] Emergency VRF Repair (/services/emergency-vrf-repair)
- [ ] Mitsubishi VRF Service (/services/mitsubishi-vrf-service)
- [ ] Property Managers (/property-managers)
- [ ] Service Areas + City pages (/service-areas, /service-areas/[city])
- [ ] Blog list (/blog)
- [ ] Contact (/contact)
- [ ] Privacy Policy (/privacy-policy)

### Inactive Pages (created but HIDDEN from navigation, enable when ready)
(none)

### Page Toggle System
Pages are toggled via src/config/navigation.ts
Set enabled: false to hide from nav menu + sitemap but keep the code ready.

## Known Issues
(none yet — update as issues are found)

## Last Session Notes
(update at end of each work session using the format below)

### Session YYYY-MM-DD
**Done:** (list completed tasks)
**Files changed:** (list created/modified files)
**Next:** (what to do in next session)
**Issues:** (any problems found, or "none")
