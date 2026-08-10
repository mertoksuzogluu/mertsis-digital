/**
 * Hizmet kartları - anasayfa ve hizmetler sayfasında kullanılır.
 * Sıra: yazılım / ürün önde, kreatif-pazarlama destekleyici.
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
    id: "pdks",
    title: "PDKS & Personel Yazılımı",
    slug: "pdks",
    description:
      "QR / NFC kiosk, mobil personel uygulaması ve admin paneli ile giriş-çıkış, vardiya ve devam takibi.",
    outcomes: [
      "Kiosk + mobil + panel tek sistem",
      "Çevrimdışı kuyruk ve geofence",
      "Çok şubeli / çok firmalı yapı",
    ],
  },
  {
    id: "web-yazilim",
    title: "Web & Özel Yazılım",
    slug: "web-yazilim",
    description:
      "Kurumsal siteler, paneller ve operasyon yazılımları. Next.js, mobil uyumlu arayüz, güvenli altyapı.",
    outcomes: [
      "Ölçülebilir, hızlı web ürünleri",
      "İş süreçlerine özel paneller",
      "SEO, analitik ve entegrasyon",
    ],
  },
  {
    id: "3d-configurator",
    title: "3D Configurator / Ürün Deneyimi",
    slug: "3d-configurator",
    description:
      "Ürün ve ambalaj özelleştirmesi için web tabanlı interaktif 3D çözümler.",
    outcomes: [
      "Gerçek zamanlı konfigürasyon",
      "Mobil uyumlu deneyim",
      "E-ticaret / ERP entegrasyonu",
    ],
  },
  {
    id: "performans-pazarlama",
    title: "Performans Pazarlaması (Meta Ads)",
    slug: "performans-pazarlama",
    description:
      "ROAS ve CPA odaklı kampanya yönetimi, pixel ve kreatif optimizasyon.",
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
    description:
      "Ürün, yazılım ve marka için reklam / sosyal uyumlu kreatif setler ve kısa form video.",
    outcomes: [
      "Reklam ve ürün kreatif setleri",
      "Reels ve kısa form video",
      "Görsel kütüphane",
    ],
  },
  {
    id: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    slug: "sosyal-medya",
    description:
      "İçerik takvimi, topluluk yönetimi ve raporlama ile tutarlı marka sesi — yazılım ve ürün lansmanlarını destekler.",
    outcomes: [
      "Tutarlı marka sesi ve görsel dil",
      "Organik erişim ve etkileşim",
      "Aylık performans raporları",
    ],
  },
  {
    id: "marka-kimligi",
    title: "Marka Kimliği & Görsel Dil",
    slug: "marka-kimligi",
    description:
      "Logo, renk, tipografi ve görsel dil kılavuzu ile tutarlı kimlik.",
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
    description:
      "GA4, ürün metrikleri ve dönüşüm hunisi analizi; panel / web için iyileştirme önerileri.",
    outcomes: [
      "Dönüşüm ve kullanım takibi",
      "A/B test raporlama",
      "Huni iyileştirme",
    ],
  },
];
