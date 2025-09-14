---
type: "exercise"
tests:
  - description: "Variable 'my_list' should be an empty array"
    type: "list_length"
    variableName: "my_list"
    expectedLength: 0
  - description: "Variable 'my_list' should be of type list"
    type: "variable_exists"
    variableName: "my_list"
    expectedType: "list"
  - description: "Should print the list"
    type: "output_contains"
    expectedOutput: "[]"
  - description: "Variable 'my_friends' should be a list with 3 elements"
    type: "list_length"
    variableName: "my_friends"
    expectedLength: 3
---

```python
# Time to practice! Your goal is to create two variables and print them.

# 1. Create a variable named 'my_list' and assign it an empty list.
```
