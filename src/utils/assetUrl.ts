/**
 * Append a build-version query string to local asset URLs to force
 * the browser to re-download them on every deploy (cache busting).
 *
 * Only touches paths starting with `/assets/`. External URLs and
 * non-asset paths are returned untouched.
 */

const BUILD_VERSION = import.meta.env.VITE_BUILD_VERSION ?? 'dev';

export function assetUrl(path: string | undefined): string | undefined {
  if (!path) return path;
  if (!path.startsWith('/assets/')) return path;
  const sep = path.includes('?') ? '&' : '?';
  return `${path}${sep}v=${BUILD_VERSION}`;
}
