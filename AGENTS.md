# Notiky — Agent Instructions

Notiky is the **product engineering brain** — a persistent decision/hypothesis/insight graph that feeds context to Cursor, Claude Code, Codex, and your team. The AI workspace where products are built, from first idea to scale.

## Public repositories

| Repo | Purpose |
|------|---------|
| [notiky/.github](https://github.com/notiky/.github) | Org profile, product overview, llms.txt |
| [notiky-cli](https://github.com/notiky/notiky-cli) | Official CLI (Apache 2.0) — setup, daemon, MCP |
| [homebrew-tap](https://github.com/notiky/homebrew-tap) | Homebrew install |
| [notiky-brain](https://github.com/notiky) | Open-core substrate *(coming soon)* — schema, retrieval, MCP skeleton |

The main product codebase (`notiky/notiky`) is private.

## Install CLI

```bash
brew install notiky/tap/notiky
# or: curl -fsSL https://get.notiky.com | bash
notiky setup
```

## Full context

Read [llms.txt](./llms.txt) for product summary, MCP overview, CLI commands, and open vs hosted boundaries.

## Support

- Product issues: [notiky.com](https://notiky.com)
- CLI issues: [notiky-cli](https://github.com/notiky/notiky-cli/issues)
- Security: [SECURITY.md](./SECURITY.md)
