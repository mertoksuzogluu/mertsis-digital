import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { getFeaturedCaseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function HomePage() {
  const featured = getFeaturedCaseStudies(3);

  return (
    <>
      <Hero />

      {/* Hizmetler */}
      <section
        style={{ paddingTop: "3rem", paddingBottom: "clamp(4rem,8vw,7rem)" }}
        aria-labelledby="hizmetler-heading"
      >
        <div className="container-narrow">
          <SectionHeading
            id="hizmetler-heading"
            title="Hizmetler"
            subtitle="Sosyal medya, performans, içerik, web ve 3D — tek ekip."
          />
          <ServiceCards services={services} />
        </div>
      </section>

      <ProcessSection steps={processSteps} />

      {/* Öne Çıkan Projeler */}
      <section
        style={{ padding: "clamp(4rem,8vw,7rem) 0" }}
        aria-labelledby="projeler-heading"
      >
        <div className="container-narrow">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "clamp(2rem,4vw,3.5rem)",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <SectionHeading
                id="projeler-heading"
                title="Öne Çıkan Projeler"
                subtitle="Son dönemde markaların büyümesine nasıl katkı sağladığımıza bir göz atın."
              />
            </div>
            <div>
              <Button href="/projeler" variant="secondary" size="sm">
                Tüm Projeler
              </Button>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {featured.map((project, i) => (
              <CaseStudyCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      <FAQSection items={faqItems} />

      {/* Son CTA */}
      <section
        style={{ padding: "clamp(4rem,8vw,7rem) 0", textAlign: "center" }}
        aria-labelledby="final-cta-heading"
      >
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <h2
            id="final-cta-heading"
            style={{
              fontSize: "clamp(1.25rem,3vw,2rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
            }}
          >
            24 Saatte Teklif &amp; Yol Haritası
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "#52525b",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            İhtiyacını anlat, sana hızlıca plan + bütçe + takvim çıkaralım.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Button href="/iletisim?form=teklif" variant="primary" size="lg">
              Teklif Al
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
