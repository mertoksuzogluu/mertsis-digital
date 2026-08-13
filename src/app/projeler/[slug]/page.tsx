import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) return { title: "Proje" };
  return {
    title: project.baslik,
    description: project.kisaOzet,
    openGraph: {
      title: project.baslik,
      description: project.kisaOzet,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) notFound();

  return (
    <article
      className="pb-section"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
    >
      {/* Hero — kompakt kapak */}
      <div
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #f4f6fb 0%, #eef2ff 100%)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "1.25rem 1.25rem 0",
          }}
        >
          <Link
            href="/projeler"
            style={{
              fontSize: "0.875rem",
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            ← Projeler
          </Link>
          <p
            style={{
              margin: "0.5rem 0 0",
              fontSize: "0.75rem",
              color: "#94a3b8",
            }}
          >
            {project.kategori} · {project.yil}
          </p>
          <h1
            style={{
              margin: "0.35rem 0 0",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
            }}
          >
            {project.baslik}
          </h1>
        </div>

        <div
          style={{
            maxWidth: "42rem",
            margin: "1.25rem auto 0",
            padding: "0 1.25rem 1.75rem",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.kapakGorseli}
            alt={project.baslik}
            style={{
              width: "100%",
              maxHeight: "280px",
              height: "auto",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
              borderRadius: "0.75rem",
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          />
        </div>
      </div>

      <div
        className="container-narrow mt-block space-y-section"
        style={{
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          marginTop: "clamp(2rem, 4vw, 3.5rem)",
        }}
      >
        {/* Özet */}
        <section aria-labelledby="ozet-heading">
          <h2 id="ozet-heading" className="text-body font-semibold text-foreground mb-3">
            Özet
          </h2>
          <p className="text-body-lg text-muted max-w-3xl">
            {project.kisaOzet}
          </p>
        </section>

        {/* Problem & Çözüm */}
        <div className="grid gap-8 md:grid-cols-2">
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="text-body font-semibold text-foreground mb-3">
              Problem
            </h2>
            <p className="text-body text-muted">
              {project.problem}
            </p>
          </section>
          <section aria-labelledby="cozum-heading">
            <h2 id="cozum-heading" className="text-body font-semibold text-foreground mb-3">
              Çözüm
            </h2>
            <p className="text-body text-muted">
              {project.cozum}
            </p>
          </section>
        </div>

        {/* Teslimatlar */}
        <section aria-labelledby="teslimatlar-heading">
          <h2 id="teslimatlar-heading" className="text-body font-semibold text-foreground mb-3">
            Teslimatlar
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.teslimatlar.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface/50 px-3 py-1.5 text-body-sm text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Sonuçlar / Metrikler */}
        <section aria-labelledby="sonuclar-heading">
          <h2 id="sonuclar-heading" className="text-body font-semibold text-foreground mb-4">
            Sonuçlar
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.metrikler.map((m) => (
              <div
                key={m.label}
                className="rounded-card border border-border bg-surface/30 p-4"
              >
                <p className="text-display-sm font-semibold text-accent">
                  {m.value}
                </p>
                <p className="text-body-sm text-muted mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {project.galeriGorselleri.length > 1 && (
          <section aria-labelledby="galeri-heading">
            <h2
              id="galeri-heading"
              className="text-body font-semibold text-foreground mb-4"
            >
              Görseller
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {project.galeriGorselleri
                .filter((src) => src !== project.kapakGorseli)
                .map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      maxHeight: "220px",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "0.75rem",
                      border: "1px solid rgba(0,0,0,0.06)",
                      background: "#f8faff",
                      display: "block",
                    }}
                  />
                ))}
            </div>
          </section>
        )}

        <div className="pt-8 border-t border-border">
          <Button href="/iletisim?form=teklif" variant="primary" size="lg">
            Benzer Proje İçin Teklif Al
          </Button>
        </div>
      </div>
    </article>
  );
}
