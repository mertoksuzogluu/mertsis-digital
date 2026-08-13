import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  getServiceBySlug,
  primaryServices,
  growthServices,
} from "@/data/services";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";
import { LoopingVideo } from "@/components/ui/LoopingVideo";
import { siteConfig } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Hizmet" };
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others =
    service.group === "primary"
      ? primaryServices.filter((s) => s.slug !== service.slug)
      : growthServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero title={service.title} subtitle={service.description} />

      <div style={{ padding: "3rem 1.25rem 4rem" }}>
        <div
          className="container-narrow"
          style={{ maxWidth: "64rem", margin: "0 auto" }}
        >
          <Link
            href="/hizmetler"
            style={{
              fontSize: "0.875rem",
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            ← Tüm hizmetler
          </Link>

          <div
            style={{
              marginTop: "1.5rem",
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "1fr",
            }}
            className="service-detail-grid"
          >
            <div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "#3f3f46",
                  margin: 0,
                }}
              >
                {service.longDescription}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "2rem 0 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {service.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      fontSize: "0.9375rem",
                      color: "#0a0a0a",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{ color: "#2563eb", flexShrink: 0, marginTop: 2 }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {service.steps && service.steps.length > 0 && (
                <div style={{ marginTop: "2.5rem" }}>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#0a0a0a",
                    }}
                  >
                    Nasıl çalışır?
                  </h2>
                  <ol
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "1.25rem 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      counterReset: "step",
                    }}
                  >
                    {service.steps.map((step, i) => (
                      <li
                        key={step.title}
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "999px",
                            background: "rgba(37,99,235,0.1)",
                            color: "#2563eb",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <div
                            style={{
                              fontWeight: 600,
                              color: "#0a0a0a",
                              fontSize: "0.9375rem",
                            }}
                          >
                            {step.title}
                          </div>
                          <p
                            style={{
                              margin: "0.25rem 0 0",
                              fontSize: "0.875rem",
                              color: "#52525b",
                              lineHeight: 1.55,
                            }}
                          >
                            {step.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div
                style={{
                  marginTop: "2.5rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <Button href="/iletisim?form=teklif" variant="primary" size="lg">
                  Teklif Al
                </Button>
                <Button
                  href={siteConfig.calendlyUrl}
                  variant="secondary"
                  size="lg"
                  external
                >
                  Görüşme Planla
                </Button>
              </div>
            </div>

            <div>
              {service.video ? (
                <LoopingVideo
                  src={service.video}
                  knockOutWhite
                  aria-label={`${service.title} animasyonu`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "1rem",
                      border: "1px solid rgba(0,0,0,0.06)",
                      background: "#f8faff",
                    }}
                  />
                  {service.gallery && service.gallery.length > 1 && (
                    <div
                      style={{
                        marginTop: "0.75rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "0.75rem",
                      }}
                    >
                      {service.gallery
                        .filter((src) => src !== service.image)
                        .slice(0, 2)
                        .map((src) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={src}
                            src={src}
                            alt=""
                            width={400}
                            height={300}
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "0.75rem",
                              border: "1px solid rgba(0,0,0,0.06)",
                              objectFit: "cover",
                              background: "#f8faff",
                            }}
                          />
                        ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {others.length > 0 && (
            <div style={{ marginTop: "4rem" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#0a0a0a",
                }}
              >
                İlgili hizmetler
              </h2>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                {others.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    style={{
                      padding: "0.625rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(0,0,0,0.08)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      textDecoration: "none",
                      background: "#fff",
                    }}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media(min-width:900px){
          .service-detail-grid{
            grid-template-columns: 1.1fr 0.9fr !important;
            align-items: start;
          }
        }
      `,
        }}
      />
    </>
  );
}
