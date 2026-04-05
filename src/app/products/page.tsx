import type { Metadata } from "next";
import ProductsPage from "./ProductsPage";

export const metadata: Metadata = {
  title: "Products — DRYT® Premium Home Essentials",
  description:
    "Shop the full DRYT® product lineup: ultra soft toilet paper, paper towels, compostable disposable plates, and liquid detergent. Premium quality, eco-friendly.",
};

export default function Products() {
  return <ProductsPage />;
}
