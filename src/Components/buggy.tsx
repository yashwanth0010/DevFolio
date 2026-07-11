import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Project = {
    title: string;
    category: string;
    description: string;
    stack: string[];
    liveUrl?: string;
    repoUrl?: string;
    accent: "purple" | "cyan" | "fuchsia";
};

// Replace with your own projects.
const projects: Project[] = [
    {
        title: "NeuroBoard",
        category: "AI · Web App",
        description:
            "Real-time collaborative whiteboard with an on-device diffusion model for sketch-to-image. Streams strokes over WebRTC and generates previews in under 400ms.",
        stack: ["Next.js", "TypeScript", "WebRTC", "ONNX Runtime", "Tailwind"],
        liveUrl: "#",
        repoUrl: "#",
        accent: "purple",
    },
    {
        title: "Pulse Analytics",
        category: "Dashboard",
        description:
            "Product analytics dashboard for a mid-stage SaaS. Virtualized tables, streamed queries, and a token-driven chart system. Used daily by the growth team.",
        stack: ["React", "TypeScript", "TanStack Query", "Recharts"],
        liveUrl: "#",
        repoUrl: "#",
        accent: "cyan",
    },
    {
        title: "Verse",
        category: "Mobile · iOS",
        description:
            "Minimalist journaling app with voice transcription, mood tracking, and end-to-end encrypted sync. Featured in the App Store's productivity picks.",
        stack: ["React Native", "Expo", "Whisper", "SQLite"],
        liveUrl: "#",
        accent: "fuchsia",
    },
    {
        title: "Portfolio OS",
        category: "Creative · Web",
        description:
            "Interactive desktop-style portfolio with draggable windows, a working terminal, and a tiny file system. A love letter to skeuomorphic UIs.",
        stack: ["React", "Zustand", "Framer Motion", "Tailwind"],
        liveUrl: "#",
        repoUrl: "#",
        accent: "purple",
    },
    {
        title: "Grasp",
        category: "Developer Tool",
        description:
            "CLI that scans your codebase and generates architecture diagrams from imports and call graphs. Ships as a single binary via Bun.",
        stack: ["TypeScript", "Bun", "AST", "D3"],
        repoUrl: "#",
        accent: "cyan",
    },
    {
        title: "Loop",
        category: "Music · Web Audio",
        description:
            "Browser-based looper and step sequencer. Runs entirely in Web Audio, exports stems as WAV, and plays nicely with MIDI controllers.",
        stack: ["React", "Web Audio API", "Web MIDI", "Tone.js"],
        liveUrl: "#",
        accent: "fuchsia",
    },
];

// Accent color tokens (Tailwind must see full class strings, so map manually)
const accentMap = {
    purple: {
        dot: "bg-purple-400",
        dotGlow: "shadow-[0_0_24px_rgba(168,85,247,0.7)]",
        ring: "hover:border-purple-400/40",
        text: "text-purple-300",
        gradientFrom: "from-purple-500/25",
        gradientTo: "to-purple-500/0",
        glowRgb: "168, 85, 247",
    },
    cyan: {
        dot: "bg-cyan-400",
        dotGlow: "shadow-[0_0_24px_rgba(34,211,238,0.7)]",
        ring: "hover:border-cyan-400/40",
        text: "text-cyan-300",
        gradientFrom: "from-cyan-500/25",
        gradientTo: "to-cyan-500/0",
        glowRgb: "34, 211, 238",
    },
    fuchsia: {
        dot: "bg-fuchsia-400",
        dotGlow: "shadow-[0_0_24px_rgba(232,121,249,0.7)]",
        ring: "hover:border-fuchsia-400/40",
        text: "text-fuchsia-300",
        gradientFrom: "from-fuchsia-500/25",
        gradientTo: "to-fuchsia-500/0",
        glowRgb: "232, 121, 249",
    },
} as const;

/**
 * Projects — dark-themed section with a scroll-triggered
 * dot-to-card expansion animation. Requires framer-motion.
 * Reuses the same theme tokens as the Experience section.
 */
export default function Projectss() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const onMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <section
            id="projects"
            onMouseMove={onMove}
            className="relative w-full overflow-hidden bg-black py-24 px-6 sm:px-10 lg:px-20 text-white"
        >
            {/* Cursor-following spotlight */}
            <div
                className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(139,92,246,0.06), transparent 60%)`,
                }}
            />

            {/* Floating background accents */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl animate-blob" />
                <div className="absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-cyan-600/[0.06] blur-3xl animate-blob [animation-delay:3s]" />
                <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-fuchsia-700/[0.06] blur-3xl animate-blob [animation-delay:6s]" />
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

            <div ref={sectionRef} className="relative mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="mb-3 text-xs uppercase tracking-[0.4em] text-purple-400/70">
                        Selected Work
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                        <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/50">
                        Scroll a little — each dot below expands into the project it represents.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, i) => (
                        <ProjectCell key={p.title} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCell({ project, index }: { project: Project; index: number }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2, margin: "-50px" });
    const accent = accentMap[project.accent];

    return (
        <div ref={ref} className="relative min-h-[420px]">
            {/* Pulsing dot — shown before expansion */}
            <AnimatePresence>
                {!isInView && (
                    <motion.div
                        className="pointer-events-none absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className={`h-3 w-3 rounded-full ${accent.dot} ${accent.dotGlow}`}
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.15,
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The card — grows from a dot */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                    isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{
                    duration: 3,
                    delay: index * 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ transformOrigin: "center" }}
            >
                <ProjectCard project={project} isInView={isInView} index={index} accent={accent} />
            </motion.div>
        </div>
    );
}

function ProjectCard({
    project,
    isInView,
    index,
    accent,
}: {
    project: Project;
    isInView: boolean;
    index: number;
    accent: (typeof accentMap)[keyof typeof accentMap];
}) {
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

    // Content stagger: appear after card has expanded
    const contentDelay = index * 0.12 + 0.5;

    return (
        <div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 200ms ease-out",
            }}
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0e] p-6 transition-colors duration-300 ${accent.ring}`}
        >
            {/* Radial hover glow */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(${accent.glowRgb}, 0.12), transparent 60%)`,
                }}
            />

            {/* Top gradient wash — subtle color signature per project */}
            <div
                className={`pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-b ${accent.gradientFrom} ${accent.gradientTo} blur-2xl`}
            />

            <motion.div
                className="relative flex h-full flex-col"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: contentDelay }}
            >
                {/* Header row: category + link icons */}
                <div className="mb-4 flex items-start justify-between gap-3">
                    <span
                        className={`inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${accent.text}`}
                    >
                        <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                        {project.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                        {project.repoUrl && (
                            <IconButton href={project.repoUrl} label={`${project.title} repo`}>
                                <GithubIcon />
                            </IconButton>
                        )}
                        {project.liveUrl && (
                            <IconButton href={project.liveUrl} label={`${project.title} live`}>
                                <ExternalIcon />
                            </IconButton>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/60">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-white/[0.06] bg-black/40 px-2.5 py-0.5 text-[11px] text-white/65 transition-colors hover:border-purple-400/40 hover:text-purple-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

function IconButton({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-black/40 text-white/50 transition-all hover:border-purple-400/40 hover:text-purple-200 hover:scale-110"
        >
            {children}
        </a>
    );
}

function GithubIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
    );
}

function ExternalIcon() {
    return (
        <svg
            width="13"
            height="13"
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
    );
}