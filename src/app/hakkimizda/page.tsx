import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Mertsis Digital — Premium kreatif ve performans odaklı dijital ajans. İstanbul merkezli, Türkiye ve global projeler.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        subtitle="Dijitalde tasarlıyor, geliştiriyor ve ölçekliyoruz."
      />
      <div style={{ padding: "3rem 1.25rem 4rem" }}>
        <div className="container-narrow" style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1rem", lineHeight: 1.7, color: "#52525b" }}>
            <p style={{ margin: 0 }}>
              Mertsis Digital, markaların dijital büyümesini tek bir ekiple yönetmek isteyenler için
              kuruldu. Sosyal medya, performans pazarlaması, içerik üretimi, web ve 3D deneyimini
              bir araya getirerek hem kreatif kalite hem de ölçülebilir sonuç odaklı çalışıyoruz.
            </p>
            <p style={{ margin: 0 }}>
              İstanbul merkezli ekibimiz, e-ticaret, kurumsal ve hizmet sektöründe yerel ve global
              projeler yürütüyor. Strateji aşamasından teslimata kadar süreci şeffaf ve veri odaklı
              yönetiyoruz.
            </p>
            <p style={{ margin: 0 }}>
              İhtiyacınızı anlattığınızda, 24 saat içinde teklif ve yol haritası çıkarıyoruz.
            </p>
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Button href="/iletisim" variant="primary" size="md">
              İletişime Geç
            </Button>
            <Button href="/projeler" variant="secondary" size="md">
              Projeleri İncele
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
