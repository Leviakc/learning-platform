# Contributing to Binary Learns

Thank you for your interest in contributing to Binary Learns! This guide will help you add new lessons and exercises to our Python learning platform.

## 🚀 Getting Started: Your First Contribution

Ready to contribute? Here’s the basic workflow:

1.  **Fork the repository** to your own GitHub account.
2.  **Create a new branch** for your topic: `git checkout -b add-functions-lesson`
3.  **Create your lesson and exercise files** following the guides below.
4.  **Test your content** by running the development server and trying the exercise.
5.  **Submit a pull request** with a clear description of what you've added.

## 📚 How to Add Content

### File Structure

Our lessons are organized in the `src/content/python/` directory. For each new topic, you'll create a folder containing a `lesson.md` and an `exercise.md` file.

```
src/content/python/
└── your-new-topic/
├── lesson.md      # The lesson content & quizzes
└── exercise.md    # Interactive exercises with tests
```

### Step 1: Create the Lesson File (`lesson.md`)

This file contains the instructional content. Start with this template:

````markdown
---
type: "lesson"
title: "Your Lesson Title"
description: "A brief description of what students will learn"
difficulty: "beginner" # or "intermediate" or "advanced"
---

# Your Lesson Title

Write your lesson content here using Markdown.

## Learning Objectives

- Understand concept A
- Be able to do B

## The Basics

Explain concepts with clear examples:

```python
# Example code
print("Hello, World!")
```
````

## Key Points

- Important point 1
- Important point 2

### Step 2: Create the Exercise File (`exercise.md`)

This file defines the hands-on practice for the lesson. It has two parts: frontmatter for tests and a Markdown body for instructions and starter code.

````markdown
---
type: "exercise"
title: "Practice: Your Topic"
tests:
  - description: "Variable 'name' should equal 'Alice'"
    type: "variable_equals"
    variableName: "name"
    expectedValue: "Alice"
  - description: "Should print the greeting"
    type: "output_contains"
    expectedOutput: "Hello, Alice"
---

# Practice Time!

Your instructions go here. Be clear and direct.

## Your Task

1.  Create a variable called `name` with the value `"Alice"`.
2.  Print a greeting message using the `name` variable.

```python
# The code in this block will appear in the editor.
# Use comments to guide the student.

# 1. Create the 'name' variable
# Your code here

# 2. Print the greeting
```
````

**Important**: The code inside the final \`\`\`python block is what will appear
as the starting code in the editor.

## 🧪 Available Test Types

Use these test types in the `tests` section of your `exercise.md` frontmatter.

### `variable_equals`

Checks if a variable has a specific value.

```yaml
- description: "The variable 'age' should be 25"
  type: "variable_equals"
  variableName: "age"
  expectedValue: 25
```

### `variable_exists`

Checks if a variable exists and, optionally, its type.

```yaml
- description: "The variable 'numbers' should be a list"
  type: "variable_exists"
  variableName: "numbers"
  expectedType: "list"
```

### `function_returns`

Tests function calls and their return values.

```yaml
- description: "The function greet('Bob') should return 'Hello, Bob!'"
  type: "function_returns"
  functionName: "greet"
  inputs: ["Bob"]
  expectedValue: "Hello, Bob!"
```

### `output_contains`

Checks if specific text was printed to the output.

```yaml
- description: "It should print 'Welcome'"
  type: "output_contains"
  expectedOutput: "Welcome"
```

### `list_length`

Checks the length (the number of elements) of a list.

```yaml
- description: "The list should have 3 elements"
  type: "list_length"
  variableName: "my_list"
  expectedLength: 3
```

## 📝 Writing Guidelines

### For Lessons:

- **Start with fundamentals** - Assume no prior knowledge
- **Explain the "why"** - Not just the "how", explain why it matters
- **Use simple, clear examples** - Code should be easy to understand
- **Progress logically** - Start simple, build up gradually
- **Include practical examples** - Real-world use cases where possible
- **Add interactive quizzes** - Use quiz components to reinforce learning

### For Exercises:

- **Write clear instructions** - Students should know exactly what to do
- **Provide helpful starter code** - Give structure without solving the
  problem. Use comments like `# Your code here` to show where to write code.
- **Create multiple small tests** - Rather than one large, complex test. This
  gives students better feedback.
- **Ensure test descriptions are helpful** - Guide the student toward the correct solution.

### Adding Quizzes to Lessons:

You can add interactive quizzes to your `lesson.md` files to reinforce learning.
Quizzes are defined in the frontmatter YAML, and they will be automatically rendered.

Example `lesson.md` with a quiz:

```markdown
---
type: "lesson"
title: "Your Lesson Title"
description: "A brief description of what students will learn"
difficulty: "beginner"
quiz:
  - question: "What is a variable in Python?"
    options:
      - "A container for data"
      - "A type of loop"
      - "A function"
    answer: "A container for data"
    hint: "Variables store data values that can be used later"
  - question: "Which of these is a valid variable name?"
    options:
      - "2name"
      - "name-2"
      - "name_2"
    answer: "name_2"
    hint: "Variable names can contain letters, numbers, and underscores, but cannot start with a number"
---

# Your Lesson Content

Write your lesson content here using Markdown. The quiz will automatically appear when students view the lesson.
```

### Quiz Guidelines:

- Add the `quiz` property to your lesson frontmatter.
- Each quiz item needs: `question`, `options` (an array), `answer`, and an optional `hint`.
- The `answer` should exactly match one of the `options`.
- Use 2-4 options per question for best results.

## 🔄 Testing Your Content

Before submitting, please test your work locally:

1. Start the development server: `pnpm dev`
2. Navigate to your lesson: `/python/lessons/your-topic`
3. Test the exercise: `/python/lessons/your-topic/exercise`
4. Verify that all tests pass with the correct code and fail with incorrect code.
5. Check that any quizzes you've added work as expected.

## 💡 Need Help or Ideas?

- Check existing lessons for examples.
- See our main [ROADMAP-EN.md](./ROADMAP-EN.md) for planned lessons, or propose your own!
- Open an issue if you have questions or get stuck.

Thank you for helping make programming education accessible to everyone! 🎉
