import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

const slides = [
  {
    heading: "Redefining Impact with SME-Led & Behaviour Training",
    subtext:
      "Crafting inspired professionals through dynamic, human-powered learning experiences",
    image: heroBanner,
  },
  {
    heading: "Empowering Teams Through Expert-Led Workshops",
    subtext:
      "Unlock potential with tailored programs designed for real-world impact",
    image: heroBanner,
  },
  {
    heading: "Building Future-Ready Leaders with Practical Skills",
    subtext:
      "Transform your workforce through immersive, results-driven training",
    image: heroBanner,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const current = slides[activeSlide];

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFF8D9 0%, rgba(255, 248, 217, 0) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] text-foreground tracking-tight">
              {current.heading}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              {current.subtext}
            </p>

            {/* Email Input */}
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

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={current.image}
                alt="Training professional"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-[#F5C518] scale-125"
                  : "bg-[#F5C518]/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
