import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="gold-divider" />
        <MenuSection />
        <div className="gold-divider" />
        <ServicesSection />
        <div className="gold-divider" />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
