import { skills } from "../utils/constants";

const Skills = () => {
    return (
        <section id="skills" className="bg-background px-6 py-24 md:px-24">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-secondary font-jetbrains">
                    Stack
                </p>
                <h2 className="mt-3 text-4xl font-jetbrains font-semibold text-primary md:text-5xl">
                    Skills & Tools
                </h2>
                <p className="mt-4 text-secondary font-inter text-base md:text-lg">
                    A blend of frontend craft, backend systems, infrastructure,
                    and tooling that helps me take products from concept to
                    shipped experiences.
                </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
                {skills.map(({ category, subSkills }) => (
                    <article
                        key={category}
                        className="rounded-2xl border border-border/70 bg-surface/60 p-6 shadow-[0_15px_35px_rgba(15,23,42,0.08)] dark:bg-surface/30"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-jetbrains font-semibold text-primary">
                                {category}
                            </h3>
                            <span className="text-xs font-jetbrains uppercase tracking-[0.5em] text-secondary">
                                {subSkills.length} tools
                            </span>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {subSkills.map(({ name, icon }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/80 px-3 py-2 text-left shadow-[0_10px_25px_rgba(15,23,42,0.06)] dark:bg-background/40"
                                >
                                    <img
                                        src={icon}
                                        alt={name}
                                        className="h-9 w-9 object-contain"
                                        loading="lazy"
                                    />
                                    <span className="font-jetbrains text-sm text-primary">
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
