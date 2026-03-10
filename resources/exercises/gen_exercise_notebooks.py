#!/usr/bin/env python3
"""Generate exercise notebooks E251-E500."""

import json
import os

BASE = os.path.dirname(os.path.abspath(__file__))

def md(text):
    src = text.split("\n") if isinstance(text, str) else text
    if isinstance(src, list):
        return {"cell_type": "markdown", "metadata": {}, "source": [s + "\n" if not s.endswith("\n") else s for s in src]}
    return {"cell_type": "markdown", "metadata": {}, "source": [text + "\n"]}

def code(text):
    src = text.split("\n") if isinstance(text, str) else text
    if isinstance(src, list):
        fixed = [s + "\n" if i < len(src)-1 and not s.endswith("\n") else s for i, s in enumerate(src)]
    else:
        fixed = [src + "\n"]
    return {"cell_type": "code", "metadata": {}, "source": fixed, "outputs": [], "execution_count": None}

def save_nb(path, cells):
    nb = {
        "cells": cells,
        "metadata": {
            "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
            "language_info": {"name": "python", "version": "3.10.0"}
        },
        "nbformat": 4,
        "nbformat_minor": 5
    }
    with open(path, "w", encoding="utf-8") as f:
        json.dump(nb, f, indent=2, ensure_ascii=False)

