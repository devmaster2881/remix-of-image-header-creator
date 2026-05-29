import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";

const people = [person1, person2, person3, person1, person2, person3];

const PeopleSlider = () => {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const maxIndex = Math.max(0, people.length - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="bg-background py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="relative">
          <div className="overflow-hidden -mx-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${index} * (100% / ${visible})))` }}
            >
              {people.map((src, i) => (
                <div
                  key={i}
                  className="px-3 shrink-0"
                  style={{ width: `calc(100% / ${visible})` }}
                >
                  <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={src}
                      alt={`Person ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={768}
                      height={768}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edge fades to hint next/prev */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />

          {/* Controls */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-40 hover:bg-white/90 transition"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-40 hover:bg-white/90 transition"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PeopleSlider;
