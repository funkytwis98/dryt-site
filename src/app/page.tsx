import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ValueProps from "@/components/ValueProps";
import FeaturedProduct from "@/components/FeaturedProduct";
import ProductLineup from "@/components/ProductLineup";
import About from "@/components/About";
import TrustBar from "@/components/TrustBar";
import WholesaleCTA from "@/components/WholesaleCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ValueProps />
      <FeaturedProduct />
      <ProductLineup />
      <About />
      <TrustBar />
      <WholesaleCTA />
    </main>
  );
}