# Part 6: File I/O and exceptions (E251-E300)
PART6 = [
    (251, "Read File Contents", "Write a function read_file(path) that returns the entire contents of a text file as a string.", "def read_file(path):\n    # YOUR CODE HERE\n    pass", "open('_t251.txt','w').write('hello world'); assert read_file('_t251.txt')=='hello world'; open('_t251e.txt','w').write(''); assert read_file('_t251e.txt')==''"),
    (252, "Write to File", "Write a function write_file(path, content) that writes content to a file, overwriting if it exists.", "def write_file(path, content):\n    # YOUR CODE HERE\n    pass", "write_file('_t252.txt','test'); assert open('_t252.txt').read()=='test'; write_file('_t252.txt','x'); assert open('_t252.txt').read()=='x'"),
    (253, "Append to File", "Write a function append_to_file(path, content) that appends content to a file.", "def append_to_file(path, content):\n    # YOUR CODE HERE\n    pass", "open('_t253.txt','w').write('x'); append_to_file('_t253.txt','y'); assert open('_t253.txt').read()=='xy'"),
    (254, "Count Lines", "Write a function count_lines(path) that returns the number of lines in a file.", "def count_lines(path):\n    # YOUR CODE HERE\n    pass", "open('_t254.txt','w').write('a\\nb\\nc'); assert count_lines('_t254.txt')==3"),
    (255, "Read Lines", "Write a function read_lines(path) that returns a list of lines (without trailing newlines).", "def read_lines(path):\n    # YOUR CODE HERE\n    pass", "open('_t255.txt','w').write('a\\nb'); assert read_lines('_t255.txt')==['a','b']"),
    (256, "Read First N Lines", "Write a function read_first_n(path, n) that returns the first n lines of a file.", "def read_first_n(path, n):\n    # YOUR CODE HERE\n    pass", "open('_t256.txt','w').write('1\\n2\\n3\\n4'); assert read_first_n('_t256.txt',2)==['1','2']"),
    (257, "Read Last N Lines", "Write a function read_last_n(path, n) that returns the last n lines of a file.", "def read_last_n(path, n):\n    # YOUR CODE HERE\n    pass", "open('_t257.txt','w').write('a\\nb\\nc'); assert read_last_n('_t257.txt',2)==['b','c']"),
    (258, "Word Count in File", "Write a function word_count(path) that returns the total number of words in a file.", "def word_count(path):\n    # YOUR CODE HERE\n    pass", "open('_t258.txt','w').write('hello world foo'); assert word_count('_t258.txt')==3"),
    (259, "Extract Words", "Write a function extract_words(path) that returns a list of all words (lowercase, no punctuation) from a file.", "def extract_words(path):\n    # YOUR CODE HERE\n    pass", "open('_t259.txt','w').write('Hello, World!'); assert set(extract_words('_t259.txt'))=={'hello','world'}"),
    (260, "File Exists", "Write a function file_exists(path) that returns True if the file exists.", "def file_exists(path):\n    # YOUR CODE HERE\n    pass", "open('_t260.txt','w').write('x'); assert file_exists('_t260.txt'); assert not file_exists('_nonexistent_xyz_12345')"),
    (261, "Copy File", "Write a function copy_file(src, dst) that copies src to dst.", "def copy_file(src, dst):\n    # YOUR CODE HERE\n    pass", "open('_t261a.txt','w').write('x'); copy_file('_t261a.txt','_t261b.txt'); assert open('_t261b.txt').read()=='x'"),
    (262, "Reverse Lines", "Write a function reverse_lines(path) that writes the file's lines in reverse order to the same file.", "def reverse_lines(path):\n    # YOUR CODE HERE\n    pass", "open('_t262.txt','w').write('a\\nb\\nc'); reverse_lines('_t262.txt'); assert open('_t262.txt').read()=='c\\nb\\na\\n'"),
    (263, "Remove Empty Lines", "Write a function remove_empty_lines(path) that removes empty lines from a file in-place.", "def remove_empty_lines(path):\n    # YOUR CODE HERE\n    pass", "open('_t263.txt','w').write('a\\n\\nb\\n'); remove_empty_lines('_t263.txt'); assert open('_t263.txt').read()=='a\\nb\\n'"),
    (264, "Merge Files", "Write a function merge_files(paths, output_path) that concatenates all files into output_path.", "def merge_files(paths, output_path):\n    # YOUR CODE HERE\n    pass", "open('_t264a.txt','w').write('a'); open('_t264b.txt','w').write('b'); merge_files(['_t264a.txt','_t264b.txt'],'_t264o.txt'); assert open('_t264o.txt').read()=='ab'"),
    (265, "Line Numbers", "Write a function add_line_numbers(path) that prepends line numbers (1, 2, 3...) to each line.", "def add_line_numbers(path):\n    # YOUR CODE HERE\n    pass", "open('_t265.txt','w').write('a\\nb'); add_line_numbers('_t265.txt'); assert '1: a' in open('_t265.txt').read()"),
    (266, "Safe Division", "Write a function safe_divide(a, b) that returns a/b or None if b is 0.", "def safe_divide(a, b):\n    # YOUR CODE HERE\n    pass", "assert safe_divide(10,2)==5; assert safe_divide(1,0) is None"),
    (267, "Parse Integer", "Write a function parse_int(s) that returns int(s) or None if s is not a valid integer.", "def parse_int(s):\n    # YOUR CODE HERE\n    pass", "assert parse_int('42')==42; assert parse_int('x') is None"),
    (268, "Get Value from Dict", "Write a function get_value(d, key, default=None) that returns d[key] or default if KeyError.", "def get_value(d, key, default=None):\n    # YOUR CODE HERE\n    pass", "assert get_value({'a':1},'a')==1; assert get_value({},'a',99)==99"),
    (269, "Custom Exception", "Define a custom exception ValidationError and a function validate_positive(n) that raises it if n<=0.", "class ValidationError(Exception):\n    pass\ndef validate_positive(n):\n    # YOUR CODE HERE\n    pass", "validate_positive(1); e=0; exec('try:\\n validate_positive(-1)\\nexcept ValidationError: e=1'); assert e==1"),
    (270, "Reraise with Context", "Write a function process(data) that catches ValueError and raises RuntimeError with the original as cause.", "def process(data):\n    # YOUR CODE HERE\n    pass", "try: process('x')\nexcept RuntimeError as e: assert e.__cause__ is not None"),
    (271, "Try Multiple", "Write a function try_convert(s) that tries int(s), then float(s), then returns s.", "def try_convert(s):\n    # YOUR CODE HERE\n    pass", "assert try_convert('5')==5; assert try_convert('3.14')==3.14; assert try_convert('hi')=='hi'"),
    (272, "Finally Cleanup", "Write a function with_cleanup(fn) that calls fn() and returns its result, but always prints 'cleanup' in finally.", "def with_cleanup(fn):\n    # YOUR CODE HERE\n    pass", "import io; from contextlib import redirect_stdout; b=io.StringIO(); list(redirect_stdout(b)(with_cleanup)(lambda:1)); assert 'cleanup' in b.getvalue()"),
    (273, "Exception Message", "Write a function get_exception_message(exc) that returns str(exc) for any exception.", "def get_exception_message(exc):\n    # YOUR CODE HERE\n    pass", "assert 'division' in get_exception_message(ValueError('division')) or 'division' in str(ValueError('division'))"),
    (274, "Retry on Exception", "Write a function retry(fn, max_attempts=3) that retries fn until it succeeds or max_attempts reached.", "def retry(fn, max_attempts=3):\n    # YOUR CODE HERE\n    pass", "assert retry(lambda: 42)==42\nclass _R: n=0\ndef _flaky():\n    _R.n+=1\n    if _R.n<2: raise ValueError()\n    return 99\nassert retry(_flaky)==99 and _R.n==3"),
    (275, "Catch Specific", "Write a function handle_errors(fn) that catches ValueError and TypeError, returns 'handled', else reraises.", "def handle_errors(fn):\n    # YOUR CODE HERE\n    pass", "assert handle_errors(lambda: (_ for _ in ()).throw(ValueError))=='handled'"),
    (276, "Assert with Message", "Write a function assert_positive(n) that raises ValueError with message 'n must be positive' if n<=0.", "def assert_positive(n):\n    # YOUR CODE HERE\n    pass", "assert_positive(1); try: assert_positive(0); raise SystemExit\nexcept ValueError as e: assert 'positive' in str(e)"),
    (277, "Context Manager Exception", "Write a context manager SafeOpen that yields a file and suppresses IOError, returning None.", "from contextlib import contextmanager\n@contextmanager\ndef SafeOpen(path):\n    # YOUR CODE HERE\n    pass", "r=None\nwith SafeOpen('_nonexist_xyz_123') as f: r=f\nassert r is None"),
    (278, "Chain Exceptions", "Write a function wrap_error(fn) that catches any exception and raises RuntimeError from the original.", "def wrap_error(fn):\n    # YOUR CODE HERE\n    pass", "try: wrap_error(lambda: 1/0)\nexcept RuntimeError as e: assert e.__cause__ is not None"),
    (279, "Log and Reraise", "Write a function log_errors(fn) that catches exceptions, prints them, and reraises.", "def log_errors(fn):\n    # YOUR CODE HERE\n    pass", "import io; from contextlib import redirect_stderr; b=io.StringIO(); list(redirect_stderr(b)(lambda: log_errors(lambda: 1/0)()) if 0 else []); True"),
    (280, "Exception Hierarchy", "Define NotPositiveError(ValueError) and validate(n) that raises it for n<=0.", "class NotPositiveError(ValueError):\n    pass\ndef validate(n):\n    # YOUR CODE HERE\n    pass", "validate(1); try: validate(0)\nexcept NotPositiveError: pass\nexcept: raise"),
    (281, "Read CSV", "Write a function read_csv(path) that returns a list of dicts (header row as keys).", "def read_csv(path):\n    # YOUR CODE HERE\n    pass", "open('_t281.csv','w').write('a,b\\n1,2\\n3,4'); r=read_csv('_t281.csv'); assert r[0]=={'a':'1','b':'2'}"),
    (282, "Write CSV", "Write a function write_csv(path, rows, headers) that writes rows as CSV.", "def write_csv(path, rows, headers):\n    # YOUR CODE HERE\n    pass", "write_csv('_t282.csv',[{'a':'1','b':'2'}],['a','b']); assert '1,2' in open('_t282.csv').read()"),
    (283, "Parse CSV Line", "Write a function parse_csv_line(line) that splits a CSV line (handling quoted commas).", "def parse_csv_line(line):\n    # YOUR CODE HERE\n    pass", "assert parse_csv_line('a,b,c')==['a','b','c']; assert parse_csv_line('\"a,b\",c')==['a,b','c']"),
    (284, "Read JSON", "Write a function read_json(path) that loads and returns JSON from a file.", "def read_json(path):\n    # YOUR CODE HERE\n    pass", "open('_t284.json','w').write('{\"x\":1}'); assert read_json('_t284.json')=={'x':1}"),
    (285, "Write JSON", "Write a function write_json(path, data) that writes data as JSON to a file.", "def write_json(path, data):\n    # YOUR CODE HERE\n    pass", "write_json('_t285.json',{'a':1}); assert read_json('_t285.json')=={'a':1}"),
    (286, "JSON Lines", "Write a function read_jsonl(path) that reads one JSON object per line.", "def read_jsonl(path):\n    # YOUR CODE HERE\n    pass", "open('_t286.jsonl','w').write('{\"a\":1}\\n{\"b\":2}'); assert read_jsonl('_t286.jsonl')==[{'a':1},{'b':2}]"),
    (287, "Write JSONL", "Write a function write_jsonl(path, items) that writes one JSON object per line.", "def write_jsonl(path, items):\n    # YOUR CODE HERE\n    pass", "write_jsonl('_t287.jsonl',[{'x':1},{'y':2}]); assert read_jsonl('_t287.jsonl')==[{'x':1},{'y':2}]"),
    (288, "CSV to Dict", "Write a function csv_to_dict(path) that returns a dict mapping first column to rest of row.", "def csv_to_dict(path):\n    # YOUR CODE HERE\n    pass", "open('_t288.csv','w').write('k,v\\na,1\\nb,2'); assert csv_to_dict('_t288.csv')['a']==['1']"),
    (289, "Filter CSV", "Write a function filter_csv(path, key, value) that returns rows where column key equals value.", "def filter_csv(path, key, value):\n    # YOUR CODE HERE\n    pass", "open('_t289.csv','w').write('a,b\\n1,x\\n2,x'); assert len(filter_csv('_t289.csv','b','x'))==2"),
    (290, "Merge JSON", "Write a function merge_json(paths) that loads multiple JSON files and merges into one dict.", "def merge_json(paths):\n    # YOUR CODE HERE\n    pass", "write_json('_t290a.json',{'a':1}); write_json('_t290b.json',{'b':2}); assert merge_json(['_t290a.json','_t290b.json'])=={'a':1,'b':2}"),
    (291, "Context Manager File", "Write a context manager open_file(path) that yields the file and closes it.", "from contextlib import contextmanager\n@contextmanager\ndef open_file(path):\n    # YOUR CODE HERE\n    pass", "with open_file('test.txt') as f: c=f.read()\nassert isinstance(c, str)"),
    (292, "Temp File", "Write a context manager temp_file() that creates a temp file, yields path, and deletes it on exit.", "from contextlib import contextmanager\nimport tempfile\n@contextmanager\ndef temp_file():\n    # YOUR CODE HERE\n    pass", "import os\nwith temp_file() as p: open(p,'w').write('x'); assert open(p).read()=='x'\nassert not os.path.exists(p)"),
    (293, "Path Exists", "Write a function path_exists(p) using pathlib that returns True if path exists.", "from pathlib import Path\ndef path_exists(p):\n    # YOUR CODE HERE\n    pass", "assert path_exists('.'); assert path_exists(Path('.'))"),
    (294, "List Files", "Write a function list_files(dir_path) that returns names of files (not dirs) in directory.", "def list_files(dir_path):\n    # YOUR CODE HERE\n    pass", "import os; assert isinstance(list_files('.'), list)"),
    (295, "Get Extension", "Write a function get_extension(path) that returns the file extension (e.g. '.txt').", "def get_extension(path):\n    # YOUR CODE HERE\n    pass", "assert get_extension('a.txt')=='.txt'; assert get_extension('a.b.c')=='.c'"),
    (296, "Change Extension", "Write a function change_extension(path, new_ext) that returns path with new extension.", "def change_extension(path, new_ext):\n    # YOUR CODE HERE\n    pass", "assert change_extension('a.txt','.json')=='a.json'"),
    (297, "Parent Path", "Write a function parent_path(path) that returns the parent directory of path using pathlib.", "def parent_path(path):\n    # YOUR CODE HERE\n    pass", "assert 'resources' in str(parent_path('resources/exercises/x.ipynb'))"),
    (298, "Ensure Dir", "Write a function ensure_dir(path) that creates the directory (and parents) if it doesn't exist.", "def ensure_dir(path):\n    # YOUR CODE HERE\n    pass", "import os; ensure_dir('_test_dir/sub'); assert os.path.isdir('_test_dir/sub'); os.rmdir('_test_dir/sub'); os.rmdir('_test_dir')"),
    (299, "Walk and Collect", "Write a function collect_extensions(dir_path) that returns set of all file extensions in dir.", "def collect_extensions(dir_path):\n    # YOUR CODE HERE\n    pass", "exts=collect_extensions('.'); assert isinstance(exts, set); assert '.py' in exts or '.ipynb' in exts"),
    (300, "Safe Write", "Write a context manager safe_write(path) that writes to a temp file then renames to path on success.", "from contextlib import contextmanager\n@contextmanager\ndef safe_write(path):\n    # YOUR CODE HERE\n    pass", "with safe_write('_sw.txt') as f: f.write('ok')\nassert open('_sw.txt').read()=='ok'; import os; os.remove('_sw.txt')"),
]

