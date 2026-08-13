interface PhoneFrameProps {
  src: string;
  alt: string;
  label: string;
}

/** Küçük iPhone tarzı çerçeve — ekran görüntüsü için */
export function PhoneFrame({ src, alt, label }: PhoneFrameProps) {
  return (
    <figure
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        width: "100%",
        maxWidth: "148px",
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "1.35rem",
          padding: "0.35rem",
          background: "linear-gradient(160deg, #2a2a2e 0%, #0c0c0e 55%, #1a1a1e 100%)",
          boxShadow:
            "0 18px 40px -18px rgba(15,23,42,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "1.1rem",
            overflow: "hidden",
            background: "#0a0a0a",
            aspectRatio: "9 / 19.5",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "0.35rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: "28%",
              height: "0.7rem",
              borderRadius: "999px",
              background: "#0a0a0a",
              zIndex: 2,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={390}
            height={844}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
        </div>
      </div>
      <figcaption
        style={{
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "#3f3f46",
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </figcaption>
    </figure>
  );
}
