import Link from "next/link";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Twitter", href: siteConfig.social.twitter },
  { label: "Behance", href: siteConfig.social.behance },
] as const;

const linkStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "#52525b",
  textDecoration: "none",
};

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 100%)",
      }}
      role="contentinfo"
    >
      <div
        className="container-wide"
        style={{ padding: "clamp(4rem,8vw,7rem) 1.25rem" }}
      >
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                fontWeight: 600,
                color: "#0a0a0a",
                textDecoration: "none",
              }}
            >
              {siteConfig.name}
            </Link>
            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "0.875rem",
                color: "#52525b",
                maxWidth: "20rem",
                lineHeight: 1.5,
              }}
            >
              Premium kreatif + performans ile markanı büyüt. İstanbul, Türkiye.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#0a0a0a",
                marginBottom: "0.75rem",
              }}
            >
              Sayfalar
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[...siteConfig.nav, { label: "Gizlilik", href: "/gizlilik" }, { label: "Kullanım Şartları", href: "/kullanim-sartlari" }].map(
                (item) => (
                  <li key={item.href} style={{ marginBottom: "0.5rem" }}>
                    <Link href={item.href} style={linkStyle}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#0a0a0a",
                marginBottom: "0.75rem",
              }}
            >
              İletişim
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "#52525b" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href={`mailto:${siteConfig.contact.email}`} style={linkStyle}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} style={linkStyle}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#0a0a0a",
                marginBottom: "0.75rem",
              }}
            >
              Sosyal
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.75rem",
            color: "#52525b",
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <p style={{ margin: 0 }}>{siteConfig.contact.address}</p>
        </div>
      </div>
    </footer>
  );
}
