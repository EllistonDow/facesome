import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/marketing/HeroSection";
import StyleShowcase from "@/components/marketing/StyleShowcase";
import ComparisonTable from "@/components/marketing/ComparisonTable";
import PricingSection from "@/components/marketing/PricingSection";
import FAQSection from "@/components/marketing/FAQSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08080a]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StyleShowcase />
        <ComparisonTable />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
