import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import SystemsSection from "@/components/home/SystemsSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import KPISection from "@/components/home/KPISection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StepsSection from "@/components/home/StepsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo-config";
import { homePageSchemaComplete } from "@/lib/structured-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        canonical="/"
        structuredData={homePageSchemaComplete}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <SystemsSection />
        <RoadmapSection />
        <KPISection />
        <TestimonialsSection />
        <StepsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
