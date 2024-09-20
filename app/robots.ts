import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/'],
      },
      {
        userAgent: 'YandexBot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/private/'],
      },
    ],
    sitemap: 'https://aquamaster.kz/sitemap.xml',
  };
}
