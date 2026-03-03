import { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "E-ticaret, kurumsal web, 3D configurator, Meta reklamları ve içerik projeleri. Mertsis Digital case study'leri.",
};

export default function ProjelerPage() {
  return (
    <>
      <PageHero
        title="Projeler"
        subtitle="Markaların büyümesine nasıl katkı sağladığımızı problem, çözüm ve sonuçlarla paylaşıyoruz."
      />
      <div style={{ padding: "3rem 1.25rem 4rem" }}>
        <div className="container-narrow" style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}>
            {caseStudies.map((project, i) => (
              <CaseStudyCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
