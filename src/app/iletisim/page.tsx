import { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Teklif alın veya görüşme planlayın. Mertsis Digital ile iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        subtitle="Projenizi anlatın; 24 saat içinde plan ve bütçe önerisi ile dönüş yapalım."
      />
      <div style={{ padding: "3rem 1.25rem 4rem" }}>
        <div className="container-narrow" style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gap: "2.5rem",
            gridTemplateColumns: "1fr",
          }}>
            <Suspense fallback={<div style={{ color: "#71717a" }}>Yükleniyor...</div>}>
              <ContactForm />
            </Suspense>
            <aside style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0a0a0a", marginBottom: "0.25rem" }}>E-posta</h3>
                <a href={`mailto:${siteConfig.contact.email}`} style={{ fontSize: "0.875rem", color: "#2563eb", textDecoration: "none" }}>
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0a0a0a", marginBottom: "0.25rem" }}>Telefon</h3>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} style={{ fontSize: "0.875rem", color: "#2563eb", textDecoration: "none" }}>
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0a0a0a", marginBottom: "0.25rem" }}>Adres</h3>
                <p style={{ fontSize: "0.875rem", color: "#52525b", margin: 0 }}>{siteConfig.contact.address}</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