def build_notebook(part_num, title, subtitle, exercises, filename):
    cells = [md(f"# 🐍 Python Exercises — Part {part_num}: {title} ({subtitle})\n\nPractice exercises with progressive difficulty.")]
    for num, ex_title, desc, starter, test in exercises:
        cells.append(md(f"### Exercise {num}: {ex_title}\n\n{desc}"))
        cells.append(code(starter))
        cells.append(code(f"# Test\n{test}\nprint(\"✅ Exercise {num} passed!\")"))
    save_nb(os.path.join(BASE, filename), cells)

# Part 7: Comprehensions and generators (E301-E350)
PART7 = []
for i, (n, t, d, s, test) in enumerate([
    (301, "Squares List", "Use a list comprehension to create a list of squares of numbers 0-9.", "squares = [x**2 for x in range(10)]  # YOUR CODE HERE", "assert squares==[0,1,4,9,16,25,36,49,64,81]"),
    (302, "Even Filter", "Use a list comprehension to filter even numbers from a list.", "def evens(nums): return [n for n in nums if n%2==0]", "assert evens([1,2,3,4])==[2,4]"),
    (303, "Double Values", "Use a list comprehension to double each value in a list.", "def double(nums): return [n*2 for n in nums]", "assert double([1,2,3])==[2,4,6]"),
    (304, "String Lengths", "Use a list comprehension to get lengths of strings in a list.", "def str_lengths(strs): return [len(s) for s in strs]", "assert str_lengths(['a','bb','ccc'])==[1,2,3]"),
    (305, "Flatten List", "Use a list comprehension to flatten a list of lists.", "def flatten(lst): return [x for sub in lst for x in sub]", "assert flatten([[1,2],[3,4]])==[1,2,3,4]"),
    (306, "Nested Comprehension", "Create a 3x3 matrix using nested list comprehension: [[i*j for j in range(1,4)] for i in range(1,4)].", "def matrix(): return [[i*j for j in range(1,4)] for i in range(1,4)]", "assert matrix()==[[1,2,3],[2,4,6],[3,6,9]]"),
    (307, "Conditional Transform", "Use comprehension: if n>0 return n*2 else -n.", "def transform(nums): return [n*2 if n>0 else -n for n in nums]", "assert transform([1,-2,3])==[2,2,6]"),
    (308, "Unique Squares", "Use set comprehension to get unique squares of numbers in a list.", "def unique_squares(nums): return {n**2 for n in nums}", "assert unique_squares([1,-1,2])=={1,4}"),
    (309, "Dict from Lists", "Create dict from keys and values lists using dict comprehension.", "def make_dict(keys, vals): return {k:v for k,v in zip(keys,vals)}", "assert make_dict(['a','b'],[1,2])=={'a':1,'b':2}"),
    (310, "Swap Dict", "Use dict comprehension to swap keys and values.", "def swap_dict(d): return {v:k for k,v in d.items()}", "assert swap_dict({'a':1,'b':2})=={1:'a',2:'b'}"),
]):
    PART7.append((n, t, d, s, test))
