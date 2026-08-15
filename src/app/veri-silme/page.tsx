import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Veri Silme Talebi",
  description:
    "Mertsis Digital PDKS personel uygulaması veri silme talebi. Cihaz kaydı ve KVKK silme hakkı.",
  alternates: {
    canonical: "/veri-silme",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const h2Style: CSSProperties = {
  margin: "2rem 0 0.75rem",
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#0a0a0a",
  letterSpacing: "-0.02em",
};

const pStyle: CSSProperties = {
  margin: "0 0 0.75rem",
  fontSize: "0.975rem",
  lineHeight: 1.7,
  color: "#52525b",
};

const ulStyle: CSSProperties = {
  margin: "0 0 0.75rem",
  paddingLeft: "1.25rem",
  fontSize: "0.975rem",
  lineHeight: 1.7,
  color: "#52525b",
};

const linkStyle: CSSProperties = {
  color: "#2563eb",
  textDecoration: "none",
};

export default function VeriSilmePage() {
  const { privacy } = siteConfig;
  const mail = `mailto:${privacy.email}?subject=${encodeURIComponent(
    "PDKS veri silme talebi",
  )}`;

  return (
    <>
      <PageHero
        title="Veri silme talebi"
        subtitle="Mertsis Digital PDKS personel uygulaması"
      />

      <div style={{ padding: "2.5rem 1.25rem 4rem" }}>
        <article
          className="container-narrow"
          style={{ maxWidth: "42rem", margin: "0 auto" }}
        >
          <p style={{ ...pStyle, fontSize: "0.875rem", color: "#71717a" }}>
            Son güncelleme: 15 Ağustos 2026
            <br />
            Data deletion for the Mertsis Digital PDKS employee app
          </p>

          <h2 style={h2Style}>How to request deletion</h2>
          <p style={pStyle}>
            This is a B2B workforce attendance app. There is no public sign-up.
            Your employer creates the employee record. To request deletion of
            data associated with your phone / employee profile:
          </p>
          <ul style={ulStyle}>
            <li>
              In the app, open the menu and tap <strong>Hesaptan çık</strong>.
              This unbinds this device immediately.
            </li>
            <li>
              Email{" "}
              <a href={mail} style={linkStyle}>
                {privacy.email}
              </a>{" "}
              with subject “PDKS veri silme talebi”. Include your full name,
              employer company name, and employee number if you have one.
            </li>
          </ul>
          <p style={pStyle}>
            We review requests with the employer. Device binding is removed.
            Attendance / payroll records the employer must keep by law may be
            retained for the statutory period.
          </p>

          <h2 style={h2Style}>Nasıl talep edilir?</h2>
          <p style={pStyle}>
            Personel uygulamasında hesap herkese açık değildir; kaydı işveren
            panelden oluşturur. Verilerinizin silinmesini istemek için:
          </p>
          <ul style={ulStyle}>
            <li>
              Uygulamada <strong>Hesaptan çık</strong> ile bu cihazdaki kaydı
              hemen koparın. Yeniden kullanım için işverenden yeni kayıt kodu
              gerekir.
            </li>
            <li>
              E-posta gönderin:{" "}
              <a href={mail} style={linkStyle}>
                {privacy.email}
              </a>
              . Konu: “PDKS veri silme talebi”. Ad-soyad, çalıştığınız firma ve
              varsa personel numaranızı yazın.
            </li>
          </ul>
          <p style={pStyle}>
            Talep, ilgili işveren ve Mertsis Digital tarafından değerlendirilir.
            Cihaz bağlama bilgisi geçersizleşir. İşverenin yasal olarak tutması
            gereken puantaj / bordro kayıtları mevzuattaki süre boyunca saklanabilir.
          </p>

          <h2 style={h2Style}>Hangi veriler?</h2>
          <ul style={ulStyle}>
            <li>Cihaz kayıt jetonu ve kayıt zamanı</li>
            <li>Giriş-çıkış sırasında alınan konum (geofence doğrulaması)</li>
            <li>Mesai kayıtları ve izin talepleri</li>
            <li>
              İşverenin girdiği kimlik bilgileri (ad, personel no — uygulamadan
              toplanmaz)
            </li>
          </ul>
          <p style={pStyle}>
            Reklam kimliği toplanmaz. Veri satılmaz. Ayrıntı:{" "}
            <Link href="/gizlilik" style={linkStyle}>
              Gizlilik Politikası
            </Link>
            .
          </p>

          <h2 style={h2Style}>İletişim</h2>
          <p style={pStyle}>
            {privacy.company}
            <br />
            <a href={mail} style={linkStyle}>
              {privacy.email}
            </a>
            <br />
            {privacy.address}
          </p>
        </article>
      </div>
    </>
  );
}
