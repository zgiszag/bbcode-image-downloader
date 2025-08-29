# BBCode Image Downloader (GitHub Pages) — v3

**What v3 fixes**
- Detects **HTML/403 pages saved as .jpg** and repairs by extracting the real image link (via proxy).
- Corrects file extensions using response **Content-Type**.
- Skips zero-byte files.
- Writes a **_manifest.txt** inside the ZIP with OK/FAIL details.
- Optional **URL rewrite** (regex) to convert thumbnail patterns (e.g. `/frame-thumb/` → `/full/`).

## Deploy
Upload `index.html`, `proxy-server.js`, and `.nojekyll` to a repo, enable GitHub Pages (branch: `main`, root).

## Use
1. Paste HTML/BBCode.
2. Tick **Use [url=...] targets** and **Resolve full-size from page**.
3. Tick **Use proxy** and set `http://localhost:8787`.
4. (Optional) Fill the rewrite fields if you know the host’s full-size pattern.
5. Extract → **Download as ZIP**. Check `_manifest.txt` for details.

## Run the proxy
```bash
npm init -y
npm i express node-fetch@2 cors
node proxy-server.js
```
