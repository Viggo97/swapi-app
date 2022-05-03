export function getIdFromUrl(url: string) {
  return url.match('\\/(\\d+)\\/')![1];
}
