import whyTbhImg from "@/assets/why-tbh.jpg";

const WhyTBHCircle = () => {
  return (
    <section className="pt-0 bg-background">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
          {/* Left Content */}
          <div
            className="px-8 md:px-16 py-12 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(180deg, #FFF8D9 0%, rgba(255, 248, 217, 0) 100%)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why TBH Circle?
            </h2>
            <p className="font-semibold text-foreground mb-3">
              Grow with Subject Matter Experts:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our programs are led by in-house SMEs with 15+ years of corporate
              and behavioural science experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This means learning that is grounded in real business contexts, not
              just theory.
            </p>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden">
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
