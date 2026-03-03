"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
      }}
      role="banner"
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          height: "4rem",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "#0a0a0a",
            textDecoration: "none",
          }}
          aria-label="Mertsis Digital ana sayfa"
        >
          Mertsis Digital
        </Link>

        <nav className="desktop-nav" aria-label="Ana menü">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: pathname === item.href ? "#2563eb" : "#3f3f46",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-nav" style={{ gap: "0.75rem" }}>
          <Button href="/iletisim?form=teklif" variant="secondary" size="sm">
            Teklif Al
          </Button>
          <Button href={siteConfig.calendlyUrl} variant="primary" size="sm" external>
            Görüşme Planla
          </Button>
        </div>

        <div className="mobile-nav">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            style={{ padding: "0.5rem", background: "none", border: "none", cursor: "pointer", color: "#0a0a0a" }}
            aria-expanded={mobileOpen}
            aria-label="Menüyü aç"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: "1rem 1.25rem" }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} aria-label="Mobil menü">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "0.5rem 0",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: pathname === item.href ? "#2563eb" : "#0a0a0a",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Button href="/iletisim?form=teklif" variant="secondary" size="sm" onClick={() => setMobileOpen(false)}>
                Teklif Al
              </Button>
              <Button href={siteConfig.calendlyUrl} variant="primary" size="sm" external onClick={() => setMobileOpen(false)}>
                Görüşme Planla
              </Button>
            </div>
          </nav>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .desktop-nav{display:flex;align-items:center;gap:2rem}
        .mobile-nav{display:none;align-items:center;gap:.5rem}
        @media(max-width:767px){.desktop-nav{display:none!important}.mobile-nav{display:flex!important}}
      `}} />
    </header>
  );
}
