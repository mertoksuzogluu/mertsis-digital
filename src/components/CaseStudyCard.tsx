"use client";

import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  project: CaseStudy;
  index?: number;
}

export function CaseStudyCard({ project, index = 0 }: CaseStudyCardProps) {
  return (
    <article style={{ display: "flex" }}>
      <Link
        href={`/projeler/${project.slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          borderRadius: "1rem",
          border: "1px solid rgba(0,0,0,0.06)",
          background: "#fff",
          overflow: "hidden",
          textDecoration: "none",
          color: "inherit",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.2s",
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "16/10",
            background: "#f8f9fa",
            overflow: "hidden",
            borderBottom: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <img
            src={project.kapakGorseli}
            alt={project.baslik}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {project.hizmetler.slice(0, 3).map((h) => (
              <span
                key={h}
                style={{
                  borderRadius: "100px",
                  background: "#f1f5f9",
                  padding: "0.25rem 0.625rem",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  color: "#475569",
                }}
              >
                {h}
              </span>
            ))}
          </div>

          <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
            {project.kategori} · {project.yil}
          </span>

          <h3 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", lineHeight: 1.3 }}>
            {project.baslik}
          </h3>

          <p style={{ margin: 0, fontSize: "0.875rem", color: "#64748b", lineHeight: 1.55, flex: 1 }}>
            {project.kisaOzet}
          </p>

          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.25rem",
            fontSize: "0.875rem", fontWeight: 500, color: "#0f172a",
          }}>
            Projeyi incele <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
