"""Generate exercise notebooks with proper nbformat structure."""
import json
import os

EXERCISES_DIR = os.path.dirname(os.path.abspath(__file__))

NOTEBOOK_META = {
    "kernelspec": {
        "display_name": "Python 3",
        "language": "python",
        "name": "python3"
    },
    "language_info": {
        "name": "python",
        "version": "3.10.0"
    }
}

def make_md_cell(source):
    return {"cell_type": "markdown", "metadata": {}, "source": source if isinstance(source, list) else [source]}

def make_code_cell(source):
    return {"cell_type": "code", "execution_count": None, "metadata": {}, "outputs": [], "source": source if isinstance(source, list) else [source]}

def build_notebook(cells):
    return {
        "cells": cells,
        "metadata": NOTEBOOK_META,
        "nbformat": 4,
        "nbformat_minor": 5
    }

# Part 1: Basics (E1-E50)
PART1_EXERCISES = [
    (1, "Declare a Variable", "Declare a variable named `greeting` and assign it the string 'Hello, World!'", "greeting = ", "assert greeting == 'Hello, World!'"),
    (2, "Type Conversion", "Convert the string '42' to an integer and store it in `num`", "num = ", "assert num == 42 and type(num) == int"),
    (3, "Arithmetic Operators", "Compute `a + b * 2` where a=5 and b=3. Store result in `result`", "a, b = 5, 3\nresult = ", "assert result == 11"),
    (4, "String Concatenation", "Concatenate first='John' and last='Doe' with a space. Store in `full_name`", "first, last = 'John', 'Doe'\nfull_name = ", "assert full_name == 'John Doe'"),
    (5, "Boolean AND", "Return True if both x and y are positive. x=5, y=-2", "x, y = 5, -2\nboth_positive = ", "assert both_positive == False"),
    (6, "Boolean OR", "Return True if at least one of a or b is even. a=3, b=5", "a, b = 3, 5\nat_least_one_even = ", "assert at_least_one_even == False"),
    (7, "Comparison Operators", "Check if score (85) is >= 80. Store in `passed`", "score = 85\npassed = ", "assert passed == True"),
    (8, "None Check", "Return True if value is None, else False. value=None", "value = None\nis_none = ", "assert is_none == True"),
    (9, "Chained Comparison", "Check if n is between 1 and 10 inclusive. n=5", "n = 5\nin_range = ", "assert in_range == True"),
    (10, "Boolean Not", "Return the negation of flag. flag=True", "flag = True\nnegated = ", "assert negated == False"),
    (11, "Simple If", "If age >= 18, set status='adult', else 'minor'. age=20", "age = 20\nstatus = ", "assert status == 'adult'"),
    (12, "If-Elif-Else", "Return 'child' if age<13, 'teen' if age<20, else 'adult'. age=15", "age = 15\ncategory = ", "assert category == 'teen'"),
    (13, "Multiple Conditions", "Return True if year is divisible by 4 and not by 100, or divisible by 400. year=2024", "year = 2024\nis_leap = ", "assert is_leap == True"),
    (14, "Ternary Expression", "Use ternary: max_val = a if a>b else b. a=7, b=12", "a, b = 7, 12\nmax_val = ", "assert max_val == 12"),
    (15, "Nested If", "If x>0: if x>10 return 'large' else 'small'. Else 'non-positive'. x=5", "x = 5\nsize = ", "assert size == 'small'"),
    (16, "Elif Chain", "Grade: A if >=90, B if >=80, C if >=70, D if >=60, else F. score=85", "score = 85\ngrade = ", "assert grade == 'B'"),
    (17, "Truthiness Check", "Return 'empty' if items is falsy, else 'has_items'. items=[]", "items = []\nresult = ", "assert result == 'empty'"),
    (18, "In Operator", "Check if 'a' is in the string 'banana'. Store in `contains`", "contains = ", "assert contains == True"),
    (19, "Conditional Assignment", "Set sign to 1 if n>0, -1 if n<0, else 0. n=-5", "n = -5\nsign = ", "assert sign == -1"),
    (20, "Compound Condition", "Return True if password length >= 8 and has digit. password='secret12'", "password = 'secret12'\nvalid = ", "assert valid == True"),
    (21, "For Loop Sum", "Sum all numbers from 1 to 10 using a for loop. Store in `total`", "total = 0\n# YOUR CODE HERE\n", "assert total == 55"),
    (22, "For Loop Over List", "Count how many items in [1,2,3,4,5] are greater than 3. Store in `count`", "nums = [1, 2, 3, 4, 5]\ncount = ", "assert count == 2"),
    (23, "Range Basics", "Create a list of numbers from 0 to 4 using range(). Store in `numbers`", "numbers = ", "assert numbers == [0, 1, 2, 3, 4]"),
    (24, "Range with Step", "Create list of even numbers from 2 to 10 using range. Store in `evens`", "evens = ", "assert evens == [2, 4, 6, 8, 10]"),
    (25, "While Loop", "Use while to build list [1,2,3,4,5]. Start from 1, stop at 5", "result = []\n# YOUR CODE HERE\n", "assert result == [1, 2, 3, 4, 5]"),
    (26, "Loop with Index", "Build list of (index, value) for ['a','b','c']. Use enumerate", "items = ['a', 'b', 'c']\npairs = ", "assert pairs == [(0, 'a'), (1, 'b'), (2, 'c')]"),
    (27, "Iterate String", "Count vowels (a,e,i,o,u) in 'hello'. Store in `vowel_count`", "s = 'hello'\nvowel_count = ", "assert vowel_count == 2"),
    (28, "Range Reverse", "Create list [5,4,3,2,1] using range", "reversed_nums = ", "assert reversed_nums == [5, 4, 3, 2, 1]"),
    (29, "Loop Accumulator", "Compute product of [2,3,4]. Store in `product`", "nums = [2, 3, 4]\nproduct = 1\n# YOUR CODE HERE\n", "assert product == 24"),
    (30, "Loop with Condition", "Sum only positive numbers from [-1, 2, -3, 4, 5]. Store in `pos_sum`", "nums = [-1, 2, -3, 4, 5]\npos_sum = ", "assert pos_sum == 11"),
    (31, "Nested Loop", "Build 2x2 matrix [[1,2],[3,4]] using nested loops", "matrix = []\n# YOUR CODE HERE\n", "assert matrix == [[1, 2], [3, 4]]"),
    (32, "Break in Loop", "Find first index where nums[i] > 5. nums=[1,3,7,2,9]. Use break", "nums = [1, 3, 7, 2, 9]\nfirst_index = -1\n# YOUR CODE HERE\n", "assert first_index == 2"),
    (33, "Continue in Loop", "Sum nums skipping negatives. nums=[1,-2,3,-4,5]", "nums = [1, -2, 3, -4, 5]\nsum_positive = 0\n# YOUR CODE HERE\n", "assert sum_positive == 9"),
    (34, "Nested Loop Pattern", "Print-like: build list of 'i*j' for i in 1..2, j in 1..2. Result: ['1*1','1*2','2*1','2*2']", "result = []\n# YOUR CODE HERE\n", "assert result == ['1*1', '1*2', '2*1', '2*2']"),
    (35, "Loop with Else", "Find if 7 is in [1,2,3,4,5]. Use for-else: found=False, break sets found=True", "nums = [1, 2, 3, 4, 5]\nfound = False\n# YOUR CODE HERE\n", "assert found == False"),
    (36, "Double Loop Sum", "Sum all elements of [[1,2],[3,4]]. Use nested loops", "matrix = [[1, 2], [3, 4]]\ntotal = 0\n# YOUR CODE HERE\n", "assert total == 10"),
    (37, "Early Exit", "Return first even number from [1,3,5,6,7] or None. Use loop with return/break", "nums = [1, 3, 5, 6, 7]\nfirst_even = None\n# YOUR CODE HERE\n", "assert first_even == 6"),
    (38, "Loop Counter", "Count occurrences of 2 in [1,2,2,3,2,4]. Store in `count`", "nums = [1, 2, 2, 3, 2, 4]\ncount = 0\n# YOUR CODE HERE\n", "assert count == 3"),
    (39, "Pattern: Multiplication Table Row", "Build list [3,6,9,12] (3*1 through 3*4) using loop", "row = []\n# YOUR CODE HERE\n", "assert row == [3, 6, 9, 12]"),
    (40, "Loop with Range and Condition", "Build list of squares of even numbers from 0 to 8: [0,4,16,36,64]", "squares = []\n# YOUR CODE HERE\n", "assert squares == [0, 4, 16, 36, 64]"),
    (41, "Swap Variables", "Swap values of a and b. a=1, b=2. Result: a=2, b=1", "a, b = 1, 2\n# YOUR CODE HERE\n", "assert a == 2 and b == 1"),
    (42, "Multiple Assignment", "Unpack (10, 20, 30) into x, y, z", "t = (10, 20, 30)\nx, y, z = ", "assert x == 10 and y == 20 and z == 30"),
    (43, "Modulo Check", "Return True if n is divisible by 7. n=21", "n = 21\ndivisible_by_7 = ", "assert divisible_by_7 == True"),
    (44, "Integer Division", "Compute how many times 3 fits into 10. Store in `times`", "times = ", "assert times == 3"),
    (45, "Power Operator", "Compute 2**10. Store in `result`", "result = ", "assert result == 1024"),
    (46, "Sum of Digits", "Sum digits of 123 (1+2+3). Store in `digit_sum`", "n = 123\ndigit_sum = ", "assert digit_sum == 6"),
    (47, "Factorial Loop", "Compute 5! (5*4*3*2*1) using a loop. Store in `factorial`", "n = 5\nfactorial = 1\n# YOUR CODE HERE\n", "assert factorial == 120"),
    (48, "Fibonacci First N", "First 6 Fibonacci numbers: [1,1,2,3,5,8]. Store in `fib`", "n = 6\nfib = []\n# YOUR CODE HERE\n", "assert fib == [1, 1, 2, 3, 5, 8]"),
    (49, "Prime Check", "Return True if n is prime. n=17", "n = 17\nis_prime = ", "assert is_prime == True"),
    (50, "GCD of Two Numbers", "Compute GCD of 48 and 18 using loop. Result: 6", "a, b = 48, 18\ngcd = ", "assert gcd == 6"),
]

def create_part1():
    cells = [
        make_md_cell("# 🐍 Python Exercises — Part 1: Basics (E1–E50)\n\nVariables, types, operators, control flow, loops.")
    ]
    for ex_num, title, desc, starter, test in PART1_EXERCISES:
        cells.append(make_md_cell(f"### Exercise {ex_num}: {title}\n\n{desc}"))
        cells.append(make_code_cell(starter + "\n# YOUR CODE HERE" if "# YOUR CODE HERE" not in starter else starter))
        cells.append(make_code_cell(f"{test}\nprint('✅ Exercise {ex_num} passed!')"))
    return build_notebook(cells)

# Write Part 1
with open(os.path.join(EXERCISES_DIR, "exercises-part1-basics.ipynb"), "w", encoding="utf-8") as f:
    json.dump(create_part1(), f, indent=1, ensure_ascii=False)
print("Created exercises-part1-basics.ipynb")
