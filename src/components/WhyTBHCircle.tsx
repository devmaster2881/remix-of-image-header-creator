import whyTbhImg from "@/assets/why-tbh.jpg";

const WhyTBHCircle = () => {
  return (
    <section className="py-0 bg-background">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden">
          {/* Left Content */}
          <div className="relative p-10 md:p-16 flex flex-col justify-center"
            style={{
              background: "linear-gradient(180deg, #FFF8D9 0%, rgba(255, 248, 217, 0) 100%)",
            }}
          >
            {/* Dashed vertical line */}
            <div className="absolute top-0 left-1/2 h-full w-px border-l-2 border-dashed border-muted-foreground/30" />

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative z-10">
              Why TBH Circle?
            </h2>
            <p className="font-semibold text-foreground mb-3 relative z-10">
              Grow with Subject Matter Experts:
            </p>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              Our programs are led by in-house SMEs with 15+ years of corporate
              and behavioural science experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 relative z-10">
              This means learning that is grounded in real business contexts, not
              just theory.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={whyTbhImg}
              alt="Yellow office supplies flat lay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTBHCircle;
