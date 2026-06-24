# snoutlas-web

Marketing landing + legal pages for **Snoutlas** (iOS app, code-named PawMon).
Static site, no build step. Hosted on **GitHub Pages** at **https://snoutlas.com**.

## Pages
- `/` — landing (`index.html`)
- `/privacy/` — Privacy Policy (`privacy/index.html`)
- `/terms/` — Terms of Use (`terms/index.html`)
- `404.html` — not-found page

Folder-based paths give clean URLs (`snoutlas.com/privacy`, `snoutlas.com/terms`).

## Conventions
- **Bilingual RU/EN.** Each translatable element exists twice with `data-lang="ru"` / `data-lang="en"`; CSS hides the inactive language based on `<html lang>`. The toggle lives in `assets/i18n.js`; the initial language is set by a tiny inline script in each page's `<head>` (avoids a flash) from `localStorage` → browser language → `en`.
- **Font.** Fredoka (OFL) is self-hosted in `assets/fonts/` (latin + latin-ext). Fredoka has **no Cyrillic**, so Russian text falls through per-glyph to `ui-rounded` / `system-ui` — same as the app.
- **Brand tokens** are in `:root` of `assets/styles.css` (dark theme).
- **Contact:** `support@snoutlas.com` (Namecheap email forwarding).

## ⚠️ Legal text is a DRAFT
The Privacy / Terms bodies are placeholders seeded from the in-app drafts. Replace the
RU and EN blocks (marked with `DRAFT LEGAL TEXT` comments) with the final, lawyer-reviewed
text. Keep `support@snoutlas.com` as the contact and fill in the company legal entity +
jurisdiction where the intro note says so.

## Deploy (GitHub Pages)
1. Push this folder to a **public** repo `snoutlas-web` (`main` branch).
2. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
3. Custom domain: `snoutlas.com` (the `CNAME` file already pins it) → enable **Enforce HTTPS**.
4. DNS at the registrar: apex `A` records to GitHub Pages IPs + `www` `CNAME` → `vardv1-cmd.github.io`.

## Local preview
```sh
python3 -m http.server 8080
# open http://localhost:8080
```
