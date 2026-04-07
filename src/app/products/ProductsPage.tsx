"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const AMAZON_URL = "https://www.amazon.com/dp/B0DKCV6QHB";
const WALMART_URL = "https://www.walmart.com/ip/12211816559";

/* Shared icon components */
function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BuyButtons() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <a
        href={AMAZON_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-[0_4px_16px_rgb(21,101,168,0.25)]"
      >
        Buy on Amazon
        <ExternalIcon />
      </a>
      <a
        href={WALMART_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-walmart hover:bg-walmart-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-[0_4px_16px_rgb(0,113,206,0.25)]"
      >
        Buy on Walmart
        <ExternalIcon />
      </a>
    </div>
  );
}

function SpecBadge({ children }: { children: string }) {
  return (
    <span className="bg-primary-light text-primary text-xs font-bold px-3.5 py-1.5 rounded-full">
      {children}
    </span>
  );
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-bg">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary-light/60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-light/50 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Our Products
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark leading-[1.1] mb-5">
              The full DRYT®{" "}
              <em className="font-serif-accent not-italic text-accent">
                family.
              </em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-mid max-w-xl mx-auto leading-relaxed">
              Premium home essentials crafted for softness, strength, and
              sustainability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Toilet Paper */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative bg-gradient-to-br from-primary-light to-accent-light/30 rounded-3xl p-10 lg:p-14 flex items-center justify-center min-h-[360px]">
                <span className="absolute top-6 left-8 font-heading text-[100px] lg:text-[140px] font-extrabold text-white/40 leading-none select-none">
                  350
                </span>
                <div className="relative z-10">
                  <Image
                    src="/images/toilet-paper-hero.png"
                    alt="DRYT Ultra Soft Toilet Paper 12-pack"
                    width={450}
                    height={450}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight mb-4">
                  Ultra Soft Toilet Paper
                </h2>
                <p className="text-lg text-text-mid leading-relaxed mb-6">
                  Crafted from premium wood pulp, our Ultra Soft toilet paper
                  delivers a gentle, luxurious feel on every sheet. The 2-ply
                  construction provides the perfect balance of strength and
                  softness for your family&apos;s comfort.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "350 Sheets per Roll",
                    "2-Ply",
                    "Wood Pulp",
                    "10cm × 10cm",
                    "12-Roll Pack",
                    "Eco-Friendly",
                  ].map((s) => (
                    <SpecBadge key={s}>{s}</SpecBadge>
                  ))}
                </div>
                <BuyButtons />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Paper Towels */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight mb-4">
                  Soft &amp; Strong Paper Towels
                </h2>
                <p className="text-lg text-text-mid leading-relaxed mb-6">
                  Our paper towels combine absorbency with durability. Whether
                  you&apos;re cleaning up spills or handling everyday kitchen
                  tasks, DRYT paper towels get the job done without tearing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "100 Sheets per Roll",
                    "2-Ply",
                    "Wood Pulp",
                    "27.9cm × 15cm",
                    "2-Roll Pack",
                    "Eco-Friendly",
                  ].map((s) => (
                    <SpecBadge key={s}>{s}</SpecBadge>
                  ))}
                </div>
                <BuyButtons />
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-accent-light to-primary-light/30 rounded-3xl p-10 lg:p-14 flex items-center justify-center min-h-[360px]">
                <Image
                  src="/images/paper-towels.png"
                  alt="DRYT Soft and Strong Paper Towels 2-pack"
                  width={450}
                  height={450}
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disposable Plates */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-primary-light/30 rounded-3xl p-10 lg:p-14 flex items-center justify-center min-h-[320px]">
                  <Image
                    src="/images/plates-clean.png"
                    alt="DRYT 10-inch disposable plates — white plates stacked on clean background"
                    width={450}
                    height={450}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div className="bg-gradient-to-br from-accent-light/50 to-emerald-50/50 rounded-2xl p-6 flex items-center justify-center">
                  <Image
                    src="/images/plates-lifestyle.png"
                    alt="DRYT disposable plates with food — lifestyle shot showing everyday use"
                    width={400}
                    height={250}
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight mb-4">
                  10&quot; Disposable Plates
                </h2>
                <p className="text-lg text-text-mid leading-relaxed mb-6">
                  Our disposable plates are made from 100% sugarcane fiber —
                  sturdy, eco-friendly, and fully compostable. They&apos;re
                  non-toxic, BPA-free, and can handle everything from microwave
                  reheating to freezer storage. The responsible choice for your
                  next gathering.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    '10" Diameter',
                    "100% Sugarcane Fiber",
                    "Non-Toxic",
                    "BPA Free",
                    "50 Count",
                    "Microwave & Freezer Safe",
                    "Waterproof",
                    "Oil-Proof & Leak-Proof",
                    "100% Compostable",
                    "Made in the USA",
                  ].map((s) => (
                    <SpecBadge key={s}>{s}</SpecBadge>
                  ))}
                </div>
                <BuyButtons />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Liquid Detergent */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight mb-4">
                  Liquid Detergent
                </h2>
                <p className="text-lg text-text-mid leading-relaxed mb-6">
                  DRYT liquid detergent delivers a powerful clean without harsh
                  chemicals. Designed for efficiency and safety, it&apos;s tough
                  on stains but gentle on fabrics and the environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Powerful Clean", "Non-Toxic Formula", "Eco-Friendly"].map(
                    (s) => (
                      <SpecBadge key={s}>{s}</SpecBadge>
                    )
                  )}
                </div>
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 bg-primary-light text-primary font-semibold px-7 py-3.5 rounded-full text-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 lg:p-14 flex flex-col items-center justify-center min-h-[360px]">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <span className="text-4xl font-heading font-extrabold text-white">
                      D
                    </span>
                  </div>
                  <p className="text-white/80 font-heading font-bold text-xl">
                    DRYT® Liquid Detergent
                  </p>
                  <p className="text-white/40 text-sm mt-2">
                    Product image coming soon
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Can&apos;t decide?{" "}
              <em className="font-serif-accent not-italic text-accent">
                Try them all.
              </em>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Contact us for bulk orders and wholesale pricing on the full
              DRYT® product lineup.
            </p>
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-glow text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-[0_4px_24px_rgb(232,114,42,0.3)]"
            >
              Wholesale Inquiries
              <ArrowIcon />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
