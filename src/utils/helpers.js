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

export const getCalendarFontSize = () => {
    if (typeof window === "undefined") {
        return 12;
    }
    if (window.innerWidth < 480) {
        return 9;
    }
    if (window.innerWidth < 768) {
        return 11;
    }
    return 14;
};

export function getAge() {
    const birthDate = new Date("2003-07-29");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
