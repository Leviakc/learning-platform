# Binary Learns 🐍

An interactive Python learning platform built with Astro, SolidJS, and Pyodide. Learn Python directly in your browser with hands-on exercises and real-time feedback.

## ✨ Features

- **Interactive Code Editor** - Monaco Editor with Python syntax highlighting
- **Real Python Execution** - Run Python code in the browser using Pyodide
- **Automated Testing** - Instant feedback with comprehensive test suites
- **Progressive Learning** - Structured lessons from beginner to advanced
- **Modern UI** - Clean, responsive design with smooth animations
- **No Setup Required** - Everything runs in the browser

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/binary-learns.git
cd binary-learns

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Visit `http://localhost:4321` to see the application.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── solid/              # SolidJS components
│   │   ├── MonacoEditor.tsx
│   │   └── TestRunner.tsx
│   └── ui/                 # Reusable UI components
├── content/
│   └── python/             # Lesson content
│       ├── variables/
│       ├── lists/
│       └── comments/
├── layouts/                # Page layouts
├── pages/                  # Route pages
└── types/                  # TypeScript definitions
```

## 🗺️ Features Roadmap

We have an exciting roadmap of features to enhance the Binary Learns platform. Our main goals are to improve the learning experience, expand the content, and empower the community.

- [x] **Editor Snippets:** Add custom code snippets to the editor for common patterns (e.g., `for` loops, `functions`).
- [ ] **Improve First Lessons:** Make the first lessons more engaging and beginner-friendly with more useful content and examples.
- [x] **i18n:** Full internationalization to support multiple languages in the UI.
- [ ] **Progress Storage:** Implementing user accounts to save progress and track completed lessons.
- [ ] **PWA Support:** Making the application a Progressive Web App for better offline capabilities and performance.
- [ ] **SQL Support:** Adding a full learning path for SQL, from basic queries to advanced topics.
- [ ] **Interactive Page Tour (with Driver.js):** Implement guided tours to introduce users to the platform's features.
- [ ] **UI/UX Enhancements:** Continuously improving the user interface and experience.
- [ ] **Performance Improvements:** Enhancing load times and efficiency.

For a detailed breakdown of upcoming lessons, please see our [Lessons Roadmap](ROADMAP-EN.md).

## 🤝 Contributing

We welcome contributions! Whether you want to:

- Add new lessons
- Improve existing content
- Fix bugs
- Enhance the UI/UX

Please check our [Contributing Guide](CONTRIBUTING-EN.md) for detailed instructions.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch
3. Add your lesson following our [content guidelines](CONTRIBUTING-EN.md)
4. Test thoroughly
5. Submit a pull request

## 🧞 Commands

| Command            | Action                                       |
| ------------------ | -------------------------------------------- |
| `pnpm install`     | Install dependencies                         |
| `pnpm dev`         | Start development server at `localhost:4321` |
| `pnpm build`       | Build for production                         |
| `pnpm preview`     | Preview production build                     |
| `pnpm astro check` | Type check the project                       |

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator with islands architecture
- **[SolidJS](https://solidjs.com/)** - Reactive UI components
- **[Monaco Editor](https://microsoft.github.io/monaco-editor/)** - VS Code editor in the browser
- **[Pyodide](https://pyodide.org/)** - Python runtime for WebAssembly
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://typescriptlang.org/)** - Type-safe JavaScript

## 📄 License

This project is licensed under the LGPLv3 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pyodide team** for making Python in the browser possible
- **Monaco Editor** for the excellent code editing experience
- **Astro team** for the amazing framework
- **All contributors** who help make learning accessible

---

Made with ❤️ for the Python learning community
