import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { company } from "@/data/catalog";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oclegelectronics.com"),
  title: {
    default: "OCLEG Electronics | Control Panels, Starters & Switchgear",
    template: "%s | OCLEG Electronics",
  },
  description:
    "OCLEG CONTROLS, based in Ahmedabad. Manufacturer of electronic control and switchgear products for pumps, motors, farms, and industry.",
  keywords: [
    "OCLEG",
    "OCLEG Electronics",
    "OCLEG Controls",
    "control panel",
    "motor starter",
    "submersible pump panel",
    "Ahmedabad",
  ],
  openGraph: {
    title: "OCLEG Electronics",
    description:
      "Empowering Technologies Through Innovations. Electronic control and switchgear products from Ahmedabad.",
    url: "https://www.oclegelectronics.com",
    siteName: company.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
