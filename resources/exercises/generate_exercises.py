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

def add_exercise_cells(cells, exercises, part_title, part_subtitle):
    """Add exercise cells to the cells list."""
    for ex_num, title, desc, starter, test in exercises:
        cells.append(make_md_cell(f"### Exercise {ex_num}: {title}\n\n{desc}"))
        cells.append(make_code_cell(starter + "\n# YOUR CODE HERE" if "# YOUR CODE HERE" not in starter else starter))
        cells.append(make_code_cell(f"{test}\nprint('✅ Exercise {ex_num} passed!')"))

# Part 2: Strings and Lists (E51-E100)
PART2_EXERCISES = [
    (51, "Reverse a String", "Reverse the string 'hello' and store in `reversed_s`", "s = 'hello'\nreversed_s = ", "assert reversed_s == 'olleh'"),
    (52, "Palindrome Check", "Return True if s is a palindrome. s='radar'", "s = 'radar'\nis_palindrome = ", "assert is_palindrome == True"),
    (53, "Count Character", "Count occurrences of 'l' in 'hello'. Store in `count`", "s = 'hello'\nchar = 'l'\ncount = ", "assert count == 2"),
    (54, "Title Case", "Convert 'hello world' to title case. Store in `title_s`", "s = 'hello world'\ntitle_s = ", "assert title_s == 'Hello World'"),
    (55, "Strip Whitespace", "Remove leading/trailing spaces from '  python  '. Store in `cleaned`", "s = '  python  '\ncleaned = ", "assert cleaned == 'python'"),
    (56, "Replace Substring", "Replace all 'a' with 'o' in 'banana'. Store in `result`", "s = 'banana'\nresult = ", "assert result == 'bonono'"),
    (57, "Split and Join", "Split 'a-b-c' by '-' then join with '.'. Store in `result`", "s = 'a-b-c'\nresult = ", "assert result == 'a.b.c'"),
    (58, "String Slicing", "Extract chars from index 2 to 5 (excl) of 'python'. Store in `sub`", "s = 'python'\nsub = ", "assert sub == 'tho'"),
    (59, "Check Start/End", "Return True if s starts with 'py'. s='python'", "s = 'python'\nstarts_py = ", "assert starts_py == True"),
    (60, "String Length", "Get length of 'hello world'. Store in `length`", "s = 'hello world'\nlength = ", "assert length == 11"),
    (61, "Upper and Lower", "Convert 'Python' to uppercase, then take first 3 chars and convert to lowercase. Store in `result`", "s = 'Python'\nresult = ", "assert result == 'pyt'"),
    (62, "Find Substring Index", "Find index of 'world' in 'hello world'. Store in `idx`", "s = 'hello world'\nidx = ", "assert idx == 6"),
    (63, "Count Words", "Count words in 'one two three'. Store in `word_count`", "s = 'one two three'\nword_count = ", "assert word_count == 3"),
    (64, "Remove Vowels", "Remove all vowels from 'hello'. Store in `result`", "s = 'hello'\nresult = ", "assert result == 'hll'"),
    (65, "String Repetition", "Repeat 'ab' 3 times. Store in `result`", "s = 'ab'\nn = 3\nresult = ", "assert result == 'ababab'"),
    (66, "Flatten Nested List", "Flatten [[1,2],[3,4],[5]] to [1,2,3,4,5]. Store in `flat`", "nested = [[1, 2], [3, 4], [5]]\nflat = ", "assert flat == [1, 2, 3, 4, 5]"),
    (67, "Rotate List", "Rotate [1,2,3,4,5] left by 2. Result: [3,4,5,1,2]", "lst = [1, 2, 3, 4, 5]\nk = 2\nrotated = ", "assert rotated == [3, 4, 5, 1, 2]"),
    (68, "Chunk List", "Split [1,2,3,4,5,6] into chunks of 2. Result: [[1,2],[3,4],[5,6]]", "lst = [1, 2, 3, 4, 5, 6]\nsize = 2\nchunks = ", "assert chunks == [[1, 2], [3, 4], [5, 6]]"),
    (69, "Deduplicate Preserving Order", "Remove duplicates from [1,2,2,3,1,4] preserving order. Result: [1,2,3,4]", "lst = [1, 2, 2, 3, 1, 4]\nunique = ", "assert unique == [1, 2, 3, 4]"),
    (70, "List Sum", "Sum all elements of [10, 20, 30]. Store in `total`", "lst = [10, 20, 30]\ntotal = ", "assert total == 60"),
    (71, "List Max and Min", "Find max and min of [3,1,4,1,5]. Store in `max_val`, `min_val`", "lst = [3, 1, 4, 1, 5]\nmax_val = \nmin_val = ", "assert max_val == 5 and min_val == 1"),
    (72, "Append and Extend", "Start with [1,2]. Append 3, then extend with [4,5]. Result: [1,2,3,4,5]", "lst = [1, 2]\n# YOUR CODE HERE\n", "assert lst == [1, 2, 3, 4, 5]"),
    (73, "List Slicing", "Get every 2nd element from [0,1,2,3,4,5]. Result: [0,2,4]", "lst = [0, 1, 2, 3, 4, 5]\nevery_second = ", "assert every_second == [0, 2, 4]"),
    (74, "Reverse List", "Reverse [1,2,3,4,5] in place. Result: [5,4,3,2,1]", "lst = [1, 2, 3, 4, 5]\n# YOUR CODE HERE\n", "assert lst == [5, 4, 3, 2, 1]"),
    (75, "Insert at Index", "Insert 99 at index 2 in [1,2,3,4]. Result: [1,2,99,3,4]", "lst = [1, 2, 3, 4]\n# YOUR CODE HERE\n", "assert lst == [1, 2, 99, 3, 4]"),
    (76, "Remove Element", "Remove first occurrence of 2 from [1,2,3,2,4]. Result: [1,3,2,4]", "lst = [1, 2, 3, 2, 4]\n# YOUR CODE HERE\n", "assert lst == [1, 3, 2, 4]"),
    (77, "List Comprehension Squares", "Create list of squares of [1,2,3,4,5]. Result: [1,4,9,16,25]", "nums = [1, 2, 3, 4, 5]\nsquares = ", "assert squares == [1, 4, 9, 16, 25]"),
    (78, "Filter Even Numbers", "Filter even numbers from [1,2,3,4,5,6]. Result: [2,4,6]", "nums = [1, 2, 3, 4, 5, 6]\nevens = ", "assert evens == [2, 4, 6]"),
    (79, "List Copy", "Create a shallow copy of [1,2,3]. Store in `copy` (modifying copy shouldn't affect original)", "original = [1, 2, 3]\ncopy = ", "assert copy == [1, 2, 3] and copy is not original"),
    (80, "Merge Sorted Lists", "Merge sorted [1,3,5] and [2,4,6] into one sorted list. Result: [1,2,3,4,5,6]", "a, b = [1, 3, 5], [2, 4, 6]\nmerged = ", "assert merged == [1, 2, 3, 4, 5, 6]"),
    (81, "Tuple Creation", "Create tuple (1, 2, 3) and store in `t`", "t = ", "assert t == (1, 2, 3)"),
    (82, "Tuple Unpacking", "Unpack (10, 20) into variables a and b", "t = (10, 20)\na, b = ", "assert a == 10 and b == 20"),
    (83, "Tuple Concatenation", "Concatenate (1,2) and (3,4). Result: (1,2,3,4)", "t1, t2 = (1, 2), (3, 4)\ncombined = ", "assert combined == (1, 2, 3, 4)"),
    (84, "Tuple Index", "Get index of 3 in (1,2,3,4). Store in `idx`", "t = (1, 2, 3, 4)\nidx = ", "assert idx == 2"),
    (85, "Tuple to List", "Convert tuple (1,2,3) to list. Store in `lst`", "t = (1, 2, 3)\nlst = ", "assert lst == [1, 2, 3]"),
    (86, "Swap with Tuple", "Swap x and y using tuple unpacking. x=1, y=2", "x, y = 1, 2\n# YOUR CODE HERE\n", "assert x == 2 and y == 1"),
    (87, "Named Tuple Style", "Create a simple point as tuple (x,y). x=3, y=4. Store in `point`", "x, y = 3, 4\npoint = ", "assert point == (3, 4) and point[0] == 3"),
    (88, "Tuple Count", "Count occurrences of 2 in (1,2,2,3,2). Store in `count`", "t = (1, 2, 2, 3, 2)\ncount = ", "assert count == 3"),
    (89, "Tuple Slicing", "Get first 3 elements of (1,2,3,4,5). Result: (1,2,3)", "t = (1, 2, 3, 4, 5)\nfirst_three = ", "assert first_three == (1, 2, 3)"),
    (90, "Tuple Unpacking with *", "Unpack (1,2,3,4,5): first=1, rest=[2,3,4,5]", "t = (1, 2, 3, 4, 5)\nfirst, *rest = ", "assert first == 1 and rest == [2, 3, 4, 5]"),
    (91, "Anagram Check", "Return True if 'listen' and 'silent' are anagrams", "s1, s2 = 'listen', 'silent'\nis_anagram = ", "assert is_anagram == True"),
    (92, "Word Frequency", "Count frequency of each word in 'the cat and the dog'. Store in dict `freq`", "s = 'the cat and the dog'\nfreq = ", "assert freq.get('the', 0) == 2 and freq.get('cat', 0) == 1"),
    (93, "Longest Word", "Find longest word in 'hello world python'. Store in `longest`", "s = 'hello world python'\nlongest = ", "assert longest == 'python'"),
    (94, "List of Word Lengths", "Create list of word lengths for 'hi hello world'. Result: [2,5,5]", "s = 'hi hello world'\nlengths = ", "assert lengths == [2, 5, 5]"),
    (95, "Capitalize First Letters", "Capitalize first letter of each word in 'hello world'. Result: 'Hello World'", "s = 'hello world'\nresult = ", "assert result == 'Hello World'"),
    (96, "Zip Lists", "Zip [1,2,3] and ['a','b','c'] into list of tuples. Result: [(1,'a'),(2,'b'),(3,'c')]", "nums = [1, 2, 3]\nletters = ['a', 'b', 'c']\nzipped = ", "assert zipped == [(1, 'a'), (2, 'b'), (3, 'c')]"),
    (97, "Alternating List", "Interleave [1,3,5] and [2,4,6]. Result: [1,2,3,4,5,6]", "a, b = [1, 3, 5], [2, 4, 6]\ninterleaved = ", "assert interleaved == [1, 2, 3, 4, 5, 6]"),
    (98, "String to List of Chars", "Convert 'abc' to ['a','b','c']", "s = 'abc'\nchars = ", "assert chars == ['a', 'b', 'c']"),
    (99, "List to String", "Join ['a','b','c'] with ''. Result: 'abc'", "lst = ['a', 'b', 'c']\nresult = ", "assert result == 'abc'"),
    (100, "First and Last", "Get first and last elements of [10,20,30,40]. Store in `first`, `last`", "lst = [10, 20, 30, 40]\nfirst = \nlast = ", "assert first == 10 and last == 40"),
]

