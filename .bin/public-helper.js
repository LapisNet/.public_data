import fs from 'fs';
import path from 'path';
import config from '../build.config.js';

const cwd = process.cwd();

if(fs.existsSync(path.join(cwd, 'public'))) {
  fs.globSync('public/**/*', { cwd }).forEach(file => {
    fs.cpSync(path.join(cwd, file), path.join(cwd, config.outDir, file.split(path.sep).pop()));
  });
}
