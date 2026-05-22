<p align="center">
  <a href="https://notiky.com">
    <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/banner.png" alt="Notiky — The product engineering brain" width="100%">
  </a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/logo-boxed.png" alt="Notiky" width="72">
</p>

<p align="center">
  <strong>The product engineering brain</strong><br>
  Persistent decisions, hypotheses, and artifacts for teams building with AI agents.
</p>

<p align="center">
  <a href="https://notiky.com">Website</a> ·
  <a href="https://github.com/notiky/notiky-cli">CLI</a> ·
  <a href="https://github.com/notiky/.github/blob/main/AGENTS.md">Agents</a> ·
  <a href="https://github.com/notiky/.github/blob/main/llms.txt">llms.txt</a>
</p>

---

Decisions end up in Slack threads, Notion pages, and Linear tickets — without the reasoning attached. Agent sessions reset. `CLAUDE.md` goes stale. Notiky keeps product context in one graph and pushes it back to your tools.

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/hero-screenshot.png" alt="Notiky workspace" width="90%">
</p>

---

## How it works

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/showcase/architecture-engine.png" alt="Notiky engine — inputs through capture, compose, execute to outputs" width="100%">
</p>

Every signal flows through the same engine — reasoned in conversations, captured as decisions, composed into context packs, delivered to agents.

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/showcase/product-loop.png" alt="Capture, analyze, decide, update, deliver" width="100%">
</p>

- **Capture** — meetings, repos, and conversations land as structured signals
- **Analyze** — new inputs checked against existing decisions and constraints
- **Decide** — approve, modify, or reject; rationale and evidence stay attached
- **Update** — specs, `CLAUDE.md`, context packs, and roadmap reflect the new state
- **Deliver** — agents and teammates get current context at session start

---

## Features

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/showcase/capabilities-bento.png" alt="Notiky capabilities" width="100%">
</p>

- Typed decision/hypothesis graph with supersession and contradiction detection
- Artifact generation — `CLAUDE.md`, `.cursor/rules`, `AGENTS.md`, skills files
- Static-first artifacts; MCP for live context in Cursor, Claude Code, and Codex
- Session capture from coding agent transcripts
- Ship plans and tasks with full decision context
- Linear and Jira mirroring; meeting imports (Granola, Otter.ai, Google Meet)
- Team workspaces with shared decision history

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/integrations/logo-cursor.png" alt="Cursor" height="28">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/integrations/logo-claude.png" alt="Claude" height="28">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/integrations/linear-short.png" alt="Linear" height="28">
</p>

---

## Quick install

```bash
brew install notiky/tap/notiky
# or: curl -fsSL https://get.notiky.com | bash
notiky setup
```

Windows: `irm https://get.notiky.com/install.ps1 | iex`

See [notiky-cli](https://github.com/notiky/notiky-cli) for details.

---

## Getting started

1. Sign up at [notiky.com](https://notiky.com)
2. Run `notiky setup` to connect your machine
3. Add Notiky MCP in Cursor or Claude Code
4. Capture a session or import a meeting transcript

---

## Open vs hosted

| | Open / inspectable | Hosted Notiky |
|---|---|---|
| **CLI + daemon** | [notiky-cli](https://github.com/notiky/notiky-cli) (Apache 2.0) | — |
| **Schema + retrieval + MCP skeleton** | [notiky-brain](https://github.com/notiky) *(coming soon)* | — |
| **Decision graph UI** | — | Web + desktop |
| **Artifact regeneration** | — | Brain pipeline |
| **Consolidation + drift detection** | — | Nightly jobs |
| **Hosted MCP** | Self-host via CLI | notiky.com |

---

## For coding agents

```
Read https://github.com/notiky/.github/blob/main/llms.txt
```

- [AGENTS.md](https://github.com/notiky/.github/blob/main/AGENTS.md)
- [llms.txt](https://github.com/notiky/.github/blob/main/llms.txt)

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js, React, TypeScript |
| Backend | Go (Chi, sqlc) |
| Database | PostgreSQL + pgvector |
| AI | Gemini, Claude, GPT via Vercel AI SDK |
| Desktop | Electron |
| Auth | BetterAuth |

---

## Public repositories

| Repo | Description |
|------|-------------|
| [notiky-cli](https://github.com/notiky/notiky-cli) | CLI, daemon, local MCP |
| [homebrew-tap](https://github.com/notiky/homebrew-tap) | Homebrew install |
| [notiky-brain](https://github.com/notiky) | Open-core substrate *(coming soon)* |

---

## Links

- [Website](https://notiky.com)
- [CLI](https://github.com/notiky/notiky-cli)
- [Contributing](https://github.com/notiky/.github/blob/main/CONTRIBUTING.md)
- [Security](https://github.com/notiky/.github/blob/main/SECURITY.md)

---

## License

Notiky is proprietary. Copyright 2026 Notiky.

The [CLI](https://github.com/notiky/notiky-cli) is Apache 2.0.
