import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "2023", label: "Founded" },
  { value: "DRYT®", label: "Registered" },
  { value: "4+", label: "Product Lines" },
];

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Photo area */}
        <ScrollReveal>
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/mary-ann.png"
                alt="Mary Ann Tuazon, founder of DRYT® and Velazon Enterprise LLC"
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

        {/* Right — Copy */}
        <div>
          <ScrollReveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-dark leading-[1.1] mb-6">
              Built with{" "}
              <em className="font-serif-accent not-italic text-accent">
                heart
              </em>{" "}
              in Tennessee.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg text-text-mid leading-relaxed mb-8">
              DRYT® was founded in 2023 by Mary Ann Tuazon with a simple
              mission: bring premium, sustainably sourced paper products to
              American families at a fair price. From our base in Ooltewah,
              Tennessee, we&apos;re building a brand that puts quality,
              transparency, and sustainability first — because your family
              deserves nothing less.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center gap-8 mb-8">
              {metrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-primary-light" />}
                  <div>
                    <span className="block font-heading text-2xl font-extrabold text-dark">
                      {m.value}
                    </span>
                    <span className="text-sm text-text-mid">{m.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-primary-light/50 transition-colors"
            >
              Read our full story
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
      </div>
    </section>
  );
}
