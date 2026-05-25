---
type: "exercise"
title: "Maestría en Strings"
tests:
  - description: "La variable 'nombre' debe existir"
    type: "variable_exists"
    variableName: "nombre"
  - description: "La variable 'apellido' debe existir"
    type: "variable_exists"
    variableName: "apellido"
  - description: "La variable 'saludo' debe usar un f-string para combinar los nombres"
    type: "variable_exists"
    variableName: "saludo"
  - description: "Debe imprimir el saludo todo en MAYÚSCULAS"
    type: "output_contains"
    expectedOutput: "HOLA, MI NOMBRE ES"
---

```python
# 1. Crea una variable 'nombre' con tu nombre.


# 2. Crea una variable 'apellido' con tu apellido.


# 3. Crea una variable 'saludo' usando un f-string. 
# Debe decir: Hola, mi nombre es {nombre} {apellido}


# 4. Imprime la variable 'saludo', pero usa un método para que esté todo en MAYÚSCULAS.

```
