import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company } from "@/data/catalog";

export const metadata: Metadata = { title: "Career" };

export default function CareersPage() {
  return (
    <>
      <PageBanner
        kicker={company.name}
        title="Career"
        subtitle="Join a team of engineers and technocrats with decades of experience in control gear."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-2 lg:px-6">
        <div>
          <p className="text-lg leading-relaxed text-brand-muted">
            We welcome applications from people who care about quality,
            reliability and prompt service — the same values that define OCLEG
            products.
          </p>
          <p className="mt-6 leading-relaxed text-brand-dark">
            Fill in the form and attach your resume and cover letter (PDF, DOC or DOCX, max 5 MB each). Your
            email app will open with the details — attach the files
            before sending.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Engineering & production",
              "Quality & testing",
              "Sales & dealer support",
              "Customer care & logistics",
            ].map((item) => (
              <li key={item} className="spec-bullet flex gap-3 text-brand-dark">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <EnquiryForm kind="career" />
      </div>
    </>
  );
}
