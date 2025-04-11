import * as fs from 'fs';
import { minify } from '@putout/minify';

const code = fs.readFileSync("./index.js", "utf8");
const min = minify(code, {
    quotes: `'`,
    fixCount: Infinity, // the more fixCount - less output size
    conditions: false,
    mangleClassNames: true,
    mangle: true,
    mergeVariables: true,
    removeUnusedVariables: true,
    removeConsole: true,
    removeUselessSpread: true,
    applyTemplateLiterals: true,
    convertStrictEqualToEqual: false,
});

fs.writeFileSync("./index.min.js", min);
