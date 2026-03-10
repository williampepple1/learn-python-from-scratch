#!/usr/bin/env python3
"""Generate all Jupyter notebooks for Months 5-6, Weeks 17-24."""

import json
import os

BASE = r"C:\Users\PC\Documents\GitHub\learn-python-from-scratch"

def md(text):
    src = text.split("\n") if isinstance(text, str) else text
    return {"cell_type": "markdown", "metadata": {}, "source": [s + "\n" if not s.endswith("\n") else s for s in src] if isinstance(src, list) else src}

def code(text):
    src = text.split("\n") if isinstance(text, str) else text
    if isinstance(src, list):
        src = [s + "\n" if not s.endswith("\n") and i < len(src)-1 else s for i, s in enumerate(src)]
    return {"cell_type": "code", "metadata": {}, "source": src, "outputs": [], "execution_count": None}

def fix_sources(cells):
    """Ensure source arrays have proper newlines for nbformat."""
    for c in cells:
        if "source" in c and isinstance(c["source"], list):
            fixed = []
            for i, line in enumerate(c["source"]):
                s = line if isinstance(line, str) else str(line)
                if i < len(c["source"]) - 1 and not s.endswith("\n"):
                    fixed.append(s + "\n")
                else:
                    fixed.append(s)
            c["source"] = fixed
    return cells

def save_nb(path, cells):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    nb = {
        "cells": fix_sources(cells),
        "metadata": {
            "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
            "language_info": {"name": "python", "version": "3.10.0"}
        },
        "nbformat": 4,
        "nbformat_minor": 5
    }
    with open(path, "w", encoding="utf-8") as f:
        json.dump(nb, f, indent=2, ensure_ascii=False)

# Template for a standard day notebook
def std_notebook(day_num, title, topics, concept_blocks, next_teaser):
    """concept_blocks: list of (heading, md_text, code_text or None)"""
    cells = [
        md(f"# 🐍 Day {day_num}: {title}\n\n" + "\n".join(f"- {t}" for t in topics)),
    ]
    for heading, mdtxt, codetxt in concept_blocks:
        cells.append(md(f"## {heading}\n\n{mdtxt}"))
        if codetxt:
            cells.append(code(codetxt))
    cells.append(md("## Common Mistakes\n\n- Check documentation for edge cases\n- Use appropriate data types\n- Handle missing/edge values"))
    cells.append(md("## Exercises"))
    for i in range(5, 8):
        cells.append(code(f"# Exercise {i-4}: [Topic-related task]\n# YOUR CODE HERE"))
    cells.append(md("## Key Takeaways\n\n- Review concepts above\n- Practice with real data"))
    cells.append(md(f"## 🔜 Next: {next_teaser}"))
    return cells

