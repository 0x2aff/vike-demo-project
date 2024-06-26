import compression from 'compression';
import express from 'express';
import { renderPage } from 'vike/server';

import { root } from './root.js';

const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();

  app.use(compression());

  if (isProduction) {
    const sirv = (await import('sirv')).default;
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = await import('vite');

    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;

    app.use(viteDevMiddleware);
  }

  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    };

    const pageContext = await renderPage(pageContextInit);

    if (pageContext.errorWhileRendering) {
      console.error(pageContext.errorWhileRendering);
    }

    const { httpResponse } = pageContext;

    if (!httpResponse) {
      return next();
    }

    const { body, statusCode, headers, earlyHints } = httpResponse;

    if (res.writeEarlyHints) {
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
    }

    headers.forEach(([name, value]) => res.setHeader(name, value));

    res.status(statusCode);
    res.send(body);
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}

startServer();
