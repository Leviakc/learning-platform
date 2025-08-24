Para la versión en inglés, vea [README-EN.md](./README-EN.md).

# Binary Learns 🐍

Una plataforma interactiva para aprender Python, construida con Astro, SolidJS y Pyodide. Aprende Python directamente en tu navegador con ejercicios prácticos y feedback en tiempo real.

## ✨ Características

- **Editor de Código Interactivo** - Monaco Editor con resaltado de sintaxis para Python.
- **Ejecución Real de Python** - Corre código de Python en el navegador usando Pyodide.
- **Pruebas Automatizadas** - Feedback instantáneo con conjuntos de pruebas completos.
- **Aprendizaje Progresivo** - Lecciones estructuradas desde principiante hasta avanzado.
- **UI Moderna** - Diseño limpio y responsivo con animaciones fluidas.
- **No Requiere Configuración** - Todo funciona en el navegador.

## 🚀 Cómo Empezar

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Clona el repositorio
git clone https://github.com/your-username/binary-learns.git
cd binary-learns

# Instala las dependencias
pnpm install

# Inicia el servidor de desarrollo
pnpm dev
```

Visita `http://localhost:4321` para ver la aplicación.

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── solid/              # Componentes de SolidJS
│   │   ├── MonacoEditor.tsx
│   │   └── TestRunner.tsx
│   └── ui/                 # Componentes de UI reutilizables
├── content/
│   └── python/             # Contenido de las lecciones
│       ├── variables/
│       ├── lists/
│       └── comments/
├── layouts/                # Diseños de página
├── pages/                  # Páginas de rutas
└── types/                  # Definiciones de TypeScript
```

## 🗺️ Ruta del proyecto

Tenemos una emocionante hoja de ruta de funcionalidades para mejorar la plataforma Binary Learns. Nuestros objetivos principales son mejorar la experiencia de aprendizaje, expandir el contenido y empoderar a la comunidad.

- [ ] **Snippets en el Editor:** Añadir snippets de código personalizados al editor para patrones comunes (ej. bucles `for`, `funciones`).
- [ ] **Tour Interactivo de la Página (con Driver.js):** Implementar tours guiados para introducir a los usuarios a las funcionalidades de la plataforma.
- [ ] **Mejorar primeras lecciones:** Hacer las primeras lecciones más
      amigables para principiantes y con mejor contenido.
- [ ] **Almacenamiento de Progreso:** Implementar cuentas de usuario para guardar el progreso y registrar las lecciones completadas.
- [ ] **i18n:** Internacionalización completa para soportar múltiples idiomas en la interfaz de usuario.
- [ ] **Soporte para PWA:** Convertir la aplicación en una Progressive Web App para mejores capacidades offline y rendimiento.
- [ ] **Soporte para SQL:** Añadir una ruta de aprendizaje completa para SQL, desde consultas básicas hasta temas avanzados.
- [ ] **Mejoras de UI/UX:** Mejorar continuamente la interfaz de usuario y la experiencia.
- [ ] **Mejoras en performance**: Mejorar los tiempos de carga y la eficiencia
      del editor.

Para un desglose detallado de las próximas lecciones, por favor vea nuestra [Hoja de Ruta de Lecciones](ROADMAP.md).

## 🤝 Contribuciones

¡Aceptamos contribuciones! Ya sea que quieras:

- Añadir nuevas lecciones.
- Mejorar el contenido existente.
- Corregir bugs.
- Mejorar la UI/UX.

Por favor, revisa nuestra [Guía de Contribución](./CONTRIBUTING.md) para instrucciones detalladas.

### Pasos Rápidos para Contribuir

1. Haz un `fork` del repositorio.
2. Crea una rama para tu nueva funcionalidad.
3. Añade tu lección siguiendo nuestras [directrices de contenido](./CONTRIBUTING.md).
4. Prueba todo exhaustivamente.
5. Envía un `pull request`.

## 🧞 Comandos

| Comando            | Acción                                               |
| ------------------ | ---------------------------------------------------- |
| `pnpm install`     | Instala las dependencias                             |
| `pnpm dev`         | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`       | Compila para producción                              |
| `pnpm preview`     | Previsualiza la compilación de producción            |
| `pnpm astro check` | Revisa los tipos del proyecto                        |

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)** - Generador de sitios estáticos con arquitectura de islas.
- **[SolidJS](https://solidjs.com/)** - Componentes de UI reactivos.
- **[Monaco Editor](https://microsoft.github.io/monaco-editor/)** - El editor de VS Code en el navegador.
- **[Pyodide](https://pyodide.org/)** - Runtime de Python para WebAssembly.
- **[TailwindCSS](https://tailwindcss.com/)** - Framework de CSS utility-first.
- **[TypeScript](https://typescriptlang.org/)** - JavaScript con tipado seguro.

## 📄 Licencia

Este proyecto está bajo la Licencia LGPLv3 - vea el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- **Al equipo de Pyodide** por hacer posible Python en el navegador.
- **A Monaco Editor** por la excelente experiencia de edición de código.
- **Al equipo de Astro** por el increíble framework.
- **A todos los contribuidores** que ayudan a que el aprendizaje sea accesible.

---

Hecho con ❤️ para la comunidad de aprendizaje de Python.
