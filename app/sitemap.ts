import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/artista/tommy-grossi`,
            lastModified: new Date(),
            priority: 0.9
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/artista/tobia-baser`,
            lastModified: new Date(),
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/piercing`,
            lastModified: new Date(),
            priority: 0.7
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contatti`,
            lastModified: new Date(),
            priority: 0.6
        }
    ]
}