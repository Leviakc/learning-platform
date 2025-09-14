---
type: "lesson"
title: "Comentarios"
description: "Aprende los conceptos básicos para comentar tu código en Python."
order: 1
difficulty: "beginner"
quiz:
  - question: "¿Cuál es el tipo de dato del valor asignado a la variable 'age' a continuación?\n age = 30"
    options:
      - "int"
      - "str"
      - "float"
      - "bool"
    answer: "int"
    hint: "El valor 30 es un número entero, que se representa con el tipo de dato 'int' en Python."
  - question: "¿Qué función se utiliza para mostrar texto en Python?"
    options:
      - "print"
      - "input"
      - "len"
      - "type"
    answer: "print"
    hint: "La función 'print' se utiliza para mostrar texto u otra salida en Python."
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
