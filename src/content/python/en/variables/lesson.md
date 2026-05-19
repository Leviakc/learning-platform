---
type: "lesson"
title: "Comments and Variables"
order: 2
description: "Learn how to store data and write notes for yourself using variables and comments."
difficulty: "beginner"
quiz:
  - question: "Which symbol is used to start a comment in Python?"
    options:
      - "//"
      - "/*"
      - "#"
    answer: "#"
    hint: "It's the pound or hash symbol."
  - question: "What is the recommended naming convention for variables in Python?"
    options:
      - "camelCase"
      - "snake_case"
      - "PascalCase"
    answer: "snake_case"
    hint: "Think about words separated by underscores like a crawling snake."
  - question: "Can a variable name start with a number?"
    options:
      - "Yes"
      - "No"
    answer: "No"
    hint: "Variable names must start with a letter or an underscore."
---

# Comments and Variables 📝

<br />

In this lesson, you'll learn two fundamental concepts that you'll use in every single program you write: **Comments** and **Variables**.

<br />

### 1. Comments: Notes for Humans
Programming isn't just about telling the computer what to do; it's also about explaining your logic to other people (including your future self!).
<br />
In Python, any text following the `#` symbol is a **comment**. Python completely ignores comments when running your code.

<br />

```python
# This is a comment. It's just a note for me!
print("This will run")  # You can also put comments here
```

<br />

### 2. Variables: The Boxes of Programming
Think of a **variable** as a box with a label on it. You can put a value inside the box and use the label to refer to that value later.

<br />

To create a variable, you use the **assignment operator** (`=`):

<br />

```python
player_name = "Alex"
score = 100
```

<br />

Now, whenever you use `player_name`, Python knows you mean `"Alex"`.

<br />

### Rules for Naming Variables
Python is picky about how you name your "boxes":
1.  **Use letters, numbers, and underscores:** But you **cannot** start with a number.
2.  **Case sensitivity:** `score` and `Score` are two different variables.
3.  **Use snake_case:** In Python, the standard is to use lowercase words separated by underscores (e.g., `user_age`, `total_price`).
4.  **Be descriptive:** Choose names that explain what the variable holds. `x = 10` is bad; `hours_worked = 10` is great!

<br />

Ready to try it yourself? Let's go to the exercise!
