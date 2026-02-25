# Risk Guardian

Enterprise-style risk intelligence dashboard: timeline, severity breakdown, operational metrics, and AI-powered event analysis (Claude).

> **Note:** This is a **portfolio / demo project**. Use it to learn, fork, or extend. Not intended as production software for critical business decisions without additional hardening.

## Features

- **Risk Event Timeline** — Interactive chart (6H / 24H / 7D / 30D) with hover stats
- **Severity & distribution** — CRIT / HIGH / MED / LOW with click-through to filtered alerts
- **Operational metrics** — Open risks, resolved/week, mean time to resolve
- **Analyze Event** — Paste a log or transaction; get structured risk assessment (JSON) from Claude
- **Alerts, Policy, Workflows, Audit, Settings** — Full-screen views with navigation from overview

## Prerequisites

- **Node.js** (v18+ for `fetch` in the server)
- **Anthropic API key** for the "Execute Analysis" feature

## Quick start

1. Clone the repo and go to the project folder:
   ```bash
   cd risk-guardian
   ```

2. Set your API key (required for Execute Analysis):
   ```bash
   export ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

3. Start the app:
   ```bash
   node server.js
   ```

4. Open in a browser:
   ```
   http://localhost:3456
   ```

**Important:** Use the URL above. Do not open the HTML file directly (`file://`) — the analysis API will not work due to browser security (CORS).

## Project structure

| File | Purpose |
|------|--------|
| `risk-guardian-architectural.html` | Single-page app: UI, styles, and client logic |
| `server.js` | Serves the app and proxies `/api/analyze` to Anthropic (keeps API key server-side) |

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes (for analysis) | Your [Anthropic API key](https://console.anthropic.com/) |

No database or extra services; all dashboard data is mock for demo purposes.

## License

MIT (or your choice).
