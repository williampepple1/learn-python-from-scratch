const GUIDES_DATA = [
 {
  "order": 1,
  "slug": "variables-and-types",
  "emoji": "📦",
  "title": "Variables and Types",
  "sections": [
   {
    "heading": "Variables and Assignment",
    "blocks": [
     {
      "type": "markdown",
      "content": "Variables are created by assignment. No declaration is needed. Names follow the same rules as identifiers."
     },
     {
      "type": "code",
      "content": "x = 42\nname = \"Alice\"\npi = 3.14159\nis_active = True\nprint(x, name, pi, is_active)"
     }
    ]
   },
   {
    "heading": "Dynamic Typing",
    "blocks": [
     {
      "type": "markdown",
      "content": "Python is dynamically typed. A variable can be reassigned to a different type."
     },
     {
      "type": "code",
      "content": "value = 10\nprint(type(value), value)\n\nvalue = \"ten\"\nprint(type(value), value)\n\nvalue = [1, 2, 3]\nprint(type(value), value)"
     }
    ]
   },
   {
    "heading": "Integer (int)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Integers have arbitrary precision in Python—no overflow for whole numbers."
     },
     {
      "type": "code",
      "content": "a = 42\nb = -17\nc = 1_000_000  # Underscores for readability\nbig = 10 ** 100\nprint(a, b, c, big)"
     }
    ]
   },
   {
    "heading": "Float (float)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Floating-point numbers use IEEE 754 double precision. Be aware of precision limits."
     },
     {
      "type": "code",
      "content": "x = 3.14\ny = 2e-3  # Scientific notation: 0.002\nz = float(\"inf\")  # Infinity\nprint(x, y, z)\nprint(0.1 + 0.2)  # Floating-point precision quirk"
     }
    ]
   },
   {
    "heading": "String (str)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Strings are immutable sequences of Unicode characters."
     },
     {
      "type": "code",
      "content": "s1 = 'single quotes'\ns2 = \"double quotes\"\ns3 = '''multi\nline'''\nprint(s1, s2)\nprint(s3)"
     }
    ]
   },
   {
    "heading": "Boolean (bool)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Booleans are `True` and `False` (capitalized). They subclass `int`."
     },
     {
      "type": "code",
      "content": "flag = True\nprint(flag, type(flag))\nprint(True + 1)  # 2, because True == 1"
     }
    ]
   },
   {
    "heading": "None",
    "blocks": [
     {
      "type": "markdown",
      "content": "`None` is the sole instance of `NoneType`. It represents the absence of a value."
     },
     {
      "type": "code",
      "content": "result = None\nprint(result, type(result))\n\ndef no_return():\n    pass\n\nprint(no_return())  # None"
     }
    ]
   },
   {
    "heading": "Type Conversion",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use built-in constructors to convert between types: `int()`, `float()`, `str()`, `bool()`."
     },
     {
      "type": "code",
      "content": "print(int(\"42\"))\nprint(float(\"3.14\"))\nprint(str(42))\nprint(bool(1), bool(0), bool(\"\"), bool(\"hello\"))"
     }
    ]
   },
   {
    "heading": "Type Checking",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `type()` for exact type or `isinstance()` for type hierarchy checks."
     },
     {
      "type": "code",
      "content": "x = 42\nprint(type(x) == int)\nprint(isinstance(x, int))\nprint(isinstance(True, int))  # bool subclasses int"
     }
    ]
   },
   {
    "heading": "The id() Function",
    "blocks": [
     {
      "type": "markdown",
      "content": "`id()` returns the memory address (identity) of an object. Two variables pointing to the same object have the same id."
     },
     {
      "type": "code",
      "content": "a = [1, 2, 3]\nb = a\nc = [1, 2, 3]\nprint(id(a), id(b), id(c))\nprint(a is b, a is c)"
     }
    ]
   },
   {
    "heading": "Mutability",
    "blocks": [
     {
      "type": "markdown",
      "content": "Mutable objects can be changed in place; immutable objects cannot. Lists and dicts are mutable; int, float, str, tuple, frozenset are immutable."
     },
     {
      "type": "code",
      "content": "lst = [1, 2, 3]\nlst.append(4)  # In-place modification\nprint(lst)\n\ns = \"hello\"\n# s[0] = 'H'  # TypeError: str is immutable\ns = s.upper()  # Returns new string\nprint(s)"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned about variables, dynamic typing, built-in types (int, float, str, bool, None), type conversion, type checking, `id()`, and mutability. These fundamentals underpin all Python programming."
     }
    ]
   }
  ],
  "sectionCount": 12
 },
 {
  "order": 2,
  "slug": "functions",
  "emoji": "⚙️",
  "title": "Functions",
  "sections": [
   {
    "heading": "Defining Functions with def",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use the `def` keyword to define a function. The function body is indented."
     },
     {
      "type": "code",
      "content": "def greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Alice\")"
     }
    ]
   },
   {
    "heading": "Parameters and Arguments",
    "blocks": [
     {
      "type": "markdown",
      "content": "Parameters are the names in the function definition. Arguments are the values passed when calling."
     },
     {
      "type": "code",
      "content": "def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)\n\nresult = add(b=5, a=3)  # Keyword arguments\nprint(result)"
     }
    ]
   },
   {
    "heading": "Return Values",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `return` to send a value back. Without `return`, the function returns `None`."
     },
     {
      "type": "code",
      "content": "def square(x):\n    return x * x\n\nprint(square(4))\n\ndef multi_return():\n    return 1, 2, 3  # Returns a tuple\n\na, b, c = multi_return()\nprint(a, b, c)"
     }
    ]
   },
   {
    "heading": "Default Arguments",
    "blocks": [
     {
      "type": "markdown",
      "content": "Parameters can have default values. Defaults are evaluated once at definition time."
     },
     {
      "type": "code",
      "content": "def greet(name, greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"\n\nprint(greet(\"Alice\"))\nprint(greet(\"Bob\", \"Hi\"))\n\n# Mutable default gotcha\ndef append_to(element, target=[]):  # Avoid! Use target=None\n    target.append(element)\n    return target\n\ndef append_to_safe(element, target=None):\n    if target is None:\n        target = []\n    target.append(element)\n    return target"
     }
    ]
   },
   {
    "heading": "*args: Variable Positional Arguments",
    "blocks": [
     {
      "type": "markdown",
      "content": "`*args` collects extra positional arguments into a tuple."
     },
     {
      "type": "code",
      "content": "def sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3, 4, 5))\nprint(sum_all())\n\ndef log(prefix, *messages):\n    for msg in messages:\n        print(f\"[{prefix}] {msg}\")\n\nlog(\"INFO\", \"Started\", \"Running\", \"Done\")"
     }
    ]
   },
   {
    "heading": "**kwargs: Variable Keyword Arguments",
    "blocks": [
     {
      "type": "markdown",
      "content": "`**kwargs` collects extra keyword arguments into a dictionary."
     },
     {
      "type": "code",
      "content": "def print_config(**kwargs):\n    for key, value in kwargs.items():\n        print(f\"  {key}: {value}\")\n\nprint_config(host=\"localhost\", port=8080, debug=True)\n\ndef wrapper(*args, **kwargs):\n    print(\"args:\", args)\n    print(\"kwargs:\", kwargs)\n\nwrapper(1, 2, x=3, y=4)"
     }
    ]
   },
   {
    "heading": "Lambda Functions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Lambdas are anonymous, single-expression functions. Use them for short callbacks."
     },
     {
      "type": "code",
      "content": "square = lambda x: x * x\nprint(square(5))\n\npairs = [(1, 'one'), (3, 'three'), (2, 'two')]\npairs.sort(key=lambda p: p[0])\nprint(pairs)\n\nadd = lambda a, b: a + b\nprint(add(10, 20))"
     }
    ]
   },
   {
    "heading": "Docstrings",
    "blocks": [
     {
      "type": "markdown",
      "content": "Docstrings document functions. They're stored in `__doc__` and used by `help()`."
     },
     {
      "type": "code",
      "content": "def factorial(n):\n    \"\"\"Compute n! (n factorial).\n\n    Args:\n        n: A non-negative integer.\n\n    Returns:\n        The factorial of n.\n    \"\"\"\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial.__doc__)\nhelp(factorial)"
     }
    ]
   },
   {
    "heading": "Scope: LEGB Rule",
    "blocks": [
     {
      "type": "markdown",
      "content": "Python looks up names in order: Local, Enclosing, Global, Built-in."
     },
     {
      "type": "code",
      "content": "x = \"global\"\n\ndef outer():\n    x = \"enclosing\"\n    def inner():\n        x = \"local\"\n        print(x)\n    inner()\n    print(x)\n\nouter()\nprint(x)"
     }
    ]
   },
   {
    "heading": "global and nonlocal",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `global` to modify a global variable. Use `nonlocal` to modify a variable in an enclosing scope."
     },
     {
      "type": "code",
      "content": "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nincrement()\nprint(counter)\n\ndef outer():\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n        return count\n    return inner\n\ninc = outer()\nprint(inc(), inc(), inc())"
     }
    ]
   },
   {
    "heading": "Closures",
    "blocks": [
     {
      "type": "markdown",
      "content": "A closure is a function that captures variables from its enclosing scope."
     },
     {
      "type": "code",
      "content": "def make_multiplier(factor):\n    def multiply(x):\n        return x * factor  # factor is captured\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\nprint(double(5), triple(5))\n\ndef make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\n\nc = make_counter()\nprint(c(), c(), c())"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned about `def`, parameters, `return`, default args, `*args`, `**kwargs`, lambdas, docstrings, scope (LEGB), and closures. Functions are first-class objects in Python—you can pass them around and return them."
     }
    ]
   }
  ],
  "sectionCount": 12
 },
 {
  "order": 3,
  "slug": "control-flow",
  "emoji": "🔀",
  "title": "Control Flow",
  "sections": [
   {
    "heading": "if / elif / else",
    "blocks": [
     {
      "type": "markdown",
      "content": "Conditionals branch execution based on boolean expressions. Use `elif` for multiple conditions."
     },
     {
      "type": "code",
      "content": "age = 20\nif age < 13:\n    print(\"child\")\nelif age < 20:\n    print(\"teen\")\nelse:\n    print(\"adult\")"
     }
    ]
   },
   {
    "heading": "Truthiness",
    "blocks": [
     {
      "type": "markdown",
      "content": "Python uses \"truthiness\": values are either truthy or falsy in boolean context. Falsy: `False`, `None`, `0`, `\"\"`, `[]`, `{}`, `()`."
     },
     {
      "type": "code",
      "content": "if []:\n    print(\"list has items\")\nelse:\n    print(\"empty list is falsy\")\n\nif \"hello\":\n    print(\"non-empty string is truthy\")\n\nname = \"\"\nif not name:\n    print(\"name is empty or falsy\")"
     }
    ]
   },
   {
    "heading": "for Loops",
    "blocks": [
     {
      "type": "markdown",
      "content": "`for` iterates over iterables: sequences, dicts, files, etc."
     },
     {
      "type": "code",
      "content": "for i in [1, 2, 3]:\n    print(i)\n\nfor char in \"hello\":\n    print(char)\n\nfor key, value in {\"a\": 1, \"b\": 2}.items():\n    print(key, value)"
     }
    ]
   },
   {
    "heading": "range()",
    "blocks": [
     {
      "type": "markdown",
      "content": "`range()` produces a sequence of integers. Use it for counted loops."
     },
     {
      "type": "code",
      "content": "for i in range(5):\n    print(i, end=\" \")\nprint()\n\nfor i in range(2, 8):\n    print(i, end=\" \")\nprint()\n\nfor i in range(0, 10, 2):\n    print(i, end=\" \")\nprint()\n\nfor i in range(5, 0, -1):\n    print(i, end=\" \")\nprint()"
     }
    ]
   },
   {
    "heading": "enumerate() and zip()",
    "blocks": [
     {
      "type": "markdown",
      "content": "`enumerate()` adds an index; `zip()` pairs elements from multiple iterables."
     },
     {
      "type": "code",
      "content": "fruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits):\n    print(f\"{i}: {fruit}\")\n\nnames = [\"Alice\", \"Bob\", \"Carol\"]\nages = [25, 30, 35]\nfor name, age in zip(names, ages):\n    print(f\"{name} is {age}\")"
     }
    ]
   },
   {
    "heading": "while Loops",
    "blocks": [
     {
      "type": "markdown",
      "content": "`while` repeats as long as the condition is true."
     },
     {
      "type": "code",
      "content": "n = 0\nwhile n < 5:\n    print(n)\n    n += 1\n\n# Common pattern: read until empty\ndata = [1, 2, 3]\nwhile data:\n    item = data.pop()\n    print(item)"
     }
    ]
   },
   {
    "heading": "break and continue",
    "blocks": [
     {
      "type": "markdown",
      "content": "`break` exits the loop immediately. `continue` skips to the next iteration."
     },
     {
      "type": "code",
      "content": "for i in range(10):\n    if i == 5:\n        break\n    print(i, end=\" \")\nprint(\" (break)\")\n\nfor i in range(6):\n    if i % 2 == 0:\n        continue\n    print(i, end=\" \")\nprint(\" (continue)\")"
     }
    ]
   },
   {
    "heading": "else on Loops",
    "blocks": [
     {
      "type": "markdown",
      "content": "A loop's `else` block runs when the loop completes normally (not via `break`)."
     },
     {
      "type": "code",
      "content": "for i in range(3):\n    print(i)\nelse:\n    print(\"Loop completed normally\")\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)\nelse:\n    print(\"This won't run due to break\")"
     }
    ]
   },
   {
    "heading": "Ternary (Conditional) Expression",
    "blocks": [
     {
      "type": "markdown",
      "content": "`value_if_true if condition else value_if_false`"
     },
     {
      "type": "code",
      "content": "age = 18\nstatus = \"adult\" if age >= 18 else \"minor\"\nprint(status)\n\nx, y = 10, 20\nmax_val = x if x > y else y\nprint(max_val)"
     }
    ]
   },
   {
    "heading": "match / case (Python 3.10+)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Structural pattern matching for cleaner multi-way branching."
     },
     {
      "type": "code",
      "content": "def http_status(code):\n    match code:\n        case 200:\n            return \"OK\"\n        case 404:\n            return \"Not Found\"\n        case 500 | 502 | 503:\n            return \"Server Error\"\n        case _:\n            return \"Unknown\"\n\nprint(http_status(200))\nprint(http_status(503))\nprint(http_status(999))\n\ncommand = [\"echo\", \"hello\"]\nmatch command:\n    case [\"quit\"]:\n        print(\"Quitting\")\n    case [\"echo\", *args]:\n        print(\" \".join(args))\n    case _:\n        print(\"Unknown command\")"
     }
    ]
   },
   {
    "heading": "pass Statement",
    "blocks": [
     {
      "type": "markdown",
      "content": "`pass` is a no-op. Use it as a placeholder where syntax requires a body."
     },
     {
      "type": "code",
      "content": "if True:\n    pass  # TODO: implement\n\ndef stub():\n    pass\n\nclass Placeholder:\n    pass"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned if/elif/else, truthiness, for and while loops, range/enumerate/zip, break/continue, loop else, ternary expressions, match/case, and pass. Control flow is the backbone of program logic."
     }
    ]
   }
  ],
  "sectionCount": 12
 },
 {
  "order": 4,
  "slug": "strings",
  "emoji": "🔤",
  "title": "Strings",
  "sections": [
   {
    "heading": "String Creation",
    "blocks": [
     {
      "type": "markdown",
      "content": "Strings can use single, double, or triple quotes. Triple quotes allow multi-line strings."
     },
     {
      "type": "code",
      "content": "s1 = 'single'\ns2 = \"double\"\ns3 = '''multi\nline'''\ns4 = r\"raw\\\\n\"  # Raw: backslashes literal\nprint(s1, s2)\nprint(s3)\nprint(s4)"
     }
    ]
   },
   {
    "heading": "Indexing and Slicing",
    "blocks": [
     {
      "type": "markdown",
      "content": "Strings support zero-based indexing and slicing with `[start:stop:step]`."
     },
     {
      "type": "code",
      "content": "s = \"Python\"\nprint(s[0], s[-1])\nprint(s[1:4])\nprint(s[:3], s[3:])\nprint(s[::-1])  # Reverse"
     }
    ]
   },
   {
    "heading": "Common String Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "Strings have many useful methods. They return new strings (strings are immutable)."
     },
     {
      "type": "code",
      "content": "s = \"  Hello, World!  \"\nprint(s.strip())\nprint(s.lower(), s.upper())\nprint(s.replace(\"World\", \"Python\"))\nprint(\"one,two,three\".split(\",\"))\nprint(\" \".join([\"a\", \"b\", \"c\"]))\nprint(\"hello\".startswith(\"he\"), \"world\".endswith(\"ld\"))\nprint(\"42\".isdigit(), \"abc\".isalpha())"
     }
    ]
   },
   {
    "heading": "f-Strings (Formatted String Literals)",
    "blocks": [
     {
      "type": "markdown",
      "content": "f-strings embed expressions inside `{}`. Available in Python 3.6+."
     },
     {
      "type": "code",
      "content": "name = \"Alice\"\nage = 30\nprint(f\"{name} is {age} years old\")\nprint(f\"{age=}\")\nprint(f\"{3.14159:.2f}\")\nprint(f\"{42:05d}\")\nprint(f\"{2 + 3}\")"
     }
    ]
   },
   {
    "heading": "str.format()",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `format()` method provides positional and named placeholders."
     },
     {
      "type": "code",
      "content": "print(\"{0} {1}\".format(\"Hello\", \"World\"))\nprint(\"{name} is {age}\".format(name=\"Bob\", age=25))\nprint(\"{:.2f}\".format(3.14159))\nprint(\"{:>10}\".format(\"right\"))\nprint(\"{:<10}\".format(\"left\"))"
     }
    ]
   },
   {
    "heading": "% Formatting (Legacy)",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `%` operator is the oldest formatting style. Still used in some codebases."
     },
     {
      "type": "code",
      "content": "print(\"%s %d\" % (\"Score:\", 100))\nprint(\"%.2f\" % 3.14159)\nprint(\"%10s\" % \"right\")"
     }
    ]
   },
   {
    "heading": "String Membership and Searching",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `in` for membership. `find()` and `index()` locate substrings."
     },
     {
      "type": "code",
      "content": "s = \"hello world\"\nprint(\"world\" in s)\nprint(s.find(\"world\"))\nprint(s.find(\"xyz\"))  # -1 if not found\nprint(s.index(\"world\"))\nprint(s.count(\"l\"))"
     }
    ]
   },
   {
    "heading": "String Encoding",
    "blocks": [
     {
      "type": "markdown",
      "content": "Python 3 strings are Unicode. Use `encode()` and `decode()` for bytes."
     },
     {
      "type": "code",
      "content": "s = \"café\"\nb = s.encode(\"utf-8\")\nprint(b)\nprint(b.decode(\"utf-8\"))\nprint(\"hello\".encode(\"ascii\"))"
     }
    ]
   },
   {
    "heading": "Regular Expressions Basics",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `re` module provides regex support. Common functions: `search`, `match`, `findall`, `sub`."
     },
     {
      "type": "code",
      "content": "import re\n\ntext = \"Contact: alice@example.com or bob@test.org\"\nmatch = re.search(r\"[\\w.-]+@[\\w.-]+\\.\\w+\", text)\nprint(match.group() if match else None)\n\nemails = re.findall(r\"[\\w.-]+@[\\w.-]+\\.\\w+\", text)\nprint(emails)\n\ncleaned = re.sub(r\"\\d+\", \"#\", \"a1b2c3\")\nprint(cleaned)\n\nprint(re.match(r\"^Hello\", \"Hello world\"))"
     }
    ]
   },
   {
    "heading": "Useful String Constants",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `string` module provides useful constants."
     },
     {
      "type": "code",
      "content": "import string\n\nprint(string.ascii_lowercase)\nprint(string.ascii_uppercase)\nprint(string.digits)\nprint(string.punctuation)"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned string creation, indexing, slicing, methods, f-strings, format(), encoding, and regex basics. Strings are central to text processing in Python."
     }
    ]
   }
  ],
  "sectionCount": 11
 },
 {
  "order": 5,
  "slug": "lists-and-tuples",
  "emoji": "📋",
  "title": "Lists and Tuples",
  "sections": [
   {
    "heading": "Creating Lists and Tuples",
    "blocks": [
     {
      "type": "markdown",
      "content": "Lists use `[]`; tuples use `()`. A single-element tuple needs a trailing comma."
     },
     {
      "type": "code",
      "content": "lst = [1, 2, 3]\ntup = (1, 2, 3)\nsingle = (1,)  # Not (1) which is just 1\nempty_list = []\nempty_tup = ()\nprint(lst, tup, single)"
     }
    ]
   },
   {
    "heading": "Indexing and Slicing",
    "blocks": [
     {
      "type": "markdown",
      "content": "Both support zero-based indexing and slicing. Negative indices count from the end."
     },
     {
      "type": "code",
      "content": "lst = [10, 20, 30, 40, 50]\nprint(lst[0], lst[-1])\nprint(lst[1:4])\nprint(lst[::2])\nprint(lst[::-1])"
     }
    ]
   },
   {
    "heading": "List CRUD: Create, Read, Update, Delete",
    "blocks": [
     {
      "type": "markdown",
      "content": "Lists support in-place modification. Tuples do not."
     },
     {
      "type": "code",
      "content": "lst = [1, 2, 3]\nlst.append(4)\nlst.extend([5, 6])\nlst.insert(0, 0)\nprint(lst)\n\nlst[1] = 99\nlst[2:4] = [10, 11]\nprint(lst)\n\nlst.remove(99)\npopped = lst.pop()\ndel lst[0]\nprint(lst, popped)"
     }
    ]
   },
   {
    "heading": "List Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "`sort`, `reverse`, `count`, `index`, `clear`."
     },
     {
      "type": "code",
      "content": "lst = [3, 1, 4, 1, 5]\nlst.sort()\nprint(lst)\n\nlst.sort(reverse=True)\nprint(lst)\n\nlst = [3, 1, 4, 1, 5]\nsorted_lst = sorted(lst)\nprint(lst, sorted_lst)\n\nprint(lst.count(1))\nprint(lst.index(4))\nlst.clear()\nprint(lst)"
     }
    ]
   },
   {
    "heading": "Tuples: Immutable Sequences",
    "blocks": [
     {
      "type": "markdown",
      "content": "Tuples are fixed once created. Use them for fixed data, dict keys, and multiple return values."
     },
     {
      "type": "code",
      "content": "point = (3, 4)\nrgb = (255, 128, 0)\nprint(point[0], point[1])\n\n# point[0] = 5  # TypeError\n\nd = {(1, 2): \"value\"}\nprint(d[(1, 2)])"
     }
    ]
   },
   {
    "heading": "Unpacking",
    "blocks": [
     {
      "type": "markdown",
      "content": "Unpack sequences into variables. Use `*` to capture remaining elements."
     },
     {
      "type": "code",
      "content": "a, b, c = [1, 2, 3]\nprint(a, b, c)\n\nfirst, *rest = [1, 2, 3, 4, 5]\nprint(first, rest)\n\n*front, last = [1, 2, 3, 4, 5]\nprint(front, last)\n\nx, y = 10, 20\nx, y = y, x  # Swap\nprint(x, y)"
     }
    ]
   },
   {
    "heading": "List Comprehensions",
    "blocks": [
     {
      "type": "markdown",
      "content": "List comprehensions build lists concisely. Syntax: `[expr for item in iterable if condition]`."
     },
     {
      "type": "code",
      "content": "squares = [x**2 for x in range(5)]\nprint(squares)\n\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)\n\nmatrix = [[i*j for j in range(3)] for i in range(3)]\nprint(matrix)\n\nflat = [x for row in matrix for x in row]\nprint(flat)"
     }
    ]
   },
   {
    "heading": "Tuple Comprehensions?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use generator expressions with `tuple()` for tuple \"comprehensions\"."
     },
     {
      "type": "code",
      "content": "tup = tuple(x**2 for x in range(5))\nprint(tup)"
     }
    ]
   },
   {
    "heading": "Copying Lists",
    "blocks": [
     {
      "type": "markdown",
      "content": "Assignment creates a reference. Use `copy()` or slicing for a shallow copy."
     },
     {
      "type": "code",
      "content": "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n\na = [1, 2, 3]\nc = a.copy()\nd = a[:]\nc.append(4)\nprint(a, c)\n\nimport copy\nnested = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(nested)"
     }
    ]
   },
   {
    "heading": "Common Operations",
    "blocks": [
     {
      "type": "markdown",
      "content": "`len`, `min`, `max`, `sum`, `in`, `+`, `*`."
     },
     {
      "type": "code",
      "content": "lst = [3, 1, 4, 1, 5]\nprint(len(lst), min(lst), max(lst), sum(lst))\nprint(4 in lst)\nprint([1, 2] + [3, 4])\nprint([0] * 5)"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned lists (mutable) and tuples (immutable), CRUD, slicing, sorting, unpacking, list comprehensions, and copying. Choose lists for dynamic data, tuples for fixed data."
     }
    ]
   }
  ],
  "sectionCount": 11
 },
 {
  "order": 6,
  "slug": "dictionaries-and-sets",
  "emoji": "📚",
  "title": "Dictionaries and Sets",
  "sections": [
   {
    "heading": "Creating Dictionaries",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `{}` or `dict()`. Keys must be hashable (immutable)."
     },
     {
      "type": "code",
      "content": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nd2 = dict(a=1, b=2, c=3)\nd3 = dict([(\"x\", 1), (\"y\", 2)])\nprint(d, d2, d3)"
     }
    ]
   },
   {
    "heading": "Accessing and Modifying Dicts",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `[]` for access. `d[key]` raises KeyError if missing; use `get()` for safe access."
     },
     {
      "type": "code",
      "content": "d = {\"name\": \"Alice\", \"age\": 30}\nprint(d[\"name\"])\nprint(d.get(\"age\"))\nprint(d.get(\"city\", \"Unknown\"))\n\nd[\"city\"] = \"NYC\"\nd[\"age\"] = 31\ndel d[\"city\"]\nprint(d)"
     }
    ]
   },
   {
    "heading": "Dict Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "`keys()`, `values()`, `items()`, `pop()`, `popitem()`, `update()`, `setdefault()`."
     },
     {
      "type": "code",
      "content": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nprint(list(d.keys()))\nprint(list(d.values()))\nprint(list(d.items()))\n\nval = d.pop(\"b\")\nprint(d, val)\n\nd.update({\"b\": 2, \"d\": 4})\nprint(d)\n\nd.setdefault(\"e\", 5)\nd.setdefault(\"a\", 99)\nprint(d)"
     }
    ]
   },
   {
    "heading": "Dict Comprehensions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Build dicts from iterables: `{k: v for item in iterable}`."
     },
     {
      "type": "code",
      "content": "squares = {x: x**2 for x in range(5)}\nprint(squares)\n\nwords = [\"hello\", \"world\"]\nlengths = {w: len(w) for w in words}\nprint(lengths)\n\nfiltered = {k: v for k, v in {\"a\": 1, \"b\": 0, \"c\": 3}.items() if v > 0}\nprint(filtered)"
     }
    ]
   },
   {
    "heading": "Creating Sets",
    "blocks": [
     {
      "type": "markdown",
      "content": "Sets store unique elements. Use `{}` or `set()`. Empty set must be `set()`, not `{}`."
     },
     {
      "type": "code",
      "content": "s = {1, 2, 3, 2, 1}\nprint(s)\n\ns2 = set([1, 2, 3, 2, 1])\nprint(s2)\n\nempty = set()\nprint(type(empty))\nprint(type({}))"
     }
    ]
   },
   {
    "heading": "Set Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "`add`, `remove`, `discard`, `pop`, `clear`, `update`."
     },
     {
      "type": "code",
      "content": "s = {1, 2, 3}\ns.add(4)\ns.add(2)\nprint(s)\n\ns.remove(2)\ns.discard(99)\nprint(s)\n\ns.update([5, 6])\nprint(s)"
     }
    ]
   },
   {
    "heading": "Set Operations",
    "blocks": [
     {
      "type": "markdown",
      "content": "Union (`|`), intersection (`&`), difference (`-`), symmetric difference (`^`)."
     },
     {
      "type": "code",
      "content": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a | b)\nprint(a & b)\nprint(a - b)\nprint(a ^ b)\n\nprint(a.union(b))\nprint(a.intersection(b))\nprint(a.difference(b))"
     }
    ]
   },
   {
    "heading": "Set Comprehensions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Build sets from iterables: `{expr for item in iterable}`."
     },
     {
      "type": "code",
      "content": "squares = {x**2 for x in range(5)}\nprint(squares)\n\nchars = {c.lower() for c in \"Hello\"}\nprint(chars)"
     }
    ]
   },
   {
    "heading": "frozenset",
    "blocks": [
     {
      "type": "markdown",
      "content": "`frozenset` is an immutable set. Can be used as dict keys or set elements."
     },
     {
      "type": "code",
      "content": "fs = frozenset([1, 2, 3])\nprint(fs)\nd = {fs: \"value\"}\nprint(d[fs])\ns = {fs, frozenset([4, 5])}\nprint(s)"
     }
    ]
   },
   {
    "heading": "Membership and Iteration",
    "blocks": [
     {
      "type": "markdown",
      "content": "Both dicts and sets support `in` and iteration. Dicts iterate over keys by default."
     },
     {
      "type": "code",
      "content": "d = {\"a\": 1, \"b\": 2}\nprint(\"a\" in d)\nfor k in d:\n    print(k, d[k])\n\ns = {1, 2, 3}\nprint(2 in s)\nfor x in s:\n    print(x)"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned dictionaries (key-value mapping), dict methods and comprehensions, sets (unique elements), set operations, frozenset, and iteration. Use dicts for lookups; use sets for uniqueness and set math."
     }
    ]
   }
  ],
  "sectionCount": 11
 },
 {
  "order": 7,
  "slug": "classes-and-oop",
  "emoji": "🏗️",
  "title": "Classes and OOP",
  "sections": [
   {
    "heading": "Defining a Class",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use the `class` keyword. Class names are typically PascalCase."
     },
     {
      "type": "code",
      "content": "class Dog:\n    pass\n\ndog = Dog()\nprint(dog)\nprint(type(dog))"
     }
    ]
   },
   {
    "heading": "__init__ and self",
    "blocks": [
     {
      "type": "markdown",
      "content": "`__init__` is the constructor. `self` refers to the instance being created."
     },
     {
      "type": "code",
      "content": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\ndog = Dog(\"Rex\", 3)\nprint(dog.name, dog.age)"
     }
    ]
   },
   {
    "heading": "Instance Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "Methods receive `self` as the first parameter. They operate on instance data."
     },
     {
      "type": "code",
      "content": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        return f\"{self.name} says woof!\"\n\n    def human_age(self):\n        return self.age * 7\n\ndog = Dog(\"Rex\", 3)\nprint(dog.bark())\nprint(dog.human_age())"
     }
    ]
   },
   {
    "heading": "Class and Instance Attributes",
    "blocks": [
     {
      "type": "markdown",
      "content": "Class attributes are shared; instance attributes are per-object."
     },
     {
      "type": "code",
      "content": "class Dog:\n    species = \"Canis familiaris\"\n\n    def __init__(self, name):\n        self.name = name\n\nd1 = Dog(\"Rex\")\nd2 = Dog(\"Max\")\nprint(d1.species, d2.species)\nprint(Dog.species)"
     }
    ]
   },
   {
    "heading": "Properties (@property)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Properties provide controlled access to attributes. Use getters and setters without explicit method calls."
     },
     {
      "type": "code",
      "content": "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n\n    @property\n    def radius(self):\n        return self._radius\n\n    @radius.setter\n    def radius(self, value):\n        if value < 0:\n            raise ValueError(\"Radius must be non-negative\")\n        self._radius = value\n\n    @property\n    def area(self):\n        return 3.14159 * self._radius ** 2\n\nc = Circle(5)\nprint(c.radius, c.area)\nc.radius = 10\nprint(c.area)"
     }
    ]
   },
   {
    "heading": "Magic Methods (Dunder Methods)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Magic methods customize behavior. Common ones: `__str__`, `__repr__`, `__len__`, `__eq__`."
     },
     {
      "type": "code",
      "content": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"Point({self.x}, {self.y})\"\n\n    def __repr__(self):\n        return f\"Point({self.x!r}, {self.y!r})\"\n\n    def __eq__(self, other):\n        if not isinstance(other, Point):\n            return False\n        return self.x == other.x and self.y == other.y\n\np = Point(3, 4)\nprint(str(p))\nprint(repr(p))\nprint(Point(3, 4) == Point(3, 4))"
     }
    ]
   },
   {
    "heading": "Encapsulation: Private and Protected",
    "blocks": [
     {
      "type": "markdown",
      "content": "Convention: single underscore `_` for protected; double `__` for name mangling (\"private\")."
     },
     {
      "type": "code",
      "content": "class BankAccount:\n    def __init__(self, balance):\n        self._balance = balance  # Protected by convention\n\n    def deposit(self, amount):\n        self._balance += amount\n\n    def get_balance(self):\n        return self._balance\n\nclass Secret:\n    def __init__(self):\n        self.__internal = 42  # Name mangled to _Secret__internal\n\ns = Secret()\n# print(s.__internal)  # AttributeError\nprint(s._Secret__internal)"
     }
    ]
   },
   {
    "heading": "Class Methods and Static Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "`@classmethod` receives the class; `@staticmethod` receives neither class nor instance."
     },
     {
      "type": "code",
      "content": "class MyClass:\n    count = 0\n\n    @classmethod\n    def from_string(cls, s):\n        return cls(int(s))\n\n    @classmethod\n    def get_count(cls):\n        return cls.count\n\n    @staticmethod\n    def utility(x, y):\n        return x + y\n\nprint(MyClass.utility(1, 2))"
     }
    ]
   },
   {
    "heading": "__slots__",
    "blocks": [
     {
      "type": "markdown",
      "content": "`__slots__` restricts instance attributes and saves memory."
     },
     {
      "type": "code",
      "content": "class Point:\n    __slots__ = (\"x\", \"y\")\n\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(1, 2)\n# p.z = 3  # AttributeError"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned classes, `__init__`, `self`, instance and class attributes, methods, properties, magic methods, encapsulation, classmethod/staticmethod, and `__slots__`. OOP helps structure complex programs."
     }
    ]
   }
  ],
  "sectionCount": 10
 },
 {
  "order": 8,
  "slug": "inheritance-and-polymorphism",
  "emoji": "🧬",
  "title": "Inheritance and Polymorphism",
  "sections": [
   {
    "heading": "Basic Inheritance",
    "blocks": [
     {
      "type": "markdown",
      "content": "Specify the parent class in parentheses. Child classes inherit attributes and methods."
     },
     {
      "type": "code",
      "content": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"woof!\"\n\ndog = Dog(\"Rex\")\nprint(dog.name, dog.speak())"
     }
    ]
   },
   {
    "heading": "super()",
    "blocks": [
     {
      "type": "markdown",
      "content": "`super()` delegates to the parent class. Use it to call overridden methods and `__init__`."
     },
     {
      "type": "code",
      "content": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\ndog = Dog(\"Rex\", \"Labrador\")\nprint(dog.name, dog.breed)"
     }
    ]
   },
   {
    "heading": "Method Resolution Order (MRO)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Python uses C3 linearization for MRO. Use `__mro__` or `mro()` to inspect."
     },
     {
      "type": "code",
      "content": "class A:\n    pass\n\nclass B(A):\n    pass\n\nclass C(A):\n    pass\n\nclass D(B, C):\n    pass\n\nprint(D.__mro__)\nprint([c.__name__ for c in D.mro()])"
     }
    ]
   },
   {
    "heading": "Abstract Base Classes (ABC)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `abc` module to define abstract methods. Subclasses must implement them."
     },
     {
      "type": "code",
      "content": "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\n    @abstractmethod\n    def perimeter(self):\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n\n    def area(self):\n        return self.w * self.h\n\n    def perimeter(self):\n        return 2 * (self.w + self.h)\n\nr = Rectangle(3, 4)\nprint(r.area(), r.perimeter())\n# s = Shape()  # TypeError: cannot instantiate"
     }
    ]
   },
   {
    "heading": "Duck Typing",
    "blocks": [
     {
      "type": "markdown",
      "content": "\"If it walks like a duck and quacks like a duck, it's a duck.\" Python favors behavior over type."
     },
     {
      "type": "code",
      "content": "def process(iterable):\n    for item in iterable:\n        print(item)\n\nprocess([1, 2, 3])\nprocess(\"hello\")\nprocess({\"a\": 1, \"b\": 2})\n\nclass CustomIter:\n    def __iter__(self):\n        return iter([1, 2, 3])\n\nprocess(CustomIter())"
     }
    ]
   },
   {
    "heading": "Mixins",
    "blocks": [
     {
      "type": "markdown",
      "content": "Mixins are small classes that add behavior. They're not meant to stand alone."
     },
     {
      "type": "code",
      "content": "class JsonMixin:\n    def to_json(self):\n        import json\n        return json.dumps(self.__dict__)\n\nclass ReprMixin:\n    def __repr__(self):\n        return f\"{self.__class__.__name__}({self.__dict__})\"\n\nclass Person(JsonMixin, ReprMixin):\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person(\"Alice\", 30)\nprint(p)\nprint(p.to_json())"
     }
    ]
   },
   {
    "heading": "Composition vs Inheritance",
    "blocks": [
     {
      "type": "markdown",
      "content": "Composition: \"has-a\". Inheritance: \"is-a\". Prefer composition when it fits better."
     },
     {
      "type": "code",
      "content": "class Engine:\n    def start(self):\n        return \"Engine started\"\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine()  # Composition\n\n    def start(self):\n        return self.engine.start()\n\ncar = Car()\nprint(car.start())"
     }
    ]
   },
   {
    "heading": "isinstance and issubclass",
    "blocks": [
     {
      "type": "markdown",
      "content": "`isinstance(obj, cls)` checks if an object is an instance. `issubclass(sub, super)` checks inheritance."
     },
     {
      "type": "code",
      "content": "class Animal:\n    pass\n\nclass Dog(Animal):\n    pass\n\ndog = Dog()\nprint(isinstance(dog, Dog))\nprint(isinstance(dog, Animal))\nprint(issubclass(Dog, Animal))"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned inheritance, `super()`, MRO, ABCs, duck typing, mixins, and composition. Choose the right tool: inheritance for \"is-a\", composition for \"has-a\", mixins for reusable behavior."
     }
    ]
   }
  ],
  "sectionCount": 9
 },
 {
  "order": 9,
  "slug": "error-handling",
  "emoji": "🛡️",
  "title": "Error Handling",
  "sections": [
   {
    "heading": "try and except",
    "blocks": [
     {
      "type": "markdown",
      "content": "Catch exceptions with `try`/`except`. Only catch what you can handle."
     },
     {
      "type": "code",
      "content": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\n\ntry:\n    value = int(\"not a number\")\nexcept ValueError as e:\n    print(f\"Invalid value: {e}\")"
     }
    ]
   },
   {
    "heading": "Multiple except Clauses",
    "blocks": [
     {
      "type": "markdown",
      "content": "Handle different exception types separately. Order matters: more specific first."
     },
     {
      "type": "code",
      "content": "try:\n    # some operation\n    x = int(\"42\")\n    y = 1 / 0\nexcept ValueError:\n    print(\"Invalid conversion\")\nexcept ZeroDivisionError:\n    print(\"Division by zero\")\nexcept (TypeError, KeyError):\n    print(\"Type or key error\")"
     }
    ]
   },
   {
    "heading": "else and finally",
    "blocks": [
     {
      "type": "markdown",
      "content": "`else` runs if no exception occurred. `finally` always runs (cleanup)."
     },
     {
      "type": "code",
      "content": "try:\n    f = open(\"nonexistent.txt\")\nexcept FileNotFoundError:\n    print(\"File not found\")\nelse:\n    print(f.read())\n    f.close()\nfinally:\n    print(\"Cleanup done\")\n\ntry:\n    x = 1 + 1\nexcept Exception:\n    pass\nelse:\n    print(\"No exception\", x)"
     }
    ]
   },
   {
    "heading": "Raising Exceptions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `raise` to throw exceptions. Optionally chain with `from`."
     },
     {
      "type": "code",
      "content": "def validate_age(age):\n    if age < 0 or age > 150:\n        raise ValueError(\"Age must be between 0 and 150\")\n    return age\n\ntry:\n    validate_age(-5)\nexcept ValueError as e:\n    print(e)\n\ntry:\n    int(\"x\")\nexcept ValueError as e:\n    raise RuntimeError(\"Parse failed\") from e"
     }
    ]
   },
   {
    "heading": "Custom Exceptions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Define custom exceptions by subclassing `Exception` (or a more specific base)."
     },
     {
      "type": "code",
      "content": "class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f\"Balance {balance} < amount {amount}\")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\ntry:\n    withdraw(10, 20)\nexcept InsufficientFundsError as e:\n    print(e, e.balance, e.amount)"
     }
    ]
   },
   {
    "heading": "Exception Hierarchy",
    "blocks": [
     {
      "type": "markdown",
      "content": "All exceptions inherit from `BaseException`. Use `Exception` for most custom exceptions."
     },
     {
      "type": "code",
      "content": "import builtins\n\nprint(issubclass(ValueError, Exception))\nprint(issubclass(Exception, BaseException))\n\nfor name in dir(builtins):\n    obj = getattr(builtins, name)\n    if isinstance(obj, type) and issubclass(obj, BaseException):\n        print(name)"
     }
    ]
   },
   {
    "heading": "Catching BaseException",
    "blocks": [
     {
      "type": "markdown",
      "content": "Avoid catching `BaseException` or bare `except:`—you'll catch `KeyboardInterrupt` and `SystemExit`."
     },
     {
      "type": "code",
      "content": "try:\n    x = 1 / 0\nexcept Exception:\n    print(\"Caught\")\n\n# Prefer specific:\ntry:\n    x = int(\"x\")\nexcept ValueError:\n    print(\"Invalid int\")"
     }
    ]
   },
   {
    "heading": "Best Practices",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. Catch specific exceptions. 2. Use `else` for success path. 3. Use `finally` for cleanup. 4. Don't swallow exceptions silently. 5. Document what you raise."
     },
     {
      "type": "code",
      "content": "def read_config(path):\n    \"\"\"Read config file. Raises FileNotFoundError if missing.\"\"\"\n    try:\n        with open(path) as f:\n            return f.read()\n    except FileNotFoundError:\n        raise\n    except PermissionError:\n        raise PermissionError(f\"Cannot read {path}\") from None"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned try/except/finally/else, raising exceptions, custom exceptions, the exception hierarchy, and best practices. Use exceptions for exceptional conditions, not control flow."
     }
    ]
   }
  ],
  "sectionCount": 9
 },
 {
  "order": 10,
  "slug": "file-io",
  "emoji": "📁",
  "title": "File I/O",
  "sections": [
   {
    "heading": "open() and Basic Modes",
    "blocks": [
     {
      "type": "markdown",
      "content": "`open(path, mode)` returns a file object. Modes: `r` (read), `w` (write, truncate), `a` (append), `x` (exclusive create), `b` (binary), `+` (read+write)."
     },
     {
      "type": "code",
      "content": "with open(\"example.txt\", \"w\") as f:\n    f.write(\"Hello, World!\\n\")\n    f.write(\"Line 2\\n\")\n\nwith open(\"example.txt\", \"r\") as f:\n    content = f.read()\n    print(content)\n\nwith open(\"example.txt\", \"r\") as f:\n    lines = f.readlines()\n    print(lines)"
     }
    ]
   },
   {
    "heading": "Reading Files",
    "blocks": [
     {
      "type": "markdown",
      "content": "`read()`, `readline()`, `readlines()`. Files are iterable line-by-line."
     },
     {
      "type": "code",
      "content": "with open(\"example.txt\", \"r\") as f:\n    for line in f:\n        print(line.rstrip())\n\nwith open(\"example.txt\", \"r\") as f:\n    first = f.readline()\n    rest = f.read()"
     }
    ]
   },
   {
    "heading": "Writing Files",
    "blocks": [
     {
      "type": "markdown",
      "content": "`write()` and `writelines()`. Use `\\n` for newlines. Flush or close to ensure data is written."
     },
     {
      "type": "code",
      "content": "with open(\"output.txt\", \"w\") as f:\n    f.write(\"Line 1\\n\")\n    f.writelines([\"Line 2\\n\", \"Line 3\\n\"])\n\nwith open(\"output.txt\", \"a\") as f:\n    f.write(\"Appended\\n\")"
     }
    ]
   },
   {
    "heading": "Context Managers (with)",
    "blocks": [
     {
      "type": "markdown",
      "content": "`with` ensures the file is closed even if an exception occurs. Always use it for files."
     },
     {
      "type": "code",
      "content": "with open(\"example.txt\") as f:\n    data = f.read()\n# f is closed here automatically\n\ntry:\n    f = open(\"example.txt\")\n    data = f.read()\nfinally:\n    f.close()  # Manual cleanup - with is simpler"
     }
    ]
   },
   {
    "heading": "pathlib",
    "blocks": [
     {
      "type": "markdown",
      "content": "`pathlib.Path` provides object-oriented path handling. Cross-platform and convenient."
     },
     {
      "type": "code",
      "content": "from pathlib import Path\n\np = Path(\"resources/guides\")\nprint(p.exists())\nprint(p.is_dir())\nprint(p / \"01-variables-and-types.ipynb\")\n\nfile_path = Path(\"example.txt\")\nprint(file_path.read_text())\nfile_path.write_text(\"New content\\n\")\n\nfor f in Path(\".\").glob(\"*.ipynb\"):\n    print(f.name)"
     }
    ]
   },
   {
    "heading": "CSV Files",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use the `csv` module for reading and writing CSV."
     },
     {
      "type": "code",
      "content": "import csv\n\nwith open(\"data.csv\", \"w\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerow([\"name\", \"age\", \"city\"])\n    writer.writerow([\"Alice\", 30, \"NYC\"])\n    writer.writerow([\"Bob\", 25, \"LA\"])\n\nwith open(\"data.csv\", \"r\") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row)"
     }
    ]
   },
   {
    "heading": "JSON Files",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `json` module for JSON serialization."
     },
     {
      "type": "code",
      "content": "import json\n\ndata = {\"name\": \"Alice\", \"age\": 30, \"scores\": [90, 85, 88]}\n\nwith open(\"config.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\nwith open(\"config.json\", \"r\") as f:\n    loaded = json.load(f)\n    print(loaded)\n\ns = json.dumps(data)\nparsed = json.loads(s)"
     }
    ]
   },
   {
    "heading": "Binary Files",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `rb` or `wb` mode for binary data. Use `struct` for packed binary formats."
     },
     {
      "type": "code",
      "content": "import struct\n\nwith open(\"binary.dat\", \"wb\") as f:\n    f.write(struct.pack(\"i\", 42))\n    f.write(struct.pack(\"f\", 3.14))\n\nwith open(\"binary.dat\", \"rb\") as f:\n    n = struct.unpack(\"i\", f.read(4))[0]\n    x = struct.unpack(\"f\", f.read(4))[0]\n    print(n, x)"
     }
    ]
   },
   {
    "heading": "Encoding",
    "blocks": [
     {
      "type": "markdown",
      "content": "Specify `encoding` for text files. Default is platform-dependent."
     },
     {
      "type": "code",
      "content": "with open(\"utf8.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"café résumé\")\n\nwith open(\"utf8.txt\", \"r\", encoding=\"utf-8\") as f:\n    print(f.read())\n\nwith open(\"utf8.txt\", \"r\", encoding=\"utf-8\", errors=\"replace\") as f:\n    pass  # errors='replace' handles bad bytes"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned open(), read/write modes, context managers, pathlib, CSV, JSON, binary files, and encoding. Always use `with` for files and pathlib for paths."
     }
    ]
   }
  ],
  "sectionCount": 10
 },
 {
  "order": 11,
  "slug": "iterators-and-generators",
  "emoji": "🔗",
  "title": "Iterators and Generators",
  "sections": [
   {
    "heading": "The Iterator Protocol",
    "blocks": [
     {
      "type": "markdown",
      "content": "An iterator implements `__iter__` (returns self) and `__next__` (returns next item or raises StopIteration)."
     },
     {
      "type": "code",
      "content": "class CountDown:\n    def __init__(self, start):\n        self.current = start\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        self.current -= 1\n        return self.current + 1\n\nfor n in CountDown(3):\n    print(n)\n\nit = iter([1, 2, 3])\nprint(next(it), next(it), next(it))"
     }
    ]
   },
   {
    "heading": "Iterables vs Iterators",
    "blocks": [
     {
      "type": "markdown",
      "content": "Iterables have `__iter__`; iterators also have `__next__`. `iter()` gets an iterator from an iterable."
     },
     {
      "type": "code",
      "content": "lst = [1, 2, 3]\nit = iter(lst)\nprint(hasattr(lst, '__iter__'))\nprint(hasattr(it, '__next__'))\nprint(next(it), next(it), next(it))\n# next(it)  # StopIteration"
     }
    ]
   },
   {
    "heading": "Generators",
    "blocks": [
     {
      "type": "markdown",
      "content": "Generators are functions that use `yield`. They produce values lazily and maintain state between calls."
     },
     {
      "type": "code",
      "content": "def count_up_to(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nfor x in count_up_to(5):\n    print(x, end=\" \")\nprint()\n\ngen = count_up_to(3)\nprint(next(gen), next(gen), next(gen))"
     }
    ]
   },
   {
    "heading": "yield and yield from",
    "blocks": [
     {
      "type": "markdown",
      "content": "`yield` produces a value. `yield from` delegates to another generator."
     },
     {
      "type": "code",
      "content": "def chain(*iterables):\n    for it in iterables:\n        yield from it\n\nprint(list(chain([1, 2], [3, 4], [5])))\n\ndef flatten(nested):\n    for item in nested:\n        if isinstance(item, list):\n            yield from flatten(item)\n        else:\n            yield item\n\nprint(list(flatten([1, [2, [3, 4], 5], 6])))"
     }
    ]
   },
   {
    "heading": "Generator Expressions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Generator expressions are like list comprehensions but produce generators. Use `()` instead of `[]`."
     },
     {
      "type": "code",
      "content": "squares = (x**2 for x in range(5))\nprint(squares)\nprint(list(squares))\n\nevens = (x for x in range(10) if x % 2 == 0)\nprint(sum(evens))\n\ntotal = sum(x**2 for x in range(100))\nprint(total)"
     }
    ]
   },
   {
    "heading": "itertools",
    "blocks": [
     {
      "type": "markdown",
      "content": "`itertools` provides many iterator-building tools: count, cycle, chain, islice, combinations, permutations."
     },
     {
      "type": "code",
      "content": "import itertools\n\nprint(list(itertools.islice(itertools.count(10), 5)))\nprint(list(itertools.islice(itertools.cycle([1, 2]), 6)))\nprint(list(itertools.chain([1, 2], [3, 4])))\nprint(list(itertools.combinations([1, 2, 3], 2)))\nprint(list(itertools.permutations([1, 2], 2)))\nprint(list(itertools.groupby(\"aaaabbbcc\")))\nfor k, g in itertools.groupby(\"aaaabbbcc\"):\n    print(k, list(g))"
     }
    ]
   },
   {
    "heading": "functools",
    "blocks": [
     {
      "type": "markdown",
      "content": "`functools` provides `reduce`, `partial`, `lru_cache`, `wraps`."
     },
     {
      "type": "code",
      "content": "from functools import reduce, partial, lru_cache\n\nprint(reduce(lambda a, b: a * b, [1, 2, 3, 4]))\n\ndef power(base, exp):\n    return base ** exp\n\nsquare = partial(power, exp=2)\nprint(square(5))\n\n@lru_cache(maxsize=128)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(30))"
     }
    ]
   },
   {
    "heading": "Sending Values to Generators",
    "blocks": [
     {
      "type": "markdown",
      "content": "Generators can receive values via `send()`. Use `yield` as an expression."
     },
     {
      "type": "code",
      "content": "def echo():\n    while True:\n        received = yield\n        print(f\"Echo: {received}\")\n\ng = echo()\nnext(g)\ng.send(\"hello\")\ng.send(\"world\")"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned the iterator protocol, iterables vs iterators, generators, yield, generator expressions, itertools, functools, and send(). Use generators for memory-efficient, lazy iteration."
     }
    ]
   }
  ],
  "sectionCount": 9
 },
 {
  "order": 12,
  "slug": "decorators",
  "emoji": "✨",
  "title": "Decorators",
  "sections": [
   {
    "heading": "Functions as Objects",
    "blocks": [
     {
      "type": "markdown",
      "content": "Functions are first-class objects. They can be passed around and returned."
     },
     {
      "type": "code",
      "content": "def greet(name):\n    return f\"Hello, {name}!\"\n\nf = greet\nprint(f(\"Alice\"))\n\ndef apply(func, arg):\n    return func(arg)\n\nprint(apply(greet, \"Bob\"))"
     }
    ]
   },
   {
    "heading": "Basic Function Decorators",
    "blocks": [
     {
      "type": "markdown",
      "content": "A decorator is a function that takes a function and returns a wrapped function."
     },
     {
      "type": "code",
      "content": "def log(func):\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}\")\n        result = func(*args, **kwargs)\n        print(f\"Returned {result}\")\n        return result\n    return wrapper\n\n@log\ndef add(a, b):\n    return a + b\n\nadd(2, 3)\n\n# Same as: add = log(add)"
     }
    ]
   },
   {
    "heading": "functools.wraps",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `@wraps(func)` to preserve the original function's metadata."
     },
     {
      "type": "code",
      "content": "from functools import wraps\n\ndef log(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef add(a, b):\n    \"\"\"Add two numbers.\"\"\"\n    return a + b\n\nprint(add.__name__, add.__doc__)"
     }
    ]
   },
   {
    "heading": "Decorators with Arguments",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use a factory: a function that returns a decorator."
     },
     {
      "type": "code",
      "content": "def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hi():\n    print(\"Hi!\")\n\nsay_hi()"
     }
    ]
   },
   {
    "heading": "Class Decorators",
    "blocks": [
     {
      "type": "markdown",
      "content": "Decorators can wrap classes too. They receive the class and return a modified class."
     },
     {
      "type": "code",
      "content": "def singleton(cls):\n    instances = {}\n    def get_instance(*args, **kwargs):\n        if cls not in instances:\n            instances[cls] = cls(*args, **kwargs)\n        return instances[cls]\n    return get_instance\n\n@singleton\nclass Config:\n    def __init__(self):\n        self.value = 42\n\nc1 = Config()\nc2 = Config()\nprint(c1 is c2)"
     }
    ]
   },
   {
    "heading": "Descriptor Protocol",
    "blocks": [
     {
      "type": "markdown",
      "content": "Descriptors define `__get__`, `__set__`, `__delete__`. Used by `property`, `staticmethod`, `classmethod`."
     },
     {
      "type": "code",
      "content": "class ValidatedString:\n    def __init__(self, min_len=0):\n        self.min_len = min_len\n\n    def __set_name__(self, owner, name):\n        self.name = f\"_{name}\"\n\n    def __get__(self, obj, objtype=None):\n        return getattr(obj, self.name, \"\")\n\n    def __set__(self, obj, value):\n        if len(value) < self.min_len:\n            raise ValueError(f\"Min length {self.min_len}\")\n        setattr(obj, self.name, value)\n\nclass Person:\n    name = ValidatedString(min_len=2)\n\np = Person()\np.name = \"Alice\"\nprint(p.name)\n# p.name = \"A\"  # ValueError"
     }
    ]
   },
   {
    "heading": "Common Decorator Patterns",
    "blocks": [
     {
      "type": "markdown",
      "content": "Caching, timing, retry, validation."
     },
     {
      "type": "code",
      "content": "import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f\"{func.__name__} took {elapsed:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow_func():\n    time.sleep(0.1)\n    return \"done\"\n\nslow_func()"
     }
    ]
   },
   {
    "heading": "Stacking Decorators",
    "blocks": [
     {
      "type": "markdown",
      "content": "Decorators are applied bottom-to-top. The innermost runs first when called."
     },
     {
      "type": "code",
      "content": "def bold(func):\n    def wrapper():\n        return \"<b>\" + func() + \"</b>\"\n    return wrapper\n\ndef italic(func):\n    def wrapper():\n        return \"<i>\" + func() + \"</i>\"\n    return wrapper\n\n@bold\n@italic\ndef hello():\n    return \"Hello\"\n\nprint(hello())"
     }
    ]
   },
   {
    "heading": "Built-in Decorators",
    "blocks": [
     {
      "type": "markdown",
      "content": "`@property`, `@staticmethod`, `@classmethod`, `@functools.lru_cache`, `@dataclasses.dataclass`."
     },
     {
      "type": "code",
      "content": "from functools import lru_cache\n\n@lru_cache(maxsize=32)\ndef expensive(n):\n    return n ** 2\n\nprint(expensive(5))\nprint(expensive(5))\nprint(expensive.cache_info())"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned function decorators, class decorators, decorators with args, the descriptor protocol, common patterns, and built-in decorators. Decorators enable clean, reusable cross-cutting concerns."
     }
    ]
   }
  ],
  "sectionCount": 10
 },
 {
  "order": 13,
  "slug": "modules-and-packages",
  "emoji": "📦",
  "title": "Modules and Packages",
  "sections": [
   {
    "heading": "What is a Module?",
    "blocks": [
     {
      "type": "markdown",
      "content": "A module is a `.py` file. It can define functions, classes, and variables."
     },
     {
      "type": "code",
      "content": "# In mymodule.py you might have:\n# def greet(name):\n#     return f\"Hello, {name}!\"\n# PI = 3.14159\n\n# Then: import mymodule\n# mymodule.greet(\"Alice\")\n# print(mymodule.PI)"
     }
    ]
   },
   {
    "heading": "import Statement",
    "blocks": [
     {
      "type": "markdown",
      "content": "`import module` loads the module. `from module import name` imports specific names."
     },
     {
      "type": "code",
      "content": "import math\nprint(math.sqrt(16))\nprint(math.pi)\n\nfrom math import sqrt, pi\nprint(sqrt(16), pi)\n\nfrom math import *  # Avoid: pollutes namespace\nprint(sin(0))"
     }
    ]
   },
   {
    "heading": "Import Aliasing",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `as` to alias long module or name."
     },
     {
      "type": "code",
      "content": "# import numpy as np  # pip install numpy\n# np.array([1, 2, 3])\n\nfrom collections import defaultdict as dd\nd = dd(int)\nd[\"a\"] += 1\nprint(dict(d))"
     }
    ]
   },
   {
    "heading": "Packages",
    "blocks": [
     {
      "type": "markdown",
      "content": "A package is a directory with `__init__.py`. It can contain submodules and subpackages."
     },
     {
      "type": "code",
      "content": "# mypackage/\n#   __init__.py\n#   utils.py\n#   models/\n#     __init__.py\n#     user.py\n\n# import mypackage.utils\n# from mypackage.models import user"
     }
    ]
   },
   {
    "heading": "__init__.py",
    "blocks": [
     {
      "type": "markdown",
      "content": "`__init__.py` marks a directory as a package. It runs on import. Can be empty or export public API."
     },
     {
      "type": "code",
      "content": "# In mypackage/__init__.py:\n# from .utils import helper\n# from .models.user import User\n# __all__ = ['helper', 'User']\n\n# Then: from mypackage import helper, User"
     }
    ]
   },
   {
    "heading": "sys.path and Module Search",
    "blocks": [
     {
      "type": "markdown",
      "content": "Python searches `sys.path` for modules. The current directory and PYTHONPATH are included."
     },
     {
      "type": "code",
      "content": "import sys\nprint(sys.path[:3])\n\n# sys.path.insert(0, '/custom/path')\n# import mymodule"
     }
    ]
   },
   {
    "heading": "pip",
    "blocks": [
     {
      "type": "markdown",
      "content": "pip installs packages from PyPI. Use `pip install`, `pip uninstall`, `pip list`, `pip freeze`."
     },
     {
      "type": "code",
      "content": "# pip install requests\n# pip install package==1.2.3\n# pip install -r requirements.txt\n# pip freeze > requirements.txt"
     }
    ]
   },
   {
    "heading": "virtualenv and venv",
    "blocks": [
     {
      "type": "markdown",
      "content": "Virtual environments isolate project dependencies. Use `python -m venv .venv` and activate."
     },
     {
      "type": "code",
      "content": "# python -m venv .venv\n# .venv\\Scripts\\activate  (Windows)\n# source .venv/bin/activate  (Unix)\n# pip install package"
     }
    ]
   },
   {
    "heading": "Standard Library Tour: os and pathlib",
    "blocks": [
     {
      "type": "markdown",
      "content": "`os` and `pathlib` for filesystem operations."
     },
     {
      "type": "code",
      "content": "import os\nfrom pathlib import Path\n\nprint(os.getcwd())\nprint(os.listdir(\".\"))\nprint(Path(\".\").resolve())"
     }
    ]
   },
   {
    "heading": "Standard Library Tour: collections",
    "blocks": [
     {
      "type": "markdown",
      "content": "`collections`: defaultdict, Counter, deque, namedtuple."
     },
     {
      "type": "code",
      "content": "from collections import Counter, defaultdict, deque\n\nc = Counter(\"hello world\")\nprint(c.most_common(3))\n\nd = defaultdict(list)\nd[\"a\"].append(1)\nprint(dict(d))\n\nq = deque([1, 2, 3])\nq.appendleft(0)\nq.pop()\nprint(list(q))"
     }
    ]
   },
   {
    "heading": "Standard Library Tour: datetime and json",
    "blocks": [
     {
      "type": "markdown",
      "content": "`datetime` for dates/times. `json` for JSON."
     },
     {
      "type": "code",
      "content": "from datetime import datetime, timedelta\nimport json\n\nnow = datetime.now()\nprint(now.strftime(\"%Y-%m-%d %H:%M\"))\ntomorrow = now + timedelta(days=1)\n\ndata = {\"name\": \"Alice\", \"age\": 30}\ns = json.dumps(data)\nparsed = json.loads(s)\nprint(s, parsed)"
     }
    ]
   },
   {
    "heading": "__name__ == \"__main__\"",
    "blocks": [
     {
      "type": "markdown",
      "content": "Code under `if __name__ == \"__main__\":` runs only when the file is executed directly, not when imported."
     },
     {
      "type": "code",
      "content": "def main():\n    print(\"Running as script\")\n\nif __name__ == \"__main__\":\n    main()\n\nprint(__name__)"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned the import system, packages, __init__.py, pip, virtualenv, and key standard library modules. Organize code into modules and packages for maintainability."
     }
    ]
   }
  ],
  "sectionCount": 13
 },
 {
  "order": 14,
  "slug": "testing",
  "emoji": "🧪",
  "title": "Testing",
  "sections": [
   {
    "heading": "Why Test?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Tests catch bugs, document behavior, and enable confident refactoring. Write tests for critical paths and edge cases."
     },
     {
      "type": "code",
      "content": "def add(a, b):\n    return a + b\n\nassert add(2, 3) == 5\nassert add(-1, 1) == 0\nprint(\"Simple asserts passed\")"
     }
    ]
   },
   {
    "heading": "unittest",
    "blocks": [
     {
      "type": "markdown",
      "content": "The built-in `unittest` module provides TestCase, assertions, and test discovery."
     },
     {
      "type": "code",
      "content": "import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestAdd(unittest.TestCase):\n    def test_add_positive(self):\n        self.assertEqual(add(2, 3), 5)\n\n    def test_add_negative(self):\n        self.assertEqual(add(-1, -1), -2)\n\n    def test_add_zero(self):\n        self.assertEqual(add(0, 0), 0)\n\nif __name__ == \"__main__\":\n    unittest.main(argv=[''], exit=False)"
     }
    ]
   },
   {
    "heading": "unittest Assertions",
    "blocks": [
     {
      "type": "markdown",
      "content": "`assertEqual`, `assertTrue`, `assertRaises`, `assertIn`, `assertAlmostEqual`, etc."
     },
     {
      "type": "code",
      "content": "import unittest\n\nclass TestAssertions(unittest.TestCase):\n    def test_basic(self):\n        self.assertEqual(1 + 1, 2)\n        self.assertTrue(1 < 2)\n        self.assertIn(1, [1, 2, 3])\n        self.assertAlmostEqual(0.1 + 0.2, 0.3, places=5)\n\n    def test_exception(self):\n        with self.assertRaises(ValueError):\n            int(\"not a number\")\n\nunittest.main(argv=[''], exit=False, verbosity=0)"
     }
    ]
   },
   {
    "heading": "pytest",
    "blocks": [
     {
      "type": "markdown",
      "content": "pytest is simpler: no class inheritance, plain assert, and better output. Install with `pip install pytest`."
     },
     {
      "type": "code",
      "content": "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n\ndef test_add_negative():\n    assert add(-1, -1) == -2\n\ndef test_add_type_error():\n    import pytest\n    with pytest.raises(TypeError):\n        add(\"a\", \"b\")\n\n# Run with: pytest test_file.py -v"
     }
    ]
   },
   {
    "heading": "pytest Fixtures",
    "blocks": [
     {
      "type": "markdown",
      "content": "Fixtures provide setup/teardown. Use `@pytest.fixture` decorator."
     },
     {
      "type": "code",
      "content": "import pytest\n\n@pytest.fixture\ndef sample_list():\n    return [1, 2, 3]\n\ndef test_len(sample_list):\n    assert len(sample_list) == 3\n\ndef test_sum(sample_list):\n    assert sum(sample_list) == 6"
     }
    ]
   },
   {
    "heading": "Mocking",
    "blocks": [
     {
      "type": "markdown",
      "content": "`unittest.mock` lets you replace dependencies with fake objects for isolated testing."
     },
     {
      "type": "code",
      "content": "from unittest.mock import Mock, patch, MagicMock\n\ndef fetch_user(user_id):\n    # Would call an API\n    return {\"id\": user_id, \"name\": \"Alice\"}\n\ndef get_user_name(user_id):\n    user = fetch_user(user_id)\n    return user[\"name\"]\n\nwith patch(\"__main__.fetch_user\"):\n    fetch_user = Mock(return_value={\"id\": 1, \"name\": \"Bob\"})\n    result = get_user_name(1)\n    # Need to patch where it's used\n\nmock = Mock()\nmock.method.return_value = 42\nprint(mock.method())"
     }
    ]
   },
   {
    "heading": "TDD (Test-Driven Development)",
    "blocks": [
     {
      "type": "markdown",
      "content": "TDD: Write tests first, then implement. Red → Green → Refactor."
     },
     {
      "type": "code",
      "content": "# 1. Write failing test\ndef test_factorial():\n    assert factorial(0) == 1\n    assert factorial(5) == 120\n\n# 2. Implement minimal code to pass\ndef factorial(n):\n    if n < 2:\n        return 1\n    return n * factorial(n - 1)\n\n# 3. Run test\ntest_factorial()\nprint(\"TDD cycle complete\")"
     }
    ]
   },
   {
    "heading": "Coverage",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `coverage` or `pytest-cov` to measure which lines are tested."
     },
     {
      "type": "code",
      "content": "# pip install pytest-cov\n# pytest --cov=my_module --cov-report=html\n# pytest --cov=my_module -v"
     }
    ]
   },
   {
    "heading": "Type Hints",
    "blocks": [
     {
      "type": "markdown",
      "content": "Type hints document expected types. Use for function parameters and return values."
     },
     {
      "type": "code",
      "content": "def greet(name: str) -> str:\n    return f\"Hello, {name}!\"\n\ndef add(a: int, b: int) -> int:\n    return a + b\n\nfrom typing import List, Optional, Dict\n\ndef process(items: List[str]) -> Optional[Dict[str, int]]:\n    if not items:\n        return None\n    return {item: len(item) for item in items}\n\nprint(greet(\"Alice\"))\nprint(process([\"a\", \"bb\"]))"
     }
    ]
   },
   {
    "heading": "mypy",
    "blocks": [
     {
      "type": "markdown",
      "content": "mypy is a static type checker. Run `mypy script.py` to find type errors."
     },
     {
      "type": "code",
      "content": "# pip install mypy\n# mypy my_module.py\n# Add to pyproject.toml or mypy.ini:\n# [mypy]\n# python_version = 3.10"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned unittest, pytest, mocking, TDD, coverage, type hints, and mypy. Write tests early, run them often, and keep them fast and focused."
     }
    ]
   }
  ],
  "sectionCount": 11
 },
 {
  "order": 15,
  "slug": "concurrency",
  "emoji": "⚡",
  "title": "Concurrency",
  "sections": [
   {
    "heading": "The Global Interpreter Lock (GIL)",
    "blocks": [
     {
      "type": "markdown",
      "content": "The GIL allows only one thread to execute Python bytecode at a time. Threads are good for I/O-bound work (waiting on network); CPU-bound work benefits from multiprocessing."
     },
     {
      "type": "code",
      "content": "import sys\nprint(f\"GIL: Only one thread runs Python bytecode at a time\")\nprint(f\"Use threading for I/O-bound, multiprocessing for CPU-bound\")"
     }
    ]
   },
   {
    "heading": "threading",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `threading` module provides threads. Use `Thread(target=func, args=(a, b))` and `start()`."
     },
     {
      "type": "code",
      "content": "import threading\nimport time\n\ndef worker(name, delay):\n    print(f\"{name} starting\")\n    time.sleep(delay)\n    print(f\"{name} done\")\n\nt1 = threading.Thread(target=worker, args=(\"A\", 1))\nt2 = threading.Thread(target=worker, args=(\"B\", 0.5))\nt1.start()\nt2.start()\nt1.join()\nt2.join()\nprint(\"All threads done\")"
     }
    ]
   },
   {
    "heading": "Thread Synchronization: Lock",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `Lock` to protect shared state from race conditions."
     },
     {
      "type": "code",
      "content": "import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(10000):\n        with lock:\n            counter += 1\n\nthreads = [threading.Thread(target=increment) for _ in range(4)]\nfor t in threads:\n    t.start()\nfor t in threads:\n    t.join()\nprint(counter)"
     }
    ]
   },
   {
    "heading": "multiprocessing",
    "blocks": [
     {
      "type": "markdown",
      "content": "`multiprocessing` spawns separate processes, each with its own Python interpreter and GIL."
     },
     {
      "type": "code",
      "content": "from multiprocessing import Process, current_process\n\ndef worker(name):\n    print(f\"Process {current_process().name}: {name}\")\n\nif __name__ == \"__main__\":\n    p1 = Process(target=worker, args=(\"A\",))\n    p2 = Process(target=worker, args=(\"B\",))\n    p1.start()\n    p2.start()\n    p1.join()\n    p2.join()\n    print(\"Done\")"
     }
    ]
   },
   {
    "heading": "concurrent.futures",
    "blocks": [
     {
      "type": "markdown",
      "content": "`ThreadPoolExecutor` and `ProcessPoolExecutor` provide a high-level interface."
     },
     {
      "type": "code",
      "content": "from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, as_completed\n\ndef square(n):\n    return n * n\n\nwith ThreadPoolExecutor(max_workers=4) as executor:\n    futures = [executor.submit(square, i) for i in range(5)]\n    for f in as_completed(futures):\n        print(f.result())\n\nwith ProcessPoolExecutor(max_workers=4) as executor:\n    results = list(executor.map(square, range(5)))\n    print(results)"
     }
    ]
   },
   {
    "heading": "asyncio Basics",
    "blocks": [
     {
      "type": "markdown",
      "content": "asyncio provides cooperative multitasking. Use `async def` and `await`."
     },
     {
      "type": "code",
      "content": "import asyncio\n\nasync def say_hello():\n    print(\"Hello\")\n    await asyncio.sleep(1)\n    print(\"World\")\n\nasync def main():\n    await say_hello()\n\nasyncio.run(main())"
     }
    ]
   },
   {
    "heading": "Running Multiple Coroutines",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `asyncio.gather()` to run coroutines concurrently."
     },
     {
      "type": "code",
      "content": "import asyncio\n\nasync def fetch(id, delay):\n    await asyncio.sleep(delay)\n    return f\"Result {id}\"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch(1, 0.5),\n        fetch(2, 0.3),\n        fetch(3, 0.4)\n    )\n    print(results)\n\nasyncio.run(main())"
     }
    ]
   },
   {
    "heading": "async/await Patterns",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `async with` for async context managers. Use `asyncio.create_task()` for fire-and-forget."
     },
     {
      "type": "code",
      "content": "import asyncio\n\nasync def slow_task():\n    await asyncio.sleep(1)\n    return \"done\"\n\nasync def main():\n    task = asyncio.create_task(slow_task())\n    print(\"Task started\")\n    result = await task\n    print(result)\n\nasyncio.run(main())"
     }
    ]
   },
   {
    "heading": "When to Use What",
    "blocks": [
     {
      "type": "markdown",
      "content": "| Scenario | Use |\n|----------|-----|\n| I/O-bound, many connections | asyncio |\n| I/O-bound, simple | threading |\n| CPU-bound | multiprocessing |\n| Mixed | concurrent.futures or ProcessPoolExecutor |"
     },
     {
      "type": "code",
      "content": "print(\"I/O-bound: asyncio or threading\")\nprint(\"CPU-bound: multiprocessing\")\nprint(\"concurrent.futures: unified API for both\")"
     }
    ]
   },
   {
    "heading": "Summary",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've learned the GIL, threading, locks, multiprocessing, concurrent.futures, asyncio, and async/await. Choose the right tool: asyncio for I/O-bound async, threading for simple I/O, multiprocessing for CPU-bound work."
     }
    ]
   }
  ],
  "sectionCount": 10
 }
];
