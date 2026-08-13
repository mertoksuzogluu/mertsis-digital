"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type LoopingVideoProps = {
  src: string;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
  /** Kenarlardan bağlı beyaz zemini şeffaf yapar (telefon mockup vb.) */
  knockOutWhite?: boolean;
};

function knockOutEdgeWhite(data: Uint8ClampedArray, width: number, height: number) {
  const n = width * height;
  const visited = new Uint8Array(n);
  const stack = new Int32Array(n);
  let top = 0;

  const isBg = (i: number) => {
    const o = i * 4;
    return data[o] >= 242 && data[o + 1] >= 242 && data[o + 2] >= 242;
  };

  const push = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const i = y * width + x;
    if (visited[i] || !isBg(i)) return;
    visited[i] = 1;
    stack[top++] = i;
  };

  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  while (top > 0) {
    const i = stack[--top]!;
    data[i * 4 + 3] = 0;
    const x = i % width;
    const y = (i / width) | 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }
}

/** Dekoratif animasyon videosu: sürekli loop, kontrol yok, durdurulamaz. */
export function LoopingVideo({
  src,
  className,
  style,
  "aria-label": ariaLabel,
  knockOutWhite = false,
}: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
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

  useEffect(() => {
    if (!knockOutWhite) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const draw = () => {
      if (video.readyState >= 2 && video.videoWidth > 0) {
        if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }
        ctx.drawImage(video, 0, 0);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        knockOutEdgeWhite(frame.data, canvas.width, canvas.height);
        ctx.putImageData(frame, 0, 0);
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    const start = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(draw);
    };

    if (video.readyState >= 2) start();
    else video.addEventListener("loadeddata", start, { once: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [src, knockOutWhite]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        lineHeight: 0,
        ...style,
        background: "transparent",
      }}
    >
      <video
        ref={videoRef}
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
        aria-hidden
        style={
          knockOutWhite
            ? {
                position: "absolute",
                width: 1,
                height: 1,
                opacity: 0,
                pointerEvents: "none",
                overflow: "hidden",
              }
            : {
                width: "100%",
                height: "auto",
                display: "block",
                pointerEvents: "none",
                userSelect: "none",
                background: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }
        }
      />
      {knockOutWhite ? (
        <canvas
          ref={canvasRef}
          aria-hidden={ariaLabel ? undefined : true}
          aria-label={ariaLabel}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            pointerEvents: "none",
            userSelect: "none",
            background: "transparent",
          }}
        />
      ) : null}
    </div>
  );
}
