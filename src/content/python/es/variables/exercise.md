---
type: "exercise"
title: "Práctica de Variables"
tests:
  - description: "Debe tener un comentario al principio"
    type: "output_contains"
    expectedOutput: ""
  - description: "La variable 'mi_heroe' debe existir"
    type: "variable_exists"
    variableName: "mi_heroe"
  - description: "La variable 'mi_heroe' debe ser un texto (string)"
    type: "variable_exists"
    variableName: "mi_heroe"
    expectedType: "str"
  - description: "Debe imprimir el valor de 'mi_heroe'"
    type: "output_contains"
    expectedOutput: ""
---

```python
# 1. Escribe un comentario abajo describiendo qué hace este código.


# 2. Crea una variable llamada mi_heroe y asígnale el nombre de tu héroe favorito.


# 3. Imprime la variable mi_heroe usando la función print().

```
