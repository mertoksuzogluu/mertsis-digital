/**
 * Hizmet kartları - anasayfa ve hizmetler sayfasında kullanılır.
 */

export interface ServiceCard {
  id: string;
  title: string;
  slug: string;
  description: string;
  outcomes: [string, string, string];
}

export const services: ServiceCard[] = [
  {
    id: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    slug: "sosyal-medya",
    description: "İçerik takvimi, topluluk yönetimi ve raporlama ile tutarlı marka sesi.",
    outcomes: [
      "Tutarlı marka sesi ve görsel dil",
      "Organik erişim ve etkileşim artışı",
      "Aylık performans raporları",
    ],
  },
  {
    id: "performans-pazarlama",
    title: "Performans Pazarlaması (Meta Ads)",
    slug: "performans-pazarlama",
    description: "ROAS ve CPA odaklı kampanya yönetimi, pixel ve kreatif optimizasyon.",
    outcomes: [
      "ROAS ve dönüşüm odaklı yapı",
      "Kreatif A/B testleri",
      "Haftalık raporlama",
    ],
  },
  {
    id: "icerik-uretime",
    title: "İçerik Üretimi (Foto/Video + Motion)",
    slug: "icerik-uretime",
    description: "Reklam ve sosyal medya için marka uyumlu kreatif setler ve kısa form video.",
    outcomes: [
      "Reklam ve sosyal kreatif setleri",
      "Reels ve kısa form video",
      "Görsel kütüphane",
    ],
  },
  {
    id: "web-tasarim",
    title: "Web Tasarım & Yazılım",
    slug: "web-tasarim",
    description: "Hızlı, erişilebilir ve dönüşüm odaklı siteler. Next.js, SEO best practice.",
    outcomes: [
      "Core Web Vitals optimizasyonu",
      "Mobil öncelikli tasarım",
      "SEO ve analitik",
    ],
  },
  {
    id: "3d-configurator",
    title: "3D Configurator / Ürün Deneyimi",
    slug: "3d-configurator",
    description: "Ürün ve ambalaj özelleştirmesi için web tabanlı interaktif 3D çözümler.",
    outcomes: [
      "Gerçek zamanlı konfigürasyon",
      "Mobil uyumlu deneyim",
      "Entegrasyon",
    ],
  },
  {
    id: "marka-kimligi",
    title: "Marka Kimliği & Görsel Dil",
    slug: "marka-kimligi",
    description: "Logo, renk, tipografi ve görsel dil kılavuzu ile tutarlı kimlik.",
    outcomes: [
      "Marka kılavuzu ve asset seti",
      "Şablonlar",
      "Uzun vadeli tutarlılık",
    ],
  },
  {
    id: "analitik-cro",
    title: "Analitik & CRO",
    slug: "analitik-cro",
    description: "GA4 ve Meta Pixel ile dönüşüm hunisi analizi ve A/B test önerileri.",
    outcomes: [
      "Dönüşüm takibi",
      "A/B test raporlama",
      "Huni iyileştirme",
    ],
  },
];
