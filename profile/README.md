# Notiky

**The product engineering brain** — persistent decisions, hypotheses, and artifacts for teams building with AI agents.

[Website](https://notiky.com) · [CLI](https://github.com/notiky/notiky-cli) · [Agents](https://github.com/notiky/.github/blob/main/AGENTS.md) · [llms.txt](https://github.com/notiky/.github/blob/main/llms.txt)

---

Decisions end up in Slack threads, Notion pages, and Linear tickets — without the reasoning attached. Agent sessions reset. `CLAUDE.md` goes stale. Notiky keeps product context in one graph and pushes it back to your tools.

<p align="center">
  <img src="https://raw.githubusercontent.com/notiky/.github/main/docs/assets/hero-screenshot.png" alt="Notiky workspace" width="90%">
</p>

---

## How it works

```
  Inputs                    Engine                         Outputs
  -------                   ------                         -------
  customer calls      -->   capture & reason        -->    decisions
  meeting transcripts       compose                 -->    CLAUDE.md / .cursor/rules
  code repos                execute (MCP, daemon)   -->    ship plans
  Linear / Slack                                      -->    live MCP context
```

```
Capture  -->  Analyze  -->  Decide  -->  Update  -->  Deliver
```

- **Capture** — meetings, repos, conversations as structured signals
- **Analyze** — check new inputs against existing decisions
- **Decide** — version decisions with rationale and evidence
- **Update** — regenerate specs, artifacts, roadmap
- **Deliver** — push context to agents and teammates

---

## Features

- Decision/hypothesis graph (Postgres + pgvector)
- Artifacts: `CLAUDE.md`, `.cursor/rules`, `AGENTS.md`, skills
- MCP for Cursor, Claude Code, Codex
- Session capture from agent transcripts
- Linear / Jira mirroring; Granola, Otter, Google Meet imports
- Team workspaces

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
2. Run `notiky setup`
3. Add Notiky MCP in Cursor or Claude Code
4. Capture a session or import a transcript

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