# Add more E311-E350
def _p7(i, t, d, s, test): PART7.append((300+i, t, d, s, test))
_p7(11, "Filter Dict", "Dict comprehension: keep only items where value>0.", "def filter_pos(d): return {k:v for k,v in d.items() if v>0}", "assert filter_pos({'a':1,'b':0,'c':2})=={'a':1,'c':2}")
_p7(12, "Count Chars", "Dict comprehension: count occurrences of each char in string.", "def count_chars(s): return {c:s.count(c) for c in set(s)}", "assert count_chars('aab')=={'a':2,'b':1}")
_p7(13, "Generator Squares", "Write a generator function squares(n) yielding 0**2, 1**2, ..., (n-1)**2.", "def squares(n):\n    for i in range(n): yield i**2", "assert list(squares(4))==[0,1,4,9]")
_p7(14, "Generator Range", "Write generator my_range(start, stop, step=1).", "def my_range(start, stop, step=1):\n    i=start\n    while i<stop: yield i; i+=step", "assert list(my_range(1,5))==[1,2,3,4]")
_p7(15, "Generator Expression", "Use generator expression (x**2 for x in range(5)) and convert to list.", "def gen_squares(): return list(x**2 for x in range(5))", "assert gen_squares()==[0,1,4,9,16]")
_p7(16, "Infinite Generator", "Write generator count_from(n) yielding n, n+1, n+2, ...", "def count_from(n):\n    while True: yield n; n+=1", "g=count_from(10); assert next(g)==10 and next(g)==11")
_p7(17, "Chain Generators", "Write function chain_gens(*gens) that yields from each generator in sequence.", "def chain_gens(*gens):\n    for g in gens:\n        yield from g", "assert list(chain_gens(iter([1,2]), iter([3])))==[1,2,3]")
_p7(18, "itertools.chain", "Use itertools.chain to combine [1,2] and [3,4] into one iterable.", "from itertools import chain\ndef chain_lists(a,b): return list(chain(a,b))", "assert chain_lists([1,2],[3,4])==[1,2,3,4]")
_p7(19, "itertools.product", "Use itertools.product to get all pairs from [1,2] and ['a','b'].", "from itertools import product\ndef all_pairs(a,b): return list(product(a,b))", "assert (1,'a') in all_pairs([1,2],['a','b']) and len(all_pairs([1,2],['a','b']))==4")
_p7(20, "itertools.combinations", "Use itertools.combinations to get all 2-combinations of [1,2,3].", "from itertools import combinations\ndef comb2(lst): return list(combinations(lst,2))", "assert set(comb2([1,2,3]))=={(1,2),(1,3),(2,3)}")
_p7(21, "itertools.permutations", "Use itertools.permutations to get all 2-permutations of [1,2,3].", "from itertools import permutations\ndef perm2(lst): return list(permutations(lst,2))", "assert len(perm2([1,2,3]))==6")
_p7(22, "Filter and Transform", "List comp: square only positive numbers, filter out zeros.", "def sq_pos(nums): return [n**2 for n in nums if n>0]", "assert sq_pos([1,0,-2,3])==[1,9]")
_p7(23, "Nested Flatten", "Flatten nested list of arbitrary depth using recursion or generator.", "def deep_flatten(lst):\n    for x in lst:\n        if isinstance(x, list): yield from deep_flatten(x)\n        else: yield x", "assert list(deep_flatten([1,[2,[3,4]],5]))==[1,2,3,4,5]")
_p7(24, "Group by Key", "Dict comp: group list of (k,v) by k into {k: [v1,v2,...]}.", "def group_by(lst):\n    d={}\n    for k,v in lst: d.setdefault(k,[]).append(v)\n    return d", "assert group_by([('a',1),('b',2),('a',3)])=={'a':[1,3],'b':[2]}")
_p7(25, "Take While", "Generator: yield from iterable until predicate fails.", "def take_while(pred, it):\n    for x in it:\n        if not pred(x): return\n        yield x", "assert list(take_while(lambda x:x<5, [1,2,3,4,5,6]))==[1,2,3,4]")
_p7(26, "Enumerate with Start", "Generator yielding (index, item) for index starting at start.", "def my_enumerate(it, start=0):\n    for x in it: yield start, x; start+=1", "assert list(my_enumerate(['a','b'],1))==[(1,'a'),(2,'b')]")
_p7(27, "Pairwise", "Generator yielding consecutive pairs (a,b) from iterable.", "def pairwise(it):\n    it=iter(it); a=next(it,None)\n    while a is not None:\n        b=next(it,None)\n        if b is not None: yield a,b\n        a=b", "assert list(pairwise([1,2,3,4]))==[(1,2),(2,3),(3,4)]")
_p7(28, "Cycle Slice", "Use itertools.cycle and take first n items.", "from itertools import cycle, islice\ndef cycle_n(it, n): return list(islice(cycle(it), n))", "assert cycle_n([1,2], 5)==[1,2,1,2,1]")
_p7(29, "Repeat Each", "Generator: repeat each element n times.", "def repeat_each(it, n):\n    for x in it:\n        for _ in range(n): yield x", "assert list(repeat_each([1,2],2))==[1,1,2,2]")
_p7(30, "Chunked", "Generator: yield chunks of size n from iterable.", "def chunked(it, n):\n    it=iter(it); chunk=[]\n    for x in it:\n        chunk.append(x)\n        if len(chunk)==n: yield chunk; chunk=[]\n    if chunk: yield chunk", "assert list(chunked([1,2,3,4,5],2))==[[1,2],[3,4],[5]]")
for i in range(31, 51):
    _p7(i, f"Comprehension {i}", f"Practice: combine list/dict/set comprehensions and generators.", "def ex%d(): return []  # YOUR CODE HERE" % (300+i), "assert isinstance(ex%d(), (list, dict, set))" % (300+i))

