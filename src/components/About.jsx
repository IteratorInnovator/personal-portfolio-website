import profileImage from "../assets/profile.jpg";
import { highlights } from "../utils/constants";


const About = () => {
    return (
        <section
            id="about"
            className="px-6 py-24 md:px-24 bg-white/5 dark:bg-white/0"
        >
            <h1 className="ext-4xl text-center font-jetbrains font-semibold text-primary md:text-5xl mb-12">
                About Me
            </h1>
            <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.9fr,1.1fr]">
                <div className="mx-auto w-full max-w-sm lg:max-w-md">
                    <div className="relative">
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-tr from-accent/20 via-transparent to-white/30 blur-3xl"
                        />
                        <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white/60 shadow-[0_20px_45px_rgba(15,23,42,0.18)] dark:border-slate-700/60 dark:bg-white/10">
                            <img
                                src={profileImage}
                                alt="Portrait of Harry"
                                className="h-full w-full aspect-square object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/40 bg-white/85 px-5 py-3 text-sm font-jetbrains text-slate-900 shadow-lg backdrop-blur dark:bg-slate-900/80 dark:text-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            Always exploring new technologies
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
