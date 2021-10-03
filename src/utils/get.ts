export interface Source {
  [key: string]: any;
}
export function get(source: Source, key: any): any {
  // eslint-disable-next-line
    let path = key.replace(/\[("|')?([^\[\]]+)\1\]/g, '.$2').split('.'),
    index = 0;

  while (source && path.length > index) {
    source = source[path[index++]];
  }

  return source;
}
