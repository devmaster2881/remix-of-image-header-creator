const partners = [
  { name: "morga", style: "tracking-[0.3em] font-light text-gray-400" },
  { name: "BARNEY", style: "tracking-[0.2em] font-bold text-gray-400 uppercase" },
  { name: "ABPER", style: "tracking-[0.15em] font-extrabold text-gray-500 uppercase" },
  { name: "Evianto", style: "font-serif italic text-gray-400" },
  { name: "agillian", style: "tracking-wide font-light text-gray-400" },
  { name: "Blogkio", style: "font-serif font-medium text-gray-400" },
];

const TrustedPartners = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-lg font-bold text-foreground mb-10">
          Our Trusted Partners
        </h2>

        {/* Scrolling logo strip */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-16 items-center whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className={`text-2xl md:text-3xl select-none shrink-0 ${p.style}`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
