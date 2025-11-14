import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const floatingOrbs = [
    { size: 320, top: "8%", left: "18%", opacity: 0.35, delay: "0s", duration: "18s" },
    { size: 260, top: "65%", left: "70%", opacity: 0.25, delay: "1.4s", duration: "21s" },
    { size: 180, top: "35%", left: "72%", opacity: 0.3, delay: "0.8s", duration: "16s" },
    { size: 220, top: "72%", left: "18%", opacity: 0.22, delay: "2.1s", duration: "20s" },
];

const randomDigits = () =>
    Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join("");

const NotFound = () => {
    const [glitchText, setGlitchText] = useState("404");

    useEffect(() => {
        let resetTimeout;
        const glitchInterval = setInterval(() => {
            setGlitchText(randomDigits());
            resetTimeout = window.setTimeout(() => setGlitchText("404"), 200);
        }, 2600);

        return () => {
            clearInterval(glitchInterval);
            if (resetTimeout) {
                clearTimeout(resetTimeout);
            }
        };
    }, []);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20 text-primary">
            <div className="notfound-scanlines pointer-events-none absolute inset-0 opacity-40" />
            <div className="absolute inset-0 overflow-hidden">
                {floatingOrbs.map((orb, index) => (
                    <span
                        key={`${orb.top}-${orb.left}-${index}`}
                        className="notfound-orb"
                        style={{
                            width: orb.size,
                            height: orb.size,
                            top: orb.top,
                            left: orb.left,
                            opacity: orb.opacity,
                            animationDelay: orb.delay,
                            animationDuration: orb.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
                <p className="font-jetbrains text-xs uppercase tracking-[0.6em] text-secondary">
                    signal lost
                </p>
                <div className="relative rounded-[2.5rem] border border-border/60 bg-surface/70 px-12 py-8 shadow-[0_35px_80px_rgba(15,23,42,0.35)] backdrop-blur">
                    <span
                        className="notfound-glitch text-8xl font-jetbrains font-bold text-accent"
                        data-text={glitchText}
                    >
                        {glitchText}
                    </span>
                    <span className="mt-4 block text-lg font-jetbrains tracking-[0.3em] text-secondary">
                        page unavailable
                    </span>
                </div>

                <p className="max-w-2xl font-inter text-lg text-secondary">
                    The page you’re scanning for either moved, never existed, or
                    slipped through a rift. Let’s route you back to something
                    real.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        to="/"
                        className="rounded-full bg-accent px-10 py-3 font-jetbrains text-lg font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
                    >
                        Return Home
                    </Link>
                    <Link
                        to="/projects"
                        className="rounded-full border border-border px-10 py-3 font-jetbrains text-lg font-semibold text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                        Browse Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
