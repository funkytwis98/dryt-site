import type { Metadata } from "next";
import WholesalePage from "./WholesalePage";

export const metadata: Metadata = {
  title: "Wholesale — DRYT® Bulk Orders & Partnerships",
  description:
    "Partner with DRYT® for wholesale pricing on premium home essentials. Competitive bulk pricing for retailers, distributors, and businesses nationwide.",
};

export default function Wholesale() {
  return <WholesalePage />;
}
