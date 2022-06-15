export function toTitle(slug: string) {
  return slug
    .replace(/^\d\d\d\d-/, '')
    .replace(/-/g, ' ')
    .split(' ')
    .map((word: string) => (
      word.charAt(0).toUpperCase() + word.slice(1)
    ))
    .join(' ');
}