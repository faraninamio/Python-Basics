# 🐍 Python Basics

A beginner-friendly guide to Python — covering all the core concepts you need to get started. Perfect for anyone new to programming or picking up Python for the first time.

---

## 📚 Table of Contents

1. [What is Python?](#what-is-python)
2. [Installation](#installation)
3. [Variables](#variables)
4. [Comments](#comments)
5. [Data Types](#data-types)
6. [Mutable vs Immutable Types](#mutable-vs-immutable-types)
7. [Working with Strings](#working-with-strings)
8. [Working with Numbers](#working-with-numbers)
9. [Augmented Assignments](#augmented-assignments)
10. [Functions](#functions)
11. [Scope](#scope)
12. [Comparison Operators](#comparison-operators)
13. [if / elif / else Statements](#if--elif--else-statements)
14. [Truthy and Falsy Values](#truthy-and-falsy-values)
15. [Boolean Operators](#boolean-operators)

---

## What is Python?

Python is a general-purpose programming language known for its simplicity and ease of use. It's one of the most beginner-friendly languages out there, and it's used in a huge range of fields:

- 📊 Data Science & Machine Learning
- 🌐 Web Development
- 🤖 Scripting & Automation
- 🔒 Cybersecurity
- 🖥️ Embedded Systems & IoT (Raspberry Pi, MicroPython)

---

## Installation

Download Python from the official website:

👉 [https://www.python.org/](https://www.python.org/)

It's available for **Windows**, **Mac**, and **Linux**.

---

## Variables

Variables are like labeled boxes — you store a value inside and refer to it by name.

```python
name = 'John Doe'
age = 25
```

### Naming Rules

- Must start with a **letter** or **underscore** (`_`), not a number
- Can only contain **letters, numbers, and underscores**
- Are **case-sensitive** — `age`, `Age`, and `AGE` are all different
- Cannot use **reserved keywords** like `if`, `class`, or `def`
- Use **snake_case** for multi-word names: `my_variable_name`

---

## Comments

Use comments to leave notes in your code.

```python
# This is a single line comment

"""
This is a multi-line string.
It can be used to comment out larger blocks of code.

name = 'John Doe'
age = 25
"""
```

### Printing to the Console

```python
print('Hello world!')  # Hello world!
```

---

## Data Types

Python is **dynamically typed** — you don't need to declare types manually. Python figures it out based on the value you assign.

| Type | Description | Example |
|------|-------------|---------|
| `int` | Whole number | `10` |
| `float` | Decimal number | `4.50` |
| `str` | Text (sequence of characters) | `'hello'` |
| `bool` | True or False | `True` |
| `list` | Ordered, changeable collection | `[22, 'hello', 3.14]` |
| `tuple` | Ordered, unchangeable collection | `(7, 5, 8)` |
| `set` | Unordered collection of unique items | `{7, 5, 8}` |
| `dict` | Key-value pairs | `{"name": "Alice", "age": 25}` |
| `range` | Sequence of numbers | `range(5)` |
| `None` | Represents the absence of a value | `None` |

```python
my_integer_var = 10
my_float_var   = 4.50
my_string_var  = 'hello'
my_boolean_var = True
my_list        = [22, 'Hello world', 3.14, True]
my_tuple_var   = (7, 5, 8)
my_set_var     = {7, 5, 8}
my_dict_var    = {"name": "Alice", "age": 25}
my_range_var   = range(5)
my_none_var    = None
```

### Checking Types

```python
greeting = 'Hello there!'
age = 21

print(type(greeting))           # <class 'str'>
print(type(age))                # <class 'int'>
print(isinstance(greeting, str)) # True
print(isinstance(age, str))      # False
```

---

## Mutable vs Immutable Types

| Category | Types | Can change after creation? |
|----------|-------|---------------------------|
| **Immutable** | `int`, `float`, `bool`, `str`, `tuple`, `range`, `None` | ❌ No |
| **Mutable** | `list`, `set`, `dict` | ✅ Yes |

> **Note:** Immutable doesn't mean the variable is locked forever — you can always *reassign* it to a new value. It just means you can't modify the existing value in place.

---

## Working with Strings

Strings are sequences of characters. You can use single or double quotes — just stay consistent.

```python
developer = 'Jessica'
city = "Los Angeles"
```

### Accessing Characters

```python
my_str = 'Hello world'

print(my_str[0])   # H  (first character)
print(my_str[6])   # w
print(my_str[-1])  # d  (last character)
print(my_str[-2])  # l
```

### Escaping Quotes

```python
msg   = 'It\'s a sunny day'
quote = "She said, \"Hello!\""
```

### String Concatenation

```python
developer = 'Jessica'
print('My name is ' + developer + '.')  # My name is Jessica.

# Using +=
greeting = 'My name is '
greeting += 'Jessica.'
print(greeting)  # My name is Jessica.
```

### f-Strings (Recommended)

```python
developer = 'Jessica'
greeting = f'My name is {developer}.'
print(greeting)  # My name is Jessica.
```

### String Slicing

```python
# str[start:stop:step]
message = 'Python is fun!'

print(message[0:6])   # Python
print(message[7:])    # is fun!
print(message[::2])   # Pto sfn
```

### String Length

```python
developer = 'Jessica'
print(len(developer))  # 7
```

### Checking if a Substring Exists

```python
my_str = 'Hello world'

print('Hello' in my_str)  # True
print('hey' in my_str)    # False
```

### Common String Methods

```python
developer = 'Jessica'

developer.upper()               # 'JESSICA'
developer.lower()               # 'jessica'
developer.capitalize()          # 'Jessica'
developer.title()               # 'Jessica'  (capitalizes each word)
developer.strip()               # removes leading/trailing whitespace
developer.replace('J', 'M')     # 'Messica'
developer.find('s')             # 2  (index of first 's')
developer.count('s')            # 2  (how many times 's' appears)
developer.startswith('J')       # True
developer.endswith('a')         # True
developer.isupper()             # False
developer.islower()             # False

# split and join
dashed = 'example-dashed-name'
words  = dashed.split('-')       # ['example', 'dashed', 'name']
joined = ' '.join(words)         # 'example dashed name'
```

---

## Working with Numbers

### Basic Math

```python
print(56 + 12)   # 68   (addition)
print(56 - 12)   # 44   (subtraction)
print(56 * 12)   # 672  (multiplication)
print(56 / 12)   # 4.67 (division — always returns float)
print(56 % 12)   # 8    (modulus — remainder)
print(56 // 12)  # 4    (floor division — rounds down)
print(4 ** 2)    # 16   (exponentiation — 4 to the power of 2)
```

> Adding a `float` and an `int` always results in a `float`: `56 + 5.4 = 61.4`

### Useful Number Functions

```python
float(4)       # 4.0   — convert int to float
int(4.9)       # 4     — convert float to int (truncates, doesn't round)
round(3.4)     # 3     — round to nearest integer
round(7.7)     # 8
abs(-13)       # 13    — absolute value
pow(2, 3)      # 8     — 2 to the power of 3
bin(56)        # '0b111000' — binary representation
oct(56)        # '0o70'    — octal representation
hex(56)        # '0x38'    — hexadecimal representation
```

---

## Augmented Assignments

Shorthand for updating a variable using an operation:

```python
x = 10
x += 5    # x = x + 5  → 15
x -= 3    # x = x - 3  → 12
x *= 2    # x = x * 2  → 24
x /= 4    # x = x / 4  → 6.0
x //= 2   # x = x // 2 → 3.0
x %= 2    # x = x % 2  → 1.0
x **= 3   # x = x ** 3 → 1.0
```

---

## Functions

Functions are reusable blocks of code. You define them once and call them whenever you need them.

```python
def get_sum(num_1, num_2):
    return num_1 + num_2

result = get_sum(3, 4)
print(result)  # 7
```

### Default Parameter Values

```python
def get_sum(num_1, num_2=2):
    return num_1 + num_2

print(get_sum(3))  # 5  (num_2 defaults to 2)
```

### Functions Without a Return Value

```python
def greet():
    print('hello')

result = greet()   # prints: hello
print(result)      # None  (no return value)
```

### Getting User Input

```python
name = input('What is your name? ')
print('Hello', name)
```

---

## Scope

Scope determines where a variable can be accessed.

### Local Scope
Variables declared **inside** a function — only accessible within that function.
```python
def my_func():
    num = 10       # local variable
    print(num)
```

### Enclosing Scope
An inner function can access variables from its outer function.
```python
def outer_func():
    msg = 'Hello there!'

    def inner_func():
        print(msg)   # can access outer variable
    inner_func()

outer_func()  # Hello there!
```

### Global Scope
Variables declared **outside** any function — accessible anywhere.
```python
tax = 0.70

def get_total(subtotal):
    return subtotal + (subtotal * tax)  # can access global 'tax'

print(get_total(100))  # 170.0
```

### Built-in Scope
Predefined names in Python: `print`, `str`, `type`, `isinstance`, etc.

---

## Comparison Operators

These always return `True` or `False`.

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | Equal to | `3 == 4` | `False` |
| `!=` | Not equal to | `3 != 4` | `True` |
| `>` | Greater than | `3 > 4` | `False` |
| `<` | Less than | `3 < 4` | `True` |
| `>=` | Greater than or equal | `4 >= 4` | `True` |
| `<=` | Less than or equal | `3 <= 4` | `True` |

---

## if / elif / else Statements

Used to make decisions in your code.

```python
age = 16

if age >= 18:
    print('You are an adult')
elif age >= 13:
    print('You are a teenager')   # ✅ this runs
else:
    print('You are a child')
```

### Nested if Statements

```python
is_citizen = True
age = 25

if is_citizen:
    if age >= 18:
        print('You are eligible to vote')  # ✅ this runs
else:
    print('You are not eligible to vote')
```

---

## Truthy and Falsy Values

Every value in Python has a built-in sense of being `True` or `False` in a logical context.

### Falsy Values (treated as `False`)
```python
False
0
0.0
''        # empty string
None
```

### Truthy Values (treated as `True`)
Anything that isn't falsy — non-zero numbers, non-empty strings, non-empty collections, etc.

```python
print(bool(0))       # False
print(bool(''))      # False
print(bool(None))    # False

print(bool(1))       # True
print(bool('hello')) # True
print(bool([1, 2]))  # True
```

---

## Boolean Operators

Combine multiple conditions together.

### `and` — Both must be true

```python
is_citizen = True
age = 25

if is_citizen and age >= 18:
    print('You are eligible to vote')  # ✅ this runs
```

### `or` — At least one must be true

```python
age = 19
is_student = True

if age < 18 or is_student:
    print('You are eligible for a student discount')  # ✅ this runs
```

### `not` — Flips the boolean value

```python
is_admin = False

if not is_admin:
    print('Access denied.')  # ✅ this runs

print(not True)   # False
print(not False)  # True
print(not 0)      # True
print(not '')     # True
```

### Short-Circuiting

Python stops evaluating as soon as it knows the answer:
- `and` stops at the **first falsy** value
- `or` stops at the **first truthy** value

```python
print(False and 10)   # False  (stopped at False)
print(True or 10)     # True   (stopped at True)
print(True and 10)    # 10     (evaluated both, returned last)
print(False or 10)    # 10     (evaluated both, returned last)
```

---

## 🎓 Practice Project

Put it all together! Try building an RPG Character Creator:

```python
full_dot  = '●'
empty_dot = '○'

def create_character(name, strength, intelligence, charisma):
    # Validate name
    if not isinstance(name, str):
        return 'The character name should be a string'
    if name == '':
        return 'The character should have a name'
    if len(name) > 10:
        return 'The character name is too long'
    if ' ' in name:
        return 'The character name should not contain spaces'

    # Validate stats
    if not all(isinstance(s, int) for s in [strength, intelligence, charisma]):
        return 'All stats should be integers'
    if any(s < 1 for s in [strength, intelligence, charisma]):
        return 'All stats should be no less than 1'
    if any(s > 4 for s in [strength, intelligence, charisma]):
        return 'All stats should be no more than 4'
    if strength + intelligence + charisma != 7:
        return 'The character should start with 7 points'

    # Build character sheet
    def stat_bar(value):
        return full_dot * value + empty_dot * (10 - value)

    return f"{name}\nSTR {stat_bar(strength)}\nINT {stat_bar(intelligence)}\nCHA {stat_bar(charisma)}"

print(create_character('ren', 4, 2, 1))
# ren
# STR ●●●●○○○○○○
# INT ●●○○○○○○○○
# CHA ●○○○○○○○○○
```

---

## 📎 Resources

- 📖 [Official Python Docs](https://docs.python.org/3/)
- 🎮 [Practice on freeCodeCamp](https://www.freecodecamp.org/)
- 🧪 [Python Tutor (visualize your code)](https://pythontutor.com/)
---

*Happy coding! 🚀 Feel free to contribute, open issues, or suggest improvements.*
