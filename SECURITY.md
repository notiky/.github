# Security Policy

## Supported versions

| Component | Supported | Notes |
|-----------|-----------|-------|
| [notiky-cli](https://github.com/notiky/notiky-cli) | Latest release | Apache 2.0 |
| Hosted Notiky (notiky.com) | Active | Managed by Notiky team |
| This repo (`.github`) | Active | Marketing/docs only — no runtime code |

## Reporting a vulnerability

If you discover a security vulnerability in Notiky:

1. **Do not** open a public GitHub issue
2. Email **security@notiky.com** with:
   - Description of the vulnerability
   - Steps to reproduce
   - Impact assessment (if known)
   - Your contact information

We aim to acknowledge reports within 48 hours and provide a status update within 7 days.

## Scope

In scope:

- notiky-cli (installation, daemon, MCP server)
- Hosted Notiky web application and API (notiky.com)
- Authentication and authorization flows
- MCP token handling

Out of scope:

- Social engineering attacks
- Denial of service against notiky.com infrastructure
- Issues in third-party dependencies without a demonstrable Notiky-specific impact
- Content in this marketing repository that does not affect product security

## Disclosure

We follow coordinated disclosure. Please allow reasonable time for a fix before public disclosure. We will credit researchers who report valid vulnerabilities (with permission).
