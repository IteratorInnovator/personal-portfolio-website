import profileImage from "../assets/profile.jpg";
import { highlights } from "../utils/constants";

const About = () => {
    return (
        <section id="about" className="bg-background px-6 py-24 md:px-24">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                    Story
                </p>
                <h2 className="mt-3 text-4xl font-jetbrains font-semibold text-primary md:text-5xl">
                    About Me
                </h2>
                <p className="mt-4 text-secondary font-inter text-base md:text-lg">
                    A curious builder driven by craft, people, and the impact of
                    well-designed systems. I blend technical depth with
                    collaboration to ship meaningful experiences.
                </p>
            </div>
            <div className="mx-auto mt-14 grid max-w-6xl items-center gap-16 lg:grid-cols-[0.9fr,1.1fr]">
                <div className="mx-auto w-full max-w-sm lg:max-w-md">
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-tr from-accent/20 via-transparent to-white/30 blur-3xl" />
                        <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white/60 shadow-[0_20px_45px_rgba(15,23,42,0.18)] dark:border-slate-700/60 dark:bg-white/10">
                            <img
                                src={profileImage}
                                alt="Portrait of Harry"
                                className="h-full w-full aspect-square object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 flex w-[50%] -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/40 bg-white/85 px-4 py-2 text-[10px] font-jetbrains text-slate-900 shadow-lg backdrop-blur dark:bg-slate-900/80 dark:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-xs md:text-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 sm:h-2.5 sm:w-2.5" />
                            <span className="text-center sm:text-left">
                                Always exploring new technologies
                            </span>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-slate-200/40 bg-white/30 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700/40 dark:bg-white/5"
                            >
                                <p className="text-xs font-jetbrains uppercase tracking-[0.25em] text-secondary">
                                    {item.title}
                                </p>
                                <p className="mt-3 text-2xl font-jetbrains font-semibold text-primary">
                                    {item.value}
                                </p>
                                <p className="mt-2 text-sm text-secondary">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
