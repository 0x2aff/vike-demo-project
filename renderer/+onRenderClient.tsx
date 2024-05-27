import { createRoot } from 'react-dom/client';
import type { OnRenderClientAsync, PageContextClient } from 'vike/types';

async function onRenderClient(pageContext: PageContextClient): ReturnType<OnRenderClientAsync> {
  const { Page } = pageContext;

  if (!Page) {
    throw new Error('My onRenderClient() hook expects pageContext.Page to be defined');
  }

  const container = document.getElementById('root');

  if (!container) {
    throw new Error('DOM element #react-root not found');
  }

  const root = createRoot(container);
  root.render(<Page />);
}

export { onRenderClient };
