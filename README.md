# BBCode Image Downloader (GitHub Pages) — v2

**New in v2**
- Option to **use [url=...] targets** from BBCode.
- Option to **resolve full‑size image URLs from the photo page** (tries `og:image`/`twitter:image`, then a heuristic). *Requires proxy*.
- More robust ZIP fetching via the proxy with proper `Referer` header.

## Deploy
1. Create a GitHub repo (e.g., `bbcode-image-downloader`), upload `index.html`, `proxy-server.js`, and `.nojekyll`.
2. Enable GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root).

## Use
1. Paste HTML/BBCode.
2. Tick **Use [url=...] targets** and **Resolve full-size from page**.
3. Tick **Use proxy** and set it to `http://localhost:8787`.
4. Click **Extract URLs** → **Download as ZIP**.

## Run the proxy
```bash
npm init -y
npm i express node-fetch@2 cors
node proxy-server.js
```
