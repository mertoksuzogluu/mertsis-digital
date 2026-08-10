import Link from "next/link";
import type { ServiceCard } from "@/data/services";
import { primaryServices, growthServices } from "@/data/services";

interface ServiceCardsProps {
  /** Verilirse sadece bu liste; yoksa primary + growth hiyerarşisi */
  services?: ServiceCard[];
  /** Ana sayfada büyüme grubunu daha sade göster */
  splitGroups?: boolean;
}

function Card({
  service,
  compact = false,
}: {
  service: ServiceCard;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: compact ? "1rem 1.125rem" : "1.25rem",
        border: compact
          ? "1px solid rgba(0,0,0,0.06)"
          : "1px solid rgba(37,99,235,0.08)",
        borderRadius: "1rem",
        background: compact
          ? "#fff"
          : "linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)",
        boxShadow: compact ? "none" : "0 1px 3px rgba(0,0,0,0.03)",
        minHeight: compact ? "auto" : "140px",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: compact ? "0.9375rem" : "1rem",
          fontWeight: 600,
          color: "#0a0a0a",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "0.875rem",
          color: "#52525b",
          lineHeight: 1.5,
        }}
      >
        {service.description}
      </p>
      {!compact && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0.75rem 0 0 0",
            flex: 1,
          }}
        >
          {service.outcomes.slice(0, 2).map((outcome) => (
            <li
              key={outcome}
              style={{
                fontSize: "0.875rem",
                color: "#0a0a0a",
                marginBottom: "0.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "#2563eb", flexShrink: 0 }} aria-hidden>
                ✓
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export function ServiceCards({
  services: list,
  splitGroups = false,
}: ServiceCardsProps) {
  if (list && !splitGroups) {
    return (
      <div className="services-grid" style={{ marginTop: "2rem" }}>
        {list.map((service, index) => (
          <div
            key={service.id}
            id={service.slug}
            className={`service-card-cell ${index === 6 ? "service-card-last" : ""}`}
            style={{ display: "flex", minHeight: "100%" }}
          >
            <Card service={service} />
          </div>
        ))}
      </div>
    );
  }

  const primary = list
    ? list.filter((s) => s.group === "primary")
    : primaryServices;
  const growth = list
    ? list.filter((s) => s.group === "growth")
    : growthServices;

  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="services-grid">
        {primary.map((service) => (
          <div
            key={service.id}
            id={service.slug}
            className="service-card-cell"
            style={{ display: "flex", minHeight: "100%" }}
          >
            <Card service={service} />
          </div>
        ))}
      </div>

      {growth.length > 0 && (
        <div style={{ marginTop: "2.5rem" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            Büyüme desteği
          </h3>
          <p
            style={{
              margin: "0.5rem 0 0",
              fontSize: "0.875rem",
              color: "#71717a",
              maxWidth: "36rem",
            }}
          >
            Ürün ve yazılım lansmanlarını destekleyen kreatif, reklam ve analitik.
          </p>
          <div
            style={{
              marginTop: "1.25rem",
              display: "grid",
              gap: "0.75rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            }}
          >
            {growth.map((service) => (
              <div key={service.id} id={service.slug} style={{ display: "flex" }}>
                <Card service={service} compact />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
