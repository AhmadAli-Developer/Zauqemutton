import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "Contact & Location | Zauq-e-Mutton Lahore",
  description:
    "Visit Zauq-e-Mutton at Nurian Bazaar Inside Akbari Gate Lahore. Call 0322-4145022 or order via WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-24">
        <Footer showContact={true} isStandalonePage={true} />
      </main>
      <MobileStickyBar />
    </>
  );
}
