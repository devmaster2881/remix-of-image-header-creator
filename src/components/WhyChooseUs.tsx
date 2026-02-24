import { Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
          {/* Left Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Why choose us
          </h2>

          {/* Right Bento Grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {/* Card 1 - Testimonial + 30,000+ */}
            <div className="bg-[#F5C518] rounded-2xl p-6 flex flex-col justify-between row-span-2">
              <div className="space-y-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-foreground text-foreground"
                    />
                  ))}
                </div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  The team exceeded our expectations with a stunning brand
                  identity.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-4xl font-bold text-foreground">30,000+</p>
                <p className="text-sm text-foreground/70">Professionals</p>
              </div>
            </div>

            {/* Card 2 - 8+ Industries */}
            <div className="bg-muted rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-muted/60 to-muted" />
              <div className="relative z-10">
                <p className="text-4xl font-bold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground">Industries</p>
              </div>
            </div>

            {/* Card 3 - 15000+ Hours */}
            <div className="bg-white border border-border/40 rounded-2xl p-6 flex flex-col justify-center">
              <p className="text-4xl font-bold text-foreground">15000+</p>
              <p className="text-sm text-muted-foreground">hours of training</p>
            </div>

            {/* Card 4 - 50+ Corporates */}
            <div className="bg-[#F5C518]/20 rounded-2xl p-6 flex flex-col justify-end">
              <p className="text-4xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Corporates Org</p>
              <div className="flex -space-x-2 mt-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-muted-foreground/30 border-2 border-white"
                  />
                ))}
              </div>
            </div>

            {/* Card 5 - 3500+ Days */}
            <div className="bg-white border border-border/40 rounded-2xl p-6 flex flex-col justify-center">
              <p className="text-4xl font-bold text-foreground">3500+</p>
              <p className="text-sm text-muted-foreground">Days of training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
