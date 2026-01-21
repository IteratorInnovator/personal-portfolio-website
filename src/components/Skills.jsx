import { motion } from "motion/react";
import { skills } from "../utils/constants";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-background px-4 py-20 text-primary sm:px-6 md:px-24 md:py-24"
        >
            <motion.div
                className="mx-auto max-w-5xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
            >
                <p className="text-xs uppercase tracking-[0.4em] text-secondary font-jetbrains sm:text-sm">
                    Stack
                </p>
                <h2 className="mt-3 text-3xl font-jetbrains font-semibold text-primary sm:text-4xl md:text-5xl">
                    Skills & Tools
                </h2>
                <p className="mt-4 text-secondary font-inter text-sm sm:text-base md:text-lg">
                    Technologies I'm most familiar with
                    across frontend, backend, infrastructure, and tooling to
                    bring ideas to life.
                </p>
            </motion.div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
                {skills.map(({ category, subSkills }, index) => (
                    <motion.article
                        key={category}
                        className="rounded-2xl border border-border/70 bg-surface/60 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)] transition-colors dark:bg-surface/30 sm:p-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
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
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Skills;
