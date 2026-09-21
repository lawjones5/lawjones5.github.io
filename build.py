#!/usr/bin/env python3
"""
Static builder and posts indexer for Lawrence Jones' GitHub Pages site.
Usage:
    python build.py
This script scans the `content/` subdirectories (projects, papers, updates),
extracts YAML frontmatter from all .md files, and updates `posts.json`.
"""

import os
import re
import json
from pathlib import Path

BASE_DIR = Path(__file__).parent.resolve()
CONTENT_DIR = BASE_DIR / "content"
OUTPUT_JSON = BASE_DIR / "posts.json"

CATEGORIES = ["projects", "papers", "updates"]

def parse_frontmatter(file_path):
    """Extract metadata and text from markdown file with YAML frontmatter."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n(.*)$", content, re.DOTALL)
    meta = {}
    if match:
        yaml_text = match.group(1)
        for line in yaml_text.splitlines():
            if ":" in line:
                key, val = line.split(":", 1)
                key = key.strip()
                val = val.strip().strip('"').strip("'")
                if val.startswith("[") and val.endswith("]"):
                    items = [x.strip().strip('"').strip("'") for x in val[1:-1].split(",") if x.strip()]
                    meta[key] = items
                else:
                    meta[key] = val
    return meta

def build_index():
    posts = []
    print(f"Scanning markdown files in {CONTENT_DIR}...")

    for category in CATEGORIES:
        cat_dir = CONTENT_DIR / category
        if not cat_dir.exists():
            cat_dir.mkdir(parents=True, exist_ok=True)
            continue

        for md_file in cat_dir.glob("*.md"):
            meta = parse_frontmatter(md_file)
            rel_path = md_file.relative_to(BASE_DIR).as_posix()
            
            post_id = md_file.stem
            post_title = meta.get("title", post_id.replace("-", " ").title())
            post_date = meta.get("date", "2024-01-01")
            post_summary = meta.get("summary", "")
            post_tags = meta.get("tags", [category.capitalize()])
            post_category = meta.get("category", category)

            posts.append({
                "id": post_id,
                "title": post_title,
                "category": post_category,
                "date": post_date,
                "summary": post_summary,
                "tags": post_tags,
                "file": rel_path
            })
            print(f"  [+] Found ({category}): {post_title}")

    # Sort posts by date descending
    posts.sort(key=lambda x: x.get("date", ""), reverse=True)

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2)

    print(f"\nSuccessfully generated {OUTPUT_JSON} with {len(posts)} posts.")

if __name__ == "__main__":
    build_index()
