import { PageBanner } from "@/components/PageBanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company } from "@/data/catalog";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        subtitle="Reach OCLEG Controls in Ahmedabad for product support, quotations and dealer enquiries."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-2 lg:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            MFG BY
          </p>
          <h2 className="mt-2 font-display text-3xl italic text-brand-red md:text-4xl">
            {company.legal}
          </h2>
          <p className="mt-6 leading-relaxed text-brand-dark">{company.address}</p>

          <div className="mt-4 space-y-2">
            <a
              href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
              className="block font-medium text-brand-red hover:underline"
            >
              📞 {company.phone}
            </a>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-emerald-600 hover:underline"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-white">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.981-1.399C8.423 21.492 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.637 0-3.15-.494-4.417-1.343l-.317-.213-2.955.829.833-2.868-.225-.333C4.015 15.025 3.5 13.565 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
                </svg>
              </span>
              <span>WhatsApp: {company.phone}</span>
            </a>
            {company.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="block font-medium text-brand-red hover:underline"
              >
                ✉️ {email}
              </a>
            ))}
          </div>

          {/* Dedicated WhatsApp Chat Box */}
          <div className="mt-8 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)]">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.981-1.399C8.423 21.492 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.637 0-3.15-.494-4.417-1.343l-.317-.213-2.955.829.833-2.868-.225-.333C4.015 15.025 3.5 13.565 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold tracking-wide text-neutral-900">
                  Chat on WhatsApp
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Connect instantly with our team for quick quotes, brochures, and technical product assistance.
                </p>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-[#20ba59] hover:shadow-md"
                >
                  <span>Open WhatsApp Chat ({company.phone})</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-brand-muted">{company.site}</p>
          <a
            href="/OCLEG-Brochure.pdf"
            className="mt-6 inline-block bg-brand-red px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#a50d25]"
          >
            Download Brochure
          </a>
        </div>
        <EnquiryForm kind="contact" />
      </div>
    </>
  );
}
