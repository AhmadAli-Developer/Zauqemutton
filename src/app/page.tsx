import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}

