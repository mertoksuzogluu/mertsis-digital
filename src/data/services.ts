/**
 * Hizmetler — menü, kartlar ve detay sayfaları tek kaynaktan.
 * Sıra: yazılım / ürün önde, kreatif-pazarlama destekleyici.
 */

export type ServiceGroup = "primary" | "growth";

export interface ServiceCard {
  id: string;
  title: string;
  slug: string;
  group: ServiceGroup;
  description: string;
  longDescription: string;
  outcomes: [string, string, string];
  features: string[];
  /** Opsiyonel “nasıl çalışır” adımları (PDKS vb.) */
  steps?: { title: string; body: string }[];
  image: string;
}

export const services: ServiceCard[] = [
  {
    id: "pdks",
    title: "PDKS & Personel Yazılımı",
    slug: "pdks",
    group: "primary",
    description:
      "QR / NFC kiosk, mobil personel uygulaması ve admin paneli ile giriş-çıkış, vardiya ve devam takibi.",
    longDescription:
      "Şube ve fabrika operasyonları için uçtan uca personel devam kontrol sistemi. Kiosk terminali, personel mobil uygulaması ve yönetici paneli tek ürün altında çalışır; çevrimdışı kuyruk, NFC kart ve QR ile sahada kesintisiz kayıt tutulur.",
    outcomes: [
      "Kiosk + mobil + panel tek sistem",
      "Çevrimdışı kuyruk ve geofence",
      "Çok şubeli / çok firmalı yapı",
    ],
    features: [
      "Dönen QR ve NFC ile hızlı giriş-çıkış",
      "Android kiosk terminal + personel mobil uygulama",
      "Yönetici paneli: personel, vardiya, raporlar",
      "Çevrimdışı tarama kuyruğu (bağlantı gelince senkron)",
      "Çok şube / çok firma desteği",
      "İzin ve devam raporları",
    ],
    steps: [
      {
        title: "Kiosk veya mobil",
        body: "Personel QR okutur veya NFC kartını yaklaştırır; giriş-çıkış anında kayda geçer.",
      },
      {
        title: "Güvenli doğrulama",
        body: "Dönen QR, cihaz ve zaman damgası ile sahte okuma riski azalır; çevrimdışıyken kuyrukta tutulur.",
      },
      {
        title: "Panel & rapor",
        body: "Yönetici paneli personel, vardiya ve devamı tek ekrandan izler; şube bazlı raporlar üretir.",
      },
    ],
    image: "/services/pdks.svg",
  },
  {
    id: "web-yazilim",
    title: "Web & Özel Yazılım",
    slug: "web-yazilim",
    group: "primary",
    description:
      "Kurumsal siteler, paneller ve operasyon yazılımları. Next.js, mobil uyumlu arayüz, güvenli altyapı.",
    longDescription:
      "İş sürecinize özel web panelleri, kurumsal siteler ve operasyon araçları geliştiriyoruz. Hızlı, ölçülebilir ve bakım edilebilir ürünler; SEO ve entegrasyonlarla birlikte teslim.",
    outcomes: [
      "Ölçülebilir, hızlı web ürünleri",
      "İş süreçlerine özel paneller",
      "SEO, analitik ve entegrasyon",
    ],
    features: [
      "Next.js ile hızlı, SEO uyumlu siteler",
      "Operasyon ve admin panelleri",
      "API / ERP / ödeme entegrasyonları",
      "Mobil uyumlu arayüz",
      "Analitik ve dönüşüm ölçümü",
    ],
    image: "/services/web-yazilim.svg",
  },
  {
    id: "3d-configurator",
    title: "3D Configurator / Ürün Deneyimi",
    slug: "3d-configurator",
    group: "primary",
    description:
      "Ürün ve ambalaj özelleştirmesi için web tabanlı interaktif 3D çözümler.",
    longDescription:
      "Müşterinin ürünü tarayıcıda canlı özelleştirmesini sağlayan 3D configurator’lar. Ambalaj, mobilya veya konfigüre edilebilir ürünler için e-ticaret ve ERP bağlantılı deneyimler.",
    outcomes: [
      "Gerçek zamanlı konfigürasyon",
      "Mobil uyumlu deneyim",
      "E-ticaret / ERP entegrasyonu",
    ],
    features: [
      "WebGL tabanlı gerçek zamanlı 3D",
      "Renk, malzeme, boyut seçenekleri",
      "Mobil performans odaklı yükleme",
      "Sepet / ERP entegrasyonu",
    ],
    image: "/services/3d-configurator.svg",
  },
  {
    id: "performans-pazarlama",
    title: "Performans Pazarlaması (Meta Ads)",
    slug: "performans-pazarlama",
    group: "growth",
    description:
      "ROAS ve CPA odaklı kampanya yönetimi, pixel ve kreatif optimizasyon.",
    longDescription:
      "Ürün ve yazılım lansmanlarını destekleyen Meta Ads yönetimi. ROAS / CPA hedefleri, pixel kurulumu ve kreatif testleriyle ölçülebilir büyüme.",
    outcomes: [
      "ROAS ve dönüşüm odaklı yapı",
      "Kreatif A/B testleri",
      "Haftalık raporlama",
    ],
    features: [
      "Kampanya mimarisi ve pixel kurulumu",
      "Kreatif A/B testleri",
      "Haftalık performans raporları",
      "Ürün / lead odaklı hedefleme",
    ],
    image: "/services/growth.svg",
  },
  {
    id: "icerik-uretime",
    title: "İçerik Üretimi (Foto/Video + Motion)",
    slug: "icerik-uretime",
    group: "growth",
    description:
      "Ürün, yazılım ve marka için reklam / sosyal uyumlu kreatif setler ve kısa form video.",
    longDescription:
      "Yazılım ürünü, paneller ve marka için reklam ve sosyal kanallara uygun foto, video ve motion setleri.",
    outcomes: [
      "Reklam ve ürün kreatif setleri",
      "Reels ve kısa form video",
      "Görsel kütüphane",
    ],
    features: [
      "Ürün ve UI ekran kreatifleri",
      "Reels / kısa form video",
      "Reklam seti ve varyasyonlar",
      "Hafif motion ve animasyon",
    ],
    image: "/services/growth.svg",
  },
  {
    id: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    slug: "sosyal-medya",
    group: "growth",
    description:
      "İçerik takvimi, topluluk yönetimi ve raporlama ile tutarlı marka sesi — yazılım ve ürün lansmanlarını destekler.",
    longDescription:
      "Ürün ve yazılım hikâyesini sosyal kanallarda tutarlı anlatmak için içerik takvimi, topluluk yönetimi ve aylık raporlama.",
    outcomes: [
      "Tutarlı marka sesi ve görsel dil",
      "Organik erişim ve etkileşim",
      "Aylık performans raporları",
    ],
    features: [
      "İçerik takvimi ve yayın",
      "Topluluk yönetimi",
      "Ürün lansman desteği",
      "Aylık performans özeti",
    ],
    image: "/services/growth.svg",
  },
  {
    id: "marka-kimligi",
    title: "Marka Kimliği & Görsel Dil",
    slug: "marka-kimligi",
    group: "growth",
    description:
      "Logo, renk, tipografi ve görsel dil kılavuzu ile tutarlı kimlik.",
    longDescription:
      "Yazılım ürünü ve kurumsal yüz için logo, renk, tipografi ve kullanım kılavuzu. Panel, site ve pazarlama materyallerinde tutarlı dil.",
    outcomes: [
      "Marka kılavuzu ve asset seti",
      "Şablonlar",
      "Uzun vadeli tutarlılık",
    ],
    features: [
      "Logo ve işaret sistemi",
      "Renk / tipografi kılavuzu",
      "UI ve sosyal şablonlar",
      "Asset paketleri",
    ],
    image: "/services/growth.svg",
  },
  {
    id: "analitik-cro",
    title: "Analitik & CRO",
    slug: "analitik-cro",
    group: "growth",
    description:
      "GA4, ürün metrikleri ve dönüşüm hunisi analizi; panel / web için iyileştirme önerileri.",
    longDescription:
      "Web ve ürün panellerinde dönüşüm ve kullanım metriklerini izleyip CRO önerileriyle iyileştirme döngüsü kuruyoruz.",
    outcomes: [
      "Dönüşüm ve kullanım takibi",
      "A/B test raporlama",
      "Huni iyileştirme",
    ],
    features: [
      "GA4 ve olay kurulumu",
      "Huni ve dönüşüm analizi",
      "A/B test planı",
      "Ürün kullanım metrikleri",
    ],
    image: "/services/growth.svg",
  },
];

export const primaryServices = services.filter((s) => s.group === "primary");
export const growthServices = services.filter((s) => s.group === "growth");

export function getServiceBySlug(slug: string): ServiceCard | undefined {
  return services.find((s) => s.slug === slug);
}
