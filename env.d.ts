type Config = {
  clean?: boolean;
  files: string;
  outDir: string;
  fixedExtension?: false | string;
  parser: {
    parse: (str: string) => any;
    stringify: (obj: any, replacer?: (key: string, value: any) => any, space?: number) => string;
  };
}
