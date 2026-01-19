import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button } from "./ui/moving-border";
import { Link } from "react-router-dom";
import Resume from "../assets/Ng Kok Jing Resume.pdf";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const phrases = [
    "Software Engineer",
    "Problem Solver",
    "Coding Mentor",
];

const useTypewriter = (phrases) => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        setText(currentPhrase.slice(0, charIndex));

        let timeout;

        if (!isDeleting && charIndex < currentPhrase.length) {
            const typingSpeed = Math.random() * 60 + 60;
            timeout = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
        } else if (!isDeleting && charIndex === currentPhrase.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2500);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex((c) => c - 1), 75);
        } else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setPhraseIndex((i) => (i + 1) % phrases.length);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex, phrases]);

    return text;
};

const Hero = () => {
    const text = useTypewriter(phrases);

    return (
        <section
            id="home"
            className="relative max-sm:pt-10 px-4 text-primary sm:px-6 md:px-10 lg:px-20"
        >
            <BackgroundBeamsWithCollision>
                <motion.div
                    className="mx-auto flex max-w-4xl flex-col items-center"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.15 }}
                >
                    {/* Intro Block */}
                    <motion.div
                        className="text-center"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-sm sm:text-base md:text-lg font-jetbrains uppercase tracking-[0.3em] text-secondary">
                            Welcome, I'm Harry!
                        </h1>
                    </motion.div>

                    {/* Role Block */}
                    <motion.div
                        className="mt-6 sm:mt-8 md:mt-10 text-center"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg sm:text-xl md:text-2xl font-jetbrains font-medium text-secondary tracking-wide">
                            I'm a
                        </p>
                        <div className="mt-2 sm:mt-3 md:mt-4 flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
                            <span className="text-accent/60 font-jetbrains font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl select-none flex-shrink-0">
                                &gt;&gt;
                            </span>
                            <span
                                id="typewriter"
                                className="typewriter inline-block min-w-[14ch] text-left font-jetbrains font-bold text-accent text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
                            >
                                {text}
                            </span>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        className="mt-8 mb-8 sm:mt-10 sm:mb-10 md:mt-12 md:mb-12 flex items-center justify-center w-full"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="h-1 w-full max-w-[30rem] bg-gradient-to-r from-transparent via-secondary to-transparent" />
                    </motion.div>

                    {/* CTA Block */}
                    <motion.div
                        className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/projects"
                            className="w-auto bg-accent text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full font-jetbrains font-semibold text-sm sm:text-base md:text-lg text-center transition-colors duration-200 hover:bg-accent-hover"
                        >
                            View Projects
                        </Link>
                        <Button
                            as="a"
                            href={Resume}
                            download
                            containerClassName="w-auto"
                            className="cursor-pointer px-3 py-2 sm:px-6 sm:py-3 font-jetbrains font-semibold border border-slate-200 text-sm sm:text-base md:text-lg text-center text-accent bg-neutral-100 transition-all duration-300 hover:border-neutral-300"
                        >
                            Download Resume
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="mt-10 sm:mt-12 md:mt-14 flex flex-col items-center gap-2 text-secondary"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-xs font-jetbrains uppercase tracking-[0.3em] text-center">
                            Scroll to explore
                        </span>
                        <svg
                            className="h-5 w-5 animate-bounce mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </BackgroundBeamsWithCollision>
        </section>
    );
};

export default Hero;
