# BBCode Image Downloader (GitHub Pages)

A minimal repo for hosting the BBCode/HTML image downloader on **GitHub Pages**.

## Deploy (no code tools needed)
1. Create a new repo on GitHub (e.g., `bbcode-image-downloader`).
2. Upload these files to the root of the repo:
   - `index.html`
   - `proxy-server.js` (optional, for local proxy)
   - `start-proxy.sh` (optional)
   - `start-proxy.bat` (optional)
   - `.nojekyll`
3. Commit to the `main` branch.
4. Go to **Settings → Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
   - Save. GitHub will give you a Pages URL like `https://<username>.github.io/<repo>/`.

## Use the webapp
1. Open your Pages URL.
2. Paste your HTML/BBCode containing image links.
3. Set a **Folder name** (used inside the ZIP and as a prefix for multi‑download).
4. Click **Extract URLs** to preview them.
5. Choose either:
   - **Download as ZIP** (recommended): creates a single ZIP with your chosen folder name.
   - **Direct multi‑download**: triggers normal downloads for each file (allow “multiple automatic downloads” in your browser).

## If you hit CORS/hotlink issues in ZIP mode
Some hosts block cross‑origin fetches or require a specific Referer.
1. Run the tiny local proxy (on your computer):
   ```bash
   ./start-proxy.sh
   # or on Windows:
   start-proxy.bat
   ```
   This installs `express`, `node-fetch@2`, and `cors` (once) and starts the server.
2. In the webapp, set **Proxy server** to `http://localhost:8787` and tick **Use proxy**.
3. Try **Download as ZIP** again.

The proxy sets a browser‑like User‑Agent and `Referer: https://www.imagefap.com/` to improve compatibility.

## Notes
- Browsers can’t force a destination folder for individual downloads; that’s why **Direct multi‑download** uses your folder name as a filename prefix. ZIP mode puts everything in one folder inside the ZIP.
- Adjust **Concurrency** if you see rate‑limits.
- This static app uses only one external script: JSZip via CDN.

Happy downloading!
