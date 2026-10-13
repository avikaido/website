# Deploy AviKaiDo

## Recommended: Cloudflare Pages (free)

Fits a static Astro site: HTTPS, CDN, and Git-linked deploys with no droplet to manage.

### First-time setup (dashboard)

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize Cloudflare on GitHub and select **`avikaido/website`**.
3. Build settings:

   | Setting | Value |
   |---------|--------|
   | Production branch | `main` |
   | Framework preset | Astro (or None) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/` (repo root) |
   | Node version | `22` (Environment variable `NODE_VERSION=22`) |

4. **Save and Deploy**. You get a `*.pages.dev` URL when it finishes.
5. Custom domain: **Custom domains** → add `avikaido.com` and `www`.
   - If DNS is already on Cloudflare: follow the prompts (usually automatic).
   - If DNS is elsewhere: either transfer the domain to Cloudflare DNS (free) or add the CNAME/records Cloudflare shows.

Every push to `main` rebuilds and deploys automatically.

### Optional: Wrangler CLI

```bash
npm i -g wrangler
npx wrangler login
npm run build
npx wrangler pages deploy dist --project-name=avikaido
```

### Zoho after go-live

Set CRM return URL to `https://avikaido.com/contact?sent=1` and allowlist the production domain in SalesIQ. See [ZOHO.md](./ZOHO.md).

---

## Alternative: DigitalOcean droplet + Nginx

Only if you prefer a VPS. Build locally, rsync `dist/` to the server, use [`nginx.avikaido.conf`](./nginx.avikaido.conf), Certbot for HTTPS. See the Nginx section in git history or ask if you still need that path.
