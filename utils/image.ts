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
  if (process.env.NODE_ENV === 'development') {
    return src;
  }

  if (typeof window === 'undefined') {
    return src;
  }

  const { origin } = window.location;
  const absoluteUrl = `${origin}${src}`;
  
  let optimizedUrl = `https://wsrv.nl/?url=${encodeURIComponent(absoluteUrl)}&w=${width}`;
  if (height) {
    optimizedUrl += `&h=${height}&fit=cover`;
  }
  optimizedUrl += `&output=webp`;

  return optimizedUrl;
}