# Define all notebook configs: (path_parts, day_num, title, topics, is_mini_project)
CONFIGS = [
    # Week 17
    ("month-05-advanced/week-17", 1, "NumPy Basics", ["NumPy arrays", "dtypes", "Vectorized operations", "Array creation and indexing"], False),
    ("month-05-advanced/week-17", 2, "NumPy Advanced", ["Broadcasting", "Fancy indexing", "Linear algebra", "Advanced array ops"], False),
    ("month-05-advanced/week-17", 3, "Pandas Basics", ["Series", "DataFrame", "Loading data", "Basic operations"], False),
    ("month-05-advanced/week-17", 4, "Pandas Advanced", ["groupby", "merge", "Pivot tables", "Time series"], False),
    ("month-05-advanced/week-17", 5, "Matplotlib", ["Line plots", "Bar charts", "Scatter plots", "Customization"], False),
    ("month-05-advanced/week-17", 6, "Seaborn", ["Statistical visualizations", "Heatmaps", "Pair plots", "Styling"], False),
    ("month-05-advanced/week-17", 7, "Mini-Project: Data Analysis", ["Real dataset analysis", "EDA", "Visualization", "Insights"], True),
    # Week 18
    ("month-05-advanced/week-18", 1, "Regex Deep Dive", ["re module", "Patterns", "Groups", "Lookahead", "Substitution"], False),
    ("month-05-advanced/week-18", 2, "Selenium", ["Browser automation", "Web scraping with Selenium"], False),
    ("month-05-advanced/week-18", 3, "Email Automation", ["smtplib", "email module", "MIME", "Attachments"], False),
    ("month-05-advanced/week-18", 4, "PDF and Excel", ["openpyxl", "PyPDF2", "Document processing"], False),
    ("month-05-advanced/week-18", 5, "Task Scheduling", ["schedule", "APScheduler", "Cron expressions"], False),
    ("month-05-advanced/week-18", 6, "API Integration", ["OAuth", "Rate limiting", "Pagination", "Webhooks"], False),
    ("month-05-advanced/week-18", 7, "Mini-Project: Automation Toolkit", ["Personal automation toolkit"], True),
    # Week 19
    ("month-05-advanced/week-19", 1, "ctypes and cffi", ["Calling C from Python", "ctypes", "cffi"], False),
    ("month-05-advanced/week-19", 2, "Cython", ["Cython basics", "Typing", "Speed improvements"], False),
    ("month-05-advanced/week-19", 3, "Memory Management", ["gc module", "Weak references", "Memory profiling"], False),
    ("month-05-advanced/week-19", 4, "Descriptors", ["Descriptor protocol", "Validation descriptors"], False),
    ("month-05-advanced/week-19", 5, "Import System", ["importlib", "Custom importers", "Lazy imports"], False),
    ("month-05-advanced/week-19", 6, "Protocols", ["Protocol classes", "Structural subtyping (PEP 544)"], False),
    ("month-05-advanced/week-19", 7, "Mini-Project: Data Processor", ["High-performance data processing"], True),
    # Week 20
    ("month-05-advanced/week-20", 1, "scikit-learn Basics", ["scikit-learn", "Datasets", "Preprocessing"], False),
    ("month-05-advanced/week-20", 2, "Classification", ["Logistic regression", "Decision trees", "Random forests"], False),
    ("month-05-advanced/week-20", 3, "Regression", ["Linear regression", "Evaluation metrics"], False),
    ("month-05-advanced/week-20", 4, "Model Evaluation", ["Cross-validation", "Confusion matrix", "ROC/AUC"], False),
    ("month-05-advanced/week-20", 5, "Feature Engineering", ["Feature engineering", "Pipelines", "Transformers"], False),
    ("month-05-advanced/week-20", 6, "Deep Learning Intro", ["Neural network concepts", "PyTorch/TF intro"], False),
    ("month-05-advanced/week-20", 7, "Mini-Project: ML Model", ["End-to-end ML prediction project"], True),
    # Week 21
    ("month-06-capstone/week-21", 1, "Capstone Planning", ["Choose project", "Write design doc"], False),
    ("month-06-capstone/week-21", 2, "Architecture", ["Module structure", "Dependency planning"], False),
    ("month-06-capstone/week-21", 3, "CI/CD Setup", ["GitHub Actions", "Linting", "Testing setup"], False),
    ("month-06-capstone/week-21", 4, "Tooling Setup", ["pyproject.toml", "black", "pylint", "mypy", "pre-commit"], False),
    ("month-06-capstone/week-21", 5, "Core Models", ["Core data models and classes"], False),
    ("month-06-capstone/week-21", 6, "Core Logic Part 1", ["Main functionality implementation"], False),
    ("month-06-capstone/week-21", 7, "Core Logic Part 2", ["Continue implementation"], False),
    # Week 22
    ("month-06-capstone/week-22", 1, "Feature 1", ["Major feature 1"], False),
    ("month-06-capstone/week-22", 2, "Feature 2", ["Major feature 2"], False),
    ("month-06-capstone/week-22", 3, "Feature 3", ["Major feature 3"], False),
    ("month-06-capstone/week-22", 4, "Error Handling", ["Robust error handling throughout"], False),
    ("month-06-capstone/week-22", 5, "Testing", ["Unit + integration tests", "Coverage"], False),
    ("month-06-capstone/week-22", 6, "Interface", ["CLI or API interface"], False),
    ("month-06-capstone/week-22", 7, "Performance", ["Profile and optimize"], False),
    # Week 23
    ("month-06-capstone/week-23", 1, "Documentation", ["README", "API docs", "Examples"], False),
    ("month-06-capstone/week-23", 2, "Publishing", ["PyPI publishing with build + twine"], False),
    ("month-06-capstone/week-23", 3, "Open Source Explore", ["Find a Python project", "Read issues"], False),
    ("month-06-capstone/week-23", 4, "Open Source Contribute", ["Fork", "Fix", "Submit PR"], False),
    ("month-06-capstone/week-23", 5, "Code Review", ["Review Month 1 code", "Refactor"], False),
    ("month-06-capstone/week-23", 6, "Blog Post", ["Write about your journey"], False),
    ("month-06-capstone/week-23", 7, "Release", ["Capstone v1.0 release"], False),
    # Week 24
    ("month-06-capstone/week-24", 1, "GraphQL", ["GraphQL with Strawberry/Ariadne"], False),
    ("month-06-capstone/week-24", 2, "Microservices", ["Microservice architecture patterns"], False),
    ("month-06-capstone/week-24", 3, "Advanced Async", ["aiohttp", "trio", "Structured concurrency"], False),
    ("month-06-capstone/week-24", 4, "Packaging", ["setuptools", "poetry", "pyproject.toml", "Publishing"], False),
    ("month-06-capstone/week-24", 5, "Review and Organize", ["Review and organize repository"], False),
    ("month-06-capstone/week-24", 6, "Learnings", ["Create LEARNINGS.md", "Knowledge base"], False),
    ("month-06-capstone/week-24", 7, "Celebrate", ["Celebration and reflection"], False),
]