# Part 3: Dicts and Sets (E101-E150)
PART3_EXERCISES = [
    (101, "Create Dictionary", "Create dict {'a':1, 'b':2, 'c':3}. Store in `d`", "d = ", "assert d == {'a': 1, 'b': 2, 'c': 3}"),
    (102, "Access Dict Value", "Get value for key 'b' from {'a':1,'b':2,'c':3}. Store in `val`", "d = {'a': 1, 'b': 2, 'c': 3}\nval = ", "assert val == 2"),
    (103, "Dict Get with Default", "Get 'x' from d with default 0. d={'a':1}. Store in `val`", "d = {'a': 1}\nval = ", "assert val == 0"),
    (104, "Merge Dictionaries", "Merge {'a':1} and {'b':2}. Result: {'a':1,'b':2}", "d1, d2 = {'a': 1}, {'b': 2}\nmerged = ", "assert merged == {'a': 1, 'b': 2}"),
    (105, "Invert Dictionary", "Invert {'a':1,'b':2} to {1:'a',2:'b'}. Store in `inverted`", "d = {'a': 1, 'b': 2}\ninverted = ", "assert inverted == {1: 'a', 2: 'b'}"),
    (106, "Dict Keys and Values", "Get list of keys from {'x':1,'y':2}. Store in `keys`", "d = {'x': 1, 'y': 2}\nkeys = ", "assert set(keys) == {'x', 'y'} and len(keys) == 2"),
    (107, "Group By First Letter", "Group words ['apple','ant','banana'] by first letter. Result: {'a':['apple','ant'],'b':['banana']}", "words = ['apple', 'ant', 'banana']\ngrouped = ", "assert grouped['a'] == ['apple', 'ant'] and grouped['b'] == ['banana']"),
    (108, "Frequency Count", "Count frequency of each char in 'aabbbc'. Result: {'a':2,'b':3,'c':1}", "s = 'aabbbc'\nfreq = ", "assert freq == {'a': 2, 'b': 3, 'c': 1}"),
    (109, "Nested Dict Access", "Get value at d['a']['b']. d={'a':{'b':42}}", "d = {'a': {'b': 42}}\nval = ", "assert val == 42"),
    (110, "Update Dict", "Add key 'c' with value 3 to {'a':1,'b':2}. Modify in place", "d = {'a': 1, 'b': 2}\n# YOUR CODE HERE\n", "assert d == {'a': 1, 'b': 2, 'c': 3}"),
    (111, "Dict Pop", "Remove key 'b' from d and get its value. d={'a':1,'b':2,'c':3}", "d = {'a': 1, 'b': 2, 'c': 3}\nremoved = ", "assert removed == 2 and 'b' not in d"),
    (112, "Dict Comprehension", "Create {x: x**2 for x in [1,2,3]}. Result: {1:1,2:4,3:9}", "squares = ", "assert squares == {1: 1, 2: 4, 3: 9}"),
    (113, "Filter Dict by Value", "Get keys where value > 2 from {'a':1,'b':3,'c':2,'d':5}. Result: ['b','d']", "d = {'a': 1, 'b': 3, 'c': 2, 'd': 5}\nkeys_gt_2 = ", "assert set(keys_gt_2) == {'b', 'd'}"),
    (114, "Default Dict Pattern", "Count words: for each word in ['a','b','a','c','a'], increment count. Use dict", "words = ['a', 'b', 'a', 'c', 'a']\ncounts = {}\n# YOUR CODE HERE\n", "assert counts == {'a': 3, 'b': 1, 'c': 1}"),
    (115, "Dict Items Iteration", "Sum all values in {'a':10,'b':20,'c':30}. Store in `total`", "d = {'a': 10, 'b': 20, 'c': 30}\ntotal = ", "assert total == 60"),
    (116, "Two Dicts Same Keys", "Check if d1 and d2 have same keys. d1={'a':1}, d2={'a':2,'b':3} -> False", "d1, d2 = {'a': 1}, {'a': 2, 'b': 3}\nsame_keys = ", "assert same_keys == False"),
    (117, "Dict from Two Lists", "Create dict from keys=['x','y'] and values=[1,2]. Result: {'x':1,'y':2}", "keys = ['x', 'y']\nvalues = [1, 2]\nd = ", "assert d == {'x': 1, 'y': 2}"),
    (118, "Deep Copy Dict", "Create a copy of {'a':1,'b':2} that won't affect original when modified", "d = {'a': 1, 'b': 2}\ncopy = ", "assert copy == d and copy is not d"),
    (119, "Sort Dict by Value", "Get list of keys sorted by value. d={'a':3,'b':1,'c':2}. Result: ['b','c','a']", "d = {'a': 3, 'b': 1, 'c': 2}\nsorted_keys = ", "assert sorted_keys == ['b', 'c', 'a']"),
    (120, "Nested Dict Update", "Set d['a']['x'] = 10. d={'a':{}}", "d = {'a': {}}\n# YOUR CODE HERE\n", "assert d == {'a': {'x': 10}}"),
    (121, "Set Creation", "Create set from [1,2,2,3,3,3]. Result: {1,2,3}", "lst = [1, 2, 2, 3, 3, 3]\ns = ", "assert s == {1, 2, 3}"),
    (122, "Set Intersection", "Intersection of {1,2,3} and {2,3,4}. Result: {2,3}", "a, b = {1, 2, 3}, {2, 3, 4}\ninter = ", "assert inter == {2, 3}"),
    (123, "Set Union", "Union of {1,2} and {2,3}. Result: {1,2,3}", "a, b = {1, 2}, {2, 3}\nunion = ", "assert union == {1, 2, 3}"),
    (124, "Set Difference", "Elements in a but not b. a={1,2,3}, b={2,3}. Result: {1}", "a, b = {1, 2, 3}, {2, 3}\ndiff = ", "assert diff == {1}"),
    (125, "Symmetric Difference", "Elements in either set but not both. a={1,2}, b={2,3}. Result: {1,3}", "a, b = {1, 2}, {2, 3}\nsym_diff = ", "assert sym_diff == {1, 3}"),
    (126, "Subset Check", "Return True if {1,2} is subset of {1,2,3}", "a, b = {1, 2}, {1, 2, 3}\nis_subset = ", "assert is_subset == True"),
    (127, "Set Add", "Add 4 to set {1,2,3}. Modify in place", "s = {1, 2, 3}\n# YOUR CODE HERE\n", "assert s == {1, 2, 3, 4}"),
    (128, "Set Remove Duplicates", "Remove duplicates from [1,2,2,3,1,4] using set. Preserve order via list", "lst = [1, 2, 2, 3, 1, 4]\nunique = ", "assert unique == [1, 2, 3, 4]"),
    (129, "Set Comprehension", "Create set of squares of [1,2,3,4]. Result: {1,4,9,16}", "nums = [1, 2, 3, 4]\nsquares = ", "assert squares == {1, 4, 9, 16}"),
    (130, "Frozen Set", "Create frozenset from (1,2,3). Store in `fs`", "fs = ", "assert fs == frozenset({1, 2, 3})"),
    (131, "Disjoint Check", "Return True if {1,2} and {3,4} have no common elements", "a, b = {1, 2}, {3, 4}\ndisjoint = ", "assert disjoint == True"),
    (132, "Superset Check", "Return True if {1,2,3} is superset of {1,2}", "a, b = {1, 2, 3}, {1, 2}\nis_superset = ", "assert is_superset == True"),
    (133, "Set Length", "Get number of elements in {1,2,3,4,5}. Store in `size`", "s = {1, 2, 3, 4, 5}\nsize = ", "assert size == 5"),
    (134, "Set Discard", "Discard 2 from {1,2,3}. Use discard (no error if missing)", "s = {1, 2, 3}\n# YOUR CODE HERE\n", "assert s == {1, 3}"),
    (135, "Set Update", "Add elements from [4,5,6] to {1,2,3}. Modify in place", "s = {1, 2, 3}\n# YOUR CODE HERE\n", "assert s == {1, 2, 3, 4, 5, 6}"),
    (136, "Word Count", "Count each word in 'the cat sat on the mat'. Store in dict `counts`", "s = 'the cat sat on the mat'\ncounts = ", "assert counts.get('the', 0) == 2 and counts.get('cat', 0) == 1"),
    (137, "Student Grades", "Given {'Alice':85,'Bob':92,'Charlie':78}, return name of student with highest grade", "grades = {'Alice': 85, 'Bob': 92, 'Charlie': 78}\ntop_student = ", "assert top_student == 'Bob'"),
    (138, "Inventory Merge", "Merge inventories: inv1={'a':2,'b':1}, inv2={'a':1,'c':3}. Sum values for same key. Result: {'a':3,'b':1,'c':3}", "inv1, inv2 = {'a': 2, 'b': 1}, {'a': 1, 'c': 3}\nmerged = ", "assert merged == {'a': 3, 'b': 1, 'c': 3}"),
    (139, "Common Keys", "Find keys in both d1 and d2. d1={'a':1,'b':2}, d2={'a':0,'c':3}. Result: {'a'}", "d1, d2 = {'a': 1, 'b': 2}, {'a': 0, 'c': 3}\ncommon = ", "assert common == {'a'}"),
    (140, "Dict Values Sum", "Sum all values in nested dict {'a':{'x':1,'y':2},'b':{'x':3}}. Result: 6", "d = {'a': {'x': 1, 'y': 2}, 'b': {'x': 3}}\ntotal = ", "assert total == 6"),
    (141, "Set from String", "Get unique chars from 'hello'. Result: {'h','e','l','o'}", "s = 'hello'\nunique_chars = ", "assert unique_chars == {'h', 'e', 'l', 'o'}"),
    (142, "Key with Max Value", "Find key with max value in {'a':1,'b':3,'c':2}. Result: 'b'", "d = {'a': 1, 'b': 3, 'c': 2}\nmax_key = ", "assert max_key == 'b'"),
    (143, "Flatten Dict Keys", "Get all keys from nested dict as list. d={'a':1,'b':{'c':2}}. Result: ['a','b','c'] or similar", "d = {'a': 1, 'b': {'c': 2}}\nkeys = ", "assert 'a' in keys and 'b' in keys and 'c' in keys"),
    (144, "Set Operations Chain", "From a={1,2,3}, b={2,3,4}: (a|b) - (a&b). Result: {1,4}", "a, b = {1, 2, 3}, {2, 3, 4}\nresult = ", "assert result == {1, 4}"),
    (145, "Dict Default", "For each key in ['a','b','a'], increment count. Start with {}. Result: {'a':2,'b':1}", "keys = ['a', 'b', 'a']\ncounts = {}\n# YOUR CODE HERE\n", "assert counts == {'a': 2, 'b': 1}"),
    (146, "List to Dict", "Convert [('a',1),('b',2)] to {'a':1,'b':2}", "pairs = [('a', 1), ('b', 2)]\nd = ", "assert d == {'a': 1, 'b': 2}"),
    (147, "Dict to List of Tuples", "Convert {'a':1,'b':2} to [('a',1),('b',2)]", "d = {'a': 1, 'b': 2}\npairs = ", "assert sorted(pairs) == [('a', 1), ('b', 2)]"),
    (148, "Count Distinct", "Count distinct elements in [1,2,2,3,1,4]. Store in `distinct_count`", "lst = [1, 2, 2, 3, 1, 4]\ndistinct_count = ", "assert distinct_count == 4"),
    (149, "Merge with Override", "Merge d2 into d1 (d2 overrides). d1={'a':1}, d2={'a':2,'b':3}. Result: {'a':2,'b':3}", "d1, d2 = {'a': 1}, {'a': 2, 'b': 3}\nmerged = ", "assert merged == {'a': 2, 'b': 3}"),
    (150, "Set of Tuples", "Create set of tuples (i,i+1) for i in 1,2,3. Result: {(1,2),(2,3),(3,4)}", "s = ", "assert s == {(1, 2), (2, 3), (3, 4)}"),
]

