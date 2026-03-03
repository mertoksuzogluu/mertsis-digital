"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const stats = [
  { value: "%180", label: "ROAS Artışı" },
  { value: "2.1M", label: "Video İzlenme" },
  { value: "%98", label: "Mobil Skor" },
];

const floatingTags = [
  "Meta Ads", "Sosyal Medya", "SEO", "3D", "Web", "İçerik", "CRO",
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
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 40%, #e0ecff 70%, #dbeafe 100%)",
      }}
      aria-label="Ana tanitim"
    >
      {/* Dekoratif arka plan elemanlari */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }} aria-hidden="true">
        {/* Buyuk gradient daire - sag ust */}
        <div style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: "50vw", height: "50vw", maxWidth: "700px", maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(59,130,246,0.04) 60%, transparent 70%)",
          animation: "heroFloat 20s ease-in-out infinite",
        }} />
        {/* Kucuk daire - sol alt */}
        <div style={{
          position: "absolute", bottom: "5%", left: "5%",
          width: "20vw", height: "20vw", maxWidth: "300px", maxHeight: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          animation: "heroFloat2 15s ease-in-out infinite",
        }} />
        {/* Grid cizgiler */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.035,
          backgroundImage: "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        {/* Dekoratif cizgi */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", width: "1px", height: "60%",
          background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.15), transparent)",
        }} />
      </div>

      <div
        className="container-wide"
        style={{
          position: "relative", zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
          padding: "6rem 1.25rem 4rem",
        }}
      >
        {/* Sol taraf: metin */}
        <div style={{ maxWidth: "640px" }}>
          <h1 style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#0a0a0a",
            margin: 0,
          }}>
            Premium Kreatif +{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Performans
            </span>
            <br />
            ile Markanı Büyüt.
          </h1>

          <p style={{
            marginTop: "1.5rem",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "#52525b",
            maxWidth: "520px",
          }}>
            Sosyal medya, Meta reklamları, içerik üretimi, web tasarım ve 3D configurator çözümlerini
            tek bir yüksek performans ekiple sunuyoruz.
          </p>

          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Button href={siteConfig.calendlyUrl} variant="primary" size="lg" external>
              Görüşme Planla
            </Button>
            <Button href="/projeler" variant="secondary" size="lg">
              Projeleri İncele
            </Button>
          </div>

          {/* Metrikler */}
          <div style={{
            marginTop: "3rem",
            display: "flex",
            gap: "2.5rem",
            flexWrap: "wrap",
          }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "#2563eb",
                  letterSpacing: "-0.02em",
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#71717a", marginTop: "0.125rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sag taraf: dekoratif kartlar (sadece genis ekran) */}
        <div className="hero-cards" style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "320px",
        }}>
          {/* Kart 1: Performans */}
          <div style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "1rem",
            padding: "1.25rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            animation: "heroCardFloat 6s ease-in-out infinite",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Meta Ads Performans
              </span>
              <span style={{ fontSize: "0.75rem", color: "#16a34a", fontWeight: 600 }}>+180%</span>
            </div>
            {/* Mini bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "48px" }}>
              {[35, 45, 30, 55, 70, 60, 85, 90, 78, 95, 88, 100].map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: "3px",
                  background: i >= 8 ? "linear-gradient(to top, #2563eb, #3b82f6)" : "rgba(37,99,235,0.15)",
                  animation: `heroBar ${0.3 + i * 0.05}s ease-out`,
                }} />
              ))}
            </div>
          </div>

          {/* Kart 2: Hizmetler etiketleri */}
          <div style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "1rem",
            padding: "1.25rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            animation: "heroCardFloat 6s ease-in-out infinite 1s",
          }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#0a0a0a", marginBottom: "0.75rem" }}>
              Hizmetler
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {floatingTags.map((tag) => (
                <span key={tag} style={{
                  padding: "0.375rem 0.75rem",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  background: "rgba(37,99,235,0.06)",
                  color: "#2563eb",
                  border: "1px solid rgba(37,99,235,0.1)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Kart 3: Musteri memnuniyeti */}
          <div style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "1rem",
            padding: "1.25rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            animation: "heroCardFloat 6s ease-in-out infinite 2s",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: "1rem", fontWeight: 700,
              }}>
                A
              </div>
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0a0a0a" }}>
                  &ldquo;ROAS ciddi şekilde arttı.&rdquo;
                </div>
                <div style={{ fontSize: "0.75rem", color: "#71717a" }}>
                  Dijital Pazarlama Müdürü
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt dalga separator */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60V30C240 5 480 0 720 15C960 30 1200 55 1440 30V60H0Z" fill="#ffffff" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-30px,20px) scale(1.05)}}
        @keyframes heroFloat2{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-15px)}}
        @keyframes heroPulse{0%,100%{opacity:1}50%{opacity:0.4}}
        @keyframes heroCardFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes heroBar{from{transform:scaleY(0)}to{transform:scaleY(1)}}
        .hero-cards{display:flex}
        @media(max-width:1023px){.hero-cards{display:none!important}}
      `}} />
    </section>
  );
}