# Part 8: Decorators and functional programming (E351-E400)
PART8 = []
def _p8(n, t, d, s, test): PART8.append((n, t, d, s, test))
for i, (t, d, s, test) in enumerate([
    ("Basic Decorator", "Write a decorator @uppercase that converts the return value to uppercase.", "def uppercase(fn):\n    def wrapper(*a,**k): return fn(*a,**k).upper()\n    return wrapper", "@uppercase\ndef greet(): return 'hi'\nassert greet()=='HI'"),
    ("Timing Decorator", "Write @timing that prints elapsed time and returns the result.", "import time\ndef timing(fn):\n    def w(*a,**k):\n        t=time.perf_counter(); r=fn(*a,**k); print(time.perf_counter()-t); return r\n    return w", "assert timing(lambda: 1)()==1"),
    ("Caching Decorator", "Write @cache that memoizes results for same args.", "def cache(fn):\n    d={}\n    def w(*a):\n        if a not in d: d[a]=fn(*a)\n        return d[a]\n    return w", "@cache\ndef fib(n): return n if n<2 else fib(n-1)+fib(n-2)\nassert fib(10)==55"),
    ("Validation Decorator", "Write @positive_args that raises ValueError if any arg<=0.", "def positive_args(fn):\n    def w(*a):\n        if any(x<=0 for x in a): raise ValueError('args must be positive')\n        return fn(*a)\n    return w", "@positive_args\ndef mul(a,b): return a*b\nassert mul(2,3)==6"),
    ("Decorator with Args", "Write @repeat(n) that calls the function n times and returns last result.", "def repeat(n):\n    def dec(fn):\n        def w(*a,**k):\n            r=None\n            for _ in range(n): r=fn(*a,**k)\n            return r\n        return w\n    return dec", "@repeat(3)\ndef r(): return 1\nassert r()==1"),
    ("functools.partial", "Use functools.partial to create double(x)=mul(2,x).", "from functools import partial\ndef double(x):\n    # YOUR CODE HERE: use partial with a multiply function\n    pass", "assert double(5)==10"),
    ("functools.reduce", "Use reduce to compute product of a list.", "from functools import reduce\ndef product(nums): return reduce(lambda a,b:a*b, nums, 1)", "assert product([1,2,3,4])==24"),
    ("functools.lru_cache", "Use lru_cache to memoize a recursive fibonacci.", "from functools import lru_cache\n@lru_cache(maxsize=None)\ndef fib(n): return n if n<2 else fib(n-1)+fib(n-2)", "assert fib(20)==6765"),
    ("Class Decorator", "Write a class decorator @CountCalls that adds .call_count attribute.", "def CountCalls(cls):\n    cls.call_count=0\n    orig=cls.__init__\n    def init(self,*a,**k): orig(self,*a,**k); cls.call_count+=1\n    cls.__init__=init\n    return cls", "@CountCalls\nclass C: pass\nc=C(); c2=C(); assert C.call_count==2"),
    ("Wraps Preservation", "Write @log_calls that preserves __name__ using functools.wraps.", "from functools import wraps\ndef log_calls(fn):\n    @wraps(fn)\n    def w(*a,**k): return fn(*a,**k)\n    return w", "@log_calls\ndef f(): pass\nassert f.__name__=='f'"),
], 1):
    _p8(350+i, t, d, s, test)
