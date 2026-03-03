"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/faq";

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "clamp(4rem,8vw,7rem) 0",
        background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 100%)",
      }}
      aria-labelledby="sss-heading"
    >
      <div className="container-narrow">
        <h2
          id="sss-heading"
          style={{
            fontSize: "clamp(1.25rem,3vw,2rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
            marginBottom: "clamp(2rem,4vw,3.5rem)",
          }}
        >
          Sıkça Sorulan Sorular
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(37,99,235,0.08)",
                background: "#ffffff",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                  textAlign: "left",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#0a0a0a",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span
                  style={{
                    flexShrink: 0,
                    color: "#52525b",
                    transition: "transform 0.2s",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div style={{ padding: "0 1.5rem 1rem" }}>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                      color: "#52525b",
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
