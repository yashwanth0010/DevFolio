import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Education, Pos } from "../types/types";

export function EducationCard({
  item,
  index,
  isInView,
  sectionRef,
}: {
  item: Education;
  index: number;
  isInView: boolean;
  sectionRef?: React.RefObject<HTMLElement | null> | null;
}) {
  const slotRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<Pos | null>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  // Measure the slot's position relative to the section so we know where each
  // line needs to start (in the stack near the left edge) and how far it must
  // fly to reach its slot.
  useLayoutEffect(() => {
    const measure = () => {
      if (!slotRef.current || !sectionRef?.current) return;
      const slot = slotRef.current.getBoundingClientRect();
      const section = sectionRef.current.getBoundingClientRect();

      const slotXInSection = slot.left - section.left;
      const slotYInSection = slot.top - section.top;

      // Stack: near left edge of the section, staircased down-right per index.
      const stackXInSection = 30 + index * 40;
      const stackYInSection = slotYInSection + index * 22;

      setPos({
        dx: stackXInSection - slotXInSection,
        dy: stackYInSection - slotYInSection,
        w: slot.width,
        h: slot.height,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (slotRef.current) ro.observe(slotRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [index, sectionRef]);

  const onGlowMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = slotRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const stagger = index * 0.2;
  const duration = 2;
  // Content should appear after the line has fully expanded into the card.
  const contentDelay = stagger + duration * 0.1;

  return (
    <div
      ref={slotRef}
      onMouseMove={onGlowMove}
      className="relative min-h-80"
    >
      {pos && (
        <motion.div
          className="group absolute overflow-hidden"
          style={{ top: 0, left: 0 }}
          initial={{
            x: pos.dx,
            y: pos.dy,
            width: 64,
            height: 3,
            opacity: 0,
            borderRadius: 999,
            backgroundColor: "rgb(168, 85, 247)",
            boxShadow: "0 0 24px rgba(168, 85, 247, 0.5)",
          }}
          animate={
            isInView
              ? {
                x: [pos.dx, pos.dx, 0, 0],
                y: [pos.dy, pos.dy, 0, 0],
                width: [64, 64, 64, pos.w],
                height: [3, 3, 3, pos.h],
                opacity: [0, 1, 1, 1],
                borderRadius: [999, 999, 999, 16],
                backgroundColor: [
                  "rgb(168, 85, 247)",
                  "rgb(168, 85, 247)",
                  "rgb(168, 85, 247)",
                  "rgb(0, 0, 0)",
                ],
                boxShadow: [
                  "0 0 24px rgba(168, 85, 247, 0.5)",
                  "0 0 24px rgba(168, 85, 247, 0.5)",
                  "0 0 24px rgba(168, 85, 247, 0.5)",
                  "0 0 0px rgba(168, 85, 247, 0)",
                ],
              }
              : {}
          }
          transition={{
            duration,
            times: [0, 0.18, 0.6, 1],
            delay: stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Top gradient wash — appears with the card */}
          <motion.div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-linear-to-b  blur-2xl from-white "
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: contentDelay - 0.15 }}
          />

          {/* Radial hover glow — activates after card is settled */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(139, 92, 246, 0.14), transparent 60%)`,
            }}
          />

          {/* Card content */}
          <motion.div
            className="relative flex h-full flex-col p-6"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: contentDelay }}
          >
            {/* Chapter badge + grade */}
            {/* <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-purple-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Chapter {String(index + 1).padStart(2, "0")}
              </span>
              {item.id && (
                <span className="text-[11px] font-medium text-cyan-300/80">
                  {item.id}
                </span>
              )}
            </div> */}

            {/* Degree + school */}
            {/* <div className="flex items-start gap-3">
              <CapIcon />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {item.inst}
                </h3>
                <p className="mt-0.5 text-sm text-cyan-300/90">{item.inst}</p>
              </div>
            </div> */}

            {/* Meta line */}
            {/* <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/45">
              <span>{item.startingYear}</span>
              {item.cgpa && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span>{item.cgpa}</span>
                </>
              )}
            </div>

            {item.edu && (
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {item.edu}
              </p>
            )} */}
            <EduContent {...item} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

const EduContent: React.FC<Education> = (props) => {
  return (
    <>
      <div key={props.id}>
        <div className="counter-box">
          <div className="counter-ico">
            <span className="ico-circle">
              <img src={props.img} alt="school" className="pl-1" />
            </span>
          </div>
          <div className="counter-num">
            <div className="text-lg font-bold">
              {props.edu}
            </div>
            <div className="text-base font-semibold"> {props.inst} </div>
            <div className="counter-text">{props.branch}</div>
            <div className="counter-text">
              {props.startingYear && props.finishedYear ? `${props.startingYear} - ${props.finishedYear}` : props.finishedYear ? `${props.finishedYear}` : ''}
            </div>
            <span className="counter-text"> CGPA : {props.cgpa}</span>
          </div>
        </div>
      </div>
    </>
  );
}
