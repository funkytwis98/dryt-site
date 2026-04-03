import ScrollReveal from "./ScrollReveal";

const AMAZON_URL = "https://www.amazon.com/dp/B0DKCV6QHB";

const specs = [
  { label: "Sheets per Roll", value: "350" },
  { label: "Ply", value: "2-Ply" },
  { label: "Material", value: "Wood Pulp" },
  { label: "Pack Size", value: "12 Rolls" },
];

export default function FeaturedProduct() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_-12px_rgb(0,0,0,0.08)] grid lg:grid-cols-2">
            {/* Left — Image area */}
            <div className="relative bg-gradient-to-br from-primary-light to-accent-light/30 p-12 flex items-center justify-center min-h-[360px]">
              <span className="absolute top-6 left-8 font-heading text-[120px] lg:text-[160px] font-extrabold text-white/40 leading-none select-none">
                350
              </span>
              <div className="relative z-10 text-center">
                <span className="text-7xl block mb-3">🧻</span>
                <span className="text-sm font-medium text-text-mid">
                  Product Photo
                </span>
              </div>
            </div>

            {/* Right — Details */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block bg-accent-light text-accent text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6 w-fit">
                Bestseller on Amazon
              </span>
              <h3 className="font-heading text-3xl lg:text-4xl font-extrabold text-dark tracking-tight mb-8">
                Dryt Ultra Soft
                <br />
                Toilet Paper
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="bg-bg rounded-xl px-4 py-3.5"
                  >
                    <span className="block text-xs text-text-mid font-medium mb-0.5">
                      {s.label}
                    </span>
                    <span className="font-heading font-bold text-dark">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-[0_4px_16px_rgb(21,101,168,0.25)] w-fit"
              >
                Buy on Amazon
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
