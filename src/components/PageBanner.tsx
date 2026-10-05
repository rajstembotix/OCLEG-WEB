export function PageBanner({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-brand-steel text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(200,16,46,0.45), transparent 55%), linear-gradient(135deg, #1B1B1B 0%, #2A2E33 55%, #1B1B1B 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        {kicker && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-red animate-fade-in">
            {kicker}
          </p>
        )}
        <div className="flex items-start gap-4 animate-fade-up">
          <span className="mt-1 h-10 w-1.5 shrink-0 bg-brand-red md:h-12" />
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-wide md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 max-w-2xl text-base text-neutral-300 md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="h-1.5 bg-brand-red" />
    </div>
  );
}
