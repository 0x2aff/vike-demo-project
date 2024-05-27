import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

export default {
  clientRouting: true,

  meta: {
    title: {
      env: { server: true, client: true },
    },

    description: {
      env: { server: true, client: false },
    },
  },

  hydrationCanBeAborted: true,

  extends: vikeReact,
} satisfies Config;
