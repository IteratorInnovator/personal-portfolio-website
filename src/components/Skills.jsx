import { skills } from "../utils/constants";

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-background px-4 py-20 text-primary sm:px-6 md:px-24 md:py-24"
        >
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary font-jetbrains sm:text-sm">
                    Stack
                </p>
                <h2 className="mt-3 text-3xl font-jetbrains font-semibold text-primary sm:text-4xl md:text-5xl">
                    Skills & Tools
                </h2>
                <p className="mt-4 text-secondary font-inter text-sm sm:text-base md:text-lg">
                    A blend of frontend craft, backend systems, infrastructure,
                    and tooling that helps me take products from concept to
                    shipped experiences.
                </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
                {skills.map(({ category, subSkills }) => (
                    <article
                        key={category}
                        className="rounded-2xl border border-border/70 bg-surface/60 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)] transition-colors dark:bg-surface/30 sm:p-6"
                    >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-jetbrains font-semibold text-primary sm:text-2xl">
                                {category}
                            </h3>
                            <span className="text-[0.65rem] font-jetbrains uppercase tracking-[0.4em] text-secondary sm:text-xs">
                                {subSkills.length} tools
                            </span>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-3">
                            {subSkills.map(({ name, icon }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/80 dark:bg-surface/40 px-3 py-2 text-left shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition-colors"
                                >
                                    <img
                                        src={icon}
                                        alt={name}
                                        className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                                        loading="lazy"
                                    />
                                    <span className="font-jetbrains text-xs text-primary sm:text-sm">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Skills;
