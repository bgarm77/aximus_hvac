---
name: screenshot-audit
description: Takes screenshots of all site pages at desktop and mobile viewports, reviews for visual issues, and fixes problems. Use when user asks to check design, take screenshots, visual review, mobile check, responsive test, or verify how pages look. Also use after creating or modifying any page.
---

# Screenshot Audit

## Step 1: Run Screenshots
```bash
npx playwright test tests/screenshots.spec.ts
```
Captures all pages at desktop (1280x800), tablet (768x1024), mobile (375x812).
Saved to ./screenshots/

## Step 2: Review Each Screenshot
Check for:
- Header/footer render correctly
- No overlapping elements
- Text readable, not cut off
- Images load correctly
- CTA buttons visible
- Mobile menu works
- No horizontal scroll on mobile
- Consistent spacing

## Step 3: Fix Issues
For each issue: describe problem, identify file, apply fix, re-run screenshots.

## Step 4: After
- Remind user to commit fixes
- Update CLAUDE.md Known Issues if needed
