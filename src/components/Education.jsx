import { educationTimeline } from "../utils/constants";

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

const Education = () => {
    return (
        <div className="w-full space-y-4">
            {educationTimeline.map(
                ({
                    title,
                    place,
                    period,
                    status,
                    grade,
                    description,
                    highlights,
                }) => {
                    const badgeClass =
                        statusStyles[status] ??
                        "border-border bg-background/70 text-primary";
                    const badgeLabel = statusLabel[status] ?? status;

                    return (
                        <article
                            key={`${title}-${period}`}
                            className="space-y-5 rounded-2xl border border-border/70 bg-surface/60 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:bg-surface/30"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                                <div className="flex w-full flex-col gap-3 md:w-56 md:flex-shrink-0">
                                    <span className="font-jetbrains text-xs uppercase tracking-[0.4em] text-secondary">
                                        {period}
                                    </span>
                                    <span className="font-jetbrains text-sm text-primary">
                                        {place}
                                    </span>
                                    <span
                                        className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] font-jetbrains uppercase tracking-[0.4em] ${badgeClass}`}
                                    >
                                        {badgeLabel}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-jetbrains font-semibold text-primary">
                                        {title}
                                    </h3>
                                    {grade && (
                                        <div className="mt-2">
                                            <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-jetbrains text-secondary">
                                                {grade}
                                            </span>
                                        </div>
                                    )}
                                    <p className="mt-3 font-inter text-base text-secondary">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            {Array.isArray(highlights) &&
                                highlights.length > 0 && (
                                    <div>
                                        <p className="font-jetbrains text-xs uppercase tracking-[0.3em] text-secondary">
                                            Co-Curricular Activities
                                        </p>
                                        <ul className="mt-3 space-y-2">
                                            {highlights.map((point, index) => (
                                                <li
                                                    key={`${title}-highlight-${index}`}
                                                    className="flex gap-3 text-sm font-inter text-secondary"
                                                >
                                                    <span className="text-primary">
                                                        —
                                                    </span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                        </article>
                    );
                }
            )}
        </div>
    );
};

export default Education;
