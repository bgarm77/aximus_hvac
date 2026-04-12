---
name: deploy
description: Handles deployment to production via GitLab and GitHub mirror to Webflow Cloud. Use when user says deploy, publish, push to production, go live, release, or ship.
disable-model-invocation: true
---

# Deploy (manual activation only)

## Pre-deploy Checklist
1. /seo-check — fix all issues
2. /screenshot-audit — fix visual issues
3. npx tsc --noEmit — no TypeScript errors
4. npx next lint — no ESLint issues
5. npm run build — builds successfully

## Deploy
```bash
git add .
git commit -m "release: [describe changes]"
git push origin main        # GitLab
git push github main        # GitHub → Webflow Cloud auto-deploys
```

## Post-deploy
- Verify site at production URL
- Check 3 pages on mobile
- Update CHANGELOG.md
- Update CLAUDE.md Last Session Notes using the structured format:
  ### Session [date] — Done, Files changed, Next, Issues
