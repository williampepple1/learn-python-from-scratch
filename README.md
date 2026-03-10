# 🐍 Learn Python from Scratch — 6-Month Mastery Plan

A comprehensive 6-month curriculum to learn Python from scratch, featuring **interactive Jupyter notebooks** for every lesson, hands-on mini-projects each week, and a companion **[quiz website with 1000 MCQ interview questions](https://williampepple1.github.io/learn-python-from-scratch/)** to test your knowledge.

> **Start Date:** March 8, 2026  
> **End Date:** August 31, 2026  
> **Commitment:** Daily commits to GitHub  
> **Goal:** Go from zero to confident, production-ready Python developer

---

## ✨ Highlights

- 📅 **6 months** of structured, day-by-day learning (168 notebook lessons)
- 📓 **Interactive Jupyter Notebooks** — run Python code inline
- 📝 **500 hands-on exercises** with auto-grading — write code, run tests, get instant feedback
- 🛠️ **24 mini-projects** including a calculator, URL shortener, web scraper, and a REST API
- 🎯 **[1000 MCQ Quiz Website](https://williampepple1.github.io/learn-python-from-scratch/)** — pick 10, 20, 30, 50, or 100 random questions per topic, with instant feedback, scoring, and dark/light theme
- 📖 **15 interactive concept guides** rendered on the website — learn Python's building blocks from variables to concurrency
- 🧪 Topics span from "Hello, World!" to async/await, decorators, metaclasses, web development, and data science

---

## 📋 Table of Contents

- [Highlights](#-highlights)
- [Philosophy](#-philosophy)
- [How to Use This Plan](#-how-to-use-this-plan)
- [Month 1 — Foundations](#-month-1--foundations-march-8--april-7)
- [Month 2 — Data Structures & OOP](#-month-2--data-structures--oop-april-8--may-7)
- [Month 3 — Intermediate Python](#-month-3--intermediate-python-may-8--june-7)
- [Month 4 — Web Development & APIs](#-month-4--web-development--apis-june-8--july-7)
- [Month 5 — Advanced Topics & Data Science](#-month-5--advanced-topics--data-science-july-8--august-7)
- [Month 6 — Capstone & Mastery](#-month-6--capstone--mastery-august-8--august-31)
- [1000 Interview Questions Quiz](#-1000-interview-questions-quiz)
- [500 Hands-On Exercises](#-500-hands-on-exercises)
- [Daily Commit Strategy](#-daily-commit-strategy)
- [Recommended Resources](#-recommended-resources)
- [Progress Tracker](#-progress-tracker)

---

## 🧠 Philosophy

1. **Learn by building.** Every concept is paired with a hands-on project.
2. **Commit daily.** Even a single-line comment or docs update counts — consistency beats intensity.
3. **Fail forward.** Embrace errors. Python's tracebacks are your best teacher.
4. **Review and refactor.** Revisiting old code with new knowledge is one of the most powerful learning tools.

---

## 🗂 How to Use This Plan

Each week has:
- **Topics** to study
- **Exercises** to practice (commit these!)
- **A mini-project** to solidify learning
- **Stretch goals** for when you're ahead of schedule

### Repository Structure

```
learn-python-from-scratch/
├── README.md                    # This file (your roadmap)
├── build_quiz.py                # Parses .ipynb MCQs → quiz-data.js
├── build_guides.py              # Parses concept guides → guides-data.js
├── docs/
│   ├── index.html               # Website (Learn + Quiz single-page app)
│   ├── quiz-data.js             # Generated quiz data (1000 questions)
│   └── guides-data.js           # Generated concept guide data (15 guides)
├── month-01-foundations/
│   ├── week-01/
│   │   ├── day-01-hello-world.ipynb
│   │   ├── day-02-variables.ipynb
│   │   ├── ...
│   │   └── day-07-mini-project-calculator.ipynb
│   ├── week-02/
│   ├── week-03/
│   └── week-04/
├── month-02-data-structures-oop/
├── month-03-intermediate/
├── month-04-web-apis/
├── month-05-advanced/
├── month-06-capstone/
└── resources/
    ├── exercises/                        # 500 auto-graded exercises
    │   ├── exercises-part1-basics.ipynb         # E1-E50
    │   ├── exercises-part2-strings-lists.ipynb  # E51-E100
    │   ├── exercises-part3-dicts-sets.ipynb     # E101-E150
    │   ├── exercises-part4-functions.ipynb      # E151-E200
    │   ├── exercises-part5-oop.ipynb            # E201-E250
    │   ├── exercises-part6-file-io.ipynb        # E251-E300
    │   ├── exercises-part7-comprehensions.ipynb # E301-E350
    │   ├── exercises-part8-decorators.ipynb     # E351-E400
    │   ├── exercises-part9-modules-testing.ipynb # E401-E450
    │   └── exercises-part10-advanced.ipynb      # E451-E500
    ├── guides/                           # 15 concept guide notebooks
    │   ├── 01-variables-and-types.ipynb
    │   ├── 02-functions.ipynb
    │   ├── ...
    │   └── 15-concurrency.ipynb
    ├── python-interview-mcq-part1.ipynb    # Q1–Q100: Basics & Syntax
    ├── python-interview-mcq-part2.ipynb    # Q101–Q200: Strings & Lists
    ├── python-interview-mcq-part3.ipynb    # Q201–Q300: OOP & Classes
    ├── python-interview-mcq-part4.ipynb    # Q301–Q400: Functional & Iterators
    ├── python-interview-mcq-part5.ipynb    # Q401–Q500: File I/O & Exceptions
    ├── python-interview-mcq-part6.ipynb    # Q501–Q600: Modules & Packages
    ├── python-interview-mcq-part7.ipynb    # Q601–Q700: Decorators & Generators
    ├── python-interview-mcq-part8.ipynb    # Q701–Q800: Web & APIs
    ├── python-interview-mcq-part9.ipynb    # Q801–Q900: Data Science & NumPy
    └── python-interview-mcq-part10.ipynb   # Q901–Q1000: Advanced & Mixed
```

Each day is a Jupyter Notebook (`.ipynb`) using the Python kernel.

### Environment Setup

To run the `.ipynb` files, you need:

1. **Install Python 3.10+** from [python.org](https://www.python.org/downloads/) or via your package manager
2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate      # Linux/macOS
   venv\Scripts\activate         # Windows
   ```
3. **Install Jupyter:**
   ```bash
   pip install jupyter notebook
   ```
4. **Verify installation:**
   ```bash
   python --version
   pip --version
   jupyter --version
   ```

*(Note: If you use VS Code, make sure you have the official "Jupyter" and "Python" extensions installed).*

### Optional: Jupyter Lab

For a more powerful notebook interface with multiple panels, file browser, and extensions:

```bash
pip install jupyterlab
jupyter lab
```

### Optional: IPython

For a better REPL with syntax highlighting, auto-completion, and magic commands:

```bash
pip install ipython
ipython
```

### Recommended VS Code Extensions

- **Python** (Microsoft) — IntelliSense, debugging, testing
- **Jupyter** (Microsoft) — Notebook support
- **Pylance** — Fast type checking and IntelliSense
- **Black Formatter** — Auto-format on save
- **isort** — Organize imports

### Key Dependencies (Install as Needed)

| Phase | Packages |
|-------|----------|
| Month 1–3 | jupyter, notebook, pytest, black, isort, mypy |
| Month 4 | flask, fastapi, uvicorn, requests, beautifulsoup4, sqlalchemy, redis |
| Month 5 | numpy, pandas, matplotlib, seaborn, scikit-learn, openpyxl, PyPDF2 |
| Month 6 | docker, alembic, aiohttp (or your capstone-specific deps) |

Create a `requirements.txt` as you go. Example:

```
jupyter>=1.0.0
notebook>=7.0.0
pytest>=7.0.0
black>=23.0.0
```

---

## 📅 Month 1 — Foundations (March 8 – April 7)

**Goal:** Get comfortable with Python syntax, tooling, and basic programming concepts.

### Week 1: Hello, Python!

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | day-01-hello-world.ipynb | Install Python, VS Code + Python extension, first script | Create hello-world script, print your name |
| 2 | day-02-variables.ipynb | Variables, naming conventions, dynamic typing | Write programs demonstrating variable assignment and types |
| 3 | day-03-data-types.ipynb | Data types: int, float, bool, None | Type checking exercises, type conversion |
| 4 | day-04-strings.ipynb | Strings: methods, f-strings, slicing, formatting | Build a string formatter with f-strings |
| 5 | day-05-lists-and-tuples.ipynb | Lists, tuples, indexing, slicing | Write programs with list operations |
| 6 | day-06-functions.ipynb | Functions: parameters, return values, default args | Build a temperature converter |
| 7 | day-07-mini-project-calculator.ipynb | Mini-project: Simple calculator | CLI calculator with input() |

### Week 2: Control Flow & Collections

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | day-01-if-else.ipynb | if/elif/else, ternary expressions | FizzBuzz implementation |
| 2 | day-02-loops.ipynb | for loops, while loops, break/continue, range() | 99 bottles, multiplication table |
| 3 | day-03-list-comprehensions.ipynb | List comprehensions, nested comprehensions | Transform lists using comprehensions |
| 4 | day-04-dictionaries.ipynb | Dictionaries: CRUD, iteration, methods | Build a dynamic phonebook |
| 5 | day-05-sets.ipynb | Sets: operations, frozen sets | Set operations on student data |
| 6 | day-06-string-methods.ipynb | Advanced string methods, regex basics | Text processing exercises |
| 7 | day-07-mini-project-contact-book.ipynb | Mini-project: Contact book | Full CRUD with dictionaries |

### Week 3: Functions & Error Handling

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | day-01-functions-deep-dive.ipynb | *args, **kwargs, lambda, closures | Advanced function exercises |
| 2 | day-02-scope-and-namespaces.ipynb | LEGB rule, global/local scope, nonlocal | Scope tracing exercises |
| 3 | day-03-exceptions.ipynb | try/except/finally/else, raising exceptions | Exception handling exercises |
| 4 | day-04-custom-exceptions.ipynb | Creating custom exception classes | Domain-specific exceptions |
| 5 | day-05-file-io.ipynb | Reading/writing files, context managers | Build a note-taking app |
| 6 | day-06-working-with-csv-json.ipynb | CSV and JSON file handling | Data file processing |
| 7 | day-07-mini-project-expense-tracker.ipynb | Mini-project: Expense tracker | Track expenses, save to CSV |

### Week 4: Modules & Packages

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | day-01-modules.ipynb | Importing modules, __name__ == '__main__' | Create and use custom modules |
| 2 | day-02-packages.ipynb | Package structure, __init__.py, relative imports | Build a package |
| 3 | day-03-standard-library.ipynb | os, sys, datetime, math, random | Standard library exercises |
| 4 | day-04-pip-and-virtualenv.ipynb | pip, virtualenv, requirements.txt | Manage dependencies |
| 5 | day-05-logging.ipynb | logging module, levels, handlers, formatters | Add logging to projects |
| 6 | day-06-command-line-args.ipynb | sys.argv, argparse | Build a CLI tool |
| 7 | day-07-mini-project-word-counter.ipynb | Mini-project: CLI word counter (like wc) | Count lines, words, chars from files |

**Month 1 Checkpoint:**
- [ ] Comfortable with basic syntax
- [ ] Can create and manage Python packages
- [ ] Understand functions, error handling, and file I/O
- [ ] Can read/write files and handle CLI input

**Month 1 Stretch Goals:** Add a `requirements.txt`, write a blog post about your first week, contribute a small fix to an open-source Python project (e.g., typo in docs).

---

## 📅 Month 2 — Data Structures & OOP (April 8 – May 7)

**Goal:** Master Python's object-oriented programming and advanced data structures.

### Week 5: Object-Oriented Programming Basics

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Classes and objects, __init__, self | day-01-classes-basics.ipynb | Create Student, Book classes |
| 2 | Instance vs class attributes, class methods, static methods | day-02-class-methods.ipynb | Add methods to classes |
| 3 | Properties, getters/setters, @property | day-03-properties.ipynb | Implement controlled attribute access |
| 4 | Magic methods: __str__, __repr__, __len__, __eq__ | day-04-magic-methods.ipynb | Make objects printable and comparable |
| 5 | Operator overloading: __add__, __mul__, __getitem__ | day-05-operator-overloading.ipynb | Build a Vector2D class |
| 6 | Encapsulation: name mangling, conventions | day-06-encapsulation.ipynb | Private/protected attributes |
| 7 | Mini-project: Library management system | day-07-mini-project-library-system.ipynb | OOP-based library with books, members |

### Week 6: Inheritance & Polymorphism

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Single inheritance, super() | day-01-inheritance.ipynb | Create class hierarchies |
| 2 | Multiple inheritance, MRO (Method Resolution Order) | day-02-multiple-inheritance.ipynb | Diamond problem exercises |
| 3 | Abstract base classes (abc module) | day-03-abstract-classes.ipynb | Define interfaces with ABC |
| 4 | Polymorphism and duck typing | day-04-polymorphism.ipynb | Write polymorphic functions |
| 5 | Mixins and composition vs inheritance | day-05-mixins-composition.ipynb | Refactor with composition |
| 6 | Dataclasses, NamedTuple, slots | day-06-dataclasses.ipynb | Modern Python data containers |
| 7 | Mini-project: Shape calculator with polymorphism | day-07-mini-project-shape-calculator.ipynb | Shape hierarchy with area/perimeter |

### Week 7: Advanced Data Structures

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | collections module: Counter, defaultdict, OrderedDict | day-01-collections.ipynb | Solve counting problems |
| 2 | deque, ChainMap, namedtuple | day-02-deque-chainmap.ipynb | Queue and stack implementations |
| 3 | heapq, bisect — priority queues and sorted containers | day-03-heapq-bisect.ipynb | Priority queue exercises |
| 4 | Linked lists from scratch | day-04-linked-lists.ipynb | Singly and doubly linked list |
| 5 | Stacks and queues from scratch | day-05-stacks-queues.ipynb | Implement with arrays and linked lists |
| 6 | Trees and graphs basics | day-06-trees-graphs.ipynb | Binary tree traversal |
| 7 | Mini-project: Task scheduler with priority queue | day-07-mini-project-task-scheduler.ipynb | Priority-based task management |

### Week 8: Iterators & Generators

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Iterables vs iterators, __iter__/__next__ | day-01-iterators.ipynb | Build custom iterators |
| 2 | Generators with yield, generator expressions | day-02-generators.ipynb | Memory-efficient data processing |
| 3 | itertools: chain, product, permutations, combinations | day-03-itertools.ipynb | Combinatorial exercises |
| 4 | functools: reduce, partial, lru_cache, wraps | day-04-functools.ipynb | Functional programming patterns |
| 5 | map, filter, zip, enumerate advanced usage | day-05-builtins-advanced.ipynb | Data transformation pipelines |
| 6 | Context managers: __enter__/__exit__, contextlib | day-06-context-managers.ipynb | Build custom context managers |
| 7 | Mini-project: Data pipeline processor | day-07-mini-project-data-pipeline.ipynb | Process CSV/JSON with generators |

**Month 2 Checkpoint:**
- [ ] Can design and implement class hierarchies
- [ ] Understand magic methods, properties, and dataclasses
- [ ] Comfortable with generators and iterators
- [ ] Can build custom data structures

**Month 2 Stretch Goals:** Implement a binary search tree with full traversal, build a simple ORM-like layer over dicts, refactor Month 1 projects to use OOP.

---

## 📅 Month 3 — Intermediate Python (May 8 – June 7)

**Goal:** Level up with decorators, testing, concurrency, and Pythonic design patterns.

### Week 9: Decorators & Metaprogramming

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Function decorators basics | day-01-decorators.ipynb | Write timing and logging decorators |
| 2 | Decorators with arguments, stacking decorators | day-02-decorators-advanced.ipynb | Configurable decorators |
| 3 | Class decorators, descriptor protocol | day-03-class-decorators.ipynb | Build a validation decorator |
| 4 | Metaclasses basics | day-04-metaclasses.ipynb | Understand type() and metaclass creation |
| 5 | __slots__, __init_subclass__, __class_getitem__ | day-05-advanced-class-features.ipynb | Memory-efficient classes |
| 6 | Dynamic attribute access: __getattr__, __setattr__ | day-06-dynamic-attributes.ipynb | Build an attribute proxy |
| 7 | Mini-project: Validation framework | day-07-mini-project-validation-framework.ipynb | Decorator-based field validation |

### Week 10: Testing & Quality

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | unittest: TestCase, assertions, setUp/tearDown | day-01-unittest.ipynb | Add tests to all previous projects |
| 2 | pytest: fixtures, parametrize, markers | day-02-pytest.ipynb | Test with pytest |
| 3 | Mocking: unittest.mock, patch, MagicMock | day-03-mocking.ipynb | Mock external dependencies |
| 4 | Test-driven development (TDD) workflow | day-04-tdd.ipynb | Build a module using TDD |
| 5 | Code quality: pylint, flake8, black, isort | day-05-code-quality.ipynb | Lint and format all projects |
| 6 | Type hints and mypy | day-06-type-hints.ipynb | Add type annotations everywhere |
| 7 | Mini-project: Fully tested math library | day-07-mini-project-math-library.ipynb | Statistics, linear algebra with 100% coverage |

### Week 11: Concurrency & Parallelism

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Threading: Thread, Lock, RLock | day-01-threading.ipynb | Parallel downloads |
| 2 | Thread pools: concurrent.futures.ThreadPoolExecutor | day-02-thread-pools.ipynb | Concurrent URL fetching |
| 3 | Multiprocessing: Process, Pool, Queue | day-03-multiprocessing.ipynb | CPU-bound parallel tasks |
| 4 | The GIL: what it is, when it matters | day-04-the-gil.ipynb | Benchmark threads vs processes |
| 5 | Async/await: asyncio basics, coroutines | day-05-asyncio-basics.ipynb | Simple async functions |
| 6 | Async advanced: gather, create_task, semaphores | day-06-asyncio-advanced.ipynb | Async patterns |
| 7 | Mini-project: Async web scraper | day-07-mini-project-async-scraper.ipynb | Scrape multiple sites concurrently |

### Week 12: Design Patterns & Pythonic Code

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Singleton, Factory, Builder patterns | day-01-creational-patterns.ipynb | Implement creational patterns |
| 2 | Observer, Strategy, Command patterns | day-02-behavioral-patterns.ipynb | Event-driven code |
| 3 | Adapter, Decorator, Proxy patterns | day-03-structural-patterns.ipynb | Structural pattern exercises |
| 4 | SOLID principles in Python | day-04-solid-principles.ipynb | Refactor code to follow SOLID |
| 5 | Pythonic idioms: EAFP, comprehensions, unpacking | day-05-pythonic-idioms.ipynb | Write Pythonic code |
| 6 | Performance: profiling, caching, optimization | day-06-performance.ipynb | Profile and optimize code |
| 7 | Mini-project: Plugin system | day-07-mini-project-plugin-system.ipynb | Extensible plugin architecture |

**Month 3 Checkpoint:**
- [ ] Decorators and metaprogramming feel natural
- [ ] Write thorough tests for all code
- [ ] Understand concurrency options (threads, processes, async)
- [ ] Code is idiomatic and well-tested

**Month 3 Stretch Goals:** Achieve 90%+ test coverage on a project, write a custom metaclass for a real use case, benchmark and document when to use threads vs processes vs async.

---

## 📅 Month 4 — Web Development & APIs (June 8 – July 7)

**Goal:** Build web applications and REST APIs with Python.

### Week 13: HTTP & Web Basics

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | HTTP fundamentals: methods, status codes, headers | Explore HTTP with Python |
| 2 | requests library: GET, POST, headers, sessions | Fetch data from public APIs |
| 3 | BeautifulSoup: HTML parsing, web scraping | Scrape a website |
| 4 | REST API concepts, JSON handling | Parse API responses |
| 5 | Building a simple HTTP server with http.server | Serve files locally |
| 6 | Introduction to Flask: hello world, routing | First Flask app |
| 7 | Mini-project: API data aggregator | Fetch and combine data from multiple APIs |

### Week 14: Flask Web Development

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Flask routes, templates (Jinja2), static files | Dynamic web pages |
| 2 | Flask forms, request handling, validation | User input handling |
| 3 | Flask blueprints, application factory pattern | Modular Flask apps |
| 4 | SQLAlchemy ORM with Flask: models, queries | Database integration |
| 5 | Authentication: Flask-Login, password hashing | User signup/login |
| 6 | REST APIs with Flask: jsonify, request parsing | Build REST endpoints |
| 7 | Mini-project: Blog application | Full CRUD blog with auth |

### Week 15: FastAPI & Modern Web

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | FastAPI introduction: path params, query params | First FastAPI app |
| 2 | Pydantic models, request/response validation | Type-safe APIs |
| 3 | FastAPI dependency injection, middleware | Modular API design |
| 4 | Database with SQLAlchemy + FastAPI | Async database operations |
| 5 | Authentication: OAuth2, JWT tokens | Secure API endpoints |
| 6 | WebSockets with FastAPI | Real-time communication |
| 7 | Mini-project: REST API — bookmark manager | Full CRUD API with FastAPI |

### Week 16: Databases & Deployment

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | SQLite with sqlite3 module | Create tables, basic queries |
| 2 | PostgreSQL with psycopg2/asyncpg | Production database |
| 3 | Database migrations with Alembic | Version-controlled schema changes |
| 4 | Redis: caching, sessions, rate limiting | Add caching layer |
| 5 | Docker: containerizing a Python app | Write a Dockerfile |
| 6 | CI/CD: GitHub Actions for Python | Automated testing |
| 7 | Mini-project: Full-stack URL shortener | Web API + database + Docker |

**Month 4 Checkpoint:**
- [ ] Can build web applications with Flask and FastAPI
- [ ] Comfortable building REST APIs
- [ ] Can work with databases (SQLite, PostgreSQL, Redis)
- [ ] Understand deployment and containerization

**Month 4 Stretch Goals:** Deploy your URL shortener to a free tier (Railway, Render, Fly.io), add API documentation with Swagger/OpenAPI, implement rate limiting and caching.

---

## 📅 Month 5 — Advanced Topics & Data Science (July 8 – August 7)

**Goal:** Explore data science, automation, and advanced Python features.

### Week 17: Data Science Foundations

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | NumPy: arrays, vectorized operations | Array manipulation exercises |
| 2 | NumPy advanced: broadcasting, fancy indexing | Complex array operations |
| 3 | Pandas: Series, DataFrame, basic operations | Data loading and exploration |
| 4 | Pandas: groupby, merge, pivot tables | Data aggregation exercises |
| 5 | Matplotlib: basic plots, customization | Visualize datasets |
| 6 | Seaborn: statistical visualizations | Advanced plotting |
| 7 | Mini-project: Data analysis dashboard | Analyze a real-world dataset |

### Week 18: Automation & Scripting

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Regular expressions: re module deep dive | Pattern matching exercises |
| 2 | Web scraping with Selenium | Automate browser tasks |
| 3 | Email automation: smtplib, email module | Send automated emails |
| 4 | PDF and Excel: openpyxl, PyPDF2 | Document processing |
| 5 | Task scheduling: schedule, APScheduler | Automate recurring tasks |
| 6 | Working with APIs: OAuth, rate limiting, pagination | API integration patterns |
| 7 | Mini-project: Personal automation toolkit | Swiss-army knife CLI |

### Week 19: Advanced Python Features

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | C extensions: ctypes, cffi | Call C functions from Python |
| 2 | Cython basics: speed up Python code | Optimize hot loops |
| 3 | Memory management: gc module, weak references | Understand Python's memory model |
| 4 | Descriptors deep dive | Build a validation descriptor |
| 5 | Import system: importlib, custom importers | Dynamic imports |
| 6 | Protocols and structural subtyping | Protocol classes |
| 7 | Mini-project: High-performance data processor | Optimized data processing pipeline |

### Week 20: Machine Learning Basics

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | scikit-learn: datasets, preprocessing | Load and prepare data |
| 2 | Classification: logistic regression, decision trees | Train classifiers |
| 3 | Regression: linear regression, evaluation metrics | Predict continuous values |
| 4 | Model evaluation: cross-validation, confusion matrix | Evaluate models properly |
| 5 | Feature engineering and pipelines | Build ML pipelines |
| 6 | Intro to deep learning concepts with PyTorch/TensorFlow | Neural network basics |
| 7 | Mini-project: ML prediction model | End-to-end ML project |

**Month 5 Checkpoint:**
- [ ] Can analyze data with NumPy and Pandas
- [ ] Comfortable with automation and scripting
- [ ] Understand Python's advanced features
- [ ] Can build basic ML models

**Month 5 Stretch Goals:** Build a Streamlit or Dash dashboard, automate a real task you do weekly, train a model on a Kaggle dataset and document your pipeline.

---

## 📅 Month 6 — Capstone & Mastery (August 8 – August 31)

**Goal:** Build a capstone project that ties everything together. Contribute to open source. Solidify mastery.

### Week 21: Capstone Planning & Architecture

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Choose your capstone project (see ideas below) | Write a design document in DESIGN.md |
| 2 | Architecture: modules, package structure, dependency planning | Create project skeleton |
| 3 | Set up CI/CD: GitHub Actions for Python (test, lint, format) | .github/workflows/python.yml |
| 4 | Set up linting: pylint, black, mypy, pre-commit hooks | pyproject.toml configuration |
| 5 | Core data models and classes | Implement foundation types |
| 6 | Core logic — part 1 | Start implementing main functionality |
| 7 | Core logic — part 2 | Continue implementation |

### Week 22: Capstone — Build Phase

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1-3 | Feature development | Implement major features 1-3 |
| 4 | Error handling & edge cases | Robust error handling |
| 5 | Testing: unit + integration tests | Achieve >80% coverage |
| 6 | CLI or API interface | User-facing interface |
| 7 | Performance tuning | Profile and optimize |

### Week 23: Capstone — Polish & Open Source

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Documentation: README, API docs, examples | Comprehensive documentation |
| 2 | Publishing to PyPI (optional) | python -m build && twine upload |
| 3 | Open source contribution: find a Python project | Identify a good first issue |
| 4 | Open source: fork, fix, submit PR | First Python open source contribution |
| 5 | Code review: review your Month 1 code with fresh eyes | Refactor early code |
| 6 | Write a blog post or tutorial | Share your knowledge |
| 7 | Capstone v1.0 release | Tag a release on GitHub |

### Week 24: Advanced Topics & Beyond

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | GraphQL with Python (Strawberry/Ariadne) | Build a GraphQL API |
| 2 | Microservices architecture | Design a microservice |
| 3 | Advanced async: aiohttp, trio | Async frameworks |
| 4 | Python packaging: setuptools, poetry, pyproject.toml | Professional packaging |
| 5 | Review and organize your entire repository | Clean up, tag, document |
| 6 | Create a "What I Learned" summary document | LEARNINGS.md |
| 7 | Celebrate! 🎉 | Reflect on 6 months of growth |

---

## 🛠️ All 24 Mini-Projects at a Glance

| Week | Project | Key Skills |
|------|---------|------------|
| 1 | Calculator | input(), basic arithmetic, functions |
| 2 | Contact book | Dictionaries, CRUD, user interaction |
| 3 | Expense tracker | File I/O, CSV, data persistence |
| 4 | Word counter (wc) | argparse, file reading, CLI |
| 5 | Library management | OOP, classes, relationships |
| 6 | Shape calculator | Inheritance, polymorphism |
| 7 | Task scheduler | Priority queue, heapq |
| 8 | Data pipeline | Generators, CSV/JSON processing |
| 9 | Validation framework | Decorators, descriptors |
| 10 | Math library | pytest, TDD, 100% coverage |
| 11 | Async web scraper | asyncio, aiohttp, BeautifulSoup |
| 12 | Plugin system | Design patterns, extensibility |
| 13 | API data aggregator | requests, JSON, multiple APIs |
| 14 | Blog application | Flask, SQLAlchemy, auth |
| 15 | Bookmark manager API | FastAPI, Pydantic, REST |
| 16 | URL shortener | Full-stack, Docker, Redis |
| 17 | Data analysis dashboard | Pandas, Matplotlib, Seaborn |
| 18 | Personal automation toolkit | Regex, scheduling, APIs |
| 19 | High-performance data processor | Optimization, Cython/ctypes |
| 20 | ML prediction model | scikit-learn, pipelines |
| 21–23 | Capstone project | Your choice — see ideas below |
| 24 | GraphQL API / Microservice | Advanced topics |

---

## 🎯 Capstone Project Ideas

| Project | Skills Used |
|---------|-------------|
| 🌐 Full-Stack Web App | Flask/FastAPI, SQLAlchemy, auth, Docker |
| 📊 Data Dashboard | Pandas, Matplotlib, Dash/Streamlit |
| 🤖 Chatbot | NLP, APIs, async, WebSockets |
| 🕷️ Web Scraping Framework | BeautifulSoup, Selenium, async, scheduling |
| 📦 Package Manager (mini) | CLI, networking, file system, TOML |
| 🎮 Game with Pygame | Game loop, OOP, state management |
| 📈 Stock/Crypto Tracker | APIs, real-time data, visualization |
| 🔍 Full-Text Search Engine | Indexing, data structures, file I/O |

---

## 🎯 1000 Interview Questions Quiz

The companion quiz website offers **1000 multiple-choice questions** covering the full Python curriculum. Use it to test your knowledge, prepare for interviews, and identify weak spots.

### Quiz Topics

| Part | Topic | Questions |
|------|-------|-----------|
| 1 | Basics & Syntax | Q1–Q100 |
| 2 | Strings, Lists & Tuples | Q101–Q200 |
| 3 | OOP & Classes | Q201–Q300 |
| 4 | Functional Programming & Iterators | Q301–Q400 |
| 5 | File I/O & Exceptions | Q401–Q500 |
| 6 | Modules, Packages & Stdlib | Q501–Q600 |
| 7 | Decorators, Generators & Metaprogramming | Q601–Q700 |
| 8 | Web Development & APIs | Q701–Q800 |
| 9 | Data Science & NumPy/Pandas | Q801–Q900 |
| 10 | Advanced Topics & Mixed | Q901–Q1000 |

### Features

- **Flexible quiz sizes:** Pick 10, 20, 30, 50, or 100 random questions per topic
- **Instant feedback:** See correct/incorrect answers immediately after each question
- **Scoring:** Track your score and review missed questions
- **Dark/Light theme:** Toggle between themes for comfortable studying
- **Topic filtering:** Focus on specific areas (basics, OOP, web, data science, etc.)
- **Responsive design:** Works on desktop, tablet, and mobile

### How to Use

1. **Online:** Visit [williampepple1.github.io/learn-python-from-scratch](https://williampepple1.github.io/learn-python-from-scratch/) and select a topic and quiz size
2. **Local:** Run `python build_quiz.py` to regenerate `docs/quiz-data.js` from the MCQ notebooks, then open `docs/index.html` in a browser
3. **Study mode:** Work through the source notebooks in `resources/` (python-interview-mcq-part1.ipynb through part10.ipynb) for detailed explanations

### Deploy to GitHub Pages

1. Ensure your quiz website files are in the `docs/` folder (index.html, quiz-data.js, guides-data.js)
2. In your GitHub repo: **Settings → Pages → Source** → select "Deploy from a branch"
3. Choose the branch (e.g., `main`) and folder `docs/`
4. Save. Your site will be live at `https://<username>.github.io/learn-python-from-scratch/`
5. Run `python build_quiz.py` and `python build_guides.py` before each deploy to refresh the data

---

## 📝 500 Hands-On Exercises

The `resources/exercises/` folder contains **500 auto-graded exercises** in 10 Jupyter notebooks. Each exercise includes a problem description, a code cell for your solution, and a test cell that runs assertions.

### Exercise Parts

| Part | Exercises | Topics |
|------|-----------|--------|
| 1 | E1–E50 | Basics (variables, types, operators, control flow) |
| 2 | E51–E100 | Strings & Lists |
| 3 | E101–E150 | Dictionaries & Sets |
| 4 | E151–E200 | Functions |
| 5 | E201–E250 | OOP & Classes |
| 6 | E251–E300 | File I/O & Exceptions |
| 7 | E301–E350 | Comprehensions & Generators |
| 8 | E351–E400 | Decorators & Functional Programming |
| 9 | E401–E450 | Modules & Testing |
| 10 | E451–E500 | Advanced (Async, Metaclasses, C Extensions) |

### Example Exercise

```python
# Exercise: Write a function that doubles a number
def double(x):
    # YOUR CODE HERE
    pass

# Test cell:
assert double(5) == 10
assert double(-3) == -6
print("✅ Exercise 42 passed!")
```

**Solution:**
```python
def double(x):
    return x * 2
```

### How to Complete Exercises

1. Open the notebook (e.g., `exercises-part1-basics.ipynb`)
2. Read the problem in the markdown cell
3. Replace `pass` or the placeholder with your solution
4. Run the test cell — if all assertions pass, you'll see ✅
5. Commit your solution to GitHub

---

## 📅 Daily Commit Strategy

**Rule:** Make at least one commit to this repository every day for 6 months.

### What Counts as a Commit

- ✅ Completing a day's notebook and committing it
- ✅ Solving one or more exercises
- ✅ Finishing a mini-project
- ✅ Fixing a typo or improving documentation
- ✅ Adding a test, refactoring code, or updating dependencies
- ✅ Writing a design doc, LEARNINGS.md, or blog post draft

### What Doesn't Count

- ❌ Empty commits
- ❌ Commits to other repositories (unless they're part of your capstone)
- ❌ Automated commits from bots (keep those separate)

### Tips

- **Batch small work:** If you're short on time, fix a typo, add a docstring, or format one file
- **Use meaningful messages:** `git commit -m "Day 12: Add list comprehensions exercises"` helps you track progress
- **Streak mindset:** Consistency builds habit. Missing a day? Commit twice the next day and move on
- **Link to curriculum:** Reference the day/week in commit messages (e.g., `Week 3 Day 4: Custom exceptions`)

### Sample Commit Messages

```
Week 1 Day 1: Hello world script
Week 2 Day 3: List comprehensions exercises
Week 4 Day 7: Mini-project word counter
Month 2: Add OOP exercises E201-E220
Fix: Correct FizzBuzz edge case for 15
Docs: Add docstrings to calculator module
Refactor: Extract validation logic to separate function
```

---

## 📚 Recommended Resources

### Books (Free Online)

- 📖 [Python Tutorial (docs.python.org)](https://docs.python.org/3/tutorial/) — Official Python tutorial
- 📖 [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) — Practical projects for beginners
- 📖 [Think Python](https://greenteapress.com/thinkpython2/) — How to think like a computer scientist

### Books (Paid / Advanced)

- 📕 *Fluent Python* by Luciano Ramalho — Deep dive into Python's internals
- 📗 *Python Cookbook* by David Beazley — Recipes for experienced programmers
- 📘 *Effective Python* by Brett Slatkin — 90 specific ways to write better Python

### Interactive

- 🧩 [Exercism Python Track](https://exercism.org/tracks/python) — Mentored exercises
- 🎮 [Advent of Code](https://adventofcode.com/) — Algorithmic puzzles
- 🏋️ [LeetCode](https://leetcode.com/) — Interview preparation

### Video

- 🎥 [Corey Schafer (YouTube)](https://www.youtube.com/@coreyms) — Clear Python tutorials
- 🎥 [Tech With Tim (YouTube)](https://www.youtube.com/@TechWithTim) — Projects and concepts
- 🎥 [ArjanCodes (YouTube)](https://www.youtube.com/@ArjanCodes) — Software design and best practices

### Community

- 💬 [Python Discord](https://www.pythondiscord.com/) — Help and discussion
- 💬 [r/learnpython](https://www.reddit.com/r/learnpython/) — Reddit community
- 💬 [Real Python](https://realpython.com/) — Tutorials and articles

---

## 📊 Progress Tracker

Use this checklist to track your journey. Check off each week as you complete it.

### Month 1 — Foundations
- [ ] Week 1: Hello, Python!
- [ ] Week 2: Control Flow & Collections
- [ ] Week 3: Functions & Error Handling
- [ ] Week 4: Modules & Packages

### Month 2 — Data Structures & OOP
- [ ] Week 5: Object-Oriented Programming Basics
- [ ] Week 6: Inheritance & Polymorphism
- [ ] Week 7: Advanced Data Structures
- [ ] Week 8: Iterators & Generators

### Month 3 — Intermediate Python
- [ ] Week 9: Decorators & Metaprogramming
- [ ] Week 10: Testing & Quality
- [ ] Week 11: Concurrency & Parallelism
- [ ] Week 12: Design Patterns & Pythonic Code

### Month 4 — Web Development & APIs
- [ ] Week 13: HTTP & Web Basics
- [ ] Week 14: Flask Web Development
- [ ] Week 15: FastAPI & Modern Web
- [ ] Week 16: Databases & Deployment

### Month 5 — Advanced Topics & Data Science
- [ ] Week 17: Data Science Foundations
- [ ] Week 18: Automation & Scripting
- [ ] Week 19: Advanced Python Features
- [ ] Week 20: Machine Learning Basics

### Month 6 — Capstone & Mastery
- [ ] Week 21: Capstone Planning & Architecture
- [ ] Week 22: Capstone — Build Phase
- [ ] Week 23: Capstone — Polish & Open Source
- [ ] Week 24: Advanced Topics & Beyond

---

## 💡 Tips for Success

1. **Use a virtual environment.** Always. `python -m venv venv` keeps dependencies isolated and reproducible.
2. **Read tracebacks.** Python's error messages are helpful. Read them top-to-bottom; the last line often points to the issue.
3. **Use the REPL.** Fire up `python` or `ipython` to experiment. Try `help()`, `dir()`, and `type()` on everything.
4. **Write docstrings.** Document functions and modules as you go. Future you will thank present you.
5. **Embrace EAFP.** "Easier to Ask for Forgiveness than Permission" — try first, catch exceptions. It's Pythonic.
6. **Use type hints.** They improve readability and enable static checking with mypy.
7. **Test early.** Add tests as soon as code works. Don't leave testing for "later."
8. **Read others' code.** Browse popular Python projects on GitHub. Learn from real-world patterns.
9. **One concept at a time.** Don't rush. Master variables before classes; master classes before metaclasses.
10. **Celebrate small wins.** Each passing test, each working function, each commit — that's progress.

### Python-Specific Tips

- **PEP 8 is your friend.** Use `black` and `isort` to auto-format. Consistency matters more than personal preference.
- **List comprehensions over loops.** When building lists, prefer `[x*2 for x in items]` over manual loops — they're faster and more readable.
- **Use `with` for resources.** File handles, database connections, locks — always use context managers to avoid leaks.
- **Know your data structures.** Use `set` for membership tests (O(1)), `dict` for key-value lookups, `list` for ordered sequences.
- **Avoid mutable default arguments.** `def foo(items=[])` is a trap. Use `def foo(items=None)` and `items = items or []` instead.
- **Learn the standard library.** `collections`, `itertools`, `functools`, `pathlib` — they solve 80% of "how do I…?" questions.

---

## 📖 15 Interactive Concept Guides

The `resources/guides/` folder contains **15 concept guide notebooks** that explain Python's building blocks in depth. These are rendered on the quiz website for easy reference.

| # | Guide | Topics Covered |
|---|-------|----------------|
| 1 | 01-variables-and-types.ipynb | Variables, dynamic typing, int, float, str, bool, None |
| 2 | 02-functions.ipynb | Defining functions, parameters, return values, scope |
| 3 | 03-control-flow.ipynb | if/elif/else, for, while, break, continue |
| 4 | 04-strings.ipynb | String methods, slicing, f-strings, formatting |
| 5 | 05-lists-tuples.ipynb | Lists, tuples, indexing, slicing, mutability |
| 6 | 06-dictionaries-sets.ipynb | Dicts, sets, CRUD operations, set operations |
| 7 | 07-file-io.ipynb | Reading/writing files, context managers, CSV, JSON |
| 8 | 08-exceptions.ipynb | try/except/finally, raising, custom exceptions |
| 9 | 09-modules-packages.ipynb | Import system, packages, __init__.py |
| 10 | 10-oop.ipynb | Classes, inheritance, polymorphism, magic methods |
| 11 | 11-iterators-generators.ipynb | __iter__, __next__, yield, generator expressions |
| 12 | 12-decorators.ipynb | Function decorators, functools.wraps, stacking |
| 13 | 13-context-managers.ipynb | with statement, __enter__, __exit__, contextlib |
| 14 | 14-async-await.ipynb | asyncio, coroutines, async/await, concurrent I/O |
| 15 | 15-concurrency.ipynb | Threading, multiprocessing, GIL, when to use what |

Run `python build_guides.py` to regenerate `docs/guides-data.js` from these notebooks.

---

## ❓ Frequently Asked Questions

**Q: I'm falling behind. Should I skip weeks?**  
A: It's better to slow down and master fundamentals than to rush. If you must skip, prioritize: complete Month 1, then OOP (Month 2), then pick web OR data science based on your goals.

**Q: Do I need to complete all 500 exercises?**  
A: No, but aim for at least 300. Focus on parts that match your weak areas. The exercises reinforce the notebooks.

**Q: Jupyter vs VS Code for notebooks?**  
A: Both work. VS Code integrates well with Git and has a cleaner UI. Jupyter Lab offers a more notebook-centric workflow. Choose what you're comfortable with.

**Q: Python 3.10, 3.11, or 3.12?**  
A: 3.10+ is fine. 3.11+ has performance improvements. Avoid 3.9 or older for new projects.

**Q: How do I build the quiz website locally?**  
A: Run `python build_quiz.py` and `python build_guides.py`, then open `docs/index.html` in a browser. No server needed for local use.

**Q: Can I use this with a study group?**  
A: Yes! Fork the repo, form a group, and commit daily. Review each other's code. The curriculum works well for pair programming.

---

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| `jupyter: command not found` | Ensure virtual env is activated. Run `pip install jupyter notebook` |
| Kernel not found in VS Code | Install the "Jupyter" extension. Select the Python interpreter from your venv |
| `ModuleNotFoundError` | Activate your venv. Install missing package with `pip install <package>` |
| Notebook won't run / freezes | Restart the kernel (Kernel → Restart). Check for infinite loops |
| Git says "nothing to commit" | Add new files with `git add`. Or make a small edit (comment, docstring) |
| Quiz data not updating | Run `python build_quiz.py` before opening the site. Check that MCQ notebooks exist |
| Import errors in notebooks | Use relative imports for local packages. Add project root to `sys.path` if needed |

---

## 🚀 Get Started

- **📓 [Start with the notebooks](month-01-foundations/week-01/day-01-hello-world.ipynb)** — Open Week 1, Day 1 and begin your journey
- **🎯 [Take the quiz](https://williampepple1.github.io/learn-python-from-scratch/)** — Test your knowledge with 1000 MCQs
- **📝 [Do the exercises](resources/exercises/)** — 500 hands-on problems with instant feedback

---

*Built with 🐍 and determination*

> *"The only way to learn a new programming language is by writing programs in it."* — Dennis Ritchie