# Part 4: Functions (E151-E200)
PART4_EXERCISES = [
    (151, "Define Function", "Define function add(a,b) that returns a+b", "def add(a, b):\n    # YOUR CODE HERE\n", "assert add(2, 3) == 5"),
    (152, "Function with Return", "Define greet(name) returning 'Hello, {name}!'", "def greet(name):\n    # YOUR CODE HERE\n", "assert greet('Alice') == 'Hello, Alice!'"),
    (153, "Default Argument", "Define power(x, n=2) returning x**n. Default n=2", "def power(x, n=2):\n    # YOUR CODE HERE\n", "assert power(3) == 9 and power(3, 3) == 27"),
    (154, "Multiple Returns", "Define min_max(a,b) returning (min, max)", "def min_max(a, b):\n    # YOUR CODE HERE\n", "assert min_max(5, 3) == (3, 5)"),
    (155, "Variable Arguments *args", "Define sum_all(*args) returning sum of all arguments", "def sum_all(*args):\n    # YOUR CODE HERE\n", "assert sum_all(1, 2, 3, 4) == 10"),
    (156, "Keyword Arguments **kwargs", "Define print_kwargs(**kwargs) returning sorted list of keys", "def print_kwargs(**kwargs):\n    # YOUR CODE HERE\n", "assert set(print_kwargs(a=1, b=2)) == {'a', 'b'}"),
    (157, "Docstring", "Define double(x) with docstring 'Doubles x' returning 2*x", "def double(x):\n    # YOUR CODE HERE\n", "assert double(5) == 10"),
    (158, "Optional Parameter", "Define repeat(s, n=1) returning s repeated n times", "def repeat(s, n=1):\n    # YOUR CODE HERE\n", "assert repeat('ab', 3) == 'ababab'"),
    (159, "Type Hints", "Define add_typed(a: int, b: int) -> int", "def add_typed(a: int, b: int) -> int:\n    # YOUR CODE HERE\n", "assert add_typed(1, 2) == 3"),
    (160, "Early Return", "Define is_positive(n) returning True if n>0, False otherwise", "def is_positive(n):\n    # YOUR CODE HERE\n", "assert is_positive(5) and not is_positive(-1)"),
    (161, "Function Call", "Call add(10, 20) and store result in `result`", "def add(a, b): return a + b\nresult = ", "assert result == 30"),
    (162, "Nested Function", "Define outer() that defines inner() and returns inner(). inner returns 42", "def outer():\n    # YOUR CODE HERE\n", "assert outer()() == 42"),
    (163, "Return None", "Define no_op() that explicitly returns None", "def no_op():\n    # YOUR CODE HERE\n", "assert no_op() is None"),
    (164, "Multiple Params", "Define area(w, h) returning w*h", "def area(w, h):\n    # YOUR CODE HERE\n", "assert area(4, 5) == 20"),
    (165, "Keyword Args Call", "Call power(base=2, exp=3) and store in `result`", "def power(base, exp): return base ** exp\nresult = ", "assert result == 8"),
    (166, "Args and Kwargs", "Define wrapper(*args, **kwargs) that returns (len(args), len(kwargs))", "def wrapper(*args, **kwargs):\n    # YOUR CODE HERE\n", "assert wrapper(1, 2, x=3) == (2, 1)"),
    (167, "Mutable Default Fix", "Define append_to(element, lst=None). If lst is None, use []. Return lst with element appended", "def append_to(element, lst=None):\n    # YOUR CODE HERE\n", "a = append_to(1); b = append_to(2); assert a == [1] and b == [2]"),
    (168, "Unpacking Call", "Call add with *[3, 4]. Store in `result`", "def add(a, b): return a + b\nresult = ", "assert result == 7"),
    (169, "Lambda Basics", "Create lambda that doubles x. Store in `double`", "double = ", "assert double(5) == 10"),
    (170, "Lambda Two Args", "Create lambda for a+b. Store in `add`", "add = ", "assert add(2, 3) == 5"),
    (171, "Map", "Use map to double each element of [1,2,3,4]. Store as list in `doubled`", "nums = [1, 2, 3, 4]\ndoubled = ", "assert doubled == [2, 4, 6, 8]"),
    (172, "Filter", "Use filter to get even numbers from [1,2,3,4,5,6]. Store as list in `evens`", "nums = [1, 2, 3, 4, 5, 6]\nevens = ", "assert evens == [2, 4, 6]"),
    (173, "Reduce", "Use reduce (from functools) to compute product of [2,3,4]. Store in `product`", "from functools import reduce\nnums = [2, 3, 4]\nproduct = ", "assert product == 24"),
    (174, "Sorted with Key", "Sort [('b',2),('a',1),('c',3)] by second element. Store in `sorted_pairs`", "pairs = [('b', 2), ('a', 1), ('c', 3)]\nsorted_pairs = ", "assert sorted_pairs == [('a', 1), ('b', 2), ('c', 3)]"),
    (175, "Higher-Order: Apply Twice", "Define apply_twice(f, x) that returns f(f(x)). Test with lambda x: x+1, 0 -> 2", "def apply_twice(f, x):\n    # YOUR CODE HERE\n", "assert apply_twice(lambda x: x + 1, 0) == 2"),
    (176, "Map with Lambda", "Square each element of [1,2,3,4] using map and lambda. Store in `squares`", "nums = [1, 2, 3, 4]\nsquares = ", "assert squares == [1, 4, 9, 16]"),
    (177, "Filter with Lambda", "Filter strings with len > 2 from ['a','ab','abc','abcd']. Store in `long`", "words = ['a', 'ab', 'abc', 'abcd']\nlong = ", "assert long == ['abc', 'abcd']"),
    (178, "Compose", "Define compose(f,g) returning lambda x: f(g(x)). Test: compose(lambda x:x*2, lambda x:x+1)(3)=8", "def compose(f, g):\n    # YOUR CODE HERE\n", "assert compose(lambda x: x*2, lambda x: x+1)(3) == 8"),
    (179, "Partial", "Use functools.partial to create double = partial(mul, 2). mul from operator", "from functools import partial\nfrom operator import mul\ndouble = ", "assert double(5) == 10"),
    (180, "Any and All", "Return True if all nums are positive. nums=[1,2,3,4]", "nums = [1, 2, 3, 4]\nall_positive = ", "assert all_positive == True"),
    (181, "Closure: Counter", "Define make_counter() returning a function that returns 1,2,3,... on each call", "def make_counter():\n    # YOUR CODE HERE\n", "c = make_counter(); assert c()==1 and c()==2 and c()==3"),
    (182, "Closure: Multiplier", "Define make_multiplier(n) returning function that multiplies by n", "def make_multiplier(n):\n    # YOUR CODE HERE\n", "assert make_multiplier(3)(4) == 12"),
    (183, "Recursion: Factorial", "Define factorial(n) recursively. factorial(5)=120", "def factorial(n):\n    # YOUR CODE HERE\n", "assert factorial(5) == 120"),
    (184, "Recursion: Sum List", "Define sum_list(lst) recursively. sum_list([1,2,3])=6", "def sum_list(lst):\n    # YOUR CODE HERE\n", "assert sum_list([1, 2, 3]) == 6"),
    (185, "Recursion: Fibonacci", "Define fib(n) returning nth Fibonacci. fib(6)=8", "def fib(n):\n    # YOUR CODE HERE\n", "assert fib(6) == 8"),
    (186, "Recursion: Reverse String", "Define reverse(s) recursively. reverse('hello')='olleh'", "def reverse(s):\n    # YOUR CODE HERE\n", "assert reverse('hello') == 'olleh'"),
    (187, "Recursion: Power", "Define power(base, exp) recursively. power(2,3)=8", "def power(base, exp):\n    # YOUR CODE HERE\n", "assert power(2, 3) == 8"),
    (188, "Closure: Accumulator", "Define make_accumulator() returning a function. Each call adds to total and returns new total. acc(1) returns 1, acc(2) returns 3, acc(3) returns 6", "def make_accumulator():\n    # YOUR CODE HERE\n", "acc = make_accumulator(); assert acc(1)==1 and acc(2)==3 and acc(3)==6"),
    (189, "Function as Argument", "Define apply_func(f, x, y) returning f(x, y). Test with add", "def apply_func(f, x, y):\n    # YOUR CODE HERE\n", "assert apply_func(lambda a,b: a+b, 3, 4) == 7"),
    (190, "Return Function", "Define make_adder(n) returning function that adds n to its argument", "def make_adder(n):\n    # YOUR CODE HERE\n", "assert make_adder(5)(3) == 8"),
    (191, "Recursion: Count Down", "Define count_down(n) returning list [n,n-1,...,1]. count_down(3)=[3,2,1]", "def count_down(n):\n    # YOUR CODE HERE\n", "assert count_down(3) == [3, 2, 1]"),
    (192, "Recursion: Flatten", "Define flatten(lst) that flattens nested list. flatten([[1],[2,3]])=[1,2,3]", "def flatten(lst):\n    # YOUR CODE HERE\n", "assert flatten([[1], [2, 3]]) == [1, 2, 3]"),
    (193, "Max with Key", "Define max_by(lst, key) returning element with max key(elem). max_by([-1,2,-3], abs)= -3", "def max_by(lst, key):\n    # YOUR CODE HERE\n", "assert max_by([-1, 2, -3], abs) == -3"),
    (194, "Zip with Map", "Use map and zip: add corresponding elements of [1,2,3] and [4,5,6]. Result: [5,7,9]", "a, b = [1, 2, 3], [4, 5, 6]\nresult = ", "assert result == [5, 7, 9]"),
    (195, "Nested Function Scope", "Define outer(x) with inner(y) returning x+y. outer(10)(5)=15", "def outer(x):\n    # YOUR CODE HERE\n", "assert outer(10)(5) == 15"),
    (196, "Recursion: Palindrome", "Define is_palindrome(s) recursively. is_palindrome('radar')=True", "def is_palindrome(s):\n    # YOUR CODE HERE\n", "assert is_palindrome('radar') == True"),
    (197, "Curry", "Define curry2(f) that curries a 2-arg function. curry2(add)(1)(2)=3", "def curry2(f):\n    # YOUR CODE HERE\n", "assert curry2(lambda a,b: a+b)(1)(2) == 3"),
    (198, "Memoization Pattern", "Define memoize(f) that caches results. Cached function returns same result for same args without recomputing", "def memoize(f):\n    cache = {}\n    def inner(*args):\n        # YOUR CODE HERE\n    return inner\nmemo_double = memoize(lambda x: x*2)", "assert memo_double(5) == 10 and memo_double(5) == 10"),
    (199, "Pipe", "Define pipe(*funcs) returning lambda x: f1(f2(...(fn(x)))). pipe(lambda x:x+1, lambda x:x*2)(3)=8", "def pipe(*funcs):\n    # YOUR CODE HERE\n", "assert pipe(lambda x: x+1, lambda x: x*2)(3) == 8"),
    (200, "Function Composition Chain", "Define chain(f, g, h) returning lambda x: f(g(h(x))). chain(lambda x:x+1, lambda x:x*2, lambda x:x-1)(5)=11", "def chain(f, g, h):\n    # YOUR CODE HERE\n", "assert chain(lambda x: x+1, lambda x: x*2, lambda x: x-1)(5) == 11"),
]

