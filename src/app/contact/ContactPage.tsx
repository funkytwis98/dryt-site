"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Product Question",
  "Wholesale/Bulk Orders",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-bg">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-primary-light/60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-light/50 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Get in Touch
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark leading-[1.1] mb-5">
              We&apos;d love to{" "}
              <em className="font-serif-accent not-italic text-accent">
                hear
              </em>{" "}
              from you.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-mid max-w-xl mx-auto leading-relaxed">
              Have a question, suggestion, or want to explore a partnership?
              We&apos;re here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="bg-bg rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="font-heading text-2xl font-extrabold text-dark mb-2">
                      Message sent!
                    </h3>
                    <p className="text-text-mid">
                      Thanks for reaching out. We&apos;ll get back to you within
                      1–2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Subject
                      </label>
                      <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white">
                        <option value="">Select a topic</option>
                        {SUBJECT_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        rows={6}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none bg-white"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent-glow text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-[0_4px_16px_rgb(232,114,42,0.25)] text-sm cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Right: Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  icon: "✉️",
                  title: "Email",
                  content: (
                    <a
                      href="mailto:emailus@dryt.us"
                      className="text-text-mid hover:text-primary transition-colors text-sm"
                    >
                      emailus@dryt.us
                    </a>
                  ),
                },
                {
                  icon: "📍",
                  title: "Location",
                  content: (
                    <p className="text-text-mid text-sm">
                      Ooltewah, Tennessee 37363
                    </p>
                  ),
                },
                {
                  icon: "🕐",
                  title: "Hours",
                  content: (
                    <div>
                      <p className="text-text-mid text-sm">
                        Sunday – Friday: 9am – 5pm
                      </p>
                      <p className="text-text-mid/60 text-sm">
                        Saturday: Closed
                      </p>
                    </div>
                  ),
                },
                {
                  icon: "💬",
                  title: "Social",
                  content: (
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-mid hover:text-primary hover:border-primary transition-colors text-sm"
                      >
                        Fb
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-mid hover:text-primary hover:border-primary transition-colors text-sm"
                      >
                        Ig
                      </a>
                    </div>
                  ),
                },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 100}>
                  <div className="bg-bg rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-lg">
                        {card.icon}
                      </div>
                      <h3 className="font-heading font-bold text-dark">
                        {card.title}
                      </h3>
                    </div>
                    {card.content}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary-light/50 to-primary-light/20 rounded-3xl h-80 flex flex-col items-center justify-center border-2 border-dashed border-primary/15">
              <span className="text-4xl mb-4">📍</span>
              <p className="font-heading text-xl font-extrabold text-dark">
                Ooltewah, Tennessee
              </p>
              <p className="text-text-mid text-sm mt-1">
                Chattanooga Metropolitan Area
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-dark leading-[1.1] mb-5">
              Looking for{" "}
              <em className="font-serif-accent not-italic text-accent">
                wholesale
              </em>{" "}
              pricing?
            </h2>
            <p className="text-lg text-text-mid mb-8">
              We offer competitive bulk pricing for retailers and distributors.
            </p>
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-[0_4px_16px_rgb(21,101,168,0.25)]"
            >
              Wholesale Inquiries
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
