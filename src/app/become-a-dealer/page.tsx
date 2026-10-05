import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company, companyProfile } from "@/data/catalog";

export const metadata: Metadata = { title: "Become a Dealer" };

export default function BecomeDealerPage() {
  return (
    <>
      <PageBanner
        kicker={company.name}
        title="Become a Dealer"
        subtitle="Grow with a trusted Ahmedabad manufacturer of electronic control and switchgear products."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-2 lg:px-6">
        <div>
          <p className="text-lg leading-relaxed text-brand-muted">
            OCLEG partners with dealers and distributors who share our focus on{" "}
            {companyProfile.commitments
              .map((c) => c.toLowerCase())
              .slice(0, 3)
              .join(", ")}
            , and excellent service.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Access to a full brochure-backed product range",
              "Precision manufacturing & engineering support",
              "Technical guidance for pumps, motors and panels",
              "Prompt delivery schedules from Ahmedabad",
            ].map((item) => (
              <li key={item} className="spec-bullet flex gap-3 text-brand-dark">
                {item}
              </li>
            ))}
          </ul>
          <a
            href="/OCLEG-Brochure.pdf"
            className="mt-10 inline-block border border-brand-dark px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-brand-dark transition hover:border-brand-red hover:text-brand-red"
          >
            Download Brochure
          </a>
        </div>
        <EnquiryForm kind="dealer" />
      </div>
    </>
  );
}
