# Lawrence Jones - Personal & Professional Website

 **Lawrence Jones** personal website, PhD Researcher at the **University of Sheffield**.
Built with clean HTML5, minimalist CSS, and a Markdown repository system for GitHub Pages.

---

## Color Palette

The site's visual theme uses the following custom palette:

| Name | RGB Value | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Jet Black** | `rgb(0, 39, 43)` | `#00272B` | Primary page background |
| **Dark Coffee** | `rgb(52, 28, 28)` | `#341C1C` | Card background & section highlights |
| **Olive Leaf** | `rgb(100, 101, 54)` | `#646536` | Card borders & badge outlines |
| **Dry Sage** | `rgb(205, 195, 146)` | `#CDC392` | Body text & typography |
| **Muted Teal** | `rgb(158, 197, 171)` | `#9EC5AB` | Section titles & link accents |
| **Thistle** | `rgb(221, 196, 221)` | `#DDC4DD` | Highlights, hover states & badges |

---

## Repository Structure

```
lawjones.github.io/
├── index.html              # Homepage with bio, research focus & recent articles
├── projects.html           # Projects directory
├── papers.html             # Papers & publications directory
├── updates.html            # General updates & news directory
├── post.html               # Markdown article viewer (renders any .md file)
├── posts.json              # Manifest index of all articles
├── build.py                # Python script to auto-index markdown files
├── assets/
│   ├── css/
│   │   └── style.css       # Complete CSS styles with custom palette variables
│   └── js/
│       └── main.js         # Post card loader & rendering logic
└── content/
    ├── projects/           # Markdown files for projects
    │   ├── chapsim2-mhd.md
    │   └── sco2-power-cycles.md
    ├── papers/             # Markdown files for papers
    │   └── dns-liquid-metal-mhd.md
    └── updates/            # Markdown files for general updates
        └── phd-research-update.md
```

---

## How to Add New Posts

To create a new post, simply add a new `.md` file inside the appropriate folder (`content/projects/`, `content/papers/`, or `content/updates/`) with YAML frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024-06-01"
category: "projects" # or "papers", or "updates"
summary: "A short 1-2 sentence description of the post."
tags: ["MHD", "CHAPsim2", "DNS"]
author: "Lawrence Jones"
---

# Your Heading

Write standard Markdown here!
```

After adding or updating markdown files, run the indexer:
```bash
py build.py
```
This automatically updates `posts.json`.

---

## Local Preview & Deployment

### Local Preview
You can preview the site locally using Python's built-in HTTP server:
```bash
py -m http.server 8000
```
Then open `http://localhost:8000` in your browser.
