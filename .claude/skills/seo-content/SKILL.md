---
name: seo-content
description: Creates SEO-optimized blog articles and landing page content based on keyword map. Use when user mentions blog post, article, weekly content, content marketing, content calendar, or asks to write something for the blog or site. Also use when user says "write about X" or "create content for X".
---

# SEO Content Machine

## CRITICAL: Before writing ANY content
Load content-voice skill first.
All content MUST follow AXIMUS_Content_Voice_v1.1.md rules:
- Voice: confident engineer, not salesman
- Audience: B2B facility managers and property managers
- American English, contractions OK, short sentences
- No fluff: no "cutting-edge", "state-of-the-art", "best-in-class"
- Real HVAC terminology, explain obscure terms
- Specific California references (cities, climate, regulations, utilities)

## Step 1: Select Keyword
Check src/content/seo-keyword-map.md for highest priority keyword without existing article.
If no keyword map exists, run /seo-keywords first.
Present selected keyword to user. Wait for approval.

## Step 2: Competitive Brief
Identify what top-ranking articles cover for this keyword.
Find gaps and angles we can cover better.
Note: focus on practical, specific, California-relevant content.

## Step 3: Write Article

### Frontmatter (MDX)
```yaml
---
title: "SEO-optimized title with keyword (50-60 chars)"
description: "Meta description with keyword + CTA (150-160 chars)"
date: "YYYY-MM-DD"
author: "AXIMUS HVAC Solutions"
image: "/images/blog/[slug].webp"
tags: ["VRF", "VRV", "HVAC", relevant tags]
keywords: "primary keyword, secondary keyword 1, secondary keyword 2"
---
```

### Article Structure (REQUIRED — do not skip sections)

1. **Introduction** (100-150 words)
   - Hook: start with a real problem or scenario
   - Include primary keyword in first 2 sentences
   - Tell reader exactly what they will learn
   - No fluff, get to the point immediately

2. **Main Body** (800-1200 words)
   - 3-5 H2 sections with descriptive subheadings
   - H2/H3 every 200-300 words
   - Include specific data, numbers, California context
   - Reference real brands: Daikin, Mitsubishi, LG, Samsung
   - Short paragraphs — max 3-4 sentences

3. **Practical Section** (200-300 words)
   - Checklist, step-by-step, or decision guide
   - Something reader can actually use immediately
   - Position as expert resource

4. **FAQ Section** (4-6 questions)
   - Answer questions real facility managers ask
   - Include FAQPage JSON-LD schema
   - Keep answers concise: 2-4 sentences each

5. **Conclusion + CTA** (100-150 words)
   - Summarize key takeaways in 2-3 points
   - Natural transition to contacting AXIMUS
   - CTA: "Schedule a Free VRF System Assessment"

### Internal Links (MANDATORY)
- Minimum 2 links to service pages with descriptive anchor text
- Minimum 1 link to another blog post (if exists)
- All links must feel natural in context

### Schema Markup
Include at bottom of MDX file:
- BlogPosting JSON-LD
- FAQPage JSON-LD (in FAQ section)
- BreadcrumbList JSON-LD

## Step 4: Save & Verify
Save to: src/content/blog/[slug].mdx
Run /seo-check on new post.
Update src/content/seo-keyword-map.md — mark keyword as "Done".
Remind user: git add . && git commit -m "content: add blog post [slug]"
Suggest next keyword to write about.
