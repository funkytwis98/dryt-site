import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function WholesaleCTA() {
  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background trade show photo */}
      <Image
        src="/images/trade-show.png"
        alt="DRYT booth at retail trade show"
        fill
        className="object-cover opacity-10 pointer-events-none"
      />
      {/* Background blob decorations */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
            For Businesses
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Need{" "}
            <em className="font-serif-accent not-italic text-accent">bulk</em>{" "}
            orders?
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            We supply hotels, offices, restaurants, and retailers with premium
            DRYT® products at wholesale pricing. Let&apos;s talk about your
            needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-glow text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-[0_4px_24px_rgb(232,114,42,0.3)]"
          >
            Contact for Wholesale Pricing
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
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
