import { useEffect, useState } from "react";
import { navigationItems } from "../utils/constants";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
    ThemeToggleButton,
    useThemeTransition,
} from "./ui/theme-toggle-button";

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const stored = window.localStorage.getItem("theme");

    if (stored === "light" || stored === "dark") {
        return stored;
    }

    if (
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }

    return "light";
};

const Header = () => {
    const [theme, setTheme] = useState(getInitialTheme);
    const { startTransition } = useThemeTransition();

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }

        const root = document.documentElement;

        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
        } else {
            root.removeAttribute("data-theme");
        }

        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const handleThemeToggle = () => {
        startTransition(() => {
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        });
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="px-24 py-8">
                <div className="flex items-center justify-between">
                    <nav className="hidden lg:flex space-x-6 text-lg text-primary font-jetbrains font-medium">
                        {navigationItems.map((item, index) => {
                            return item.isSection ? (
                                <HashLink
                                    smooth
                                    key={index}
                                    to={`${
                                        item.path
                                    }#${item.name.toLowerCase()}`}
                                    className="font-[450] relative group inline-flex"
                                >
                                    {item.name}
                                    <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full rounded-full origin-left scale-x-0 bg-accent transition-transform duration-250 ease-out group-hover:scale-x-100" />
                                </HashLink>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="font-[450] relative group inline-flex"
                                >
                                    {item.name}
                                    <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full rounded-full origin-left scale-x-0 bg-accent transition-transform duration-250 ease-out group-hover:scale-x-100" />
                                </Link>
                            );
                        })}
                    </nav>
                    <ThemeToggleButton
                        theme={theme}
                        variant="circle-blur"
                        start="top-right"
                        onClick={handleThemeToggle}
                        className="cursor-pointer bg-background border border-border hover:bg-surface/70"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
