import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { caseStudies } from "@/data/caseStudies";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hizmetler`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projeler`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hakkimizda`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gizlilik`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/veri-silme`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/kullanim-sartlari`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/hizmetler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: s.group === "primary" ? 0.9 : 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/projeler/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
