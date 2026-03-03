interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 50%, #e0ecff 100%)",
        overflow: "hidden",
        padding: "5rem 1.25rem 3.5rem",
      }}
    >
      {/* Dekoratif */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }} aria-hidden="true">
        <div style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: "40vw", height: "40vw", maxWidth: "500px", maxHeight: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", left: "5%",
          width: "25vw", height: "25vw", maxWidth: "300px", maxHeight: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="container-narrow" style={{ position: "relative", zIndex: 1, maxWidth: "64rem", margin: "0 auto" }}>
        <h1 style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "#0a0a0a",
          margin: 0,
          lineHeight: 1.15,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            marginTop: "0.75rem",
            fontSize: "1.125rem",
            lineHeight: 1.65,
            color: "#52525b",
            maxWidth: "520px",
          }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Alt dalga */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 40V20C360 0 720 5 1080 15C1260 20 1380 30 1440 20V40H0Z" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}
