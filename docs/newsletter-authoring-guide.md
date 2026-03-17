# Newsletter Authoring Guide

This guide shows how to fill out your AEM document (Google Doc or Sheet) to produce a newsletter identical to the Adobe Experience Manager and Agentic Web Newsletter screenshot.

---

## Document Structure Overview

Your newsletter page has **one section** containing:

1. **newsletter-header** block (4 rows)
2. **Default content** (intro paragraphs)
3. **newsletter-list** block (4 list items)
4. **Default content** (closing paragraphs)

---

## 1. Newsletter Header Block

Create a block with class `newsletter-header`. Use a **table** with 4 rows:

| Row | What to fill in | Example |
|-----|-----------------|---------|
| **Row 1** | Small grey label (uppercase) | `PRODUCT NEWSLETTER` |
| **Row 2** | Main title | `Adobe Experience Manager and Agentic Web Newsletter` |
| **Row 3** | Date/subtitle (bold) | `January and February 2026` |
| **Row 4** | Image + badge (optional) | Add an image in one cell, and `For Internal Use Only` in another cell. Both go in the same row. The badge will overlay the image. |

**Row 4 details:**
- **Cell 1:** Insert the header image (the vibrant gradient/abstract image)
- **Cell 2:** `For Internal Use Only` (will appear as white text overlay on the image)

If you only want the image, put just the image. If you only want the badge, put just the text.

---

## 2. Default Content (Intro Paragraphs)

After the header block, add **regular paragraphs** (not in a block table):

| Content | What to type |
|---------|--------------|
| Greeting | `**Team,**` (bold "Team" with comma) |
| Paragraph 1 | `As we kick off 2026, the importance of brand experience has never been clearer. AI-driven traffic is growing at 693% YoY, and agentic commerce drives 31% higher conversion.` |
| Paragraph 2 | `Adobe is uniquely positioned to help you win in this space. We've identified 3 critical priorities for 2026: (1) Be optimized for agents and AI-driven experiences, (2) Reimagine the human experience with AI, and (3) automate the operational complexity of content at scale.` |
| Intro to list | `There's plenty more to share in this double issue of the newsletter, with a focus on our constantly evolving Agentic AI solutions:` |

---

## 3. Newsletter List Block

Create a block with class `newsletter-list`. Use a **table** with one row per bullet, or one row containing a full list.

**Option A – One row per list item** (recommended):

| Row | What to fill in |
|-----|-----------------|
| 1 | `**Brand Concierge:** Our new Brand Concierge triggers customer conversations and suggests product recommendations on adobe.com.` |
| 2 | `**LLM Optimizer and Sites Optimizer:** These powerful partners help you optimize for AI. Check out new assets on Field Readiness.` |
| 3 | `**New AEP Agents for AEM:** Part of the first cohort of our [try-before-you-buy program](https://example.com/try-before-you-buy).` |
| 4 | `**Summit 2026 Announcement:** We're excited for Summit 2026—a landmark event. Register early, especially for in-person attendance.` |

**Option B – Single row with HTML list:**  
Put a full `<ul><li>...</li><li>...</li></ul>` in one cell if your authoring supports it.

**Formatting in list items:**
- Bold the key term at the start: `**Brand Concierge:**`
- Add links where needed: `[try-before-you-buy program](url)`, `[recent webinar](url)`, `[Agentic Innovations for 2026](url)`

---

## 4. Default Content (Closing Paragraphs)

Add more **regular paragraphs** after the list:

| Content | What to type |
|---------|--------------|
| Call to action | `Look below for AI-forward product updates, pricing details for AEP agents, and a [recent webinar](url) where a few of us presented on [Agentic Innovations for 2026](url), upcoming events, and new content on Experience League.` |
| Closing | `Thanks for all your dedication and drive to get 2026 off to a great start. It will be an exciting journey to Summit!` |
| Signature | `Loni` |

---

## Quick Reference: Block Order in Your Doc

```
┌─────────────────────────────────────────────────────────────┐
│ SECTION (one section for the whole newsletter)              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [newsletter-header]  ← Block table, 4 rows                 │
│    Row 1: PRODUCT NEWSLETTER                                │
│    Row 2: Adobe Experience Manager and Agentic Web...       │
│    Row 3: January and February 2026                         │
│    Row 4: [image] | For Internal Use Only                   │
│                                                             │
│  Team,  ← Default content (paragraphs)                      │
│  [intro paragraphs...]                                      │
│  [intro to list...]                                         │
│                                                             │
│  [newsletter-list]  ← Block table, 4 rows (one per bullet)   │
│    Row 1: **Brand Concierge:** ...                          │
│    Row 2: **LLM Optimizer and Sites Optimizer:** ...         │
│    Row 3: **New AEP Agents for AEM:** ...                    │
│    Row 4: **Summit 2026 Announcement:** ...                  │
│                                                             │
│  Look below for...  ← Default content (paragraphs)          │
│  Thanks for all...                                          │
│  Loni                                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Link URLs to Replace

Replace these placeholders with your real URLs:

| Link text | Replace `url` with |
|-----------|---------------------|
| try-before-you-buy program | Your program URL |
| recent webinar | Your webinar URL |
| Agentic Innovations for 2026 | Your presentation/page URL |

---

## Styling (Automatic)

The blocks apply this styling automatically:

- **Header:** Grey label, large bold title, bold date, red separator line
- **Body:** Black text, blue links (#2176ff), consistent spacing
- **List:** Disc bullets, bold key terms, blue links

No extra styling is needed if you use the blocks as described.
