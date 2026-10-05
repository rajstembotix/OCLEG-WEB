"use client";

import { useEffect, useState } from "react";

export type Slide = { src: string; alt: string; label?: string };

export function ImageSlider({
  images,
  interval = 2800,
  className = "aspect-[16/10]",
  showDots = true,
  kenBurns = false,
  fit = "cover",
  tone = "light",
}: {
  images: Slide[];
  interval?: number;
  className?: string;
  showDots?: boolean;
  kenBurns?: boolean;
  fit?: "cover" | "contain";
  /** dark = charcoal stage for product shots; light = white; transparent = seamless background */
  tone?: "light" | "dark" | "transparent";
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const stageBg =
    tone === "transparent"
      ? "bg-transparent"
      : fit === "contain"
        ? tone === "dark"
          ? "bg-[#1a1a1a]"
          : "bg-white"
        : "bg-brand-steel";

  const fitClass =
    fit === "contain"
      ? tone === "dark" || tone === "transparent"
        ? "object-contain p-4 sm:p-6 md:p-8 lg:p-10 drop-shadow-[0_12px_40px_rgba(0,0,0,0.65)]"
        : "object-contain p-8 md:p-12 bg-white"
      : "object-cover";

  return (
    <div className={`relative overflow-hidden ${stageBg} ${className}`}>
      {images.map((image, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 h-full w-full transition-opacity duration-[1200ms] ease-out ${fitClass} ${
            i === index ? "opacity-100" : "opacity-0"
          } ${kenBurns && i === index ? "animate-ken-burns" : ""}`}
        />
      ))}
      {showDots && (
        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1 transition-all ${
                i === index
                  ? "w-8 bg-brand-red"
                  : tone === "dark" || tone === "transparent"
                    ? "w-2 bg-white/40"
                    : fit === "contain"
                      ? "w-2 bg-brand-dark/30"
                      : "w-2 bg-white/70"
              }`}
              onClick={() => setIndex(i)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
