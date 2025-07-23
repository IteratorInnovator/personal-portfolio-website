import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const phrases = [
    "Software Developer.",
    "Backend Enthusiast.",
    "Tech Innovator.",
    "Problem Solver.",
    "Code Mentor.",
];

function HeroSection() {
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
        <section className="min-h-screen flex items-center justify-center mt-10">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
            </div>

            {/* Main Section Container */}
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 min-h-[1.2em] text-white font-mont">
                    Hi, I'm <span className="gradient-text">Kok Jing</span>
                    <span className="inline-block animate-wave">
                        <img
                            src="/waving-hand-svgrepo-com.svg"
                            alt="Waving Hand"
                            className="w-[0.85em] h-[0.85em]"
                        />
                    </span>
                </h1>
                <h2 className="text-3xl text-gray-300 mb-8 min-h-[1.2em]">
                    I'm a
                    <span
                        id="typewriter"
                        className="ml-2.5 text-4xl font-jetbrains font-bold typewriter text-neon-blue"
                    >
                        {text}
                    </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 font-mont max-w-3xl mx-auto mb-12 leading-relaxed">
                    Passionate about creating cutting-edge solutions that bridge
                    the gap between innovative technology and real-world
                    applications. Specializing in backend development,
                    automation, and devops.
                </p>

                {/* Navigation links to projects and resume */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 font-mont">
                    <Link to="/projects" className="flex space-x-2 view-projects-button">
                        <span>View Projects</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke=""
                            className="w-[1.5em]"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6 12H18M18 12L13 7M18 12L13 17"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </g>
                        </svg>
                    </Link>

                    <a
                        href="./src/assets/Ng Kok Jing Resume.pdf"
                        download="Ng Kok Jing Resume.pdf"
                    >
                        <button className="flex space-x-2 download-resume-button">
                            <span className="inline-block">
                                <Download size={20} strokeWidth={1.5} />
                            </span>
                            <span>Download Resume</span>
                        </button>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-8">
                    {/* Github Button */}
                    <a
                        href="https://github.com/IteratorInnovator"
                        target="_blank"
                    >
                        <button className="social-link-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-github-icon lucide-github"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </button>
                    </a>
                    {/* Linkedin Button */}
                    <a
                        href="https://www.linkedin.com/in/ng-kok-jing/"
                        target="_blank"
                    >
                        <button className="social-link-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-linkedin-icon lucide-linkedin"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </button>
                    </a>
                    {/* Email button */}
                    <a href="#">
                        <button className="social-link-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
