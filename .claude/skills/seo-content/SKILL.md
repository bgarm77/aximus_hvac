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
   - The first 2–3 sentences MUST directly answer the main question
   - Do NOT start with general explanations
   - Start with a real-world problem (system failure, tenant complaints, downtime, cost issue)
   - Throughout the article, weave in business consequences naturally (downtime, tenant complaints, warranty risk, cost). Do not isolate these in a single section — connect them to each technical point.

2. **Main Body** (800-1200 words)
   - 3-5 H2 sections with descriptive subheadings
   - H2/H3 every 200-300 words
   - Include specific data, numbers, California context
   - Reference real brands: Daikin, Mitsubishi, LG, Samsung
   - Short paragraphs — max 3-4 sentences
   - Each section must answer a clear question
   - Content must move forward logically (no repetition)
   - Include real examples or situations where possible
   - Avoid generic explanations

3. **Practical Section** (200-300 words)
   - Must include:
     - when the issue becomes serious
     - what the reader can check
     - when to call a technician
   - Focus on decision-making, not just instructions

4. **FAQ Section** (4-6 questions)
   - Answer questions real facility managers ask
   - Include FAQPage JSON-LD schema
   - Keep answers concise: 2-4 sentences each

5. **Conclusion + CTA** (100-150 words)
   - Summarize key takeaways in 2-3 points
   - Natural transition to contacting AXIMUS
   - CTA must match the problem discussed
   - CTA can include urgency and action
   - Examples:
     - Call now for VRF repair
     - Book a same-day diagnostic
     - Schedule a site visit
   - Do NOT use generic CTAs like:
     - Contact us today
     - Learn more

### Readability Rules (MANDATORY)
- Paragraphs must be 2–3 sentences max
- Sentences must be short and clear
- Avoid complex wording when simple words work
- Do not repeat the same idea
- Content should be easy to scan in under 3 minutes
- Technical terms must be explained in plain English
- Write for facility managers, not HVAC engineers

### Tone (MANDATORY)
- Write like explaining to a busy facility manager
- Get to the point fast
- Avoid academic or textbook tone

### Anti-Filler Rules (MANDATORY)
- Do NOT write just to reach word count
- Avoid generic phrases like:
  - "VRF systems are widely used"
  - "In today's world"
- Every paragraph must add new information

### Length
- Write only as long as needed to fully answer the question
- Typical range: 1000–1800 words
- Shorter is acceptable if complete

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
