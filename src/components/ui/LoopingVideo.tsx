"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type LoopingVideoProps = {
  src: string;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
};

/** Dekoratif animasyon videosu: sürekli loop, kontrol yok, durdurulamaz. */
export function LoopingVideo({
  src,
  className,
  style,
  "aria-label": ariaLabel,
}: LoopingVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const keepPlaying = () => {
      if (video.paused) {
        void video.play().catch(() => {});
      }
    };

    void video.play().catch(() => {});
    video.addEventListener("pause", keepPlaying);
    video.addEventListener("ended", keepPlaying);

    const onVisibility = () => {
      if (document.visibilityState === "visible") keepPlaying();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("pause", keepPlaying);
      video.removeEventListener("ended", keepPlaying);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      controls={false}
      tabIndex={-1}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      className={className}
      style={{
        pointerEvents: "none",
        userSelect: "none",
        background: "transparent",
        border: "none",
        outline: "none",
        boxShadow: "none",
        ...style,
      }}
    />
  );
}
