# Contribuye a Binary Learns

¡Gracias por tu interés en contribuir a Binary Learns! Esta guía te ayudará a agregar nuevas lecciones y ejercicios a nuestra plataforma de aprendizaje de Python.

## 🚀 Primeros Pasos: Tu Primera Contribución

¿Listo para contribuir? Aquí está el flujo de trabajo básico:

1. **Haz fork del repositorio** a tu propia cuenta de GitHub.

2. **Crea una nueva rama** para tu tema: `git checkout -b agregar-leccion-funciones`

3. **Crea tus archivos de lección y ejercicio** siguiendo las guías de abajo.

4. **Prueba tu contenido** ejecutando el servidor de desarrollo y probando el ejercicio.

5. **Envía un pull request** con una descripción clara de lo que has agregado.

## 📚 Cómo Agregar Contenido

### Estructura de Archivos

Nuestras lecciones están organizadas en el directorio `src/content/python/`. Para cada nuevo tema, crearás una carpeta que contenga un archivo `lesson.md` y un `exercise.md`.

```
src/content/python/
└── tu-nuevo-tema/
    ├── lesson.md      # El contenido de la lección y cuestionarios
    └── exercise.md    # Ejercicios interactivos con pruebas
```

### Paso 1: Crear el Archivo de Lección (`lesson.md`)

Este archivo contiene el contenido instructivo. Comienza con esta plantilla:

```markdown
---
type: "lesson"
title: "Título de Tu Lección"
description: "Una breve descripción de lo que aprenderán los estudiantes"
difficulty: "beginner" # o "intermediate" o "advanced"
---

# Título de Tu Lección

Escribe el contenido de tu lección aquí usando Markdown.

## Objetivos de Aprendizaje

- Entender el concepto A
- Ser capaz de hacer B

## Los Conceptos Básicos

Explica los conceptos con ejemplos claros:

```python
# Código de ejemplo
print("¡Hola, Mundo!")
```

## Puntos Clave

- Punto importante 1
- Punto importante 2

### Paso 2: Crear el Archivo de Ejercicio (`exercise.md`)

Este archivo define la práctica práctica para la lección. Tiene dos partes: frontmatter para las pruebas y un cuerpo en Markdown para instrucciones y código inicial.

```markdown
---
type: "exercise"
title: "Práctica: Tu Tema"
tests:
  - description: "La variable 'nombre' debería ser igual a 'Ana'"
    type: "variable_equals"
    variableName: "nombre"
    expectedValue: "Ana"
  - description: "Debería imprimir el saludo"
    type: "output_contains"
    expectedOutput: "Hola, Ana"
---

# ¡Hora de Practicar!

Tus instrucciones van aquí. Sé claro y directo.

## Tu Tarea

1. Crea una variable llamada `nombre` con el valor `"Ana"`.
2. Imprime un mensaje de saludo usando la variable `nombre`.

```python
# El código en este bloque aparecerá en el editor.
# Usa comentarios para guiar al estudiante.

# 1. Crea la variable 'nombre'
# Tu código aquí

# 2. Imprime el saludo
```

**Importante:** El código dentro del bloque final \`\`\`python es lo que aparecerá como código inicial en el editor.

## 🧪 Tipos de Pruebas Disponibles

Usa estos tipos de pruebas en la sección `tests` del frontmatter de tu `exercise.md`.

### `variable_equals`

Verifica si una variable tiene un valor específico.

```yaml
- description: "La variable 'edad' debería ser 25"
  type: "variable_equals"
  variableName: "edad"
  expectedValue: 25
```

### `variable_exists`

Verifica si una variable fue definida, y opcionalmente, su tipo.

```yaml
- description: "La variable 'numeros' debería ser una lista"
  type: "variable_exists"
  variableName: "numeros"
  expectedType: "list"
