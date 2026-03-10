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
  }
 ]
};
