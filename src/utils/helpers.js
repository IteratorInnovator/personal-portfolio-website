export const getInitialTheme = () => {
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