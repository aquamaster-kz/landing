import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://aquamaster.kz',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://aquamaster.kz/#heroRef',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://aquamaster.kz/#companyRef',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://aquamaster.kz/#contactRef',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }
  ]
}