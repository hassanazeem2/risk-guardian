# 🛡️ Risk Guardian (Demo Version)  
### AI-Powered Risk Intelligence & Event Analysis Dashboard — Portfolio Demo

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Demo%20Version-orange)
![AI Powered](https://img.shields.io/badge/AI-Claude-purple)

Risk Guardian (Demo Version) is a lightweight, portfolio-focused risk intelligence dashboard that simulates how modern organizations analyze operational risk using AI.

This version is intentionally simplified and mock-driven to demonstrate:

<img width="1512" height="756" alt="risk-guardian" src="https://github.com/user-attachments/assets/b70806a4-5959-455c-addb-80941180e8b2" />


- AI-powered structured analysis  
- Secure API proxy architecture  
- Enterprise-style dashboard UX  
- Risk severity modeling  
- Full-stack integration patterns  

<img width="1512" height="756" alt="risk-guardian-demo-preview" src="https://github.com/user-attachments/assets/0d4b9012-393d-4ecd-b39c-1403eb2f07de" />

---

# ✨ Demo Features

## 📊 Simulated Risk Timeline

Interactive chart with selectable time ranges:

- Last 6 Hours  
- Last 24 Hours  
- Last 7 Days  
- Last 30 Days  

✔️ Mock telemetry generation  
✔️ Simulated event spikes  
✔️ Hover-based statistics  

All data is generated dynamically in the browser for demonstration purposes.

---

## 🚨 Severity Classification

Events are categorized into four levels:

| Level | Description |
|-------|------------|
| 🔴 CRIT | Immediate attention required |
| 🟠 HIGH | Significant operational concern |
| 🟡 MED | Moderate issue |
| 🟢 LOW | Minor / informational |

✔️ Click-to-filter interaction  
✔️ Visual proportional breakdown  
✔️ Demo alert drill-down behavior  

---

## 📈 Operational Metrics (Simulated)

Dashboard-style KPIs:

- Open Risks  
- Resolved (Last 7 Days)  
- Mean Time to Resolve (MTTR)  
- Resolution Trend  

All metrics are mock-generated to simulate a SOC-style dashboard.

---

## 🤖 AI-Powered Event Analysis (Claude)

Users can:

1. Paste a raw log, transaction, or system event  
2. Click **Execute Analysis**  
3. Receive structured JSON risk output  

Example output:

```json
{
  "risk_level": "HIGH",
  "risk_score": 78,
  "category": "Fraud / Transaction Anomaly",
  "confidence": 0.91,
  "summary": "Large international transaction from new device and IP",
  "recommended_actions": [
    "Temporarily freeze account",
    "Trigger identity verification",
    "Escalate to fraud team"
  ]
}
```

✔️ Server-side API proxy  
✔️ No API key exposure to frontend  
✔️ Structured output prompting  

---

# 🏗️ Demo Architecture

## Frontend
- Single Page Application (SPA)
- Pure HTML + CSS + JavaScript
- Client-side navigation

## Backend
- Node.js (v18+)
- Lightweight HTTP server
- `/api/analyze` proxy endpoint
- Native `fetch()` usage

---

# 📂 Project Structure

```
risk-guardian-demo/
│
├── risk-guardian-demo.html
├── server.js
└── README.md
```

---

# 🚀 Quick Start (Demo)

## 1️⃣ Clone

```bash
git clone https://github.com/your-username/risk-guardian-demo.git
cd risk-guardian-demo
```

## 2️⃣ Set API Key

macOS / Linux:
```bash
export ANTHROPIC_API_KEY=your_key_here
```

Windows:
```powershell
setx ANTHROPIC_API_KEY "your_key_here"
```

## 3️⃣ Run

```bash
node server.js
```

Open:

```
http://localhost:3456
```

---

# 🔐 Security (Demo Scope)

- API key stored server-side only  
- No database  
- No authentication  
- No persistent logging  

This implementation demonstrates integration patterns — not full production hardening.

---

# 🧪 Example Test Input

```
User ID: 84721
Transaction: $12,400
Location: Singapore
Device: New iPhone
IP: 203.0.113.45
Time: 02:13 AM
```

---

# 📌 Important Notice

> **This is the DEMO version of Risk Guardian.**  
> It is a portfolio / educational project intended to demonstrate architecture and AI integration patterns.  
>  
> It is **not production software** and should not be used for real-world risk, fraud, compliance, or operational decision-making without significant additional engineering, security hardening, and validation.

---

# 📜 License

MIT License
