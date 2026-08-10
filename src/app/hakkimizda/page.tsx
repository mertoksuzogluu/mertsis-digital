import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Mertsis Digital — PDKS, web panelleri ve özel yazılım odaklı ekip. İstanbul merkezli.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        subtitle="Operasyonu yazılımla sadeleştiriyor, gerektiğinde büyümeyi destekliyoruz."
      />
      <div style={{ padding: "3rem 1.25rem 4rem" }}>
        <div className="container-narrow" style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1rem", lineHeight: 1.7, color: "#52525b" }}>
            <p style={{ margin: 0 }}>
              Mertsis Digital, işletmelerin sahadaki ve ofisteki süreçlerini yazılım
              ürünleriyle yönetmesi için kuruldu. PDKS (personel devam kontrol), web
              panelleri, kiosk / mobil uygulamalar ve özel yazılım geliştirmede
              odaklanıyoruz.
            </p>
            <p style={{ margin: 0 }}>
              Kreatif, içerik ve performans pazarlaması yan hizmetimiz; ürün
              lansmanı veya büyüme ihtiyacı olduğunda devreye girer. Ana vaadimiz
              ölçülebilir operasyon ve yazılım.
            </p>
            <p style={{ margin: 0 }}>
              İstanbul merkezli ekibimiz, keşiften yayına kadar süreci şeffaf yönetir.
              İhtiyacınızı anlattığınızda 24 saat içinde teklif ve yol haritası çıkarırız.
            </p>
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Button href="/iletisim" variant="primary" size="md">
              İletişime Geç
            </Button>
            <Button href="/hizmetler" variant="secondary" size="md">
              Hizmetleri Gör
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
