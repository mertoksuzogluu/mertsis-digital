"use client";

import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section
      style={{ padding: "clamp(4rem,8vw,7rem) 0" }}
      aria-labelledby="referanslar-heading"
    >
      <div className="container-narrow">
        <h2
          id="referanslar-heading"
          style={{
            fontSize: "clamp(1.25rem,3vw,2rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
            marginBottom: "clamp(2rem,4vw,3.5rem)",
          }}
        >
          Referanslar
        </h2>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              style={{
                borderRadius: "1rem",
                border: "1px solid rgba(37,99,235,0.08)",
                background: "linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                padding: "1.5rem",
                margin: 0,
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "#0a0a0a",
                  opacity: 0.9,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer style={{ marginTop: "1rem" }}>
                <cite
                  style={{
                    fontStyle: "normal",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#0a0a0a",
                  }}
                >
                  {t.author}
                </cite>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#52525b",
                    marginTop: "0.125rem",
                  }}
                >
                  {t.role}, {t.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
