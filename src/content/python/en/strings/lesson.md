---
type: "lesson"
title: "Strings: Working with Text"
order: 3
description: "Master text manipulation in Python using methods and f-strings."
difficulty: "beginner"
quiz:
  - question: "How do you create a string in Python?"
    options:
      - "Using only double quotes"
      - "Using only single quotes"
      - "Using either single or double quotes"
    answer: "Using either single or double quotes"
    hint: "Both 'text' and \"text\" work the same way."
  - question: "Which method would you use to make a string all uppercase?"
    options:
      - ".up()"
      - ".upper()"
      - ".to_uppercase()"
    answer: ".upper()"
    hint: "It sounds like 'upper case'."
  - question: "What is the special character used at the beginning of an f-string?"
    options:
      - "s"
      - "f"
      - "$"
    answer: "f"
    hint: "It stands for 'formatted'."
---

# Strings: Working with Text 🧵

<br />

In programming, we call text a **String**. A string is just a series of characters (letters, numbers, or symbols) inside quotes.

<br />

### 1. Creating Strings
You can use single quotes (`'`) or double quotes (`"`). Just make sure you use the same type to open and close the string!
<br />
```python
name = "Alice"
message = 'Hello there!'
```

<br />

### 2. String Methods: Powerful Tools
Python gives you built-in "tools" (called methods) to change your text easily. You use them by adding a dot `.` after the string or variable name.
<br />
*   `.upper()`: Changes all letters to uppercase.
*   `.lower()`: Changes all letters to lowercase.
*   `.replace("old", "new")`: Swaps part of the text for something else.
<br />
```python
text = "python is fun"
print(text.upper())  # Output: PYTHON IS FUN
```

<br />

### 3. F-Strings: The Best Way to Build Messages
Sometimes you want to combine variables with text. The modern way to do this in Python is using **f-strings**. 
<br />
To use an f-string, put an `f` before the opening quote and use curly braces `{}` to "inject" your variables.
<br />
```python
age = 25
print(f"I am {age} years old.")
# Output: I am 25 years old.
```
<br />
It's much cleaner and easier to read than adding strings together with `+`.

<br />

Ready to manipulate some text? Let's go to the exercise!
