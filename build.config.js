import json5 from 'json5';

/** @type {Config} */
export default {
  clean: true,
  files: 'src/**/*',
  outDir: 'dist',
  parser: json5,
  fixedExtension: '.json5'
}
