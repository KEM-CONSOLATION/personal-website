/**
 * Resolves a local absolute public path to an optimized CDN-resizer URL using wsrv.nl when running in production.
 * Falls back to the original source path during local development (localhost, 127.0.0.1, local network IPs)
 * so that developers don't need tunnels/public domain hosting during development.
 *
 * @param src The public root-relative image path (e.g. '/brand/history-gallery/01.jpg')
 * @param width The target width in pixels
 * @param height Optional target height in pixels
 * @returns The optimized wsrv.nl URL in production, or the original path in development.
 */
export function getOptimizedImageUrl(src: string, width: number, height?: number): string {
  // If we are in Next.js development environment, return the local asset path immediately
  if (process.env.NODE_ENV === 'development') {
    return src;
  }

  if (typeof window === 'undefined') return src;

  const { hostname, origin } = window.location;

  // Detect local environments: localhost, loopbacks, local domains, or private IPs
  const localHosts = ['localhost', '127.0.0.1', '[::1]', '::1', '0.0.0.0'];
  const isLocal =
    localHosts.includes(hostname) ||
    hostname.endsWith('.local') ||
    hostname.endsWith('.localhost') ||
    hostname.startsWith('192.168.') ||
    hostname.startsWith('10.') ||
    hostname.startsWith('172.16.') ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname) ||
    !src.startsWith('/');

  if (isLocal) {
    return src;
  }

  // Prepend origin to get an absolute URL that wsrv.nl can fetch from the public web
  const absoluteUrl = `${origin}${src}`;
  
  // Construct the wsrv.nl optimized URL
  let optimizedUrl = `https://wsrv.nl/?url=${encodeURIComponent(absoluteUrl)}&w=${width}`;
  if (height) {
    optimizedUrl += `&h=${height}&fit=cover`;
  }
  optimizedUrl += `&output=webp`;

  return optimizedUrl;
}
