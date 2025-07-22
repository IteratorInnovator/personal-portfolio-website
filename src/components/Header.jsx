import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationItems = [
        { name: "About", path: "/", isSection: true },
        { name: "Education", path: "/", isSection: true },
        { name: "Experience", path: "/", isSection: true },
        { name: "Skills", path: "/", isSection: true },
        { name: "Projects", path: "/projects", isSection: false },
        { name: "Certifications", path: "/certifications", isSection: false },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 text-white font-mont ${
                isScrolled ? "glass-card backdrop-blur-md" : ""
            }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">Portfolio</div>

                    <div className="hidden lg:flex space-x-8">
                        {navigationItems.map((item, index) => {
                            return item.isSection ? (
                                <HashLink
                                    smooth
                                    to={`/#${item.name}`}
                                    className="transition-all hover:text-white animate-link-hover"
                                >
                                    {item.name}
                                </HashLink>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="transition-all hover:text-white animate-link-hover"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    <Link
                        to="/contact"
                        className="max-lg:hidden bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300"
                    >
                        Contact
                    </Link>

                    {/* Mobile Hamburger Menu Button */}
                    <button className="lg:hidden">
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
                            className=""
                        >
                            <path d="M4 12h16" />
                            <path d="M4 18h16" />
                            <path d="M4 6h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
