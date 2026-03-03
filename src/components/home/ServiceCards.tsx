import Link from "next/link";
import type { ServiceCard } from "@/data/services";

interface ServiceCardsProps {
  services: ServiceCard[];
}

export function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <div className="services-grid" style={{ marginTop: "2rem" }}>
      {services.map((service, index) => (
        <div
          key={service.id}
          id={service.slug}
          className={`service-card-cell ${index === 6 ? "service-card-last" : ""}`}
          style={{ display: "flex", minHeight: "100%" }}
        >
          <Link
            href={`/hizmetler#${service.slug}`}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "1.25rem",
              border: "1px solid rgba(37,99,235,0.08)",
              borderRadius: "1rem",
              background: "linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
              minHeight: "140px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1rem",
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
            <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0 0", flex: 1 }}>
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
          </Link>
        </div>
      ))}
    </div>
  );
}
