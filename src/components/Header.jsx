import { useEffect, useState } from "react";
import { navigationItems } from "../utils/constants";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
    ThemeToggleButton,
    useThemeTransition,
} from "./ui/theme-toggle-button";
import { getInitialTheme } from "../utils/helpers";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
} from "./ui/resizable-navbar";

const Header = () => {
    const [theme, setTheme] = useState(getInitialTheme);
    const { startTransition } = useThemeTransition();
    const [mobileOpen, setMobileOpen] = useState(false);

    const renderNavLabel = (label) => (
        <span className="relative inline-flex">
            <span className="relative z-10">{label}</span>
            <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-0.5 rounded-full origin-left scale-x-0 bg-accent transition-transform duration-250 ease-out group-hover:scale-x-100" />
        </span>
    );

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }

        const root = document.documentElement;

        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
            root.classList.add("dark");
        } else {
            root.removeAttribute("data-theme");
            root.classList.remove("dark");
        }

        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", theme);
            window.dispatchEvent(
                new CustomEvent("theme-change", { detail: theme })
            );
        }
    }, [theme]);

    const handleThemeToggle = () => {
        startTransition(() => {
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        });
    };

    return (
        <header className="fixed z-50 w-full">
            <Navbar className="top-0">
                <NavBody className="px-6">
                    <div className="flex items-center gap-6">
                        <nav className="flex space-x-6 text-sm text-primary font-jetbrains font-medium">
                            {navigationItems.map((item, index) => {
                                const baseClass =
                                    "font-[450] relative group inline-flex";
                                return item.isSection ? (
                                    <HashLink
                                        smooth
                                        key={index}
                                        to={`${
                                            item.path
                                        }#${item.name.toLowerCase()}`}
                                        className={baseClass}
                                    >
                                        {renderNavLabel(item.name)}
                                    </HashLink>
                                ) : (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className={baseClass}
                                    >
                                        {renderNavLabel(item.name)}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <ThemeToggleButton
                        theme={theme}
                        variant="circle-blur"
                        start="top-right"
                        onClick={handleThemeToggle}
                        className="cursor-pointer bg-background border border-border hover:bg-surface/70"
                    />
                </NavBody>
                <MobileNav className="px-4">
                    <MobileNavHeader>
                        <MobileNavToggle
                            isOpen={mobileOpen}
                            onClick={() => setMobileOpen((prev) => !prev)}
                        />
                        <ThemeToggleButton
                            theme={theme}
                            variant="circle-blur"
                            start="top-right"
                            onClick={() => {
                                handleThemeToggle();
                                setMobileOpen(false);
                            }}
                            className="cursor-pointer bg-background border border-border hover:bg-surface/70"
                        />
                    </MobileNavHeader>
                    <MobileNavMenu isOpen={mobileOpen}>
                        <div className="flex flex-col gap-4 text-primary font-jetbrains font-medium">
                            {navigationItems.map((item, index) => {
                                const baseClass =
                                    "w-auto font-[450] relative group inline-flex items-center gap-3";
                                const Icon = item.icon;
                                const content = (
                                    <>
                                        {Icon && (
                                            <Icon className="h-4 w-4 text-secondary" />
                                        )}
                                        {renderNavLabel(item.name)}
                                    </>
                                );
                                const link = item.isSection ? (
                                    <HashLink
                                        smooth
                                        key={index}
                                        to={`${
                                            item.path
                                        }#${item.name.toLowerCase()}`}
                                        className={baseClass}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {content}
                                    </HashLink>
                                ) : (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className={baseClass}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {content}
                                    </Link>
                                );
                                return link;
                            })}
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </header>
    );
};

export default Header;
