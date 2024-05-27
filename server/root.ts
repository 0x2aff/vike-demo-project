import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentModulePath = fileURLToPath(import.meta.url);
const __dirname = dirname(currentModulePath);

const root = `${__dirname}/..`;

export { root };
