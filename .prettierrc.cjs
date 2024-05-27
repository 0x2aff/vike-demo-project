/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'crlf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  singleAttributePerLine: false,
  bracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,

  tailwindConfig: './tailwind.config.cjs',
  plugins: [import('prettier-plugin-tailwindcss')],
};
