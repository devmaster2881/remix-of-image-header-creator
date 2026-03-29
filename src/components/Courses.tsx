const courses = [
  "Human Behaviour",
  "Sales & Negotiation",
  "Strategic Communication",
  "Leadership Development",
  "Change Management",
  "Emotional Intelligence",
  "Customer Experiences",
];

const Courses = () => {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,248,217,0) 0%, #FFF8D9 50%, rgba(255,248,217,0) 100%)",
      }}
    >
      <div className="max-w-[1236px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-10">
          Courses
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div
              key={course}
              className="bg-white rounded-2xl px-6 py-5 flex items-center shadow-sm border border-border/30 hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="font-bold text-foreground text-lg">{course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
