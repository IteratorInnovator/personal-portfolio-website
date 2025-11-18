import { MapPin, Send } from "lucide-react";
import { SiReact, SiTailwindcss, SiVercel } from "react-icons/si";
import { Link } from "react-router-dom";
import { socialLinks } from "../utils/constants.js";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-background text-primary">
            <div className="footer-aurora pointer-events-none absolute inset-0 opacity-70" />
            <div className="footer-grid pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-40" />

            <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 md:px-16">
                <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
                    <div>
                        <p className="text-xs font-jetbrains uppercase tracking-[0.5em] text-secondary max-md:text-center">
                            stay in touch
                        </p>
                        <h2 className="mt-4 text-4xl font-jetbrains font-semibold text-primary md:text-5xl max-md:text-center">
                            Let’s build something bold.
                        </h2>
                        <p className="mt-5 max-w-xl text-lg text-secondary max-md:text-center">
                            Have an idea, project, or open role? I’m always down
                            to jam on thoughtful products, performant systems,
                            and teams that care about craft.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4 max-md:justify-center">
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-jetbrains text-sm font-semibold uppercase tracking-[0.25em] text-background transition hover:bg-accent-hover"
                            >
                                Browse work
                                <Send size={18} />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-jetbrains text-sm font-semibold uppercase tracking-[0.25em] text-primary transition hover:border-accent hover:text-accent"
                            >
                                Say hello
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl dark:border-border/60 dark:bg-surface/40">
                        <div className="flex flex-col gap-8">
                            <div>
                                <p className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary">
                                    now
                                </p>
                                <p className="mt-2 font-jetbrains text-2xl text-primary">
                                    Open to new roles
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-secondary">
                                <MapPin size={20} />
                                Singapore
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialLinks.map(
                                    ({ name, icon: Icon, href }) => (
                                        <a
                                            key={name}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-3 py-3 text-sm font-jetbrains uppercase tracking-[0.3em] text-secondary transition hover:text-accent"
                                        >
                                            <Icon
                                                size={18}
                                                className="text-primary transition group-hover:text-accent"
                                            />
                                            {name}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-border pt-8 text-sm text-secondary items-center justify-between">
                    <p className="flex w-full flex-wrap items-center justify-center gap-2 text-center text-xs sm:text-sm">
                        © {new Date().getFullYear()} Harry. All rights reserved.
                    </p>
                    <p className="flex w-full flex-wrap items-center justify-center gap-3 text-center text-xs sm:text-sm">
                        <span>Built with</span>
                        <span className="inline-flex items-center gap-1">
                            <SiReact className="h-4 w-4 text-primary" />
                            React
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <SiTailwindcss className="h-4 w-4 text-primary" />
                            Tailwind CSS
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <SiVercel className="h-4 w-4 text-primary" />
                            Vercel
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
