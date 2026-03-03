export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Keşif",
    description: "Hedeflerinizi, hedef kitlenizi ve rakiplerinizi anlıyoruz; ihtiyaç haritası çıkarıyoruz.",
  },
  {
    step: 2,
    title: "Strateji",
    description: "Kapsam, kanallar ve KPI’lar üzerinde mutabakat sağlayıp yol haritası oluşturuyoruz.",
  },
  {
    step: 3,
    title: "Üretim",
    description: "Kreatif, teknik ve içerik üretimini takvim ve kalite standartlarına göre ilerletiyoruz.",
  },
  {
    step: 4,
    title: "Yayın",
    description: "Kampanyaları ve varlıkları devreye alıyoruz; izleme ve raporlama kuruyoruz.",
  },
  {
    step: 5,
    title: "Optimizasyon",
    description: "Veriye dayalı iyileştirmeler ve A/B testleri ile sürekli performans artışı hedefliyoruz.",
  },
];
