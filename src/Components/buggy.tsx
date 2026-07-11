import { useLayoutEffect, useRef, useState } from "react";

import { motion, useInView } from "framer-motion";

type Education = {
  degree: string;
  school: string;
  period: string;
  location?: string;
  grade?: string;
  details?: string;
};

// Replace with your own education entries. Add as many as you like —
// the layout, animation, and staircase all scale to any count.
const educations: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    school: "XYZ University",
    period: "2022 — 2026",
    location: "Bangalore, India",
    grade: "CGPA 8.7 / 10",
    details:
      "Coursework in ML, distributed systems, and compilers. President of the coding club; ran the annual hackathon for 500+ students.",
  },
  {
    degree: "Higher Secondary",
    school: "ABC Public School",
    period: "2020 — 2022",
    location: "Mumbai, India",
    grade: "95.4%",
    details:
      "PCM with Computer Science. State topper in Informatics Practices. Chief coordinator of the school tech fest.",
  },
  {
    degree: "Secondary",
    school: "ABC Public School",
    period: "2018 — 2020",
    location: "Mumbai, India",
    grade: "94.2%",
    details:
      "All-rounder — school topper in the science stream, captain of the debate team, mentor for the junior coding club.",
  },
];

/**
 * Education — dark-themed row of cards with a scroll-triggered animation
 * where vertical lines stagger in from the left of the screen, staircase-
 * style, then fly to their positions and expand into cards.
 *
 * Requires framer-motion. The row uses `grid-template-columns:
 * repeat(auto-fit, minmax(240px, 1fr))` so it always fits N cards in a row
 * on screens wide enough, and wraps gracefully on narrow screens.
 */
export default function Education() {
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
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.06), transparent 60%)`,
        }}
      />

      {/* Floating background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-cyan-600/[0.06] blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-fuchsia-700/[0.06] blur-3xl animate-blob [animation-delay:6s]" />
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
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-purple-400/70">
            Learning
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/50">
            Watch the story assemble — each line finds its place and becomes a
            chapter.
          </p>
        </div>

        {/* Row of cards. auto-fit fits N cards on any adequately wide screen,
            wrapping gracefully on narrow ones. */}
        <div
          ref={gridRef}
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
          }}
        >
          {educations.map((edu, i) => (
            <EducationCard
              key={i}
              item={edu}
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











-----------------------------------------------------
import { useState } from "react";

type Skill = {
  name: string;
  slug: string; // simpleicons.org slug
  color?: string; // hex without '#' — override for dark brand colors
};

// Replace with your own stack. Slugs are from https://simpleicons.org
// (e.g. "react", "typescript", "nextdotjs"). Add `color: "ffffff"` for icons
// whose brand color is too dark to read against black (github, express, etc.)
const skills: Skill[] = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github", color: "ffffff" },
  { name: "Vite", slug: "vite" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "Figma", slug: "figma" },
  { name: "Framer Motion", slug: "framer", color: "ffffff" },
];

const iconUrl = (s: Skill) =>
  s.color
    ? `https://cdn.simpleicons.org/${s.slug}/${s.color}`
    : `https://cdn.simpleicons.org/${s.slug}`;

/**
 * Skills — infinite left-to-right marquee of tech chips.
 * Pause on hover. Fade masks at the edges. Respects prefers-reduced-motion.
 * No new deps — pure CSS animation.
 */
