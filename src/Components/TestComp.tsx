import { useEffect, useRef, useState } from "react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  stack: string[];
  link?: string;
};

// Replace these entries with your own experience.
const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "Acme Corp",
    period: "Jun 2024 — Present",
    location: "Remote",
    description:
      "Built and shipped reusable UI systems in React + TypeScript, cut bundle size by 28%, and led the redesign of the customer dashboard used by 40k+ monthly users.",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    link: "#",
  },
  {
    role: "Open Source Contributor",
    company: "Community Projects",
    period: "2023 — 2024",
    location: "GitHub",
    description:
      "Contributed accessibility fixes, animation utilities, and TypeScript typings to several component libraries. Merged 20+ PRs across the year.",
    stack: ["React", "a11y", "Framer Motion"],
    link: "#",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2022 — 2023",
    location: "India",
    description:
      "Designed and built marketing sites, portfolios, and small SaaS front-ends for early-stage founders. Focused on performance and clean, brand-forward UI.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

/**
 * Experience — a dark-themed, animated timeline section.
 * Drop this into your portfolio and add <Experience /> between your sections.
 * Tailwind v3+ required. The custom keyframes are declared in tailwind.config.js
 * (float, blob, pulseGlow). They fall back gracefully if not configured.
 */
export default function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Scroll-reveal for each card
  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll<HTMLElement>("[data-idx]");
    if (!nodes) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setVisible((prev) => {
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  // Cursor spotlight
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="experience"
      onMouseMove={onMove}
      className="relative w-full overflow-hidden bg-[#0a0a0f] py-24 px-6 sm:px-10 lg:px-20 text-white"
    >
      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.08), transparent 60%)`,
        }}
      />

      {/* Floating background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl animate-blob [animation-delay:6s]" />

        {/* Floating dots */}
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/40 animate-float-slow"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-purple-400/80">
            Journey
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/60">
            Roles I've held, teams I've shipped with, and things I've built along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-cyan-500/0" />

          <ul className="space-y-14">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              const isVisible = visible.has(idx);
              return (
                <li
                  key={idx}
                  data-idx={idx}
                  className={[
                    "relative flex flex-col sm:flex-row sm:items-center",
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse",
                    "transition-all duration-700",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8",
                  ].join(" ")}
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <span className="absolute inset-0 h-4 w-4 rounded-full bg-purple-500/50 blur-md animate-pulse-glow" />
                      <span className="relative block h-4 w-4 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 ring-4 ring-[#0a0a0f]" />
                    </div>
                  </div>

                  {/* Spacer for alternating sides on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div
                    className={[
                      "group relative w-full pl-12 sm:pl-0 sm:w-1/2",
                      isLeft ? "sm:pr-12" : "sm:pl-12",
                    ].join(" ")}
                  >
                    <ExperienceCard exp={exp} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -6, y: (px - 0.5) * 6 });
    setGlow({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 200ms ease-out",
      }}
      className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-purple-400/40"
    >
      {/* Radial hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(139,92,246,0.15), transparent 60%)`,
        }}
      />

      {/* Animated gradient border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(110deg,transparent_30%,rgba(168,85,247,0.4)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer" />
      </div>

      <div className="relative">
        <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
          <span className="text-purple-300/80">·</span>
          <span className="text-sm text-cyan-300/90">{exp.company}</span>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-x-3 text-xs text-white/50">
          <span>{exp.period}</span>
          {exp.location && (
            <>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>{exp.location}</span>
            </>
          )}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-white/70">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 transition-colors hover:border-purple-400/40 hover:text-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {exp.link && (
          <a
            href={exp.link}
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-purple-300 hover:text-purple-200"
          >
            Learn more
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
}