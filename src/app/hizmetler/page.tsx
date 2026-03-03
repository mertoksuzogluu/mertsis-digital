import { Metadata } from "next";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { ServiceCards } from "@/components/home/ServiceCards";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Sosyal medya, Meta reklamları, içerik, web, 3D configurator, marka kimliği ve CRO. Mertsis Digital.",
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        title="Hizmetler"
        subtitle="Strateji, kreatif ve performans — tek ekip."
      />
      <div style={{ padding: "3rem 1.25rem 4rem" }}>
        <div className="container-narrow" style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <ServiceCards services={services} />
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.875rem", color: "#52525b", marginBottom: "1rem" }}>
              Projenize uygun teklif için iletişime geçin.
            </p>
            <Button href="/iletisim?form=teklif" variant="primary" size="lg">
              Teklif Al
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
