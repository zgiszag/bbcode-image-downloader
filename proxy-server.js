// Optional lightweight proxy to bypass CORS/hotlink restrictions.
// Quick start:
//   npm init -y
//   npm i express node-fetch@2 cors
//   node proxy-server.js
// Then set Proxy server in the webapp to http://localhost:8787 and tick "Use proxy".

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('Missing url');
  try {
    const upstream = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari',
        'Referer': 'https://www.imagefap.com/',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      },
      redirect: 'follow',
    });
    if (!upstream.ok) res.status(upstream.status);
    const ct = upstream.headers.get('content-type') || 'application/octet-stream';
    const cl = upstream.headers.get('content-length');
    res.setHeader('Content-Type', ct);
    if (cl) res.setHeader('Content-Length', cl);
    upstream.body.pipe(res);
  } catch (e) {
    res.status(500).send(String(e));
  }
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log('Proxy listening on http://localhost:' + PORT));
