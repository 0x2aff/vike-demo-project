declare global {
  namespace Vike {
    interface PageContext {
      Page?: () => React.ReactNode;

      data?: unknown;

      config: {
        title?: string | ((pageContext: PageContext) => string);
        description?: string | ((pageContext: PageContext) => string);
      };
    }
  }
}

export {};
