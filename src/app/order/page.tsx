import type { Metadata } from "next";
import Header from "@/components/Header";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "Order Online via WhatsApp | Zauq-e-Mutton Lahore",
  description:
    "Place your customized fresh goat meat order, year-round Qurbani, Sadqah, or Aqiqa request directly to Zauq-e-Mutton via WhatsApp.",
};

export default function OrderPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-24">
        <OrderSection />
      </main>
      <Footer showContact={false} />
      <MobileStickyBar />
    </>
  );
}
