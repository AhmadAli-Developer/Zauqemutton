import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "Qurbani & Sadqah Services | Zauq-e-Mutton Lahore",
  description:
    "Year-round goat Qurbani, Sadqah, and Aqiqa booking services in Lahore. 100% Halal hygienic slaughter and custom cutting.",
};

export default function QurbaniSadqahPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-24">
        <ServicesSection />
      </main>
      <Footer showContact={false} />
      <MobileStickyBar />
    </>
  );
}
