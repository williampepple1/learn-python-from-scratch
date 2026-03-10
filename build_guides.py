#!/usr/bin/env python3
"""
Parse concept guide .ipynb files and generate guides-data.js for the website.
Usage: python build_guides.py
"""
import json, re, os, glob, sys
sys.stdout.reconfigure(encoding='utf-8')

GUIDES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'resources', 'guides')
DOCS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'docs')

EMOJI_MAP = {
    "variables": "📦", "functions": "⚙️", "control": "🔀", "strings": "🔤",
    "lists": "📋", "dictionaries": "📚", "classes": "🏗️", "inheritance": "🧬",
    "error": "🛡️", "file": "📁", "iterators": "🔗", "decorators": "✨",
    "modules": "📦", "testing": "🧪", "concurrency": "⚡",
}

def get_emoji(filename):
    for key, emoji in EMOJI_MAP.items():
        if key in filename.lower():
            return emoji
    return "📖"

def parse_notebook(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        nb = json.load(f)

    title = ""
    sections = []
    current_section = None

    for cell in nb['cells']:
        source = ''.join(cell['source']).strip()
        if not source:
            continue

        if cell['cell_type'] == 'markdown':
            h1 = re.match(r'^#\s+(.+)', source)
            if h1 and not title:
                title = h1.group(1).strip()
                continue

            h2 = re.match(r'^##\s+(.+)', source, re.MULTILINE)
            if h2:
                if current_section:
                    sections.append(current_section)
                current_section = {
                    "heading": h2.group(1).strip(),
                    "blocks": []
                }
                remaining = source[h2.end():].strip()
                if remaining:
                    current_section["blocks"].append({"type": "markdown", "content": remaining})
            else:
                if current_section is None:
                    current_section = {"heading": "", "blocks": []}
                current_section["blocks"].append({"type": "markdown", "content": source})

        elif cell['cell_type'] == 'code':
            if current_section is None:
                current_section = {"heading": "", "blocks": []}
            current_section["blocks"].append({"type": "code", "content": source})

    if current_section:
        sections.append(current_section)

    return {"title": title, "sections": sections}


def main():
    os.makedirs(DOCS_DIR, exist_ok=True)

    pattern = os.path.join(GUIDES_DIR, '*.ipynb')
    files = sorted(glob.glob(pattern))

    guides = []
    for filepath in files:
        filename = os.path.basename(filepath)
        num_match = re.match(r'(\d+)-(.+)\.ipynb', filename)
        order = int(num_match.group(1)) if num_match else 0
        slug = num_match.group(2) if num_match else filename.replace('.ipynb', '')

        data = parse_notebook(filepath)
        emoji = get_emoji(filename)

        guides.append({
            "order": order,
            "slug": slug,
            "emoji": emoji,
            "title": data["title"],
            "sections": data["sections"],
            "sectionCount": len(data["sections"]),
        })

        print(f"  {emoji} {data['title']} — {len(data['sections'])} sections from {filename}")

    guides.sort(key=lambda g: g['order'])

    output_path = os.path.join(DOCS_DIR, 'guides-data.js')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('const GUIDES_DATA = ')
        json.dump(guides, f, ensure_ascii=False, indent=1)
        f.write(';\n')

    size_kb = os.path.getsize(output_path) / 1024
    print(f"\nTotal: {len(guides)} guides written to {output_path} ({size_kb:.1f} KB)")


if __name__ == '__main__':
    main()
