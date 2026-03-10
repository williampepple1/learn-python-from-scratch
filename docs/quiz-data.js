const QUIZ_DATA = {
 "parts": [
  {
   "index": 1,
   "title": "Basics & Syntax",
   "range": "Q1–Q100",
   "count": 100
  },
  {
   "index": 2,
   "title": "Strings, Lists & Tuples",
   "range": "Q101–Q200",
   "count": 100
  },
  {
   "index": 3,
   "title": "OOP & Classes",
   "range": "Q201–Q300",
   "count": 100
  },
  {
   "index": 4,
   "title": "Functional Programming & Iterators",
   "range": "Q301–Q400",
   "count": 100
  },
  {
   "index": 5,
   "title": "File I/O & Exceptions",
   "range": "Q401–Q500",
   "count": 100
  },
  {
   "index": 6,
   "title": "Modules, Packages & Standard Library",
   "range": "Q501–Q600",
   "count": 100
  },
  {
   "index": 7,
   "title": "Decorators, Generators & Metaprogramming",
   "range": "Q601–Q700",
   "count": 100
  },
  {
   "index": 8,
   "title": "Web Development & APIs",
   "range": "Q701–Q800",
   "count": 100
  },
  {
   "index": 9,
   "title": "Data Science & NumPy/Pandas",
   "range": "Q801–Q900",
   "count": 100
  },
  {
   "index": 10,
   "title": "Advanced Topics & Mixed",
   "range": "Q901–Q1000",
   "count": 100
  }
 ],
 "questions": [
  {
   "id": 1,
   "question": "What is Python primarily known for?",
   "options": {
    "A": "Being the fastest programming language",
    "B": "Readability and clean syntax",
    "C": "Exclusively for web development",
    "D": "Compiled-only execution"
   },
   "correct": "B",
   "explanation": "Python emphasizes code readability with its clear, expressive syntax. It's interpreted, not compiled, and is used across many domains.",
   "part": 1
  },
  {
   "id": 2,
   "question": "Which organization maintains the Python language?",
   "options": {
    "A": "Mozilla Foundation",
    "B": "Python Software Foundation",
    "C": "Open Source Initiative",
    "D": "Linux Foundation"
   },
   "correct": "B",
   "explanation": "The Python Software Foundation (PSF) maintains and oversees Python development.",
   "part": 1
  },
  {
   "id": 3,
   "question": "What does PEP 8 define?",
   "options": {
    "A": "Python Enhancement Proposals only",
    "B": "Style guide for Python code",
    "C": "Python package manager",
    "D": "Python execution model"
   },
   "correct": "B",
   "explanation": "PEP 8 is the official style guide for Python code, covering formatting, naming conventions, and best practices.",
   "part": 1
  },
  {
   "id": 4,
   "question": "What is the output of `print(type(3.14))`?",
   "options": {
    "A": "int",
    "B": "float",
    "C": "decimal",
    "D": "number"
   },
   "correct": "B",
   "explanation": "3.14 is a float literal. The type() function returns <class 'float'>.",
   "part": 1
  },
  {
   "id": 5,
   "question": "Which is NOT a valid Python variable name?",
   "options": {
    "A": "_private",
    "B": "2nd_value",
    "C": "value_2",
    "D": "value2"
   },
   "correct": "B",
   "explanation": "Variable names cannot start with a digit. 2nd_value is invalid.",
   "part": 1
  },
  {
   "id": 6,
   "question": "What does `10 // 3` evaluate to?",
   "options": {
    "A": "3.333...",
    "B": "3",
    "C": "3.0",
    "D": "4"
   },
   "correct": "B",
   "explanation": "The // operator performs floor division, returning an integer (3) when both operands are integers.",
   "part": 1
  },
  {
   "id": 7,
   "question": "What is `bool(0)` in Python?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "0",
    "D": "None"
   },
   "correct": "B",
   "explanation": "In Python, 0 is falsy. bool(0) returns False.",
   "part": 1
  },
  {
   "id": 8,
   "question": "What does `id(x)` return?",
   "options": {
    "A": "The type of x",
    "B": "Memory address/identity of object x",
    "C": "The value of x",
    "D": "Length of x"
   },
   "correct": "B",
   "explanation": "id() returns the unique integer identity (memory address) of an object.",
   "part": 1
  },
  {
   "id": 9,
   "question": "Which keyword is used to define a function?",
   "options": {
    "A": "func",
    "B": "def",
    "C": "function",
    "D": "define"
   },
   "correct": "B",
   "explanation": "Python uses the def keyword to define functions.",
   "part": 1
  },
  {
   "id": 10,
   "question": "What is the output of `print(2 ** 3)`?",
   "options": {
    "A": "6",
    "B": "8",
    "C": "9",
    "D": "23"
   },
   "correct": "B",
   "explanation": "** is the exponentiation operator. 2 ** 3 = 8.",
   "part": 1
  },
  {
   "id": 11,
   "question": "Which is the correct way to write a multi-line comment?",
   "options": {
    "A": "/* comment */",
    "B": "'''comment''' or \"\"\"comment\"\"\"",
    "C": "// comment",
    "D": "# comment (only for single line)"
   },
   "correct": "B",
   "explanation": "Python uses triple quotes (''' or \"\"\") for multi-line strings, often used as docstrings/comments.",
   "part": 1
  },
  {
   "id": 12,
   "question": "What does `'hello' == \"hello\"` evaluate to?",
   "options": {
    "A": "False",
    "B": "True",
    "C": "Error",
    "D": "None"
   },
   "correct": "B",
   "explanation": "Single and double quotes create equivalent strings. They compare equal.",
   "part": 1
  },
  {
   "id": 13,
   "question": "What is `None` in Python?",
   "options": {
    "A": "Same as 0",
    "B": "A singleton object representing absence of value",
    "C": "An empty string",
    "D": "False"
   },
   "correct": "B",
   "explanation": "None is a built-in singleton representing the absence of a value. It's not 0, '', or False.",
   "part": 1
  },
  {
   "id": 14,
   "question": "What does `isinstance(5, int)` return?",
   "options": {
    "A": "5",
    "B": "True",
    "C": "int",
    "D": "False"
   },
   "correct": "B",
   "explanation": "isinstance(obj, type) returns True if obj is an instance of type (or a subclass).",
   "part": 1
  },
  {
   "id": 15,
   "question": "Which operator has highest precedence: `*`, `+`, `**`, `()`?",
   "options": {
    "A": "*",
    "B": "+",
    "C": "**",
    "D": "()"
   },
   "correct": "D",
   "explanation": "Parentheses () have the highest precedence, then **, then * and /, then + and -.",
   "part": 1
  },
  {
   "id": 16,
   "question": "What is the output of `print(1 != 1.0)`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "Error",
    "D": "None"
   },
   "correct": "B",
   "explanation": "1 and 1.0 are equal in value (==), so 1 != 1.0 is False.",
   "part": 1
  },
  {
   "id": 17,
   "question": "What does `input()` return?",
   "options": {
    "A": "An integer",
    "B": "A string",
    "C": "Depends on user input",
    "D": "A float"
   },
   "correct": "B",
   "explanation": "input() always returns a string. You must convert to int/float if needed.",
   "part": 1
  },
  {
   "id": 18,
   "question": "Which is NOT a Python keyword?",
   "options": {
    "A": "lambda",
    "B": "async",
    "C": "null",
    "D": "yield"
   },
   "correct": "C",
   "explanation": "Python uses None, not null. null is not a keyword.",
   "part": 1
  },
  {
   "id": 19,
   "question": "What does `print(sep='-', 'a', 'b', 'c')` do?",
   "options": {
    "A": "Prints a-b-c",
    "B": "SyntaxError",
    "C": "Prints a b c",
    "D": "Prints abc"
   },
   "correct": "B",
   "explanation": "Keyword arguments must come after positional arguments. This causes a SyntaxError.",
   "part": 1
  },
  {
   "id": 20,
   "question": "What is `type(True)`?",
   "options": {
    "A": "int",
    "B": "bool",
    "C": "boolean",
    "D": "Boolean"
   },
   "correct": "B",
   "explanation": "True and False are of type bool. In Python, bool is a subclass of int.",
   "part": 1
  },
  {
   "id": 21,
   "question": "What does `10 % 3` return?",
   "options": {
    "A": "1",
    "B": "3",
    "C": "0",
    "D": "3.33"
   },
   "correct": "A",
   "explanation": "% is the modulo operator. 10 % 3 = 1 (remainder of 10 divided by 3).",
   "part": 1
  },
  {
   "id": 22,
   "question": "Which converts a string to an integer?",
   "options": {
    "A": "int(str)",
    "B": "integer(str)",
    "C": "parse.Int(str)",
    "D": "str.to_int()"
   },
   "correct": "A",
   "explanation": "int() converts a string to an integer, e.g., int('42') -> 42.",
   "part": 1
  },
  {
   "id": 23,
   "question": "What is the output of `print(2 + 3 * 4)`?",
   "options": {
    "A": "20",
    "B": "14",
    "C": "24",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "Multiplication has higher precedence: 3 * 4 = 12, then 2 + 12 = 14.",
   "part": 1
  },
  {
   "id": 24,
   "question": "What does `and` return when both operands are truthy?",
   "options": {
    "A": "True",
    "B": "The second operand",
    "C": "The first operand",
    "D": "1"
   },
   "correct": "B",
   "explanation": "and returns the first falsy value, or the last value if all are truthy. So it returns the second operand.",
   "part": 1
  },
  {
   "id": 25,
   "question": "What is `bool('')`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "0",
    "D": "None"
   },
   "correct": "B",
   "explanation": "Empty string is falsy in Python. bool('') returns False.",
   "part": 1
  },
  {
   "id": 26,
   "question": "Which symbol starts a single-line comment?",
   "options": {
    "A": "//",
    "B": "#",
    "C": "/*",
    "D": "--"
   },
   "correct": "B",
   "explanation": "Python uses # for single-line comments.",
   "part": 1
  },
  {
   "id": 27,
   "question": "What does `print(end='')` do?",
   "options": {
    "A": "Prints nothing",
    "B": "Ends the program",
    "C": "Uses empty string instead of newline",
    "D": "Error"
   },
   "correct": "C",
   "explanation": "end='' overrides the default newline, so nothing is printed after the content.",
   "part": 1
  },
  {
   "id": 28,
   "question": "What is `1 < 2 < 3` equivalent to?",
   "options": {
    "A": "(1 < 2) and (2 < 3)",
    "B": "1 < (2 < 3)",
    "C": "Chained comparison, not equivalent to and",
    "D": "SyntaxError"
   },
   "correct": "A",
   "explanation": "Python allows chained comparisons: 1 < 2 < 3 is equivalent to (1 < 2) and (2 < 3).",
   "part": 1
  },
  {
   "id": 29,
   "question": "What does `~5` produce (bitwise NOT)?",
   "options": {
    "A": "-5",
    "B": "-6",
    "C": "5",
    "D": "4"
   },
   "correct": "B",
   "explanation": "~x = -(x+1). So ~5 = -6.",
   "part": 1
  },
  {
   "id": 30,
   "question": "Which is valid Python indentation?",
   "options": {
    "A": "Tabs and spaces mixed",
    "B": "4 spaces (PEP 8)",
    "C": "2 spaces only",
    "D": "No indentation required"
   },
   "correct": "B",
   "explanation": "PEP 8 recommends 4 spaces. Mixing tabs and spaces can cause errors.",
   "part": 1
  },
  {
   "id": 31,
   "question": "What is `float('inf')`?",
   "options": {
    "A": "Error",
    "B": "Positive infinity",
    "C": "0.0",
    "D": "None"
   },
   "correct": "B",
   "explanation": "float('inf') represents positive infinity in Python.",
   "part": 1
  },
  {
   "id": 32,
   "question": "What does `x = y = 5` do?",
   "options": {
    "A": "Error",
    "B": "Assigns 5 to x and y",
    "C": "Compares x and y",
    "D": "Creates a tuple"
   },
   "correct": "B",
   "explanation": "Chained assignment: both x and y are assigned the value 5.",
   "part": 1
  },
  {
   "id": 33,
   "question": "What is `0 or 5`?",
   "options": {
    "A": "0",
    "B": "5",
    "C": "True",
    "D": "False"
   },
   "correct": "B",
   "explanation": "or returns the first truthy value. 0 is falsy, so it returns 5.",
   "part": 1
  },
  {
   "id": 34,
   "question": "Which operator checks identity?",
   "options": {
    "A": "==",
    "B": "is",
    "C": "=",
    "D": "equals"
   },
   "correct": "B",
   "explanation": "is checks if two variables refer to the same object (identity), not value equality.",
   "part": 1
  },
  {
   "id": 35,
   "question": "What does `print(1, 2, 3, sep=',')` output?",
   "options": {
    "A": "1 2 3",
    "B": "1,2,3",
    "C": "123",
    "D": "1, 2, 3"
   },
   "correct": "B",
   "explanation": "sep=',' uses comma as separator between items: 1,2,3.",
   "part": 1
  },
  {
   "id": 36,
   "question": "What is `complex(1, 2)`?",
   "options": {
    "A": "3",
    "B": "1+2j",
    "C": "(1, 2)",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "complex(real, imag) creates a complex number: 1+2j.",
   "part": 1
  },
  {
   "id": 37,
   "question": "Which is a valid way to get user input?",
   "options": {
    "A": "read()",
    "B": "input()",
    "C": "get_input()",
    "D": "scan()"
   },
   "correct": "B",
   "explanation": "input() is the built-in function for reading user input from stdin.",
   "part": 1
  },
  {
   "id": 38,
   "question": "What does `5 in [1, 2, 3, 4, 5]` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "5",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "in checks membership. 5 is in the list, so it returns True.",
   "part": 1
  },
  {
   "id": 39,
   "question": "What is `2 << 1` (left shift)?",
   "options": {
    "A": "1",
    "B": "4",
    "C": "3",
    "D": "2"
   },
   "correct": "B",
   "explanation": "Left shift by 1 multiplies by 2. 2 << 1 = 4.",
   "part": 1
  },
  {
   "id": 40,
   "question": "What does `round(2.5)` return in Python 3?",
   "options": {
    "A": "2",
    "B": "3",
    "C": "2.0",
    "D": "2.5"
   },
   "correct": "A",
   "explanation": "Python 3 uses banker's rounding (round half to even). round(2.5) = 2 because 2 is even.",
   "part": 1
  },
  {
   "id": 41,
   "question": "What does `abs(-7)` return?",
   "options": {
    "A": "-7",
    "B": "7",
    "C": "0",
    "D": "7.0"
   },
   "correct": "B",
   "explanation": "abs() returns the absolute value. abs(-7) = 7.",
   "part": 1
  },
  {
   "id": 42,
   "question": "Which creates an empty set?",
   "options": {
    "A": "{}",
    "B": "set()",
    "C": "[]",
    "D": "empty_set()"
   },
   "correct": "B",
   "explanation": "{} creates an empty dict. set() creates an empty set.",
   "part": 1
  },
  {
   "id": 43,
   "question": "What is `max(1, 2, 3)`?",
   "options": {
    "A": "1",
    "B": "3",
    "C": "6",
    "D": "[1,2,3]"
   },
   "correct": "B",
   "explanation": "max() returns the largest argument: 3.",
   "part": 1
  },
  {
   "id": 44,
   "question": "What does `divmod(10, 3)` return?",
   "options": {
    "A": "3.33",
    "B": "(3, 1)",
    "C": "1",
    "D": "3"
   },
   "correct": "B",
   "explanation": "divmod(a, b) returns (a//b, a%b). divmod(10, 3) = (3, 1).",
   "part": 1
  },
  {
   "id": 45,
   "question": "What is `pow(2, 3)`?",
   "options": {
    "A": "6",
    "B": "8",
    "C": "9",
    "D": "5"
   },
   "correct": "B",
   "explanation": "pow(base, exp) returns base**exp. pow(2, 3) = 8.",
   "part": 1
  },
  {
   "id": 46,
   "question": "Which converts to string?",
   "options": {
    "A": "str(42)",
    "B": "toString(42)",
    "C": "string(42)",
    "D": "42.str()"
   },
   "correct": "A",
   "explanation": "str() converts objects to their string representation.",
   "part": 1
  },
  {
   "id": 47,
   "question": "What does `'a' in 'abc'` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "1",
    "D": "0"
   },
   "correct": "A",
   "explanation": "in checks substring membership. 'a' is in 'abc'.",
   "part": 1
  },
  {
   "id": 48,
   "question": "What is `(1, 2)[0]`?",
   "options": {
    "A": "0",
    "B": "1",
    "C": "2",
    "D": "(1,)"
   },
   "correct": "B",
   "explanation": "Indexing: [0] gets the first element, which is 1.",
   "part": 1
  },
  {
   "id": 49,
   "question": "What does `not True` evaluate to?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "None",
    "D": "0"
   },
   "correct": "B",
   "explanation": "not negates the boolean. not True = False.",
   "part": 1
  },
  {
   "id": 50,
   "question": "Which is the membership operator?",
   "options": {
    "A": "in",
    "B": "contains",
    "C": "member",
    "D": "has"
   },
   "correct": "A",
   "explanation": "in (and not in) are the membership operators.",
   "part": 1
  },
  {
   "id": 51,
   "question": "What is `hex(255)`?",
   "options": {
    "A": "255",
    "B": "'0xff'",
    "C": "0xff",
    "D": "ff"
   },
   "correct": "B",
   "explanation": "hex() returns a string representation: '0xff'.",
   "part": 1
  },
  {
   "id": 52,
   "question": "What does `ord('A')` return?",
   "options": {
    "A": "65",
    "B": "97",
    "C": "'A'",
    "D": "1"
   },
   "correct": "A",
   "explanation": "ord() returns the Unicode code point. ord('A') = 65.",
   "part": 1
  },
  {
   "id": 53,
   "question": "What is `chr(97)`?",
   "options": {
    "A": "97",
    "B": "'a'",
    "C": "a",
    "D": "96"
   },
   "correct": "B",
   "explanation": "chr() returns the character for a Unicode code point. chr(97) = 'a'.",
   "part": 1
  },
  {
   "id": 54,
   "question": "What does `len('hello')` return?",
   "options": {
    "A": "4",
    "B": "5",
    "C": "6",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "len() returns the number of characters. 'hello' has 5 characters.",
   "part": 1
  },
  {
   "id": 55,
   "question": "Which is an augmented assignment?",
   "options": {
    "A": "x = x + 1",
    "B": "x += 1",
    "C": "x++",
    "D": "x =+ 1"
   },
   "correct": "B",
   "explanation": "x += 1 is augmented assignment. Python has no x++.",
   "part": 1
  },
  {
   "id": 56,
   "question": "What is `1 and 0`?",
   "options": {
    "A": "1",
    "B": "0",
    "C": "True",
    "D": "False"
   },
   "correct": "B",
   "explanation": "and returns the first falsy value. 1 is truthy, 0 is falsy, so it returns 0.",
   "part": 1
  },
  {
   "id": 57,
   "question": "What does `format(42, 'b')` return?",
   "options": {
    "A": "'42'",
    "B": "'101010'",
    "C": "42",
    "D": "101010"
   },
   "correct": "B",
   "explanation": "format(n, 'b') converts to binary string. 42 in binary is 101010.",
   "part": 1
  },
  {
   "id": 58,
   "question": "What is `repr('hello')`?",
   "options": {
    "A": "hello",
    "B": "'hello'",
    "C": "hello (no quotes)",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "repr() returns a string that would yield an object with the same value. repr('hello') = \"'hello'\"",
   "part": 1
  },
  {
   "id": 59,
   "question": "What does `hash(1)` return?",
   "options": {
    "A": "1",
    "B": "An integer hash value",
    "C": "Error",
    "D": "None"
   },
   "correct": "B",
   "explanation": "hash() returns the hash value of an object (an integer).",
   "part": 1
  },
  {
   "id": 60,
   "question": "Which built-in gets all attributes?",
   "options": {
    "A": "attrs()",
    "B": "dir()",
    "C": "attributes()",
    "D": "vars()"
   },
   "correct": "B",
   "explanation": "dir() returns the list of names in the current scope or object's attributes.",
   "part": 1
  },
  {
   "id": 61,
   "question": "What is `callable(print)`?",
   "options": {
    "A": "False",
    "B": "True",
    "C": "print",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "callable() returns True if the object appears callable. print is a function.",
   "part": 1
  },
  {
   "id": 62,
   "question": "What does `globals()` return?",
   "options": {
    "A": "List of global names",
    "B": "Dict of global namespace",
    "C": "All variables",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "globals() returns a dict representing the current global symbol table.",
   "part": 1
  },
  {
   "id": 63,
   "question": "What is `locals()`?",
   "options": {
    "A": "List of local names",
    "B": "Dict of local namespace",
    "C": "Current function",
    "D": "Module name"
   },
   "correct": "B",
   "explanation": "locals() returns a dict of the current local symbol table.",
   "part": 1
  },
  {
   "id": 64,
   "question": "What does `__name__` equal when script is run directly?",
   "options": {
    "A": "'__main__'",
    "B": "'main'",
    "C": "None",
    "D": "''"
   },
   "correct": "A",
   "explanation": "When run as main script, __name__ is '__main__'.",
   "part": 1
  },
  {
   "id": 65,
   "question": "What is `help(print)`?",
   "options": {
    "A": "Error",
    "B": "Prints help text for print",
    "C": "Returns docstring",
    "D": "None"
   },
   "correct": "B",
   "explanation": "help() invokes the built-in help system. It displays help for print.",
   "part": 1
  },
  {
   "id": 66,
   "question": "What does `eval('2+3')` return?",
   "options": {
    "A": "'2+3'",
    "B": "5",
    "C": "Error",
    "D": "None"
   },
   "correct": "B",
   "explanation": "eval() evaluates a string as a Python expression. eval('2+3') = 5.",
   "part": 1
  },
  {
   "id": 67,
   "question": "What is `exec('x=5')`?",
   "options": {
    "A": "Returns 5",
    "B": "Executes code, returns None",
    "C": "Error",
    "D": "Prints 5"
   },
   "correct": "B",
   "explanation": "exec() executes Python code. It returns None.",
   "part": 1
  },
  {
   "id": 68,
   "question": "What does `getattr(obj, 'x', 'default')` do?",
   "options": {
    "A": "Sets obj.x to 'default'",
    "B": "Gets obj.x or returns 'default' if missing",
    "C": "Checks if obj has x",
    "D": "Deletes obj.x"
   },
   "correct": "B",
   "explanation": "getattr(object, name, default) returns the named attribute or default if not found.",
   "part": 1
  },
  {
   "id": 69,
   "question": "What is `hasattr(obj, 'x')`?",
   "options": {
    "A": "Gets obj.x",
    "B": "True if obj has attribute x",
    "C": "Sets obj.x",
    "D": "Deletes obj.x"
   },
   "correct": "B",
   "explanation": "hasattr(obj, name) returns True if the object has the named attribute.",
   "part": 1
  },
  {
   "id": 70,
   "question": "What does `setattr(obj, 'x', 1)` do?",
   "options": {
    "A": "Gets obj.x",
    "B": "Sets obj.x = 1",
    "C": "Deletes obj.x",
    "D": "Checks obj.x"
   },
   "correct": "B",
   "explanation": "setattr(object, name, value) sets the named attribute.",
   "part": 1
  },
  {
   "id": 71,
   "question": "What is `delattr(obj, 'x')`?",
   "options": {
    "A": "Gets obj.x",
    "B": "Deletes attribute x from obj",
    "C": "Sets obj.x = None",
    "D": "Checks obj.x"
   },
   "correct": "B",
   "explanation": "delattr(object, name) deletes the named attribute.",
   "part": 1
  },
  {
   "id": 72,
   "question": "What does `isinstance(x, (int, float))` check?",
   "options": {
    "A": "x is int or float",
    "B": "x is tuple",
    "C": "x equals (int, float)",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "isinstance() accepts a tuple of types. True if x is instance of any of them.",
   "part": 1
  },
  {
   "id": 73,
   "question": "What is `issubclass(bool, int)`?",
   "options": {
    "A": "False",
    "B": "True",
    "C": "Error",
    "D": "None"
   },
   "correct": "B",
   "explanation": "In Python, bool is a subclass of int. True and False are 1 and 0.",
   "part": 1
  },
  {
   "id": 74,
   "question": "What does `super()` do?",
   "options": {
    "A": "Calls parent method",
    "B": "Returns parent class proxy",
    "C": "Raises exception",
    "D": "Imports parent"
   },
   "correct": "B",
   "explanation": "super() returns a proxy object that delegates to the parent class.",
   "part": 1
  },
  {
   "id": 75,
   "question": "What is `object` in Python?",
   "options": {
    "A": "Base class of all classes",
    "B": "A type",
    "C": "Built-in only",
    "D": "Deprecated"
   },
   "correct": "A",
   "explanation": "object is the base class of all classes in Python 3.",
   "part": 1
  },
  {
   "id": 76,
   "question": "What does `type('MyClass', (), {})` create?",
   "options": {
    "A": "String",
    "B": "A new class dynamically",
    "C": "Tuple",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "type(name, bases, dict) can create a new type/class dynamically.",
   "part": 1
  },
  {
   "id": 77,
   "question": "What is `vars()`?",
   "options": {
    "A": "Returns __dict__ of current scope",
    "B": "Returns all variables",
    "C": "Returns locals()",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "vars() without args returns __dict__ of the current scope (like locals()).",
   "part": 1
  },
  {
   "id": 78,
   "question": "What does `breakpoint()` do?",
   "options": {
    "A": "Stops program",
    "B": "Drops into debugger",
    "C": "Prints break",
    "D": "Raises error"
   },
   "correct": "B",
   "explanation": "breakpoint() calls sys.breakpointhook(), typically starting the debugger.",
   "part": 1
  },
  {
   "id": 79,
   "question": "What is `license`?",
   "options": {
    "A": "Function",
    "B": "String with license text",
    "C": "Module",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "license is a string containing the Python license text.",
   "part": 1
  },
  {
   "id": 80,
   "question": "What does `copyright` contain?",
   "options": {
    "A": "Copyright notice",
    "B": "License",
    "C": "Version",
    "D": "Authors"
   },
   "correct": "A",
   "explanation": "copyright is a string with the copyright notice.",
   "part": 1
  },
  {
   "id": 81,
   "question": "What is `__builtins__`?",
   "options": {
    "A": "Module or dict of built-ins",
    "B": "List of keywords",
    "C": "Compiler",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__builtins__ is either the builtins module or its __dict__.",
   "part": 1
  },
  {
   "id": 82,
   "question": "What does `open` return?",
   "options": {
    "A": "String",
    "B": "File object/IO object",
    "C": "Path",
    "D": "None"
   },
   "correct": "B",
   "explanation": "open() returns a file object (or file-like object).",
   "part": 1
  },
  {
   "id": 83,
   "question": "What is `sum([1,2,3])`?",
   "options": {
    "A": "6",
    "B": "123",
    "C": "[1,2,3]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "sum() adds all items. sum([1,2,3]) = 6.",
   "part": 1
  },
  {
   "id": 84,
   "question": "What does `min([3,1,2])` return?",
   "options": {
    "A": "3",
    "B": "1",
    "C": "2",
    "D": "[1,2,3]"
   },
   "correct": "B",
   "explanation": "min() returns the smallest item: 1.",
   "part": 1
  },
  {
   "id": 85,
   "question": "What is `sorted([3,1,2])`?",
   "options": {
    "A": "[3,1,2]",
    "B": "[1,2,3]",
    "C": "(1,2,3)",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "sorted() returns a new sorted list: [1, 2, 3].",
   "part": 1
  },
  {
   "id": 86,
   "question": "What does `reversed([1,2,3])` return?",
   "options": {
    "A": "[3,2,1]",
    "B": "list_reverseiterator object",
    "C": "(3,2,1)",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "reversed() returns a reverse iterator, not a list. Use list(reversed(...)) for a list.",
   "part": 1
  },
  {
   "id": 87,
   "question": "What is `all([True, True, False])`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "[True, True, False]",
    "D": "None"
   },
   "correct": "B",
   "explanation": "all() returns True only if all elements are truthy. One is False.",
   "part": 1
  },
  {
   "id": 88,
   "question": "What does `any([False, False, True])` return?",
   "options": {
    "A": "False",
    "B": "True",
    "C": "3",
    "D": "None"
   },
   "correct": "B",
   "explanation": "any() returns True if any element is truthy.",
   "part": 1
  },
  {
   "id": 89,
   "question": "What is `bin(10)`?",
   "options": {
    "A": "10",
    "B": "'0b1010'",
    "C": "1010",
    "D": "0b1010"
   },
   "correct": "B",
   "explanation": "bin() returns a binary string: '0b1010'.",
   "part": 1
  },
  {
   "id": 90,
   "question": "What does `oct(8)` return?",
   "options": {
    "A": "8",
    "B": "'0o10'",
    "C": "10",
    "D": "0o10"
   },
   "correct": "B",
   "explanation": "oct() returns an octal string: '0o10'.",
   "part": 1
  },
  {
   "id": 91,
   "question": "What is `bytes(3)`?",
   "options": {
    "A": "'333'",
    "B": "b'\\x00\\x00\\x00'",
    "C": "3",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "bytes(n) creates a bytes object of n zero bytes.",
   "part": 1
  },
  {
   "id": 92,
   "question": "What does `bytearray([65,66,67])` produce?",
   "options": {
    "A": "b'ABC'",
    "B": "bytearray(b'ABC')",
    "C": "[65,66,67]",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "bytearray() creates a mutable bytearray. bytearray([65,66,67]) = bytearray(b'ABC').",
   "part": 1
  },
  {
   "id": 93,
   "question": "What is `memoryview(b'abc')`?",
   "options": {
    "A": "String",
    "B": "Memory view object",
    "C": "Bytes",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "memoryview() creates a memory view object for buffer protocol access.",
   "part": 1
  },
  {
   "id": 94,
   "question": "What does `slice(1, 5)` create?",
   "options": {
    "A": "[1,2,3,4]",
    "B": "slice(1, 5, None)",
    "C": "Range",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "slice() creates a slice object used for extended slicing.",
   "part": 1
  },
  {
   "id": 95,
   "question": "What is `range(3)`?",
   "options": {
    "A": "[0,1,2]",
    "B": "range(0, 3) - iterable",
    "C": "(0,1,2)",
    "D": "3"
   },
   "correct": "B",
   "explanation": "range(3) returns a range object (0, 1, 2), not a list.",
   "part": 1
  },
  {
   "id": 96,
   "question": "What does `list(range(2, 5))` produce?",
   "options": {
    "A": "[2, 3, 4]",
    "B": "[2, 5]",
    "C": "[2, 3, 4, 5]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "range(2, 5) gives 2, 3, 4 (exclusive end).",
   "part": 1
  },
  {
   "id": 97,
   "question": "What is `tuple([1,2,3])`?",
   "options": {
    "A": "[1,2,3]",
    "B": "(1, 2, 3)",
    "C": "1, 2, 3",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "tuple() converts iterable to tuple. tuple([1,2,3]) = (1, 2, 3).",
   "part": 1
  },
  {
   "id": 98,
   "question": "What does `dict(a=1, b=2)` create?",
   "options": {
    "A": "{'a':1, 'b':2}",
    "B": "['a','b']",
    "C": "(1,2)",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "dict() with keyword args creates a dict: {'a': 1, 'b': 2}.",
   "part": 1
  },
  {
   "id": 99,
   "question": "What is `frozenset([1,2,3])`?",
   "options": {
    "A": "set([1,2,3])",
    "B": "Immutable set",
    "C": "frozen list",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "frozenset creates an immutable set.",
   "part": 1
  },
  {
   "id": 100,
   "question": "What does `enumerate(['a','b'])` return?",
   "options": {
    "A": "[(0,'a'), (1,'b')]",
    "B": "enumerate object",
    "C": "['a','b']",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "enumerate() returns an enumerate object (iterator). list() it for [(0,'a'), (1,'b')].",
   "part": 1
  },
  {
   "id": 101,
   "question": "What does `'hello'.upper()` return?",
   "options": {
    "A": "'HELLO'",
    "B": "'hello'",
    "C": "Error",
    "D": "None"
   },
   "correct": "A",
   "explanation": "upper() returns uppercase.",
   "part": 2
  },
  {
   "id": 102,
   "question": "What is `'  hi  '.strip()`?",
   "options": {
    "A": "'  hi  '",
    "B": "'hi'",
    "C": "'hi  '",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "strip() removes leading/trailing whitespace.",
   "part": 2
  },
  {
   "id": 103,
   "question": "What does `'a,b,c'.split(',')` produce?",
   "options": {
    "A": "['a','b','c']",
    "B": "'abc'",
    "C": "('a','b','c')",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "split() returns list of substrings.",
   "part": 2
  },
  {
   "id": 104,
   "question": "What is `'hello'[1:4]`?",
   "options": {
    "A": "'hel'",
    "B": "'ell'",
    "C": "'llo'",
    "D": "'ell'"
   },
   "correct": "B",
   "explanation": "Slicing [1:4] gives indices 1,2,3.",
   "part": 2
  },
  {
   "id": 105,
   "question": "What does `'hello'[-1]` return?",
   "options": {
    "A": "'h'",
    "B": "'o'",
    "C": "'e'",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "Negative -1 is last character.",
   "part": 2
  },
  {
   "id": 106,
   "question": "What is `'ab' * 3`?",
   "options": {
    "A": "'ababab'",
    "B": "'ab3'",
    "C": "Error",
    "D": "6"
   },
   "correct": "A",
   "explanation": "String * n repeats the string.",
   "part": 2
  },
  {
   "id": 107,
   "question": "What does `'hello'.find('l')` return?",
   "options": {
    "A": "2",
    "B": "3",
    "C": "-1",
    "D": "1"
   },
   "correct": "A",
   "explanation": "find() returns index of first occurrence.",
   "part": 2
  },
  {
   "id": 108,
   "question": "What is `'hello'.replace('l','x')`?",
   "options": {
    "A": "'hexxo'",
    "B": "'hexo'",
    "C": "'heo'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "replace() replaces all by default.",
   "part": 2
  },
  {
   "id": 109,
   "question": "What does `'Hello'.lower()` return?",
   "options": {
    "A": "'HELLO'",
    "B": "'hello'",
    "C": "'Hello'",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "lower() returns lowercase.",
   "part": 2
  },
  {
   "id": 110,
   "question": "What is `f'{2+3}'`?",
   "options": {
    "A": "'2+3'",
    "B": "'5'",
    "C": "5",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "f-strings evaluate expressions.",
   "part": 2
  },
  {
   "id": 111,
   "question": "What does `'hello'.startswith('he')` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "0",
    "D": "1"
   },
   "correct": "A",
   "explanation": "startswith() returns True for prefix match.",
   "part": 2
  },
  {
   "id": 112,
   "question": "What is `'hello'.capitalize()`?",
   "options": {
    "A": "'Hello'",
    "B": "'HELLO'",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "capitalize() makes first char upper.",
   "part": 2
  },
  {
   "id": 113,
   "question": "What does `'  '.join(['a','b'])` produce?",
   "options": {
    "A": "'a  b'",
    "B": "'ab'",
    "C": "['a','b']",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "join() concatenates with separator.",
   "part": 2
  },
  {
   "id": 114,
   "question": "What is `r'\\n'`?",
   "options": {
    "A": "Newline",
    "B": "Literal backslash-n",
    "C": "Error",
    "D": "''"
   },
   "correct": "B",
   "explanation": "Raw string: backslash is literal.",
   "part": 2
  },
  {
   "id": 115,
   "question": "What does `'hello'.count('l')` return?",
   "options": {
    "A": "1",
    "B": "2",
    "C": "0",
    "D": "5"
   },
   "correct": "B",
   "explanation": "count() returns occurrences.",
   "part": 2
  },
  {
   "id": 116,
   "question": "What is `[1,2,3] + [4,5]`?",
   "options": {
    "A": "[1,2,3,4,5]",
    "B": "[5,7,8]",
    "C": "Error",
    "D": "[1,2,3][4,5]"
   },
   "correct": "A",
   "explanation": "List + concatenates.",
   "part": 2
  },
  {
   "id": 117,
   "question": "What does `[1,2,3].append(4)` return?",
   "options": {
    "A": "[1,2,3,4]",
    "B": "None",
    "C": "4",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "append() returns None.",
   "part": 2
  },
  {
   "id": 118,
   "question": "What is `[1,2,3][::-1]`?",
   "options": {
    "A": "[1,2,3]",
    "B": "[3,2,1]",
    "C": "Error",
    "D": "[]"
   },
   "correct": "B",
   "explanation": "[::-1] reverses.",
   "part": 2
  },
  {
   "id": 119,
   "question": "What does `(1,2) + (3,)` produce?",
   "options": {
    "A": "(1,2,3)",
    "B": "(4,2)",
    "C": "Error",
    "D": "(1,2)(3,)"
   },
   "correct": "A",
   "explanation": "Tuple + concatenates.",
   "part": 2
  },
  {
   "id": 120,
   "question": "What is `a, b = 1, 2`?",
   "options": {
    "A": "Error",
    "B": "Tuple unpacking",
    "C": "Comparison",
    "D": "Tuple only"
   },
   "correct": "B",
   "explanation": "Multiple assignment unpacks.",
   "part": 2
  },
  {
   "id": 121,
   "question": "What does `[x*2 for x in [1,2,3]]` produce?",
   "options": {
    "A": "[2,4,6]",
    "B": "[1,2,3]",
    "C": "Generator",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "List comprehension doubles.",
   "part": 2
  },
  {
   "id": 122,
   "question": "What is `(1,)`?",
   "options": {
    "A": "1",
    "B": "Single-element tuple",
    "C": "Error",
    "D": "Parentheses"
   },
   "correct": "B",
   "explanation": "Trailing comma creates tuple.",
   "part": 2
  },
  {
   "id": 123,
   "question": "What does `[1,2,2,3].index(2)` return?",
   "options": {
    "A": "1",
    "B": "2",
    "C": "[1,2]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "index() returns first occurrence.",
   "part": 2
  },
  {
   "id": 124,
   "question": "What is `'hello'[::2]`?",
   "options": {
    "A": "'hlo'",
    "B": "'hel'",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Step 2: every other char.",
   "part": 2
  },
  {
   "id": 125,
   "question": "What does `[1,2,3].pop()` return?",
   "options": {
    "A": "1",
    "B": "3",
    "C": "[1,2]",
    "D": "None"
   },
   "correct": "B",
   "explanation": "pop() returns last element.",
   "part": 2
  },
  {
   "id": 126,
   "question": "What is `'hello'.encode()`?",
   "options": {
    "A": "'hello'",
    "B": "b'hello'",
    "C": "[104,101,...]",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "encode() converts to bytes.",
   "part": 2
  },
  {
   "id": 127,
   "question": "What does `(1,2)[0]=3` do?",
   "options": {
    "A": "Sets to 3",
    "B": "TypeError",
    "C": "Creates new tuple",
    "D": "Nothing"
   },
   "correct": "B",
   "explanation": "Tuples are immutable.",
   "part": 2
  },
  {
   "id": 128,
   "question": "What is `[1,2,3].extend([4,5])`?",
   "options": {
    "A": "[1,2,3,4,5]",
    "B": "None",
    "C": "Error",
    "D": "[4,5]"
   },
   "correct": "B",
   "explanation": "extend() returns None.",
   "part": 2
  },
  {
   "id": 129,
   "question": "What does `'hello'.islower()` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "islower() True for all lowercase.",
   "part": 2
  },
  {
   "id": 130,
   "question": "What is `'  hello  '.lstrip()`?",
   "options": {
    "A": "'hello  '",
    "B": "'  hello'",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "lstrip() removes leading space.",
   "part": 2
  },
  {
   "id": 131,
   "question": "What does `'hello'.rjust(10)` return?",
   "options": {
    "A": "'     hello'",
    "B": "'hello     '",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "rjust() pads on left.",
   "part": 2
  },
  {
   "id": 132,
   "question": "What is `[1,2,3].insert(0,0)`?",
   "options": {
    "A": "[0,1,2,3]",
    "B": "None",
    "C": "0",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "insert() returns None.",
   "part": 2
  },
  {
   "id": 133,
   "question": "What does `'hello'.partition('l')` return?",
   "options": {
    "A": "('he','l','lo')",
    "B": "['he','l','lo']",
    "C": "('he','lo')",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "partition() splits at first match.",
   "part": 2
  },
  {
   "id": 134,
   "question": "What is `'hello'.center(9)`?",
   "options": {
    "A": "'  hello  '",
    "B": "' hello '",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "center(9) pads to length 9.",
   "part": 2
  },
  {
   "id": 135,
   "question": "What does `[1,2,3].remove(2)` return?",
   "options": {
    "A": "2",
    "B": "None",
    "C": "[1,3]",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "remove() returns None.",
   "part": 2
  },
  {
   "id": 136,
   "question": "What is `'hello'.swapcase()`?",
   "options": {
    "A": "'HELLO'",
    "B": "'hello'",
    "C": "'hELLO'",
    "D": "Error"
   },
   "correct": "C",
   "explanation": "swapcase() swaps case.",
   "part": 2
  },
  {
   "id": 137,
   "question": "What does `'hello'.title()` return?",
   "options": {
    "A": "'Hello'",
    "B": "'HELLO'",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "title() capitalizes words.",
   "part": 2
  },
  {
   "id": 138,
   "question": "What is `[1,2,3].reverse()`?",
   "options": {
    "A": "[3,2,1]",
    "B": "None",
    "C": "reversed obj",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "reverse() returns None.",
   "part": 2
  },
  {
   "id": 139,
   "question": "What does `'hello'.endswith('lo')` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "2",
    "D": "5"
   },
   "correct": "A",
   "explanation": "endswith() checks suffix.",
   "part": 2
  },
  {
   "id": 140,
   "question": "What is `'hello'.index('l')`?",
   "options": {
    "A": "2",
    "B": "3",
    "C": "-1",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "index() returns first match.",
   "part": 2
  },
  {
   "id": 141,
   "question": "What does `[1,2,3].sort()` return?",
   "options": {
    "A": "[1,2,3]",
    "B": "None",
    "C": "sorted list",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "sort() returns None.",
   "part": 2
  },
  {
   "id": 142,
   "question": "What is `'hello'.zfill(8)`?",
   "options": {
    "A": "'000hello'",
    "B": "'hello000'",
    "C": "'   hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "zfill() pads with zeros.",
   "part": 2
  },
  {
   "id": 143,
   "question": "What does `'hello'.split()` return?",
   "options": {
    "A": "['hello']",
    "B": "['h','e','l','l','o']",
    "C": "[]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "split() no arg splits on whitespace.",
   "part": 2
  },
  {
   "id": 144,
   "question": "What is `[1,2,3].copy()`?",
   "options": {
    "A": "Shallow copy",
    "B": "Deep copy",
    "C": "Reference",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "copy() creates shallow copy.",
   "part": 2
  },
  {
   "id": 145,
   "question": "What does `(1,2)==[1,2]` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "Error",
    "D": "None"
   },
   "correct": "B",
   "explanation": "Different types.",
   "part": 2
  },
  {
   "id": 146,
   "question": "What is `'hello'.isalpha()`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "5",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "isalpha() True for letters only.",
   "part": 2
  },
  {
   "id": 147,
   "question": "What does `'123'.isdigit()` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "3",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "isdigit() True for digits.",
   "part": 2
  },
  {
   "id": 148,
   "question": "What is `'hello'.isidentifier()`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Valid Python identifier.",
   "part": 2
  },
  {
   "id": 149,
   "question": "What does `'hello'.isprintable()` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "5",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "isprintable() True for printable.",
   "part": 2
  },
  {
   "id": 150,
   "question": "What is `'hello'.isspace()`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "0",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "isspace() False for 'hello'.",
   "part": 2
  },
  {
   "id": 151,
   "question": "What does `'Hello'.istitle()` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "'Hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "istitle() for title case.",
   "part": 2
  },
  {
   "id": 152,
   "question": "What is `'hello'.ljust(8)`?",
   "options": {
    "A": "'hello   '",
    "B": "'   hello'",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "ljust() pads on right.",
   "part": 2
  },
  {
   "id": 153,
   "question": "What does `'hello'.rsplit('l',1)` return?",
   "options": {
    "A": "['he','o']",
    "B": "['he','lo']",
    "C": "['hel','o']",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "rsplit maxsplit=1 from right.",
   "part": 2
  },
  {
   "id": 154,
   "question": "What is `'hello'.rpartition('l')`?",
   "options": {
    "A": "('hel','l','o')",
    "B": "('he','l','lo')",
    "C": "('he','l','o')",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "rpartition at last match.",
   "part": 2
  },
  {
   "id": 155,
   "question": "What does `'hello'.rstrip()` return?",
   "options": {
    "A": "'hello'",
    "B": "' hello'",
    "C": "'hello '",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "rstrip() removes trailing.",
   "part": 2
  },
  {
   "id": 156,
   "question": "What is `'hello'.splitlines()`?",
   "options": {
    "A": "['hello']",
    "B": "['h','e','l','l','o']",
    "C": "[]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "No newlines: ['hello'].",
   "part": 2
  },
  {
   "id": 157,
   "question": "What does `'hello'.casefold()` return?",
   "options": {
    "A": "'hello'",
    "B": "'HELLO'",
    "C": "Aggressive lowercase",
    "D": "Error"
   },
   "correct": "C",
   "explanation": "casefold() more aggressive than lower().",
   "part": 2
  },
  {
   "id": 158,
   "question": "What is `[1,2,3]*2`?",
   "options": {
    "A": "[1,2,3,1,2,3]",
    "B": "[2,4,6]",
    "C": "Error",
    "D": "[1,2,3]"
   },
   "correct": "A",
   "explanation": "List * n repeats.",
   "part": 2
  },
  {
   "id": 159,
   "question": "What does `'hello'.maketrans('el','ip')` return?",
   "options": {
    "A": "Translation dict",
    "B": "'hippo'",
    "C": "Error",
    "D": "None"
   },
   "correct": "A",
   "explanation": "maketrans() creates translation table.",
   "part": 2
  },
  {
   "id": 160,
   "question": "What is `[].append(1) or []`?",
   "options": {
    "A": "[1]",
    "B": "[]",
    "C": "None",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "append returns None (falsy).",
   "part": 2
  },
  {
   "id": 161,
   "question": "What does `(1,2) is (1,2)` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "Error",
    "D": "None"
   },
   "correct": "B",
   "explanation": "Different objects.",
   "part": 2
  },
  {
   "id": 162,
   "question": "What is `'hello'[0:100]`?",
   "options": {
    "A": "'hello'",
    "B": "Error",
    "C": "''",
    "D": "IndexError"
   },
   "correct": "A",
   "explanation": "Slicing beyond length is OK.",
   "part": 2
  },
  {
   "id": 163,
   "question": "What does `[1,2,3].clear()` return?",
   "options": {
    "A": "[]",
    "B": "None",
    "C": "[1,2,3]",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "clear() returns None.",
   "part": 2
  },
  {
   "id": 164,
   "question": "What is `'hello'.format()`?",
   "options": {
    "A": "'hello'",
    "B": "Error",
    "C": "''",
    "D": "None"
   },
   "correct": "A",
   "explanation": "No placeholders: unchanged.",
   "part": 2
  },
  {
   "id": 165,
   "question": "What does `'{0} {1}'.format('a','b')` return?",
   "options": {
    "A": "'a b'",
    "B": "'b a'",
    "C": "Error",
    "D": "'0 1'"
   },
   "correct": "A",
   "explanation": "Positional format.",
   "part": 2
  },
  {
   "id": 166,
   "question": "What is `'{x}'.format_map({'x':1})`?",
   "options": {
    "A": "'1'",
    "B": "'x'",
    "C": "Error",
    "D": "1"
   },
   "correct": "A",
   "explanation": "format_map uses dict.",
   "part": 2
  },
  {
   "id": 167,
   "question": "What does `'hello'.__contains__('he')` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "2",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__contains__ for 'in'.",
   "part": 2
  },
  {
   "id": 168,
   "question": "What is `[1,2,3][-2]`?",
   "options": {
    "A": "1",
    "B": "2",
    "C": "3",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "Index -2 is second from end.",
   "part": 2
  },
  {
   "id": 169,
   "question": "What does `'hello'.__len__()` return?",
   "options": {
    "A": "5",
    "B": "4",
    "C": "len",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__len__ returns length.",
   "part": 2
  },
  {
   "id": 170,
   "question": "What is namedtuple?",
   "options": {
    "A": "Tuple only",
    "B": "List only",
    "C": "Attr and index access",
    "D": "Error"
   },
   "correct": "C",
   "explanation": "Named tuples support both.",
   "part": 2
  },
  {
   "id": 171,
   "question": "What does `[1,2,3][1:1]=[9]` do?",
   "options": {
    "A": "Inserts 9 at 1",
    "B": "Replaces 1",
    "C": "Error",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Empty slice inserts.",
   "part": 2
  },
  {
   "id": 172,
   "question": "What is `'hello'.encode('utf-8')`?",
   "options": {
    "A": "'hello'",
    "B": "b'hello'",
    "C": "bytes object",
    "D": "Error"
   },
   "correct": "C",
   "explanation": "encode returns bytes.",
   "part": 2
  },
  {
   "id": 173,
   "question": "What does `b'hello'.decode()` return?",
   "options": {
    "A": "'hello'",
    "B": "b'hello'",
    "C": "bytes",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "decode() to str.",
   "part": 2
  },
  {
   "id": 174,
   "question": "What is `[x for x in [1,2,3] if x>1]`?",
   "options": {
    "A": "[2,3]",
    "B": "[1,2,3]",
    "C": "[1]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Filtering comprehension.",
   "part": 2
  },
  {
   "id": 175,
   "question": "What does `[[1],[2]][0].append(3)` do?",
   "options": {
    "A": "[[1,3],[2]]",
    "B": "[[1],[2,3]]",
    "C": "Error",
    "D": "[[3],[2]]"
   },
   "correct": "A",
   "explanation": "Modifies first sublist.",
   "part": 2
  },
  {
   "id": 176,
   "question": "What is `'hello'.join(['a','b'])`?",
   "options": {
    "A": "'ahellob'",
    "B": "'a'",
    "C": "Error",
    "D": "'ab'"
   },
   "correct": "A",
   "explanation": "join uses separator.",
   "part": 2
  },
  {
   "id": 177,
   "question": "What does `(1,)*3` produce?",
   "options": {
    "A": "(1,1,1)",
    "B": "(1,3)",
    "C": "Error",
    "D": "(1,)"
   },
   "correct": "A",
   "explanation": "Tuple * repeats.",
   "part": 2
  },
  {
   "id": 178,
   "question": "What is `'hello'.replace('l','',1)`?",
   "options": {
    "A": "'helo'",
    "B": "'heo'",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Third arg limits replacements.",
   "part": 2
  },
  {
   "id": 179,
   "question": "What does `[1,2,3][-1:0:-1]` return?",
   "options": {
    "A": "[3,2]",
    "B": "[3,2,1]",
    "C": "[]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Reverse slice from end.",
   "part": 2
  },
  {
   "id": 180,
   "question": "What is `'hello'.find('x')`?",
   "options": {
    "A": "-1",
    "B": "0",
    "C": "Error",
    "D": "None"
   },
   "correct": "A",
   "explanation": "find returns -1 if not found.",
   "part": 2
  },
  {
   "id": 181,
   "question": "What does `'hello'.rfind('l')` return?",
   "options": {
    "A": "2",
    "B": "3",
    "C": "-1",
    "D": "1"
   },
   "correct": "B",
   "explanation": "rfind last occurrence.",
   "part": 2
  },
  {
   "id": 182,
   "question": "What is `[1,2,3].pop(0)`?",
   "options": {
    "A": "1",
    "B": "3",
    "C": "[2,3]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "pop(0) removes first.",
   "part": 2
  },
  {
   "id": 183,
   "question": "What does `'hello'.rindex('l')` return?",
   "options": {
    "A": "2",
    "B": "3",
    "C": "-1",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "rindex last occurrence.",
   "part": 2
  },
  {
   "id": 184,
   "question": "What is `sorted([3,1,2], reverse=True)`?",
   "options": {
    "A": "[3,2,1]",
    "B": "[1,2,3]",
    "C": "[3,1,2]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "reverse=True descending.",
   "part": 2
  },
  {
   "id": 185,
   "question": "What does `[1,2,3].count(2)` return?",
   "options": {
    "A": "1",
    "B": "2",
    "C": "0",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "count() occurrences.",
   "part": 2
  },
  {
   "id": 186,
   "question": "What is `'hello'.split('l')`?",
   "options": {
    "A": "['he','','o']",
    "B": "['he','o']",
    "C": "['hel','o']",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Split on 'l' gives empty between.",
   "part": 2
  },
  {
   "id": 187,
   "question": "What does `tuple([1,2,3])` return?",
   "options": {
    "A": "(1,2,3)",
    "B": "[1,2,3]",
    "C": "1,2,3",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "tuple() converts.",
   "part": 2
  },
  {
   "id": 188,
   "question": "What is `'hello'.isupper()`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "isupper() False for lowercase.",
   "part": 2
  },
  {
   "id": 189,
   "question": "What does `[1,2,3][1:2]` return?",
   "options": {
    "A": "[2]",
    "B": "[1,2]",
    "C": "2",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Slice [1:2] gets index 1.",
   "part": 2
  },
  {
   "id": 190,
   "question": "What is `'hello'.isdecimal()`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "5",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "isdecimal() False for letters.",
   "part": 2
  },
  {
   "id": 191,
   "question": "What does `[1,2,3]==[1,2,3]` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "Error",
    "D": "None"
   },
   "correct": "A",
   "explanation": "Equal lists.",
   "part": 2
  },
  {
   "id": 192,
   "question": "What is `'hello'.isnumeric()`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "5",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "isnumeric() False.",
   "part": 2
  },
  {
   "id": 193,
   "question": "What does `[1,2,3].__len__()` return?",
   "options": {
    "A": "3",
    "B": "2",
    "C": "len",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__len__ for len().",
   "part": 2
  },
  {
   "id": 194,
   "question": "What is `'hello'.__getitem__(0)`?",
   "options": {
    "A": "'h'",
    "B": "0",
    "C": "'hello'",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__getitem__ for indexing.",
   "part": 2
  },
  {
   "id": 195,
   "question": "What does `[1,2,3].__iter__()` return?",
   "options": {
    "A": "list_iterator",
    "B": "[1,2,3]",
    "C": "1",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__iter__ for iteration.",
   "part": 2
  },
  {
   "id": 196,
   "question": "What is `'hello'.__eq__('hello')`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "None",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__eq__ for ==.",
   "part": 2
  },
  {
   "id": 197,
   "question": "What does `[1,2,3].__contains__(2)` return?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "2",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__contains__ for 'in'.",
   "part": 2
  },
  {
   "id": 198,
   "question": "What is `'hello'.__repr__()`?",
   "options": {
    "A": "\"'hello'\"",
    "B": "'hello'",
    "C": "repr",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__repr__ for repr().",
   "part": 2
  },
  {
   "id": 199,
   "question": "What does `[1,2,3].__reversed__()` return?",
   "options": {
    "A": "list_reverseiterator",
    "B": "[3,2,1]",
    "C": "reversed",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__reversed__ for reversed().",
   "part": 2
  },
  {
   "id": 200,
   "question": "What is `'hello'.__str__()`?",
   "options": {
    "A": "'hello'",
    "B": "\"'hello'\"",
    "C": "str",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__str__ for str().",
   "part": 2
  },
  {
   "id": 201,
   "question": "What does `__init__` do?",
   "options": {
    "A": "Constructor",
    "B": "Destructor",
    "C": "Static method",
    "D": "Class method"
   },
   "correct": "A",
   "explanation": "__init__ initializes instance.",
   "part": 3
  },
  {
   "id": 202,
   "question": "What is `self` in a method?",
   "options": {
    "A": "Keyword",
    "B": "Reference to instance",
    "C": "Class name",
    "D": "Module"
   },
   "correct": "B",
   "explanation": "self refers to the instance.",
   "part": 3
  },
  {
   "id": 203,
   "question": "What does `@classmethod` do?",
   "options": {
    "A": "Makes static",
    "B": "Receives class as first arg",
    "C": "Private method",
    "D": "Abstract"
   },
   "correct": "B",
   "explanation": "classmethod gets cls as first arg.",
   "part": 3
  },
  {
   "id": 204,
   "question": "What is `@staticmethod`?",
   "options": {
    "A": "No self or cls",
    "B": "Class only",
    "C": "Instance only",
    "D": "Abstract"
   },
   "correct": "A",
   "explanation": "staticmethod has no implicit args.",
   "part": 3
  },
  {
   "id": 205,
   "question": "What does `@property` do?",
   "options": {
    "A": "Makes attribute read-only",
    "B": "Defines getter/setter",
    "C": "Class attribute",
    "D": "Private"
   },
   "correct": "B",
   "explanation": "property creates getter/setter.",
   "part": 3
  },
  {
   "id": 206,
   "question": "What is `__str__` for?",
   "options": {
    "A": "repr",
    "B": "Human-readable string",
    "C": "str type",
    "D": "Comparison"
   },
   "correct": "B",
   "explanation": "__str__ for str() and print().",
   "part": 3
  },
  {
   "id": 207,
   "question": "What does `__repr__` return?",
   "options": {
    "A": "Human string",
    "B": "Unambiguous repr",
    "C": "str",
    "D": "None"
   },
   "correct": "B",
   "explanation": "__repr__ should be unambiguous.",
   "part": 3
  },
  {
   "id": 208,
   "question": "What is `__len__`?",
   "options": {
    "A": "Length method",
    "B": "len() calls it",
    "C": "Both A and B",
    "D": "Iterator"
   },
   "correct": "C",
   "explanation": "__len__ implements len().",
   "part": 3
  },
  {
   "id": 209,
   "question": "What does `__eq__` do?",
   "options": {
    "A": "Assignment",
    "B": "Implements ==",
    "C": "Equality check",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "__eq__ implements ==.",
   "part": 3
  },
  {
   "id": 210,
   "question": "What is `__add__`?",
   "options": {
    "A": "Addition only",
    "B": "Implements +",
    "C": "Increment",
    "D": "Append"
   },
   "correct": "B",
   "explanation": "__add__ implements + operator.",
   "part": 3
  },
  {
   "id": 211,
   "question": "What is inheritance?",
   "options": {
    "A": "Subclass gets parent attributes",
    "B": "Copy class",
    "C": "Import",
    "D": "Override only"
   },
   "correct": "A",
   "explanation": "Inheritance allows subclass to inherit.",
   "part": 3
  },
  {
   "id": 212,
   "question": "What does super() do?",
   "options": {
    "A": "Call parent method",
    "B": "Return parent proxy",
    "C": "Both",
    "D": "Create parent"
   },
   "correct": "C",
   "explanation": "super() returns proxy to call parent.",
   "part": 3
  },
  {
   "id": 213,
   "question": "What is MRO?",
   "options": {
    "A": "Method resolution order",
    "B": "Multiple return",
    "C": "Module order",
    "D": "Method order"
   },
   "correct": "A",
   "explanation": "MRO determines lookup order.",
   "part": 3
  },
  {
   "id": 214,
   "question": "What is multiple inheritance?",
   "options": {
    "A": "One parent",
    "B": "Multiple base classes",
    "C": "Many methods",
    "D": "Many instances"
   },
   "correct": "B",
   "explanation": "Class inherits from multiple bases.",
   "part": 3
  },
  {
   "id": 215,
   "question": "What is ABC?",
   "options": {
    "A": "Abstract Base Class",
    "B": "Alphabet",
    "C": "Base only",
    "D": "Abstract method"
   },
   "correct": "A",
   "explanation": "ABC defines abstract base classes.",
   "part": 3
  },
  {
   "id": 216,
   "question": "What is duck typing?",
   "options": {
    "A": "Type by behavior",
    "B": "Static typing",
    "C": "Type checking",
    "D": "Inheritance"
   },
   "correct": "A",
   "explanation": "Use by behavior not type.",
   "part": 3
  },
  {
   "id": 217,
   "question": "What are dataclasses?",
   "options": {
    "A": "Auto __init__",
    "B": "Data containers",
    "C": "Both",
    "D": "Database"
   },
   "correct": "C",
   "explanation": "dataclasses auto-generate __init__.",
   "part": 3
  },
  {
   "id": 218,
   "question": "What is __slots__?",
   "options": {
    "A": "Limit attributes",
    "B": "Save memory",
    "C": "Both",
    "D": "Private"
   },
   "correct": "C",
   "explanation": "__slots__ restricts attributes.",
   "part": 3
  },
  {
   "id": 219,
   "question": "What is encapsulation?",
   "options": {
    "A": "Hide implementation",
    "B": "Bundling",
    "C": "Both",
    "D": "Inheritance"
   },
   "correct": "C",
   "explanation": "Encapsulation bundles and hides.",
   "part": 3
  },
  {
   "id": 220,
   "question": "What is name mangling?",
   "options": {
    "A": "__attr to _Class__attr",
    "B": "Rename",
    "C": "Private",
    "D": "Encode"
   },
   "correct": "A",
   "explanation": "Double underscore triggers mangling.",
   "part": 3
  },
  {
   "id": 221,
   "question": "What does `class C: pass` create?",
   "options": {
    "A": "Empty class",
    "B": "Error",
    "C": "Object",
    "D": "None"
   },
   "correct": "A",
   "explanation": "Minimal class definition.",
   "part": 3
  },
  {
   "id": 222,
   "question": "What is `__dict__` on an instance?",
   "options": {
    "A": "Attribute storage",
    "B": "Class dict",
    "C": "Module dict",
    "D": "Method dict"
   },
   "correct": "A",
   "explanation": "__dict__ holds instance attributes.",
   "part": 3
  },
  {
   "id": 223,
   "question": "What does `__class__` refer to?",
   "options": {
    "A": "Instance",
    "B": "The class of the object",
    "C": "Parent",
    "D": "Module"
   },
   "correct": "B",
   "explanation": "__class__ is the object's class.",
   "part": 3
  },
  {
   "id": 224,
   "question": "What is `__bases__`?",
   "options": {
    "A": "Base classes tuple",
    "B": "Instance bases",
    "C": "Method",
    "D": "Attribute"
   },
   "correct": "A",
   "explanation": "__bases__ contains base classes.",
   "part": 3
  },
  {
   "id": 225,
   "question": "What does `__mro__` contain?",
   "options": {
    "A": "Method resolution order",
    "B": "Methods only",
    "C": "Attributes",
    "D": "Parents"
   },
   "correct": "A",
   "explanation": "__mro__ is the method resolution order.",
   "part": 3
  },
  {
   "id": 226,
   "question": "What is `__new__`?",
   "options": {
    "A": "Object creator",
    "B": "Initializer",
    "C": "Destructor",
    "D": "Static"
   },
   "correct": "A",
   "explanation": "__new__ creates the object before __init__.",
   "part": 3
  },
  {
   "id": 227,
   "question": "What does `__del__` do?",
   "options": {
    "A": "Destructor",
    "B": "Delete attr",
    "C": "Del method",
    "D": "Cleanup"
   },
   "correct": "A",
   "explanation": "__del__ is the destructor.",
   "part": 3
  },
  {
   "id": 228,
   "question": "What is `__getattribute__`?",
   "options": {
    "A": "Attribute access hook",
    "B": "Get attr",
    "C": "Property",
    "D": "Descriptor"
   },
   "correct": "A",
   "explanation": "__getattribute__ intercepts all attr access.",
   "part": 3
  },
  {
   "id": 229,
   "question": "What does `__getattr__` handle?",
   "options": {
    "A": "Missing attributes",
    "B": "All attributes",
    "C": "Private only",
    "D": "Class attrs"
   },
   "correct": "A",
   "explanation": "__getattr__ called when attr not found.",
   "part": 3
  },
  {
   "id": 230,
   "question": "What is `__setattr__`?",
   "options": {
    "A": "Attribute assignment hook",
    "B": "Set only",
    "C": "Property setter",
    "D": "Descriptor"
   },
   "correct": "A",
   "explanation": "__setattr__ intercepts assignment.",
   "part": 3
  },
  {
   "id": 231,
   "question": "What does `__call__` enable?",
   "options": {
    "A": "Instance as callable",
    "B": "Class call",
    "C": "Method call",
    "D": "Function call"
   },
   "correct": "A",
   "explanation": "__call__ makes instances callable.",
   "part": 3
  },
  {
   "id": 232,
   "question": "What is `__iter__` for?",
   "options": {
    "A": "Making iterable",
    "B": "Iterator",
    "C": "Both",
    "D": "Loop"
   },
   "correct": "C",
   "explanation": "__iter__ returns iterator.",
   "part": 3
  },
  {
   "id": 233,
   "question": "What does `__next__` do?",
   "options": {
    "A": "Next item",
    "B": "Iterator advance",
    "C": "Both",
    "D": "Stop"
   },
   "correct": "C",
   "explanation": "__next__ advances iterator.",
   "part": 3
  },
  {
   "id": 234,
   "question": "What is `__enter__`/`__exit__`?",
   "options": {
    "A": "Context manager",
    "B": "With block",
    "C": "Both",
    "D": "Try block"
   },
   "correct": "C",
   "explanation": "Context manager protocol.",
   "part": 3
  },
  {
   "id": 235,
   "question": "What does `@abstractmethod` do?",
   "options": {
    "A": "Force override",
    "B": "Abstract method",
    "C": "Both",
    "D": "Prevent instantiation"
   },
   "correct": "C",
   "explanation": "Abstract method must be overridden.",
   "part": 3
  },
  {
   "id": 236,
   "question": "What is __init__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 237,
   "question": "What is self in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 238,
   "question": "What is @classmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 239,
   "question": "What is @staticmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 240,
   "question": "What is @property in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 241,
   "question": "What is __str__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 242,
   "question": "What is __repr__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 243,
   "question": "What is inheritance in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 244,
   "question": "What is super() in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 245,
   "question": "What is MRO in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 246,
   "question": "What is ABC in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 247,
   "question": "What is duck typing in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 248,
   "question": "What is dataclasses in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 249,
   "question": "What is __slots__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 250,
   "question": "What is encapsulation in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 251,
   "question": "What is __init__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 252,
   "question": "What is self in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 253,
   "question": "What is @classmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 254,
   "question": "What is @staticmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 255,
   "question": "What is @property in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 256,
   "question": "What is __str__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 257,
   "question": "What is __repr__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 258,
   "question": "What is inheritance in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 259,
   "question": "What is super() in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 260,
   "question": "What is MRO in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 261,
   "question": "What is ABC in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 262,
   "question": "What is duck typing in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 263,
   "question": "What is dataclasses in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 264,
   "question": "What is __slots__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 265,
   "question": "What is encapsulation in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 266,
   "question": "What is __init__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 267,
   "question": "What is self in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 268,
   "question": "What is @classmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 269,
   "question": "What is @staticmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 270,
   "question": "What is @property in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 271,
   "question": "What is __str__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 272,
   "question": "What is __repr__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 273,
   "question": "What is inheritance in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 274,
   "question": "What is super() in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 275,
   "question": "What is MRO in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 276,
   "question": "What is ABC in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 277,
   "question": "What is duck typing in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 278,
   "question": "What is dataclasses in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 279,
   "question": "What is __slots__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 280,
   "question": "What is encapsulation in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 281,
   "question": "What is __init__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 282,
   "question": "What is self in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 283,
   "question": "What is @classmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 284,
   "question": "What is @staticmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 285,
   "question": "What is @property in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 286,
   "question": "What is __str__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 287,
   "question": "What is __repr__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 288,
   "question": "What is inheritance in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 289,
   "question": "What is super() in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 290,
   "question": "What is MRO in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 291,
   "question": "What is ABC in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 292,
   "question": "What is duck typing in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 293,
   "question": "What is dataclasses in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 294,
   "question": "What is __slots__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 295,
   "question": "What is encapsulation in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 296,
   "question": "What is __init__ in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 297,
   "question": "What is self in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "B",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 298,
   "question": "What is @classmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "C",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 299,
   "question": "What is @staticmethod in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "D",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 300,
   "question": "What is @property in Python OOP?",
   "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
   },
   "correct": "A",
   "explanation": "OOP concept.",
   "part": 3
  },
  {
   "id": 301,
   "question": "What does `lambda x: x*2` return?",
   "options": {
    "A": "Function",
    "B": "2",
    "C": "x*2",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "lambda creates anonymous function.",
   "part": 4
  },
  {
   "id": 302,
   "question": "What is `map(str, [1,2,3])`?",
   "options": {
    "A": "['1','2','3']",
    "B": "map object",
    "C": "str",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "map returns iterator.",
   "part": 4
  },
  {
   "id": 303,
   "question": "What does `filter(None, [0,1,2])` return?",
   "options": {
    "A": "[1,2]",
    "B": "filter object",
    "C": "[0,1,2]",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "filter returns iterator.",
   "part": 4
  },
  {
   "id": 304,
   "question": "What is `reduce` from functools?",
   "options": {
    "A": "Reduces to single value",
    "B": "Filter",
    "C": "Map",
    "D": "Sort"
   },
   "correct": "A",
   "explanation": "reduce folds iterable.",
   "part": 4
  },
  {
   "id": 305,
   "question": "What does `zip([1,2],[3,4])` return?",
   "options": {
    "A": "[(1,3),(2,4)]",
    "B": "zip object",
    "C": "[1,2,3,4]",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "zip returns iterator.",
   "part": 4
  },
  {
   "id": 306,
   "question": "What is `enumerate(['a','b'])`?",
   "options": {
    "A": "[(0,'a'),(1,'b')]",
    "B": "enumerate object",
    "C": "['a','b']",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "enumerate returns iterator.",
   "part": 4
  },
  {
   "id": 307,
   "question": "What does `any([False,True])` return?",
   "options": {
    "A": "False",
    "B": "True",
    "C": "1",
    "D": "None"
   },
   "correct": "B",
   "explanation": "any() True if any truthy.",
   "part": 4
  },
  {
   "id": 308,
   "question": "What is `all([True,False])`?",
   "options": {
    "A": "True",
    "B": "False",
    "C": "0",
    "D": "None"
   },
   "correct": "B",
   "explanation": "all() False if any falsy.",
   "part": 4
  },
  {
   "id": 309,
   "question": "What does `sorted([3,1,2])` return?",
   "options": {
    "A": "[1,2,3]",
    "B": "None",
    "C": "[3,1,2]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "sorted returns new list.",
   "part": 4
  },
  {
   "id": 310,
   "question": "What is `reversed([1,2,3])`?",
   "options": {
    "A": "[3,2,1]",
    "B": "reverse iterator",
    "C": "None",
    "D": "Error"
   },
   "correct": "B",
   "explanation": "reversed returns iterator.",
   "part": 4
  },
  {
   "id": 311,
   "question": "What does `from functools import reduce` provide?",
   "options": {
    "A": "reduce function",
    "B": "Reduce module",
    "C": "Built-in",
    "D": "Import"
   },
   "correct": "A",
   "explanation": "functools.reduce folds iterable.",
   "part": 4
  },
  {
   "id": 312,
   "question": "What is `(x for x in range(3))`?",
   "options": {
    "A": "Generator expr",
    "B": "List",
    "C": "Tuple",
    "D": "Range"
   },
   "correct": "A",
   "explanation": "Parentheses create generator expression.",
   "part": 4
  },
  {
   "id": 313,
   "question": "What does `yield` do?",
   "options": {
    "A": "Pause and return",
    "B": "Return",
    "C": "Stop",
    "D": "Break"
   },
   "correct": "A",
   "explanation": "yield pauses and returns value.",
   "part": 4
  },
  {
   "id": 314,
   "question": "What is `itertools.chain`?",
   "options": {
    "A": "Chain iterables",
    "B": "Link",
    "C": "Connect",
    "D": "Merge"
   },
   "correct": "A",
   "explanation": "chain chains iterables together.",
   "part": 4
  },
  {
   "id": 315,
   "question": "What does `functools.partial` do?",
   "options": {
    "A": "Fix some args",
    "B": "Partial apply",
    "C": "Both",
    "D": "Curry"
   },
   "correct": "C",
   "explanation": "partial fixes function arguments.",
   "part": 4
  },
  {
   "id": 316,
   "question": "What is a closure?",
   "options": {
    "A": "Function with captured vars",
    "B": "Nested function",
    "C": "Both",
    "D": "Lambda"
   },
   "correct": "C",
   "explanation": "Closure captures enclosing scope.",
   "part": 4
  },
  {
   "id": 317,
   "question": "What does `{x: x**2 for x in range(3)}` produce?",
   "options": {
    "A": "{0:0,1:1,2:4}",
    "B": "Dict comp",
    "C": "Both",
    "D": "Error"
   },
   "correct": "C",
   "explanation": "Dict comprehension.",
   "part": 4
  },
  {
   "id": 318,
   "question": "What is `{x for x in 'ab'}`?",
   "options": {
    "A": "{'a','b'}",
    "B": "Set comp",
    "C": "Both",
    "D": "Error"
   },
   "correct": "C",
   "explanation": "Set comprehension.",
   "part": 4
  },
  {
   "id": 319,
   "question": "Functional: lambda, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 320,
   "question": "unctional: lambda, m?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 321,
   "question": "nctional: lambda, ma?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 322,
   "question": "ctional: lambda, map?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 323,
   "question": "tional: lambda, map,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 324,
   "question": "ional: lambda, map, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 325,
   "question": "onal: lambda, map, f?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 326,
   "question": "nal: lambda, map, fi?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 327,
   "question": "al: lambda, map, fil?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 328,
   "question": "l: lambda, map, filt?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 329,
   "question": ": lambda, map, filte?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 330,
   "question": "lambda, map, filter?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 331,
   "question": "lambda, map, filter,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 332,
   "question": "ambda, map, filter, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 333,
   "question": "mbda, map, filter, r?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 334,
   "question": "bda, map, filter, re?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 335,
   "question": "da, map, filter, red?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 336,
   "question": "a, map, filter, redu?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 337,
   "question": ", map, filter, reduc?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 338,
   "question": "map, filter, reduce?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 339,
   "question": "map, filter, reduce,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 340,
   "question": "ap, filter, reduce, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 341,
   "question": "p, filter, reduce, z?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 342,
   "question": ", filter, reduce, zi?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 343,
   "question": "filter, reduce, zip?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 344,
   "question": "filter, reduce, zip,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 345,
   "question": "ilter, reduce, zip, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 346,
   "question": "lter, reduce, zip, e?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 347,
   "question": "ter, reduce, zip, en?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 348,
   "question": "er, reduce, zip, enu?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 349,
   "question": "r, reduce, zip, enum?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 350,
   "question": ", reduce, zip, enume?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 351,
   "question": "reduce, zip, enumer?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 352,
   "question": "reduce, zip, enumera?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 353,
   "question": "educe, zip, enumerat?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 354,
   "question": "duce, zip, enumerate?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 355,
   "question": "uce, zip, enumerate,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 356,
   "question": "ce, zip, enumerate, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 357,
   "question": "e, zip, enumerate, g?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 358,
   "question": ", zip, enumerate, ge?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 359,
   "question": "zip, enumerate, gen?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 360,
   "question": "zip, enumerate, gene?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 361,
   "question": "ip, enumerate, gener?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 362,
   "question": "p, enumerate, genera?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 363,
   "question": ", enumerate, generat?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 364,
   "question": "enumerate, generato?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 365,
   "question": "enumerate, generator?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 366,
   "question": "numerate, generators?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 367,
   "question": "umerate, generators?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 368,
   "question": "merate, generators?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 369,
   "question": "Functional: lambda, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 370,
   "question": "unctional: lambda, m?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 371,
   "question": "nctional: lambda, ma?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 372,
   "question": "ctional: lambda, map?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 373,
   "question": "tional: lambda, map,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 374,
   "question": "ional: lambda, map, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 375,
   "question": "onal: lambda, map, f?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 376,
   "question": "nal: lambda, map, fi?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 377,
   "question": "al: lambda, map, fil?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 378,
   "question": "l: lambda, map, filt?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 379,
   "question": ": lambda, map, filte?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 380,
   "question": "lambda, map, filter?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 381,
   "question": "lambda, map, filter,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 382,
   "question": "ambda, map, filter, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 383,
   "question": "mbda, map, filter, r?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 384,
   "question": "bda, map, filter, re?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 385,
   "question": "da, map, filter, red?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 386,
   "question": "a, map, filter, redu?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 387,
   "question": ", map, filter, reduc?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 388,
   "question": "map, filter, reduce?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 389,
   "question": "map, filter, reduce,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 390,
   "question": "ap, filter, reduce, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 391,
   "question": "p, filter, reduce, z?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 392,
   "question": ", filter, reduce, zi?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 393,
   "question": "filter, reduce, zip?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 394,
   "question": "filter, reduce, zip,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 395,
   "question": "ilter, reduce, zip, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 396,
   "question": "lter, reduce, zip, e?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 397,
   "question": "ter, reduce, zip, en?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 398,
   "question": "er, reduce, zip, enu?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 399,
   "question": "r, reduce, zip, enum?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 400,
   "question": ", reduce, zip, enume?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "FP concept.",
   "part": 4
  },
  {
   "id": 401,
   "question": "What does `open('f.txt')` return?",
   "options": {
    "A": "String",
    "B": "File object",
    "C": "Path",
    "D": "None"
   },
   "correct": "B",
   "explanation": "open returns file object.",
   "part": 5
  },
  {
   "id": 402,
   "question": "What is `'r'` mode?",
   "options": {
    "A": "Read",
    "B": "Write",
    "C": "Append",
    "D": "Binary"
   },
   "correct": "A",
   "explanation": "'r' is read mode.",
   "part": 5
  },
  {
   "id": 403,
   "question": "What does `with open(f) as f:` do?",
   "options": {
    "A": "Opens file",
    "B": "Context manager",
    "C": "Closes automatically",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "with ensures cleanup.",
   "part": 5
  },
  {
   "id": 404,
   "question": "What is `pathlib.Path`?",
   "options": {
    "A": "String path",
    "B": "Object-oriented path",
    "C": "File",
    "D": "Directory"
   },
   "correct": "B",
   "explanation": "pathlib provides OOP paths.",
   "part": 5
  },
  {
   "id": 405,
   "question": "What does `try/except` catch?",
   "options": {
    "A": "Syntax errors",
    "B": "Exceptions",
    "C": "Logic errors",
    "D": "All errors"
   },
   "correct": "B",
   "explanation": "except catches exceptions.",
   "part": 5
  },
  {
   "id": 406,
   "question": "What is `finally` for?",
   "options": {
    "A": "After try",
    "B": "Always runs",
    "C": "On success",
    "D": "On error"
   },
   "correct": "B",
   "explanation": "finally always executes.",
   "part": 5
  },
  {
   "id": 407,
   "question": "What does `raise ValueError()` do?",
   "options": {
    "A": "Catches",
    "B": "Raises exception",
    "C": "Returns",
    "D": "Prints"
   },
   "correct": "B",
   "explanation": "raise raises exception.",
   "part": 5
  },
  {
   "id": 408,
   "question": "What is `Exception`?",
   "options": {
    "A": "Base for built-in",
    "B": "All exceptions",
    "C": "Both A and B",
    "D": "Custom only"
   },
   "correct": "C",
   "explanation": "Exception is base class.",
   "part": 5
  },
  {
   "id": 409,
   "question": "What does `logging` provide?",
   "options": {
    "A": "print",
    "B": "Log levels",
    "C": "Both",
    "D": "Neither"
   },
   "correct": "B",
   "explanation": "logging has DEBUG, INFO, etc.",
   "part": 5
  },
  {
   "id": 410,
   "question": "What is `json.load()`?",
   "options": {
    "A": "Parse JSON",
    "B": "From file",
    "C": "To dict/list",
    "D": "All of above"
   },
   "correct": "D",
   "explanation": "json.load parses from file.",
   "part": 5
  },
  {
   "id": 411,
   "question": "What does `open('f.txt','w')` do?",
   "options": {
    "A": "Open for writing",
    "B": "Create/truncate",
    "C": "Both",
    "D": "Append"
   },
   "correct": "C",
   "explanation": "'w' creates or truncates for writing.",
   "part": 5
  },
  {
   "id": 412,
   "question": "What is `'a'` mode?",
   "options": {
    "A": "Append",
    "B": "Add",
    "C": "Attach",
    "D": "All"
   },
   "correct": "A",
   "explanation": "'a' appends to file.",
   "part": 5
  },
  {
   "id": 413,
   "question": "What does `f.read()` return?",
   "options": {
    "A": "Entire file as str",
    "B": "One line",
    "C": "Bytes",
    "D": "List"
   },
   "correct": "A",
   "explanation": "read() returns full content.",
   "part": 5
  },
  {
   "id": 414,
   "question": "What is `f.readline()`?",
   "options": {
    "A": "One line",
    "B": "Next line",
    "C": "Both",
    "D": "All lines"
   },
   "correct": "C",
   "explanation": "readline() gets one line.",
   "part": 5
  },
  {
   "id": 415,
   "question": "What does `try/except/else` do?",
   "options": {
    "A": "else if no exception",
    "B": "Else block",
    "C": "Both",
    "D": "Alternative"
   },
   "correct": "C",
   "explanation": "else runs when no exception.",
   "part": 5
  },
  {
   "id": 416,
   "question": "What is `BaseException`?",
   "options": {
    "A": "Root of hierarchy",
    "B": "All exceptions",
    "C": "Both",
    "D": "Custom"
   },
   "correct": "C",
   "explanation": "BaseException is root.",
   "part": 5
  },
  {
   "id": 417,
   "question": "What does `raise X from e` do?",
   "options": {
    "A": "Exception chaining",
    "B": "Cause chain",
    "C": "Both",
    "D": "Reraise"
   },
   "correct": "C",
   "explanation": "Chains exception cause.",
   "part": 5
  },
  {
   "id": 418,
   "question": "What is `logging.basicConfig`?",
   "options": {
    "A": "Configure logging",
    "B": "Set level",
    "C": "Both",
    "D": "Log file"
   },
   "correct": "C",
   "explanation": "Configures root logger.",
   "part": 5
  },
  {
   "id": 419,
   "question": "What does `json.dumps(obj)` return?",
   "options": {
    "A": "JSON string",
    "B": "str",
    "C": "Both",
    "D": "Dict"
   },
   "correct": "C",
   "explanation": "dumps serializes to string.",
   "part": 5
  },
  {
   "id": 420,
   "question": "What is `csv.reader`?",
   "options": {
    "A": "Read CSV rows",
    "B": "Parse CSV",
    "C": "Both",
    "D": "Table"
   },
   "correct": "C",
   "explanation": "csv.reader parses CSV.",
   "part": 5
  },
  {
   "id": 421,
   "question": "File I/O: open,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 422,
   "question": "ile I/O: open, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 423,
   "question": "le I/O: open, w?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 424,
   "question": "e I/O: open, wi?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 425,
   "question": "I/O: open, wit?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 426,
   "question": "I/O: open, with?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 427,
   "question": "/O: open, with,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 428,
   "question": "O: open, with, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 429,
   "question": ": open, with, p?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 430,
   "question": "open, with, pa?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 431,
   "question": "open, with, pat?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 432,
   "question": "pen, with, path?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 433,
   "question": "en, with, pathl?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 434,
   "question": "n, with, pathli?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 435,
   "question": ", with, pathlib?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 436,
   "question": "with, pathlib,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 437,
   "question": "with, pathlib, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 438,
   "question": "ith, pathlib, t?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 439,
   "question": "th, pathlib, tr?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 440,
   "question": "h, pathlib, try?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 441,
   "question": ", pathlib, try/?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 442,
   "question": "pathlib, try/e?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 443,
   "question": "pathlib, try/ex?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 444,
   "question": "athlib, try/exc?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 445,
   "question": "thlib, try/exce?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 446,
   "question": "hlib, try/excep?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 447,
   "question": "lib, try/except?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 448,
   "question": "ib, try/except,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 449,
   "question": "b, try/except, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 450,
   "question": ", try/except, j?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 451,
   "question": "try/except, js?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 452,
   "question": "try/except, jso?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 453,
   "question": "ry/except, json?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 454,
   "question": "y/except, json,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 455,
   "question": "/except, json, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 456,
   "question": "except, json, c?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 457,
   "question": "xcept, json, cs?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 458,
   "question": "cept, json, csv?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 459,
   "question": "ept, json, csv?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 460,
   "question": "pt, json, csv?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 461,
   "question": "File I/O: open,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 462,
   "question": "ile I/O: open, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 463,
   "question": "le I/O: open, w?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 464,
   "question": "e I/O: open, wi?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 465,
   "question": "I/O: open, wit?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 466,
   "question": "I/O: open, with?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 467,
   "question": "/O: open, with,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 468,
   "question": "O: open, with, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 469,
   "question": ": open, with, p?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 470,
   "question": "open, with, pa?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 471,
   "question": "open, with, pat?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 472,
   "question": "pen, with, path?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 473,
   "question": "en, with, pathl?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 474,
   "question": "n, with, pathli?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 475,
   "question": ", with, pathlib?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 476,
   "question": "with, pathlib,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 477,
   "question": "with, pathlib, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 478,
   "question": "ith, pathlib, t?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 479,
   "question": "th, pathlib, tr?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 480,
   "question": "h, pathlib, try?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 481,
   "question": ", pathlib, try/?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 482,
   "question": "pathlib, try/e?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 483,
   "question": "pathlib, try/ex?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 484,
   "question": "athlib, try/exc?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 485,
   "question": "thlib, try/exce?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 486,
   "question": "hlib, try/excep?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 487,
   "question": "lib, try/except?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 488,
   "question": "ib, try/except,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 489,
   "question": "b, try/except, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 490,
   "question": ", try/except, j?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 491,
   "question": "try/except, js?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 492,
   "question": "try/except, jso?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 493,
   "question": "ry/except, json?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 494,
   "question": "y/except, json,?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 495,
   "question": "/except, json, ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 496,
   "question": "except, json, c?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 497,
   "question": "xcept, json, cs?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 498,
   "question": "cept, json, csv?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 499,
   "question": "ept, json, csv?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 500,
   "question": "pt, json, csv?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "explanation": "File/exception concept.",
   "part": 5
  },
  {
   "id": 501,
   "question": "What does `__name__ == '__main__'` check?",
   "options": {
    "A": "Script run directly",
    "B": "Module imported",
    "C": "Both A and B",
    "D": "Neither"
   },
   "correct": "A",
   "explanation": "True when script is executed directly, not imported.",
   "part": 6
  },
  {
   "id": 502,
   "question": "What is `__init__.py` used for?",
   "options": {
    "A": "Package marker",
    "B": "Package initialization",
    "C": "Both A and B",
    "D": "Module only"
   },
   "correct": "C",
   "explanation": "Marks directory as package and can run init code.",
   "part": 6
  },
  {
   "id": 503,
   "question": "What does `from . import foo` mean?",
   "options": {
    "A": "Absolute import",
    "B": "Relative import from same package",
    "C": "Import from parent",
    "D": "Import from root"
   },
   "correct": "B",
   "explanation": "Dot means relative import within same package.",
   "part": 6
  },
  {
   "id": 504,
   "question": "Where does Python look for modules first?",
   "options": {
    "A": "sys.path",
    "B": "PYTHONPATH only",
    "C": "Current dir only",
    "D": "site-packages only"
   },
   "correct": "A",
   "explanation": "sys.path lists directories searched for imports.",
   "part": 6
  },
  {
   "id": 505,
   "question": "What does `os.path.join('a', 'b', 'c')` return on Windows?",
   "options": {
    "A": "'a\\\\b\\\\c'",
    "B": "'a/b/c'",
    "C": "'a-b-c'",
    "D": "Depends on OS"
   },
   "correct": "D",
   "explanation": "join uses OS-specific separator.",
   "part": 6
  },
  {
   "id": 506,
   "question": "What does `sys.argv[0]` contain?",
   "options": {
    "A": "First argument",
    "B": "Script name",
    "C": "Python path",
    "D": "Empty"
   },
   "correct": "B",
   "explanation": "argv[0] is the script filename.",
   "part": 6
  },
  {
   "id": 507,
   "question": "What is `datetime.datetime.now()`?",
   "options": {
    "A": "Current date only",
    "B": "Current time only",
    "C": "Current date and time",
    "D": "UTC time"
   },
   "correct": "C",
   "explanation": "now() returns current local datetime.",
   "part": 6
  },
  {
   "id": 508,
   "question": "What does `math.ceil(2.3)` return?",
   "options": {
    "A": "2",
    "B": "3",
    "C": "2.0",
    "D": "2.3"
   },
   "correct": "B",
   "explanation": "ceil rounds up to nearest integer.",
   "part": 6
  },
  {
   "id": 509,
   "question": "What does `random.randint(1, 10)` include?",
   "options": {
    "A": "1 only",
    "B": "10 only",
    "C": "Both 1 and 10",
    "D": "Neither"
   },
   "correct": "C",
   "explanation": "randint is inclusive on both ends.",
   "part": 6
  },
  {
   "id": 510,
   "question": "What is `collections.Counter('aab')`?",
   "options": {
    "A": "Counter({'a': 2, 'b': 1})",
    "B": "['a','a','b']",
    "C": "3",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Counter counts occurrences of each element.",
   "part": 6
  },
  {
   "id": 511,
   "question": "What does `defaultdict(int)` provide?",
   "options": {
    "A": "Default 0 for missing keys",
    "B": "Default 1",
    "C": "Raises KeyError",
    "D": "Returns None"
   },
   "correct": "A",
   "explanation": "defaultdict(int) uses int() = 0 for missing keys.",
   "part": 6
  },
  {
   "id": 512,
   "question": "What is `collections.deque`?",
   "options": {
    "A": "Double-ended queue",
    "B": "Stack only",
    "C": "List only",
    "D": "Set"
   },
   "correct": "A",
   "explanation": "deque supports O(1) append/pop from both ends.",
   "part": 6
  },
  {
   "id": 513,
   "question": "What does `pathlib.Path('a/b').parent` return?",
   "options": {
    "A": "Path('a')",
    "B": "Path('a/b')",
    "C": "Path('.')",
    "D": "'a'"
   },
   "correct": "A",
   "explanation": "parent is the directory containing the path.",
   "part": 6
  },
  {
   "id": 514,
   "question": "What does `shutil.copy(src, dst)` do?",
   "options": {
    "A": "Copy file",
    "B": "Copy directory",
    "C": "Move file",
    "D": "Delete file"
   },
   "correct": "A",
   "explanation": "shutil.copy copies a single file.",
   "part": 6
  },
  {
   "id": 515,
   "question": "What does `subprocess.run(['ls'])` return?",
   "options": {
    "A": "Output string",
    "B": "CompletedProcess",
    "C": "None",
    "D": "Exit code only"
   },
   "correct": "B",
   "explanation": "run() returns CompletedProcess instance.",
   "part": 6
  },
  {
   "id": 516,
   "question": "What is `venv` used for?",
   "options": {
    "A": "Virtual environment",
    "B": "Version control",
    "C": "Package manager",
    "D": "IDE"
   },
   "correct": "A",
   "explanation": "venv creates isolated Python environments.",
   "part": 6
  },
  {
   "id": 517,
   "question": "What does `pip install -e .` do?",
   "options": {
    "A": "Editable install",
    "B": "Upgrade package",
    "C": "Uninstall",
    "D": "List packages"
   },
   "correct": "A",
   "explanation": "Editable mode links to source for development.",
   "part": 6
  },
  {
   "id": 518,
   "question": "What is PyPI?",
   "options": {
    "A": "Python Package Index",
    "B": "Package installer",
    "C": "Virtual env",
    "D": "IDE"
   },
   "correct": "A",
   "explanation": "PyPI is the default package repository.",
   "part": 6
  },
  {
   "id": 519,
   "question": "What does `import x as y` do?",
   "options": {
    "A": "Import x with alias y",
    "B": "Import y as x",
    "C": "Import both",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Binds imported module to name y.",
   "part": 6
  },
  {
   "id": 520,
   "question": "What is `sys.modules`?",
   "options": {
    "A": "Dict of loaded modules",
    "B": "List of paths",
    "C": "Module names",
    "D": "Import cache"
   },
   "correct": "A",
   "explanation": "sys.modules maps module names to loaded modules.",
   "part": 6
  },
  {
   "id": 521,
   "question": "What does `os.environ.get('HOME')` return?",
   "options": {
    "A": "Current directory",
    "B": "Home directory path",
    "C": "Username",
    "D": "Always None"
   },
   "correct": "B",
   "explanation": "HOME env var contains user home path.",
   "part": 6
  },
  {
   "id": 522,
   "question": "What is `sys.exit(1)`?",
   "options": {
    "A": "Exit with code 1",
    "B": "Raise SystemExit",
    "C": "Both A and B",
    "D": "Pause program"
   },
   "correct": "C",
   "explanation": "Raises SystemExit, non-zero indicates error.",
   "part": 6
  },
  {
   "id": 523,
   "question": "What does `datetime.timedelta(days=1)` represent?",
   "options": {
    "A": "1 day duration",
    "B": "Current date",
    "C": "Tomorrow",
    "D": "Yesterday"
   },
   "correct": "A",
   "explanation": "timedelta represents a duration.",
   "part": 6
  },
  {
   "id": 524,
   "question": "What is `math.isnan(x)` for?",
   "options": {
    "A": "Check if x is NaN",
    "B": "Convert to int",
    "C": "Round",
    "D": "Absolute value"
   },
   "correct": "A",
   "explanation": "isnan returns True for NaN values.",
   "part": 6
  },
  {
   "id": 525,
   "question": "What does `random.choice([1,2,3])` return?",
   "options": {
    "A": "List",
    "B": "One element",
    "C": "Shuffled list",
    "D": "Index"
   },
   "correct": "B",
   "explanation": "choice returns one random element.",
   "part": 6
  },
  {
   "id": 526,
   "question": "What is `OrderedDict` (Python 3.7+)?",
   "options": {
    "A": "dict preserves order",
    "B": "OrderedDict redundant",
    "C": "Both A and B",
    "D": "Only for sorting"
   },
   "correct": "C",
   "explanation": "Regular dict is ordered since 3.7; OrderedDict still has extra methods.",
   "part": 6
  },
  {
   "id": 527,
   "question": "What does `Path('file.txt').exists()` return?",
   "options": {
    "A": "True if file exists",
    "B": "Always True",
    "C": "File content",
    "D": "Path object"
   },
   "correct": "A",
   "explanation": "exists() checks if path exists on filesystem.",
   "part": 6
  },
  {
   "id": 528,
   "question": "What does `shutil.rmtree(path)` do?",
   "options": {
    "A": "Remove directory tree",
    "B": "Remove single file",
    "C": "Rename",
    "D": "Copy"
   },
   "correct": "A",
   "explanation": "rmtree recursively deletes directory.",
   "part": 6
  },
  {
   "id": 529,
   "question": "What does `subprocess.run(..., capture_output=True)` do?",
   "options": {
    "A": "Capture stdout/stderr",
    "B": "Run in background",
    "C": "Pipe only",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "capture_output=True captures output.",
   "part": 6
  },
  {
   "id": 530,
   "question": "What is `pip freeze`?",
   "options": {
    "A": "List installed packages",
    "B": "Stop pip",
    "C": "Install frozen",
    "D": "Upgrade all"
   },
   "correct": "A",
   "explanation": "freeze outputs installed packages with versions.",
   "part": 6
  },
  {
   "id": 531,
   "question": "What does `from package import *` import?",
   "options": {
    "A": "All from __all__ or all public",
    "B": "Nothing",
    "C": "Only __init__",
    "D": "Private names"
   },
   "correct": "A",
   "explanation": "Imports names in __all__ or non-underscore names.",
   "part": 6
  },
  {
   "id": 532,
   "question": "What is `__file__` in a module?",
   "options": {
    "A": "Path to module file",
    "B": "Filename only",
    "C": "Import path",
    "D": "None"
   },
   "correct": "A",
   "explanation": "__file__ is the path of the current module.",
   "part": 6
  },
  {
   "id": 533,
   "question": "What does `os.getcwd()` return?",
   "options": {
    "A": "Current working directory",
    "B": "Script directory",
    "C": "Home directory",
    "D": "Temp directory"
   },
   "correct": "A",
   "explanation": "getcwd returns current working directory.",
   "part": 6
  },
  {
   "id": 534,
   "question": "What does `sys.stdin` represent?",
   "options": {
    "A": "Standard input stream",
    "B": "File handle",
    "C": "Both A and B",
    "D": "Keyboard only"
   },
   "correct": "C",
   "explanation": "stdin is the standard input file object.",
   "part": 6
  },
  {
   "id": 535,
   "question": "What is `datetime.strptime('2024-01-15', '%Y-%m-%d')`?",
   "options": {
    "A": "Parse string to datetime",
    "B": "Format datetime",
    "C": "Current date",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "strptime parses string to datetime.",
   "part": 6
  },
  {
   "id": 536,
   "question": "What does `math.inf` represent?",
   "options": {
    "A": "Positive infinity",
    "B": "Negative infinity",
    "C": "NaN",
    "D": "Max float"
   },
   "correct": "A",
   "explanation": "math.inf is positive infinity.",
   "part": 6
  },
  {
   "id": 537,
   "question": "What does `random.shuffle(lst)` return?",
   "options": {
    "A": "Shuffled list",
    "B": "None",
    "C": "Original list",
    "D": "New list"
   },
   "correct": "B",
   "explanation": "shuffle mutates in place, returns None.",
   "part": 6
  },
  {
   "id": 538,
   "question": "What is `Counter.most_common(2)`?",
   "options": {
    "A": "Top 2 most frequent",
    "B": "First 2 elements",
    "C": "Last 2",
    "D": "2 random"
   },
   "correct": "A",
   "explanation": "most_common(n) returns n most common.",
   "part": 6
  },
  {
   "id": 539,
   "question": "What does `defaultdict(list)` use for missing keys?",
   "options": {
    "A": "[]",
    "B": "None",
    "C": "{}",
    "D": "Raises KeyError"
   },
   "correct": "A",
   "explanation": "defaultdict(list) uses list() = [] for missing keys.",
   "part": 6
  },
  {
   "id": 540,
   "question": "What is `deque.popleft()`?",
   "options": {
    "A": "Remove from left",
    "B": "Remove from right",
    "C": "Peek left",
    "D": "Add left"
   },
   "correct": "A",
   "explanation": "popleft removes and returns leftmost element.",
   "part": 6
  },
  {
   "id": 541,
   "question": "What does `Path('a/b/c.txt').suffix` return?",
   "options": {
    "A": "'.txt'",
    "B": "'c.txt'",
    "C": "'txt'",
    "D": "'a/b'"
   },
   "correct": "A",
   "explanation": "suffix is the file extension including dot.",
   "part": 6
  },
  {
   "id": 542,
   "question": "What does `shutil.move(src, dst)` do?",
   "options": {
    "A": "Move file/dir",
    "B": "Copy only",
    "C": "Rename only",
    "D": "Delete"
   },
   "correct": "A",
   "explanation": "move can rename or relocate.",
   "part": 6
  },
  {
   "id": 543,
   "question": "What does `subprocess.Popen` return?",
   "options": {
    "A": "Process object",
    "B": "Output",
    "C": "Exit code",
    "D": "None"
   },
   "correct": "A",
   "explanation": "Popen returns Popen instance for async control.",
   "part": 6
  },
  {
   "id": 544,
   "question": "What is `python -m venv myenv`?",
   "options": {
    "A": "Create venv named myenv",
    "B": "Activate venv",
    "C": "Delete venv",
    "D": "List venvs"
   },
   "correct": "A",
   "explanation": "Creates virtual environment in myenv/.",
   "part": 6
  },
  {
   "id": 545,
   "question": "What does `pip install package==1.0.0` do?",
   "options": {
    "A": "Install exact version",
    "B": "Upgrade to latest",
    "C": "Uninstall",
    "D": "Check version"
   },
   "correct": "A",
   "explanation": "== pins to exact version.",
   "part": 6
  },
  {
   "id": 546,
   "question": "What is `importlib.import_module(name)`?",
   "options": {
    "A": "Dynamic import",
    "B": "Reload module",
    "C": "List modules",
    "D": "Import path"
   },
   "correct": "A",
   "explanation": "Dynamically imports module by string name.",
   "part": 6
  },
  {
   "id": 547,
   "question": "What does `os.path.abspath('x')` return?",
   "options": {
    "A": "Absolute path",
    "B": "Relative path",
    "C": "Resolved path",
    "D": "Canonical path"
   },
   "correct": "A",
   "explanation": "abspath converts to absolute path.",
   "part": 6
  },
  {
   "id": 548,
   "question": "What does `sys.getsizeof(x)` return?",
   "options": {
    "A": "Object size in bytes",
    "B": "Length",
    "C": "Memory address",
    "D": "Type size"
   },
   "correct": "A",
   "explanation": "getsizeof returns approximate size in bytes.",
   "part": 6
  },
  {
   "id": 549,
   "question": "What is `datetime.timezone.utc`?",
   "options": {
    "A": "UTC timezone",
    "B": "Local timezone",
    "C": "Offset only",
    "D": "DST info"
   },
   "correct": "A",
   "explanation": "Represents UTC timezone.",
   "part": 6
  },
  {
   "id": 550,
   "question": "What does `math.gcd(12, 8)` return?",
   "options": {
    "A": "4",
    "B": "2",
    "C": "96",
    "D": "20"
   },
   "correct": "A",
   "explanation": "gcd returns greatest common divisor.",
   "part": 6
  },
  {
   "id": 551,
   "question": "What does `random.sample([1,2,3], 2)` return?",
   "options": {
    "A": "2 unique elements",
    "B": "2 with replacement",
    "C": "List of 2 lists",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "sample returns k unique elements.",
   "part": 6
  },
  {
   "id": 552,
   "question": "What is `Counter + Counter`?",
   "options": {
    "A": "Add counts",
    "B": "Merge keys",
    "C": "Error",
    "D": "Union"
   },
   "correct": "A",
   "explanation": "Adding Counters sums counts per key.",
   "part": 6
  },
  {
   "id": 553,
   "question": "What does `defaultdict(lambda: 'default')` use?",
   "options": {
    "A": "'default' for missing",
    "B": "None",
    "C": "Raises",
    "D": "0"
   },
   "correct": "A",
   "explanation": "lambda provides custom default factory.",
   "part": 6
  },
  {
   "id": 554,
   "question": "What is `deque(maxlen=3)`?",
   "options": {
    "A": "Bounded deque",
    "B": "Min length 3",
    "C": "Fixed size 3",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "maxlen limits size; oldest dropped when full.",
   "part": 6
  },
  {
   "id": 555,
   "question": "What does `Path.iterdir()` return?",
   "options": {
    "A": "Iterator of paths",
    "B": "List of names",
    "C": "Single path",
    "D": "Generator"
   },
   "correct": "A",
   "explanation": "iterdir yields child paths.",
   "part": 6
  },
  {
   "id": 556,
   "question": "What does `shutil.copytree(src, dst)` do?",
   "options": {
    "A": "Copy directory tree",
    "B": "Copy one file",
    "C": "Move tree",
    "D": "Merge trees"
   },
   "correct": "A",
   "explanation": "copytree recursively copies directory.",
   "part": 6
  },
  {
   "id": 557,
   "question": "What does `subprocess.run(..., check=True)` do on non-zero exit?",
   "options": {
    "A": "Raise CalledProcessError",
    "B": "Return anyway",
    "C": "Retry",
    "D": "Ignore"
   },
   "correct": "A",
   "explanation": "check=True raises on non-zero exit.",
   "part": 6
  },
  {
   "id": 558,
   "question": "What is `pip list`?",
   "options": {
    "A": "List installed packages",
    "B": "List available",
    "C": "List requirements",
    "D": "List versions"
   },
   "correct": "A",
   "explanation": "list shows installed packages.",
   "part": 6
  },
  {
   "id": 559,
   "question": "What does `from .submodule import x` mean?",
   "options": {
    "A": "Relative import from submodule",
    "B": "Absolute import",
    "C": "Import parent",
    "D": "Import x from current"
   },
   "correct": "A",
   "explanation": "Imports x from submodule in same package.",
   "part": 6
  },
  {
   "id": 560,
   "question": "What is `__package__`?",
   "options": {
    "A": "Package name of module",
    "B": "Import path",
    "C": "Both",
    "D": "Package dir"
   },
   "correct": "A",
   "explanation": "__package__ is the package name.",
   "part": 6
  },
  {
   "id": 561,
   "question": "What does `os.listdir('.')` return?",
   "options": {
    "A": "List of names in dir",
    "B": "List of paths",
    "C": "Iterator",
    "D": "Single name"
   },
   "correct": "A",
   "explanation": "listdir returns names (not full paths).",
   "part": 6
  },
  {
   "id": 562,
   "question": "What does `sys.version` contain?",
   "options": {
    "A": "Python version string",
    "B": "Version number only",
    "C": "Build info",
    "D": "All of above"
   },
   "correct": "A",
   "explanation": "version is full version string.",
   "part": 6
  },
  {
   "id": 563,
   "question": "What is `datetime.datetime.utcnow()`?",
   "options": {
    "A": "Deprecated, use datetime.now(timezone.utc)",
    "B": "Current UTC",
    "C": "Both",
    "D": "Local time"
   },
   "correct": "C",
   "explanation": "utcnow is deprecated; use timezone-aware.",
   "part": 6
  },
  {
   "id": 564,
   "question": "What does `math.sqrt(-1)` return?",
   "options": {
    "A": "ValueError",
    "B": "NaN",
    "C": "0",
    "D": "1j"
   },
   "correct": "B",
   "explanation": "sqrt of negative returns float NaN.",
   "part": 6
  },
  {
   "id": 565,
   "question": "What does `random.seed(42)` do?",
   "options": {
    "A": "Reproducible randomness",
    "B": "Set max random",
    "C": "Initialize only once",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "seed makes random sequence reproducible.",
   "part": 6
  },
  {
   "id": 566,
   "question": "What is `Counter.elements()`?",
   "options": {
    "A": "Iterator over elements by count",
    "B": "List of keys",
    "C": "Sum of counts",
    "D": "Unique elements"
   },
   "correct": "A",
   "explanation": "elements() yields each element count times.",
   "part": 6
  },
  {
   "id": 567,
   "question": "What does `defaultdict(set)` use for missing keys?",
   "options": {
    "A": "set()",
    "B": "{}",
    "C": "None",
    "D": "[]"
   },
   "correct": "A",
   "explanation": "set() creates empty set.",
   "part": 6
  },
  {
   "id": 568,
   "question": "What is `deque.rotate(1)`?",
   "options": {
    "A": "Rotate right by 1",
    "B": "Rotate left",
    "C": "Sort",
    "D": "Reverse"
   },
   "correct": "A",
   "explanation": "rotate(1) moves last to first.",
   "part": 6
  },
  {
   "id": 569,
   "question": "What does `Path.read_text()` return?",
   "options": {
    "A": "File content as str",
    "B": "Bytes",
    "C": "Lines list",
    "D": "File object"
   },
   "correct": "A",
   "explanation": "read_text reads and decodes to string.",
   "part": 6
  },
  {
   "id": 570,
   "question": "What does `os.path.exists(path)` return?",
   "options": {
    "A": "True if path exists",
    "B": "Always bool",
    "C": "Both",
    "D": "Path object"
   },
   "correct": "C",
   "explanation": "Returns True/False for existence.",
   "part": 6
  },
  {
   "id": 571,
   "question": "What does `sys.platform` contain?",
   "options": {
    "A": "OS identifier",
    "B": "Python version",
    "C": "Architecture",
    "D": "Compiler"
   },
   "correct": "A",
   "explanation": "e.g. 'win32', 'linux', 'darwin'.",
   "part": 6
  },
  {
   "id": 572,
   "question": "What is `datetime.date.today()`?",
   "options": {
    "A": "Current date",
    "B": "Current datetime",
    "C": "Date string",
    "D": "Timestamp"
   },
   "correct": "A",
   "explanation": "today() returns current date object.",
   "part": 6
  },
  {
   "id": 573,
   "question": "What does `math.floor(-2.3)` return?",
   "options": {
    "A": "-2",
    "B": "-3",
    "C": "-2.0",
    "D": "2"
   },
   "correct": "B",
   "explanation": "floor rounds down (toward -inf).",
   "part": 6
  },
  {
   "id": 574,
   "question": "What does `random.random()` return?",
   "options": {
    "A": "Float in [0, 1)",
    "B": "Int 0 or 1",
    "C": "Float in (0, 1]",
    "D": "Any float"
   },
   "correct": "A",
   "explanation": "random() returns float in [0, 1).",
   "part": 6
  },
  {
   "id": 575,
   "question": "What is `collections.namedtuple`?",
   "options": {
    "A": "Tuple with named fields",
    "B": "Dict-like tuple",
    "C": "Both",
    "D": "Ordered dict"
   },
   "correct": "A",
   "explanation": "namedtuple adds field names to tuple.",
   "part": 6
  },
  {
   "id": 576,
   "question": "What does `Path.glob('*.py')` return?",
   "options": {
    "A": "Iterator of matching paths",
    "B": "List",
    "C": "Single path",
    "D": "Bool"
   },
   "correct": "A",
   "explanation": "glob yields paths matching pattern.",
   "part": 6
  },
  {
   "id": 577,
   "question": "What does `os.makedirs('a/b/c', exist_ok=True)` do?",
   "options": {
    "A": "Create dirs, no error if exists",
    "B": "Create only if not exists",
    "C": "Replace existing",
    "D": "Create single dir"
   },
   "correct": "A",
   "explanation": "exist_ok=True avoids FileExistsError.",
   "part": 6
  },
  {
   "id": 578,
   "question": "What does `sys.executable` contain?",
   "options": {
    "A": "Python interpreter path",
    "B": "Script path",
    "C": "Module path",
    "D": "venv path"
   },
   "correct": "A",
   "explanation": "Path to python executable.",
   "part": 6
  },
  {
   "id": 579,
   "question": "What is `datetime.timedelta.total_seconds()`?",
   "options": {
    "A": "Total seconds as float",
    "B": "Seconds component only",
    "C": "Days only",
    "D": "Integer seconds"
   },
   "correct": "A",
   "explanation": "total_seconds returns duration in seconds.",
   "part": 6
  },
  {
   "id": 580,
   "question": "What does `math.pow(2, 3)` return?",
   "options": {
    "A": "8.0",
    "B": "8",
    "C": "6",
    "D": "9"
   },
   "correct": "A",
   "explanation": "pow returns float (2**3 = 8.0).",
   "part": 6
  },
  {
   "id": 581,
   "question": "What does `random.uniform(1, 10)` return?",
   "options": {
    "A": "Float in [1, 10]",
    "B": "Int in [1, 10]",
    "C": "Float in (1, 10)",
    "D": "Always 5.5"
   },
   "correct": "A",
   "explanation": "uniform returns float in inclusive range.",
   "part": 6
  },
  {
   "id": 582,
   "question": "What is `collections.ChainMap`?",
   "options": {
    "A": "Dict-like view of multiple dicts",
    "B": "Chained list",
    "C": "Linked dict",
    "D": "Merge dicts"
   },
   "correct": "A",
   "explanation": "ChainMap looks up in multiple dicts.",
   "part": 6
  },
  {
   "id": 583,
   "question": "What does `Path.write_text('hello')` do?",
   "options": {
    "A": "Write string to file",
    "B": "Append",
    "C": "Read first",
    "D": "Create dir only"
   },
   "correct": "A",
   "explanation": "write_text writes string, overwrites.",
   "part": 6
  },
  {
   "id": 584,
   "question": "What does `os.path.basename('/a/b/c.txt')` return?",
   "options": {
    "A": "'c.txt'",
    "B": "'/a/b'",
    "C": "'c'",
    "D": "'a'"
   },
   "correct": "A",
   "explanation": "basename is the final component.",
   "part": 6
  },
  {
   "id": 585,
   "question": "What does `sys.getrecursionlimit()` return?",
   "options": {
    "A": "Max recursion depth",
    "B": "Stack size",
    "C": "Call limit",
    "D": "Default 1000"
   },
   "correct": "A",
   "explanation": "Default is typically 1000.",
   "part": 6
  },
  {
   "id": 586,
   "question": "What is `datetime.datetime.fromtimestamp(0)`?",
   "options": {
    "A": "Epoch in local time",
    "B": "Epoch in UTC",
    "C": "Current time",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "fromtimestamp uses local timezone.",
   "part": 6
  },
  {
   "id": 587,
   "question": "What does `math.factorial(5)` return?",
   "options": {
    "A": "120",
    "B": "5",
    "C": "15",
    "D": "25"
   },
   "correct": "A",
   "explanation": "5! = 5*4*3*2*1 = 120.",
   "part": 6
  },
  {
   "id": 588,
   "question": "What does `random.getrandbits(8)` return?",
   "options": {
    "A": "Int with 8 random bits",
    "B": "Byte",
    "C": "Float",
    "D": "8 random ints"
   },
   "correct": "A",
   "explanation": "Returns int with k random bits.",
   "part": 6
  },
  {
   "id": 589,
   "question": "What is `collections.UserDict`?",
   "options": {
    "A": "Base for dict subclasses",
    "B": "User-defined dict",
    "C": "Both",
    "D": "Custom key type"
   },
   "correct": "A",
   "explanation": "UserDict simplifies dict subclassing.",
   "part": 6
  },
  {
   "id": 590,
   "question": "What does `Path.mkdir(parents=True)` do?",
   "options": {
    "A": "Create parent dirs too",
    "B": "Create only parents",
    "C": "Ignore existing",
    "D": "Create single dir"
   },
   "correct": "A",
   "explanation": "parents=True creates intermediate dirs.",
   "part": 6
  },
  {
   "id": 591,
   "question": "What does `os.chdir(path)` do?",
   "options": {
    "A": "Change current directory",
    "B": "Create directory",
    "C": "Check directory",
    "D": "List directory"
   },
   "correct": "A",
   "explanation": "chdir changes cwd.",
   "part": 6
  },
  {
   "id": 592,
   "question": "What does `sys.getdefaultencoding()` return?",
   "options": {
    "A": "'utf-8'",
    "B": "'ascii'",
    "C": "Platform-dependent",
    "D": "None"
   },
   "correct": "A",
   "explanation": "Default is utf-8 in Python 3.",
   "part": 6
  },
  {
   "id": 593,
   "question": "What is `datetime.datetime.combine(date, time)`?",
   "options": {
    "A": "Combine date and time",
    "B": "Split datetime",
    "C": "Compare",
    "D": "Format"
   },
   "correct": "A",
   "explanation": "Creates datetime from date and time.",
   "part": 6
  },
  {
   "id": 594,
   "question": "What does `math.copysign(5, -1)` return?",
   "options": {
    "A": "-5.0",
    "B": "5.0",
    "C": "-1",
    "D": "5"
   },
   "correct": "A",
   "explanation": "copysign uses magnitude of first, sign of second.",
   "part": 6
  },
  {
   "id": 595,
   "question": "What does `random.gauss(0, 1)` return?",
   "options": {
    "A": "Gaussian random",
    "B": "Uniform",
    "C": "Integer",
    "D": "List"
   },
   "correct": "A",
   "explanation": "gauss returns normal distribution sample.",
   "part": 6
  },
  {
   "id": 596,
   "question": "What is `functools.lru_cache`?",
   "options": {
    "A": "Memoization decorator",
    "B": "Cache module",
    "C": "LRU list",
    "D": "Memory cache"
   },
   "correct": "A",
   "explanation": "lru_cache caches function results.",
   "part": 6
  },
  {
   "id": 597,
   "question": "What does `Path.resolve()` return?",
   "options": {
    "A": "Absolute resolved path",
    "B": "Relative path",
    "C": "Symlink target",
    "D": "String"
   },
   "correct": "A",
   "explanation": "resolve() returns absolute path, resolving symlinks.",
   "part": 6
  },
  {
   "id": 598,
   "question": "What does `os.path.isfile(path)` return?",
   "options": {
    "A": "True if regular file",
    "B": "True if exists",
    "C": "File size",
    "D": "Extension"
   },
   "correct": "A",
   "explanation": "isfile checks if path is regular file.",
   "part": 6
  },
  {
   "id": 599,
   "question": "What does `sys.path.insert(0, dir)` do?",
   "options": {
    "A": "Prepend dir to search path",
    "B": "Append dir",
    "C": "Replace path",
    "D": "Remove dir"
   },
   "correct": "A",
   "explanation": "insert(0,...) adds at front of sys.path.",
   "part": 6
  },
  {
   "id": 600,
   "question": "What is `datetime.timezone(datetime.timedelta(hours=-5))`?",
   "options": {
    "A": "Fixed offset timezone",
    "B": "UTC",
    "C": "Local",
    "D": "DST-aware"
   },
   "correct": "A",
   "explanation": "Fixed offset from UTC (e.g. EST).",
   "part": 6
  },
  {
   "id": 601,
   "question": "What does a decorator do?",
   "options": {
    "A": "Wrap/modify function",
    "B": "Delete function",
    "C": "Import function",
    "D": "Call function"
   },
   "correct": "A",
   "explanation": "Decorator wraps and can modify function behavior.",
   "part": 7
  },
  {
   "id": 602,
   "question": "What does `functools.wraps(f)` preserve?",
   "options": {
    "A": "Original metadata",
    "B": "Function body",
    "C": "Return value",
    "D": "Arguments"
   },
   "correct": "A",
   "explanation": "wraps copies __name__, __doc__, etc.",
   "part": 7
  },
  {
   "id": 603,
   "question": "What does `@property` create?",
   "options": {
    "A": "Getter for attribute",
    "B": "Setter only",
    "C": "Both getter and optional setter",
    "D": "Class method"
   },
   "correct": "C",
   "explanation": "property defines getter; setter/deleter optional.",
   "part": 7
  },
  {
   "id": 604,
   "question": "What is a descriptor?",
   "options": {
    "A": "Object with __get__/__set__/__delete__",
    "B": "Decorator",
    "C": "Property only",
    "D": "Method"
   },
   "correct": "A",
   "explanation": "Descriptor protocol: __get__, __set__, __delete__.",
   "part": 7
  },
  {
   "id": 605,
   "question": "What does `type()` with 3 args create?",
   "options": {
    "A": "New class dynamically",
    "B": "Instance",
    "C": "Type object",
    "D": "Metaclass"
   },
   "correct": "A",
   "explanation": "type(name, bases, dict) creates a class.",
   "part": 7
  },
  {
   "id": 606,
   "question": "What is `__new__` vs `__init__`?",
   "options": {
    "A": "__new__ creates, __init__ initializes",
    "B": "Same thing",
    "C": "__init__ first",
    "D": "Only __init__ needed"
   },
   "correct": "A",
   "explanation": "__new__ creates object; __init__ sets up.",
   "part": 7
  },
  {
   "id": 607,
   "question": "What does `__slots__` do?",
   "options": {
    "A": "Restrict instance attributes",
    "B": "Add attributes",
    "C": "Create slots",
    "D": "Reserve memory"
   },
   "correct": "A",
   "explanation": "__slots__ limits allowed attributes, saves memory.",
   "part": 7
  },
  {
   "id": 608,
   "question": "What does `yield` do in a function?",
   "options": {
    "A": "Pause and return value",
    "B": "Return and stop",
    "C": "Raise exception",
    "D": "Break loop"
   },
   "correct": "A",
   "explanation": "yield makes generator; pauses and yields value.",
   "part": 7
  },
  {
   "id": 609,
   "question": "What does `generator.send(x)` do?",
   "options": {
    "A": "Send value into yield",
    "B": "Send to next",
    "C": "Both",
    "D": "Raise error"
   },
   "correct": "A",
   "explanation": "send() passes value to yield expression.",
   "part": 7
  },
  {
   "id": 610,
   "question": "What does `generator.throw(exc)` do?",
   "options": {
    "A": "Raise exception in generator",
    "B": "Catch exception",
    "C": "Return exception",
    "D": "Ignore"
   },
   "correct": "A",
   "explanation": "throw raises exception at yield point.",
   "part": 7
  },
  {
   "id": 611,
   "question": "What is `(x**2 for x in range(5))`?",
   "options": {
    "A": "Generator expression",
    "B": "List",
    "C": "Tuple",
    "D": "Set"
   },
   "correct": "A",
   "explanation": "Parentheses create generator expression.",
   "part": 7
  },
  {
   "id": 612,
   "question": "What is `abc.ABC`?",
   "options": {
    "A": "Abstract base class",
    "B": "Abstract method",
    "C": "Base class only",
    "D": "Interface"
   },
   "correct": "A",
   "explanation": "ABC is base for abstract classes.",
   "part": 7
  },
  {
   "id": 613,
   "question": "What does `__init_subclass__` do?",
   "options": {
    "A": "Hook when subclass is created",
    "B": "Initialize subclass",
    "C": "Call super",
    "D": "Register class"
   },
   "correct": "A",
   "explanation": "Called when class is subclassed.",
   "part": 7
  },
  {
   "id": 614,
   "question": "What is `__class_getitem__`?",
   "options": {
    "A": "Support cls[int]",
    "B": "Get class item",
    "C": "Generic type",
    "D": "Index class"
   },
   "correct": "A",
   "explanation": "Enables Class[int] syntax for generics.",
   "part": 7
  },
  {
   "id": 615,
   "question": "What does a decorator with args look like?",
   "options": {
    "A": "@decorator(arg)",
    "B": "@decorator",
    "C": "Both",
    "D": "decorator()"
   },
   "correct": "A",
   "explanation": "decorator(arg) returns actual decorator.",
   "part": 7
  },
  {
   "id": 616,
   "question": "What does `@staticmethod` do?",
   "options": {
    "A": "No self/cls",
    "B": "Class method",
    "C": "Instance only",
    "D": "Abstract"
   },
   "correct": "A",
   "explanation": "staticmethod receives no implicit first arg.",
   "part": 7
  },
  {
   "id": 617,
   "question": "What is `__get__` in a descriptor?",
   "options": {
    "A": "Called on attribute access",
    "B": "Getter method",
    "C": "Both",
    "D": "Property"
   },
   "correct": "A",
   "explanation": "__get__(self, instance, owner) on access.",
   "part": 7
  },
  {
   "id": 618,
   "question": "What is a metaclass?",
   "options": {
    "A": "Class of a class",
    "B": "Base class",
    "C": "Super class",
    "D": "Abstract class"
   },
   "correct": "A",
   "explanation": "Metaclass creates classes; type is default.",
   "part": 7
  },
  {
   "id": 619,
   "question": "What does `object.__new__(cls)` do?",
   "options": {
    "A": "Create instance",
    "B": "Initialize",
    "C": "Both",
    "D": "Return cls"
   },
   "correct": "A",
   "explanation": "__new__ creates and returns new instance.",
   "part": 7
  },
  {
   "id": 620,
   "question": "What does `__slots__ = ['x']` prevent?",
   "options": {
    "A": "Adding other attributes",
    "B": "Using x",
    "C": "Inheritance",
    "D": "Methods"
   },
   "correct": "A",
   "explanation": "Only x (and __dict__-like) allowed.",
   "part": 7
  },
  {
   "id": 621,
   "question": "What does a generator return?",
   "options": {
    "A": "Generator iterator",
    "B": "First value",
    "C": "List",
    "D": "None"
   },
   "correct": "A",
   "explanation": "Generator function returns generator object.",
   "part": 7
  },
  {
   "id": 622,
   "question": "What does `next(gen)` do?",
   "options": {
    "A": "Advance to next yield",
    "B": "Get first only",
    "C": "Reset generator",
    "D": "Close generator"
   },
   "correct": "A",
   "explanation": "next() advances to next yield.",
   "part": 7
  },
  {
   "id": 623,
   "question": "What is a coroutine?",
   "options": {
    "A": "async def function",
    "B": "Generator with send",
    "C": "Both",
    "D": "Thread"
   },
   "correct": "C",
   "explanation": "async def creates coroutine; generators can emulate.",
   "part": 7
  },
  {
   "id": 624,
   "question": "What does `@abstractmethod` do?",
   "options": {
    "A": "Must override in subclass",
    "B": "Cannot call",
    "C": "Both",
    "D": "Optional override"
   },
   "correct": "A",
   "explanation": "Abstract method must be implemented.",
   "part": 7
  },
  {
   "id": 625,
   "question": "What does `__init_subclass__(cls)` receive?",
   "options": {
    "A": "The new subclass",
    "B": "Parent class",
    "C": "Instance",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "cls is the newly defined subclass.",
   "part": 7
  },
  {
   "id": 626,
   "question": "What does `list[int]` use?",
   "options": {
    "A": "__class_getitem__",
    "B": "__getitem__",
    "C": "__subscript__",
    "D": "Generic"
   },
   "correct": "A",
   "explanation": "__class_getitem__ enables Class[args].",
   "part": 7
  },
  {
   "id": 627,
   "question": "What does `def dec(f): return f` do?",
   "options": {
    "A": "No-op decorator",
    "B": "Replace function",
    "C": "Delete function",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Returns same function unchanged.",
   "part": 7
  },
  {
   "id": 628,
   "question": "What does `@classmethod` receive as first arg?",
   "options": {
    "A": "cls",
    "B": "self",
    "C": "class",
    "D": "None"
   },
   "correct": "A",
   "explanation": "classmethod gets class as first argument.",
   "part": 7
  },
  {
   "id": 629,
   "question": "What is `__set__` in a descriptor?",
   "options": {
    "A": "Called on assignment",
    "B": "Setter",
    "C": "Both",
    "D": "Property setter"
   },
   "correct": "A",
   "explanation": "__set__(self, instance, value) on assignment.",
   "part": 7
  },
  {
   "id": 630,
   "question": "What does `type.__new__` create?",
   "options": {
    "A": "New class",
    "B": "Instance",
    "C": "Metaclass",
    "D": "Object"
   },
   "correct": "A",
   "explanation": "Metaclass __new__ creates the class object.",
   "part": 7
  },
  {
   "id": 631,
   "question": "When is `__new__` called?",
   "options": {
    "A": "Before __init__",
    "B": "After __init__",
    "C": "Instead of __init__",
    "D": "Never"
   },
   "correct": "A",
   "explanation": "__new__ creates object; __init__ initializes it.",
   "part": 7
  },
  {
   "id": 632,
   "question": "What does `__slots__` save?",
   "options": {
    "A": "Memory",
    "B": "Speed",
    "C": "Both",
    "D": "Neither"
   },
   "correct": "C",
   "explanation": "No __dict__ per instance saves memory.",
   "part": 7
  },
  {
   "id": 633,
   "question": "What does `yield from iter` do?",
   "options": {
    "A": "Delegate to sub-generator",
    "B": "Yield iter",
    "C": "Flatten",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "yield from delegates to another generator.",
   "part": 7
  },
  {
   "id": 634,
   "question": "What does `gen.close()` do?",
   "options": {
    "A": "Raise GeneratorExit",
    "B": "Delete generator",
    "C": "Return None",
    "D": "Pause"
   },
   "correct": "A",
   "explanation": "close() raises GeneratorExit in generator.",
   "part": 7
  },
  {
   "id": 635,
   "question": "What is `async def`?",
   "options": {
    "A": "Coroutine function",
    "B": "Generator",
    "C": "Thread",
    "D": "Process"
   },
   "correct": "A",
   "explanation": "async def defines coroutine function.",
   "part": 7
  },
  {
   "id": 636,
   "question": "What does `ABC` prevent?",
   "options": {
    "A": "Instantiating with unimplemented abstract methods",
    "B": "Subclassing",
    "C": "Importing",
    "D": "Inheritance"
   },
   "correct": "A",
   "explanation": "Cannot instantiate until abstract methods implemented.",
   "part": 7
  },
  {
   "id": 637,
   "question": "What does `__init_subclass__` replace?",
   "options": {
    "A": "Metaclass for simple cases",
    "B": "__init__",
    "C": "__new__",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Simpler than metaclass for subclass hooks.",
   "part": 7
  },
  {
   "id": 638,
   "question": "What does `typing.Generic` use?",
   "options": {
    "A": "__class_getitem__",
    "B": "__getitem__",
    "C": "Metaclass",
    "D": "Decorator"
   },
   "correct": "A",
   "explanation": "Generic uses __class_getitem__ for Type[T].",
   "part": 7
  },
  {
   "id": 639,
   "question": "What does `@functools.lru_cache(maxsize=128)` do?",
   "options": {
    "A": "Cache up to 128 results",
    "B": "Cache all",
    "C": "No cache",
    "D": "Cache 128 bytes"
   },
   "correct": "A",
   "explanation": "maxsize limits cache entries.",
   "part": 7
  },
  {
   "id": 640,
   "question": "What does `@property` setter look like?",
   "options": {
    "A": "@propname.setter",
    "B": "@setter",
    "C": "@property.setter",
    "D": "def set_prop"
   },
   "correct": "A",
   "explanation": "Use @propname.setter for setter.",
   "part": 7
  },
  {
   "id": 641,
   "question": "What is `__delete__` in descriptor?",
   "options": {
    "A": "Called on del attr",
    "B": "Delete descriptor",
    "C": "Remove",
    "D": "Clear"
   },
   "correct": "A",
   "explanation": "__delete__ called on del instance.attr.",
   "part": 7
  },
  {
   "id": 642,
   "question": "What is `type('MyClass', (), {})`?",
   "options": {
    "A": "Dynamic class",
    "B": "Type object",
    "C": "Instance",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Creates class with given name, bases, dict.",
   "part": 7
  },
  {
   "id": 643,
   "question": "What does `__new__` return?",
   "options": {
    "A": "New instance",
    "B": "None",
    "C": "cls",
    "D": "self"
   },
   "correct": "A",
   "explanation": "__new__ must return new instance.",
   "part": 7
  },
  {
   "id": 644,
   "question": "Can you add attributes with __slots__?",
   "options": {
    "A": "Only listed ones",
    "B": "Any",
    "C": "None",
    "D": "Only in __init__"
   },
   "correct": "A",
   "explanation": "Only attributes in __slots__ allowed.",
   "part": 7
  },
  {
   "id": 645,
   "question": "What does `for x in gen` do?",
   "options": {
    "A": "Iterate yielded values",
    "B": "Get generator",
    "C": "Call gen",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "for loop consumes generator.",
   "part": 7
  },
  {
   "id": 646,
   "question": "What does `gen.__next__()` do?",
   "options": {
    "A": "Same as next(gen)",
    "B": "Reset",
    "C": "Close",
    "D": "Send"
   },
   "correct": "A",
   "explanation": "__next__ is what next() calls.",
   "part": 7
  },
  {
   "id": 647,
   "question": "What is `@dataclass`?",
   "options": {
    "A": "Auto __init__, __repr__",
    "B": "Data only",
    "C": "Both",
    "D": "Frozen only"
   },
   "correct": "C",
   "explanation": "dataclass generates boilerplate.",
   "part": 7
  },
  {
   "id": 648,
   "question": "What does `__mro__` contain?",
   "options": {
    "A": "Method resolution order",
    "B": "Methods",
    "C": "Attributes",
    "D": "Parents"
   },
   "correct": "A",
   "explanation": "__mro__ is resolution order tuple.",
   "part": 7
  },
  {
   "id": 649,
   "question": "What does `def dec(x): return lambda f: f` create?",
   "options": {
    "A": "Decorator factory",
    "B": "Simple decorator",
    "C": "Error",
    "D": "Closure"
   },
   "correct": "A",
   "explanation": "Returns decorator; dec(x) gives actual decorator.",
   "part": 7
  },
  {
   "id": 650,
   "question": "When is `__get__` called with instance=None?",
   "options": {
    "A": "Access via class",
    "B": "Never",
    "C": "On delete",
    "D": "On set"
   },
   "correct": "A",
   "explanation": "Class access: instance is None, owner is class.",
   "part": 7
  },
  {
   "id": 651,
   "question": "What does `functools.partial(f, 1)(2)` do?",
   "options": {
    "A": "Call f(1, 2)",
    "B": "Call f(2)",
    "C": "Error",
    "D": "Return f"
   },
   "correct": "A",
   "explanation": "partial fixes first arg, passes 2 as second.",
   "part": 7
  },
  {
   "id": 652,
   "question": "What is `StopIteration` in generator?",
   "options": {
    "A": "Signal end of iteration",
    "B": "Error only",
    "C": "Pause",
    "D": "Reset"
   },
   "correct": "A",
   "explanation": "Raised when generator exhausts (or return).",
   "part": 7
  },
  {
   "id": 653,
   "question": "What does `@abstractmethod` require?",
   "options": {
    "A": "ABC base class",
    "B": "Any class",
    "C": "Metaclass",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Abstract methods need ABC (or similar) base.",
   "part": 7
  },
  {
   "id": 654,
   "question": "What does `__init_subclass__` run?",
   "options": {
    "A": "When subclass is defined",
    "B": "When instance created",
    "C": "On import",
    "D": "Never"
   },
   "correct": "A",
   "explanation": "Runs at class definition time.",
   "part": 7
  },
  {
   "id": 655,
   "question": "What enables `dict[str, int]`?",
   "options": {
    "A": "__class_getitem__",
    "B": "__getitem__",
    "C": "typing",
    "D": "Generic"
   },
   "correct": "A",
   "explanation": "__class_getitem__ on built-in types.",
   "part": 7
  },
  {
   "id": 656,
   "question": "What does `inspect.isfunction(f)` check?",
   "options": {
    "A": "f is user-defined function",
    "B": "f is callable",
    "C": "f has __call__",
    "D": "f is method"
   },
   "correct": "A",
   "explanation": "Distinguishes function from built-in, etc.",
   "part": 7
  },
  {
   "id": 657,
   "question": "What does `yield` without value produce?",
   "options": {
    "A": "None",
    "B": "Error",
    "C": "Generator",
    "D": "StopIteration"
   },
   "correct": "A",
   "explanation": "yield yields None when no expression.",
   "part": 7
  },
  {
   "id": 658,
   "question": "What is `functools.cached_property`?",
   "options": {
    "A": "Property cached per instance",
    "B": "Class property",
    "C": "Static cache",
    "D": "LRU property"
   },
   "correct": "A",
   "explanation": "Caches computed value on first access.",
   "part": 7
  },
  {
   "id": 659,
   "question": "What does `__set_name__` in descriptor do?",
   "options": {
    "A": "Receive attribute name",
    "B": "Set name",
    "C": "Rename",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Called when descriptor assigned to class attr.",
   "part": 7
  },
  {
   "id": 660,
   "question": "What is `type`'s metaclass?",
   "options": {
    "A": "type",
    "B": "object",
    "C": "None",
    "D": "type.__class__"
   },
   "correct": "A",
   "explanation": "type is its own metaclass.",
   "part": 7
  },
  {
   "id": 661,
   "question": "What does `__new__` receive that `__init__` doesn't?",
   "options": {
    "A": "cls",
    "B": "Same args",
    "C": "Nothing extra",
    "D": "class"
   },
   "correct": "A",
   "explanation": "__new__ gets cls; __init__ gets self (instance).",
   "part": 7
  },
  {
   "id": 662,
   "question": "Can `__slots__` inherit?",
   "options": {
    "A": "Yes, child gets parent slots",
    "B": "No",
    "C": "Overrides only",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Subclass inherits; can add more in own __slots__.",
   "part": 7
  },
  {
   "id": 663,
   "question": "What does `itertools.islice(gen, 3)` return?",
   "options": {
    "A": "First 3 from gen",
    "B": "All from gen",
    "C": "Last 3",
    "D": "Every 3rd"
   },
   "correct": "A",
   "explanation": "islice takes first n from iterator.",
   "part": 7
  },
  {
   "id": 664,
   "question": "What is `typing.Protocol`?",
   "options": {
    "A": "Structural subtyping",
    "B": "Nominal inheritance",
    "C": "Abstract only",
    "D": "Runtime check"
   },
   "correct": "A",
   "explanation": "Protocol enables structural typing (duck typing).",
   "part": 7
  },
  {
   "id": 665,
   "question": "What does `__prepare__` in metaclass do?",
   "options": {
    "A": "Return namespace for class body",
    "B": "Prepare instance",
    "C": "Init class",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "__prepare__ returns dict-like for class namespace.",
   "part": 7
  },
  {
   "id": 666,
   "question": "What does `generator.gi_frame` hold?",
   "options": {
    "A": "Current frame state",
    "B": "Return value",
    "C": "Arguments",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Frame has local vars, etc.",
   "part": 7
  },
  {
   "id": 667,
   "question": "What is `@functools.singledispatch`?",
   "options": {
    "A": "Function overload by first arg type",
    "B": "Single function",
    "C": "Dispatch table",
    "D": "Decorator only"
   },
   "correct": "A",
   "explanation": "Overloads based on type of first argument.",
   "part": 7
  },
  {
   "id": 668,
   "question": "What does `__getattribute__` intercept?",
   "options": {
    "A": "All attribute access",
    "B": "Missing only",
    "C": "Gets only",
    "D": "Sets only"
   },
   "correct": "A",
   "explanation": "__getattribute__ catches every attr access.",
   "part": 7
  },
  {
   "id": 669,
   "question": "What does `__getattr__` get when attr not found?",
   "options": {
    "A": "Last resort",
    "B": "First call",
    "C": "Never",
    "D": "Always"
   },
   "correct": "A",
   "explanation": "__getattr__ only when normal lookup fails.",
   "part": 7
  },
  {
   "id": 670,
   "question": "What does `class C(metaclass=M)` do?",
   "options": {
    "A": "Use M to create C",
    "B": "Inherit M",
    "C": "M is base",
    "D": "M is mixin"
   },
   "correct": "A",
   "explanation": "M is metaclass creating C.",
   "part": 7
  },
  {
   "id": 671,
   "question": "What does `object.__new__` require?",
   "options": {
    "A": "Return instance of cls",
    "B": "Return None",
    "C": "Call __init__",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "__new__ must return new instance (or subclass).",
   "part": 7
  },
  {
   "id": 672,
   "question": "What happens with `__slots__` and `__dict__`?",
   "options": {
    "A": "No __dict__ by default",
    "B": "Both exist",
    "C": "__dict__ only",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "__slots__ removes __dict__ to save memory.",
   "part": 7
  },
  {
   "id": 673,
   "question": "What does `gen.send(None)` equal?",
   "options": {
    "A": "next(gen)",
    "B": "gen.throw()",
    "C": "Error",
    "D": "gen.close()"
   },
   "correct": "A",
   "explanation": "First send must be None (or next()).",
   "part": 7
  },
  {
   "id": 674,
   "question": "What is `contextlib.contextmanager`?",
   "options": {
    "A": "Decorator for generator CM",
    "B": "Base class",
    "C": "Function",
    "D": "Protocol"
   },
   "correct": "A",
   "explanation": "Turns generator into context manager.",
   "part": 7
  },
  {
   "id": 675,
   "question": "What does `abc.abstractmethod` combine with?",
   "options": {
    "A": "ABC",
    "B": "Any class",
    "C": "object",
    "D": "type"
   },
   "correct": "A",
   "explanation": "ABC checks abstract methods at instantiation.",
   "part": 7
  },
  {
   "id": 676,
   "question": "What does `__init_subclass__` allow?",
   "options": {
    "A": "Customize subclass at definition",
    "B": "Only __init__",
    "C": "Only __new__",
    "D": "Runtime only"
   },
   "correct": "A",
   "explanation": "Hook without full metaclass.",
   "part": 7
  },
  {
   "id": 677,
   "question": "What does `typing.TypeVar` create?",
   "options": {
    "A": "Generic type variable",
    "B": "Type alias",
    "C": "New type",
    "D": "Protocol"
   },
   "correct": "A",
   "explanation": "TypeVar for generic type parameters.",
   "part": 7
  },
  {
   "id": 678,
   "question": "What does `@decorator` without parens mean?",
   "options": {
    "A": "decorator(func)",
    "B": "decorator()",
    "C": "Just decorator",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "func passed to decorator directly.",
   "part": 7
  },
  {
   "id": 679,
   "question": "What does `@classmethod` allow?",
   "options": {
    "A": "Call without instance",
    "B": "Instance only",
    "C": "Static only",
    "D": "Abstract"
   },
   "correct": "A",
   "explanation": "Can call via Class.method() or instance.method().",
   "part": 7
  },
  {
   "id": 680,
   "question": "What is data descriptor?",
   "options": {
    "A": "Has __set__ or __delete__",
    "B": "Has __get__ only",
    "C": "Both",
    "D": "Property"
   },
   "correct": "A",
   "explanation": "Data descriptor has __set__ or __delete__.",
   "part": 7
  },
  {
   "id": 681,
   "question": "What does custom metaclass inherit from?",
   "options": {
    "A": "type",
    "B": "object",
    "C": "None",
    "D": "Metaclass"
   },
   "correct": "A",
   "explanation": "Metaclasses typically subclass type.",
   "part": 7
  },
  {
   "id": 682,
   "question": "What if `__new__` returns existing instance?",
   "options": {
    "A": "__init__ not called",
    "B": "__init__ called",
    "C": "Error",
    "D": "Both called"
   },
   "correct": "A",
   "explanation": "__init__ only for new instances.",
   "part": 7
  },
  {
   "id": 683,
   "question": "What does `__slots__ = ()` do?",
   "options": {
    "A": "No instance attributes",
    "B": "All attributes",
    "C": "Error",
    "D": "Same as default"
   },
   "correct": "A",
   "explanation": "Empty __slots__ prevents instance attrs.",
   "part": 7
  },
  {
   "id": 684,
   "question": "What does `sum(x**2 for x in range(5))` return?",
   "options": {
    "A": "30",
    "B": "55",
    "C": "25",
    "D": "10"
   },
   "correct": "A",
   "explanation": "0+1+4+9+16=30.",
   "part": 7
  },
  {
   "id": 685,
   "question": "What is `typing.runtime_checkable`?",
   "options": {
    "A": "Enable isinstance with Protocol",
    "B": "Runtime only",
    "C": "Check Protocol",
    "D": "Validate"
   },
   "correct": "A",
   "explanation": "Allows isinstance(obj, Protocol).",
   "part": 7
  },
  {
   "id": 686,
   "question": "What does `metaclass.__call__` do?",
   "options": {
    "A": "Create instance when Class() called",
    "B": "Create class",
    "C": "Call method",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Metaclass __call__ runs on Class().",
   "part": 7
  },
  {
   "id": 687,
   "question": "What does `gen.throw(ValueError)` do?",
   "options": {
    "A": "Raise ValueError at yield",
    "B": "Catch ValueError",
    "C": "Return ValueError",
    "D": "Ignore"
   },
   "correct": "A",
   "explanation": "Injects exception at yield point.",
   "part": 7
  },
  {
   "id": 688,
   "question": "What is `@dataclass(frozen=True)`?",
   "options": {
    "A": "Immutable instances",
    "B": "Frozen methods",
    "C": "No init",
    "D": "Read-only class"
   },
   "correct": "A",
   "explanation": "frozen makes instances immutable.",
   "part": 7
  },
  {
   "id": 689,
   "question": "What does `functools.reduce` do?",
   "options": {
    "A": "Fold iterable to single value",
    "B": "Reduce size",
    "C": "Filter",
    "D": "Map"
   },
   "correct": "A",
   "explanation": "reduce applies binary function cumulatively.",
   "part": 7
  },
  {
   "id": 690,
   "question": "What is non-data descriptor?",
   "options": {
    "A": "__get__ only",
    "B": "__set__ only",
    "C": "Both",
    "D": "Property"
   },
   "correct": "A",
   "explanation": "Only __get__; lower priority than instance dict.",
   "part": 7
  },
  {
   "id": 691,
   "question": "What does `type(obj)` return?",
   "options": {
    "A": "Class of obj",
    "B": "type",
    "C": "object",
    "D": "Class name"
   },
   "correct": "A",
   "explanation": "type(obj) returns obj's class.",
   "part": 7
  },
  {
   "id": 692,
   "question": "What does `super().__new__(cls)` do?",
   "options": {
    "A": "Delegate to parent __new__",
    "B": "Create parent",
    "C": "Error",
    "D": "Call __init__"
   },
   "correct": "A",
   "explanation": "Calls parent's __new__ for instance creation.",
   "part": 7
  },
  {
   "id": 693,
   "question": "What if subclass adds `__dict__` to `__slots__`?",
   "options": {
    "A": "Allow dynamic attrs",
    "B": "Error",
    "C": "Override",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Adding __dict__ to __slots__ enables extra attrs.",
   "part": 7
  },
  {
   "id": 694,
   "question": "What does `list((i for i in range(3)))` produce?",
   "options": {
    "A": "[0,1,2]",
    "B": "[0,1,2,3]",
    "C": "Generator",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Exhausts generator to list.",
   "part": 7
  },
  {
   "id": 695,
   "question": "What is `typing.Callable`?",
   "options": {
    "A": "Type for functions",
    "B": "Callable class",
    "C": "Decorator",
    "D": "Protocol"
   },
   "correct": "A",
   "explanation": "Callable[[ArgTypes], ReturnType] for function types.",
   "part": 7
  },
  {
   "id": 696,
   "question": "What does `__build_class__` do?",
   "options": {
    "A": "Build class in exec",
    "B": "Import class",
    "C": "Create instance",
    "D": "Compile"
   },
   "correct": "A",
   "explanation": "Used internally for class statement.",
   "part": 7
  },
  {
   "id": 697,
   "question": "What does `gen.close()` cause generator to do?",
   "options": {
    "A": "Raise GeneratorExit, cleanup",
    "B": "Return",
    "C": "Pause",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Generator can catch GeneratorExit for cleanup.",
   "part": 7
  },
  {
   "id": 698,
   "question": "What is `@dataclass(order=True)`?",
   "options": {
    "A": "Generate comparison methods",
    "B": "Sort only",
    "C": "Order fields",
    "D": "Sequence"
   },
   "correct": "A",
   "explanation": "Adds __lt__, __le__, __gt__, __ge__, __eq__.",
   "part": 7
  },
  {
   "id": 699,
   "question": "What does `functools.wraps` fix?",
   "options": {
    "A": "Preserve __name__ on wrapper",
    "B": "Preserve return",
    "C": "Preserve args",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Without wraps, wrapper shows wrapper name.",
   "part": 7
  },
  {
   "id": 700,
   "question": "What is `__doc__` on decorated function?",
   "options": {
    "A": "Lost without wraps",
    "B": "Always preserved",
    "C": "From decorator",
    "D": "None"
   },
   "correct": "A",
   "explanation": "wraps copies __doc__ from original.",
   "part": 7
  },
  {
   "id": 701,
   "question": "What does HTTP GET do?",
   "options": {
    "A": "Retrieve resource",
    "B": "Create resource",
    "C": "Update",
    "D": "Delete"
   },
   "correct": "A",
   "explanation": "GET retrieves representation of resource.",
   "part": 8
  },
  {
   "id": 702,
   "question": "What is HTTP 200?",
   "options": {
    "A": "Success",
    "B": "Created",
    "C": "Redirect",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "200 OK indicates success.",
   "part": 8
  },
  {
   "id": 703,
   "question": "What does `requests.get(url)` return?",
   "options": {
    "A": "Response object",
    "B": "HTML string",
    "C": "Dict",
    "D": "None"
   },
   "correct": "A",
   "explanation": "Returns Response object.",
   "part": 8
  },
  {
   "id": 704,
   "question": "What is Flask routing?",
   "options": {
    "A": "URL to function mapping",
    "B": "File routing",
    "C": "API only",
    "D": "Middleware"
   },
   "correct": "A",
   "explanation": "@app.route maps URL to view function.",
   "part": 8
  },
  {
   "id": 705,
   "question": "What does FastAPI use for validation?",
   "options": {
    "A": "Pydantic",
    "B": "Marshmallow",
    "C": "Manual",
    "D": "JSON Schema"
   },
   "correct": "A",
   "explanation": "FastAPI uses Pydantic models.",
   "part": 8
  },
  {
   "id": 706,
   "question": "What is REST?",
   "options": {
    "A": "Architectural style",
    "B": "Protocol",
    "C": "Library",
    "D": "Framework"
   },
   "correct": "A",
   "explanation": "REST is architectural style for APIs.",
   "part": 8
  },
  {
   "id": 707,
   "question": "What does `json.loads(s)` do?",
   "options": {
    "A": "Parse JSON string to Python",
    "B": "Load from file",
    "C": "Serialize",
    "D": "Validate"
   },
   "correct": "A",
   "explanation": "loads parses string; load parses file.",
   "part": 8
  },
  {
   "id": 708,
   "question": "What is WSGI?",
   "options": {
    "A": "Web server gateway interface",
    "B": "Async interface",
    "C": "Protocol",
    "D": "Framework"
   },
   "correct": "A",
   "explanation": "WSGI connects web servers to Python apps.",
   "part": 8
  },
  {
   "id": 709,
   "question": "What is ASGI?",
   "options": {
    "A": "Async web interface",
    "B": "Sync only",
    "C": "WSGI replacement",
    "D": "Both A and C"
   },
   "correct": "D",
   "explanation": "ASGI supports async, WebSockets.",
   "part": 8
  },
  {
   "id": 710,
   "question": "What does SQLAlchemy provide?",
   "options": {
    "A": "ORM",
    "B": "SQL builder",
    "C": "Both",
    "D": "Migrations only"
   },
   "correct": "C",
   "explanation": "ORM and core SQL expression API.",
   "part": 8
  },
  {
   "id": 711,
   "question": "What is JWT?",
   "options": {
    "A": "JSON Web Token",
    "B": "Session cookie",
    "C": "OAuth only",
    "D": "Encryption"
   },
   "correct": "A",
   "explanation": "JWT is token format for auth.",
   "part": 8
  },
  {
   "id": 712,
   "question": "What are WebSockets?",
   "options": {
    "A": "Full-duplex communication",
    "B": "HTTP only",
    "C": "One-way",
    "D": "REST"
   },
   "correct": "A",
   "explanation": "WebSockets enable bidirectional communication.",
   "part": 8
  },
  {
   "id": 713,
   "question": "What is CORS?",
   "options": {
    "A": "Cross-Origin Resource Sharing",
    "B": "Same-origin only",
    "C": "Security block",
    "D": "Header only"
   },
   "correct": "A",
   "explanation": "CORS allows cross-origin requests.",
   "part": 8
  },
  {
   "id": 714,
   "question": "What is middleware?",
   "options": {
    "A": "Request/response processing",
    "B": "Database layer",
    "C": "Frontend",
    "D": "Cache"
   },
   "correct": "A",
   "explanation": "Middleware processes requests/responses.",
   "part": 8
  },
  {
   "id": 715,
   "question": "What is Jinja2?",
   "options": {
    "A": "Template engine",
    "B": "Framework",
    "C": "ORM",
    "D": "API"
   },
   "correct": "A",
   "explanation": "Jinja2 is templating for Python.",
   "part": 8
  },
  {
   "id": 716,
   "question": "What does HTTP POST typically do?",
   "options": {
    "A": "Create resource",
    "B": "Read",
    "C": "Delete",
    "D": "Redirect"
   },
   "correct": "A",
   "explanation": "POST creates new resources.",
   "part": 8
  },
  {
   "id": 717,
   "question": "What is HTTP 404?",
   "options": {
    "A": "Not Found",
    "B": "Error",
    "C": "Redirect",
    "D": "Forbidden"
   },
   "correct": "A",
   "explanation": "404 Not Found.",
   "part": 8
  },
  {
   "id": 718,
   "question": "What does `response.json()` return?",
   "options": {
    "A": "Parsed JSON",
    "B": "Raw bytes",
    "C": "Text",
    "D": "Headers"
   },
   "correct": "A",
   "explanation": "json() parses JSON from response.",
   "part": 8
  },
  {
   "id": 719,
   "question": "What does `@app.route('/user/<id>')` capture?",
   "options": {
    "A": "id as path param",
    "B": "Query param",
    "C": "Header",
    "D": "Body"
   },
   "correct": "A",
   "explanation": "Angle brackets capture path segment.",
   "part": 8
  },
  {
   "id": 720,
   "question": "What does FastAPI path param look like?",
   "options": {
    "A": "def get_user(id: int)",
    "B": "request.args",
    "C": "request.form",
    "D": "request.json"
   },
   "correct": "A",
   "explanation": "Path params as function arguments.",
   "part": 8
  },
  {
   "id": 721,
   "question": "What is idempotent in REST?",
   "options": {
    "A": "Same result on repeat",
    "B": "Unique each time",
    "C": "POST",
    "D": "GET only"
   },
   "correct": "A",
   "explanation": "GET, PUT, DELETE are idempotent.",
   "part": 8
  },
  {
   "id": 722,
   "question": "What does `json.dumps(obj)` return?",
   "options": {
    "A": "JSON string",
    "B": "Dict",
    "C": "Bytes",
    "D": "File"
   },
   "correct": "A",
   "explanation": "dumps serializes to string.",
   "part": 8
  },
  {
   "id": 723,
   "question": "What runs WSGI apps?",
   "options": {
    "A": "Gunicorn, uWSGI",
    "B": "Flask only",
    "C": "Django only",
    "D": "Node"
   },
   "correct": "A",
   "explanation": "Gunicorn, uWSGI are WSGI servers.",
   "part": 8
  },
  {
   "id": 724,
   "question": "What runs ASGI apps?",
   "options": {
    "A": "Uvicorn, Daphne",
    "B": "Gunicorn only",
    "C": "WSGI",
    "D": "Apache"
   },
   "correct": "A",
   "explanation": "Uvicorn, Daphne support ASGI.",
   "part": 8
  },
  {
   "id": 725,
   "question": "What does SQLAlchemy Session do?",
   "options": {
    "A": "Unit of work",
    "B": "Connection",
    "C": "Transaction",
    "D": "All"
   },
   "correct": "D",
   "explanation": "Session manages transactions and identity map.",
   "part": 8
  },
  {
   "id": 726,
   "question": "What does JWT contain?",
   "options": {
    "A": "Header, payload, signature",
    "B": "Token only",
    "C": "Cookie",
    "D": "Session ID"
   },
   "correct": "A",
   "explanation": "JWT has 3 base64 parts.",
   "part": 8
  },
  {
   "id": 727,
   "question": "What does WebSocket upgrade from?",
   "options": {
    "A": "HTTP",
    "B": "HTTPS only",
    "C": "TCP only",
    "D": "UDP"
   },
   "correct": "A",
   "explanation": "WebSocket starts as HTTP upgrade.",
   "part": 8
  },
  {
   "id": 728,
   "question": "What does CORS preflight use?",
   "options": {
    "A": "OPTIONS",
    "B": "GET",
    "C": "POST",
    "D": "HEAD"
   },
   "correct": "A",
   "explanation": "OPTIONS checks allowed methods.",
   "part": 8
  },
  {
   "id": 729,
   "question": "What does Flask blueprint do?",
   "options": {
    "A": "Modular app component",
    "B": "Route only",
    "C": "Template",
    "D": "Config"
   },
   "correct": "A",
   "explanation": "Blueprint groups routes, templates.",
   "part": 8
  },
  {
   "id": 730,
   "question": "What does `{{ var }}` in Jinja2 do?",
   "options": {
    "A": "Output variable",
    "B": "Comment",
    "C": "Block",
    "D": "Filter"
   },
   "correct": "A",
   "explanation": "Double braces output escaped variable.",
   "part": 8
  },
  {
   "id": 731,
   "question": "What is HTTP 201?",
   "options": {
    "A": "Created",
    "B": "OK",
    "C": "Accepted",
    "D": "No Content"
   },
   "correct": "A",
   "explanation": "201 Created for POST success.",
   "part": 8
  },
  {
   "id": 732,
   "question": "What does `response.status_code` contain?",
   "options": {
    "A": "HTTP status int",
    "B": "Message",
    "C": "Headers",
    "D": "Body"
   },
   "correct": "A",
   "explanation": "e.g. 200, 404, 500.",
   "part": 8
  },
  {
   "id": 733,
   "question": "What is Flask's `request.method`?",
   "options": {
    "A": "GET, POST, etc.",
    "B": "URL",
    "C": "Headers",
    "D": "Body"
   },
   "correct": "A",
   "explanation": "HTTP method of request.",
   "part": 8
  },
  {
   "id": 734,
   "question": "What does FastAPI auto-generate?",
   "options": {
    "A": "OpenAPI docs",
    "B": "HTML",
    "C": "DB schema",
    "D": "Tests"
   },
   "correct": "A",
   "explanation": "/docs and /openapi.json.",
   "part": 8
  },
  {
   "id": 735,
   "question": "What is HTTP PUT?",
   "options": {
    "A": "Replace resource",
    "B": "Create",
    "C": "Partial update",
    "D": "Delete"
   },
   "correct": "A",
   "explanation": "PUT replaces entire resource.",
   "part": 8
  },
  {
   "id": 736,
   "question": "What does `requests.post(url, json={})` set?",
   "options": {
    "A": "Content-Type: application/json",
    "B": "Accept header",
    "C": "Auth",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "json= serializes and sets header.",
   "part": 8
  },
  {
   "id": 737,
   "question": "What is PATCH?",
   "options": {
    "A": "Partial update",
    "B": "Full replace",
    "C": "Create",
    "D": "Delete"
   },
   "correct": "A",
   "explanation": "PATCH for partial updates.",
   "part": 8
  },
  {
   "id": 738,
   "question": "What does `render_template` do?",
   "options": {
    "A": "Render Jinja2 template",
    "B": "Return HTML string",
    "C": "Both",
    "D": "Load template only"
   },
   "correct": "C",
   "explanation": "Renders and returns response.",
   "part": 8
  },
  {
   "id": 739,
   "question": "What is `request.args` in Flask?",
   "options": {
    "A": "Query parameters",
    "B": "Path params",
    "C": "Headers",
    "D": "Body"
   },
   "correct": "A",
   "explanation": "URL query string ?key=val.",
   "part": 8
  },
  {
   "id": 740,
   "question": "What does `response.raise_for_status()` do?",
   "options": {
    "A": "Raise on 4xx/5xx",
    "B": "Return status",
    "C": "Check headers",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Raises HTTPError for bad status.",
   "part": 8
  },
  {
   "id": 741,
   "question": "What is HTTP 500?",
   "options": {
    "A": "Server error",
    "B": "Client error",
    "C": "Redirect",
    "D": "OK"
   },
   "correct": "A",
   "explanation": "500 Internal Server Error.",
   "part": 8
  },
  {
   "id": 742,
   "question": "What does `@app.before_request` do?",
   "options": {
    "A": "Run before each request",
    "B": "After request",
    "C": "On startup",
    "D": "On error"
   },
   "correct": "A",
   "explanation": "Flask hook before view.",
   "part": 8
  },
  {
   "id": 743,
   "question": "What is Pydantic BaseModel?",
   "options": {
    "A": "Data validation",
    "B": "ORM model",
    "C": "Template",
    "D": "Schema only"
   },
   "correct": "A",
   "explanation": "Validates and parses data.",
   "part": 8
  },
  {
   "id": 744,
   "question": "What does `json.dumps` default do with non-ASCII?",
   "options": {
    "A": "Escape as \\uXXXX",
    "B": "Error",
    "C": "Keep as-is",
    "D": "Remove"
   },
   "correct": "A",
   "explanation": "ensure_ascii=True by default.",
   "part": 8
  },
  {
   "id": 745,
   "question": "What is HTTP 301?",
   "options": {
    "A": "Permanent redirect",
    "B": "Temporary redirect",
    "C": "Found",
    "D": "Moved"
   },
   "correct": "A",
   "explanation": "301 Moved Permanently.",
   "part": 8
  },
  {
   "id": 746,
   "question": "What does `Flask(__name__)` need?",
   "options": {
    "A": "Import name for resources",
    "B": "App name",
    "C": "Nothing",
    "D": "Config"
   },
   "correct": "A",
   "explanation": "Used to find templates, static.",
   "part": 8
  },
  {
   "id": 747,
   "question": "What is `request.json` in Flask?",
   "options": {
    "A": "Parsed JSON body",
    "B": "Raw body",
    "C": "Headers",
    "D": "Query"
   },
   "correct": "A",
   "explanation": "Parsed dict from JSON body.",
   "part": 8
  },
  {
   "id": 748,
   "question": "What does `Depends()` in FastAPI do?",
   "options": {
    "A": "Dependency injection",
    "B": "Deprecate",
    "C": "Default value",
    "D": "Validate"
   },
   "correct": "A",
   "explanation": "Injects dependencies into path functions.",
   "part": 8
  },
  {
   "id": 749,
   "question": "What is REST resource?",
   "options": {
    "A": "URL-identified entity",
    "B": "File only",
    "C": "Database",
    "D": "API key"
   },
   "correct": "A",
   "explanation": "Resource identified by URI.",
   "part": 8
  },
  {
   "id": 750,
   "question": "What does `response.headers` contain?",
   "options": {
    "A": "Dict-like of headers",
    "B": "Status",
    "C": "Body",
    "D": "Cookies"
   },
   "correct": "A",
   "explanation": "Response header key-value pairs.",
   "part": 8
  },
  {
   "id": 751,
   "question": "What is HTTP 400?",
   "options": {
    "A": "Bad request",
    "B": "Unauthorized",
    "C": "Forbidden",
    "D": "Not found"
   },
   "correct": "A",
   "explanation": "400 Bad Request.",
   "part": 8
  },
  {
   "id": 752,
   "question": "What does `redirect(url)` do in Flask?",
   "options": {
    "A": "302 redirect",
    "B": "Render",
    "C": "Abort",
    "D": "Return"
   },
   "correct": "A",
   "explanation": "Returns redirect response.",
   "part": 8
  },
  {
   "id": 753,
   "question": "What is `{% for %}` in Jinja2?",
   "options": {
    "A": "Loop",
    "B": "Condition",
    "C": "Block",
    "D": "Include"
   },
   "correct": "A",
   "explanation": "For loop in template.",
   "part": 8
  },
  {
   "id": 754,
   "question": "What does `requests.Session()` provide?",
   "options": {
    "A": "Connection pooling, cookies",
    "B": "Async",
    "C": "Caching",
    "D": "Auth only"
   },
   "correct": "A",
   "explanation": "Reuses connections, persists cookies.",
   "part": 8
  },
  {
   "id": 755,
   "question": "What is HTTP 401?",
   "options": {
    "A": "Unauthorized",
    "B": "Forbidden",
    "C": "Bad request",
    "D": "Not found"
   },
   "correct": "A",
   "explanation": "401 Unauthorized.",
   "part": 8
  },
  {
   "id": 756,
   "question": "What does `make_response` in Flask do?",
   "options": {
    "A": "Create Response object",
    "B": "Send response",
    "C": "Parse request",
    "D": "Set cookie"
   },
   "correct": "A",
   "explanation": "Build custom response object.",
   "part": 8
  },
  {
   "id": 757,
   "question": "What is `Path` in FastAPI?",
   "options": {
    "A": "Path parameter validator",
    "B": "File path",
    "C": "Route",
    "D": "Import"
   },
   "correct": "A",
   "explanation": "Validates path parameters.",
   "part": 8
  },
  {
   "id": 758,
   "question": "What does `json.loads` raise for invalid JSON?",
   "options": {
    "A": "json.JSONDecodeError",
    "B": "ValueError",
    "C": "TypeError",
    "D": "KeyError"
   },
   "correct": "A",
   "explanation": "JSONDecodeError (subclass of ValueError).",
   "part": 8
  },
  {
   "id": 759,
   "question": "What is HTTP 403?",
   "options": {
    "A": "Forbidden",
    "B": "Unauthorized",
    "C": "Not found",
    "D": "Bad request"
   },
   "correct": "A",
   "explanation": "403 Forbidden.",
   "part": 8
  },
  {
   "id": 760,
   "question": "What does `url_for` in Flask do?",
   "options": {
    "A": "Generate URL for endpoint",
    "B": "Parse URL",
    "C": "Redirect",
    "D": "Validate"
   },
   "correct": "A",
   "explanation": "Reverse URL building.",
   "part": 8
  },
  {
   "id": 761,
   "question": "What is `Query` in FastAPI?",
   "options": {
    "A": "Query param validator",
    "B": "Database query",
    "C": "Search",
    "D": "Filter"
   },
   "correct": "A",
   "explanation": "Validates query parameters.",
   "part": 8
  },
  {
   "id": 762,
   "question": "What does `response.cookies` provide?",
   "options": {
    "A": "Cookie jar",
    "B": "Set-Cookie",
    "C": "Both",
    "D": "Session"
   },
   "correct": "A",
   "explanation": "Dict-like to set cookies.",
   "part": 8
  },
  {
   "id": 763,
   "question": "What is HTTP 204?",
   "options": {
    "A": "No Content",
    "B": "OK",
    "C": "Created",
    "D": "Accepted"
   },
   "correct": "A",
   "explanation": "204 No Content for success, no body.",
   "part": 8
  },
  {
   "id": 764,
   "question": "What does `g` in Flask hold?",
   "options": {
    "A": "Request-scoped data",
    "B": "Global",
    "C": "Config",
    "D": "Session"
   },
   "correct": "A",
   "explanation": "Request-scoped storage.",
   "part": 8
  },
  {
   "id": 765,
   "question": "What is `Body` in FastAPI?",
   "options": {
    "A": "Request body validator",
    "B": "Response body",
    "C": "HTML body",
    "D": "JSON only"
   },
   "correct": "A",
   "explanation": "Validates request body.",
   "part": 8
  },
  {
   "id": 766,
   "question": "What does `requests.get` timeout do?",
   "options": {
    "A": "Raise on slow response",
    "B": "Retry",
    "C": "Cancel",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Raises Timeout after N seconds.",
   "part": 8
  },
  {
   "id": 767,
   "question": "What is HTTP 302?",
   "options": {
    "A": "Temporary redirect",
    "B": "Permanent redirect",
    "C": "Found",
    "D": "Moved"
   },
   "correct": "A",
   "explanation": "302 Found (temp redirect).",
   "part": 8
  },
  {
   "id": 768,
   "question": "What does `flash(message)` do?",
   "options": {
    "A": "Store for next request",
    "B": "Print",
    "C": "Log",
    "D": "Return"
   },
   "correct": "A",
   "explanation": "Stores message in session for template.",
   "part": 8
  },
  {
   "id": 769,
   "question": "What is `Header` in FastAPI?",
   "options": {
    "A": "Header validator",
    "B": "Response header",
    "C": "Request header",
    "D": "Cookie"
   },
   "correct": "A",
   "explanation": "Extracts and validates headers.",
   "part": 8
  },
  {
   "id": 770,
   "question": "What does `json.dump` write to?",
   "options": {
    "A": "File-like object",
    "B": "String",
    "C": "Bytes",
    "D": "Path"
   },
   "correct": "A",
   "explanation": "dump to file; dumps to string.",
   "part": 8
  },
  {
   "id": 771,
   "question": "What is HTTP 405?",
   "options": {
    "A": "Method not allowed",
    "B": "Not found",
    "C": "Conflict",
    "D": "Gone"
   },
   "correct": "A",
   "explanation": "405 Method Not Allowed.",
   "part": 8
  },
  {
   "id": 772,
   "question": "What does `session` in Flask use?",
   "options": {
    "A": "Signed cookie by default",
    "B": "Database",
    "C": "Memory",
    "D": "File"
   },
   "correct": "A",
   "explanation": "Client-side session in cookie.",
   "part": 8
  },
  {
   "id": 773,
   "question": "What is SQLAlchemy Engine?",
   "options": {
    "A": "DB connection factory",
    "B": "Query builder",
    "C": "ORM",
    "D": "Migration"
   },
   "correct": "A",
   "explanation": "Engine manages connections.",
   "part": 8
  },
  {
   "id": 774,
   "question": "What does `{% if %}` do in Jinja2?",
   "options": {
    "A": "Conditional block",
    "B": "Loop",
    "C": "Include",
    "D": "Extend"
   },
   "correct": "A",
   "explanation": "Conditional rendering.",
   "part": 8
  },
  {
   "id": 775,
   "question": "What is HTTP 409?",
   "options": {
    "A": "Conflict",
    "B": "Gone",
    "C": "Length required",
    "D": "Precondition failed"
   },
   "correct": "A",
   "explanation": "409 Conflict.",
   "part": 8
  },
  {
   "id": 776,
   "question": "What does `abort(404)` do?",
   "options": {
    "A": "Raise 404 error",
    "B": "Return 404",
    "C": "Both",
    "D": "Log only"
   },
   "correct": "C",
   "explanation": "Raises exception, returns 404 response.",
   "part": 8
  },
  {
   "id": 777,
   "question": "What is `Cookie` in FastAPI?",
   "options": {
    "A": "Cookie parameter",
    "B": "Set cookie",
    "C": "Session",
    "D": "Header"
   },
   "correct": "A",
   "explanation": "Extracts cookie from request.",
   "part": 8
  },
  {
   "id": 778,
   "question": "What does `requests` need for HTTPS?",
   "options": {
    "A": "Nothing extra usually",
    "B": "SSL cert",
    "C": "Verify=False only",
    "D": "Custom adapter"
   },
   "correct": "A",
   "explanation": "Verifies certs by default.",
   "part": 8
  },
  {
   "id": 779,
   "question": "What is HTTP 422?",
   "options": {
    "A": "Unprocessable entity",
    "B": "Bad request",
    "C": "Validation error",
    "D": "Both A and C"
   },
   "correct": "D",
   "explanation": "422 for validation/semantic errors.",
   "part": 8
  },
  {
   "id": 780,
   "question": "What does `{% block %}` do?",
   "options": {
    "A": "Define template block",
    "B": "Block content",
    "C": "Include",
    "D": "Extend"
   },
   "correct": "A",
   "explanation": "Defines overridable block.",
   "part": 8
  },
  {
   "id": 781,
   "question": "What is SQLAlchemy declarative_base?",
   "options": {
    "A": "Base for ORM models",
    "B": "DB base",
    "C": "Schema",
    "D": "Migration"
   },
   "correct": "A",
   "explanation": "Base class for mapped classes.",
   "part": 8
  },
  {
   "id": 782,
   "question": "What does `{% include 'x.html' %}` do?",
   "options": {
    "A": "Include template",
    "B": "Import",
    "C": "Extend",
    "D": "Block"
   },
   "correct": "A",
   "explanation": "Embeds another template.",
   "part": 8
  },
  {
   "id": 783,
   "question": "What is HTTP 429?",
   "options": {
    "A": "Too many requests",
    "B": "Upgrade required",
    "C": "Unavailable",
    "D": "Timeout"
   },
   "correct": "A",
   "explanation": "429 Rate limit exceeded.",
   "part": 8
  },
  {
   "id": 784,
   "question": "What does `request.form` contain?",
   "options": {
    "A": "Form data",
    "B": "JSON",
    "C": "Query",
    "D": "Headers"
   },
   "correct": "A",
   "explanation": "POST form key-value pairs.",
   "part": 8
  },
  {
   "id": 785,
   "question": "What is `BackgroundTasks` in FastAPI?",
   "options": {
    "A": "Run after response",
    "B": "Async task",
    "C": "Thread pool",
    "D": "Queue"
   },
   "correct": "A",
   "explanation": "Run tasks after sending response.",
   "part": 8
  },
  {
   "id": 786,
   "question": "What does `|safe` in Jinja2 do?",
   "options": {
    "A": "Mark as safe HTML",
    "B": "Escape",
    "C": "Filter",
    "D": "Validate"
   },
   "correct": "A",
   "explanation": "Disable auto-escaping (use carefully).",
   "part": 8
  },
  {
   "id": 787,
   "question": "What is HTTP 503?",
   "options": {
    "A": "Service unavailable",
    "B": "Gateway timeout",
    "C": "Bad gateway",
    "D": "Internal error"
   },
   "correct": "A",
   "explanation": "503 Service Unavailable.",
   "part": 8
  },
  {
   "id": 788,
   "question": "How does Flask store session data by default?",
   "options": {
    "A": "Signed cookie (client-side)",
    "B": "Server-side database",
    "C": "Redis only",
    "D": "File system"
   },
   "correct": "A",
   "explanation": "Flask uses signed cookies for session by default.",
   "part": 8
  },
  {
   "id": 789,
   "question": "What does FastAPI's `response_model` parameter do?",
   "options": {
    "A": "Validates request body",
    "B": "Serializes and documents response schema",
    "C": "Sets Content-Type only",
    "D": "Caches response"
   },
   "correct": "B",
   "explanation": "response_model serializes output and appears in OpenAPI docs.",
   "part": 8
  },
  {
   "id": 790,
   "question": "What does the Cache-Control HTTP header control?",
   "options": {
    "A": "Request body size",
    "B": "Authentication",
    "C": "Caching behavior (max-age, no-cache, etc.)",
    "D": "CORS policy"
   },
   "correct": "C",
   "explanation": "Cache-Control directs how responses may be cached.",
   "part": 8
  },
  {
   "id": 791,
   "question": "What is CORS (Cross-Origin Resource Sharing)?",
   "options": {
    "A": "A database protocol",
    "B": "A caching strategy",
    "C": "A security feature",
    "D": "A mechanism allowing cross-origin HTTP requests"
   },
   "correct": "D",
   "explanation": "CORS lets browsers make cross-origin requests when allowed by server.",
   "part": 8
  },
  {
   "id": 792,
   "question": "Which is a common REST API versioning strategy?",
   "options": {
    "A": "URL path (/api/v1/users)",
    "B": "Query param only",
    "C": "Header only",
    "D": "No versioning"
   },
   "correct": "A",
   "explanation": "URL path versioning is widely used and explicit.",
   "part": 8
  },
  {
   "id": 793,
   "question": "How does GraphQL differ from REST?",
   "options": {
    "A": "GraphQL uses only GET",
    "B": "Client requests exact fields; single endpoint",
    "C": "REST has no schema",
    "D": "GraphQL cannot do mutations"
   },
   "correct": "B",
   "explanation": "GraphQL lets clients specify fields; REST returns fixed resources.",
   "part": 8
  },
  {
   "id": 794,
   "question": "What are the main phases of a WebSocket connection?",
   "options": {
    "A": "Connect only",
    "B": "Request and response",
    "C": "HTTP upgrade, then bidirectional messaging, then close",
    "D": "Polling loop"
   },
   "correct": "C",
   "explanation": "WebSocket upgrades from HTTP, then sends messages both ways until closed.",
   "part": 8
  },
  {
   "id": 795,
   "question": "What relationship types does SQLAlchemy support?",
   "options": {
    "A": "One-to-one only",
    "B": "Many-to-many only",
    "C": "One-to-one and one-to-many only",
    "D": "One-to-one, one-to-many, many-to-many"
   },
   "correct": "D",
   "explanation": "SQLAlchemy supports relationship, backref, and association tables.",
   "part": 8
  },
  {
   "id": 796,
   "question": "What is database connection pooling?",
   "options": {
    "A": "Reusing a pool of connections instead of creating new ones",
    "B": "Storing queries",
    "C": "Caching results",
    "D": "Load balancing only"
   },
   "correct": "A",
   "explanation": "Pooling reuses connections to reduce overhead.",
   "part": 8
  },
  {
   "id": 797,
   "question": "How is API rate limiting typically implemented?",
   "options": {
    "A": "Client-side only",
    "B": "Token bucket, sliding window, or fixed window per client",
    "C": "Per-request encryption",
    "D": "Database triggers"
   },
   "correct": "B",
   "explanation": "Rate limiting uses algorithms like token bucket or sliding window.",
   "part": 8
  },
  {
   "id": 798,
   "question": "Which are OAuth2 grant types?",
   "options": {
    "A": "GET and POST only",
    "B": "Authorization code and client credentials only",
    "C": "Authorization code, client credentials, password, implicit",
    "D": "JWT only"
   },
   "correct": "C",
   "explanation": "OAuth2 defines authorization code, client credentials, password, and implicit grants.",
   "part": 8
  },
  {
   "id": 799,
   "question": "How does HTTP/2 differ from HTTP/1.1?",
   "options": {
    "A": "HTTP/2 is slower",
    "B": "HTTP/2 uses plain text",
    "C": "HTTP/2 has no multiplexing",
    "D": "Multiplexing, header compression, binary framing"
   },
   "correct": "D",
   "explanation": "HTTP/2 multiplexes streams, compresses headers, uses binary framing.",
   "part": 8
  },
  {
   "id": 800,
   "question": "What are common API pagination patterns?",
   "options": {
    "A": "Offset/limit and cursor-based",
    "B": "Random access only",
    "C": "Full dump only",
    "D": "No pagination"
   },
   "correct": "A",
   "explanation": "Offset/limit (page, size) and cursor-based (next_token) are common.",
   "part": 8
  },
  {
   "id": 801,
   "question": "What does `np.array([1,2,3])` create?",
   "options": {
    "A": "NumPy array",
    "B": "List",
    "C": "Tuple",
    "D": "Series"
   },
   "correct": "A",
   "explanation": "array() creates ndarray.",
   "part": 9
  },
  {
   "id": 802,
   "question": "What is `arr.dtype`?",
   "options": {
    "A": "Element type",
    "B": "Shape",
    "C": "Size",
    "D": "Length"
   },
   "correct": "A",
   "explanation": "dtype is the data type of elements.",
   "part": 9
  },
  {
   "id": 803,
   "question": "What is NumPy broadcasting?",
   "options": {
    "A": "Shape expansion for ops",
    "B": "Copy only",
    "C": "Resize",
    "D": "Iteration"
   },
   "correct": "A",
   "explanation": "Broadcasting expands dimensions for operations.",
   "part": 9
  },
  {
   "id": 804,
   "question": "What does `arr[1:3]` on 1D array return?",
   "options": {
    "A": "Slice of array",
    "B": "Single element",
    "C": "Copy",
    "D": "View typically"
   },
   "correct": "D",
   "explanation": "Slicing returns view (no copy).",
   "part": 9
  },
  {
   "id": 805,
   "question": "What are vectorized operations?",
   "options": {
    "A": "Element-wise without Python loop",
    "B": "Loop-based",
    "C": "Single element",
    "D": "String ops"
   },
   "correct": "A",
   "explanation": "Vectorized uses C-level loops.",
   "part": 9
  },
  {
   "id": 806,
   "question": "What does `np.dot(a, b)` do?",
   "options": {
    "A": "Matrix multiplication",
    "B": "Element-wise multiply",
    "C": "Dot product",
    "D": "A and C"
   },
   "correct": "D",
   "explanation": "dot does dot product / matrix multiply.",
   "part": 9
  },
  {
   "id": 807,
   "question": "What is `pd.Series`?",
   "options": {
    "A": "1D labeled array",
    "B": "2D only",
    "C": "List wrapper",
    "D": "Dict"
   },
   "correct": "A",
   "explanation": "Series is 1D with index.",
   "part": 9
  },
  {
   "id": 808,
   "question": "What is `pd.DataFrame`?",
   "options": {
    "A": "2D labeled structure",
    "B": "Matrix",
    "C": "Table",
    "D": "All"
   },
   "correct": "A",
   "explanation": "DataFrame has rows and columns with labels.",
   "part": 9
  },
  {
   "id": 809,
   "question": "What does `df.groupby('col')` return?",
   "options": {
    "A": "GroupBy object",
    "B": "Grouped DataFrame",
    "C": "List of groups",
    "D": "Aggregated result"
   },
   "correct": "A",
   "explanation": "groupby returns GroupBy object.",
   "part": 9
  },
  {
   "id": 810,
   "question": "What does `pd.merge(left, right)` do?",
   "options": {
    "A": "Join DataFrames",
    "B": "Concatenate",
    "C": "Append",
    "D": "Replace"
   },
   "correct": "A",
   "explanation": "merge does SQL-like join.",
   "part": 9
  },
  {
   "id": 811,
   "question": "What does `df.pivot_table` do?",
   "options": {
    "A": "Reshape with aggregation",
    "B": "Transpose only",
    "C": "Sort",
    "D": "Filter"
   },
   "correct": "A",
   "explanation": "pivot_table reshapes with aggregation.",
   "part": 9
  },
  {
   "id": 812,
   "question": "What does `pd.to_datetime` do?",
   "options": {
    "A": "Parse to datetime",
    "B": "Format only",
    "C": "Current time",
    "D": "Timestamp"
   },
   "correct": "A",
   "explanation": "Converts to datetime64.",
   "part": 9
  },
  {
   "id": 813,
   "question": "What does `plt.plot(x, y)` do?",
   "options": {
    "A": "Line plot",
    "B": "Scatter",
    "C": "Bar",
    "D": "Histogram"
   },
   "correct": "A",
   "explanation": "plot creates line plot.",
   "part": 9
  },
  {
   "id": 814,
   "question": "What is data cleaning?",
   "options": {
    "A": "Fix missing, invalid data",
    "B": "Delete all",
    "C": "Format only",
    "D": "Visualize"
   },
   "correct": "A",
   "explanation": "Cleaning handles missing, outliers, types.",
   "part": 9
  },
  {
   "id": 815,
   "question": "What does `df.isna()` return?",
   "options": {
    "A": "Bool mask of NaN",
    "B": "Count of NaN",
    "C": "Dropped rows",
    "D": "Filled values"
   },
   "correct": "A",
   "explanation": "isna() returns boolean DataFrame.",
   "part": 9
  },
  {
   "id": 816,
   "question": "What does `pd.read_csv` return?",
   "options": {
    "A": "DataFrame",
    "B": "String",
    "C": "List",
    "D": "File"
   },
   "correct": "A",
   "explanation": "read_csv parses CSV to DataFrame.",
   "part": 9
  },
  {
   "id": 817,
   "question": "What does `pd.read_json` do?",
   "options": {
    "A": "Parse JSON to DataFrame",
    "B": "Write JSON",
    "C": "Validate JSON",
    "D": "Load string"
   },
   "correct": "A",
   "explanation": "read_json parses JSON to DataFrame.",
   "part": 9
  },
  {
   "id": 818,
   "question": "What is scikit-learn?",
   "options": {
    "A": "ML library",
    "B": "Data only",
    "C": "Visualization",
    "D": "Database"
   },
   "correct": "A",
   "explanation": "sklearn provides ML algorithms.",
   "part": 9
  },
  {
   "id": 819,
   "question": "What does `arr.shape` return?",
   "options": {
    "A": "Tuple of dimensions",
    "B": "Int",
    "C": "List",
    "D": "Array"
   },
   "correct": "A",
   "explanation": "shape is (n_rows, n_cols) for 2D.",
   "part": 9
  },
  {
   "id": 820,
   "question": "What does `df.fillna(0)` do?",
   "options": {
    "A": "Replace NaN with 0",
    "B": "Drop NaN",
    "C": "Count NaN",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "fillna fills missing values.",
   "part": 9
  },
  {
   "id": 821,
   "question": "What does `np.zeros((2,3))` create?",
   "options": {
    "A": "2x3 array of zeros",
    "B": "2 or 3 zeros",
    "C": "List",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "zeros(shape) creates array of zeros.",
   "part": 9
  },
  {
   "id": 822,
   "question": "What is `arr.T`?",
   "options": {
    "A": "Transpose",
    "B": "Type",
    "C": "Total",
    "D": "Transform"
   },
   "correct": "A",
   "explanation": "T is transpose attribute.",
   "part": 9
  },
  {
   "id": 823,
   "question": "What does `df.dropna()` do?",
   "options": {
    "A": "Drop rows/cols with NaN",
    "B": "Fill NaN",
    "C": "Count NaN",
    "D": "Replace NaN"
   },
   "correct": "A",
   "explanation": "dropna removes missing values.",
   "part": 9
  },
  {
   "id": 824,
   "question": "What does `np.arange(0, 10, 2)` produce?",
   "options": {
    "A": "[0,2,4,6,8]",
    "B": "[0,2,4,6,8,10]",
    "C": "range object",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "arange with step 2.",
   "part": 9
  },
  {
   "id": 825,
   "question": "What is `df.loc`?",
   "options": {
    "A": "Label-based indexing",
    "B": "Position-based",
    "C": "Boolean",
    "D": "Slice"
   },
   "correct": "A",
   "explanation": "loc uses labels.",
   "part": 9
  },
  {
   "id": 826,
   "question": "What does `np.linspace(0, 1, 5)` produce?",
   "options": {
    "A": "5 evenly spaced values",
    "B": "5 random",
    "C": "[0,1]",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "linspace(0,1,5) = [0, 0.25, 0.5, 0.75, 1].",
   "part": 9
  },
  {
   "id": 827,
   "question": "What does `df.iloc` use?",
   "options": {
    "A": "Integer position",
    "B": "Labels",
    "C": "Boolean",
    "D": "Names"
   },
   "correct": "A",
   "explanation": "iloc uses integer indices.",
   "part": 9
  },
  {
   "id": 828,
   "question": "What does `arr.reshape(2, -1)` mean?",
   "options": {
    "A": "2 rows, infer cols",
    "B": "2 cols",
    "C": "Error",
    "D": "Flatten"
   },
   "correct": "A",
   "explanation": "1 infers from size.",
   "part": 9
  },
  {
   "id": 829,
   "question": "What does `df.agg(['mean','sum'])` do?",
   "options": {
    "A": "Multiple aggregations",
    "B": "Single agg",
    "C": "Filter",
    "D": "Transform"
   },
   "correct": "A",
   "explanation": "agg applies multiple functions.",
   "part": 9
  },
  {
   "id": 830,
   "question": "What does `np.concatenate([a,b])` do?",
   "options": {
    "A": "Join arrays",
    "B": "Merge",
    "C": "Append",
    "D": "Stack"
   },
   "correct": "A",
   "explanation": "Concatenate along axis (default 0).",
   "part": 9
  },
  {
   "id": 831,
   "question": "What is `df.duplicated()`?",
   "options": {
    "A": "Bool mask of duplicates",
    "B": "Drop duplicates",
    "C": "Count duplicates",
    "D": "Unique values"
   },
   "correct": "A",
   "explanation": "Returns boolean Series.",
   "part": 9
  },
  {
   "id": 832,
   "question": "What does `arr.astype(float)` do?",
   "options": {
    "A": "Convert dtype",
    "B": "Round",
    "C": "Cast only",
    "D": "Copy"
   },
   "correct": "A",
   "explanation": "Converts to float dtype.",
   "part": 9
  },
  {
   "id": 833,
   "question": "What does `df.value_counts()` return?",
   "options": {
    "A": "Count per unique value",
    "B": "Total count",
    "C": "Unique values",
    "D": "Frequency"
   },
   "correct": "A",
   "explanation": "Series of counts per value.",
   "part": 9
  },
  {
   "id": 834,
   "question": "What does `np.where(cond, x, y)` do?",
   "options": {
    "A": "Choose x or y by cond",
    "B": "Filter",
    "C": "Find indices",
    "D": "Replace"
   },
   "correct": "A",
   "explanation": "Where cond True: x, else y.",
   "part": 9
  },
  {
   "id": 835,
   "question": "What is `df.describe()`?",
   "options": {
    "A": "Summary statistics",
    "B": "First rows",
    "C": "Info",
    "D": "Shape"
   },
   "correct": "A",
   "explanation": "count, mean, std, min, max, etc.",
   "part": 9
  },
  {
   "id": 836,
   "question": "What does `arr.flatten()` return?",
   "options": {
    "A": "1D copy",
    "B": "View",
    "C": "Same shape",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "flatten returns 1D copy.",
   "part": 9
  },
  {
   "id": 837,
   "question": "What does `df.sort_values('col')` do?",
   "options": {
    "A": "Sort by column",
    "B": "Sort index",
    "C": "Reorder",
    "D": "Rank"
   },
   "correct": "A",
   "explanation": "Sorts rows by column values.",
   "part": 9
  },
  {
   "id": 838,
   "question": "What does `np.unique(arr)` return?",
   "options": {
    "A": "Sorted unique values",
    "B": "Counts",
    "C": "Indices",
    "D": "First occurrence"
   },
   "correct": "A",
   "explanation": "unique returns sorted unique elements.",
   "part": 9
  },
  {
   "id": 839,
   "question": "What is `df.columns`?",
   "options": {
    "A": "Column index",
    "B": "Column names",
    "C": "Both",
    "D": "Row names"
   },
   "correct": "C",
   "explanation": "Index of column labels.",
   "part": 9
  },
  {
   "id": 840,
   "question": "What does `arr.sum(axis=1)` do?",
   "options": {
    "A": "Sum across columns",
    "B": "Sum across rows",
    "C": "Total sum",
    "D": "Sum axis"
   },
   "correct": "A",
   "explanation": "axis=1: sum each row.",
   "part": 9
  },
  {
   "id": 841,
   "question": "What does `df.rename(columns={})` do?",
   "options": {
    "A": "Rename columns",
    "B": "Rename index",
    "C": "Replace values",
    "D": "Sort"
   },
   "correct": "A",
   "explanation": "Maps old names to new.",
   "part": 9
  },
  {
   "id": 842,
   "question": "What does `np.random.rand(2,3)` produce?",
   "options": {
    "A": "2x3 random [0,1)",
    "B": "2 or 3 random",
    "C": "Integers",
    "D": "Normal dist"
   },
   "correct": "A",
   "explanation": "rand(d0,d1,...) uniform [0,1).",
   "part": 9
  },
  {
   "id": 843,
   "question": "What is `df.index`?",
   "options": {
    "A": "Row labels",
    "B": "Column labels",
    "C": "Position",
    "D": "Names"
   },
   "correct": "A",
   "explanation": "Index of row labels.",
   "part": 9
  },
  {
   "id": 844,
   "question": "What does `arr.max()` return?",
   "options": {
    "A": "Max value",
    "B": "Index of max",
    "C": "Row max",
    "D": "Column max"
   },
   "correct": "A",
   "explanation": "max() returns maximum element.",
   "part": 9
  },
  {
   "id": 845,
   "question": "What does `df.apply(func)` do?",
   "options": {
    "A": "Apply func to each col/row",
    "B": "Apply to whole",
    "C": "Map",
    "D": "Transform"
   },
   "correct": "A",
   "explanation": "apply runs function on axis.",
   "part": 9
  },
  {
   "id": 846,
   "question": "What does `np.eye(3)` create?",
   "options": {
    "A": "3x3 identity",
    "B": "3 elements",
    "C": "Eye shape",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Identity matrix.",
   "part": 9
  },
  {
   "id": 847,
   "question": "What does `df.query('col > 0')` do?",
   "options": {
    "A": "Filter rows",
    "B": "Select col",
    "C": "Query DB",
    "D": "Sort"
   },
   "correct": "A",
   "explanation": "Filter using expression string.",
   "part": 9
  },
  {
   "id": 848,
   "question": "What does `arr.mean()` return?",
   "options": {
    "A": "Mean of elements",
    "B": "Median",
    "C": "Mode",
    "D": "Std"
   },
   "correct": "A",
   "explanation": "Arithmetic mean.",
   "part": 9
  },
  {
   "id": 849,
   "question": "What is `df.pivot`?",
   "options": {
    "A": "Reshape without agg",
    "B": "With aggregation",
    "C": "Transpose",
    "D": "Melt"
   },
   "correct": "A",
   "explanation": "pivot reshapes; pivot_table aggregates.",
   "part": 9
  },
  {
   "id": 850,
   "question": "What does `np.vstack([a,b])` do?",
   "options": {
    "A": "Stack vertically",
    "B": "Stack horizontally",
    "C": "Concatenate",
    "D": "Merge"
   },
   "correct": "A",
   "explanation": "Vertical stack (rows).",
   "part": 9
  },
  {
   "id": 851,
   "question": "What does `df.melt` do?",
   "options": {
    "A": "Wide to long",
    "B": "Long to wide",
    "C": "Merge",
    "D": "Reshape"
   },
   "correct": "A",
   "explanation": "Unpivots columns to rows.",
   "part": 9
  },
  {
   "id": 852,
   "question": "What does `arr.std()` return?",
   "options": {
    "A": "Standard deviation",
    "B": "Variance",
    "C": "Mean",
    "D": "Range"
   },
   "correct": "A",
   "explanation": "Sample std by default.",
   "part": 9
  },
  {
   "id": 853,
   "question": "What does `df.join(other)` do?",
   "options": {
    "A": "Join on index",
    "B": "Merge on column",
    "C": "Concatenate",
    "D": "Append"
   },
   "correct": "A",
   "explanation": "Join on index by default.",
   "part": 9
  },
  {
   "id": 854,
   "question": "What does `np.hstack([a,b])` do?",
   "options": {
    "A": "Stack horizontally",
    "B": "Stack vertically",
    "C": "Concatenate axis=0",
    "D": "Merge"
   },
   "correct": "A",
   "explanation": "Horizontal stack (columns).",
   "part": 9
  },
  {
   "id": 855,
   "question": "What does `df.assign(new_col=...)` do?",
   "options": {
    "A": "Add column, return new df",
    "B": "Modify in place",
    "C": "Replace",
    "D": "Append"
   },
   "correct": "A",
   "explanation": "Returns new DataFrame with column.",
   "part": 9
  },
  {
   "id": 856,
   "question": "What does `arr.argmax()` return?",
   "options": {
    "A": "Index of max",
    "B": "Max value",
    "C": "Indices",
    "D": "Position"
   },
   "correct": "A",
   "explanation": "Flat index of maximum.",
   "part": 9
  },
  {
   "id": 857,
   "question": "What does `df.corr()` compute?",
   "options": {
    "A": "Correlation matrix",
    "B": "Covariance",
    "C": "Count",
    "D": "Sum"
   },
   "correct": "A",
   "explanation": "Pearson correlation between columns.",
   "part": 9
  },
  {
   "id": 858,
   "question": "What does `np.clip(arr, 0, 1)` do?",
   "options": {
    "A": "Clip values to [0,1]",
    "B": "Remove outliers",
    "C": "Round",
    "D": "Replace"
   },
   "correct": "A",
   "explanation": "Values outside range become bound.",
   "part": 9
  },
  {
   "id": 859,
   "question": "What does `df.head()` return?",
   "options": {
    "A": "First 5 rows",
    "B": "First row",
    "C": "Last 5",
    "D": "Random 5"
   },
   "correct": "A",
   "explanation": "Default 5 rows.",
   "part": 9
  },
  {
   "id": 860,
   "question": "What does `arr[::-1]` do on 1D?",
   "options": {
    "A": "Reverse",
    "B": "Copy",
    "C": "Sort",
    "D": "Flip"
   },
   "correct": "A",
   "explanation": "Step -1 reverses.",
   "part": 9
  },
  {
   "id": 861,
   "question": "What does `df.tail(3)` return?",
   "options": {
    "A": "Last 3 rows",
    "B": "First 3",
    "C": "Random 3",
    "D": "3 cols"
   },
   "correct": "A",
   "explanation": "Last n rows.",
   "part": 9
  },
  {
   "id": 862,
   "question": "What does `np.percentile(arr, 50)` approximate?",
   "options": {
    "A": "Median",
    "B": "Mean",
    "C": "50th value",
    "D": "Midpoint"
   },
   "correct": "A",
   "explanation": "50th percentile ≈ median.",
   "part": 9
  },
  {
   "id": 863,
   "question": "What does `df.reset_index()` do?",
   "options": {
    "A": "Index to column, new default index",
    "B": "Clear index",
    "C": "Sort index",
    "D": "Set index"
   },
   "correct": "A",
   "explanation": "Moves index to column.",
   "part": 9
  },
  {
   "id": 864,
   "question": "What does `arr.ravel()` return?",
   "options": {
    "A": "1D view if possible",
    "B": "Always copy",
    "C": "2D",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Flattened view when possible.",
   "part": 9
  },
  {
   "id": 865,
   "question": "What does `df.set_index('col')` do?",
   "options": {
    "A": "Use col as index",
    "B": "Add index",
    "C": "Replace",
    "D": "Sort"
   },
   "correct": "A",
   "explanation": "Sets column as index.",
   "part": 9
  },
  {
   "id": 866,
   "question": "What does `np.nan` represent?",
   "options": {
    "A": "Not a Number",
    "B": "None",
    "C": "Zero",
    "D": "Missing"
   },
   "correct": "A",
   "explanation": "IEEE 754 NaN.",
   "part": 9
  },
  {
   "id": 867,
   "question": "What does `df.dtypes` show?",
   "options": {
    "A": "Column dtypes",
    "B": "Shape",
    "C": "Memory",
    "D": "Index"
   },
   "correct": "A",
   "explanation": "Data type per column.",
   "part": 9
  },
  {
   "id": 868,
   "question": "What does `arr.copy()` do?",
   "options": {
    "A": "Deep copy",
    "B": "View",
    "C": "Reference",
    "D": "Shallow"
   },
   "correct": "A",
   "explanation": "Copy of array.",
   "part": 9
  },
  {
   "id": 869,
   "question": "What does `df.merge` default join?",
   "options": {
    "A": "Inner",
    "B": "Left",
    "C": "Outer",
    "D": "Right"
   },
   "correct": "A",
   "explanation": "merge defaults to inner join.",
   "part": 9
  },
  {
   "id": 870,
   "question": "What does `np.all(arr)` return?",
   "options": {
    "A": "True if all truthy",
    "B": "First element",
    "C": "Count",
    "D": "Any"
   },
   "correct": "A",
   "explanation": "Logical AND over elements.",
   "part": 9
  },
  {
   "id": 871,
   "question": "What does `df.replace(old, new)` do?",
   "options": {
    "A": "Replace values",
    "B": "Rename",
    "C": "Substitute",
    "D": "Update"
   },
   "correct": "A",
   "explanation": "Replaces old with new.",
   "part": 9
  },
  {
   "id": 872,
   "question": "What does `arr.any()` return?",
   "options": {
    "A": "True if any truthy",
    "B": "First truthy",
    "C": "Count",
    "D": "All"
   },
   "correct": "A",
   "explanation": "Logical OR over elements.",
   "part": 9
  },
  {
   "id": 873,
   "question": "What does `df.nunique()` return?",
   "options": {
    "A": "Count of unique per column",
    "B": "Unique values",
    "C": "Total unique",
    "D": "Distinct"
   },
   "correct": "A",
   "explanation": "Number of unique per column.",
   "part": 9
  },
  {
   "id": 874,
   "question": "What does `np.expand_dims(arr, axis)` do?",
   "options": {
    "A": "Add dimension",
    "B": "Remove dimension",
    "C": "Resize",
    "D": "Broadcast"
   },
   "correct": "A",
   "explanation": "Inserts new axis.",
   "part": 9
  },
  {
   "id": 875,
   "question": "What does `df.sample(n=5)` do?",
   "options": {
    "A": "Random 5 rows",
    "B": "First 5",
    "C": "Last 5",
    "D": "Every 5th"
   },
   "correct": "A",
   "explanation": "Random sample of rows.",
   "part": 9
  },
  {
   "id": 876,
   "question": "What does `np.squeeze(arr)` do?",
   "options": {
    "A": "Remove length-1 dims",
    "B": "Add dims",
    "C": "Flatten",
    "D": "Reshape"
   },
   "correct": "A",
   "explanation": "Removes singleton dimensions.",
   "part": 9
  },
  {
   "id": 877,
   "question": "What does `df.info()` show?",
   "options": {
    "A": "Dtypes, non-null counts",
    "B": "Summary stats",
    "C": "First rows",
    "D": "Shape only"
   },
   "correct": "A",
   "explanation": "Column dtypes, non-null, memory.",
   "part": 9
  },
  {
   "id": 878,
   "question": "What does `np.tile(arr, (2,3))` do?",
   "options": {
    "A": "Repeat arr 2x3",
    "B": "Resize",
    "C": "Stack",
    "D": "Copy"
   },
   "correct": "A",
   "explanation": "Repeats array in block pattern.",
   "part": 9
  },
  {
   "id": 879,
   "question": "What does `df.drop(columns=['x'])` do?",
   "options": {
    "A": "Remove column",
    "B": "Drop rows",
    "C": "Delete",
    "D": "Filter"
   },
   "correct": "A",
   "explanation": "Drops specified columns.",
   "part": 9
  },
  {
   "id": 880,
   "question": "What does `np.logical_and(a, b)` return?",
   "options": {
    "A": "Element-wise AND",
    "B": "Single bool",
    "C": "Array or scalar",
    "D": "Error"
   },
   "correct": "A",
   "explanation": "Logical AND element-wise.",
   "part": 9
  },
  {
   "id": 881,
   "question": "What does `df.astype({'col': int})` do?",
   "options": {
    "A": "Convert column dtype",
    "B": "Convert all",
    "C": "Assert type",
    "D": "Validate"
   },
   "correct": "A",
   "explanation": "Converts specified columns.",
   "part": 9
  },
  {
   "id": 882,
   "question": "What does `np.broadcast_arrays(a, b)` return?",
   "options": {
    "A": "List of broadcasted arrays",
    "B": "Single array",
    "C": "Error if incompatible",
    "D": "Stacked"
   },
   "correct": "A",
   "explanation": "Returns arrays broadcast to same shape.",
   "part": 9
  },
  {
   "id": 883,
   "question": "What does `df.explode('col')` do?",
   "options": {
    "A": "Expand list col to rows",
    "B": "Split",
    "C": "Flatten",
    "D": "Unnest"
   },
   "correct": "A",
   "explanation": "Each list element becomes a row.",
   "part": 9
  },
  {
   "id": 884,
   "question": "What does `np.einsum` do?",
   "options": {
    "A": "Einstein summation",
    "B": "Element sum",
    "C": "Sum axis",
    "D": "Dot product"
   },
   "correct": "A",
   "explanation": "Generalized tensor operations.",
   "part": 9
  },
  {
   "id": 885,
   "question": "What does `df.at[i, 'col']` do?",
   "options": {
    "A": "Fast scalar access",
    "B": "Slice",
    "C": "Boolean",
    "D": "Label"
   },
   "correct": "A",
   "explanation": "Single value by label (fast).",
   "part": 9
  },
  {
   "id": 886,
   "question": "What does `np.cumsum(arr)` return?",
   "options": {
    "A": "Cumulative sum",
    "B": "Total sum",
    "C": "Running mean",
    "D": "Prefix sum"
   },
   "correct": "A",
   "explanation": "Cumulative sum array.",
   "part": 9
  },
  {
   "id": 887,
   "question": "What does `df.memory_usage()` return?",
   "options": {
    "A": "Bytes per column",
    "B": "Total bytes",
    "C": "MB",
    "D": "Rows"
   },
   "correct": "A",
   "explanation": "Memory per column.",
   "part": 9
  },
  {
   "id": 888,
   "question": "What is the difference between Pandas `apply()` and `map()`?",
   "options": {
    "A": "apply works on DataFrame/Series; map is for Series element-wise",
    "B": "They are identical",
    "C": "map is faster for DataFrames",
    "D": "apply is deprecated"
   },
   "correct": "A",
   "explanation": "apply runs on axis; map is Series element-wise mapping.",
   "part": 9
  },
  {
   "id": 889,
   "question": "What does `np.where(condition, x, y)` return?",
   "options": {
    "A": "Indices where condition is True",
    "B": "Array with x where condition True, else y",
    "C": "Boolean mask only",
    "D": "Single value"
   },
   "correct": "B",
   "explanation": "where returns element from x or y based on condition.",
   "part": 9
  },
  {
   "id": 890,
   "question": "What does Pandas `rolling(window=5)` do?",
   "options": {
    "A": "Reshape to 5 columns",
    "B": "Shift by 5 rows",
    "C": "Sliding window of size 5 for aggregation",
    "D": "Sample every 5th row"
   },
   "correct": "C",
   "explanation": "rolling creates sliding windows for mean, sum, etc.",
   "part": 9
  },
  {
   "id": 891,
   "question": "What does `np.random.seed(42)` do?",
   "options": {
    "A": "Sets random state for reproducibility",
    "B": "Generates 42 random numbers",
    "C": "Seeds only for integers",
    "D": "Deprecated in NumPy"
   },
   "correct": "A",
   "explanation": "seed makes random sequences reproducible (use Generator in modern NumPy).",
   "part": 9
  },
  {
   "id": 892,
   "question": "What is Pandas categorical dtype?",
   "options": {
    "A": "Memory-efficient storage for repeated categories",
    "B": "Continuous numeric type",
    "C": "Datetime type",
    "D": "String type"
   },
   "correct": "A",
   "explanation": "Categorical stores categories as codes, saving memory.",
   "part": 9
  },
  {
   "id": 893,
   "question": "What do `np.save` and `np.load` do?",
   "options": {
    "A": "Save/load JSON",
    "B": "Save/load arrays in binary .npy format",
    "C": "Save to CSV",
    "D": "Compress only"
   },
   "correct": "B",
   "explanation": "save/load use NumPy binary format for arrays.",
   "part": 9
  },
  {
   "id": 894,
   "question": "How does Pandas handle time zones?",
   "options": {
    "A": "Ignores time zones",
    "B": "Uses `tz_localize` and `tz_convert`",
    "C": "Only UTC",
    "D": "No support"
   },
   "correct": "B",
   "explanation": "tz_localize assigns TZ; tz_convert converts between TZs.",
   "part": 9
  },
  {
   "id": 895,
   "question": "What does `plt.subplots(2, 3)` return?",
   "options": {
    "A": "Single axes",
    "B": "2x3 grid of axes and figure",
    "C": "List of figures",
    "D": "6 separate figures"
   },
   "correct": "B",
   "explanation": "subplots(nrows, ncols) returns (fig, axes_array).",
   "part": 9
  },
  {
   "id": 896,
   "question": "What does Pandas `.str` accessor provide?",
   "options": {
    "A": "Vectorized string methods on Series",
    "B": "Numeric operations",
    "C": "Date operations",
    "D": "Index access"
   },
   "correct": "A",
   "explanation": ".str gives vectorized string methods (lower, split, replace, etc.).",
   "part": 9
  },
  {
   "id": 897,
   "question": "What does NumPy `einsum` do?",
   "options": {
    "A": "Element-wise sum",
    "B": "Einstein summation for tensor operations",
    "C": "Sum along axis",
    "D": "Matrix inverse"
   },
   "correct": "B",
   "explanation": "einsum expresses dot, outer, trace, etc. via subscript notation.",
   "part": 9
  },
  {
   "id": 898,
   "question": "What does `pd.crosstab` compute?",
   "options": {
    "A": "Correlation matrix",
    "B": "Pivot table",
    "C": "Cross-tabulation (frequency table) of two or more factors",
    "D": "Merge"
   },
   "correct": "C",
   "explanation": "crosstab builds frequency table from two or more columns.",
   "part": 9
  },
  {
   "id": 899,
   "question": "What is the difference between normalization and standardization?",
   "options": {
    "A": "Same thing",
    "B": "Normalization scales to [0,1]; standardization uses mean and std",
    "C": "Only standardization exists",
    "D": "Normalization is for images only"
   },
   "correct": "B",
   "explanation": "Normalization: min-max to [0,1]; Standardization: (x - mean) / std.",
   "part": 9
  },
  {
   "id": 900,
   "question": "What do Pandas `eval()` and `query()` do?",
   "options": {
    "A": "Evaluate string expressions for filtering/assignment",
    "B": "Run Python code",
    "C": "SQL queries only",
    "D": "Deprecated"
   },
   "correct": "A",
   "explanation": "eval/query evaluate string expressions for faster operations.",
   "part": 9
  },
  {
   "id": 901,
   "question": "What does `asyncio.run(main())` do?",
   "options": {
    "A": "Run coroutine",
    "B": "Create event loop",
    "C": "Both",
    "D": "Thread"
   },
   "correct": "C",
   "explanation": "Creates loop, runs coroutine, closes.",
   "part": 10
  },
  {
   "id": 902,
   "question": "What is GIL?",
   "options": {
    "A": "Global Interpreter Lock",
    "B": "Thread lock",
    "C": "Process lock",
    "D": "Import lock"
   },
   "correct": "A",
   "explanation": "GIL allows one thread to execute Python bytecode.",
   "part": 10
  },
  {
   "id": 903,
   "question": "What does `threading` share?",
   "options": {
    "A": "Memory space",
    "B": "Nothing",
    "C": "Files only",
    "D": "CPU only"
   },
   "correct": "A",
   "explanation": "Threads share same memory.",
   "part": 10
  },
  {
   "id": 904,
   "question": "What does `multiprocessing` provide?",
   "options": {
    "A": "Separate processes",
    "B": "Shared memory",
    "C": "Same as threading",
    "D": "Async only"
   },
   "correct": "A",
   "explanation": "Processes have separate memory.",
   "part": 10
  },
  {
   "id": 905,
   "question": "What does `concurrent.futures.ThreadPoolExecutor` do?",
   "options": {
    "A": "Thread pool",
    "B": "Process pool",
    "C": "Async",
    "D": "Single thread"
   },
   "correct": "A",
   "explanation": "ThreadPoolExecutor manages thread pool.",
   "part": 10
  },
  {
   "id": 906,
   "question": "What does `gc.collect()` do?",
   "options": {
    "A": "Run garbage collection",
    "B": "Delete all",
    "C": "Count objects",
    "D": "Disable GC"
   },
   "correct": "A",
   "explanation": "collect() runs full GC.",
   "part": 10
  },
  {
   "id": 907,
   "question": "What does `cProfile.run('func()')` do?",
   "options": {
    "A": "Profile execution",
    "B": "Time only",
    "C": "Count calls",
    "D": "Debug"
   },
   "correct": "A",
   "explanation": "cProfile profiles CPU time.",
   "part": 10
  },
  {
   "id": 908,
   "question": "What does `timeit.timeit` do?",
   "options": {
    "A": "Measure execution time",
    "B": "Profile",
    "C": "Debug",
    "D": "Log"
   },
   "correct": "A",
   "explanation": "timeit measures small code snippets.",
   "part": 10
  },
  {
   "id": 909,
   "question": "What is Singleton pattern?",
   "options": {
    "A": "One instance only",
    "B": "One method",
    "C": "One class",
    "D": "One module"
   },
   "correct": "A",
   "explanation": "Singleton ensures single instance.",
   "part": 10
  },
  {
   "id": 910,
   "question": "What is Factory pattern?",
   "options": {
    "A": "Create objects via factory",
    "B": "Build only",
    "C": "Import",
    "D": "Init"
   },
   "correct": "A",
   "explanation": "Factory creates objects without specifying exact class.",
   "part": 10
  },
  {
   "id": 911,
   "question": "What is Observer pattern?",
   "options": {
    "A": "Notify subscribers",
    "B": "Watch only",
    "C": "Event loop",
    "D": "Callback"
   },
   "correct": "A",
   "explanation": "Observers notified on subject change.",
   "part": 10
  },
  {
   "id": 912,
   "question": "What does SOLID S mean?",
   "options": {
    "A": "Single Responsibility",
    "B": "Simple",
    "C": "Static",
    "D": "Small"
   },
   "correct": "A",
   "explanation": "One class, one reason to change.",
   "part": 10
  },
  {
   "id": 913,
   "question": "What do type hints do?",
   "options": {
    "A": "Annotate types",
    "B": "Enforce types",
    "C": "Both",
    "D": "Neither"
   },
   "correct": "A",
   "explanation": "Hints are optional; no runtime enforcement.",
   "part": 10
  },
  {
   "id": 914,
   "question": "What does `mypy` do?",
   "options": {
    "A": "Static type check",
    "B": "Run code",
    "C": "Format",
    "D": "Test"
   },
   "correct": "A",
   "explanation": "mypy checks types statically.",
   "part": 10
  },
  {
   "id": 915,
   "question": "What does `re.match` do?",
   "options": {
    "A": "Match at start",
    "B": "Match anywhere",
    "C": "Replace",
    "D": "Split"
   },
   "correct": "A",
   "explanation": "match checks from beginning of string.",
   "part": 10
  },
  {
   "id": 916,
   "question": "What does `re.search` do?",
   "options": {
    "A": "Match anywhere",
    "B": "Match start only",
    "C": "Find all",
    "D": "Replace"
   },
   "correct": "A",
   "explanation": "search finds first match anywhere.",
   "part": 10
  },
  {
   "id": 917,
   "question": "What is `__pycache__`?",
   "options": {
    "A": "Bytecode cache",
    "B": "Source cache",
    "C": "Import cache",
    "D": "Temp files"
   },
   "correct": "A",
   "explanation": "Stores .pyc compiled bytecode.",
   "part": 10
  },
  {
   "id": 918,
   "question": "What does `-O` flag do?",
   "options": {
    "A": "Optimize bytecode",
    "B": "Debug",
    "C": "Verbose",
    "D": "Fast"
   },
   "correct": "A",
   "explanation": "Removes asserts, optimizes.",
   "part": 10
  },
  {
   "id": 919,
   "question": "What is SQL injection?",
   "options": {
    "A": "Malicious SQL in input",
    "B": "DB error",
    "C": "Query only",
    "D": "Connection"
   },
   "correct": "A",
   "explanation": "Injecting SQL via user input.",
   "part": 10
  },
  {
   "id": 920,
   "question": "What does `asyncio.create_task(coro)` do?",
   "options": {
    "A": "Schedule coroutine",
    "B": "Run immediately",
    "C": "Wait for result",
    "D": "Cancel"
   },
   "correct": "A",
   "explanation": "Schedules coro, returns Task.",
   "part": 10
  },
  {
   "id": 921,
   "question": "Does GIL affect multiprocessing?",
   "options": {
    "A": "No, separate interpreters",
    "B": "Yes",
    "C": "Only on Windows",
    "D": "Sometimes"
   },
   "correct": "A",
   "explanation": "Each process has own GIL.",
   "part": 10
  },
  {
   "id": 922,
   "question": "What does `ProcessPoolExecutor` provide?",
   "options": {
    "A": "Process pool",
    "B": "Thread pool",
    "C": "Async",
    "D": "Single process"
   },
   "correct": "A",
   "explanation": "ProcessPoolExecutor for CPU-bound work.",
   "part": 10
  },
  {
   "id": 923,
   "question": "What does `concurrent.futures.as_completed` yield?",
   "options": {
    "A": "Futures as they complete",
    "B": "All at end",
    "C": "In order",
    "D": "First only"
   },
   "correct": "A",
   "explanation": "Iterator over completed futures.",
   "part": 10
  },
  {
   "id": 924,
   "question": "What triggers GC?",
   "options": {
    "A": "Allocation, thresholds",
    "B": "Manual only",
    "C": "Timer",
    "D": "Never"
   },
   "correct": "A",
   "explanation": "Automatic when thresholds exceeded.",
   "part": 10
  },
  {
   "id": 925,
   "question": "What does `cProfile` output?",
   "options": {
    "A": "Per-function stats",
    "B": "Total time only",
    "C": "Memory",
    "D": "Calls count only"
   },
   "correct": "A",
   "explanation": "ncalls, tottime, cumtime per function.",
   "part": 10
  },
  {
   "id": 926,
   "question": "What does `timeit.repeat` return?",
   "options": {
    "A": "List of timings",
    "B": "Single value",
    "C": "Mean",
    "D": "Min"
   },
   "correct": "A",
   "explanation": "Multiple runs, returns list.",
   "part": 10
  },
  {
   "id": 927,
   "question": "What is Factory Method pattern?",
   "options": {
    "A": "Method creates objects",
    "B": "Class creates",
    "C": "Module creates",
    "D": "Init creates"
   },
   "correct": "A",
   "explanation": "Factory method in class for object creation.",
   "part": 10
  },
  {
   "id": 928,
   "question": "What is Strategy pattern?",
   "options": {
    "A": "Interchangeable algorithms",
    "B": "Single algorithm",
    "C": "Fixed strategy",
    "D": "Config"
   },
   "correct": "A",
   "explanation": "Encapsulates algorithm, interchangeable.",
   "part": 10
  },
  {
   "id": 929,
   "question": "What does SOLID O mean?",
   "options": {
    "A": "Open/Closed",
    "B": "Object",
    "C": "Optional",
    "D": "Override"
   },
   "correct": "A",
   "explanation": "Open for extension, closed for modification.",
   "part": 10
  },
  {
   "id": 930,
   "question": "What does `typing.Optional[int]` mean?",
   "options": {
    "A": "int or None",
    "B": "int only",
    "C": "Optional type",
    "D": "Default int"
   },
   "correct": "A",
   "explanation": "Union[int, None].",
   "part": 10
  },
  {
   "id": 931,
   "question": "What does `mypy --strict` do?",
   "options": {
    "A": "Stricter checks",
    "B": "Ignore errors",
    "C": "Warn only",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Enables stricter type checking.",
   "part": 10
  },
  {
   "id": 932,
   "question": "What does `re.findall(pattern, s)` return?",
   "options": {
    "A": "List of matches",
    "B": "First match",
    "C": "Match object",
    "D": "Iterator"
   },
   "correct": "A",
   "explanation": "All non-overlapping matches.",
   "part": 10
  },
  {
   "id": 933,
   "question": "What does `re.sub(pattern, repl, s)` do?",
   "options": {
    "A": "Replace matches",
    "B": "Find",
    "C": "Split",
    "D": "Match"
   },
   "correct": "A",
   "explanation": "Replaces pattern with repl.",
   "part": 10
  },
  {
   "id": 934,
   "question": "What does `-OO` do?",
   "options": {
    "A": "Remove docstrings too",
    "B": "Same as -O",
    "C": "Debug",
    "D": "Optimize more"
   },
   "correct": "A",
   "explanation": "Removes docstrings in addition to -O.",
   "part": 10
  },
  {
   "id": 935,
   "question": "What prevents SQL injection?",
   "options": {
    "A": "Parameterized queries",
    "B": "Validation only",
    "C": "Escaping",
    "D": "Both A and C"
   },
   "correct": "A",
   "explanation": "Use ? or %s placeholders, never concatenate.",
   "part": 10
  },
  {
   "id": 936,
   "question": "What does `asyncio.gather(*coros)` return?",
   "options": {
    "A": "List of results",
    "B": "First result",
    "C": "None",
    "D": "Task"
   },
   "correct": "A",
   "explanation": "Runs all, returns list of results.",
   "part": 10
  },
  {
   "id": 937,
   "question": "What does GIL prevent?",
   "options": {
    "A": "True parallel Python bytecode",
    "B": "Threading",
    "C": "Multiprocessing",
    "D": "Async"
   },
   "correct": "A",
   "explanation": "Only one thread runs Python at a time.",
   "part": 10
  },
  {
   "id": 938,
   "question": "What does `threading.Lock` provide?",
   "options": {
    "A": "Mutual exclusion",
    "B": "Async lock",
    "C": "Process lock",
    "D": "File lock"
   },
   "correct": "A",
   "explanation": "Mutex for thread synchronization.",
   "part": 10
  },
  {
   "id": 939,
   "question": "What does `multiprocessing.Queue` do?",
   "options": {
    "A": "IPC between processes",
    "B": "Thread queue",
    "C": "Async queue",
    "D": "Task queue"
   },
   "correct": "A",
   "explanation": "Queue for process communication.",
   "part": 10
  },
  {
   "id": 940,
   "question": "What does `future.result()` do?",
   "options": {
    "A": "Block for result",
    "B": "Return immediately",
    "C": "Cancel",
    "D": "Check status"
   },
   "correct": "A",
   "explanation": "Blocks until done, returns value.",
   "part": 10
  },
  {
   "id": 941,
   "question": "What does `gc.disable()` do?",
   "options": {
    "A": "Turn off automatic GC",
    "B": "Delete all",
    "C": "Pause",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "Disables automatic collection.",
   "part": 10
  },
  {
   "id": 942,
   "question": "What does `pstats.Stats` provide?",
   "options": {
    "A": "Profile analysis",
    "B": "Raw data",
    "C": "Sorting",
    "D": "Filtering"
   },
   "correct": "A",
   "explanation": "Analyze cProfile output.",
   "part": 10
  },
  {
   "id": 943,
   "question": "What does `timeit.default_timer` use?",
   "options": {
    "A": "time.perf_counter",
    "B": "time.time",
    "C": "Platform-specific",
    "D": "Both A and C"
   },
   "correct": "D",
   "explanation": "Best available timer.",
   "part": 10
  },
  {
   "id": 944,
   "question": "What is Adapter pattern?",
   "options": {
    "A": "Wrap incompatible interface",
    "B": "Adapt data",
    "C": "Convert format",
    "D": "Transform"
   },
   "correct": "A",
   "explanation": "Adapts one interface to another.",
   "part": 10
  },
  {
   "id": 945,
   "question": "What is Template Method pattern?",
   "options": {
    "A": "Skeleton with hooks",
    "B": "Jinja template",
    "C": "Base class only",
    "D": "Override all"
   },
   "correct": "A",
   "explanation": "Defines skeleton, subclasses fill steps.",
   "part": 10
  },
  {
   "id": 946,
   "question": "What does SOLID L mean?",
   "options": {
    "A": "Liskov Substitution",
    "B": "List",
    "C": "Load",
    "D": "Lock"
   },
   "correct": "A",
   "explanation": "Subtypes must be substitutable.",
   "part": 10
  },
  {
   "id": 947,
   "question": "What does `typing.Union[A, B]` mean?",
   "options": {
    "A": "A or B",
    "B": "A and B",
    "C": "Either",
    "D": "Both"
   },
   "correct": "A",
   "explanation": "Value of type A or B.",
   "part": 10
  },
  {
   "id": 948,
   "question": "What does `mypy` not do?",
   "options": {
    "A": "Runtime type check",
    "B": "Static analysis",
    "C": "Type inference",
    "D": "Error report"
   },
   "correct": "A",
   "explanation": "mypy is static only.",
   "part": 10
  },
  {
   "id": 949,
   "question": "What does `re.compile(pattern)` return?",
   "options": {
    "A": "Pattern object",
    "B": "List",
    "C": "String",
    "D": "Match"
   },
   "correct": "A",
   "explanation": "Compiled regex for reuse.",
   "part": 10
  },
  {
   "id": 950,
   "question": "What does `re.split(pattern, s)` return?",
   "options": {
    "A": "List of strings",
    "B": "Split count",
    "C": "Iterator",
    "D": "Match"
   },
   "correct": "A",
   "explanation": "Splits by pattern.",
   "part": 10
  },
  {
   "id": 951,
   "question": "What is `__pycache__` used for?",
   "options": {
    "A": "Faster imports",
    "B": "Source backup",
    "C": "Cache data",
    "D": "Temp"
   },
   "correct": "A",
   "explanation": "Stores .pyc for faster load.",
   "part": 10
  },
  {
   "id": 952,
   "question": "What is XSS?",
   "options": {
    "A": "Cross-site scripting",
    "B": "SQL injection",
    "C": "CSRF",
    "D": "CORS"
   },
   "correct": "A",
   "explanation": "Injecting scripts via user input.",
   "part": 10
  },
  {
   "id": 953,
   "question": "What does `await` do?",
   "options": {
    "A": "Pause until coro completes",
    "B": "Run sync",
    "C": "Start task",
    "D": "Return"
   },
   "correct": "A",
   "explanation": "Suspends until awaitable done.",
   "part": 10
  },
  {
   "id": 954,
   "question": "When is threading beneficial?",
   "options": {
    "A": "I/O-bound work",
    "B": "CPU-bound",
    "C": "Both",
    "D": "Neither"
   },
   "correct": "A",
   "explanation": "GIL released during I/O.",
   "part": 10
  },
  {
   "id": 955,
   "question": "What does `Process` share with parent?",
   "options": {
    "A": "Nothing by default",
    "B": "Memory",
    "C": "Variables",
    "D": "Files"
   },
   "correct": "A",
   "explanation": "Processes have separate memory.",
   "part": 10
  },
  {
   "id": 956,
   "question": "What does `executor.submit(f, *args)` return?",
   "options": {
    "A": "Future",
    "B": "Result",
    "C": "None",
    "D": "Task"
   },
   "correct": "A",
   "explanation": "Future representing pending result.",
   "part": 10
  },
  {
   "id": 957,
   "question": "What does `gc.get_objects()` return?",
   "options": {
    "A": "All tracked objects",
    "B": "Garbage only",
    "C": "Count",
    "D": "References"
   },
   "correct": "A",
   "explanation": "List of objects tracked by GC.",
   "part": 10
  },
  {
   "id": 958,
   "question": "What does `cProfile.run` accept?",
   "options": {
    "A": "Code string or callable",
    "B": "File only",
    "C": "Module only",
    "D": "Function only"
   },
   "correct": "A",
   "explanation": "String to exec or function to run.",
   "part": 10
  },
  {
   "id": 959,
   "question": "What does `timeit.Timer` allow?",
   "options": {
    "A": "Custom setup",
    "B": "Only stmt",
    "C": "No setup",
    "D": "Single run"
   },
   "correct": "A",
   "explanation": "setup and stmt parameters.",
   "part": 10
  },
  {
   "id": 960,
   "question": "What is Builder pattern?",
   "options": {
    "A": "Stepwise object construction",
    "B": "Build all",
    "C": "Factory",
    "D": "Init"
   },
   "correct": "A",
   "explanation": "Constructs complex objects step by step.",
   "part": 10
  },
  {
   "id": 961,
   "question": "What is Command pattern?",
   "options": {
    "A": "Encapsulate request as object",
    "B": "CLI command",
    "C": "Function",
    "D": "Method"
   },
   "correct": "A",
   "explanation": "Request encapsulated for undo/redo.",
   "part": 10
  },
  {
   "id": 962,
   "question": "What does SOLID I mean?",
   "options": {
    "A": "Interface Segregation",
    "B": "Import",
    "C": "Instance",
    "D": "Init"
   },
   "correct": "A",
   "explanation": "Many specific interfaces over one general.",
   "part": 10
  },
  {
   "id": 963,
   "question": "What does `typing.List[str]` mean?",
   "options": {
    "A": "List of str",
    "B": "List type",
    "C": "Generic list",
    "D": "Type only"
   },
   "correct": "A",
   "explanation": "list containing strings.",
   "part": 10
  },
  {
   "id": 964,
   "question": "What does `# type: ignore` do?",
   "options": {
    "A": "Suppress mypy error",
    "B": "Add type",
    "C": "Remove type",
    "D": "Comment"
   },
   "correct": "A",
   "explanation": "Tells mypy to ignore next line.",
   "part": 10
  },
  {
   "id": 965,
   "question": "What does `re.fullmatch` require?",
   "options": {
    "A": "Whole string match",
    "B": "Partial",
    "C": "Start match",
    "D": "Any match"
   },
   "correct": "A",
   "explanation": "Pattern must match entire string.",
   "part": 10
  },
  {
   "id": 966,
   "question": "What does `re.IGNORECASE` do?",
   "options": {
    "A": "Case-insensitive match",
    "B": "Ignore flags",
    "C": "Skip",
    "D": "Lowercase"
   },
   "correct": "A",
   "explanation": "Case-insensitive matching.",
   "part": 10
  },
  {
   "id": 967,
   "question": "What does `sys.dont_write_bytecode` do?",
   "options": {
    "A": "Skip .pyc creation",
    "B": "Delete .pyc",
    "C": "Write source",
    "D": "Cache"
   },
   "correct": "A",
   "explanation": "Prevents writing bytecode files.",
   "part": 10
  },
  {
   "id": 968,
   "question": "What is CSRF?",
   "options": {
    "A": "Cross-site request forgery",
    "B": "Cross-site scripting",
    "C": "SQL injection",
    "D": "CORS"
   },
   "correct": "A",
   "explanation": "Unauthorized actions from user's session.",
   "part": 10
  },
  {
   "id": 969,
   "question": "What does `asyncio.sleep(0)` do?",
   "options": {
    "A": "Yield to event loop",
    "B": "Nothing",
    "C": "Block",
    "D": "Sleep forever"
   },
   "correct": "A",
   "explanation": "Yields control, allows other tasks.",
   "part": 10
  },
  {
   "id": 970,
   "question": "What does GIL allow?",
   "options": {
    "A": "One Python thread at a time",
    "B": "Multiple threads",
    "C": "No threads",
    "D": "Parallel threads"
   },
   "correct": "A",
   "explanation": "Single-threaded execution of bytecode.",
   "part": 10
  },
  {
   "id": 971,
   "question": "What does `threading.Event` provide?",
   "options": {
    "A": "Signal between threads",
    "B": "Lock",
    "C": "Queue",
    "D": "Timer"
   },
   "correct": "A",
   "explanation": "wait/set/clear for signaling.",
   "part": 10
  },
  {
   "id": 972,
   "question": "What does `multiprocessing.Pool` provide?",
   "options": {
    "A": "Process pool",
    "B": "Thread pool",
    "C": "Queue",
    "D": "Pipe"
   },
   "correct": "A",
   "explanation": "Pool of worker processes.",
   "part": 10
  },
  {
   "id": 973,
   "question": "What does `future.add_done_callback(fn)` do?",
   "options": {
    "A": "Call fn when done",
    "B": "Add result",
    "C": "Cancel",
    "D": "Wait"
   },
   "correct": "A",
   "explanation": "Registers callback for completion.",
   "part": 10
  },
  {
   "id": 974,
   "question": "What does `gc.get_referrers(obj)` return?",
   "options": {
    "A": "Objects referencing obj",
    "B": "Objects obj references",
    "C": "Count",
    "D": "All"
   },
   "correct": "A",
   "explanation": "Objects that reference obj.",
   "part": 10
  },
  {
   "id": 975,
   "question": "What does `pstats.sort_stats('cumulative')` do?",
   "options": {
    "A": "Sort by cumulative time",
    "B": "Sort by name",
    "C": "Sort by calls",
    "D": "No sort"
   },
   "correct": "A",
   "explanation": "Sorts profile by cumtime.",
   "part": 10
  },
  {
   "id": 976,
   "question": "What does `timeit` default number?",
   "options": {
    "A": "1,000,000",
    "B": "1,000",
    "C": "100",
    "D": "10"
   },
   "correct": "A",
   "explanation": "Default repeat count for stmt.",
   "part": 10
  },
  {
   "id": 977,
   "question": "What is Facade pattern?",
   "options": {
    "A": "Simplify complex subsystem",
    "B": "Front-end",
    "C": "Interface",
    "D": "Wrapper"
   },
   "correct": "A",
   "explanation": "Simple interface to complex system.",
   "part": 10
  },
  {
   "id": 978,
   "question": "What is Decorator pattern (OOP)?",
   "options": {
    "A": "Add behavior to object",
    "B": "Python decorator",
    "C": "Function wrapper",
    "D": "Class decorator"
   },
   "correct": "A",
   "explanation": "Wraps object to add responsibilities.",
   "part": 10
  },
  {
   "id": 979,
   "question": "What does SOLID D mean?",
   "options": {
    "A": "Dependency Inversion",
    "B": "Data",
    "C": "Default",
    "D": "Delegate"
   },
   "correct": "A",
   "explanation": "Depend on abstractions, not concretions.",
   "part": 10
  },
  {
   "id": 980,
   "question": "What does `typing.Dict[str, int]` mean?",
   "options": {
    "A": "Dict mapping str to int",
    "B": "Dict type",
    "C": "Generic",
    "D": "Type hint"
   },
   "correct": "A",
   "explanation": "dict with str keys, int values.",
   "part": 10
  },
  {
   "id": 981,
   "question": "What does `mypy --no-incremental` do?",
   "options": {
    "A": "Full check each run",
    "B": "No check",
    "C": "Faster",
    "D": "Incremental"
   },
   "correct": "A",
   "explanation": "Disables incremental mode.",
   "part": 10
  },
  {
   "id": 982,
   "question": "What does `re.match` return if no match?",
   "options": {
    "A": "None",
    "B": "Empty string",
    "C": "False",
    "D": "Raise"
   },
   "correct": "A",
   "explanation": "Returns None when no match.",
   "part": 10
  },
  {
   "id": 983,
   "question": "What does `re.MULTILINE` affect?",
   "options": {
    "A": "^ and $ match line boundaries",
    "B": "Dot matches newline",
    "C": "Case",
    "D": "Greedy"
   },
   "correct": "A",
   "explanation": "^/$ match per line.",
   "part": 10
  },
  {
   "id": 984,
   "question": "What does `importlib.util.find_spec` return?",
   "options": {
    "A": "ModuleSpec or None",
    "B": "Module",
    "C": "Path",
    "D": "Loader"
   },
   "correct": "A",
   "explanation": "Finds module without importing.",
   "part": 10
  },
  {
   "id": 985,
   "question": "What is path traversal?",
   "options": {
    "A": "Access files outside intended dir",
    "B": "Directory listing",
    "C": "File read",
    "D": "Path injection"
   },
   "correct": "A",
   "explanation": ".. in path to escape directory.",
   "part": 10
  },
  {
   "id": 986,
   "question": "What does `async with` require?",
   "options": {
    "A": "Async context manager",
    "B": "Sync CM",
    "C": "Any CM",
    "D": "ContextVar"
   },
   "correct": "A",
   "explanation": "Object with __aenter__/__aexit__.",
   "part": 10
  },
  {
   "id": 987,
   "question": "What does `threading.local()` provide?",
   "options": {
    "A": "Thread-local storage",
    "B": "Global",
    "C": "Shared",
    "D": "Process-local"
   },
   "correct": "A",
   "explanation": "Separate data per thread.",
   "part": 10
  },
  {
   "id": 988,
   "question": "What does `multiprocessing.Manager` provide?",
   "options": {
    "A": "Shared objects across processes",
    "B": "Process manager",
    "C": "Pool manager",
    "D": "Queue manager"
   },
   "correct": "A",
   "explanation": "Proxy objects for shared state.",
   "part": 10
  },
  {
   "id": 989,
   "question": "What does `concurrent.futures.wait` return?",
   "options": {
    "A": "Done and not_done sets",
    "B": "Results",
    "C": "First",
    "D": "None"
   },
   "correct": "A",
   "explanation": "Returns (done_futures, not_done_futures).",
   "part": 10
  },
  {
   "id": 990,
   "question": "What does `gc.is_tracked(obj)` return?",
   "options": {
    "A": "True if GC tracks obj",
    "B": "If garbage",
    "C": "Reference count",
    "D": "Generation"
   },
   "correct": "A",
   "explanation": "Whether object is tracked.",
   "part": 10
  },
  {
   "id": 991,
   "question": "What does `memory_profiler` show?",
   "options": {
    "A": "Memory usage over time",
    "B": "CPU only",
    "C": "Line count",
    "D": "Calls"
   },
   "correct": "A",
   "explanation": "Line-by-line memory profiling.",
   "part": 10
  },
  {
   "id": 992,
   "question": "What does `tracemalloc` provide?",
   "options": {
    "A": "Memory allocation tracking",
    "B": "CPU profile",
    "C": "GC stats",
    "D": "Object count"
   },
   "correct": "A",
   "explanation": "Tracks memory allocations.",
   "part": 10
  },
  {
   "id": 993,
   "question": "What is Proxy pattern?",
   "options": {
    "A": "Surrogate for another object",
    "B": "Network proxy",
    "C": "Delegate",
    "D": "Wrapper"
   },
   "correct": "A",
   "explanation": "Controls access to real object.",
   "part": 10
  },
  {
   "id": 994,
   "question": "What is Chain of Responsibility?",
   "options": {
    "A": "Pass request along chain",
    "B": "Single handler",
    "C": "Pipeline",
    "D": "Middleware"
   },
   "correct": "A",
   "explanation": "Request passed to chain of handlers.",
   "part": 10
  },
  {
   "id": 995,
   "question": "What does `typing.Callable[[int], str]` mean?",
   "options": {
    "A": "Function int -> str",
    "B": "Callable class",
    "C": "Method",
    "D": "Lambda"
   },
   "correct": "A",
   "explanation": "Takes int, returns str.",
   "part": 10
  },
  {
   "id": 996,
   "question": "What does `from __future__ import annotations` do?",
   "options": {
    "A": "Defer annotation evaluation",
    "B": "Enable annotations",
    "C": "Import annotations",
    "D": "String annotations"
   },
   "correct": "A",
   "explanation": "Annotations become strings, no runtime eval.",
   "part": 10
  },
  {
   "id": 997,
   "question": "What does `re.DOTALL` do?",
   "options": {
    "A": "Dot matches newline",
    "B": "Match all",
    "C": "Single line",
    "D": "Multiline"
   },
   "correct": "A",
   "explanation": ". matches any char including newline.",
   "part": 10
  },
  {
   "id": 998,
   "question": "What does `re.VERBOSE` allow?",
   "options": {
    "A": "Whitespace, comments in pattern",
    "B": "Verbose output",
    "C": "Long pattern",
    "D": "Debug"
   },
   "correct": "A",
   "explanation": "Ignores whitespace, allows # comments.",
   "part": 10
  },
  {
   "id": 999,
   "question": "What does `sys.setprofile` set?",
   "options": {
    "A": "Profiler for function calls",
    "B": "Trace",
    "C": "Debug",
    "D": "Hook"
   },
   "correct": "A",
   "explanation": "Global profiler callback.",
   "part": 10
  },
  {
   "id": 1000,
   "question": "What is input validation?",
   "options": {
    "A": "Check/sanitize user input",
    "B": "Type check",
    "C": "Parse only",
    "D": "Format"
   },
   "correct": "A",
   "explanation": "Validate before use.",
   "part": 10
  }
 ]
};
