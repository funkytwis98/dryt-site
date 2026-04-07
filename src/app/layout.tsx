import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tom Integrations — AI for Small Business",
  description:
    "Never miss another call. AI receptionist and social media management for small businesses in Chattanooga and beyond.",
  openGraph: {
    title: "Tom Integrations — AI for Small Business",
    description:
      "Never miss another call. AI receptionist and social media management for small businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Tom Integrations",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body text-primary antialiased">
        {children}
        <script
          src="https://ai-receptionist-snowy.vercel.app/api/tracking-script/a239e44b-70da-462b-863d-ace97be36d80"
          async
        />
      </body>
    </html>
  );
}
