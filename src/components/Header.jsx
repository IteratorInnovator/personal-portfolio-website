import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useIsOpen } from "../ui";
import HamburgerMenu from "./ui/hamburger-menu";
import { X, Menu } from "lucide-react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isOpen, toggle } = useIsOpen();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        if (location.pathname === "/") {
            window.scrollTo(0, "smooth");
            window.history.replaceState(null, "", "/");
        } else {
            navigate("/");
        }
    };

    const navigationItems = [
        { name: "About", path: "/", isSection: true },
        { name: "Education", path: "/", isSection: true },
        { name: "Experience", path: "/", isSection: true },
        { name: "Skills", path: "/", isSection: true },
        { name: "Projects", path: "/projects", isSection: false },
        { name: "Certifications", path: "/certifications", isSection: false },
        { name: "Contact", path: "/contact", isSection: false },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 text-white font-mont ${
                isScrolled ? "glass-card backdrop-blur-md" : ""
            }`}
        >
            <div className="px-8 pt-6 pb-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleClick}
                        className="text-xl font-bold"
                    >
                        Ng Kok Jing
                    </button>

                    <nav className="hidden lg:flex space-x-8">
                        {navigationItems.map((item, index) => {
                            return item.isSection ? (
                                <HashLink
                                    smooth
                                    key={index}
                                    to={`${item.path}#${item.name}`}
                                    className="font-[450] transition-all animate-link-hover"
                                >
                                    {item.name}
                                </HashLink>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="font-[450] transition-all animate-link-hover"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Hamburger Menu Button */}
                    <button className="lg:hidden" onClick={toggle}>
                        {!isOpen ? (
                            <Menu />
                        ) : (
                            <X />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
