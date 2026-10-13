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

Output is written to `dist/` for Nginx on a DigitalOcean droplet. See [DEPLOY.md](./DEPLOY.md).

## Integrations

| System | Role |
|--------|------|
| **Gmail** | Business email / calendar (`avikaido@gmail.com`) |
| **Zoho CRM** | Contact form → Leads |
| **Zoho SalesIQ** | Live chat widget |
| **Zoho Books / Invoice** | Client portal link (footer) |

Paste tokens into [`src/consts.ts`](./src/consts.ts). Step-by-step: [ZOHO.md](./ZOHO.md).
