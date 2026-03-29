import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedPartners from "@/components/TrustedPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurPedagogy from "@/components/OurPedagogy";
import WhyTBHCircle from "@/components/WhyTBHCircle";
import Courses from "@/components/Courses";
import OurMethodologies from "@/components/OurMethodologies";

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
    </div>
  );
};

export default Index;
