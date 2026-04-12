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
- 1500-2000 words, English
- H2/H3 subheadings every 200-300 words
- Primary keyword in: title, first paragraph, 2-3 H2s, conclusion
- 3+ internal links to service pages
- FAQ section (4-6 questions)
- Professional, factual, not salesy

## Step 4: After Creation
- Remind: git add . && git commit -m "content: add blog post [title]"
- Suggest next blog topic
