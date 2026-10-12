"use client";

import Link from "next/link";
import { ImageSlider } from "@/components/ImageSlider";
import { categories, company, companyProfile } from "@/data/catalog";

/** Hero: 9 auto-running featured product images */
const heroSlides = [
  { src: "/images/products/llc-2.jpg", alt: "OCLEG Water Level Controller LLC-2" },
  { src: "/images/products/rakshak.jpg", alt: "OCLEG Rakshak ELCB Earth Leakage Circuit Breaker" },
  { src: "/images/products/ots.jpg", alt: "OCLEG OTS Digital Time Switch" },
  { src: "/images/products/phaser.jpg", alt: "OCLEG Phaser Three Phase Panel" },
  { src: "/images/products/ew-alpha.jpg", alt: "OCLEG EW-Alpha Automatic Starter" },
  { src: "/images/products/main-line-stabilizer.jpg", alt: "OCLEG Main Line Voltage Stabilizer" },
  { src: "/images/products/odp-306.jpg", alt: "OCLEG ODP-306 Control Panel" },
  { src: "/images/products/auto-digital.jpg", alt: "OCLEG Auto Switch" },
  { src: "/images/products/mcb-smart-analog.jpg", alt: "OCLEG MCB Smart Analog Panel" },
];

const sectors = [
  {
    title: "Agriculture",
    copy: "Pump panels and starters that keep irrigation reliable.",
    image: "/images/hero/agriculture.jpg",
  },
  {
    title: "Commercial",
    copy: "Protection for towers, complexes and city infrastructure.",
    // industry.jpg file is the city skyline (filenames were swapped)
    image: "/images/hero/industry.jpg",
  },
  {
    title: "Industry",
    copy: "Control gear built for continuous plant duty.",
    // city.jpg file is the industrial plant
    image: "/images/hero/city.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: Balanced 2-column layout — Tagline on the left, running product images on the right */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#141414] via-[#111111] to-[#0a0a0a] text-white">
        {/* Subtle engineering grid & radiant ambient glow */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-brand-red/25 blur-3xl" />
          <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-red/15 blur-3xl" />
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[74vh] max-w-7xl items-center gap-10 px-4 py-14 lg:min-h-[80vh] lg:grid-cols-12 lg:gap-12 lg:px-6 lg:py-18">
          {/* Left Column: Tagline & Company Value Proposition */}
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Control Panels & Switchgear
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-white animate-fade-up sm:text-5xl lg:text-5xl xl:text-6xl">
              <span className="text-brand-red">{company.taglineLead}</span>
              <br />
              <span className="text-white">{company.taglineRest}</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 animate-fade-up [animation-delay:120ms] md:text-lg">
              Electronic control panels, starters and switchgear from Ahmedabad —
              protecting pumps, motors and appliances every day with proven reliability.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <div className="flex items-center gap-2">
                <span className="font-bold text-brand-red">✓</span> 35+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-brand-red">✓</span> In-House R&D & Testing
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-brand-red">✓</span> Prompt Delivery
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:200ms]">
              <Link
                href="/products/"
                className="bg-brand-red px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-lg shadow-brand-red/30 transition hover:bg-[#a50d25] hover:shadow-brand-red/50"
              >
                View Product Range
              </Link>
              <a
                href="/OCLEG-Brochure.pdf"
                className="border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Right Column: Running Products seamlessly in background (no fitted box, no border, no header) */}
          <div className="relative flex items-center justify-center lg:col-span-6 xl:col-span-6">
            <div className="relative aspect-[4/3] w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
              <ImageSlider
                images={heroSlides}
                interval={3600}
                className="h-full w-full bg-transparent"
                showDots={true}
                kenBurns={false}
                fit="contain"
                tone="transparent"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-1.5 bg-brand-red" />
      </section>

      {/* Sectors — Commercial / Industry images corrected */}
      <section className="bg-white">
        <div className="grid md:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="group relative min-h-[280px] overflow-hidden lg:min-h-[360px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sector.image}
                alt={sector.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
              />
              <div className="sector-scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-8">
                <h2 className="font-display text-2xl tracking-wide lg:text-3xl">
                  {sector.title}
                </h2>
                <p className="mt-2 max-w-xs text-sm text-white/80">{sector.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product range */}
      <section className="border-t border-brand-line bg-brand-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="section-rule mb-3">
                <h2 className="font-display text-3xl font-semibold tracking-wide md:text-4xl">
                  Product Range
                </h2>
              </div>
              <p className="max-w-xl text-brand-muted">
                {categories.length} categories of electronic control and
                switchgear — engineered for reliability.
              </p>
            </div>
            <Link
              href="/products/"
              className="text-sm font-semibold uppercase tracking-[0.1em] text-brand-red hover:underline"
            >
              Full catalogue →
            </Link>
          </div>
          <div className="divide-y divide-brand-line border-y border-brand-line">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}/`}
                className="group flex items-center justify-between gap-4 py-4 transition hover:bg-brand-soft/80"
              >
                <div className="flex min-w-0 items-baseline gap-3 px-1 sm:gap-4">
                  <span className="font-display text-lg text-brand-red sm:text-xl">
                    {c.number}.
                  </span>
                  <h3 className="truncate font-display text-base tracking-wide text-brand-dark transition group-hover:text-brand-red sm:text-lg md:text-xl">
                    {c.title}
                  </h3>
                </div>
                <span className="shrink-0 pr-2 text-xs font-semibold uppercase tracking-wider text-brand-muted sm:text-sm">
                  {c.products.length}{" "}
                  {c.products.length === 1 ? "model" : "models"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company profile */}
      <section className="relative overflow-hidden bg-brand-dark py-16 text-white lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(200,16,46,0.28), transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
          <div>
            <div className="section-rule mb-5">
              <h2 className="font-display text-3xl font-semibold tracking-wide md:text-4xl">
                Company Profile
              </h2>
            </div>
            <p className="leading-relaxed text-neutral-300">
              {companyProfile.intro}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {companyProfile.commitments.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-brand-red pl-3 font-display text-lg tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about/"
              className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand-red hover:underline"
            >
              Read company profile →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero/factory-molding.jpg"
              alt="In-house production machinery"
              className="h-52 w-full object-cover md:h-64"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero/factory-winding.jpg"
              alt="In-house winding facility"
              className="mt-8 h-52 w-full object-cover md:h-64"
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-8 w-1.5 bg-brand-red" />
            <h2 className="font-display text-3xl font-semibold tracking-wide md:text-4xl">
              Trusted Across Industries
            </h2>
          </div>
          <p className="mx-auto mb-10 max-w-2xl text-brand-muted">
            Serving OEMs, utilities, institutions and industry leaders across
            India.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/clients/logos.jpg"
            alt="OCLEG clients"
            className="mx-auto w-full max-w-5xl"
          />
          <Link
            href="/clients/"
            className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand-red hover:underline"
          >
            View all clients →
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-brand-line bg-brand-soft py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
            Partner with OCLEG
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide md:text-5xl">
            Dealers, OEMs &amp; project teams
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-muted md:text-lg">
            Enquire for product support, dealer opportunities, or project
            quotations from our Ahmedabad works.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact/"
              className="bg-brand-red px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#a50d25]"
            >
              Contact Us
            </Link>
            <Link
              href="/become-a-dealer/"
              className="border border-brand-dark px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-brand-dark transition hover:border-brand-red hover:text-brand-red"
            >
              Become a Dealer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