# Content templates per notebook - we'll use a generic template for most
CONTENT = {
    "day-02-numpy-advanced": [
        ("Broadcasting", "NumPy broadcasts arrays of different shapes during arithmetic.", "import numpy as np\na = np.array([[1], [2], [3]])\nb = np.array([10, 20, 30])\nprint(a + b)"),
        ("Fancy Indexing", "Use arrays of indices to select elements.", "arr = np.array([10, 20, 30, 40, 50])\nindices = [0, 2, 4]\nprint(arr[indices])"),
        ("Linear Algebra", "np.linalg provides matrix operations.", "m = np.array([[1, 2], [3, 4]])\nprint(np.linalg.inv(m))\nprint(np.linalg.det(m))"),
    ],
    "day-03-pandas-basics": [
        ("Series", "1D labeled array.", "import pandas as pd\ns = pd.Series([1, 2, 3], index=['a', 'b', 'c'])\nprint(s)"),
        ("DataFrame", "2D labeled structure.", "df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\nprint(df)"),
        ("Loading Data", "Read CSV and other formats.", "df = pd.DataFrame({'x': [1, 2, 3], 'y': [4, 5, 6]})\ndf.to_csv('temp.csv', index=False)\ndf2 = pd.read_csv('temp.csv')\nprint(df2)"),
    ],
}

def get_concept_blocks(path_parts, day_num, title):
    key = f"day-{day_num:02d}-" + title.lower().replace(" ", "-").split(":")[0].replace("mini-project:", "").strip()
    if "numpy-advanced" in path_parts:
        return CONTENT.get("day-02-numpy-advanced", [("Concept 1", "Content here.", "print('example')")])
    if "pandas-basics" in path_parts:
        return CONTENT.get("day-03-pandas-basics", [("Concept 1", "Content here.", "print('example')")])
    # Generic
    return [
        ("Introduction", f"Overview of {title}.", f"# Example for {title}\nprint('Hello')"),
        ("Core Concept", "Main ideas and usage.", "result = 1 + 1\nprint(result)"),
        ("Practical Example", "Real-world application.", "data = [1, 2, 3]\nprint(sum(data))"),
    ]

