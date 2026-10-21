import type { Metadata } from "next";
import Header from "@/components/Header";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "Fresh Meat Menu | Zauq-e-Mutton Lahore",
  description:
    "Explore our 8 fresh goat cuts and specialties: Ghosht, Qeema, Payee, Siri, Aujri, Kaleeji, Maghaz, and Phipra.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-24">
        <MenuSection />
      </main>
      <Footer showContact={false} />
      <MobileStickyBar />
    </>
  );
}
