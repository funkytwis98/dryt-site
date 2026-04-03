"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
];

const AMAZON_URL = "https://www.amazon.com/dp/B0DKCV6QHB";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgb(0,0,0,0.06)]"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center relative overflow-hidden">
            <span className="text-white font-heading font-extrabold text-lg leading-none relative z-10">
              D
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-accent" />
          </div>
          <span className="text-xl font-heading font-extrabold tracking-tight text-dark">
            Dryt
            <span className="text-accent text-[11px] align-super ml-0.5">
              ®
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-mid hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Shop on Amazon
          <svg
            width="14"
            height="14"
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] bg-dark rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-dark rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-dark rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[15px] font-medium text-text-mid hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-accent text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-4"
          >
            Shop on Amazon
          </a>
        </div>
      </div>
    </nav>
  );
}
