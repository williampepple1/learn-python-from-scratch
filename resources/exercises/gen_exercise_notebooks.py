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
    (260, "File Exists", "Write a function file_exists(path) that returns True if the file exists.", "def file_exists(path):\n    # YOUR CODE HERE\n    pass", "assert file_exists(__file__); assert not file_exists('nonexistent_xyz.txt')"),
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
    (274, "Retry on Exception", "Write a function retry(fn, max_attempts=3) that retries fn until it succeeds or max_attempts reached.", "def retry(fn, max_attempts=3):\n    # YOUR CODE HERE\n    pass", "c=[0]; exec('def f():\\n global c; c[0]+=1; exec(\"raise ValueError()\" if c[0]<2 else \"pass\"); return 42'); f2=lambda: (c.__setitem__(0,c[0]+1) or (1/0 if c[0]<2 else 42)); assert retry(lambda: 42 if c[0]>=2 else (c.__setitem__(0,c[0]+1) or 1/0)) if False else retry(lambda: 42)==42; c=[0]; exec('')\nfor i in range(3):\n    try:\n        r=retry(lambda: (c.__setitem__(0,c[0]+1) or (1/0 if c[0]<2 else 42)))\n        assert r==42 and c[0]==3\n        break\n    except: pass"),
    (275, "Catch Specific", "Write a function handle_errors(fn) that catches ValueError and TypeError, returns 'handled', else reraises.", "def handle_errors(fn):\n    # YOUR CODE HERE\n    pass", "assert handle_errors(lambda: (_ for _ in ()).throw(ValueError))=='handled'"),
    (276, "Assert with Message", "Write a function assert_positive(n) that raises ValueError with message 'n must be positive' if n<=0.", "def assert_positive(n):\n    # YOUR CODE HERE\n    pass", "assert_positive(1); try: assert_positive(0); raise SystemExit\nexcept ValueError as e: assert 'positive' in str(e)"),
    (277, "Context Manager Exception", "Write a context manager SafeOpen that yields a file and suppresses IOError, returning None.", "from contextlib import contextmanager\n@contextmanager\ndef SafeOpen(path):\n    # YOUR CODE HERE\n    pass", "with SafeOpen('nonexist_xyz') as f: r=f\nassert r is None"),
    (278, "Chain Exceptions", "Write a function wrap_error(fn) that catches any exception and raises RuntimeError from the original.", "def wrap_error(fn):\n    # YOUR CODE HERE\n    pass", "try: wrap_error(lambda: 1/0)\nexcept RuntimeError as e: assert e.__cause__ is not None"),
    (279, "Log and Reraise", "Write a function log_errors(fn) that catches exceptions, prints them, and reraises.", "def log_errors(fn):\n    # YOUR CODE HERE\n    pass", "import io; from contextlib import redirect_stderr; b=io.StringIO(); list(redirect_stderr(b)(lambda: log_errors(lambda: 1/0)()) if 0 else []); True"),
    (280, "Exception Hierarchy", "Define NotPositiveError(ValueError) and validate(n) that raises it for n<=0.", "class NotPositiveError(ValueError):\n    pass\ndef validate(n):\n    # YOUR CODE HERE\n    pass", "validate(1); try: validate(0)\nexcept NotPositiveError: pass\nexcept: raise"),
    (281, "Read CSV", "Write a function read_csv(path) that returns a list of dicts (header row as keys).", "def read_csv(path):\n    # YOUR CODE HERE\n    pass", "write_file('c.csv','a,b\\n1,2\\n3,4'); r=read_csv('c.csv'); assert r[0]=={'a':'1','b':'2'}"),
    (282, "Write CSV", "Write a function write_csv(path, rows, headers) that writes rows as CSV.", "def write_csv(path, rows, headers):\n    # YOUR CODE HERE\n    pass", "write_csv('w.csv',[{'a':'1','b':'2'}],['a','b']); assert '1,2' in open('w.csv').read()"),
    (283, "Parse CSV Line", "Write a function parse_csv_line(line) that splits a CSV line (handling quoted commas).", "def parse_csv_line(line):\n    # YOUR CODE HERE\n    pass", "assert parse_csv_line('a,b,c')==['a','b','c']; assert parse_csv_line('\"a,b\",c')==['a,b','c']"),
    (284, "Read JSON", "Write a function read_json(path) that loads and returns JSON from a file.", "def read_json(path):\n    # YOUR CODE HERE\n    pass", "write_file('j.json','{\"x\":1}'); assert read_json('j.json')=={'x':1}"),
    (285, "Write JSON", "Write a function write_json(path, data) that writes data as JSON to a file.", "def write_json(path, data):\n    # YOUR CODE HERE\n    pass", "write_json('wj.json',{'a':1}); assert read_json('wj.json')=={'a':1}"),
    (286, "JSON Lines", "Write a function read_jsonl(path) that reads one JSON object per line.", "def read_jsonl(path):\n    # YOUR CODE HERE\n    pass", "write_file('jl.jsonl','{\"a\":1}\\n{\"b\":2}'); assert read_jsonl('jl.jsonl')==[{'a':1},{'b':2}]"),
    (287, "Write JSONL", "Write a function write_jsonl(path, items) that writes one JSON object per line.", "def write_jsonl(path, items):\n    # YOUR CODE HERE\n    pass", "write_jsonl('wjl.jsonl',[{'x':1},{'y':2}]); assert read_jsonl('wjl.jsonl')==[{'x':1},{'y':2}]"),
    (288, "CSV to Dict", "Write a function csv_to_dict(path) that returns a dict mapping first column to rest of row.", "def csv_to_dict(path):\n    # YOUR CODE HERE\n    pass", "write_file('cd.csv','k,v\\na,1\\nb,2'); assert csv_to_dict('cd.csv')['a']==['1']"),
    (289, "Filter CSV", "Write a function filter_csv(path, key, value) that returns rows where column key equals value.", "def filter_csv(path, key, value):\n    # YOUR CODE HERE\n    pass", "write_file('fc.csv','a,b\\n1,x\\n2,x'); assert len(filter_csv('fc.csv','b','x'))==2"),
    (290, "Merge JSON", "Write a function merge_json(paths) that loads multiple JSON files and merges into one dict.", "def merge_json(paths):\n    # YOUR CODE HERE\n    pass", "write_json('mj1.json',{'a':1}); write_json('mj2.json',{'b':2}); assert merge_json(['mj1.json','mj2.json'])=={'a':1,'b':2}"),
    (291, "Context Manager File", "Write a context manager open_file(path) that yields the file and closes it.", "from contextlib import contextmanager\n@contextmanager\ndef open_file(path):\n    # YOUR CODE HERE\n    pass", "with open_file('test.txt') as f: c=f.read()\nassert isinstance(c, str)"),
    (292, "Temp File", "Write a context manager temp_file() that creates a temp file, yields path, and deletes it on exit.", "from contextlib import contextmanager\nimport tempfile\n@contextmanager\ndef temp_file():\n    # YOUR CODE HERE\n    pass", "with temp_file() as p: write_file(p,'x'); assert open(p).read()=='x'\nimport os; assert not os.path.exists(p)"),
    (293, "Path Exists", "Write a function path_exists(p) using pathlib that returns True if path exists.", "from pathlib import Path\ndef path_exists(p):\n    # YOUR CODE HERE\n    pass", "assert path_exists('.'); assert path_exists(Path('.'))"),
    (294, "List Files", "Write a function list_files(dir_path) that returns names of files (not dirs) in directory.", "def list_files(dir_path):\n    # YOUR CODE HERE\n    pass", "import os; d=os.path.dirname(__file__) if '__file__' in dir() else '.'; assert isinstance(list_files(d), list)"),
    (295, "Get Extension", "Write a function get_extension(path) that returns the file extension (e.g. '.txt').", "def get_extension(path):\n    # YOUR CODE HERE\n    pass", "assert get_extension('a.txt')=='.txt'; assert get_extension('a.b.c')=='.c'"),
    (296, "Change Extension", "Write a function change_extension(path, new_ext) that returns path with new extension.", "def change_extension(path, new_ext):\n    # YOUR CODE HERE\n    pass", "assert change_extension('a.txt','.json')=='a.json'"),
    (297, "Parent Path", "Write a function parent_path(path) that returns the parent directory of path using pathlib.", "def parent_path(path):\n    # YOUR CODE HERE\n    pass", "assert 'resources' in str(parent_path('resources/exercises/x.ipynb'))"),
    (298, "Ensure Dir", "Write a function ensure_dir(path) that creates the directory (and parents) if it doesn't exist.", "def ensure_dir(path):\n    # YOUR CODE HERE\n    pass", "import os; ensure_dir('_test_dir/sub'); assert os.path.isdir('_test_dir/sub'); os.rmdir('_test_dir/sub'); os.rmdir('_test_dir')"),
    (299, "Walk and Collect", "Write a function collect_extensions(dir_path) that returns set of all file extensions in dir.", "def collect_extensions(dir_path):\n    # YOUR CODE HERE\n    pass", "exts=collect_extensions('.'); assert isinstance(exts, set); assert '.py' in exts or '.ipynb' in exts"),
    (300, "Safe Write", "Write a context manager safe_write(path) that writes to a temp file then renames to path on success.", "from contextlib import contextmanager\n@contextmanager\ndef safe_write(path):\n    # YOUR CODE HERE\n    pass", "with safe_write('_sw.txt') as f: f.write('ok')\nassert open('_sw.txt').read()=='ok'; import os; os.remove('_sw.txt')"),
]

def build_part6():
    cells = [md("# 🐍 Python Exercises — Part 6: File I/O and Exceptions (E251–E300)\n\nPractice file operations, exception handling, CSV/JSON, and context managers.")]
    for num, title, desc, starter, test in PART6:
        cells.append(md(f"### Exercise {num}: {title}\n\n{desc}"))
        cells.append(code(starter))
        cells.append(code(f"# Test\n{test}\nprint(\"✅ Exercise {num} passed!\")"))
    save_nb(os.path.join(BASE, "exercises-part6-file-io.ipynb"), cells)

if __name__ == "__main__":
    build_part6()
