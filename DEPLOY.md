# Deploy AviKaiDo to a DigitalOcean droplet

Static Astro build — Nginx serves `dist/`. No Node process is required in production.

## 1. Build locally (or on the droplet)

```bash
cd new-site
npm ci
npm run build
```

Output is in `new-site/dist/`.

## 2. Copy files to the droplet

Example:

```bash
rsync -avz --delete dist/ root@YOUR_DROPLET_IP:/var/www/avikaido/
```

## 3. Nginx site config

Create `/etc/nginx/sites-available/avikaido`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name avikaido.com www.avikaido.com;

    root /var/www/avikaido;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml text/xml;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff2)$ {
        expires 7d;
        add_header Cache-Control "public";
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/avikaido /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 4. DNS

Point `avikaido.com` and `www` A records to the droplet IP.

## 5. HTTPS (Certbot)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d avikaido.com -d www.avikaido.com
```

## 6. Zoho (CRM, SalesIQ, Books) + Gmail

Email stays on Gmail (`avikaido@gmail.com`). Configure Zoho tokens in `src/consts.ts` — full
walkthrough in [ZOHO.md](./ZOHO.md):

1. Zoho CRM webform → Leads (`actionUrl`, `xnQsjsdp`, `xmIwtLD`)
2. Zoho SalesIQ widget code (`widgetCode`)
3. Optional Zoho Books/Invoice client portal URL

Until CRM tokens are set, the contact form falls back to `mailto:`. Rebuild after changing consts.

## 7. Optional: build on the droplet

```bash
# install node 22+, then:
cd /opt/avikaido-src/new-site
git pull   # if you keep a repo on the server
npm ci && npm run build
rsync -a --delete dist/ /var/www/avikaido/
```
