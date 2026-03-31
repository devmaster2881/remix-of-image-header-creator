import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedPartners from "@/components/TrustedPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurPedagogy from "@/components/OurPedagogy";
import WhyTBHCircle from "@/components/WhyTBHCircle";
import Courses from "@/components/Courses";
import OurMethodologies from "@/components/OurMethodologies";
import LatestArticles from "@/components/LatestArticles";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedPartners />
      <WhyChooseUs />
      <OurPedagogy />
      <WhyTBHCircle />
      <Courses />
      <OurMethodologies />
      <LatestArticles />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
