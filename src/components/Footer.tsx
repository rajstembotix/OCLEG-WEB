import Link from "next/link";
import { categories, company } from "@/data/catalog";
import { VisitorCounter } from "@/components/VisitorCounter";

export function Footer() {
  return (
    <footer className="mt-0 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-3">
          {/* Real uploaded logo — large on white so exact fonts/colors stay visible */}
          <div className="mb-5 inline-block bg-white px-5 py-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/Ocleg-Logo.jpeg"
              alt="OCLEG Electronics"
              className="h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>
          <p className="font-display text-xl text-brand-red">
            {company.hindi}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            {company.taglineLead} {company.taglineRest}
          </p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 font-display text-lg tracking-wide">Product Range</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            {categories.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}/`}
                  className="transition hover:text-white"
                >
                  {c.number}. {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/products/"
                className="font-semibold text-brand-red hover:text-white"
              >
                View all products →
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 font-display text-lg tracking-wide">Contact</h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            {company.address}
          </p>

          <div className="mt-3 space-y-1.5 text-sm">
            <a
              href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
              className="block font-medium text-brand-red transition hover:text-white"
            >
              📞 {company.phone}
            </a>
            {company.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="block text-brand-red transition hover:text-white"
              >
                ✉️ {email}
              </a>
            ))}
            <a
              href="https://www.oclegelectronics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-medium text-brand-red transition hover:text-white"
            >
              🌐 www.oclegelectronics.com
            </a>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-[#25D366] transition hover:text-white"
            >
              <span>💬 WhatsApp: {company.phone}</span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-400">
            <Link href="/careers/" className="hover:text-white">
              Career
            </Link>
            <Link href="/become-a-dealer/" className="hover:text-white">
              Become a Dealer
            </Link>
            <Link href="/contact/" className="hover:text-white">
              Enquire
            </Link>
          </div>
        </div>

        {/* Live Visitor Counter */}
        <div className="lg:col-span-3">
          <VisitorCounter />
        </div>
      </div>
      <div className="bg-brand-red py-3 text-center text-sm text-white">
        © {new Date().getFullYear()} {company.legal}, Ahmedabad. All rights
        reserved.
      </div>
    </footer>
  );
}