export default function Skills() {
  const [paused, setPaused] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="skills"
      onMouseMove={onMove}
      className="relative w-full overflow-hidden bg-black py-24 text-white"
    >
      {/* Keyframes for the LTR marquee. Injecting inline keeps this section
          self-contained — no tailwind.config.js changes needed. */}
      <style>{`
        @keyframes skills-marquee-ltr {
          from { transform: translate3d(-50%, 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .skills-track { animation: none !important; }
        }
      `}</style>

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.06), transparent 60%)`,
        }}
      />

      {/* Floating background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-cyan-600/[0.06] blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-fuchsia-700/[0.06] blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      {/* Header */}
      <div className="relative mx-auto mb-14 max-w-6xl px-6 sm:px-10 lg:px-20 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-purple-400/70">
          Toolkit
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/50">
          The stack I reach for. Hover to pause and inspect.
        </p>
      </div>

      {/* Marquee — full-bleed to the section edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left / right fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 bg-gradient-to-l from-black to-transparent" />

        <div
          className="skills-track flex w-max gap-4 py-4"
          style={{
            animation: "skills-marquee-ltr 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            willChange: "transform",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Skills and technologies"
        >
          {/* Two identical copies for a seamless loop. aria-hidden on the
              second so screen readers don't announce it twice. */}
          {skills.map((s, i) => (
            <SkillChip key={`a-${i}`} skill={s} />
          ))}
          {skills.map((s, i) => (
            <SkillChip key={`b-${i}`} skill={s} ariaHidden />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillChip({
  skill,
  ariaHidden = false,
}: {
  skill: Skill;
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="group relative flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.06] bg-[#0a0a0e] px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-purple-400/40"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(160px circle at 50% 50%, rgba(139, 92, 246, 0.18), transparent 70%)",
        }}
      />

      <img
        src={iconUrl(skill)}
        alt=""
        width={22}
        height={22}
        loading="eager"
        decoding="async"
        className="relative h-[22px] w-[22px] shrink-0"
      />
      <span className="relative whitespace-nowrap text-sm font-medium text-white/85 group-hover:text-white">
        {skill.name}
      </span>
    </div>
  );
}






---------------------------------------------------------------------------------------------------------------------------------



import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Achievement = {
  title: string;
  organization?: string;
  year: string;
  description: string;
  certificateUrl?: string;
};

// Replace with your own achievements.
const achievements: Achievement[] = [
  {
    title: "Winner — National Coding Hackathon",
    organization: "IIT Bombay Techfest",
    year: "2024",
    description:
      "Led a team of four to first place among 250+ teams. Built a real-time collaborative code editor with AI-assisted pair programming in 36 hours.",
    certificateUrl: "#",
  },
  {
    title: "Google Cloud Professional Cloud Developer",
    organization: "Google Cloud",
    year: "2024",
    description:
      "Cleared the Professional Cloud Developer exam. Focus areas: serverless architectures, GKE, and event-driven systems on Pub/Sub.",
    certificateUrl: "#",
  },
  {
    title: "Top 100 — ACM ICPC Regional",
    organization: "ACM Asia",
    year: "2023",
    description:
      "Placed in the top 100 out of 2,000+ teams at the Asia regional finals. Cleared the qualifying round with a perfect score.",
    certificateUrl: "#",
  },
  {
    title: "Open Source Contributor of the Month",
    organization: "shadcn/ui",
    year: "2023",
    description:
      "Recognized for accessibility improvements to the Dialog and Combobox components. Merged 12 PRs across the year.",
  },
  {
    title: "Best Student Paper",
    organization: "IEEE Undergraduate Research Symposium",
    year: "2023",
    description:
      "Presented research on efficient tokenization for edge-deployed language models. Awarded first prize by a panel of five faculty judges.",
    certificateUrl: "#",
  },
];

/**
 * Achievements — editorial vertical list. No cards, no bounding boxes.
 * Big gradient index numbers anchor each entry; hairline dividers separate
 * them. Each entry slides in from the left with a staggered delay so the
 * top one lands first and the rest cascade down.
 */
export default function Achievements() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="achievements"
      onMouseMove={onMove}
      className="relative w-full overflow-hidden bg-black py-24 px-6 sm:px-10 lg:px-20 text-white"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.06), transparent 60%)`,
        }}
      />

      {/* Floating background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-cyan-600/[0.06] blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-700/[0.06] blur-3xl animate-blob [animation-delay:6s]" />
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
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-purple-400/70">
            Recognition
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/50">
            Moments where the work found its footing.
          </p>
        </div>

        {/* Vertical list with hairline separators */}
        <ol className="divide-y divide-white/[0.06]">
          {achievements.map((a, i) => (
            <AchievementItem key={i} achievement={a} index={i} />
          ))}
        </ol>
      </div>
    </section>
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
    <motion.li
      ref={ref}
      className="group relative py-10 md:py-14"
      initial={{ opacity: 0, x: -32 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {/* Left: index number */}
        <div className="shrink-0 md:w-20 lg:w-24">
          <span
            aria-hidden
            className="text-4xl md:text-5xl font-bold leading-none tracking-tight bg-gradient-to-br from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Right: content */}
        <div className="flex-1 min-w-0">
          {/* Meta line: year + organization */}
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-purple-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              {achievement.year}
            </span>
            {achievement.organization && (
              <>
                <span className="h-px w-6 bg-white/20" />
                <span className="text-xs text-white/55">
                  {achievement.organization}
                </span>
              </>
            )}
          </div>

          {/* Title with underline that grows on hover */}
          <h3 className="relative mb-3 inline-block text-xl md:text-2xl font-semibold leading-snug text-white">
            {achievement.title}
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 group-hover:w-16"
            />
          </h3>

          {/* Description */}
          <p className="mb-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-white/60">
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
  );
}