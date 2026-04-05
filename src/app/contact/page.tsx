import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact — DRYT® | Get in Touch",
  description:
    "Contact DRYT® for product questions, wholesale inquiries, partnerships, and more. Based in Ooltewah, Tennessee. Email us at emailus@dryt.us.",
};

export default function Contact() {
  return <ContactPage />;
}
