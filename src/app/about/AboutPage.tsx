"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-bg">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-primary-light/60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-light/50 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Our Story
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark leading-[1.1] mb-5">
              Built with{" "}
              <em className="font-serif-accent not-italic text-accent">
                heart
              </em>{" "}
              in Tennessee.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-mid max-w-xl mx-auto leading-relaxed">
              A woman-owned business on a mission to deliver premium home
              essentials families can trust.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/mary-ann.png"
                  alt="Mary Ann Tuazon — Founder and CEO of Velazon Enterprise LLC and the DRYT brand"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>

              {/* Floating info cards */}
              <div className="absolute -top-4 -right-4 lg:-right-8 bg-white shadow-lg rounded-2xl px-5 py-4 animate-float">
                <p className="text-xs font-bold text-accent uppercase tracking-wider">
                  Woman-Owned
                </p>
                <p className="text-sm text-text-mid mt-0.5">
                  Certified business
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white shadow-lg rounded-2xl px-5 py-4 animate-float-delayed">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">
                  Ooltewah, TN
                </p>
                <p className="text-sm text-text-mid mt-0.5">Local roots</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                Meet the Founder
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight leading-[1.1] mb-2">
                Mary Ann Tuazon
              </h2>
              <p className="text-primary font-semibold mb-6">
                Founder &amp; CEO, Velazon Enterprise LLC
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg text-text-mid leading-relaxed mb-5">
                Established in 2023, DRYT® began with a simple mission: to
                deliver premium home essentials that families can trust. As a
                woman-owned business based in Ooltewah, Tennessee, Mary Ann built
                Velazon Enterprise on the belief that quality products
                shouldn&apos;t come at the cost of safety or sustainability.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-text-mid leading-relaxed">
                From sourcing materials to final packaging, every step reflects a
                commitment to excellence, non-toxicity, and eco-friendly
                practices. What started as a vision for better paper products has
                grown into a full lineup of home essentials — toilet paper, paper
                towels, disposable plates, and liquid detergents — all carrying
                the DRYT® trademark and the promise of comfort you can rely on.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                What We Stand For
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-dark">
                Our{" "}
                <em className="font-serif-accent not-italic text-accent">
                  values.
                </em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⭐",
                bg: "bg-amber-50",
                title: "Quality First",
                desc: "Every product meets the highest standards of fine finish, non-toxicity, and dimensional accuracy.",
              },
              {
                icon: "🌿",
                bg: "bg-emerald-50",
                title: "Sustainability",
                desc: "From sourcing to packaging, we uphold sustainability in all aspects of our business.",
              },
              {
                icon: "💛",
                bg: "bg-accent-light",
                title: "Customer Satisfaction",
                desc: "Our top priority. We believe technological innovation is the key to sustainable development.",
              },
              {
                icon: "👩‍💼",
                bg: "bg-primary-light",
                title: "Made with Care",
                desc: "Woman-owned, community-driven, and proud to serve families and businesses nationwide.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="value-card bg-white rounded-2xl p-8 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center text-xl mb-5`}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-text-mid leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Show */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                Growing Nationwide
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
                Taking DRYT®{" "}
                <em className="font-serif-accent not-italic text-accent">
                  nationwide.
                </em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg text-text-mid leading-relaxed mb-5">
                DRYT® has been proudly exhibiting at major retail trade shows,
                including the Grand Retail Show, connecting with distributors and
                retailers across the country. Our growing presence reflects our
                commitment to making premium home essentials accessible to every
                household.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-text-mid leading-relaxed">
                We&apos;re building partnerships with distributors and retail
                chains to bring DRYT® products to store shelves nationwide — from
                local shops to major retailers.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/trade-show.png"
                alt="DRYT booth at the Grand Retail Show — showcasing products to distributors and retailers"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: "2023", label: "Founded" },
              { value: "Ooltewah, TN", label: "Headquarters" },
              { value: "4+", label: "Product Lines" },
              { value: "DRYT®", label: "Registered Trademark" },
              { value: "Yes", label: "Woman-Owned" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col items-center">
                <span className="text-xl font-heading font-extrabold text-white">
                  {m.value}
                </span>
                <span className="text-sm text-white/60 mt-1">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-dark leading-[1.1] mb-6">
              Want to{" "}
              <em className="font-serif-accent not-italic text-accent">
                partner
              </em>{" "}
              with us?
            </h2>
            <p className="text-lg text-text-mid max-w-xl mx-auto mb-10 leading-relaxed">
              We&apos;re always looking for retailers and distributors who share
              our commitment to quality.
            </p>
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-glow text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-[0_4px_24px_rgb(232,114,42,0.3)]"
            >
              Wholesale Partnerships
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
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
