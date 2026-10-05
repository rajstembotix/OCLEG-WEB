import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { categories } from "@/data/catalog";

export const metadata: Metadata = { title: "Product Range" };

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Product Range"
        subtitle="Electronic control panels, starters, switchgear and protection devices — matched to the OCLEG brochure."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="overflow-hidden border border-brand-line">
          <div className="grid grid-cols-[1fr_auto] bg-brand-red text-white">
            <div className="px-5 py-3.5 font-display tracking-wide">Product</div>
            <div className="px-5 py-3.5 font-display tracking-wide">Models</div>
          </div>
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}/`}
              className={`grid grid-cols-[1fr_auto] items-center border-t border-brand-line transition hover:bg-red-50 ${
                i % 2 ? "bg-brand-soft/60" : "bg-white"
              }`}
            >
              <div className="px-5 py-4 font-display text-base tracking-wide md:text-lg">
                <span className="mr-2 text-brand-red">{c.number}.</span>
                {c.title}
              </div>
              <div className="px-5 py-4 text-sm text-brand-muted">
                {c.products.length}{" "}
                {c.products.length === 1 ? "model" : "models"}
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Need a printed catalogue?{" "}
          <a
            href="/OCLEG-Brochure.pdf"
            className="font-semibold text-brand-red hover:underline"
          >
            Download the OCLEG brochure (PDF)
          </a>
          .
        </p>
      </div>
    </>
  );
}
