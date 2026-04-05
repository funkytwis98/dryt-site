"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const PRODUCTS_LIST = [
  "Toilet Paper",
  "Paper Towels",
  "Disposable Plates",
  "Liquid Detergent",
];

const VOLUME_OPTIONS = [
  "Under 100 units",
  "100 – 500 units",
  "500 – 1,000 units",
  "1,000+ units",
];

const PRODUCT_GRID = [
  {
    name: "Ultra Soft Toilet Paper",
    image: "/images/toilet-paper-hero.png",
    specs: "12-roll pack · 350 sheets · 2-ply",
    gradient: "from-primary-light to-blue-50",
  },
  {
    name: "Paper Towels",
    image: "/images/paper-towels.png",
    specs: "2-roll pack · 100 sheets · 2-ply",
    gradient: "from-accent-light to-orange-50",
  },
  {
    name: "Disposable Plates",
    image: "/images/plates-clean.png",
    specs: '50 count · 10" · Compostable',
    gradient: "from-emerald-50 to-green-50",
  },
  {
    name: "Liquid Detergent",
    image: null as string | null,
    specs: "Non-toxic · Eco-friendly",
    gradient: "from-purple-50 to-violet-50",
    emoji: "🧴",
  },
];

const FORM_ENDPOINT =
  "https://ai-receptionist-snowy.vercel.app/api/webhooks/form-submission";
const CLIENT_ID = "a239e44b-70da-462b-863d-ace97be36d80";

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function toggleProduct(p: string) {
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const parts = [
      `Business: ${formData.get("business_name")}`,
      selectedProducts.length > 0
        ? `Products: ${selectedProducts.join(", ")}`
        : null,
      formData.get("volume")
        ? `Volume: ${formData.get("volume")}`
        : null,
      formData.get("message")
        ? String(formData.get("message"))
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        name: formData.get("contact_name"),
        email: formData.get("email"),
        phone: formData.get("phone") || undefined,
        message: parts,
        service: "Wholesale Inquiry",
      }),
    }).catch(() => {});

    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-bg">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary-light/60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-light/50 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              For Businesses
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark leading-[1.1] mb-5">
              Wholesale{" "}
              <em className="font-serif-accent not-italic text-accent">
                partnerships.
              </em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-mid max-w-2xl mx-auto leading-relaxed">
              We supply retailers, distributors, and businesses nationwide with
              premium DRYT® products at competitive wholesale pricing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                Why Partner With Us
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-dark">
                Why wholesale with{" "}
                <em className="font-serif-accent not-italic text-accent">
                  DRYT®
                </em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                bg: "bg-amber-50",
                title: "Competitive Pricing",
                desc: "Volume discounts on the full DRYT® product lineup.",
              },
              {
                icon: "🚚",
                bg: "bg-primary-light",
                title: "Reliable Supply",
                desc: "Consistent inventory and dependable fulfillment for your business.",
              },
              {
                icon: "📦",
                bg: "bg-accent-light",
                title: "Full Product Range",
                desc: "Toilet paper, paper towels, disposable plates, and liquid detergent — all from one supplier.",
              },
              {
                icon: "📣",
                bg: "bg-emerald-50",
                title: "Marketing Support",
                desc: "Professional product photography and brand materials to support your retail presence.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="value-card bg-bg rounded-2xl p-8 h-full">
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

      {/* Product Grid */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-dark">
                Available Products
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_GRID.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_-4px_rgb(0,0,0,0.06)]">
                  <div
                    className={`bg-gradient-to-br ${product.gradient} h-48 flex items-center justify-center p-6`}
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={`DRYT ${product.name} — wholesale`}
                        width={180}
                        height={180}
                        className="object-contain drop-shadow-md"
                      />
                    ) : (
                      <span className="text-6xl">
                        {"emoji" in product ? product.emoji : ""}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-dark text-sm mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-text-mid">{product.specs}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Show */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/trade-show.png"
                alt="DRYT booth at a retail trade show — meeting distributors and retail partners"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
                See us at{" "}
                <em className="font-serif-accent not-italic text-accent">
                  trade shows
                </em>
              </h2>
              <p className="text-lg text-text-mid leading-relaxed">
                DRYT® actively participates in major retail trade shows across
                the country. Meet our team, see our products firsthand, and
                discuss partnership opportunities. We&apos;re committed to
                building lasting relationships with retailers and distributors
                who share our vision for quality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 lg:py-32 bg-bg" id="inquiry">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                Get Started
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-dark">
                Submit a wholesale{" "}
                <em className="font-serif-accent not-italic text-accent">
                  inquiry
                </em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-[0_4px_20px_-6px_rgb(0,0,0,0.06)] text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-dark mb-2">
                  Thank you!
                </h3>
                <p className="text-text-mid">
                  We&apos;ve received your inquiry and will be in touch within
                  1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_20px_-6px_rgb(0,0,0,0.06)] space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Business Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="business_name"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Contact Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-2.5">
                    Products Interested In
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {PRODUCTS_LIST.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => toggleProduct(p)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition cursor-pointer ${
                          selectedProducts.includes(p)
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-text-mid border-gray-200 hover:border-primary"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Estimated Monthly Volume
                  </label>
                  <select
                    name="volume"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
                  >
                    <option value="">Select volume range</option>
                    {VOLUME_OPTIONS.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none bg-white"
                    placeholder="Tell us about your business and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent hover:bg-accent-glow text-white font-semibold py-4 rounded-full transition-colors shadow-[0_4px_16px_rgb(232,114,42,0.25)] text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={200}>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-lg">
                  ✉️
                </div>
                <a
                  href="mailto:emailus@dryt.us"
                  className="text-sm text-text-mid hover:text-primary transition-colors"
                >
                  emailus@dryt.us
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-lg">
                  📍
                </div>
                <span className="text-sm text-text-mid">
                  Ooltewah, Tennessee
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-lg">
                  🕐
                </div>
                <span className="text-sm text-text-mid">
                  Sun–Fri 9am–5pm
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
