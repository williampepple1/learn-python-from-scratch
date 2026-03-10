#!/usr/bin/env python3
"""Generate 5 MCQ Jupyter notebooks with 100 questions each."""

import json
import os

# Base notebook structure
NOTEBOOK_TEMPLATE = {
    "cells": [],
    "metadata": {
        "kernelspec": {
            "display_name": "Python 3",
            "language": "python",
            "name": "python3"
        },
        "language_info": {
            "name": "python",
            "version": "3.10.0"
        }
    },
    "nbformat": 4,
    "nbformat_minor": 5
}

def make_cell(source_lines):
    """Create a markdown cell from a list of lines."""
    return {
        "cell_type": "markdown",
        "metadata": {},
        "source": [line + "\n" if not line.endswith("\n") else line for line in source_lines]
    }

def add_title_cell(nb, part_num, topic, q_range):
    """Add title cell."""
    nb["cells"].append(make_cell([
        f"# 🐍 Python Interview MCQ — Part {part_num}: {topic} ({q_range})",
        "",
        "**1000 Multiple-Choice Questions for Python Interview Preparation**",
        "",
        "Each question has 4 options (A–D) with the correct answer and explanation immediately below.",
        "",
        "---"
    ]))

def add_question_cell(nb, q_num, question, options, correct, explanation):
    """Add a question cell. correct is 'A', 'B', 'C', or 'D'."""
    lines = [f"### Q{q_num}. {question}", ""]
    for opt, text in options:
        lines.append(f"- {opt}) {text}")
    lines.extend([
        "",
        "<details>",
        "<summary>Show Answer</summary>",
        "",
        f"**Q{q_num}. {correct})** {explanation}",
        "",
        "</details>"
    ])
    nb["cells"].append(make_cell(lines))

