import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const AMAZON_URL = "https://www.amazon.com/dp/B0DKCV6QHB";
const WALMART_URL = "https://www.walmart.com/ip/12211816559";

const products = [
  {
    title: "Toilet Paper",
    subtitle: "Ultra soft, 2-ply, 350 sheets",
    image: "/images/toilet-paper-hero.png",
    alt: "DRYT Ultra Soft Toilet Paper package",
    gradient: "from-primary-light to-blue-50",
    available: true,
  },
  {
    title: "Paper Towels",
    subtitle: "Strong & absorbent for every mess",
    image: "/images/paper-towels.png",
    alt: "DRYT Paper Towels package",
    gradient: "from-accent-light to-orange-50",
    available: true,
  },
  {
    title: "Disposable Plates",
    subtitle: "Sturdy plates for any occasion",
    image: "/images/plates-clean.png",
    alt: "DRYT Disposable Plates stack",
    gradient: "from-emerald-50 to-green-50",
    available: true,
  },
  {
    title: "Liquid Detergent",
    subtitle: "Tough on stains, gentle formula",
    image: null as string | null,
    alt: "",
    emoji: "🧴",
    gradient: "from-purple-50 to-violet-50",
    available: false,
  },
];

export default function ProductLineup() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                Our Products
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-dark">
                Everything your home needs.
              </h2>
            </div>
            <p className="text-text-mid max-w-sm lg:text-right leading-relaxed">
              From the bathroom to the kitchen, DRYT® delivers premium quality
              across every product line.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className="product-card bg-bg rounded-2xl overflow-hidden group">
                <div
                  className={`bg-gradient-to-br ${p.gradient} h-52 flex items-center justify-center p-6`}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.alt}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full drop-shadow-md"
                    />
                  ) : (
                    <span className="text-6xl">{"emoji" in p ? p.emoji : ""}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-dark mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-mid mb-4">{p.subtitle}</p>
                  {p.available ? (
                    <div className="flex gap-2">
                      <a
                        href={AMAZON_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs font-semibold bg-primary hover:bg-primary-dark text-white py-2.5 rounded-full transition-colors"
                      >
                        Amazon
                      </a>
                      <a
                        href={WALMART_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs font-semibold bg-walmart hover:bg-walmart-dark text-white py-2.5 rounded-full transition-colors"
                      >
                        Walmart
                      </a>
                    </div>
                  ) : (
                    <span className="inline-flex items-center text-sm font-semibold text-text-mid">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View all products
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
