# AviKaiDo

Static marketing site for [avikaido.com](https://avikaido.com) — AI products and implementation consulting.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`. Host for free on **Cloudflare Pages** (recommended) — see [DEPLOY.md](./DEPLOY.md).

Repo: [github.com/avikaido/website](https://github.com/avikaido/website)

## Integrations

| System | Role |
|--------|------|
| **Gmail** | Business email / calendar (`avikaido@gmail.com`) |
| **Zoho CRM** | Contact form → Leads |
| **Zoho SalesIQ** | Live chat widget |
| **Zoho Books / Invoice** | Client portal link (footer) |

Paste tokens into [`src/consts.ts`](./src/consts.ts). Step-by-step: [ZOHO.md](./ZOHO.md).
