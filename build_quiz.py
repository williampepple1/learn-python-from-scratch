#!/usr/bin/env python3
"""
Parse .ipynb MCQ files and generate quiz-data.js for the quiz website.
Usage: python build_quiz.py
"""
import json, re, os, sys

PARTS = [
    {"file": "python-interview-mcq-part1.ipynb", "title": "Basics & Syntax", "range": "Q1–Q100"},
    {"file": "python-interview-mcq-part2.ipynb", "title": "Strings, Lists & Tuples", "range": "Q101–Q200"},
    {"file": "python-interview-mcq-part3.ipynb", "title": "OOP & Classes", "range": "Q201–Q300"},
    {"file": "python-interview-mcq-part4.ipynb", "title": "Functional Programming & Iterators", "range": "Q301–Q400"},
    {"file": "python-interview-mcq-part5.ipynb", "title": "File I/O & Exceptions", "range": "Q401–Q500"},
    {"file": "python-interview-mcq-part6.ipynb", "title": "Modules, Packages & Standard Library", "range": "Q501–Q600"},
    {"file": "python-interview-mcq-part7.ipynb", "title": "Decorators, Generators & Metaprogramming", "range": "Q601–Q700"},
    {"file": "python-interview-mcq-part8.ipynb", "title": "Web Development & APIs", "range": "Q701–Q800"},
    {"file": "python-interview-mcq-part9.ipynb", "title": "Data Science & NumPy/Pandas", "range": "Q801–Q900"},
    {"file": "python-interview-mcq-part10.ipynb", "title": "Advanced Topics & Mixed", "range": "Q901–Q1000"},
]

def parse_question_cell(source_text, part_index):
    """Extract question data from a single notebook markdown cell."""
    q_match = re.match(r'###\s*Q(\d+)\.\s*(.*)', source_text, re.DOTALL)
    if not q_match:
        return None

    qnum = int(q_match.group(1))
    rest = q_match.group(2)

    details_split = re.split(r'<details>', rest, maxsplit=1)
    question_block = details_split[0]
    answer_block = details_split[1] if len(details_split) > 1 else ""

    option_pattern = re.compile(
        r'^[-\s]*([A-D])\)\s*(.*?)$|^([A-D])\)\s*(.*?)$',
        re.MULTILINE
    )

    options = {}
    option_positions = []
    for m in option_pattern.finditer(question_block):
        letter = m.group(1) or m.group(3)
        text = (m.group(2) or m.group(4)).strip()
        if letter and letter not in options:
            options[letter] = text
            option_positions.append(m.start())

    if not option_positions:
        return None

    question_text = question_block[:option_positions[0]].strip()

    correct_match = re.search(
        r'\*\*Q\d+[\.\)]\s*([A-D])\b',
        answer_block
    )
    correct_letter = correct_match.group(1) if correct_match else "A"

    explanation = re.sub(r'</?summary>.*?</summary>', '', answer_block)
    explanation = re.sub(r'</details>', '', explanation)
    explanation = re.sub(r'^\s*Show Answer\s*$', '', explanation, flags=re.MULTILINE)
    explanation = explanation.strip()
    explanation = re.sub(r'^\*\*Q\d+[\.\)]\s*[A-D]\)?\*?\*?\s*[-—]?\s*', '', explanation)
    explanation = explanation.strip()

    if len(options) < 2:
        return None

    return {
        "id": qnum,
        "question": question_text,
        "options": options,
        "correct": correct_letter,
        "explanation": explanation,
        "part": part_index + 1
    }


def parse_notebook(filepath, part_index):
    """Parse all questions from a single .ipynb file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        nb = json.load(f)

    questions = []
    for cell in nb['cells']:
        if cell['cell_type'] != 'markdown':
            continue
        source = ''.join(cell['source'])
        if not re.search(r'###\s*Q\d+\.', source):
            continue
        q = parse_question_cell(source, part_index)
        if q:
            questions.append(q)

    return questions


def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    resources_dir = os.path.join(base_dir, 'resources')
    docs_dir = os.path.join(base_dir, 'docs')
    os.makedirs(docs_dir, exist_ok=True)

    all_questions = []
    parts_meta = []

    for i, part in enumerate(PARTS):
        filepath = os.path.join(resources_dir, part['file'])
        if not os.path.exists(filepath):
            print(f"WARNING: {filepath} not found, skipping.")
            continue

        questions = parse_notebook(filepath, i)
        questions.sort(key=lambda q: q['id'])
        all_questions.extend(questions)

        parts_meta.append({
            "index": i + 1,
            "title": part['title'],
            "range": part['range'],
            "count": len(questions)
        })

        print(f"Part {i+1}: {len(questions)} questions parsed from {part['file']}")

    output = {
        "parts": parts_meta,
        "questions": all_questions
    }

    output_path = os.path.join(docs_dir, 'quiz-data.js')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('const QUIZ_DATA = ')
        json.dump(output, f, ensure_ascii=False, indent=1)
        f.write(';\n')

    print(f"\nTotal: {len(all_questions)} questions written to {output_path}")
    size_kb = os.path.getsize(output_path) / 1024
    print(f"File size: {size_kb:.1f} KB")


if __name__ == '__main__':
    main()
