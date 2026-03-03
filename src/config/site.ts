/**
 * Mertsis Digital - Site yapılandırması
 * İletişim bilgileri, Calendly ve sosyal linkleri buradan güncelleyin.
 */

export const siteConfig = {
  name: "Mertsis Digital",
  tagline: "Premium Kreatif + Performans ile Markanı Büyüt.",
  locale: "tr",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mertsisdigital.com",

  contact: {
    email: "mert@mertsisotomasyon.com",
    phone: "+90 538 813 50 15",
    address: "İstanbul, Türkiye",
  },

  /** Görüşme Planla butonu bu linke gider (Calendly vb.) */
  calendlyUrl: "https://calendly.com/mertsis-digital/30min",

  social: {
    linkedin: "https://linkedin.com/company/mertsis-digital",
    instagram: "https://instagram.com/mertsis.digital",
    twitter: "https://twitter.com/mertsisdigital",
    behance: "https://behance.net/mertsis",
  },

  nav: [
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/projeler", label: "Projeler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
  ] as const,
};

export type SiteConfig = typeof siteConfig;
