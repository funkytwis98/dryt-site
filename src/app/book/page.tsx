import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call — Tom Integrations",
  description:
    "Schedule a free 10-minute demo to see how AI can answer your business calls.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-white text-4xl sm:text-5xl mb-4">
          Let&apos;s talk.
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Free 10-minute demo. No commitment.
        </p>
        <div className="space-y-4">
          <a
            href="tel:+14235551234"
            className="block bg-white text-dark font-medium text-base py-3.5 rounded-[980px] hover:bg-white/90 transition-colors"
          >
            Call (423) 555-1234
          </a>
          <a
            href="mailto:tom@tomintegrations.com"
            className="block border border-white/20 text-white font-medium text-base py-3.5 rounded-[980px] hover:bg-white/10 transition-colors"
          >
            tom@tomintegrations.com
          </a>
        </div>
        <a
          href="/"
          className="inline-block text-white/40 text-sm mt-10 hover:text-white/60 transition-colors"
        >
          &larr; Back to home
        </a>
      </div>
    </main>
  );
}