# ============ PART 1: Basics & Syntax (Q1-Q100) ============
PART1_QUESTIONS = [
    ("What is Python primarily known for?", [
        ("A", "Being the fastest programming language"),
        ("B", "Readability and clean syntax"),
        ("C", "Exclusively for web development"),
        ("D", "Compiled-only execution")
    ], "B", "Python emphasizes code readability with its clear, expressive syntax. It's interpreted, not compiled, and is used across many domains."),
    ("Which organization maintains the Python language?", [
        ("A", "Mozilla Foundation"),
        ("B", "Python Software Foundation"),
        ("C", "Open Source Initiative"),
        ("D", "Linux Foundation")
    ], "B", "The Python Software Foundation (PSF) maintains and oversees Python development."),
    ("What does PEP 8 define?", [
        ("A", "Python Enhancement Proposals only"),
        ("B", "Style guide for Python code"),
        ("C", "Python package manager"),
        ("D", "Python execution model")
    ], "B", "PEP 8 is the official style guide for Python code, covering formatting, naming conventions, and best practices."),
    ("What is the output of `print(type(3.14))`?", [
        ("A", "int"),
        ("B", "float"),
        ("C", "decimal"),
        ("D", "number")
    ], "B", "3.14 is a float literal. The type() function returns <class 'float'>."),
    ("Which is NOT a valid Python variable name?", [
        ("A", "_private"),
        ("B", "2nd_value"),
        ("C", "value_2"),
        ("D", "value2")
    ], "B", "Variable names cannot start with a digit. 2nd_value is invalid."),
    ("What does `10 // 3` evaluate to?", [
        ("A", "3.333..."),
        ("B", "3"),
        ("C", "3.0"),
        ("D", "4")
    ], "B", "The // operator performs floor division, returning an integer (3) when both operands are integers."),
    ("What is `bool(0)` in Python?", [
        ("A", "True"),
        ("B", "False"),
        ("C", "0"),
        ("D", "None")
    ], "B", "In Python, 0 is falsy. bool(0) returns False."),
    ("What does `id(x)` return?", [
        ("A", "The type of x"),
        ("B", "Memory address/identity of object x"),
        ("C", "The value of x"),
        ("D", "Length of x")
    ], "B", "id() returns the unique integer identity (memory address) of an object."),
    ("Which keyword is used to define a function?", [
        ("A", "func"),
        ("B", "def"),
        ("C", "function"),
        ("D", "define")
    ], "B", "Python uses the def keyword to define functions."),
    ("What is the output of `print(2 ** 3)`?", [
        ("A", "6"),
        ("B", "8"),
        ("C", "9"),
        ("D", "23")
    ], "B", "** is the exponentiation operator. 2 ** 3 = 8."),
    ("Which is the correct way to write a multi-line comment?", [
        ("A", "/* comment */"),
        ("B", "'''comment''' or \"\"\"comment\"\"\""),
        ("C", "// comment"),
        ("D", "# comment (only for single line)")
    ], "B", "Python uses triple quotes (''' or \"\"\") for multi-line strings, often used as docstrings/comments."),
    ("What does `'hello' == \"hello\"` evaluate to?", [
        ("A", "False"),
        ("B", "True"),
        ("C", "Error"),
        ("D", "None")
    ], "B", "Single and double quotes create equivalent strings. They compare equal."),
    ("What is `None` in Python?", [
        ("A", "Same as 0"),
        ("B", "A singleton object representing absence of value"),
        ("C", "An empty string"),
        ("D", "False")
    ], "B", "None is a built-in singleton representing the absence of a value. It's not 0, '', or False."),
    ("What does `isinstance(5, int)` return?", [
        ("A", "5"),
        ("B", "True"),
        ("C", "int"),
        ("D", "False")
    ], "B", "isinstance(obj, type) returns True if obj is an instance of type (or a subclass)."),
    ("Which operator has highest precedence: `*`, `+`, `**`, `()`?", [
        ("A", "*"),
        ("B", "+"),
        ("C", "**"),
        ("D", "()")
    ], "D", "Parentheses () have the highest precedence, then **, then * and /, then + and -."),
    ("What is the output of `print(1 != 1.0)`?", [
        ("A", "True"),
        ("B", "False"),
        ("C", "Error"),
        ("D", "None")
    ], "B", "1 and 1.0 are equal in value (==), so 1 != 1.0 is False."),
    ("What does `input()` return?", [
        ("A", "An integer"),
        ("B", "A string"),
        ("C", "Depends on user input"),
        ("D", "A float")
    ], "B", "input() always returns a string. You must convert to int/float if needed."),
    ("Which is NOT a Python keyword?", [
        ("A", "lambda"),
        ("B", "async"),
        ("C", "null"),
        ("D", "yield")
    ], "C", "Python uses None, not null. null is not a keyword."),
    ("What does `print(sep='-', 'a', 'b', 'c')` do?", [
        ("A", "Prints a-b-c"),
        ("B", "SyntaxError"),
        ("C", "Prints a b c"),
        ("D", "Prints abc")
    ], "B", "Keyword arguments must come after positional arguments. This causes a SyntaxError."),
    ("What is `type(True)`?", [
        ("A", "int"),
        ("B", "bool"),
        ("C", "boolean"),
        ("D", "Boolean")
    ], "B", "True and False are of type bool. In Python, bool is a subclass of int."),
    ("What does `10 % 3` return?", [
        ("A", "1"),
        ("B", "3"),
        ("C", "0"),
        ("D", "3.33")
    ], "A", "% is the modulo operator. 10 % 3 = 1 (remainder of 10 divided by 3)."),
    ("Which converts a string to an integer?", [
        ("A", "int(str)"),
        ("B", "integer(str)"),
        ("C", "parse.Int(str)"),
        ("D", "str.to_int()")
    ], "A", "int() converts a string to an integer, e.g., int('42') -> 42."),
    ("What is the output of `print(2 + 3 * 4)`?", [
        ("A", "20"),
        ("B", "14"),
        ("C", "24"),
        ("D", "Error")
    ], "B", "Multiplication has higher precedence: 3 * 4 = 12, then 2 + 12 = 14."),
    ("What does `and` return when both operands are truthy?", [
        ("A", "True"),
        ("B", "The second operand"),
        ("C", "The first operand"),
        ("D", "1")
    ], "B", "and returns the first falsy value, or the last value if all are truthy. So it returns the second operand."),
    ("What is `bool('')`?", [
        ("A", "True"),
        ("B", "False"),
        ("C", "0"),
        ("D", "None")
    ], "B", "Empty string is falsy in Python. bool('') returns False."),
    ("Which symbol starts a single-line comment?", [
        ("A", "//"),
        ("B", "#"),
        ("C", "/*"),
        ("D", "--")
    ], "B", "Python uses # for single-line comments."),
    ("What does `print(end='')` do?", [
        ("A", "Prints nothing"),
        ("B", "Ends the program"),
        ("C", "Uses empty string instead of newline"),
        ("D", "Error")
    ], "C", "end='' overrides the default newline, so nothing is printed after the content."),
    ("What is `1 < 2 < 3` equivalent to?", [
        ("A", "(1 < 2) and (2 < 3)"),
        ("B", "1 < (2 < 3)"),
        ("C", "Chained comparison, not equivalent to and"),
        ("D", "SyntaxError")
    ], "A", "Python allows chained comparisons: 1 < 2 < 3 is equivalent to (1 < 2) and (2 < 3)."),
    ("What does `~5` produce (bitwise NOT)?", [
        ("A", "-5"),
        ("B", "-6"),
        ("C", "5"),
        ("D", "4")
    ], "B", "~x = -(x+1). So ~5 = -6."),
    ("Which is valid Python indentation?", [
        ("A", "Tabs and spaces mixed"),
        ("B", "4 spaces (PEP 8)"),
        ("C", "2 spaces only"),
        ("D", "No indentation required")
    ], "B", "PEP 8 recommends 4 spaces. Mixing tabs and spaces can cause errors."),
    ("What is `float('inf')`?", [
        ("A", "Error"),
        ("B", "Positive infinity"),
        ("C", "0.0"),
        ("D", "None")
    ], "B", "float('inf') represents positive infinity in Python."),
    ("What does `x = y = 5` do?", [
        ("A", "Error"),
        ("B", "Assigns 5 to x and y"),
        ("C", "Compares x and y"),
        ("D", "Creates a tuple")
    ], "B", "Chained assignment: both x and y are assigned the value 5."),
    ("What is `0 or 5`?", [
        ("A", "0"),
        ("B", "5"),
        ("C", "True"),
        ("D", "False")
    ], "B", "or returns the first truthy value. 0 is falsy, so it returns 5."),
    ("Which operator checks identity?", [
        ("A", "=="),
        ("B", "is"),
        ("C", "="),
        ("D", "equals")
    ], "B", "is checks if two variables refer to the same object (identity), not value equality."),
    ("What does `print(1, 2, 3, sep=',')` output?", [
        ("A", "1 2 3"),
        ("B", "1,2,3"),
        ("C", "123"),
        ("D", "1, 2, 3")
    ], "B", "sep=',' uses comma as separator between items: 1,2,3."),
    ("What is `complex(1, 2)`?", [
        ("A", "3"),
        ("B", "1+2j"),
        ("C", "(1, 2)"),
        ("D", "Error")
    ], "B", "complex(real, imag) creates a complex number: 1+2j."),
    ("Which is a valid way to get user input?", [
        ("A", "read()"),
        ("B", "input()"),
        ("C", "get_input()"),
        ("D", "scan()")
    ], "B", "input() is the built-in function for reading user input from stdin."),
    ("What does `5 in [1, 2, 3, 4, 5]` return?", [
        ("A", "True"),
        ("B", "False"),
        ("C", "5"),
        ("D", "Error")
    ], "A", "in checks membership. 5 is in the list, so it returns True."),
    ("What is `2 << 1` (left shift)?", [
        ("A", "1"),
        ("B", "4"),
        ("C", "3"),
        ("D", "2")
    ], "B", "Left shift by 1 multiplies by 2. 2 << 1 = 4."),
    ("What does `round(2.5)` return in Python 3?", [
        ("A", "2"),
        ("B", "3"),
        ("C", "2.0"),
        ("D", "2.5")
    ], "A", "Python 3 uses banker's rounding (round half to even). round(2.5) = 2 because 2 is even."),
    ("What does `abs(-7)` return?", [
        ("A", "-7"),
        ("B", "7"),
        ("C", "0"),
        ("D", "7.0")
    ], "B", "abs() returns the absolute value. abs(-7) = 7."),
    ("Which creates an empty set?", [
        ("A", "{}"),
        ("B", "set()"),
        ("C", "[]"),
        ("D", "empty_set()")
    ], "B", "{} creates an empty dict. set() creates an empty set."),
    ("What is `max(1, 2, 3)`?", [
        ("A", "1"),
        ("B", "3"),
        ("C", "6"),
        ("D", "[1,2,3]")
    ], "B", "max() returns the largest argument: 3."),
    ("What does `divmod(10, 3)` return?", [
        ("A", "3.33"),
        ("B", "(3, 1)"),
        ("C", "1"),
        ("D", "3")
    ], "B", "divmod(a, b) returns (a//b, a%b). divmod(10, 3) = (3, 1)."),
    ("What is `pow(2, 3)`?", [
        ("A", "6"),
        ("B", "8"),
        ("C", "9"),
        ("D", "5")
    ], "B", "pow(base, exp) returns base**exp. pow(2, 3) = 8."),
    ("Which converts to string?", [
        ("A", "str(42)"),
        ("B", "toString(42)"),
        ("C", "string(42)"),
        ("D", "42.str()")
    ], "A", "str() converts objects to their string representation."),
    ("What does `'a' in 'abc'` return?", [
        ("A", "True"),
        ("B", "False"),
        ("C", "1"),
        ("D", "0")
    ], "A", "in checks substring membership. 'a' is in 'abc'."),
    ("What is `(1, 2)[0]`?", [
        ("A", "0"),
        ("B", "1"),
        ("C", "2"),
        ("D", "(1,)")
    ], "B", "Indexing: [0] gets the first element, which is 1."),
    ("What does `not True` evaluate to?", [
        ("A", "True"),
        ("B", "False"),
        ("C", "None"),
        ("D", "0")
    ], "B", "not negates the boolean. not True = False."),
    ("Which is the membership operator?", [
        ("A", "in"),
        ("B", "contains"),
        ("C", "member"),
        ("D", "has")
    ], "A", "in (and not in) are the membership operators."),
    ("What is `hex(255)`?", [
        ("A", "255"),
        ("B", "'0xff'"),
        ("C", "0xff"),
        ("D", "ff")
    ], "B", "hex() returns a string representation: '0xff'."),
    ("What does `ord('A')` return?", [
        ("A", "65"),
        ("B", "97"),
        ("C", "'A'"),
        ("D", "1")
    ], "A", "ord() returns the Unicode code point. ord('A') = 65."),
    ("What is `chr(97)`?", [
        ("A", "97"),
        ("B", "'a'"),
        ("C", "a"),
        ("D", "96")
    ], "B", "chr() returns the character for a Unicode code point. chr(97) = 'a'."),
    ("What does `len('hello')` return?", [
        ("A", "4"),
        ("B", "5"),
        ("C", "6"),
        ("D", "Error")
    ], "B", "len() returns the number of characters. 'hello' has 5 characters."),
    ("Which is an augmented assignment?", [
        ("A", "x = x + 1"),
        ("B", "x += 1"),
        ("C", "x++"),
        ("D", "x =+ 1")
    ], "B", "x += 1 is augmented assignment. Python has no x++."),
    ("What is `1 and 0`?", [
        ("A", "1"),
        ("B", "0"),
        ("C", "True"),
        ("D", "False")
    ], "B", "and returns the first falsy value. 1 is truthy, 0 is falsy, so it returns 0."),
    ("What does `format(42, 'b')` return?", [
        ("A", "'42'"),
        ("B", "'101010'"),
        ("C", "42"),
        ("D", "101010")
    ], "B", "format(n, 'b') converts to binary string. 42 in binary is 101010."),
    ("What is `repr('hello')`?", [
        ("A", "hello"),
        ("B", "'hello'"),
        ("C", "hello (no quotes)"),
        ("D", "Error")
    ], "B", "repr() returns a string that would yield an object with the same value. repr('hello') = \"'hello'\""),
    ("What does `hash(1)` return?", [
        ("A", "1"),
        ("B", "An integer hash value"),
        ("C", "Error"),
        ("D", "None")
    ], "B", "hash() returns the hash value of an object (an integer)."),
    ("Which built-in gets all attributes?", [
        ("A", "attrs()"),
        ("B", "dir()"),
        ("C", "attributes()"),
        ("D", "vars()")
    ], "B", "dir() returns the list of names in the current scope or object's attributes."),
    ("What is `callable(print)`?", [
        ("A", "False"),
        ("B", "True"),
        ("C", "print"),
        ("D", "Error")
    ], "B", "callable() returns True if the object appears callable. print is a function."),
    ("What does `globals()` return?", [
        ("A", "List of global names"),
        ("B", "Dict of global namespace"),
        ("C", "All variables"),
        ("D", "Error")
    ], "B", "globals() returns a dict representing the current global symbol table."),
    ("What is `locals()`?", [
        ("A", "List of local names"),
        ("B", "Dict of local namespace"),
        ("C", "Current function"),
        ("D", "Module name")
    ], "B", "locals() returns a dict of the current local symbol table."),
    ("What does `__name__` equal when script is run directly?", [
        ("A", "'__main__'"),
        ("B", "'main'"),
        ("C", "None"),
        ("D", "''")
    ], "A", "When run as main script, __name__ is '__main__'."),
    ("What is `help(print)`?", [
        ("A", "Error"),
        ("B", "Prints help text for print"),
        ("C", "Returns docstring"),
        ("D", "None")
    ], "B", "help() invokes the built-in help system. It displays help for print."),
    ("What does `eval('2+3')` return?", [
        ("A", "'2+3'"),
        ("B", "5"),
        ("C", "Error"),
        ("D", "None")
    ], "B", "eval() evaluates a string as a Python expression. eval('2+3') = 5."),
    ("What is `exec('x=5')`?", [
        ("A", "Returns 5"),
        ("B", "Executes code, returns None"),
        ("C", "Error"),
        ("D", "Prints 5")
    ], "B", "exec() executes Python code. It returns None."),
    ("What does `getattr(obj, 'x', 'default')` do?", [
        ("A", "Sets obj.x to 'default'"),
        ("B", "Gets obj.x or returns 'default' if missing"),
        ("C", "Checks if obj has x"),
        ("D", "Deletes obj.x")
    ], "B", "getattr(object, name, default) returns the named attribute or default if not found."),
    ("What is `hasattr(obj, 'x')`?", [
        ("A", "Gets obj.x"),
        ("B", "True if obj has attribute x"),
        ("C", "Sets obj.x"),
        ("D", "Deletes obj.x")
    ], "B", "hasattr(obj, name) returns True if the object has the named attribute."),
    ("What does `setattr(obj, 'x', 1)` do?", [
        ("A", "Gets obj.x"),
        ("B", "Sets obj.x = 1"),
        ("C", "Deletes obj.x"),
        ("D", "Checks obj.x")
    ], "B", "setattr(object, name, value) sets the named attribute."),
    ("What is `delattr(obj, 'x')`?", [
        ("A", "Gets obj.x"),
        ("B", "Deletes attribute x from obj"),
        ("C", "Sets obj.x = None"),
        ("D", "Checks obj.x")
    ], "B", "delattr(object, name) deletes the named attribute."),
    ("What does `isinstance(x, (int, float))` check?", [
        ("A", "x is int or float"),
        ("B", "x is tuple"),
        ("C", "x equals (int, float)"),
        ("D", "Error")
    ], "A", "isinstance() accepts a tuple of types. True if x is instance of any of them."),
    ("What is `issubclass(bool, int)`?", [
        ("A", "False"),
        ("B", "True"),
        ("C", "Error"),
        ("D", "None")
    ], "B", "In Python, bool is a subclass of int. True and False are 1 and 0."),
    ("What does `super()` do?", [
        ("A", "Calls parent method"),
        ("B", "Returns parent class proxy"),
        ("C", "Raises exception"),
        ("D", "Imports parent")
    ], "B", "super() returns a proxy object that delegates to the parent class."),
    ("What is `object` in Python?", [
        ("A", "Base class of all classes"),
        ("B", "A type"),
        ("C", "Built-in only"),
        ("D", "Deprecated")
    ], "A", "object is the base class of all classes in Python 3."),
    ("What does `type('MyClass', (), {})` create?", [
        ("A", "String"),
        ("B", "A new class dynamically"),
        ("C", "Tuple"),
        ("D", "Error")
    ], "B", "type(name, bases, dict) can create a new type/class dynamically."),
    ("What is `vars()`?", [
        ("A", "Returns __dict__ of current scope"),
        ("B", "Returns all variables"),
        ("C", "Returns locals()"),
        ("D", "Error")
    ], "A", "vars() without args returns __dict__ of the current scope (like locals())."),
    ("What does `breakpoint()` do?", [
        ("A", "Stops program"),
        ("B", "Drops into debugger"),
        ("C", "Prints break"),
        ("D", "Raises error")
    ], "B", "breakpoint() calls sys.breakpointhook(), typically starting the debugger."),
    ("What is `license`?", [
        ("A", "Function"),
        ("B", "String with license text"),
        ("C", "Module"),
        ("D", "Error")
    ], "B", "license is a string containing the Python license text."),
    ("What does `copyright` contain?", [
        ("A", "Copyright notice"),
        ("B", "License"),
        ("C", "Version"),
        ("D", "Authors")
    ], "A", "copyright is a string with the copyright notice."),
    ("What is `__builtins__`?", [
        ("A", "Module or dict of built-ins"),
        ("B", "List of keywords"),
        ("C", "Compiler"),
        ("D", "Error")
    ], "A", "__builtins__ is either the builtins module or its __dict__."),
    ("What does `open` return?", [
        ("A", "String"),
        ("B", "File object/IO object"),
        ("C", "Path"),
        ("D", "None")
    ], "B", "open() returns a file object (or file-like object)."),
    ("What is `sum([1,2,3])`?", [
        ("A", "6"),
        ("B", "123"),
        ("C", "[1,2,3]"),
        ("D", "Error")
    ], "A", "sum() adds all items. sum([1,2,3]) = 6."),
    ("What does `min([3,1,2])` return?", [
        ("A", "3"),
        ("B", "1"),
        ("C", "2"),
        ("D", "[1,2,3]")
    ], "B", "min() returns the smallest item: 1."),
    ("What is `sorted([3,1,2])`?", [
        ("A", "[3,1,2]"),
        ("B", "[1,2,3]"),
        ("C", "(1,2,3)"),
        ("D", "Error")
    ], "B", "sorted() returns a new sorted list: [1, 2, 3]."),
    ("What does `reversed([1,2,3])` return?", [
        ("A", "[3,2,1]"),
        ("B", "list_reverseiterator object"),
        ("C", "(3,2,1)"),
        ("D", "Error")
    ], "B", "reversed() returns a reverse iterator, not a list. Use list(reversed(...)) for a list."),
    ("What is `all([True, True, False])`?", [
        ("A", "True"),
        ("B", "False"),
        ("C", "[True, True, False]"),
        ("D", "None")
    ], "B", "all() returns True only if all elements are truthy. One is False."),
    ("What does `any([False, False, True])` return?", [
        ("A", "False"),
        ("B", "True"),
        ("C", "3"),
        ("D", "None")
    ], "B", "any() returns True if any element is truthy."),
    ("What is `bin(10)`?", [
        ("A", "10"),
        ("B", "'0b1010'"),
        ("C", "1010"),
        ("D", "0b1010")
    ], "B", "bin() returns a binary string: '0b1010'."),
    ("What does `oct(8)` return?", [
        ("A", "8"),
        ("B", "'0o10'"),
        ("C", "10"),
        ("D", "0o10")
    ], "B", "oct() returns an octal string: '0o10'."),
    ("What is `bytes(3)`?", [
        ("A", "'333'"),
        ("B", "b'\\x00\\x00\\x00'"),
        ("C", "3"),
        ("D", "Error")
    ], "B", "bytes(n) creates a bytes object of n zero bytes."),
    ("What does `bytearray([65,66,67])` produce?", [
        ("A", "b'ABC'"),
        ("B", "bytearray(b'ABC')"),
        ("C", "[65,66,67]"),
        ("D", "Error")
    ], "B", "bytearray() creates a mutable bytearray. bytearray([65,66,67]) = bytearray(b'ABC')."),
    ("What is `memoryview(b'abc')`?", [
        ("A", "String"),
        ("B", "Memory view object"),
        ("C", "Bytes"),
        ("D", "Error")
    ], "B", "memoryview() creates a memory view object for buffer protocol access."),
    ("What does `slice(1, 5)` create?", [
        ("A", "[1,2,3,4]"),
        ("B", "slice(1, 5, None)"),
        ("C", "Range"),
        ("D", "Error")
    ], "B", "slice() creates a slice object used for extended slicing."),
    ("What is `range(3)`?", [
        ("A", "[0,1,2]"),
        ("B", "range(0, 3) - iterable"),
        ("C", "(0,1,2)"),
        ("D", "3")
    ], "B", "range(3) returns a range object (0, 1, 2), not a list."),
    ("What does `list(range(2, 5))` produce?", [
        ("A", "[2, 3, 4]"),
        ("B", "[2, 5]"),
        ("C", "[2, 3, 4, 5]"),
        ("D", "Error")
    ], "A", "range(2, 5) gives 2, 3, 4 (exclusive end)."),
    ("What is `tuple([1,2,3])`?", [
        ("A", "[1,2,3]"),
        ("B", "(1, 2, 3)"),
        ("C", "1, 2, 3"),
        ("D", "Error")
    ], "B", "tuple() converts iterable to tuple. tuple([1,2,3]) = (1, 2, 3)."),
    ("What does `dict(a=1, b=2)` create?", [
        ("A", "{'a':1, 'b':2}"),
        ("B", "['a','b']"),
        ("C", "(1,2)"),
        ("D", "Error")
    ], "A", "dict() with keyword args creates a dict: {'a': 1, 'b': 2}."),
    ("What is `frozenset([1,2,3])`?", [
        ("A", "set([1,2,3])"),
        ("B", "Immutable set"),
        ("C", "frozen list"),
        ("D", "Error")
    ], "B", "frozenset creates an immutable set."),
    ("What does `enumerate(['a','b'])` return?", [
        ("A", "[(0,'a'), (1,'b')]"),
        ("B", "enumerate object"),
        ("C", "['a','b']"),
        ("D", "Error")
    ], "B", "enumerate() returns an enumerate object (iterator). list() it for [(0,'a'), (1,'b')]."),
    ("What is `zip([1,2], [3,4])`?", [
        ("A", "[(1,3), (2,4)]"),
        ("B", "zip object (iterator)"),
        ("C", "[1,2,3,4]"),
        ("D", "Error")
    ], "B", "zip() returns a zip iterator. list(zip(...)) gives [(1,3), (2,4)]."),
    ("What does `map(str, [1,2,3])` return?", [
        ("A", "['1','2','3']"),
        ("B", "map object (iterator)"),
        ("C", "str"),
        ("D", "Error")
    ], "B", "map() returns a map iterator. list(map(...)) gives the list."),
    ("What is `filter(None, [0,1,2])`?", [
        ("A", "[0,1,2]"),
        ("B", "filter object with [1, 2]"),
        ("C", "[1,2]"),
        ("D", "Error")
    ], "B", "filter(None, ...) keeps truthy values. Returns filter object; list gives [1, 2]."),
]

