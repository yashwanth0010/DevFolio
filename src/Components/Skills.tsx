import type { Skill } from "../types/types";
import { skillsData as skills } from "../Data/skills.js";

const iconUrl = (s: Skill) => {
    if (s.localImgUrl) {
        return s.localImgUrl;
    }
    else {
        return s.color
            ? `https://cdn.simpleicons.org/${s.slug}/${s.color}`
            : `https://cdn.simpleicons.org/${s.slug}`;
    }
}

export default function Skills() {
    return (
        <section
            id="skills"
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
            {/* <div
                className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.06), transparent 60%)`,
                }}
            /> */}

            {/* Floating background */}
            {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl animate-blob" />
                <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-cyan-600/[0.06] blur-3xl animate-blob [animation-delay:3s]" />
                <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-fuchsia-700/[0.06] blur-3xl animate-blob [animation-delay:6s]" />
            </div> */}

            {/* Header */}
            <div className="relative mx-auto mb-14 max-w-6xl px-6 sm:px-10 lg:px-20 text-center">
                <div className="mb-16 text-center">
                    <h3 className="title-a">
                        Skills
                    </h3>
                    <div className="line-mf"></div>
                </div>
            </div>

            {/* Marquee — full-bleed to the section edges */}
            <div className="relative w-full overflow-hidden">
                {/* Left / right fade masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 bg-linear-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 bg-linear-to-l from-black to-transparent" />

                <div
                    className="skills-track flex w-max gap-4 py-4"
                    style={{
                        animation: "skills-marquee-ltr 40s linear infinite",
                        willChange: "transform",
                    }}
                    // onMouseEnter={() => setPaused(true)}
                    // onMouseLeave={() => setPaused(false)}
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
            className="group relative flex shrink-0 items-center gap-3 rounded-2xl border border-white/6 bg-[#0a0a0e] px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.15] hover:border-purple-400/40"
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
                loading="eager"
                decoding="async"
                className="relative h-[30px] w-[30px] shrink-0"
            />
            <span className="relative whitespace-nowrap text-sm font-medium text-white/85 group-hover:text-white group-hover:font-bold">
                {skill.name}
            </span>
        </div>
    );
}