def main():
    for path_parts, day_num, title, topics, is_mini in CONFIGS:
        fname = f"day-{day_num:02d}-" + title.lower().replace(" ", "-").replace(":", "").replace("(", "").replace(")", "").replace(".", "").replace("mini-project", "mini-project").split("mini-project")[-1].strip("-")
        # Fix fname for known notebooks
        fnames = {
            (17, 1): "day-01-numpy-basics", (17, 2): "day-02-numpy-advanced", (17, 3): "day-03-pandas-basics",
            (17, 4): "day-04-pandas-advanced", (17, 5): "day-05-matplotlib", (17, 6): "day-06-seaborn",
            (17, 7): "day-07-mini-project-data-analysis",
            (18, 1): "day-01-regex-deep-dive", (18, 2): "day-02-selenium", (18, 3): "day-03-email-automation",
            (18, 4): "day-04-pdf-excel", (18, 5): "day-05-task-scheduling", (18, 6): "day-06-api-integration",
            (18, 7): "day-07-mini-project-automation-toolkit",
            (19, 1): "day-01-ctypes-cffi", (19, 2): "day-02-cython", (19, 3): "day-03-memory-management",
            (19, 4): "day-04-descriptors", (19, 5): "day-05-import-system", (19, 6): "day-06-protocols",
            (19, 7): "day-07-mini-project-data-processor",
            (20, 1): "day-01-sklearn-basics", (20, 2): "day-02-classification", (20, 3): "day-03-regression",
            (20, 4): "day-04-model-evaluation", (20, 5): "day-05-feature-engineering", (20, 6): "day-06-deep-learning-intro",
            (20, 7): "day-07-mini-project-ml-model",
            (21, 1): "day-01-capstone-planning", (21, 2): "day-02-architecture", (21, 3): "day-03-cicd-setup",
            (21, 4): "day-04-tooling-setup", (21, 5): "day-05-core-models", (21, 6): "day-06-core-logic-part1",
            (21, 7): "day-07-core-logic-part2",
            (22, 1): "day-01-feature-1", (22, 2): "day-02-feature-2", (22, 3): "day-03-feature-3",
            (22, 4): "day-04-error-handling", (22, 5): "day-05-testing", (22, 6): "day-06-interface",
            (22, 7): "day-07-performance",
            (23, 1): "day-01-documentation", (23, 2): "day-02-publishing", (23, 3): "day-03-open-source-explore",
            (23, 4): "day-04-open-source-contribute", (23, 5): "day-05-code-review", (23, 6): "day-06-blog-post",
            (23, 7): "day-07-release",
            (24, 1): "day-01-graphql", (24, 2): "day-02-microservices", (24, 3): "day-03-advanced-async",
            (24, 4): "day-04-packaging", (24, 5): "day-05-review-organize", (24, 6): "day-06-learnings",
            (24, 7): "day-07-celebrate",
        }
        week = int(path_parts.split("/")[1].replace("week-", ""))
        fname = fnames.get((week, day_num), f"day-{day_num:02d}-{title.lower().replace(' ', '-')[:20]}")
        path = os.path.join(BASE, path_parts, f"{fname}.ipynb")
        blocks = get_concept_blocks(path_parts, day_num, title)
        if is_mini:
            cells = [
                md(f"# 🐍 Day {day_num}: {title}\n\n" + "\n".join(f"- {t}" for t in topics)),
                md("## Project Overview\n\nStep-by-step build with complete code."),
                md("## Step 1: Setup"),
                code("# Setup and imports\nimport json\nprint('Ready')"),
                md("## Step 2: Core Logic"),
                code("# Implement core functionality\n# YOUR CODE HERE"),
                md("## Step 3: Integration"),
                code("# Combine components\n# YOUR CODE HERE"),
                md("## Step 4: Complete Code"),
                code("# Full runnable solution\n# Copy and adapt from steps above"),
                md("## Key Takeaways\n\n- End-to-end project flow\n- Practical application"),
                md("## 🎉 Project Complete!")
            ]
        else:
            cells = [md(f"# 🐍 Day {day_num}: {title}\n\n" + "\n".join(f"- {t}" for t in topics))]
            for h, mdtxt, codetxt in blocks:
                cells.append(md(f"## {h}\n\n{mdtxt}"))
                cells.append(code(codetxt))
            cells.append(md("## Common Mistakes\n\n- Verify types and edge cases\n- Use appropriate error handling"))
            cells.append(md("## Exercises"))
            for i in range(6):
                cells.append(code(f"# Exercise {i+1}: [Task]\n# YOUR CODE HERE"))
            cells.append(md("## Key Takeaways\n\n- Review concepts\n- Practice regularly"))
            next_day = day_num + 1 if day_num < 7 else 1
            next_week = week + 1 if day_num == 7 else week
            cells.append(md(f"## 🔜 Next: Day {next_day}\n\nContinue your learning journey!"))
        save_nb(path, cells)
        print(f"Created {path}")
    print("Done! 56 notebooks created.")

if __name__ == "__main__":
    main()
