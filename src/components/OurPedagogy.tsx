import { BookOpen, Lightbulb, Gamepad2, FlaskConical } from "lucide-react";
import pedagogyImg from "@/assets/pedagogy.jpg";

const methods = [
  {
    icon: BookOpen,
    title: "Storytelling",
    description:
      "We use real stories to make concepts easy to relate to, remember, and apply at work.",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: Lightbulb,
    title: "Case Studies",
    description:
      "Participants solve real business situations so learning directly transfers to the job.",
    color: "text-yellow-500 bg-yellow-50",
  },
  {
    icon: Gamepad2,
    title: "Board Games & Simulations",
    description:
      "Games create safe practice environments where people learn faster through action and feedback.",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: FlaskConical,
    title: "Experimentation & Experiential Learning",
    description:
      "Participants learn by doing, testing behaviours, and reflecting on real outcomes.",
    color: "text-red-500 bg-red-50",
  },
];

const OurPedagogy = () => {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,248,217,0) 0%, #FFF8D9 50%, rgba(255,248,217,0) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={pedagogyImg}
              alt="Collaborative learning environment"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
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
