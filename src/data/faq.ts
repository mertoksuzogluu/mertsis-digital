export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "PDKS / yazılım projeleri nasıl fiyatlanır?",
    answer:
      "Kapsama göre proje bazlı veya aylık bakım/retainer ile çalışıyoruz. Kiosk sayısı, şube, mobil uygulama ve özel entegrasyonlar teklifi belirler. İlk görüşmede ihtiyaç netleşince bütçe aralığını paylaşıyoruz.",
  },
  {
    question: "PDKS kurulumu ne kadar sürer?",
    answer:
      "Standart kurulumda firma, şube, personel ve terminal aktivasyonu birkaç gün içinde ayağa kalkabilir. Özel rapor, entegrasyon veya donanım (NFC tablet/kiosk) süreyi uzatır; net takvim teklifte yazılır.",
  },
  {
    question: "Sadece yazılım, pazarlama istemiyoruz — olur mu?",
    answer:
      "Evet. Ana odağımız yazılım ve operasyon ürünleri. Sosyal medya ve reklam, ürün lansmanı veya büyüme ihtiyacı olduğunda opsiyonel destek olarak sunulur.",
  },
  {
    question: "Fiyatlandırma nasıl?",
    answer:
      "Yazılımda proje + bakım; pazarlama tarafında aylık retainer veya proje bazlı model kullanıyoruz. Reklam medya bütçesi (Meta vb.) ayrıdır ve müşteriye aittir.",
  },
  {
    question: "Web / panel teslim süresi?",
    answer:
      "Kurumsal site veya küçük paneller için yaklaşık 3–6 hafta, PDKS benzeri çok yüzeyli ürünlerde 6–12 hafta planlıyoruz. Süre kapsam netleştikten sonra teklifte belirtilir.",
  },
  {
    question: "Sizden neye ihtiyacımız var?",
    answer:
      "Yazılımda süreç özeti, kullanıcı rolleri ve varsa mevcut Excel/sistemler; marka tarafında logo ve ton. PDKS için şube listesi, personel yapısı ve terminal lokasyonları yeterlidir. İlk görüşmede tam checklist paylaşılır.",
  },
];