```

### `function_returns`

Prueba llamadas a funciones y sus valores de retorno.

```yaml
- description: "La función saludar('Bob') debería retornar '¡Hola, Bob!'"
  type: "function_returns"
  functionName: "saludar"
  inputs: ["Bob"]
  expectedValue: "¡Hola, Bob!"
```

### `output_contains`

Verifica si el código del usuario imprimió texto específico.

```yaml
- description: "Debería imprimir 'Bienvenido'"
  type: "output_contains"
  expectedOutput: "Bienvenido"
```

### `list_length`

Verifica el número de elementos en una lista.

```yaml
- description: "La lista debería tener 3 elementos"
  type: "list_length"
  variableName: "mi_lista"
  expectedLength: 3
```

## 📝 Guías de Escritura

### Para Lecciones:
- **Comienza con fundamentos**; asume que no hay conocimiento previo.
- **Explica el "por qué"** detrás de los conceptos, no solo el "cómo".
- **Usa ejemplos simples y claros** que sean fáciles de entender.
- **Progresa lógicamente** de conceptos simples a más complejos.

### Para Ejercicios:
- **Escribe instrucciones claras** para que los estudiantes sepan exactamente qué hacer.
- **Proporciona código inicial útil** que dé estructura sin resolver el problema. Usa comentarios como `# Tu código aquí` para mostrar dónde escribir código.
- **Crea múltiples pruebas pequeñas** en lugar de una prueba grande y compleja. Esto da mejor retroalimentación a los estudiantes.
- **Asegúrate de que las descripciones de las pruebas sean útiles** y guíen al estudiante hacia la solución correcta si fallan.

## Agregando Cuestionarios a las Lecciones

Puedes agregar cuestionarios interactivos a tus archivos `lesson.md` para reforzar el aprendizaje. Los cuestionarios se definen en el frontmatter YAML y se renderizarán automáticamente.

Ejemplo de `lesson.md` con un cuestionario:

```markdown
---
type: "lesson"
title: "Título de Tu Lección"
description: "Una breve descripción de lo que aprenderán los estudiantes"
difficulty: "beginner"
quiz:
  - question: "¿Qué es una variable en Python?"
    options:
      - "Un contenedor para datos"
      - "Un tipo de bucle"
      - "Una función"
    answer: "Un contenedor para datos"
    hint: "Las variables almacenan valores de datos que se pueden usar después"
  - question: "¿Cuál de estos es un nombre de variable válido?"
    options:
      - "2nombre"
      - "nombre-2"
      - "nombre_2"
    answer: "nombre_2"
    hint: "Los nombres de variables pueden contener letras, números y guiones bajos, pero no pueden empezar con un número"
---

# Contenido de Tu Lección

Escribe el contenido de tu lección aquí usando Markdown. El cuestionario aparecerá automáticamente cuando los estudiantes vean la lección.
```

### Guías para Cuestionarios:
- Agrega la propiedad `quiz` al frontmatter de tu lección.
- Cada elemento del cuestionario necesita: `question`, `options` (un array), `answer`, y un `hint` opcional.
- El `answer` debe coincidir exactamente con una de las opciones.
- Usa 2-4 opciones por pregunta para mejores resultados.

## 🔄 Probando Tu Contenido

Antes de enviar, por favor prueba tu trabajo localmente:

1. **Inicia el servidor de desarrollo**: `pnpm dev`
2. **Navega a tu lección**: `/python/lessons/tu-tema`
3. **Prueba el ejercicio**: `/python/lessons/tu-tema/exercise`
4. **Verifica que todas las pruebas pasen** con el código correcto y fallen con código incorrecto.
5. **Revisa que cualquier cuestionario** que hayas agregado funcione como se espera.

## 💡 ¿Necesitas Ayuda o Ideas?

- Revisa las lecciones existentes como ejemplos.
- Ve nuestro `README.md#roadmap` principal para lecciones planeadas, ¡o propón las tuyas!
- Abre un issue si tienes preguntas o te atascas.

¡Gracias por ayudar a hacer la educación en programación accesible para todos! 🎉
