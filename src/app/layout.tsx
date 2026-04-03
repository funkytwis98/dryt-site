import type { Metadata } from "next";
import { Sora, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DRYT® — The Comfy You Deserve | Premium Paper Products",
  description:
    "Premium ultra-soft toilet paper and home essentials by DRYT®. Sustainably sourced wood pulp, non-toxic, woman-owned. Shop on Amazon.",
  keywords: [
    "DRYT",
    "toilet paper",
    "paper towels",
    "premium paper products",
    "ultra soft",
    "eco-friendly",
    "woman-owned",
    "Velazon Enterprise",
  ],
  openGraph: {
    title: "DRYT® — The Comfy You Deserve",
    description:
      "Premium ultra-soft toilet paper and home essentials. Sustainably sourced, non-toxic, woman-owned.",
    type: "website",
    locale: "en_US",
    siteName: "DRYT®",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${instrumentSerif.variable} ${plusJakarta.variable}`}
    >
      <body className="font-sans text-text bg-bg antialiased">{children}</body>
    </html>
  );
}
