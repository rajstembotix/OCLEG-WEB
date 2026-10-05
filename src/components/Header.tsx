"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories, company } from "@/data/catalog";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "Company" },
  { href: "/products/", label: "Products" },
  { href: "/clients/", label: "Clients" },
  { href: "/careers/", label: "Career" },
  { href: "/become-a-dealer/", label: "Become a Dealer" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-brand-line bg-white/95 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 lg:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          {/* Real uploaded logo file — large */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/Ocleg-Logo.jpeg"
            alt="OCLEG Electronics"
            className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-[6.5rem]"
          />
          <span className="hidden h-12 w-px bg-brand-line sm:block" />
          <span className="hidden font-display text-base font-semibold leading-none text-brand-red sm:block md:text-lg lg:text-xl">
            {company.hindi}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {links.map((link) =>
            link.href === "/products/" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="whitespace-nowrap px-2 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-dark hover:text-brand-red xl:px-3"
                  onClick={() => setProductsOpen(false)}
                >
                  {link.label}
                </Link>
                {productsOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-3">
                    <div className="max-h-[70vh] overflow-auto border border-brand-line bg-white p-2 shadow-lg">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/products/${c.slug}/`}
                          className="block px-3 py-2 text-left text-[13px] font-medium text-brand-dark hover:bg-brand-soft hover:text-brand-red"
                          onClick={() => setProductsOpen(false)}
                        >
                          <span className="mr-2 text-brand-red">{c.number}.</span>
                          {c.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-2 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-dark hover:text-brand-red xl:px-3"
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href="/OCLEG-Brochure.pdf"
            className="ml-2 whitespace-nowrap bg-brand-red px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#a50d25]"
          >
            Brochure
          </a>
        </nav>

        <button
          className="inline-flex flex-col items-center justify-center gap-1.5 border border-brand-line p-2.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-5 bg-brand-dark transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-brand-dark transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-brand-dark transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-auto border-t border-brand-line bg-white px-4 py-4 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-brand-line py-3 text-sm font-semibold uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/OCLEG-Brochure.pdf"
            className="mt-4 block bg-brand-red py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
            onClick={() => setOpen(false)}
          >
            Download Brochure
          </a>
          <p className="mt-6 mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Categories
          </p>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}/`}
              className="block py-1.5 text-sm text-brand-muted"
              onClick={() => setOpen(false)}
            >
              {c.number}. {c.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
