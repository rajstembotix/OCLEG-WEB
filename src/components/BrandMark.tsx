"use client";

/** Official OCLEG wordmark styled like the brand logo (no white box). */
export function BrandMark({
  size = "md",
  tone = "light",
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  /** light = for white/light backgrounds; dark = for dark backgrounds */
  tone?: "light" | "dark";
  className?: string;
}) {
  const sizes = {
    sm: {
      ocleg: "text-2xl md:text-3xl",
      electronics: "text-[10px] md:text-xs tracking-[0.22em]",
      gap: "mt-0.5",
    },
    md: {
      ocleg: "text-3xl md:text-4xl",
      electronics: "text-xs md:text-sm tracking-[0.22em]",
      gap: "mt-1",
    },
    lg: {
      ocleg: "text-5xl sm:text-6xl md:text-7xl",
      electronics: "text-lg sm:text-xl md:text-2xl tracking-[0.2em]",
      gap: "mt-1.5",
    },
    xl: {
      ocleg: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
      electronics: "text-xl sm:text-2xl md:text-3xl tracking-[0.2em]",
      gap: "mt-2",
    },
  }[size];

  const electronicsColor =
    tone === "dark" ? "text-white" : "text-brand-dark";

  return (
    <div className={`leading-none ${className}`}>
      <p
        className={`font-display font-bold italic text-brand-red ${sizes.ocleg}`}
      >
        OCLEG
        <sup className="ml-0.5 text-[0.32em] not-italic">®</sup>
      </p>
      <p
        className={`font-display font-bold uppercase not-italic ${electronicsColor} ${sizes.electronics} ${sizes.gap}`}
      >
        ELECTRONICS
      </p>
    </div>
  );
}
