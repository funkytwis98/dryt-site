import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const AMAZON_URL = "https://www.amazon.com/dp/B0DKCV6QHB";
const WALMART_URL = "https://www.walmart.com/ip/12211816559";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-bg">
      {/* Background gradient blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary-light/60 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-light/50 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left column */}
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 bg-white border border-primary-light rounded-full px-4 py-2 mb-7 shadow-[0_1px_3px_rgb(0,0,0,0.04)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-[11px] font-semibold tracking-[0.15em] text-text-mid uppercase">
                Woman-Owned&ensp;·&ensp;Tennessee
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-heading text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold tracking-[-0.025em] text-dark leading-[1.08] mb-6">
              The{" "}
              <em className="font-serif-accent not-italic text-accent">
                Comfy
              </em>
              <br />
              You Deserve.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-text-mid max-w-md mb-8 leading-relaxed">
              Premium ultra-soft toilet paper made from sustainably sourced wood
              pulp. Gentle on your family, gentle on the planet.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-[0_4px_16px_rgb(21,101,168,0.3)]"
              >
                Shop on Amazon
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
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
              <a
                href={WALMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-walmart hover:bg-walmart-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-[0_4px_16px_rgb(0,113,206,0.3)]"
              >
                Shop on Walmart
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
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-primary-light/50 transition-colors"
              >
                View Products
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex items-center gap-6 sm:gap-8">
              {[
                { value: "350+", label: "Sheets/Roll" },
                { value: "2-Ply", label: "Thickness" },
                { value: "12pk", label: "Per Package" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <div className="w-px h-10 bg-primary-light" />}
                  <div>
                    <span className="block text-2xl font-heading font-extrabold text-dark">
                      {stat.value}
                    </span>
                    <span className="text-sm text-text-mid">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right column — Product image */}
        <ScrollReveal className="relative" delay={200}>
          <div className="relative max-w-lg mx-auto">
            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary-light via-white to-accent-light flex items-center justify-center shadow-[0_20px_60px_-15px_rgb(21,101,168,0.15)] overflow-hidden p-8">
              <Image
                src="/images/toilet-paper-hero.png"
                alt="DRYT Ultra Soft Toilet Paper 12-roll package"
                width={500}
                height={500}
                className="object-contain w-full h-full drop-shadow-lg"
                priority
              />
            </div>

            {/* Floating tags */}
            <div className="absolute -top-3 right-2 lg:right-8 bg-white shadow-lg shadow-primary/5 rounded-full px-4 py-2 text-xs font-bold text-primary animate-float">
              ✨ Ultra Soft
            </div>
            <div className="absolute top-1/3 -left-3 lg:-left-5 bg-white shadow-lg shadow-primary/5 rounded-full px-4 py-2 text-xs font-bold text-emerald-600 animate-float-delayed">
              🌿 Eco-Friendly
            </div>
            <div className="absolute bottom-16 -right-1 lg:right-4 bg-white shadow-lg shadow-accent/10 rounded-full px-4 py-2 text-xs font-bold text-accent animate-float-slow">
              🛡️ Non-Toxic
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
