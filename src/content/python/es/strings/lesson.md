---
type: "lesson"
title: "Strings: Trabajando con Texto"
order: 3
description: "Domina la manipulación de texto en Python usando métodos y f-strings."
difficulty: "beginner"
quiz:
  - question: "¿Cómo se crea un string en Python?"
    options:
      - "Usando solo comillas dobles"
      - "Usando solo comillas simples"
      - "Usando comillas simples o dobles"
    answer: "Usando comillas simples o dobles"
    hint: "Tanto 'texto' como \"texto\" funcionan igual."
  - question: "¿Qué método usarías para poner un string todo en mayúsculas?"
    options:
      - ".up()"
      - ".upper()"
      - ".to_uppercase()"
    answer: ".upper()"
    hint: "En inglés, mayúsculas se dice 'upper case'."
  - question: "¿Qué letra especial se usa al principio de un f-string?"
    options:
      - "s"
      - "f"
      - "$"
    answer: "f"
    hint: "Viene de la palabra 'formatted' (formateado)."
---

# Strings: Trabajando con Texto 🧵

<br />

En programación, llamamos al texto **String** (cadena). Un string es simplemente una serie de caracteres (letras, números o símbolos) dentro de comillas.

<br />

### 1. Creando Strings
Puedes usar comillas simples (`'`) o dobles (`"`). ¡Solo asegúrate de usar el mismo tipo para abrir y cerrar el string!
<br />
```python
nombre = "Alice"
mensaje = '¡Hola a todos!'
```

<br />

### 2. Métodos de String: Herramientas Poderosas
Python te da "herramientas" integradas (llamadas métodos) para cambiar tu texto fácilmente. Se usan agregando un punto `.` después del string o del nombre de la variable.
<br />
*   `.upper()`: Cambia todas las letras a mayúsculas.
*   `.lower()`: Cambia todas las letras a minúsculas.
*   `.replace("viejo", "nuevo")`: Cambia una parte del texto por otra.
<br />
```python
texto = "python es divertido"
print(texto.upper())  # Resultado: PYTHON ES DIVERTIDO
```

<br />

### 3. F-Strings: La Mejor Forma de Construir Mensajes
A veces quieres combinar variables con texto. La forma moderna de hacer esto en Python es usando **f-strings**.
<br />
Para usar un f-string, pon una `f` antes de las comillas iniciales y usa llaves `{}` para "inyectar" tus variables.
<br />
```python
edad = 25
print(f"Tengo {edad} años.")
# Resultado: Tengo 25 años.
```
<br />
Es mucho más limpio y fácil de leer que sumar strings con el símbolo `+`.

<br />

¿Listo para manipular algo de texto? ¡Vamos al ejercicio!
