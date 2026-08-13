import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Button } from "@/components/ui/Button";

const screens = [
  {
    src: "/services/pdks-screens/giris.png",
    label: "Giriş",
    alt: "PDKS personel uygulaması giriş ekranı",
  },
  {
    src: "/services/pdks-screens/cikis.png",
    label: "Çıkış",
    alt: "PDKS personel uygulaması çıkış ekranı",
  },
  {
    src: "/services/pdks-screens/qr.png",
    label: "Terminal QR",
    alt: "PDKS personel uygulaması terminal QR ekranı",
  },
  {
    src: "/services/pdks-screens/gecmis.png",
    label: "Geçmiş",
    alt: "PDKS personel uygulaması geçmiş kayıtları",
  },
] as const;

export function PdksPhonesSection() {
  return (
    <section
      style={{
        padding: "clamp(3.5rem,7vw,6rem) 0",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f5f8ff 45%, #eef3ff 100%)",
        borderTop: "1px solid rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
      }}
      aria-labelledby="pdks-phones-heading"
    >
      <div className="container-narrow">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "clamp(2rem,4vw,2.75rem)",
          }}
        >
          <div style={{ maxWidth: "36rem" }}>
            <SectionHeading
              id="pdks-phones-heading"
              title="Personel mobil uygulaması"
              subtitle="Giriş-çıkış, QR ve geçmiş — tek uygulamada, sahada kullanıma hazır."
            />
          </div>
          <Button href="/hizmetler/pdks" variant="secondary" size="sm">
            PDKS detayı
          </Button>
        </div>

        <div
          className="pdks-phones-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.25rem 1.5rem",
          }}
        >
          {screens.map((s) => (
            <PhoneFrame
              key={s.src}
              src={s.src}
              alt={s.alt}
              label={s.label}
            />
          ))}
        </div>

        <p
          style={{
            margin: "1.75rem 0 0",
            textAlign: "center",
            fontSize: "0.875rem",
            color: "#71717a",
          }}
        >
          Kiosk, mobil ve panel tek sistemde.{" "}
          <Link
            href="/hizmetler/pdks"
            style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}
          >
            İncele →
          </Link>
        </p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media(min-width:768px){
          .pdks-phones-row{gap:1.75rem 2rem !important}
          .pdks-phones-row > figure{max-width:160px !important}
        }
        @media(max-width:480px){
          .pdks-phones-row{gap:1rem 0.85rem !important}
          .pdks-phones-row > figure{max-width:42% !important}
        }
      `,
        }}
      />
    </section>
  );
}