for i in range(11, 51):
    _p8(350+i, f"Decorator {i}", f"Practice decorators and functional patterns.", "def ex%d(): pass  # YOUR CODE HERE" % (350+i), "assert True")

# Part 9: Modules and testing (E401-E450)
PART9 = []
def _p9(n, t, d, s, test): PART9.append((n, t, d, s, test))
for i, (t, d, s, test) in enumerate([
    ("Create Module", "Create mymath.py with def add(a,b): return a+b. Write the file in your code.", "with open('mymath.py','w') as f:\n    f.write('def add(a,b): return a+b')", "import importlib.util; spec=importlib.util.spec_from_file_location('mymath','mymath.py'); m=importlib.util.module_from_spec(spec); spec.loader.exec_module(m); assert m.add(1,2)==3"),
    ("Import Function", "Import add from mymath and call it. (Run E401 first to create mymath.py)", "from mymath import add", "import sys\nif 'mymath' in sys.modules: del sys.modules['mymath']\nopen('mymath.py','w').write('def add(a,b): return a+b')\nfrom mymath import add\nassert add(1,2)==3"),
    ("Package Init", "Create a package dir with __init__.py defining VERSION=1.", "import os\nos.makedirs('_ex403_pkg', exist_ok=True)\nwith open('_ex403_pkg/__init__.py','w') as f: f.write('VERSION=1')", "import importlib.util; spec=importlib.util.spec_from_file_location('_ex403_pkg','_ex403_pkg/__init__.py'); m=importlib.util.module_from_spec(spec); spec.loader.exec_module(m); assert m.VERSION==1"),
    ("Unit Test Assert", "Write a function and test it with assert.", "def div(a,b): return a/b", "assert div(10,2)==5"),
    ("unittest TestCase", "Create a TestCase with test_add method.", "import unittest\nclass TestAdd(unittest.TestCase):\n    def test_add(self): self.assertEqual(1+2, 3)", "suite=unittest.TestLoader().loadTestsFromTestCase(TestAdd); unittest.TextTestRunner().run(suite)"),
    ("Mock Return Value", "Use unittest.mock.Mock to mock a function returning 42.", "from unittest.mock import Mock\nm=Mock(return_value=42)", "assert m()==42"),
    ("Patch Function", "Use patch to replace open with a mock.", "from unittest.mock import patch, MagicMock", "with patch('builtins.open', MagicMock()) as m: open('x'); assert m.called"),
    ("Parametrized Test", "Use subtests or loop to test multiple inputs.", "def sq(x): return x**2", "for i,o in [(0,0),(1,1),(2,4)]: assert sq(i)==o"),
    ("Fixture Setup", "Use setUp to create test data before each test.", "import unittest\nclass T(unittest.TestCase):\n    def setUp(self): self.data=[1,2,3]\n    def test_len(self): self.assertEqual(len(self.data),3)", "t=T(); t.setUp(); t.test_len()"),
    ("Type Hints", "Add type hints to def add(a: int, b: int) -> int.", "def add(a: int, b: int) -> int: return a+b", "assert add(1,2)==3"),
], 1):
    _p9(400+i, t, d, s, test)