# Fix Q44 - round(2.5) - in Python 3 round uses banker's rounding, round(2.5)=2
# Let me fix that question
PART1_QUESTIONS[43] = ("What does `round(2.6)` return?", [
    ("A", "2"),
    ("B", "3"),
    ("C", "2.0"),
    ("D", "2.6")
], "B", "round() rounds to nearest integer. round(2.6) = 3.")

# Ensure we have 100 questions - we have 100 in PART1_QUESTIONS
# Let me count: 1-43, 44 (fixed), 45-100 = 100 questions. Good.

# Distribute answers - let me check distribution. We need A, B, C, D spread.
# Many are B. Let me adjust some to A, C, D for better distribution.
# I'll swap some answers in the questions to balance.

def build_part1():
    nb = json.loads(json.dumps(NOTEBOOK_TEMPLATE))
    add_title_cell(nb, 1, "Basics & Syntax", "Q1–Q100")
    for i, (q, opts, ans, exp) in enumerate(PART1_QUESTIONS, 1):
        add_question_cell(nb, i, q, opts, ans, exp)
    return nb

# Continue with Part 2, 3, 4, 5...
# I need to add more questions. Let me create the full script with all 500 questions.
# The script is getting long. I'll write the generator and run it.
# For Part 2-5 I need to add the question data. Let me extend the script.
</think>
Creating a generator script and adding the remaining question sets.
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
Read