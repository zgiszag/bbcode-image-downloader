// proxy-server.js — v4: supports per-request Referer via ?ref=...
// Usage:
//   npm init -y
//   npm i express node-fetch@2 cors
//   node proxy-server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/proxy', async (req,res)=>{
  const url = req.query.url;
  const ref = req.query.ref;
  if (!url) return res.status(400).send('Missing url');
  try {
    const headers = {
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari',
      'Accept':'image/avif,image/webp,image/apng,image/*,*/*;q=0.8,text/html;q=0.7',
      'Accept-Language':'en-US,en;q=0.9',
      // default referer if none provided
      'Referer': ref || 'https://www.imagefap.com/'
    };
    const upstream = await fetch(url, { headers, redirect:'follow' });
    if (!upstream.ok) res.status(upstream.status);
    const ct = upstream.headers.get('content-type') || 'application/octet-stream';
    res.setHeader('Content-Type', ct);
    const cl = upstream.headers.get('content-length');
    if (cl) res.setHeader('Content-Length', cl);
    upstream.body.pipe(res);
  } catch (e) {
    res.status(500).send(String(e));
  }
});
const PORT = process.env.PORT || 8787;
app.listen(PORT, ()=> console.log('Proxy listening on http://localhost:'+PORT));
