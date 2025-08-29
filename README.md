# BBCode Image Downloader — v4 (Pages-ready)

**Why this version should fix your case (ImageFap):**
- Adds a **site-specific resolver** for `imagefap.com` that parses the photo page (client-side) and picks the real full‑size `<img>` (e.g., `#photo`, `#mainPhoto`, `srcset`, or a download link).
- The downloader now passes the **photo page URL as the Referer** to the proxy (`/proxy?url=...&ref=<page>`), which many CDNs require for the full-size asset.
- Keeps extension fixing and a manifest inside the ZIP.

## Quick start
1. Open `index.html` (locally or via GitHub Pages).
2. Paste your BBCode/HTML.
3. Tick:
   - **Use [url=...] targets** (ON by default)
   - **Resolve full-size from page** (ON by default)
   - **Use proxy** and set it to `http://localhost:8787`
4. Run the proxy:
   ```bash
   npm init -y
   npm i express node-fetch@2 cors
   node proxy-server.js
   ```
5. Click **Extract URLs** → **Download as ZIP**. Check `_manifest.txt` if any fail.

Notes:
- The **og:image** preference is OFF by default here, since ImageFap’s `og:image` often points to a thumb. You can turn it on if needed.
- Concurrency defaults to 4; reduce if the host rate-limits.
