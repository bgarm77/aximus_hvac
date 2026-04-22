---
name: create-blog-post
description: Creates a new SEO-optimized blog post. Use when user asks to write, create, draft, or add a blog post, article, news item, or content piece. Also use when user mentions blog, content marketing, or content calendar.
---

# Create Blog Post

**IMPORTANT: Before writing ANY content, load the content-voice skill first.**
**All text must follow the AXIMUS Content Voice guide (AXIMUS_Content_Voice_v1.1.md).**
**Voice: confident engineer, not salesman. Audience: B2B facility managers.**

## Step 1: Define
If not specified, ask for: topic, target keyword, audience.

## Step 2: Create MDX
Save to src/content/blog/[slug].mdx with frontmatter:
title, description, date, author, image, tags, keywords

## Step 3: Content

### Length
- Typical length: 1000–1800 words depending on topic
- Shorter is acceptable if the answer is complete
- Do NOT add content just to reach word count

### Immediate Answer Rule
- The first 2–3 sentences must answer the main question directly
- Do NOT delay the answer with long introductions

### Opening (Hook)
- Start with a real situation:
  - system failure
  - tenant complaints
  - high repair cost
  - downtime
- Avoid generic introductions

### Readability
- Paragraphs must be short (2–3 sentences)
- Sentences must be simple and clear
- Avoid complex wording
- Do not repeat the same idea

### Simplification
- Technical terms must be explained in plain English
- Write for facility managers, not HVAC engineers

### Structure (flexible)
- H2/H3 subheadings every 200–300 words
- Do not force sections if they don’t fit the topic
- Structure can adapt based on search intent

### Business Impact (inline rule)
Do NOT write a standalone "Business Impact" section.
Instead, weave consequences naturally into every relevant section:
- tenant complaints, downtime, warranty risk, repeat callbacks, cost
Every technical point must connect to something the facility manager actually feels.
If a section has no business consequence — it probably doesn't need to be there.

### SEO
- Primary keyword in: title, first paragraph, 2–3 H2s, conclusion
- 3+ internal links to service pages
- FAQ section (4–6 questions)

### No-Filler Rule
- Do NOT write just to increase word count
- Avoid generic phrases like:
  - "VRF systems are widely used"
  - "It is important to understand"
- Every section must provide new value

### Tone
- Write like explaining to a busy facility manager
- Get to the point fast
- Avoid academic tone
- Professional, factual, not salesy

### CTA
- CTA should be natural and problem-driven
- Examples:
  - Call now if your VRF system is down
  - Schedule a diagnostic
  - Book a site visit

## Step 4: After Creation
- Remind: git add . && git commit -m "content: add blog post [title]"
- Suggest next blog topic
