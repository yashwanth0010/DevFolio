import "../Assets/css/Education.css";
import { EducationCard } from "./EducationCard";
import { useRef, useState } from "react";
import type { Education } from "../types/types";
import { EducationData } from "../Data/education";

import { useInView } from "framer-motion";


// Replace with your own education entries. Add as many as you like —
// the layout, animation, and staircase all scale to any count.
const educations: Education[] = EducationData

/**
 * Education — dark-themed row of cards with a scroll-triggered animation
 * where vertical lines stagger in from the left of the screen, staircase-
 * style, then fly to their positions and expand into cards.
 *
 * Requires framer-motion. The row uses `grid-template-columns:
 * repeat(auto-fit, minmax(240px, 1fr))` so it always fits N cards in a row
 * on screens wide enough, and wraps gracefully on narrow screens.
 */
export function Education() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.15 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative w-full overflow-hidden bg-black py-24 px-6 sm:px-10 lg:px-20 text-white"
    >
      <div className="educontainer">
        <div className="title-box text-center">
          <h3 className="title-a">Education</h3>
          <p className="subtitle-a"></p>
          <div className="line-mf"></div>
        </div>
      </div>
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.06), transparent 60%)`,
        }}
      />

      {/* Floating background */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-cyan-600/6 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-fuchsia-700/6 blur-3xl animate-blob [animation-delay:6s]" />
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/25 animate-float-slow"
            style={{
              top: `${(i * 41) % 100}%`,
              left: `${(i * 59) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div> */}

      <div className="relative mx-auto max-w-6xl">
        {/* Row of cards. auto-fit fits N cards on any adequately wide screen,
            wrapping gracefully on narrow ones. */}
        <div
          ref={gridRef}
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
          }}
        >
          {educations.map((e, i) => (
            <EducationCard
              key={e.id ?? `${e.inst}-${i}`}
              item={e}
              index={i}
              isInView={isInView}
              sectionRef={sectionRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
