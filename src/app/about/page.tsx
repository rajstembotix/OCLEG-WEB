import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { company, companyProfile } from "@/data/catalog";

export const metadata: Metadata = { title: "Company Profile" };

export default function AboutPage() {
  return (
    <>
      <PageBanner
        kicker={company.name}
        title="Company Profile"
        subtitle="Pioneer and leader in electronic control and switchgear products from Ahmedabad."
      />
      <div className="mx-auto max-w-5xl px-4 py-14 lg:px-6">
        <p className="text-lg leading-relaxed text-brand-dark md:text-xl">
          {companyProfile.intro}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <div className="section-rule mb-4">
              <h2 className="font-display text-2xl text-brand-red">Mission</h2>
            </div>
            <p className="leading-relaxed text-brand-muted">
              {companyProfile.mission}
            </p>
          </div>
          <div>
            <div className="section-rule mb-4">
              <h2 className="font-display text-2xl text-brand-red">Team</h2>
            </div>
            <p className="leading-relaxed text-brand-muted">
              {companyProfile.team}
            </p>
          </div>
        </div>

        <h2 className="mt-14 font-display text-2xl text-brand-red md:text-3xl">
          &quot;OCLEG&quot; Is Committed To Offer Our Customers Worldwide
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {companyProfile.commitments.map((item) => (
            <li
              key={item}
              className="border-l-2 border-brand-red bg-brand-soft px-5 py-4 font-display text-xl tracking-wide"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-10 leading-relaxed text-brand-muted">
          {companyProfile.quality}
        </p>
        <p className="mt-6 leading-relaxed text-brand-muted">
          {companyProfile.infrastructure}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/factory-molding.jpg"
            alt="Production machinery"
            className="h-64 w-full object-cover md:h-80"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/factory-winding.jpg"
            alt="Winding machinery"
            className="h-64 w-full object-cover md:h-80"
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/products/"
            className="bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#a50d25]"
          >
            View Products
          </Link>
          <Link
            href="/contact/"
            className="border border-brand-dark px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-brand-dark hover:border-brand-red hover:text-brand-red"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
