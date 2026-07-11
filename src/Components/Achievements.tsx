import '../Assets/css/Achievements.css';
import { AchievementsData as achievements } from '../Data/achievements';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shapes } from './Shapes';
import type { Achievement } from "../types/types";

function Achievements() {
  return (
    <>
      <section id="achievements" className="portfolio-mf sect-pt4 route">
        <div className="achieverow">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Achievements</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="achievecard">
          <div className="row justify-center">
            <ol className="divide-y divide-white/6">
              {achievements.map((a, i) => (
                <AchievementItem key={i} achievement={a} index={i} />
              ))}
            </ol>
            <div className="col-sm-4">
              <Shapes shapesCount={40} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AchievementItem({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const ref = useRef<HTMLLIElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div className='items-center justify-center'>
      <motion.li
        ref={ref}
        className="group relative py-3 md:py-14"
        initial={{ opacity: 0, x: -32 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 5,
          delay: index * 0.5,
          ease: [0.6, 1.5, 0.3, 1],
        }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          {/* Left: index number */}
          <div className="shrink-0 md:w-20 lg:w-24">
            <span
              aria-hidden
              className="text-4xl md:text-5xl font-bold leading-none tracking-tight bg-linear-to-br from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            >

            </span>
          </div>

          {/* Right: content */}
          <div className="flex-1 min-w-0">
            {/* Meta line: year + organization */}
            {/* <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {achievement.title}
            </span>
            {achievement.title && (
              <>
                <span className="h-px w-6 bg-white/20" />
                <span className="text-xs text-white/55">
                  {achievement.title}
                </span>
              </>
            )}
          </div> */}

            {/* Title with underline that grows on hover */}
            <h3 className="relative mb-3 inline-block text-xl md:text-2xl font-semibold leading-snug text-white">
              {achievement.title}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-purple-400 to-cyan-400 transition-all duration-500 group-hover:w-full"
              />
            </h3>

            {/* Description */}
            <p className="mb-3 text-sm md:text-[15px] leading-relaxed text-white/60">
              {achievement.description}
            </p>

            {/* Certificate link (only if present) */}
            {achievement.certificateUrl && (
              <a
                href={achievement.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition-colors hover:text-purple-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M9 14l-2 8 5-3 5 3-2-8" />
                </svg>
                <span>View certificate</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                  aria-hidden
                >
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.li>
    </div>
  );
}

export default Achievements;
