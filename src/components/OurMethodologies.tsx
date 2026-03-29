const steps = [
  {
    number: "01",
    title: "T-Group Analysis",
    description:
      "A deep-dive into group dynamics where participants observe their own behaviours in real-time, building self-awareness and interpersonal sensitivity.",
  },
  {
    number: "02",
    title: "Group Process Work",
    description:
      "Structured group exercises that surface team patterns, power dynamics, and communication styles to drive collective growth.",
  },
  {
    number: "03",
    title: "Theatre of the Oppressed",
    description:
      "Interactive theatre techniques that let participants rehearse real-life workplace challenges in a safe, creative space.",
  },
  {
    number: "04",
    title: "Group Process Work",
    description:
      "Advanced facilitation methods that help teams navigate conflict, build trust, and co-create solutions together.",
  },
];

const OurMethodologies = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1236px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Methodologies
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Science-backed frameworks that create lasting behavioural change in individuals and teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-border hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={step.number} className="relative lg:flex lg:items-center lg:min-h-[200px]">
                  {/* Left side */}
                  <div className={`lg:w-1/2 ${isLeft ? "lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                    {(isLeft || !isLeft) && (
                      <div className={`${isLeft ? "lg:ml-auto lg:mr-0" : ""} max-w-md ${isLeft ? "lg:text-right" : ""}`}>
                        {isLeft && (
                          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/30 relative">
                            <span className="absolute -top-3 -left-3 text-6xl font-black text-[hsl(48,90%,52%)]/20 select-none leading-none">
                              {step.number}
                            </span>
                            <h3 className="font-bold text-lg text-foreground mb-2">
                              {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[hsl(48,90%,52%)] border-4 border-background z-10 hidden lg:block" />

                  {/* Right side */}
                  <div className={`lg:w-1/2 ${isLeft ? "lg:order-2 lg:pl-16" : "lg:pr-16"}`}>
                    {!isLeft && (
                      <div className="max-w-md">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/30 relative">
                          <span className="absolute -top-3 -right-3 text-6xl font-black text-[hsl(48,90%,52%)]/20 select-none leading-none">
                            {step.number}
                          </span>
                          <h3 className="font-bold text-lg text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full hidden lg:block">
                      <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-[hsl(48,90%,52%)]">
                        <path d="M12 0 L12 32 M6 26 L12 34 L18 26" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMethodologies;
