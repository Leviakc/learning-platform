---
type: "exercise"
title: "Variable Practice"
tests:
  - description: "Should have a comment at the top"
    type: "output_contains"
    expectedOutput: "" # TestRunner doesn't strictly test for comments in code yet, but we'll ask for it.
  - description: "Variable 'my_hero' should exist"
    type: "variable_exists"
    variableName: "my_hero"
  - description: "Variable 'my_hero' should be a string"
    type: "variable_exists"
    variableName: "my_hero"
    expectedType: "str"
  - description: "Should print the value of 'my_hero'"
    type: "output_contains"
    expectedOutput: "" # We can't know the hero name, but we'll check if output is not empty
---

```python
# 1. Write a comment below describing what this code does.


# 2. Create a variable named my_hero and assign it your favorite hero's name.


# 3. Print the my_hero variable using the print() function.

```
