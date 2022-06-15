export function toTitle(slug: string) {
  return slug
    .replace(/^\d\d\d\d-/, '')
    .replace('-', ' ')
    .split(' ')
    .map((word: string) => (
      word.charAt(0).toUpperCase() + word.slice(1)
    ))
    .join(' ');
}