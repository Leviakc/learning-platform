---
type: "lesson"
title: "Comentarios y Variables"
order: 2
description: "Aprende a guardar datos y escribir notas para ti mismo usando variables y comentarios."
difficulty: "beginner"
quiz:
  - question: "¿Qué símbolo se usa para iniciar un comentario en Python?"
    options:
      - "//"
      - "/*"
      - "#"
    answer: "#"
    hint: "Es el símbolo de gato o almohadilla."
  - question: "¿Cuál es la convención recomendada para nombrar variables en Python?"
    options:
      - "camelCase"
      - "snake_case"
      - "PascalCase"
    answer: "snake_case"
    hint: "Piensa en palabras separadas por guiones bajos como una serpiente arrastrándose."
  - question: "¿Puede el nombre de una variable empezar con un número?"
    options:
      - "Sí"
      - "No"
    answer: "No"
    hint: "Los nombres de las variables deben empezar con una letra o un guion bajo."
---

# Comentarios y Variables 📝

<br />

En esta lección, aprenderás dos conceptos fundamentales que usarás en cada programa que escribas: **Comentarios** y **Variables**.

<br />

### 1. Comentarios: Notas para Humanos
Programar no se trata solo de decirle a la computadora qué hacer; también se trata de explicar tu lógica a otras personas (¡incluyendo a tu 'yo' del futuro!).

<br />

En Python, cualquier texto que siga al símbolo `#` es un **comentario**. Python ignora completamente los comentarios al ejecutar tu código.

<br />

```python
# Esto es un comentario. ¡Es solo una nota para mí!
print("Esto se ejecutará")  # También puedes poner comentarios aquí
```

<br />

### 2. Variables: Las Cajas de la Programación
Piensa en una **variable** como una caja con una etiqueta. Puedes poner un valor dentro de la caja y usar la etiqueta para referirte a ese valor más tarde.

<br />

Para crear una variable, usas el **operador de asignación** (`=`):

<br />

```python
nombre_jugador = "Alex"
puntuacion = 100
```
<br />
Ahora, cada vez que uses `nombre_jugador`, Python sabrá que te refieres a `"Alex"`.

<br />

### Reglas para Nombrar Variables
Python es estricto sobre cómo nombras tus "cajas":
1.  **Usa letras, números y guiones bajos:** Pero **no** puedes empezar con un número.
2.  **Sensibilidad a mayúsculas:** `puntuacion` y `Puntuacion` son dos variables diferentes.
3.  **Usa snake_case:** En Python, el estándar es usar palabras en minúsculas separadas por guiones bajos (ej. `edad_usuario`, `precio_total`).
4.  **Sé descriptivo:** Elige nombres que expliquen qué contiene la variable. `x = 10` es malo; `horas_trabajadas = 10` es excelente.

<br />

¿Listo para intentarlo tú mismo? ¡Vamos al ejercicio!
