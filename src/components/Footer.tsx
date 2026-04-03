import Link from "next/link";

const AMAZON_URL = "https://www.amazon.com/dp/B0DKCV6QHB";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Amazon Store", href: AMAZON_URL, external: true },
      { label: "Wholesale", href: "/wholesale" },
      { label: "Bulk Orders", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "emailus@dryt.us", href: "mailto:emailus@dryt.us" },
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center relative overflow-hidden">
                <span className="text-white font-heading font-extrabold text-lg leading-none relative z-10">
                  D
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-accent" />
              </div>
              <span className="text-xl font-heading font-extrabold tracking-tight text-white">
                Dryt
                <span className="text-accent text-[11px] align-super ml-0.5">
                  ®
                </span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Velazon Enterprise LLC
              <br />
              Ooltewah, Tennessee
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velazon Enterprise LLC. All rights
            reserved.
          </p>
          <p className="text-xs text-white/30">
            DRYT® is a registered trademark of Velazon Enterprise LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
