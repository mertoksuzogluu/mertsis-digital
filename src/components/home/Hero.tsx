"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const stats = [
  { value: "PDKS", label: "Kiosk + Mobil + Panel" },
  { value: "7/24", label: "Operasyon Takibi" },
  { value: "NFC/QR", label: "Hızlı Giriş-Çıkış" },
];

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #ffffff 0%, #f0f4ff 40%, #e0ecff 70%, #dbeafe 100%)",
      }}
      aria-label="Ana tanitim"
    >
      <div
        style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "50vw",
            height: "50vw",
            maxWidth: "700px",
            maxHeight: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(59,130,246,0.04) 60%, transparent 70%)",
            animation: "heroFloat 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
            width: "20vw",
            height: "20vw",
            maxWidth: "300px",
            maxHeight: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
            animation: "heroFloat2 15s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.035,
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "center",
          padding: "6rem 1.25rem 4rem",
        }}
      >
        <div className="hero-layout">
          <div style={{ maxWidth: "560px" }}>
            <p
              style={{
                margin: "0 0 1rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#2563eb",
              }}
            >
              Mertsis Digital
            </p>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Personel ve operasyon{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                yazılımı
              </span>
            </h1>

            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#52525b",
                maxWidth: "480px",
              }}
            >
              PDKS kiosk, mobil uygulama ve yönetim paneli. İhtiyacına özel web
              yazılımlar. Kreatif ve reklam yan hizmet.
            </p>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <Button href="/hizmetler/pdks" variant="primary" size="lg">
                PDKS&apos;i İncele
              </Button>
              <Button
                href={siteConfig.calendlyUrl}
                variant="secondary"
                size="lg"
                external
              >
                Görüşme Planla
              </Button>
            </div>

            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#2563eb",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "#71717a",
                      marginTop: "0.125rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-product">
            <video
              src="/services/pdks-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="PDKS personel uygulaması demo videosu"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                display: "block",
                margin: "0 auto",
                background: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          <path
            d="M0 60V30C240 5 480 0 720 15C960 30 1200 55 1440 30V60H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes heroFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-30px,20px) scale(1.05)}}
        @keyframes heroFloat2{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-15px)}}
        .hero-layout{
          display:grid;
          grid-template-columns:1fr;
          gap:2.5rem;
          align-items:center;
        }
        .hero-product{
          width:100%;
          max-width:480px;
          margin:0 auto;
        }
        @media(min-width:1024px){
          .hero-layout{grid-template-columns:1fr 1.05fr;gap:3rem}
          .hero-product{max-width:none;margin:0}
        }
      `,
        }}
      />
    </section>
  );
}
