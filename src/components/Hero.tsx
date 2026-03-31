import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner.png";
import heroBanner2 from "@/assets/hero-banner-2.png";
import heroBanner3 from "@/assets/hero-banner-3.png";

const heroImages = [heroBanner1, heroBanner2, heroBanner3];

// Preload all images on mount
const preloadImages = (srcs: string[]) => {
  srcs.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    preloadImages(heroImages);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFF8D9 0%, rgba(255, 248, 217, 0) 100%)",
      }}
    >
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] text-foreground tracking-tight">
              Redefining Impact with SME-Led & Behaviour Training
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              Crafting inspired professionals through dynamic, human-powered learning experiences
            </p>
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-foreground text-background placeholder:text-background/60 px-6 py-4 pr-14 text-sm outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-foreground rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/90 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image with dots below */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Render all images, show only active — no reload delay */}
              {heroImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Training professional"
                  className={`w-full h-auto transition-opacity duration-300 ${
                    i === activeSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-[hsl(48,90%,52%)] scale-125"
                      : "bg-[hsl(48,90%,52%)]/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