# Part 5: OOP (E201-E250)
PART5_EXERCISES = [
    (201, "Create Class", "Define empty class Person", "class Person:\n    pass\n# YOUR CODE HERE\n", "p = Person(); assert p is not None"),
    (202, "Class with __init__", "Define class Dog with __init__(self, name) storing name", "class Dog:\n    def __init__(self, name):\n        # YOUR CODE HERE\n", "d = Dog('Rex'); assert d.name == 'Rex'"),
    (203, "Instance Method", "Define class Counter with increment(self) method that increments self.count", "class Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        # YOUR CODE HERE\n", "c = Counter(); c.increment(); c.increment(); assert c.count == 2"),
    (204, "Multiple Attributes", "Define class Rectangle with __init__(self, width, height)", "class Rectangle:\n    def __init__(self, width, height):\n        # YOUR CODE HERE\n", "r = Rectangle(4, 5); assert r.width == 4 and r.height == 5"),
    (205, "Method with Return", "Add area(self) method to Rectangle returning width*height", "class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        # YOUR CODE HERE\n", "assert Rectangle(4, 5).area() == 20"),
    (206, "Self Parameter", "Define class Greeter with greet(self, name) returning 'Hello, {name}'", "class Greeter:\n    def greet(self, name):\n        # YOUR CODE HERE\n", "assert Greeter().greet('Alice') == 'Hello, Alice'"),
    (207, "Class Attribute", "Define class Config with class attribute VERSION = '1.0'", "class Config:\n    # YOUR CODE HERE\n", "assert Config.VERSION == '1.0'"),
    (208, "Instance vs Class", "Define class Box with instance attr value. Create Box(42), check value", "class Box:\n    def __init__(self, value):\n        # YOUR CODE HERE\n", "assert Box(42).value == 42"),
    (209, "Method Chaining", "Define class Builder with add(self, x) returning self for chaining", "class Builder:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        # YOUR CODE HERE\n", "b = Builder().add(1).add(2); assert b.items == [1, 2]"),
    (210, "String Representation", "Define class Point with __str__(self) returning 'Point(x,y)'", "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __str__(self):\n        # YOUR CODE HERE\n", "assert 'Point' in str(Point(1, 2)) and '1' in str(Point(1, 2))"),
    (211, "__repr__", "Add __repr__ to Point returning 'Point(x, y)'", "class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __repr__(self):\n        # YOUR CODE HERE\n", "assert 'Point' in repr(Point(1, 2))"),
    (212, "__len__", "Define class Stack with __len__(self) returning length of internal list", "class Stack:\n    def __init__(self):\n        self._items = []\n    def __len__(self):\n        # YOUR CODE HERE\n", "s = Stack(); s._items = [1,2,3]; assert len(s) == 3"),
    (213, "__eq__", "Define class Point2 with __eq__ comparing x and y", "class Point2:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __eq__(self, other):\n        # YOUR CODE HERE\n", "assert Point2(1, 2) == Point2(1, 2) and Point2(1, 2) != Point2(1, 3)"),
    (214, "__add__", "Define class Vector with __add__(self, other) adding x and y components", "class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, other):\n        # YOUR CODE HERE\n", "assert (Vector(1, 2) + Vector(3, 4)).x == 4"),
    (215, "__getitem__", "Define class MyList with __getitem__(self, i) for indexing", "class MyList:\n    def __init__(self, data):\n        self.data = data\n    def __getitem__(self, i):\n        # YOUR CODE HERE\n", "assert MyList([10, 20, 30])[1] == 20"),
    (216, "Property", "Define class Circle with radius property and area property (read-only)", "class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    @property\n    def area(self):\n        # YOUR CODE HERE\n", "import math; assert abs(Circle(1).area - math.pi) < 0.01"),
    (217, "Property Setter", "Add setter for Circle.radius that validates radius > 0", "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    @property\n    def radius(self):\n        return self._radius\n    @radius.setter\n    def radius(self, value):\n        # YOUR CODE HERE\n", "c = Circle(1); c.radius = 5; assert c.radius == 5"),
    (218, "Inheritance", "Define class Animal with speak() returning 'sound'. Dog extends Animal, speak returns 'bark'", "class Animal:\n    def speak(self):\n        return 'sound'\nclass Dog(Animal):\n    def speak(self):\n        # YOUR CODE HERE\n", "assert Dog().speak() == 'bark'"),
    (219, "super()", "Define class Vehicle with __init__(self, name). Car extends Vehicle, calls super().__init__", "class Vehicle:\n    def __init__(self, name):\n        self.name = name\nclass Car(Vehicle):\n    def __init__(self, name, wheels=4):\n        # YOUR CODE HERE\n", "c = Car('Tesla'); assert c.name == 'Tesla'"),
    (220, "Polymorphism", "Define interface-like: Animal.speak(). Dog and Cat override. Call speak on each", "class Animal:\n    def speak(self):\n        raise NotImplementedError\nclass Dog(Animal):\n    def speak(self):\n        return 'bark'\nclass Cat(Animal):\n    def speak(self):\n        return 'meow'\ndef make_sound(animal):\n    # YOUR CODE HERE\n", "assert make_sound(Dog()) == 'bark' and make_sound(Cat()) == 'meow'"),
    (221, "Abstract Method", "Use ABC: define abstract class Shape with abstract area()", "from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        # YOUR CODE HERE\n", "assert Square(4).area() == 16"),
    (222, "Multiple Inheritance", "Define class A with method a(), B with b(). C(A,B). c.a() and c.b() work", "class A:\n    def a(self): return 'A'\nclass B:\n    def b(self): return 'B'\nclass C(A, B):\n    pass\n# YOUR CODE HERE\n", "c = C(); assert c.a() == 'A' and c.b() == 'B'"),
    (223, "isinstance", "Check if obj is instance of list. obj=[1,2,3]", "obj = [1, 2, 3]\nis_list = ", "assert is_list == True"),
    (224, "hasattr", "Check if obj has attribute 'append'. obj=[]", "obj = []\nhas_append = ", "assert has_append == True"),
    (225, "getattr", "Get 'upper' attribute of 'hello' and call it. Store result in `result`", "s = 'hello'\nresult = ", "assert result == 'HELLO'"),
    (226, "Dataclass", "Define dataclass Point with x and y fields", "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    # YOUR CODE HERE\n", "p = Point(1, 2); assert p.x == 1 and p.y == 2"),
    (227, "Dataclass Default", "Define dataclass Config with name and enabled=True", "from dataclasses import dataclass\n\n@dataclass\nclass Config:\n    # YOUR CODE HERE\n", "c = Config('test'); assert c.enabled == True"),
    (228, "Dataclass with Method", "Add distance(self, other) to Point dataclass", "from dataclasses import dataclass\nimport math\n\n@dataclass\nclass Point:\n    x: float\n    y: float\n    def distance(self, other):\n        # YOUR CODE HERE\n", "assert abs(Point(0,0).distance(Point(3,4)) - 5) < 0.01"),
    (229, "Class Method", "Define class Factory with @classmethod create(cls) returning cls()", "class Factory:\n    @classmethod\n    def create(cls):\n        # YOUR CODE HERE\n", "f = Factory.create(); assert isinstance(f, Factory)"),
    (230, "Static Method", "Define class Math with @staticmethod add(a,b) returning a+b", "class Math:\n    @staticmethod\n    def add(a, b):\n        # YOUR CODE HERE\n", "assert Math.add(2, 3) == 5"),
    (231, "Private Convention", "Define class Secret with _private_attr. Access it", "class Secret:\n    def __init__(self):\n        self._private_attr = 42\n# YOUR CODE HERE\n", "s = Secret(); val = s._private_attr; assert val == 42"),
    (232, "Name Mangling", "Define class A with __private. Access from method", "class A:\n    def __init__(self):\n        self.__private = 10\n    def get_private(self):\n        # YOUR CODE HERE\n", "assert A().get_private() == 10"),
    (233, "Slots", "Define class SlotDemo with __slots__ = ['x','y']", "class SlotDemo:\n    __slots__ = ['x', 'y']\n    def __init__(self, x, y):\n        # YOUR CODE HERE\n", "s = SlotDemo(1, 2); assert s.x == 1 and s.y == 2"),
    (234, "Context Manager Protocol", "Define class Timer with __enter__ and __exit__", "class Timer:\n    def __enter__(self):\n        return self\n    def __exit__(self, *args):\n        return False\n# YOUR CODE HERE\n", "with Timer() as t: pass; assert t is not None"),
    (235, "Iterator Protocol", "Define class CountDown with __iter__ and __next__. CountDown(3) yields 3,2,1", "class CountDown:\n    def __init__(self, n):\n        self.n = n\n    def __iter__(self):\n        return self\n    def __next__(self):\n        # YOUR CODE HERE\n", "assert list(CountDown(3)) == [3, 2, 1]"),
    (236, "Bank Account", "Define class BankAccount with balance, deposit(amount), withdraw(amount)", "class BankAccount:\n    def __init__(self):\n        self.balance = 0\n    def deposit(self, amount):\n        # YOUR CODE HERE\n    def withdraw(self, amount):\n        # YOUR CODE HERE\n", "a = BankAccount(); a.deposit(100); a.withdraw(30); assert a.balance == 70"),
    (237, "Student Record", "Define class Student with name, grades list. Add add_grade, average methods", "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n    def add_grade(self, grade):\n        # YOUR CODE HERE\n    def average(self):\n        # YOUR CODE HERE\n", "s = Student('Alice'); s.add_grade(80); s.add_grade(90); assert s.average() == 85"),
    (238, "Singleton Pattern", "Implement singleton: only one instance of class Logger exists", "class Logger:\n    _instance = None\n    def __new__(cls):\n        # YOUR CODE HERE\n", "a, b = Logger(), Logger(); assert a is b"),
    (239, "Composition", "Define class Engine and class Car that has an Engine", "class Engine:\n    def start(self):\n        return 'started'\nclass Car:\n    def __init__(self):\n        self.engine = Engine()\n    def start(self):\n        # YOUR CODE HERE\n", "assert Car().start() == 'started'"),
    (240, "Strategy Pattern", "Define Strategy with execute(). Add AddStrategy, MultiplyStrategy. Context uses strategy", "class AddStrategy:\n    def execute(self, a, b): return a + b\nclass MultiplyStrategy:\n    def execute(self, a, b): return a * b\nclass Context:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    def run(self, a, b):\n        # YOUR CODE HERE\n", "assert Context(AddStrategy()).run(2, 3) == 5 and Context(MultiplyStrategy()).run(2, 3) == 6"),
    (241, "Dataclass Ordering", "Add order=True to Point dataclass. Compare Point(1,2) < Point(2,1)", "from dataclasses import dataclass\n\n@dataclass(order=True)\nclass Point:\n    x: int\n    y: int\n# YOUR CODE HERE\n", "assert Point(1, 2) < Point(2, 1)"),
    (242, "Frozen Dataclass", "Define frozen dataclass ImmutablePoint", "from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass ImmutablePoint:\n    # YOUR CODE HERE\n", "p = ImmutablePoint(1, 2); assert p.x == 1"),
    (243, "Dataclass asdict", "Use asdict on Point(1,2) dataclass", "from dataclasses import dataclass, asdict\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n# YOUR CODE HERE\n", "d = asdict(Point(1, 2)); assert d == {'x': 1, 'y': 2}"),
    (244, "Class Design: TodoItem", "Define TodoItem with title, done. Add toggle() method", "class TodoItem:\n    def __init__(self, title):\n        self.title = title\n        self.done = False\n    def toggle(self):\n        # YOUR CODE HERE\n", "t = TodoItem('task'); t.toggle(); assert t.done == True"),
    (245, "Class Design: ShoppingCart", "Define ShoppingCart with items, add(item), total()", "class ShoppingCart:\n    def __init__(self):\n        self.items = []\n    def add(self, item):\n        # YOUR CODE HERE\n    def total(self):\n        # YOUR CODE HERE\n", "c = ShoppingCart(); c.add({'name':'a','price':10}); c.add({'name':'b','price':20}); assert c.total() == 30"),
    (246, "__contains__", "Define class MyRange with __contains__(self, x) for 'x in myrange'", "class MyRange:\n    def __init__(self, start, end):\n        self.start = start\n        self.end = end\n    def __contains__(self, x):\n        # YOUR CODE HERE\n", "r = MyRange(1, 5); assert 3 in r and 6 not in r"),
    (247, "__bool__", "Define class Truthy with __bool__ returning True when value != 0", "class Truthy:\n    def __init__(self, value):\n        self.value = value\n    def __bool__(self):\n        # YOUR CODE HERE\n", "assert bool(Truthy(1)) and not bool(Truthy(0))"),
    (248, "__call__", "Define class Multiplier with __call__(self, x) returning self.factor * x", "class Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, x):\n        # YOUR CODE HERE\n", "assert Multiplier(3)(4) == 12"),
    (249, "__iter__ Generator", "Define class Range with __iter__ as generator yielding start to end", "class Range:\n    def __init__(self, start, end):\n        self.start = start\n        self.end = end\n    def __iter__(self):\n        # YOUR CODE HERE\n", "assert list(Range(1, 4)) == [1, 2, 3]"),
    (250, "Full OOP: Library", "Define class Book (title, author) and Library (books list, add_book, find_by_author)", "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\nclass Library:\n    def __init__(self):\n        self.books = []\n    def add_book(self, book):\n        # YOUR CODE HERE\n    def find_by_author(self, author):\n        # YOUR CODE HERE\n", "lib = Library(); lib.add_book(Book('A', 'X')); lib.add_book(Book('B', 'X')); assert len(lib.find_by_author('X')) == 2"),
]

