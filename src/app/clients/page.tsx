import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <PageBanner
        title="Clients"
        subtitle="Trusted by OEMs, utilities, institutions and industry leaders across India."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/clients/logos.jpg"
          alt="OCLEG client brand logos"
          className="w-full"
        />
      </div>
    </>
  );
}
