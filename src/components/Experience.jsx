import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { experienceTimeline } from "../utils/constants";

const statusStyles = {
    ongoing:
        "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200",
    completed:
        "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-200",
};

const statusLabel = {
    ongoing: "In Progress",
    completed: "Completed",
};

const Experience = () => {
    return (
        <div className="w-full space-y-4">
            {experienceTimeline.map((item) => (
                <ExperienceEntry key={`${item.title}-${item.period}`} item={item} />
            ))}
        </div>
    );
};

const ExperienceEntry = ({ item }) => {
    const {
        title,
        place,
        period,
        location,
        status,
        description,
        responsibilities,
        technologies,
    } = item;
    const badgeClass =
        statusStyles[status] ?? "border-border bg-background/70 text-primary";
    const badgeText = statusLabel[status] ?? status;
    const hasResponsibilities =
        Array.isArray(responsibilities) && responsibilities.length > 0;
    const [showResponsibilities, setShowResponsibilities] = useState(false);

    return (
        <article className="space-y-5 rounded-2xl border border-border/70 bg-surface/60 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:bg-surface/30">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="flex w-full flex-col gap-3 md:w-60 md:shrink-0">
                    <span className="font-jetbrains text-xs uppercase tracking-[0.4em] text-secondary">
                        {period}
                    </span>
                    <div className="space-y-1">
                        <p className="font-jetbrains text-sm text-primary">{place}</p>
                        {location && (
                            <p className="flex items-center gap-2 font-inter text-sm text-secondary">
                                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                                <span>{location}</span>
                            </p>
                        )}
                    </div>
                    <span
                        className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] font-jetbrains uppercase tracking-[0.4em] ${badgeClass}`}
                    >
                        {badgeText}
                    </span>
                </div>
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-xl font-jetbrains font-semibold text-primary">
                            {title}
                        </h3>
                        {Array.isArray(technologies) && technologies.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <span
                                        key={`${title}-${tech}`}
                                        className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-jetbrains text-secondary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <p className="font-inter text-base text-secondary">{description}</p>
                </div>
            </div>
            {hasResponsibilities && (
                <div className="border-t border-border/70 pt-4">
                    <button
                        type="button"
                        onClick={() => setShowResponsibilities((prev) => !prev)}
                        className="flex w-full items-center justify-between text-left font-jetbrains text-xs uppercase tracking-[0.3em] text-primary"
                        aria-expanded={showResponsibilities}
                    >
                        <span>Key Contributions</span>
                        {showResponsibilities ? (
                            <ChevronUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        )}
                    </button>
                    {showResponsibilities && (
                        <ul className="mt-3 space-y-2">
                            {responsibilities.map((item, index) => (
                                <li
                                    key={`${title}-resp-${index}`}
                                    className="flex gap-3 text-sm font-inter text-secondary"
                                >
                                    <span className="text-primary">—</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </article>
    );
};

export default Experience;