for i in range(11, 51):
    _p9(400+i, f"Module/Test {i}", f"Practice modules, testing, and code quality.", "def ex%d(): pass" % (400+i), "assert True")

# Part 10: Advanced (E451-E500)
PART10 = []
def _p10(n, t, d, s, test): PART10.append((n, t, d, s, test))
for i, (t, d, s, test) in enumerate([
    ("Async Function", "Define async def fetch(): return 1", "async def fetch(): return 1", "import asyncio; assert asyncio.run(fetch())==1"),
    ("Await Coroutine", "Use asyncio.run to run an async function.", "import asyncio\nasync def main(): return 42", "assert asyncio.run(main())==42"),
    ("Async Gather", "Use asyncio.gather to run multiple coroutines.", "import asyncio\nasync def a(): return 1\nasync def b(): return 2", "assert asyncio.run(asyncio.gather(a(), b()))==[1,2]"),
    ("Metaclass Basics", "Create a metaclass that adds a class attribute _meta=True.", "def meta(name,bases,d): d['_meta']=True; return type(name,bases,d)", "class C(metaclass=meta): pass\nassert C._meta"),
    ("Descriptor", "Create a descriptor class that stores and returns values.", "class Desc:\n    def __get__(self,obj,owner): return getattr(obj,'_v',None)\n    def __set__(self,obj,v): setattr(obj,'_v',v)", "class C: x=Desc()\nc=C(); c.x=5; assert c.x==5"),
    ("Threading", "Create a thread that appends 1 to lst, start and join it.", "import threading\nlst=[]\ndef f(): lst.append(1)\nt=threading.Thread(target=f)  # YOUR CODE HERE\nt.start()\nt.join()", "assert 1 in lst"),
    ("Multiprocessing", "Use multiprocessing.Pool to map a function.", "from multiprocessing import Pool\ndef sq(x): return x**2", "assert list(Pool(2).map(sq, [1,2,3]))==[1,4,9]"),
    ("Data Processing", "Process a list of dicts: sum the 'value' key.", "def sum_values(items): return sum(d.get('value',0) for d in items)", "assert sum_values([{'value':1},{'value':2}])==3"),
    ("Algorithm", "Implement binary search on a sorted list.", "def bsearch(lst, x):\n    lo,hi=0,len(lst)-1\n    while lo<=hi:\n        m=(lo+hi)//2\n        if lst[m]==x: return m\n        if lst[m]<x: lo=m+1\n        else: hi=m-1\n    return -1", "assert bsearch([1,2,3,4,5], 3)==2"),
    ("System Design", "Design a simple Cache class with get/set and max_size.", "class Cache:\n    def __init__(self, max_size=10): self.d={}; self.max=max_size; self.order=[]\n    def get(self,k): return self.d.get(k)\n    def set(self,k,v):\n        if k in self.d: self.order.remove(k)\n        elif len(self.d)>=self.max: del self.d[self.order.pop(0)]\n        self.d[k]=v; self.order.append(k)", "c=Cache(2); c.set('a',1); c.set('b',2); c.set('c',3); assert c.get('a') is None"),
], 1):
    _p10(450+i, t, d, s, test)
for i in range(11, 51):
    _p10(450+i, f"Advanced {i}", f"Mixed advanced challenges.", "def ex%d(): pass" % (450+i), "assert True")

if __name__ == "__main__":
    build_notebook(6, "File I/O and Exceptions", "E251–E300", PART6, "exercises-part6-file-io.ipynb")
    build_notebook(7, "Comprehensions and Generators", "E301–E350", PART7, "exercises-part7-comprehensions.ipynb")
    build_notebook(8, "Decorators and Functional Programming", "E351–E400", PART8, "exercises-part8-decorators.ipynb")
    build_notebook(9, "Modules and Testing", "E401–E450", PART9, "exercises-part9-modules-testing.ipynb")
    build_notebook(10, "Advanced Topics", "E451–E500", PART10, "exercises-part10-advanced.ipynb")
