"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

/** Navbar — kompakt ama wordmark okunaklı; mobil overlay `top` ile aynı */
const HEADER_BAR_HEIGHT = "5.25rem";

/** Beyaz şerit hero’dan dar; geniş ekranda bariz şerit */
const HEADER_BAR_MAX = "min(100%, 56rem)";

/** next/image yerine düz <img>: optimizasyon katmanı stilleri logo boyutunu sürekli bozuyordu */
/** Logo bar içinde mümkün olduğunca büyük; bar 11rem’e dönmeden */
const LOGO_BOX = "clamp(3.25rem, 7.5vw, 4.25rem)";
const logoBoxStyle: CSSProperties = {
  width: LOGO_BOX,
  height: LOGO_BOX,
  flexShrink: 0,
  overflow: "hidden",
  display: "block",
  lineHeight: 0,
};
const logoImgStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "left center",
  display: "block",
};

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          boxSizing: "border-box",
          paddingLeft: "clamp(0.75rem, 3vw, 1.5rem)",
          paddingRight: "clamp(0.75rem, 3vw, 1.5rem)",
          background: "transparent",
        }}
        role="banner"
      >
        <div
          style={{
            maxWidth: HEADER_BAR_MAX,
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            boxSizing: "border-box",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "0 0 12px 12px",
            boxShadow: "0 4px 20px -8px rgba(15, 23, 42, 0.1)",
          }}
        >
          <div
            className="flex w-full items-center justify-between gap-3 px-4 sm:px-5"
            style={{
              minHeight: HEADER_BAR_HEIGHT,
              boxSizing: "border-box",
            }}
          >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
              color: "#0a0a0a",
            }}
            aria-label="Mertsis Digital ana sayfa"
          >
            {/* Küçük width/height = sadece 1:1 oran ipucu; gerçek boyutu logoBox belirler (FOUC önler) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span style={logoBoxStyle}>
              <img
                src="/logo.png"
                alt="Mertsis Digital"
                width={128}
                height={128}
                className="mertsis-header-logo"
                decoding="async"
                fetchPriority="high"
                style={logoImgStyle}
              />
            </span>
          </Link>

          {/* Desktop nav */}
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

          {/* Desktop CTA */}
          <div className="desktop-nav" style={{ gap: "0.75rem" }}>
            <Button href="/iletisim?form=teklif" variant="secondary" size="sm">
              Teklif Al
            </Button>
            <Button href={siteConfig.calendlyUrl} variant="primary" size="sm" external>
              Görüşme Planla
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="mobile-nav-btn"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              display: "none",
              width: "44px",
              height: "44px",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              position: "relative",
              zIndex: 60,
            }}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <div style={{ width: "22px", height: "16px", position: "relative" }}>
              <span style={{
                position: "absolute", left: 0, width: "22px", height: "2px",
                background: "#0a0a0a", borderRadius: "1px",
                transition: "transform 0.3s, top 0.3s, opacity 0.3s",
                top: mobileOpen ? "7px" : "0px",
                transform: mobileOpen ? "rotate(45deg)" : "none",
              }} />
              <span style={{
                position: "absolute", left: 0, top: "7px", width: "22px", height: "2px",
                background: "#0a0a0a", borderRadius: "1px",
                transition: "opacity 0.2s",
                opacity: mobileOpen ? 0 : 1,
              }} />
              <span style={{
                position: "absolute", left: 0, width: "22px", height: "2px",
                background: "#0a0a0a", borderRadius: "1px",
                transition: "transform 0.3s, top 0.3s, opacity 0.3s",
                top: mobileOpen ? "7px" : "14px",
                transform: mobileOpen ? "rotate(-45deg)" : "none",
              }} />
            </div>
          </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: HEADER_BAR_HEIGHT,
            zIndex: 49,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            overflowY: "auto",
            animation: "mobileMenuIn 0.25s ease-out",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem 1.5rem",
              gap: "0.25rem",
            }}
            aria-label="Mobil menü"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "1rem 0",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: pathname === item.href ? "#2563eb" : "#0a0a0a",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  transition: "color 0.15s",
                }}
              >
                {item.label}
              </Link>
            ))}

            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Button href="/iletisim?form=teklif" variant="primary" size="lg" onClick={() => setMobileOpen(false)}>
                Teklif Al
              </Button>
              <Button href={siteConfig.calendlyUrl} variant="secondary" size="lg" external onClick={() => setMobileOpen(false)}>
                Görüşme Planla
              </Button>
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              <a href={`mailto:${siteConfig.contact.email}`} style={{ display: "block", fontSize: "0.875rem", color: "#64748b", textDecoration: "none", marginBottom: "0.5rem" }}>
                {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} style={{ display: "block", fontSize: "0.875rem", color: "#64748b", textDecoration: "none" }}>
                {siteConfig.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .desktop-nav{display:flex;align-items:center;gap:1.25rem}
        .mobile-nav-btn{display:none!important}
        @media(max-width:767px){
          .desktop-nav{display:none!important}
          .mobile-nav-btn{display:flex!important}
        }
        @keyframes mobileMenuIn{
          from{opacity:0;transform:translateY(-8px)}
          to{opacity:1;transform:translateY(0)}
        }
      `}} />
    </>
  );
}
