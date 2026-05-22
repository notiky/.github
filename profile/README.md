<p align="center">
  <a href="https://notiky.com">
    <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/banner.png" alt="Notiky — The product engineering brain" width="100%">
  </a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/logo-dark.png">
    <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/logo-light.png" alt="Notiky" width="160">
  </picture>
</p>

<p align="center">
  <strong>The product engineering brain</strong><br>
  <em>The AI workspace where products are built — from first idea to scale</em>
</p>

<p align="center">
  <a href="https://notiky.com">Website</a> ·
  <a href="https://github.com/notiky/notiky-cli">CLI</a> ·
  <a href="https://github.com/notiky/.github/blob/main/AGENTS.md">Agents</a> ·
  <a href="https://github.com/notiky/.github/blob/main/llms.txt">llms.txt</a>
</p>

---

AI coding tools made you 10x faster at writing code. But **keeping your product coherent** is still chaos. Decisions live in your head, context scatters across ChatGPT threads, and every new AI session starts from scratch.

**Notiky** is the persistent product brain — one cycle that captures the *why* behind every decision and feeds it back to Cursor, Claude Code, Codex, and your team.

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/hero-screenshot.png" alt="Notiky workspace — decisions, artifacts, and MCP context" width="90%">
</p>

---

## How it works

```
Brainstorm  →  Decisions  →  Ship Plan  →  Artifacts & Tasks
     ↑_______________________________________________________|
                    context compounds
```

1. **Brainstorm** with an AI co-founder that challenges your thinking, runs market research, and drills into specifics — not a yes-man chatbot
2. **Decisions** are captured as structured objects: who decided, when, why, what was rejected, what evidence was used
3. **Ship plans** convert brainstorms into actionable tasks with full reasoning chains
4. **Artifacts** are auto-generated: `CLAUDE.md`, `.cursor/rules`, design systems, API docs, skills files

The loop closes. The 100th session is dramatically better than the 1st because context compounds.

---

## Features

### Decision & hypothesis graph
Every decision is a first-class object with full provenance. Searchable forever. Supersession chains, contradiction detection, and domain routing — not text buried in chat.

### Artifact generation
Auto-generates the files your coding tools consume:
- `CLAUDE.md` / `.cursorrules` / `.cursor/rules/`
- Design systems and UI standards
- API documentation
- Skills files

**Static-first, MCP-enhanced.** Artifacts always work as plain files. If the server is down, your coding tools still have context.

### MCP server
Delivers live product context to **Cursor**, **Claude Code**, and **Codex** mid-session. Your IDE's AI knows what the product is, what was decided, and what changed — without copy-pasting.

### Session capture
Import transcripts from coding agent sessions. Decisions and insights extracted into the graph automatically — cross-session memory that lives outside the IDE.

### Integrations
Tasks flow to **Linear** and **Jira** with full context. Meeting notes from **Granola**, **Otter.ai**, and **Google Meet** feed customer intelligence back into decisions.

### Team workspace
Invite co-founders, PMs, designers, and engineers. Everyone sees the same decisions, the same context, the same product brain.

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
# macOS / Linux (Homebrew)
brew install notiky/tap/notiky

# macOS / Linux (install script)
curl -fsSL https://get.notiky.com | bash

# Windows (PowerShell)
irm https://get.notiky.com/install.ps1 | iex
```

```bash
notiky setup   # configure, authenticate, start the daemon
```

See the [CLI repo](https://github.com/notiky/notiky-cli) for full installation options.

---

## Getting started

1. **Sign up** at [notiky.com](https://notiky.com) and create a workspace
2. **Install the CLI** and run `notiky setup` — connects your machine and starts the daemon
3. **Configure MCP** in Cursor or Claude Code so your IDE reads live product context from Notiky
4. **Capture your first session** — decisions and insights flow into the graph from day one

---

## Open vs hosted

| | Open / inspectable | Hosted Notiky |
|---|---|---|
| **CLI + daemon** | [notiky-cli](https://github.com/notiky/notiky-cli) (Apache 2.0) | — |
| **Schema + retrieval + MCP skeleton** | [notiky-brain](https://github.com/notiky) *(coming soon)* | — |
| **Decision graph UI** | — | Web + desktop app |
| **Artifact regeneration** | — | Brain pipeline |
| **Consolidation + drift detection** | — | Nightly brain metabolism |
| **Hosted MCP endpoint** | Self-host via CLI | Managed at notiky.com |

The open substrate lets you inspect how Notiky works. The hosted product is where the brain runs at full depth.

---

## For coding agents

Point your coding agent at this repo:

```
Read https://github.com/notiky/.github/blob/main/llms.txt for Notiky product context, CLI install, and MCP overview.
```

- [AGENTS.md](https://github.com/notiky/.github/blob/main/AGENTS.md) — agent entry point
- [llms.txt](https://github.com/notiky/.github/blob/main/llms.txt) — LLM-readable product summary

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js (App Router), React, TypeScript |
| Backend | Go (Chi router, sqlc) |
| Database | PostgreSQL + pgvector |
| AI | Gemini, Claude, GPT via Vercel AI SDK |
| Styling | Tailwind CSS + shadcn/ui |
| Desktop | Electron |
| Auth | BetterAuth |
| Billing | Polar |

Modular monolith with shared TypeScript packages across web and desktop. Decision graph stored in Postgres with bi-temporal versioning and vector search.

---

## Public repositories

| Repo | Description |
|------|-------------|
| [notiky-cli](https://github.com/notiky/notiky-cli) | Official CLI — connect, daemon, MCP |
| [homebrew-tap](https://github.com/notiky/homebrew-tap) | Homebrew installation |
| [notiky-brain](https://github.com/notiky) | Open-core substrate *(coming soon)* |

---

## Links

- [Website](https://notiky.com)
- [CLI](https://github.com/notiky/notiky-cli)
- [Homebrew tap](https://github.com/notiky/homebrew-tap)
- [Contributing](https://github.com/notiky/.github/blob/main/CONTRIBUTING.md)
- [Security](https://github.com/notiky/.github/blob/main/SECURITY.md)

---

## License

Notiky is proprietary software. Copyright 2026 Notiky. All rights reserved.

The [Notiky CLI](https://github.com/notiky/notiky-cli) is licensed under Apache 2.0.
