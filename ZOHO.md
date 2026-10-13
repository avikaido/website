# Zoho integration (free account)

Email and calendar stay on **Gmail** (`avikaido@gmail.com`). Everything else on the site aims at Zoho.

Configure tokens in [`src/consts.ts`](./src/consts.ts), then rebuild.

## 1. Zoho CRM — discovery form → Leads

1. Sign in to [Zoho CRM](https://crm.zoho.com).
2. **Setup → Channels → Forms / Webforms → Create Webform** (Leads module).
3. Include fields: First Name, Last Name, Email, Company, Designation (Role), Description.
4. Optional: add a custom Lead field for Timeline and put its input `name` in `ZOHO_CRM.fields.timeline`.
5. Set **Return URL** to `https://avikaido.com/contact?sent=1` (or your staging URL).
6. Enable email notifications to `avikaido@gmail.com` if offered (CRM can notify; you still reply from Gmail).
7. Open **Source code** and copy:
   - `action="…"` → `ZOHO_CRM.actionUrl`
   - `xnQsjsdp` value → `ZOHO_CRM.xnQsjsdp`
   - `xmIwtLD` value → `ZOHO_CRM.xmIwtLD`
   - `actionType` if different → `ZOHO_CRM.actionType`
8. Confirm each field’s `name="…"` matches `ZOHO_CRM.fields` (rename in consts if Zoho uses different labels).

Until those three secrets are set, the contact page uses a **mailto Gmail** fallback.

### Assign / follow-up in CRM

- Create an assignment rule so new webform Leads go to you.
- Tag source as “Website” / “AviKaiDo.com” in the webform settings.
- Optional: Zoho Flow or CRM workflow → email alert to Gmail.

## 2. Zoho SalesIQ — live chat widget

1. Open [Zoho SalesIQ](https://salesiq.zoho.com).
2. **Settings → Brands → [your brand] → Installation → Website**.
3. Copy the **new** widget code (required before the old widget sunset).
4. From the script URL `…/widget?wc=XXXX`, paste `XXXX` into `ZOHO_SALESIQ.widgetCode`.
5. If your account is EU/IN/AU/CN, set `scriptHost` accordingly (`salesiq.zohopublic.eu`, etc.).

**Note:** Full CRM ↔ SalesIQ visitor tracking often needs **paid** CRM + SalesIQ. The chat widget itself works on free SalesIQ and is enough for v1.

Brand the widget colors to cyan `#00ADEF` / lime `#A2D136` in SalesIQ personalization.

## 3. Zoho Books / Invoice — client portal

1. In Zoho Books or Zoho Invoice, enable the **Client Portal**.
2. Copy the portal URL into `ZOHO_BOOKS.clientPortalUrl`.
3. The site footer will show “Client invoice portal” for existing clients.

Invoicing itself stays inside Zoho; the site only links out.

## 4. Optional Zoho extras (not coded, easy later)

| App | Use |
|-----|-----|
| Zoho Forms | Alternate form builder if you prefer iframe embed over CRM web-to-lead |
| Zoho Campaigns | Newsletter (keep transactional mail on Gmail) |
| Zoho Analytics | Traffic + CRM funnel dashboards |
| Zoho Flow | Webform Lead → Slack/Gmail notification |

## 5. Privacy

Update [`src/pages/privacy.astro`](./src/pages/privacy.astro) copy already mentions Zoho CRM / SalesIQ processors. After go-live, list Zoho’s privacy policy in your own terms if you publish a fuller legal page.

## 6. Rebuild

```bash
npm run build
```

Deploy `dist/` as usual ([DEPLOY.md](./DEPLOY.md)).
