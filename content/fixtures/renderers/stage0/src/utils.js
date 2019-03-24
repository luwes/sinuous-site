import { useMemo } from 'swiss-element/hooks';

export function useView(fn) {
  const html = useMemo(fn, []);
  const refs = html.collect(html);
  return { html, ...refs };
}
