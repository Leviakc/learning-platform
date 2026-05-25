---
type: "exercise"
title: "String Mastery"
tests:
  - description: "Variable 'first_name' should exist"
    type: "variable_exists"
    variableName: "first_name"
  - description: "Variable 'last_name' should exist"
    type: "variable_exists"
    variableName: "last_name"
  - description: "Variable 'greeting' should use an f-string to combine names"
    type: "variable_exists"
    variableName: "greeting"
  - description: "Should print the greeting in all UPPERCASE"
    type: "output_contains"
    expectedOutput: "HELLO, MY NAME IS"
---

```python
# 1. Create a variable 'first_name' with your name.


# 2. Create a variable 'last_name' with your last name.


# 3. Create a variable 'greeting' using an f-string. 
# It should say: Hello, my name is {first_name} {last_name}


# 4. Print the 'greeting' variable, but use a method to make it all UPPERCASE.

```
