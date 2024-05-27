import '@/renderer/style.css';

import { escapeInject } from 'vike/server';
import type { OnRenderHtmlAsync, PageContext, PageContextServer } from 'vike/types';

function getMeta(pageContext: PageContextServer, field: string, defaultValue?: string): string {
  const fallback = defaultValue ?? 'UNKNOWN';
  const config = pageContext.config as unknown as Record<string, string | ((pageContext: PageContext) => string)>;

  if (!config[field]) {
    return fallback;
  }

  if (typeof config[field] === 'string') {
    return config[field] as string;
  }

  if (typeof config[field] === 'function') {
    return (config[field] as (pageContext: PageContext) => string)(pageContext);
  }

  return fallback;
}

async function onRenderHtml(pageContext: PageContextServer): ReturnType<OnRenderHtmlAsync> {
  const title = getMeta(pageContext, 'title', 'Vike-Demo-Project');
  const description = getMeta(pageContext, 'description', 'Default description woop woop');

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="description" content="${description}">
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {},
  };
}

export { onRenderHtml };
