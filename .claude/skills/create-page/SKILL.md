---
name: create-page
description: Creates a new page for the VRV/VRF service website following all project conventions. Use when the user asks to create, add, or build a new page, landing page, or service page. Make sure to use this skill whenever the user mentions creating pages, adding new sections, or building new routes.
---

# Create New Page

**IMPORTANT: Before writing ANY content, load the content-voice skill first.**
**All text must follow the AXIMUS Content Voice guide (AXIMUS_Content_Voice_v1.1.md).**

Follow these steps exactly:

## Step 1: Requirements
If not specified, ask for: page URL path, primary SEO keyword, page purpose.

## Step 2: Create Page File
- Create page.tsx in correct src/app/ directory
- Use TypeScript with proper interfaces
- Import shared components (Header, Footer, CTASection)

## Step 3: SEO (mandatory)
- generateMetadata() with unique title, description, OG tags, canonical
- JSON-LD structured data (LocalBusiness + Service/page-specific schema)
- FAQPage schema if FAQ section exists

## Step 4: Content Structure
- One H1 with primary keyword
- Proper H2/H3 hierarchy
- Internal links to at least 2 related pages
- CTA section before footer
- FAQ section (min 4 questions)

## Step 5: Responsive
- Mobile-first Tailwind classes
- All images via next/image with dimensions and alt
- Test at 375px, 768px, 1280px

## Step 5.5: Code Quality Check (MANDATORY)
Run these two commands after creating every page:
```bash
npx next lint          # catches code quality issues
npx tsc --noEmit       # catches TypeScript type errors
```
If either command shows errors — fix them before committing.
These catch bugs you cannot see in the browser.

## Step 6: After Creation
- Update CLAUDE.md pages checklist
- Remind user: git add . && git commit -m "feat: add [page-name] page"
- Remind user: npm run screenshots
