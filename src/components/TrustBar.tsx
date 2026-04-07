import ScrollReveal from "./ScrollReveal";

const badges = [
  {
    icon: "🌿",
    label: "Eco-Friendly",
    bg: "bg-emerald-50",
  },
  {
    icon: "👩‍💼",
    label: "Woman-Owned",
    bg: "bg-accent-light",
  },
  {
    icon: "🇺🇸",
    label: "US Business",
    bg: "bg-primary-light",
  },
  {
    icon: "🛡️",
    label: "Non-Toxic",
    bg: "bg-blue-50",
  },
  {
    icon: "⭐",
    label: "Amazon Rated",
    bg: "bg-amber-50",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl ${b.bg} flex items-center justify-center text-lg`}
                >
                  {b.icon}
                </div>
                <span className="text-sm font-semibold text-text">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
