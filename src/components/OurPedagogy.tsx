import { BookOpen, Lightbulb, Gamepad2, FlaskConical } from "lucide-react";
import pedagogyImg from "@/assets/pedagogy.jpg";

const methods = [
  {
    icon: BookOpen,
    title: "Storytelling",
    description:
      "We use real stories to make concepts easy to relate to, remember, and apply at work.",
    color: "text-[hsl(25,95%,53%)] bg-[hsl(25,100%,95%)]",
  },
  {
    icon: Lightbulb,
    title: "Case Studies",
    description:
      "Participants solve real business situations so learning directly transfers to the job.",
    color: "text-[hsl(48,90%,52%)] bg-[hsl(48,100%,95%)]",
  },
  {
    icon: Gamepad2,
    title: "Board Games & Simulations",
    description:
      "Games create safe practice environments where people learn faster through action and feedback.",
    color: "text-[hsl(217,91%,60%)] bg-[hsl(217,100%,95%)]",
  },
  {
    icon: FlaskConical,
    title: "Experimentation & Experiential Learning",
    description:
      "Participants learn by doing, testing behaviours, and reflecting on real outcomes.",
    color: "text-[hsl(0,84%,60%)] bg-[hsl(0,100%,95%)]",
  },
];

const OurPedagogy = () => {
  return (
    <section
      className="pb-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,248,217,0) 0%, #FFF8D9 50%, rgba(255,248,217,0) 100%)",
      }}
    >
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Image */}
          <div className="overflow-hidden">
            <img
              src={pedagogyImg}
              alt="Collaborative learning environment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 px-8 md:px-16 py-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Pedagogy
            </h2>
            <p className="text-muted-foreground max-w-md">
              We design learning the way people naturally learn—by experiencing,
              feeling, and reflecting.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {methods.map((method) => (
                <div
                  key={method.title}
                  className="bg-white rounded-xl p-5 space-y-3 shadow-sm border border-border/30"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${method.color}`}
                    >
                      <method.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">
                      {method.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPedagogy;
