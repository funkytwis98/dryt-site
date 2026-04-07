"use client";

import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-white font-body font-medium text-sm tracking-tight">
          Tom Integrations
        </a>
        <a
          href="/book"
          className="bg-white text-dark text-sm font-medium px-5 py-2 rounded-[980px] hover:bg-white/90 transition-colors"
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45"
        src="/videos/home-demo.mp4?v=20cfa3e"
      />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-white/60 font-body text-sm uppercase tracking-[0.2em] mb-6 fade-up">
          AI for small business
        </p>
        <h1 className="font-heading text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-6 fade-up">
          Never miss
          <br />
          another call.
        </h1>
        <p className="text-white/70 font-body text-lg sm:text-xl max-w-xl mx-auto mb-10 fade-up">
          An AI receptionist that answers your phone, books appointments, and
          captures every lead — so you can focus on your business.
        </p>
        <div className="fade-up">
          <a
            href="/book"
            className="inline-block bg-white text-dark font-medium text-base px-8 py-3.5 rounded-[980px] hover:bg-white/90 transition-colors"
          >
            Book a call with Tom
          </a>
          <p className="text-white/40 text-sm mt-4">
            Free 10-minute demo. No commitment.
          </p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="fade-up font-heading text-6xl sm:text-8xl text-primary mb-4">
          62%
        </p>
        <p className="fade-up font-heading text-2xl sm:text-3xl text-primary mb-6">
          of callers won&apos;t leave a voicemail.
        </p>
        <p className="fade-up text-muted text-lg leading-relaxed max-w-xl mx-auto">
          Every missed call is a missed customer. While you&apos;re busy running your
          business, potential clients are calling your competitors instead.
        </p>
      </div>
    </section>
  );
}

interface ServiceRowProps {
  title: string;
  price: string;
  description: string;
  videoSrc: string;
  reverse?: boolean;
}

function ServiceRow({ title, price, description, videoSrc, reverse }: ServiceRowProps) {
  return (
    <div
      className={`fade-up grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className={reverse ? "md:[direction:ltr]" : ""}>
        <p className="text-muted text-sm font-medium uppercase tracking-wider mb-2">
          {price}
        </p>
        <h3 className="font-heading text-3xl sm:text-4xl text-primary mb-4">
          {title}
        </h3>
        <p className="text-muted text-lg leading-relaxed">{description}</p>
      </div>
      <div className={reverse ? "md:[direction:ltr]" : ""}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-2xl shadow-lg"
          src={videoSrc}
        />
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="fade-up font-heading text-4xl sm:text-5xl text-primary mb-4">
            One system. Every lead captured.
          </h2>
        </div>
        <div className="space-y-24 sm:space-y-32">
          <ServiceRow
            title="AI Receptionist"
            price="$99 / mo"
            description="Your phone is always answered. The AI greets callers by name, answers questions about your business, books appointments, and sends you a summary — all in a natural, human-like voice."
            videoSrc="/videos/ai-receptionist.mp4"
          />
          <ServiceRow
            title="Social Media Manager"
            price="$99 / mo"
            description="Consistent, on-brand content posted to your accounts every week. We handle the strategy, writing, and scheduling so your business stays visible without you lifting a finger."
            videoSrc="/videos/ai-social.mp4"
            reverse
          />
          <ServiceRow
            title="The Complete Package"
            price="$169 / mo"
            description="AI receptionist plus social media management bundled together. Every call answered, every post published — one simple bill."
            videoSrc="/videos/combined-package.mp4"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell us about your business",
      desc: "A quick call so we understand your services, hours, and how you want calls handled.",
    },
    {
      num: "02",
      title: "We set up your AI",
      desc: "We configure your receptionist, train it on your business, and test everything.",
    },
    {
      num: "03",
      title: "You grow",
      desc: "Calls get answered, leads get captured, and you focus on what you do best.",
    },
  ];

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="fade-up font-heading text-4xl sm:text-5xl text-primary text-center mb-16">
          Up and running in days.
        </h2>
        <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="text-center md:text-left">
              <p className="text-muted text-sm font-medium mb-3">{step.num}</p>
              <h3 className="font-heading text-2xl text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-muted text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Receptionist",
      price: "$99",
      period: "/mo",
      features: [
        "AI answers every call",
        "Appointment booking",
        "Lead capture & summaries",
        "Custom greeting & FAQs",
      ],
      featured: false,
    },
    {
      name: "Complete",
      price: "$169",
      period: "/mo",
      features: [
        "Everything in Receptionist",
        "Weekly social media posts",
        "Content strategy",
        "Multi-platform publishing",
      ],
      featured: true,
    },
    {
      name: "Website",
      price: "$499",
      period: " one-time + $19/mo",
      features: [
        "Custom designed website",
        "Mobile responsive",
        "SEO optimized",
        "Hosting & maintenance",
      ],
      featured: false,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="fade-up font-heading text-4xl sm:text-5xl text-primary mb-4">
            Simple pricing.
          </h2>
          <p className="fade-up text-muted text-lg">
            No contracts. Cancel anytime.
          </p>
        </div>
        <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? "bg-dark text-white"
                  : "bg-surface text-primary"
              }`}
            >
              <p
                className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                  plan.featured ? "text-white/60" : "text-muted"
                }`}
              >
                {plan.name}
              </p>
              <p className="font-heading text-4xl mb-1">
                {plan.price}
                <span
                  className={`text-base font-body ${
                    plan.featured ? "text-white/50" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm ${
                      plan.featured ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/book"
                className={`mt-8 block text-center text-sm font-medium py-3 rounded-[980px] transition-colors ${
                  plan.featured
                    ? "bg-white text-dark hover:bg-white/90"
                    : "bg-dark text-white hover:bg-dark/90"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
        <p className="fade-up text-center text-muted text-sm mt-10">
          All plans include setup, onboarding, and ongoing support.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-dark py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="fade-up font-heading text-4xl sm:text-5xl text-white mb-8">
          Ready to stop
          <br />
          missing calls?
        </h2>
        <div className="fade-up">
          <a
            href="/book"
            className="inline-block bg-white text-dark font-medium text-base px-8 py-3.5 rounded-[980px] hover:bg-white/90 transition-colors"
          >
            Book a call with Tom
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-white/30 text-sm">
          &copy; 2026 Tom Integrations. Chattanooga, TN.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const wrapperRef = useScrollReveal();

  return (
    <main ref={wrapperRef}>
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
