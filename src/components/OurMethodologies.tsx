const steps = [
  {
    number: "01",
    title: "T-Group Analysis",
    description:
      "Participants gain self-awareness by receiving honest feedback in live group interactions.",
  },
  {
    number: "02",
    title: "Group Process Work",
    description:
      "Teams learn to understand how they function together and improve collaboration and trust.",
  },
  {
    number: "03",
    title: "Theatre of the Oppressed",
    description:
      "Workplace challenges are acted out so participants can explore issues and try new solutions.",
  },
  {
    number: "04",
    title: "Group Process Work",
    description:
      "Teams learn to understand how they function together and improve collaboration and trust.",
  },
];

const ArrowRight = () => (
  <svg width="110" height="80" viewBox="0 0 110 80" fill="none" className="shrink-0">
    <rect x="0" y="24" width="68" height="32" rx="4" fill="url(#arrowGradR)" />
    <path d="M68 12 L110 40 L68 68 Z" fill="url(#arrowGradR)" />
    <defs>
      <linearGradient id="arrowGradR" x1="0" y1="0" x2="110" y2="0">
        <stop offset="0%" stopColor="#F5E27A" />
        <stop offset="100%" stopColor="#D4A83A" />
      </linearGradient>
    </defs>
  </svg>
);

const ArrowLeft = () => (
  <svg width="110" height="80" viewBox="0 0 110 80" fill="none" className="shrink-0">
    <rect x="42" y="24" width="68" height="32" rx="4" fill="url(#arrowGradL)" />
    <path d="M42 12 L0 40 L42 68 Z" fill="url(#arrowGradL)" />
    <defs>
      <linearGradient id="arrowGradL" x1="110" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="#F5E27A" />
        <stop offset="100%" stopColor="#D4A83A" />
      </linearGradient>
    </defs>
  </svg>
);

const OurMethodologies = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1106px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Our Methodologies
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            We use proven experiential methods to create deep self-awareness and
            lasting behavioural change.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Center dashed line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-muted-foreground/30" />

          {/* Row 1: Card left, Arrow right */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 pr-16 flex justify-end relative">
              <span className="absolute -bottom-6 left-[10%] text-[130px] font-black text-[#F1D76D]/70 select-none leading-none pointer-events-none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.06))" }}>
                01
              </span>
              <div className="bg-white rounded-xl p-6 shadow-md max-w-[260px] w-full relative z-10">
                <h3 className="font-bold text-sm text-foreground mb-2">{steps[0].title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[0].description}</p>
              </div>
            </div>
            <div className="w-1/2 pl-8 flex items-center">
              <ArrowRight />
            </div>
          </div>

          {/* Row 2: Arrow left, Card right */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 pr-8 flex items-center justify-end">
              <ArrowLeft />
            </div>
            <div className="w-1/2 pl-16 flex justify-start relative">
              <span className="absolute -bottom-6 right-[10%] text-[130px] font-black text-[#F1D76D]/70 select-none leading-none pointer-events-none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.06))" }}>
                02
              </span>
              <div className="bg-white rounded-xl p-6 shadow-md max-w-[260px] w-full relative z-10">
                <h3 className="font-bold text-sm text-foreground mb-2">{steps[1].title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[1].description}</p>
              </div>
            </div>
          </div>

          {/* Row 3: Card left, Arrow right */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 pr-16 flex justify-end relative">
              <span className="absolute -bottom-6 left-[10%] text-[130px] font-black text-[#F1D76D]/70 select-none leading-none pointer-events-none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.06))" }}>
                03
              </span>
              <div className="bg-white rounded-xl p-6 shadow-md max-w-[260px] w-full relative z-10">
                <h3 className="font-bold text-sm text-foreground mb-2">{steps[2].title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[2].description}</p>
              </div>
            </div>
            <div className="w-1/2 pl-8 flex items-center">
              <ArrowRight />
            </div>
          </div>

          {/* Row 4: Arrow left, Card right */}
          <div className="relative flex items-center min-h-[200px]">
            <div className="w-1/2 pr-8 flex items-center justify-end">
              <ArrowLeft />
            </div>
            <div className="w-1/2 pl-16 flex justify-start relative">
              <span className="absolute -bottom-6 right-[10%] text-[130px] font-black text-[#F1D76D]/70 select-none leading-none pointer-events-none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.06))" }}>
                04
              </span>
              <div className="bg-white rounded-xl p-6 shadow-md max-w-[260px] w-full relative z-10">
                <h3 className="font-bold text-sm text-foreground mb-2">{steps[3].title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[3].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <span className="absolute -top-4 -left-1 text-[80px] font-black text-[#F1D76D]/50 select-none leading-none z-0">
                {step.number}
              </span>
              <div className="bg-white rounded-xl p-6 shadow-md relative z-10">
                <h3 className="font-bold text-sm text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMethodologies;
