export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Meta reklamlarımızı devrettikten sonra ROAS ciddi şekilde arttı. Kreatif ve veri tarafını birlikte yönetmeleri fark yarattı.",
    author: "Ayşe K.",
    role: "Dijital Pazarlama Müdürü",
    company: "E-ticaret Markası",
  },
  {
    quote:
      "Web sitemiz artık hem hızlı hem de dönüşüm odaklı. Süreç profesyonel ve iletişim her zaman net.",
    author: "Mehmet T.",
    role: "Kurucu",
    company: "B2B Hizmet Şirketi",
  },
  {
    quote:
      "İçerik kalitesi ve sosyal medya stratejisi markamızı farklı bir noktaya taşıdı. Kesinlikle tavsiye ederim.",
    author: "Zeynep A.",
    role: "Marka Müdürü",
    company: "Perakende Markası",
  },
];
