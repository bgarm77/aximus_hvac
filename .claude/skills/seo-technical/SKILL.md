---
name: seo-technical
description: Performs deep technical SEO audit on any page or entire site. Fetches page HTML, checks title tag length, meta description, canonical tags, H1 count, image alt text, schema markup, internal link count, page speed hints, robots meta. Outputs prioritized issue list with severity levels. Use when user mentions technical SEO, audit, crawl, site health, page speed, broken links, or asks to check technical issues on any page. Also use after any deployment.
---

# Technical SEO Auditor

## Audit Checklist (check ALL for each page)

### Title Tag
- [ ] Present and unique
- [ ] 50-60 characters
- [ ] Contains primary keyword
- [ ] Contains "California" where relevant
- [ ] Format: "Service Name | AXIMUS HVAC Solutions | California"

### Meta Description
- [ ] Present and unique
- [ ] 150-160 characters
- [ ] Contains primary keyword + call to action
- [ ] Compelling enough to drive clicks

### Heading Structure
- [ ] Exactly ONE H1 per page
- [ ] H1 contains primary keyword
- [ ] Proper hierarchy: H1 > H2 > H3 (no skipping levels)
- [ ] No empty headings

### Canonical Tags
- [ ] Present on every page
- [ ] Self-referencing, correct URL
- [ ] No duplicate canonicals

### Image Optimization
- [ ] ALL images have descriptive alt text (not "image1.jpg")
- [ ] Alt text includes relevant keywords naturally
- [ ] All images use next/image component
- [ ] Explicit width and height attributes
- [ ] WebP format (Next.js handles this)
- [ ] Priority prop on hero/above-fold images
- [ ] Lazy loading for below-fold images

### Schema Markup (JSON-LD)
- [ ] LocalBusiness on every page
- [ ] Service schema on service pages
- [ ] FAQPage schema where FAQ sections exist
- [ ] BreadcrumbList on all pages
- [ ] BlogPosting schema on blog posts
- [ ] Validate at https://validator.schema.org

### Internal Links
- [ ] Minimum 2 internal links per page
- [ ] Descriptive anchor text (not "click here")
- [ ] No broken internal links
- [ ] Breadcrumb navigation present
- [ ] Service pages link to related services

### Open Graph & Social
- [ ] og:title present
- [ ] og:description present
- [ ] og:image present (1200x630px)
- [ ] og:type present
- [ ] Twitter card tags present

### Robots & Indexing
- [ ] No accidental noindex tags
- [ ] sitemap.xml valid and includes all enabled pages
- [ ] robots.txt allows crawling of important pages

### Mobile
- [ ] Viewport meta tag present
- [ ] No horizontal scroll
- [ ] Touch targets minimum 44x44px
- [ ] Font size minimum 16px on mobile

## Severity Levels
- 🔴 CRITICAL — Blocking indexing or causing major SEO damage. Fix immediately.
- 🟡 HIGH — Significant impact. Fix this week.
- 🟢 LOW — Minor impact. Fix when possible.

## Output Format
For each page: scorecard table with ✅/❌
Overall score: X/100
Priority fixes list sorted by severity.
Fix all CRITICAL issues immediately after audit.
