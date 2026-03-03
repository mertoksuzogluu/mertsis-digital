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
      {/* Hero */}
      <div
        className="relative aspect-[21/9] md:aspect-[3/1] bg-muted/20"
        style={{ position: "relative", minHeight: "220px", background: "#f4f4f5" }}
      >
        <img
          src={project.kapakGorseli}
          alt={project.baslik}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0 container-narrow pb-8"
          style={{
            maxWidth: "64rem",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            paddingBottom: "2rem",
          }}
        >
          <Link
            href="/projeler"
            className="text-body-sm text-muted hover:text-accent transition-colors"
          >
            ← Projeler
          </Link>
          <p className="mt-2 text-caption text-muted">
            {project.kategori} · {project.yil}
          </p>
          <h1 className="mt-2 text-display-sm md:text-display-md font-semibold text-foreground">
            {project.baslik}
          </h1>
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

        <div className="pt-8 border-t border-border">
          <Button href="/iletisim?form=teklif" variant="primary" size="lg">
            Benzer Proje İçin Teklif Al
          </Button>
        </div>
      </div>
    </article>
  );
}
