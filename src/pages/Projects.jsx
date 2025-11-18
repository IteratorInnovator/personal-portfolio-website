import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../utils/constants";
import {
    ArrowUpRight,
    ExternalLink,
    Gauge,
    GitBranch,
    Github,
    Layers,
    Rocket,
    Sparkles,
    Target,
    X,
} from "lucide-react";

const buildPhases = [
    {
        title: "Discover & Scope",
        description:
            "Clarify the constraints, understand the audience, and co-design the shape of done before a single line of code ships.",
        icon: Sparkles,
    },
    {
        title: "Build & Iterate",
        description:
            "Ship in tight loops – wireframes, prototypes, PRs – so feedback arrives early and architecture decisions stay reversible.",
        icon: GitBranch,
    },
    {
        title: "Ship & Measure",
        description:
            "Launch with instrumentation, write the docs, and hand over confident systems that can be extended once I’m gone.",
        icon: Gauge,
    },
];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = useMemo(() => {
        const unique = new Set();
        projects.forEach((project) => {
            (project.categories ?? []).forEach((category) =>
                unique.add(category)
            );
        });
        return ["all", ...Array.from(unique)];
    }, []);

    const heroStats = useMemo(() => {
        const uniqueCategories = new Set();
        const uniqueStack = new Set();
        projects.forEach((project) => {
            (project.categories ?? []).forEach((category) =>
                uniqueCategories.add(category)
            );
            (project.stack ?? []).forEach((item) => uniqueStack.add(item));
        });

        return [
            { label: "Shipped Projects", value: projects.length, icon: Rocket },
            {
                label: "Focus Areas",
                value: uniqueCategories.size || "—",
                icon: Layers,
            },
            {
                label: "Technologies",
                value: uniqueStack.size || "—",
                icon: Target,
            },
        ];
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeCategory === "all") {
            return projects;
        }

        return projects.filter((project) =>
            (project.categories ?? []).some(
                (category) =>
                    category.toLowerCase() === activeCategory.toLowerCase()
            )
        );
    }, [activeCategory]);

    useEffect(() => {
        if (!selectedProject) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedProject]);

    useEffect(() => {
        if (typeof document === "undefined") {
            return undefined;
        }
        if (!selectedProject) {
            return undefined;
        }

        const { body } = document;
        const previousOverflow = body.style.overflow;
        body.style.overflow = "hidden";

        return () => {
            body.style.overflow = previousOverflow;
        };
    }, [selectedProject]);

    const handleCardSelect = (project) => {
        setSelectedProject(project);
    };

    return (
        <div className="bg-background text-primary">
            <Header />
            <main className="pt-24 sm:pt-28">
                <section className="mx-auto max-w-5xl px-4 text-left sm:px-6">
                    <p className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary sm:text-sm">
                        Work
                    </p>
                    <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <h1 className="text-3xl font-jetbrains font-semibold sm:text-4xl md:text-5xl">
                                Projects & Systems
                            </h1>
                            <p className="mt-4 max-w-2xl font-inter text-sm text-secondary sm:text-base md:text-lg">
                                Systems I’ve architected, interfaces I’ve designed,
                                and automation that keeps teams shipping. Each build
                                started from a real operational pain point and
                                shipped with documentation, instrumentation, and a
                                maintainer-friendly handover.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {heroStats.map(({ label, value, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="flex min-w-[140px] flex-col rounded-2xl border border-border bg-surface/80 px-4 py-3 text-left shadow-[0_15px_35px_rgba(15,23,42,0.08)]"
                                >
                                    <Icon className="h-4 w-4 text-accent" />
                                    <span className="mt-2 font-jetbrains text-2xl font-semibold">
                                        {value}
                                    </span>
                                    <span className="text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
                    <div className="flex flex-col gap-4 border border-border rounded-3xl bg-surface/60 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                        <div className="flex flex-wrap items-center gap-3">
                            <Sparkles className="h-4 w-4 text-accent" />
                            <p className="text-sm font-jetbrains text-secondary">
                                Filter by focus area
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => {
                                const isActive = activeCategory === category;
                                const label =
                                    category === "all" ? "All work" : category;
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-jetbrains transition ${
                                            isActive
                                                ? "bg-accent text-white border-accent"
                                                : "border-border/60 bg-background/70 text-secondary hover:border-border hover:text-primary"
                                        }`}
                                    >
                                        {label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredProjects.length === 0 ? (
                            <div className="col-span-full rounded-3xl border border-dashed border-border/80 bg-background/80 p-8 text-center text-secondary">
                                Nothing tagged under that category yet. Pick another filter
                                or reach out if you’d like to collaborate on one.
                            </div>
                        ) : (
                            filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onSelect={() => handleCardSelect(project)}
                                />
                            ))
                        )}
                    </div>
                </section>

                <section className="mx-auto mt-16 max-w-5xl px-4 pb-20 sm:px-6">
                    <div className="rounded-3xl border border-border bg-surface/60 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                        <p className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary">
                            Build philosophy
                        </p>
                        <h2 className="mt-4 text-3xl font-jetbrains font-semibold">
                            How I approach a project
                        </h2>
                        <p className="mt-3 max-w-3xl font-inter text-base text-secondary">
                            Whether it’s an automation script or a multi-surface
                            experience, I lean on fast feedback loops and tidy handoffs so
                            teams can extend the work long after the initial launch.
                        </p>
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {buildPhases.map(({ title, description, icon: Icon }, index) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-border bg-background/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <p className="mt-4 text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary">
                                        Step {`0${index + 1}`}
                                    </p>
                                    <h3 className="mt-2 font-jetbrains text-lg font-semibold text-primary">
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-sm font-inter text-secondary">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-jetbrains text-sm font-semibold uppercase tracking-[0.25em] text-background transition hover:bg-accent-hover"
                            >
                                Start a build
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                            <p className="text-sm font-inter text-secondary">
                                Have an idea but not sure where it fits? I’ll help you shape
                                the brief, then own the implementation end to end.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

const ProjectCard = ({ project, onSelect }) => {
    const { title, type, summary, repoUrl, liveUrl, status, stack } =
        project;

    const handleCardKeyPress = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect?.();
        }
    };

    return (
        <article
            className="group relative flex h-full cursor-pointer flex-col rounded-3xl border border-border bg-surface/60 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition hover:border-accent"
            role="button"
            tabIndex={0}
            onClick={onSelect}
            onKeyDown={handleCardKeyPress}
            aria-label={`Open details for ${title}`}
        >
            <div className="flex flex-wrap items-center gap-2 text-[0.6rem] font-jetbrains uppercase tracking-[0.4em] text-secondary">
                {type && <span>{type}</span>}
                {status && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[0.55rem]">
                        {status}
                    </span>
                )}
            </div>
            <h3 className="mt-4 text-2xl font-jetbrains font-semibold text-primary">
                {title}
            </h3>
            <p className="mt-3 text-sm font-inter text-secondary">
                {summary}
            </p>
            {stack?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {stack.slice(0, 4).map((tech) => (
                        <span
                            key={`${title}-${tech}`}
                            className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-jetbrains text-secondary"
                        >
                            {tech}
                        </span>
                    ))}
                    {stack.length > 4 && (
                        <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-jetbrains text-secondary">
                            +{stack.length - 4} more
                        </span>
                    )}
                </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-jetbrains text-accent transition hover:bg-accent/10"
                        onClick={(event) => event.stopPropagation()}
                    >
                        View live
                        <ExternalLink className="h-4 w-4" />
                    </a>
                )}
                {repoUrl && (
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-jetbrains text-primary transition hover:border-accent hover:text-accent"
                        onClick={(event) => event.stopPropagation()}
                    >
                        Repository
                        <Github className="h-4 w-4" />
                    </a>
                )}
            </div>
            <div className="mt-auto w-full pt-6">
                <p className="text-center text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary">
                    Tap for full details
                </p>
            </div>
        </article>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const {
        title,
        summary,
        problem,
        solution,
        outcome,
        stack,
        highlights,
        metrics,
        repoUrl,
        liveUrl,
        type,
        status,
    } = project;

    const handleDialogClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 py-6 sm:px-4 sm:py-8 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl rounded-[28px] border border-border bg-background p-6 sm:p-8 shadow-[0_40px_80px_rgba(15,23,42,0.45)] max-h-[90vh] overflow-y-auto"
                onClick={handleDialogClick}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer absolute right-4 top-4 sm:right-6 sm:top-6 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-primary hover:text-accent"
                    aria-label="Close project details"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-jetbrains uppercase tracking-[0.3em] text-secondary">
                    {type && <span>{type}</span>}
                    {status && (
                        <span className="rounded-full border border-border px-2 py-0.5 text-[0.55rem]">
                            {status}
                        </span>
                    )}
                </div>
                <h2
                    id="project-modal-title"
                    className="mt-4 text-3xl font-jetbrains font-semibold text-primary"
                >
                    {title}
                </h2>
                <p className="mt-4 font-inter text-base text-secondary">{summary}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <InfoBlock label="Problem" text={problem} />
                    <InfoBlock label="Solution" text={solution} />
                    <InfoBlock label="Outcome" text={outcome} />
                </div>
                {metrics?.length > 0 && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {metrics.map(({ label, value }) => (
                            <div
                                key={`${title}-metric-${label}`}
                                className="rounded-2xl border border-border/70 bg-surface/70 px-4 py-4"
                            >
                                <p className="text-[0.6rem] font-jetbrains uppercase tracking-[0.3em] text-secondary">
                                    {label}
                                </p>
                                <p className="mt-2 text-xl font-jetbrains text-primary">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                {highlights?.length > 0 && (
                    <div className="mt-6">
                        <p className="text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary">
                            Highlights
                        </p>
                        <ul className="mt-3 space-y-3 text-sm font-inter text-secondary">
                            {highlights.map((highlight, index) => (
                                <li
                                    key={`${title}-modal-highlight-${index}`}
                                    className="flex gap-3"
                                >
                                    <span className="text-accent">—</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {stack?.length > 0 && (
                    <div className="mt-6">
                        <p className="text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary">
                            Stack
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {stack.map((tech) => (
                                <span
                                    key={`${title}-modal-${tech}`}
                                    className="rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-xs font-jetbrains text-secondary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="mt-8 flex flex-wrap gap-3">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2 text-sm font-jetbrains text-accent transition hover:bg-accent/10"
                        >
                            View live
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-jetbrains text-primary transition hover:border-accent hover:text-accent"
                        >
                            Repository
                            <Github className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const InfoBlock = ({ label, text }) => (
    <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
        <p className="text-[0.6rem] font-jetbrains uppercase tracking-[0.3em] text-secondary">
            {label}
        </p>
        <p className="mt-2 text-sm font-inter text-primary">
            {text}
        </p>
    </div>
);

export default Projects;
