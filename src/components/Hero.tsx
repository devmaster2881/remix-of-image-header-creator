import { Button } from "@/components/ui/button";
import heroImage from "@/assets/crm-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-32">
      {/* Decorative Plus Signs */}
      <div className="absolute top-20 left-10 text-accent/20 text-4xl font-light">+</div>
      <div className="absolute top-40 right-20 text-accent/20 text-4xl font-light">+</div>
      <div className="absolute bottom-32 left-20 text-accent/20 text-4xl font-light">+</div>
      <div className="absolute bottom-20 right-1/3 text-accent/20 text-4xl font-light">+</div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Transform Customer Relationships with Next-Gen CRM
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Reimagine engagement, automate workflows, and build loyalty—smarter, faster, and deeper
            </p>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium shadow-xl hover:shadow-2xl transition-all">
              Contact Us
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src={heroImage} 
                alt="Next-Gen CRM Platform Illustration" 
                className="w-full h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
