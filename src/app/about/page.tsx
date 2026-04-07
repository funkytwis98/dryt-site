import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About — DRYT® | Our Story",
  description:
    "Learn about DRYT® and Velazon Enterprise LLC. Founded in 2023 by Mary Ann Tuazon in Ooltewah, Tennessee — a woman-owned business delivering premium, sustainable home essentials.",
};

export default function About() {
  return <AboutPage />;
}
