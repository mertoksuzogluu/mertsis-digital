"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, type CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { primaryServices, growthServices } from "@/data/services";
import { Button } from "@/components/ui/Button";

/** Yüksek navbar — logo/wordmark okunaklı; mobil overlay `top` ile aynı */
const HEADER_BAR_HEIGHT = "11rem";

/** Beyaz şerit `container-wide` ile hizalı (80rem) */
const HEADER_BAR_MAX = "min(100%, 80rem)";

const LOGO_BOX = "clamp(8rem, 12vw, 10.5rem)";
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
  transform: "scale(1.12)",
  transformOrigin: "left center",
};

const linkStyle = (active: boolean): CSSProperties => ({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: active ? "#2563eb" : "#3f3f46",
  textDecoration: "none",
});

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const servicesActive =
    pathname === "/hizmetler" || pathname.startsWith("/hizmetler/");

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }

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
            borderRadius: "0 0 14px 14px",
            boxShadow: "0 8px 32px -12px rgba(15, 23, 42, 0.08)",
          }}
        >
          <div
            className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 lg:px-8"
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
              <div
                ref={dropdownRef}
                style={{ position: "relative" }}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  style={{
                    ...linkStyle(servicesActive),
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                >
                  Hizmetler
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                    style={{
                      transform: servicesOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.15s",
                    }}
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {servicesOpen && (
                  <div
                    role="menu"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 0.75rem)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      minWidth: "280px",
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "0.75rem",
                      boxShadow: "0 12px 40px -12px rgba(15,23,42,0.18)",
                      padding: "0.75rem 0",
                      zIndex: 60,
                    }}
                  >
                    <p
                      style={{
                        margin: "0 1rem 0.5rem",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#94a3b8",
                      }}
                    >
                      Yazılım & ürün
                    </p>
                    {primaryServices.map((s) => (
                      <Link
                        key={s.slug}
                        role="menuitem"
                        href={`/hizmetler/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        style={{
                          display: "block",
                          padding: "0.55rem 1rem",
                          fontSize: "0.875rem",
                          fontWeight: pathname === `/hizmetler/${s.slug}` ? 600 : 500,
                          color:
                            pathname === `/hizmetler/${s.slug}`
                              ? "#2563eb"
                              : "#0a0a0a",
                          textDecoration: "none",
                        }}
                      >
                        {s.title}
                      </Link>
                    ))}

                    <div
                      style={{
                        height: 1,
                        background: "rgba(0,0,0,0.06)",
                        margin: "0.5rem 0",
                      }}
                    />

                    <p
                      style={{
                        margin: "0 1rem 0.5rem",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#94a3b8",
                      }}
                    >
                      Büyüme desteği
                    </p>
                    {growthServices.map((s) => (
                      <Link
                        key={s.slug}
                        role="menuitem"
                        href={`/hizmetler/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        style={{
                          display: "block",
                          padding: "0.5rem 1rem",
                          fontSize: "0.8125rem",
                          fontWeight: pathname === `/hizmetler/${s.slug}` ? 600 : 500,
                          color:
                            pathname === `/hizmetler/${s.slug}`
                              ? "#2563eb"
                              : "#52525b",
                          textDecoration: "none",
                        }}
                      >
                        {s.title}
                      </Link>
                    ))}

                    <div
                      style={{
                        height: 1,
                        background: "rgba(0,0,0,0.06)",
                        margin: "0.5rem 0",
                      }}
                    />
                    <Link
                      href="/hizmetler"
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.55rem 1rem",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "#2563eb",
                        textDecoration: "none",
                      }}
                    >
                      Tüm hizmetler →
                    </Link>
                  </div>
                )}
              </div>

              {siteConfig.nav
                .filter((item) => item.href !== "/hizmetler")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={linkStyle(pathname === item.href)}
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
              <Button
                href={siteConfig.calendlyUrl}
                variant="primary"
                size="sm"
                external
              >
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
              <div
                style={{ width: "22px", height: "16px", position: "relative" }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "22px",
                    height: "2px",
                    background: "#0a0a0a",
                    borderRadius: "1px",
                    transition: "transform 0.3s, top 0.3s, opacity 0.3s",
                    top: mobileOpen ? "7px" : "0px",
                    transform: mobileOpen ? "rotate(45deg)" : "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "7px",
                    width: "22px",
                    height: "2px",
                    background: "#0a0a0a",
                    borderRadius: "1px",
                    transition: "opacity 0.2s",
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "22px",
                    height: "2px",
                    background: "#0a0a0a",
                    borderRadius: "1px",
                    transition: "transform 0.3s, top 0.3s, opacity 0.3s",
                    top: mobileOpen ? "7px" : "14px",
                    transform: mobileOpen ? "rotate(-45deg)" : "none",
                  }}
                />
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
            <div
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                paddingBottom: "0.5rem",
              }}
            >
              <button
                type="button"
                onClick={() => setMobileServicesOpen((o) => !o)}
                aria-expanded={mobileServicesOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 0",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: servicesActive ? "#2563eb" : "#0a0a0a",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
              >
                Hizmetler
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                  style={{
                    transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.15s",
                  }}
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "0.75rem",
                    gap: "0.15rem",
                  }}
                >
                  <p
                    style={{
                      margin: "0.25rem 0",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#94a3b8",
                    }}
                  >
                    Yazılım & ürün
                  </p>
                  {primaryServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/hizmetler/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        padding: "0.65rem 0",
                        fontSize: "1rem",
                        fontWeight: 500,
                        color:
                          pathname === `/hizmetler/${s.slug}`
                            ? "#2563eb"
                            : "#0a0a0a",
                        textDecoration: "none",
                      }}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <p
                    style={{
                      margin: "0.75rem 0 0.25rem",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#94a3b8",
                    }}
                  >
                    Büyüme desteği
                  </p>
                  {growthServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/hizmetler/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        padding: "0.55rem 0",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color:
                          pathname === `/hizmetler/${s.slug}`
                            ? "#2563eb"
                            : "#52525b",
                        textDecoration: "none",
                      }}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <Link
                    href="/hizmetler"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "0.75rem 0 0.25rem",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#2563eb",
                      textDecoration: "none",
                    }}
                  >
                    Tüm hizmetler →
                  </Link>
                </div>
              )}
            </div>

            {siteConfig.nav
              .filter((item) => item.href !== "/hizmetler")
              .map((item) => (
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

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <Button
                href="/iletisim?form=teklif"
                variant="primary"
                size="lg"
                onClick={() => setMobileOpen(false)}
              >
                Teklif Al
              </Button>
              <Button
                href={siteConfig.calendlyUrl}
                variant="secondary"
                size="lg"
                external
                onClick={() => setMobileOpen(false)}
              >
                Görüşme Planla
              </Button>
            </div>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                }}
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  textDecoration: "none",
                }}
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .desktop-nav{display:flex;align-items:center;gap:2rem}
        .mobile-nav-btn{display:none!important}
        @media(max-width:767px){
          .desktop-nav{display:none!important}
          .mobile-nav-btn{display:flex!important}
        }
        @keyframes mobileMenuIn{
          from{opacity:0;transform:translateY(-8px)}
          to{opacity:1;transform:translateY(0)}
        }
      `,
        }}
      />
    </>
  );
}
