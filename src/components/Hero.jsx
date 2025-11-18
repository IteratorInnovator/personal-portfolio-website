import { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button } from "./ui/moving-border";
import { Link } from "react-router-dom";
import Resume from "../assets/Ng Kok Jing Resume.pdf";
import { section } from "motion/react-client";

const phrases = [
    "Software Engineer.",
    "Backend Enjoyer.",
    "Problem Solver.",
    "Coding Mentor.",
];

const Hero = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const visibleText = currentPhrase.slice(0, charIndex);
        setText(visibleText);

        let typingSpeed = 100;

        if (!isDeleting && charIndex < currentPhrase.length) {
            typingSpeed = Math.random() * (120 - 60) + 60;
            const timeout = setTimeout(
                () => setCharIndex(charIndex + 1),
                typingSpeed
            );
            return () => clearTimeout(timeout);
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            const timeout = setTimeout(() => setIsDeleting(true), 2500);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && charIndex > 0) {
            const timeout = setTimeout(() => setCharIndex(charIndex - 1), 75);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && charIndex === 0) {
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setPhraseIndex((phraseIndex + 1) % phrases.length);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, isDeleting, phraseIndex]);
    return (
        <section
            id="home"
            className="max-sm:pt-10 px-4 text-primary sm:px-6 md:px-10 lg:px-20"
        >
            <BackgroundBeamsWithCollision>
                <div className="mx-auto flex max-w-4xl flex-col gap-6">
                    <div className="space-y-4 text-center">
                        <p className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary sm:text-sm">
                            Welcome
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-jetbrains font-semibold text-primary">
                            Hi, I'm <span className="text-accent">Harry!</span>
                        </h1>

                        <h2 className="mt-2 w-full text-center text-[20px] font-jetbrains font-medium text-primary leading-tight sm:text-3xl md:text-5xl lg:text-6xl">
                            I'm a&nbsp;
                            <span
                                id="typewriter"
                                className="typewriter inline-block min-w-[16ch] text-left font-jetbrains font-bold text-accent"
                            >
                                {text}
                            </span>
                        </h2>
                    </div>
                    <p className="font-inter text-xs sm:text-sm md:text-base text-secondary text-center max-w-4xl">
                        Passionate about creating cutting-edge solutions that
                        bridge the gap between innovative technology and
                        real-world applications. Specializing in backend
                        development, automation, and devops.
                    </p>
                    <div className="flex flex-row items-center justify-center gap-4">
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
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
};

export default Hero;