def create_part1():
    cells = [make_md_cell("# 🐍 Python Exercises — Part 1: Basics (E1–E50)\n\nVariables, types, operators, control flow, loops.")]
    add_exercise_cells(cells, PART1_EXERCISES, "Part 1", "Basics")
    return build_notebook(cells)

def create_part2():
    cells = [make_md_cell("# 🐍 Python Exercises — Part 2: Strings and Lists (E51–E100)\n\nString operations, list operations, tuples, mixed challenges.")]
    add_exercise_cells(cells, PART2_EXERCISES, "Part 2", "Strings and Lists")
    return build_notebook(cells)

def create_part3():
    cells = [make_md_cell("# 🐍 Python Exercises — Part 3: Dictionaries and Sets (E101–E150)\n\nDict operations, set operations, mixed challenges.")]
    add_exercise_cells(cells, PART3_EXERCISES, "Part 3", "Dicts and Sets")
    return build_notebook(cells)

def create_part4():
    cells = [make_md_cell("# 🐍 Python Exercises — Part 4: Functions (E151–E200)\n\nBasic functions, lambda, map/filter/reduce, closures, recursion.")]
    add_exercise_cells(cells, PART4_EXERCISES, "Part 4", "Functions")
    return build_notebook(cells)

def create_part5():
    cells = [make_md_cell("# 🐍 Python Exercises — Part 5: OOP and Classes (E201–E250)\n\nClasses, magic methods, inheritance, dataclasses.")]
    add_exercise_cells(cells, PART5_EXERCISES, "Part 5", "OOP")
    return build_notebook(cells)


if __name__ == "__main__":
    notebooks = [
        ("exercises-part1-basics.ipynb", create_part1()),
        ("exercises-part2-strings-lists.ipynb", create_part2()),
        ("exercises-part3-dicts-sets.ipynb", create_part3()),
        ("exercises-part4-functions.ipynb", create_part4()),
        ("exercises-part5-oop.ipynb", create_part5()),
    ]
    for name, nb in notebooks:
        path = os.path.join(EXERCISES_DIR, name)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(nb, f, indent=1, ensure_ascii=False)
        print(f"Created {name}")
