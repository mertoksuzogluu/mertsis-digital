import type { ProcessStep } from "@/data/process";

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section
      style={{
        padding: "clamp(4rem,8vw,7rem) 0",
        background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 100%)",
      }}
      aria-labelledby="surec-heading"
    >
      <div className="container-narrow">
        <h2
          id="surec-heading"
          style={{
            fontSize: "clamp(1.25rem,3vw,2rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
            marginBottom: "clamp(2rem,4vw,3.5rem)",
          }}
        >
          Süreç
        </h2>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          {steps.map((step) => (
            <div key={step.step}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#2563eb",
                }}
              >
                0{step.step}
              </span>
              <h3
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#0a0a0a",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  color: "#52525b",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
