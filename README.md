# OCLEG Electronics website

Brand website built from the OCLEG brochure. Product names, specifications, tables, applications, photos, address and contact details match the brochure.

## Preview locally

```bash
npm install
npm run build
npm run preview
```

Open http://localhost:4173

Or for live development:

```bash
npm run dev
```

Open http://localhost:3000

## Publish on www.oclegelectronics.com

1. Run `npm run build`. This creates a static folder named `out`.
2. Upload **everything inside `out`** to your domain hosting:
   - **cPanel / GoDaddy / Hostinger / BigRock:** File Manager → `public_html` (replace default files).
   - **Vercel (easiest HTTPS):** import this project, set Framework to Next.js, then add domain `oclegelectronics.com` and `www.oclegelectronics.com`.
3. In the domain registrar DNS, point the domain to that host:
   - A record `@` → hosting IP
   - CNAME `www` → your host, or another A record for `www`
4. Turn on SSL (Let’s Encrypt in cPanel, or automatic on Vercel).

Brochure PDF is included at `/OCLEG-Brochure.pdf`.
