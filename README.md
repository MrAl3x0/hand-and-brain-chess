# Hand and Brain Chess

> **⚠️ Work in progress**  
> This project is under active development and **not yet ready for production use**. Expect breaking changes and missing features while the core gameplay is being built.

A lightweight web app for hosting **Hand & Brain** chess games with friends. Built with **Vite + React + TypeScript** and styled using **Tailwind CSS**, it lets players spin up a room, share a 4-letter code, and jump straight into the game—no installs, no fuss.

---

## Game Rules (Quick Reference)

1. **Teams of two** – one **Hand**, one **Brain**.
2. On each turn the Brain names any _piece type_ (e.g. “Knight”).
3. The Hand must move one piece of that type—no hints allowed.
4. Standard chess rules apply; first team to deliver checkmate wins.
5. Minimum **4 players** recommended; 10‑minute rapid time control works well.

---

## Getting Started

### Prerequisites

| Tool                     | Version |
| ------------------------ | ------- |
| **Node.js**              | ≥ 18    |
| **pnpm** (or npm / yarn) | Latest  |

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hand-and-brain-chess.git
cd hand-and-brain-chess

# Install dependencies
pnpm install
```

### Development

```bash
# Start the Vite dev server
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm preview
```

---

## Project Structure

```
hand-and-brain-chess/
├─ public/
├─ src/
│  ├─ assets
│  ├─ components/
│  │  └─ screens/
│  │     └─ HomeScreen.tsx
│  ├─ main.tsx
│  └─ index.css
├─ tailwind.config.js
├─ vite.config.ts
└─ README.md
```

---

## Contributing

Pull requests are welcome! For larger changes, open an issue first so we can discuss design decisions.

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push branch: `git push origin feat/your-feature`
5. Open a pull request

---

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.
