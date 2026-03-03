interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div style={{ textAlign: align === "center" ? "center" : undefined }}>
      <h2
        id={id}
        style={{
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#0a0a0a",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: "0.75rem",
            fontSize: "1.125rem",
            lineHeight: 1.65,
            color: "#52525b",
            maxWidth: align === "center" ? undefined : "42rem",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
