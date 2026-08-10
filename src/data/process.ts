export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Keşif",
    description:
      "İş sürecinizi, kullanıcılarınızı ve hedeflerinizi dinliyoruz; ihtiyaç ve öncelik haritası çıkarıyoruz.",
  },
  {
    step: 2,
    title: "Çözüm Tasarımı",
    description:
      "Yazılım kapsamı, ekranlar, entegrasyonlar ve KPI’lar üzerinde mutabakat sağlayıp yol haritası oluşturuyoruz.",
  },
  {
    step: 3,
    title: "Geliştirme",
    description:
      "Web, panel, mobil ve kiosk tarafını kalite standartlarıyla üretiyoruz; kreatif destek gerektiğinde paralel ilerliyoruz.",
  },
  {
    step: 4,
    title: "Yayın",
    description:
      "Ürünü canlıya alıyor, eğitim ve devir teslim yapıyoruz; izleme ve raporlama kuruyoruz.",
  },
  {
    step: 5,
    title: "İyileştirme",
    description:
      "Kullanım verisi ve geri bildirimle ürünü ve varsa büyüme kanallarını sürekli optimize ediyoruz.",
  },
];
