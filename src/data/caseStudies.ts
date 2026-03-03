/**
 * Case study verileri. Görselleri /public/work/ klasörüne koyup
 * galeriGorselleri ve kapak alanlarını güncelleyin.
 */

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  baslik: string;
  kategori: string;
  hizmetler: string[];
  yil: string;
  kisaOzet: string;
  problem: string;
  cozum: string;
  teslimatlar: string[];
  metrikler: CaseStudyMetric[];
  galeriGorselleri: string[];
  kapakGorseli: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "e-ticaret-roas-artisi",
    baslik: "E-Ticaret ROAS Artışı",
    kategori: "Performans Pazarlaması",
    hizmetler: ["Meta Ads", "Kreatif Optimizasyon", "Analitik"],
    yil: "2024",
    kisaOzet:
      "E-ticaret markasında Meta reklamları ve kreatif A/B testleri ile ROAS %180 artırıldı.",
    problem:
      "Müşteri, Meta reklam bütçesinden yeterli dönüş alamıyordu. ROAS düşük, CPA yüksekti. Reklam yorgunluğu ve tekrarlayan kreatifler tıklanma oranlarını düşürüyordu.",
    cozum:
      "Hedef kitle segmentasyonu yenilendi, dinamik ürün reklamları ve carousel kreatifler devreye alındı. Kreatif A/B testleri ile en iyi performans gösteren varyantlar ölçeklendi. Pixel ve dönüşüm takibi iyileştirildi.",
    teslimatlar: [
      "Reklam stratejisi raporu",
      "Kreatif set (carousel, single image)",
      "Pixel & CAPI kurulumu",
      "Haftalık performans dashboard",
    ],
    metrikler: [
      { label: "ROAS artışı", value: "%180" },
      { label: "CPA düşüşü", value: "%42" },
      { label: "CTR artışı", value: "%65" },
    ],
    galeriGorselleri: ["/work/project-ecommerce.svg", "/work/placeholder.svg", "/work/placeholder.svg"],
    kapakGorseli: "/work/project-ecommerce.svg",
  },
  {
    slug: "restoran-lokal-buyume",
    baslik: "Restoran Lokal Büyüme",
    kategori: "Sosyal Medya & İçerik",
    hizmetler: ["Sosyal Medya Yönetimi", "İçerik Üretimi", "Yerel SEO"],
    yil: "2024",
    kisaOzet:
      "Lokal restoran zinciri için sosyal medya ve içerik stratejisi ile organik erişim ve rezervasyon artışı.",
    problem:
      "Restoran, bölgesel farkındalık ve rezervasyon sayısını artırmak istiyordu. Organik sosyal medya performansı zayıftı ve marka sesi tutarlı değildi.",
    cozum:
      "Görsel dil ve içerik takvimi oluşturuldu. Yemek, atmosfer ve müşteri anlarına odaklı foto/video içerikler üretildi. Story ve Reels stratejisi ile lokal hedefleme uygulandı.",
    teslimatlar: [
      "İçerik stratejisi dokümanı",
      "Aylık içerik takvimi",
      "Fotoğraf & kısa video seti",
      "Sosyal medya yönetimi (3 ay)",
    ],
    metrikler: [
      { label: "Organik etkileşim artışı", value: "%120" },
      { label: "Rezervasyon (referans)", value: "%35" },
      { label: "Takipçi artışı", value: "%80" },
    ],
    galeriGorselleri: ["/work/project-restoran.svg", "/work/placeholder.svg", "/work/placeholder.svg"],
    kapakGorseli: "/work/project-restoran.svg",
  },
  {
    slug: "kurumsal-web-sitesi",
    baslik: "Kurumsal Web Sitesi",
    kategori: "Web Tasarım & Yazılım",
    hizmetler: ["Web Tasarım", "Next.js", "SEO"],
    yil: "2024",
    kisaOzet:
      "B2B şirketi için hızlı, erişilebilir ve dönüşüm odaklı kurumsal web sitesi.",
    problem:
      "Eski site yavaş, mobil uyumsuz ve güncel marka kimliğini yansıtmıyordu. Lead formları ve analitik yetersizdi.",
    cozum:
      "Next.js ile performanslı, semantik ve SEO uyumlu yeni site tasarlandı. Tasarım sisteminde kurumsal kimlik korunarak modern UI uygulandı. Form ve CTA’lar CRO prensiplerine göre yerleştirildi.",
    teslimatlar: [
      "Responsive kurumsal site",
      "CMS entegrasyonu (opsiyonel)",
      "Google Analytics 4",
      "Temel SEO kurulumu",
    ],
    metrikler: [
      { label: "Sayfa hızı (LCP)", value: "< 2.2s" },
      { label: "Mobil skor", value: "98" },
      { label: "Lead formu dönüşümü", value: "%40 artış" },
    ],
    galeriGorselleri: ["/work/project-web.svg", "/work/placeholder.svg", "/work/placeholder.svg"],
    kapakGorseli: "/work/project-web.svg",
  },
  {
    slug: "3d-ambalaj-urun-configurator",
    baslik: "3D Ambalaj / Ürün Configurator",
    kategori: "3D Ürün Deneyimi",
    hizmetler: ["3D Configurator", "WebGL", "Ürün Görselleştirme"],
    yil: "2024",
    kisaOzet:
      "Ürün konfigürasyonu ve ambalaj özelleştirmesi için interaktif 3D configurator.",
    problem:
      "Müşteri, ürün ve ambalaj varyantlarını müşteriye canlı göstermek ve sipariş öncesi deneyim sunmak istiyordu. Statik görseller yetersiz kalıyordu.",
    cozum:
      "Web tabanlı 3D configurator geliştirildi. Renk, malzeme ve boyut seçenekleri gerçek zamanlı yansıtıldı. Mobil uyumlu ve hafif performans hedeflendi.",
    teslimatlar: [
      "3D model optimizasyonu",
      "Web configurator arayüzü",
      "Entegrasyon dokümantasyonu",
      "Kullanım eğitimi",
    ],
    metrikler: [
      { label: "Sayfa süresi artışı", value: "%90" },
      { label: "Yapılandırma tamamlama", value: "%55" },
      { label: "Mobil kullanım", value: "%45" },
    ],
    galeriGorselleri: ["/work/project-3d.svg", "/work/placeholder.svg", "/work/placeholder.svg"],
    kapakGorseli: "/work/project-3d.svg",
  },
  {
    slug: "urun-lansman-kampanyasi",
    baslik: "Ürün Lansman Kampanyası",
    kategori: "İçerik & Meta",
    hizmetler: ["İçerik Üretimi", "Meta Ads", "Motion"],
    yil: "2024",
    kisaOzet:
      "Yeni ürün lansmanı için video ve motion içerik + hedefli Meta kampanyası.",
    problem:
      "Yeni ürün piyasaya sürülecekti; farkındalık ve ön sipariş hedefleniyordu. Mevcut içerik stoku yoktu.",
    cozum:
      "Lansman konsepti ve görsel dil belirlendi. Ürün tanıtım videoları ve kısa motion grafikler üretildi. Meta’da awareness ve conversion aşamalı kampanya yapısı kuruldu.",
    teslimatlar: [
      "Lansman kreatif seti (video + statik)",
      "Meta kampanya yapısı",
      "Landing page",
      "Performans raporu",
    ],
    metrikler: [
      { label: "Video görüntülenme", value: "2.1M" },
      { label: "Ön sipariş sayısı", value: "340+" },
      { label: "CPM", value: "%25 düşüş" },
    ],
    galeriGorselleri: ["/work/project-lansman.svg", "/work/placeholder.svg", "/work/placeholder.svg"],
    kapakGorseli: "/work/project-lansman.svg",
  },
  {
    slug: "hizmet-sektoru-lead-gen",
    baslik: "Hizmet Sektörü Lead Gen",
    kategori: "Landing & Meta",
    hizmetler: ["Landing Page", "Meta Ads", "Lead Form"],
    yil: "2024",
    kisaOzet:
      "B2B hizmet sağlayıcı için landing page ve Meta lead kampanyası ile kaliteli lead artışı.",
    problem:
      "Lead sayısı düşük, maliyet yüksekti. Landing sayfası dönüşüm odaklı değildi ve form terk oranı yüksekti.",
    cozum:
      "Tek odaklı landing page CRO ile yenilendi. Meta lead formu ve landing formu hizalı soru setleri ile kalite filtresi eklendi. Retargeting ile soğuk trafik takibi yapıldı.",
    teslimatlar: [
      "Dönüşüm odaklı landing page",
      "Meta Lead Ad kampanyası",
      "CRM/Webhook entegrasyonu",
      "Aylık lead raporu",
    ],
    metrikler: [
      { label: "Lead maliyeti düşüşü", value: "%38" },
      { label: "Dönüşüm oranı artışı", value: "%52" },
      { label: "Kaliteli lead oranı", value: "%68" },
    ],
    galeriGorselleri: ["/work/project-lead.svg", "/work/placeholder.svg", "/work/placeholder.svg"],
    kapakGorseli: "/work/project-lead.svg",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(limit = 3): CaseStudy[] {
  return caseStudies.slice(0, limit);
}
