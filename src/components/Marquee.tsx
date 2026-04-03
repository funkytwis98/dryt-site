const items = [
  "Premium Quality",
  "Wood Pulp",
  "Eco-Friendly",
  "Non-Toxic",
  "Woman-Owned",
  "Made with Care",
  "Tennessee Proud",
  "DRYT®",
];

export default function Marquee() {
  const row = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 shrink-0">
      <span className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/90">
        {item}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
    </span>
  ));

  return (
    <div className="bg-dark py-4 overflow-hidden">
      <div className="flex gap-6 animate-marquee whitespace-nowrap">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
