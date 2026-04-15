---
name: seo-keywords
description: Clusters keywords, builds content map, identifies content gaps. Use when user mentions keyword research, content plan, content calendar, keyword map, content gaps, SEO strategy, or asks what to write next for the blog.
---

# Keyword Clustering & Content Map

## Step 1: Analyze Existing Content
Read all files in src/content/blog/
List all keywords and topics already covered.
List pages already created (from src/config/navigation.ts).

## Step 2: Generate Keyword Clusters
Create clusters around these core topics for AXIMUS HVAC:

### Primary Clusters (highest business value)
- VRF maintenance Orange County California
- VRV maintenance Orange County California
- Daikin VRV service Orange County
- Mitsubishi VRF service California
- Emergency VRF repair Orange County
- VRF commissioning California

### Secondary Clusters (supporting content)
- VRF vs traditional HVAC comparison
- Commercial HVAC property managers
- VRF energy efficiency California
- VRF troubleshooting common errors
- Daikin VRV error codes
- Mitsubishi City Multi error codes
- VRF installation California
- HVAC preventive maintenance commercial buildings

### Local SEO Clusters (city pages support)
- VRF service Irvine CA
- VRF service Newport Beach CA
- VRF service Costa Mesa CA
- VRF service Anaheim CA
- VRF service Santa Ana CA
- HVAC service Orange County commercial

## Step 3: Content Gap Analysis
Identify which high-value keywords have no article yet.
Prioritize by:
1. Search volume estimate (high = better)
2. Competition level (low = faster results)
3. Business value (direct service = highest)
4. Content type fit (T=transactional, C=commercial, I=informational)

## Step 4: Build & Save Content Map
Save to src/content/seo-keyword-map.md

Use this format:
| Priority | Keyword | Type | Competition | Status |
|----------|---------|------|-------------|--------|
| 1 | ... | T/C/I | Low/Med/High | To write / Done |

## Step 5: Present to User
Show top 10 priority keywords with brief rationale.
Recommend next 3 articles to write.
Wait for user approval before any writing.
