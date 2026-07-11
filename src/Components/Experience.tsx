import { useEffect, useRef, useState } from "react";
import { ExperienceData as experiences } from "../Data/experience";
import type { Company, ExpProject } from "../types/types";

/**
 * Experience — deep-dark themed section with one large card per company
 * and smaller nested cards for each project. Tailwind v3+ required.
 * Custom keyframes (float, blob, pulseGlow, shimmer) live in tailwind.config.js.
 */
export default function Experience() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState<Set<number>>(new Set());
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
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
            { threshold: 0.15 }
        );
        nodes.forEach((n) => io.observe(n));
        return () => io.disconnect();
    }, []);

    const onMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (

        <section
            id="experience"
            onMouseMove={onMove}
            className="relative w-full overflow-hidden bg-black py-24 px-6 sm:px-10 lg:px-20 text-white"
        >
            {/* Cursor-following spotlight (subtle) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.06), transparent 60%)`,
                }}
            />

            {/* Floating background accents — deep and low-opacity */}
            {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl animate-blob" />
                <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-cyan-600/6 blur-3xl animate-blob [animation-delay:3s]" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-700/6 blur-3xl animate-blob [animation-delay:6s]" />

                {[...Array(14)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-white/25 animate-float-slow"
                        style={{
                            top: `${(i * 37) % 100}%`,
                            left: `${(i * 53) % 100}%`,
                            animationDelay: `${i * 0.4}s`,
                            animationDuration: `${6 + (i % 5)}s`,
                        }}
                    />
                ))}
            </div> */}

            <div ref={containerRef} className="relative mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h3 className="title-a">
                        Experience
                    </h3>
                    <p className="subtitle-a">
                        Companies I've worked with and the projects I shipped inside them.
                    </p>
                    <div className="line-mf"></div>
                </div>

                {/* Timeline of company cards */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 sm:left-6 top-0 h-full w-px bg-linear-to-b from-purple-500/50 via-purple-500/30 to-cyan-500/50" />

                    <ul className="space-y-12">
                        {experiences.map((co, idx) => {
                            const isVisible = visible.has(idx);
                            return (
                                <li
                                    key={idx}
                                    data-idx={idx}
                                    className={[
                                        "relative pl-12 sm:pl-20",
                                        "transition-all duration-3500",
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                                    ].join(" ")}
                                    style={{ transitionDelay: `${idx * 120}ms` }}
                                >
                                    <CompanyCard company={co} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function CompanyCard({ company }: { company: Company }) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [glow, setGlow] = useState({ x: 50, y: 50 });
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const onMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        setTilt({ x: (py - 0.5) * -6, y: (px - 0.5) * 6 });
    };

    const onLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setGlow({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,

        });
    };

    const initials = company.company
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div ref={cardRef}
            onMouseMove={onMoveCard}
            onMouseLeave={onLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 200ms ease-out",
            }}>
            <div
                ref={cardRef}
                onMouseMove={onMove}
                className="group relative rounded-3xl border border-white/6 bg-[#0a0a0e] transition-colors duration-300 hover:border-purple-400/25"
            >
                {/* Radial hover glow */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(500px circle at ${glow.x}% ${glow.y}%, rgba(139,92,246,0.08), transparent 0%)`,
                    }}
                />

                {/* Shimmer edge on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(110deg,transparent_40%,rgba(168,85,247,0.15)_50%,transparent_60%)] bg-size-[200%_100%] animate-shimmer" />
                </div>

                <div className="relative p-6 sm:p-8">
                    {/* Company header */}
                    <div className="mb-6 flex flex-col gap-4 border-b border-white/6 pb-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            {/* Initials mark */}
                            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#111119] ring-1 ring-white/8">
                                <span className="bg-linear-to-br from-purple-300 to-cyan-300 bg-clip-text text-lg font-bold text-transparent">
                                    <img src={company.logo ?? initials} alt={initials} className="h-full w-full" />
                                </span>
                                <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-linear-to-br from-purple-500/30 to-cyan-500/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                                    {company.company}
                                </h3>
                                <p className="mt-0.5 text-sm font-semibold">{company.role}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:items-end text-xs font-normal">
                            <span className="rounded-full border border-white/6 bg-black/40 px-3 py-1">
                                {company.period}
                            </span>
                            {company.location && (
                                <span className="mt-2 sm:mt-1.5">{company.location}</span>
                            )}
                        </div>
                    </div>

                    {/* Optional summary */}
                    {company.summary && (
                        <p className="mb-6 max-w-3xl text-sm leading-relaxed font-light">
                            {company.summary}
                        </p>
                    )}

                    {/* Section label */}
                    <p className="mb-4 text-sm uppercase tracking-widest font-bold">
                        Projects
                    </p>

                    {/* Project grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {company.projects?.map((p, i) => (
                            <ProjectCard key={i} project={p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: ExpProject }) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glow, setGlow] = useState({ x: 50, y: 50 });

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        setTilt({ x: (py - 3.5) * -4, y: (px - 3.5) * 4 });
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
            className="group/proj relative h-full rounded-2xl border border-white/5 bg-[#07070b] p-5 transition-colors duration-300 hover:border-purple-400/30"
        >
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/proj:opacity-100"
                style={{
                    background: `radial-gradient(300px circle at ${glow.x}% ${glow.y}%, rgba(139,92,246,0.12), transparent 60%)`,
                }}
            />

            <div className="relative flex h-full flex-col">
                <div className="mb-2 flex items-start justify-between gap-3">
                    <h4 className="text-base font-semibold text-white">{project.name}</h4>
                    {project.link && (
                        <a
                            href={project.link}
                            aria-label={`Open ${project.name}`}
                            className="text-white/35 transition-colors h-full hover:text-purple-300"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden
                            >
                                <path d="M7 17L17 7" />
                                <path d="M8 7h9v9" />
                            </svg>
                        </a>
                    )}
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed font-normal">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-white/6 bg-black/40 px-2.5 py-0.5 text-sm font-normal transition-colors hover:text-amber-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}