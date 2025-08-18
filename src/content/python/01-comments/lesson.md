---
type: "lesson"
title: "Comments"
description: "Learn the basics of commenting your code in Python."
difficulty: "beginner"
quiz:
  - question: "What is the data type of the value assigned to the 'age' variable below?\n age = 30"
    options:
      - "int"
      - "str"
      - "float"
      - "bool"
    answer: "int"
    hint: "The value 30 is a whole number, which is represented by the 'int' data type in Python."
  - question: "What function is used to display text in Python?"
    options:
      - "print"
      - "input"
      - "len"
      - "type"
    answer: "print"
    hint: "The 'print' function is used to display text or other output in Python."
---

Estos son un par de funcionalidades para las cuales sirve comentar nuestro código

Los comentarios pueden dar mayor contexto acerca de lo que estamos codeando
Ayuda a otras personas que leen nuestro código a entender más fácilmente
Ignoran lineas de código y hacen que no se ejecuten

# Este es un comentario para una sola línea

`print("Hola Mundo")`

```python frame="code" title="python.py"
'''
Este es un comentario largo que puede abarcar grandes partes de nuestro codigo

'''
print("Este es otro tipo de comentario")
x = 12
```

Este es otro tipo de comentario
