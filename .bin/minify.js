import fs from 'fs';
import path from 'path';
import config from '../build.config.js';

const cwd = process.cwd();

if(typeof config.clean === 'undefined' || config.clean) {
  fs.existsSync(path.join(cwd, config.outDir)) &&
  fs.readdirSync(path.join(cwd, config.outDir)).forEach(file => {
    fs.unlinkSync(path.join(cwd, config.outDir, file));
  });
}

const timer = Date.now();
fs.globSync(config.files, { cwd }).forEach(file => {
  const filePath = path.join(cwd, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const parsedValue = config.parser.parse(fileContent);
  const minifiedContent = config.parser.stringify(parsedValue, null, 0);

  let outFile = path.join(cwd, config.outDir, file.split(path.sep).pop());
  if(config.fixedExtension) {
    if(!config.fixedExtension.startsWith('.'))
      throw new Error('❌ `fixedExtension` must start with "."');
    outFile = outFile.replace(path.extname(file), config.fixedExtension);
  }
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, minifiedContent, {
    encoding: 'utf-8'
  });
});
console.log('✅ Minified files in', Date.now() - timer, 'ms');
process.exit(0);
