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

| Row | Edit text | What to fill in | Example |
|-----|-----------|-----------------|---------|
| **Row 1** | H6 or ¶ | Small grey label (uppercase) | `PRODUCT NEWSLETTER` |
| **Row 2** | H1 | Main title | `Adobe Experience Manager and Agentic Web Newsletter` |
| **Row 3** | H2 | Date/subtitle | `January and February 2026` |
| **Row 4** | — | Image (optional) | Add your own image to override. **If row 4 is empty, a default gradient image spans the full height on the right.** |

**How to format:** Select the text in each row → **Edit text** → choose the option above. The block applies the correct newsletter styling (grey label, large title, bold date).

**Row 4 details:**
- **Default:** When row 4 is omitted or empty, a default gradient image spans the full height of the header on the right (no text overlay).
- **Custom image:** Add your own image in row 4 to replace the default.

---

## 2. Default Content (Intro Paragraphs)

After the header block, add **regular paragraphs** (not in a block table). Use **Edit text** in the UI to format:

| Content | How to format |
|---------|---------------|
| Greeting | Type `Team,` then select it → **Edit text** → **H2** or keep as paragraph and use **Edit text** for bold if available |
| Paragraph 1 | Normal paragraph (T or ¶) |
| Paragraph 2 | Normal paragraph |
| Intro to list | Normal paragraph |

For **bold** text, use the toolbar or **Edit link** for links. Headings (H1–H6), blockquotes, and code can be applied via **Edit text**.

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
- Use **Edit text** → **H3** or **H4** for the key term at the start (e.g. "Brand Concierge:")
- Use **Edit link** to add links
- Use **Edit text** → blockquote or code if needed

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
│    Row 4: [image] (optional, default gradient shown)        │
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

## Edit Text UI Formatting

Use the **Edit text** menu in the editor to apply formatting. All options are styled for the newsletter:

| Option | Use for | Styling |
|--------|---------|---------|
| **T** / **¶** | Normal paragraph | Body text, 16px, readable line height |
| **H1** | Main section title | 32px, bold |
| **H2** | Section heading | 29px, bold |
| **H3** | Subsection | 26px, bold |
| **H4** | Minor heading | 23px, bold |
| **H5** | Small heading | 20px, bold |
| **H6** | Smallest heading | 18px, bold |
| **"** (blockquote) | Quoted text | Left border, italic, grey |
| **</>** (code) | Code or technical terms | Monospace, light grey background |

**How to use:** Select text → click **Edit text** → choose the format. No manual markdown or HTML needed.

---

## Styling (Automatic)

The blocks apply this styling automatically:

- **Header:** Grey label, large bold title, bold date, red separator line
- **Body:** Black text, blue links (#2176ff), consistent spacing
- **List:** Disc bullets, bold key terms, blue links
- **Edit text options:** H1–H6, blockquote, and code are pre-styled for the newsletter

No extra styling is needed if you use the blocks and Edit text options as described.
