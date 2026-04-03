import ScrollReveal from "./ScrollReveal";

const values = [
  {
    num: "01",
    iconBg: "bg-primary-light",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1565A8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Ultra Soft Comfort",
    desc: "Made from premium wood pulp for a cloud-like softness your family will love. 2-ply thickness for the perfect balance of strength and gentleness.",
  },
  {
    num: "02",
    iconBg: "bg-accent-light",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E8722A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Sustainably Sourced",
    desc: "Responsibly sourced wood pulp ensures every roll supports sustainable forestry practices. Good for your home, better for the planet.",
  },
  {
    num: "03",
    iconBg: "bg-primary-light",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1565A8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Non-Toxic & Safe",
    desc: "Free from harsh chemicals, dyes, and fragrances. Safe for sensitive skin and septic systems. Just pure, clean comfort.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Why choose DRYT®
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-dark">
              Built for{" "}
              <em className="font-serif-accent not-italic text-accent">
                comfort,
              </em>{" "}
              designed for life.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.num} delay={i * 120}>
              <div className="value-card bg-bg rounded-2xl p-8 h-full">
                <span className="font-heading text-6xl font-extrabold text-primary-light/70 select-none block mb-6">
                  {v.num}
                </span>
                <div
                  className={`w-12 h-12 rounded-xl ${v.iconBg} flex items-center justify-center mb-5`}
                >
                  {v.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-3">
                  {v.title}
                </h3>
                <p className="text-text-mid leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
