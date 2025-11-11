import { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const phrases = [
    "Software Developer.",
    "Backend Enthusiast.",
    "Tech Innovator.",
    "Problem Solver.",
    "Code Mentor.",
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
        <BackgroundBeamsWithCollision>
            <section>
                <h1 className="text-6xl font-jetbrains text-center font-medium text-primary">
                    Hi, I'm <span className="text-accent">Harry!</span>
                </h1>
                <h2 className="text-primary text-6xl text-center mt-6 font-jetbrains font-medium">
                    I'm a
                    <span
                        id="typewriter"
                        className="ml-6 text-6xl font-jetbrains font-bold typewriter text-accent"
                    >
                        {text}
                    </span>
                </h2>
                <p className="text-xl text-secondary text-center max-w-3xl mx-auto my-12">
                    Passionate about creating cutting-edge solutions that bridge
                    the gap between innovative technology and real-world
                    applications. Specializing in backend development,
                    automation, and devops.
                </p>
            </section>
        </BackgroundBeamsWithCollision>
    );
};

export default Hero;
