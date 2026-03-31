import methodologyImg from "@/assets/methodology-reference.png";

const OurMethodologies = () => {
  const steps = [
    {
      number: "01",
      title: "T-Group Analysis",
      description: "Participants gain self-awareness by receiving honest feedback in live group interactions.",
    },
    {
      number: "02",
      title: "Group Process Work",
      description: "Teams learn to understand how they function together and improve collaboration and trust.",
    },
    {
      number: "03",
      title: "Theatre of the Oppressed",
      description: "Workplace challenges are acted out so participants can explore issues and try new solutions.",
    },
    {
      number: "04",
      title: "Group Process Work",
      description: "Teams learn to understand how they function together and improve collaboration and trust.",
    },
  ];

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

        {/* Image placeholder for now */}
        <div className="flex justify-center mb-16">
          <img
            src={methodologyImg}
            alt="Our Methodologies - zigzag timeline"
            className="w-full max-w-[1000px] h-auto"
          />
        </div>

        {/* Desktop timeline with zigzag layout */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-muted-foreground/20" />
          {steps.map((step, index) => (
            <div key={step.number} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2 px-8">
                <div className={`p-6 bg-card rounded-lg border shadow-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="text-primary font-bold text-xl">{step.number}</span>
                  <h3 className="text-xl font-bold mt-2">{step.title}</h3>
                  <p className="text-muted-foreground mt-2">{step.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
            </div>
          ))}
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="p-6 bg-card rounded-lg border shadow-sm">
              <span className="text-primary font-bold text-xl">{step.number}</span>
              <h3 className="text-xl font-bold mt-2">{step.title}</h3>
              <p className="text-muted-foreground mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMethodologies;
