import { Github, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from "../assets/profile.jpg";
import { highlights } from "../utils/constants";
import { GitHubCalendar } from "react-github-calendar";
import { getInitialTheme } from "../utils/helpers";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getCalendarFontSize } from "../utils/helpers";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});

const formatContributionDate = (isoDate) => {
    const parsed = new Date(isoDate);
    if (Number.isNaN(parsed.getTime())) {
        return isoDate;
    }
    return dateFormatter.format(parsed);
};

const legendDescriptions = [
    "No activity recorded",
    "Light activity streaks",
    "Consistent weekly output",
    "High intensity building",
    "Peak launch cadence",
];

const About = () => {
    const [theme, setTheme] = useState(getInitialTheme);
    const [calenderFontSize, setCalendarFontSize] =
        useState(getCalendarFontSize);
    const [selectedYear, setSelectedYear] = useState("2025");
    const availableYears = ["2025", "2024"];
    const calendarStyle = {
        color: "var(--text-secondary)",
        fontFamily: "var(--font-jetbrains)",
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        const handleResize = () => {
            setCalendarFontSize(getCalendarFontSize());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        const handleThemeChange = (event) => {
            const nextTheme = event?.detail;
            if (nextTheme === "light" || nextTheme === "dark") {
                setTheme(nextTheme);
            }
        };

        window.addEventListener("theme-change", handleThemeChange);

        return () => {
            window.removeEventListener("theme-change", handleThemeChange);
        };
    }, []);

    return (
        <section id="about" className="bg-background px-6 py-24 md:px-24">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                    Story
                </p>
                <h2 className="mt-3 text-4xl font-jetbrains font-semibold text-primary md:text-5xl">
                    About Me
                </h2>
                <p className="mt-4 text-secondary font-inter text-base md:text-lg">
                    A curious builder driven by craft, people, and the impact of
                    well-designed systems. I blend technical depth with
                    collaboration to ship meaningful experiences.
                </p>
            </div>
            <div className="mx-auto mt-14 flex flex-col xl:flex-row max-w-6xl items-center gap-16">
                <div className="mx-auto w-full max-w-sm lg:max-w-md">
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-tr from-accent/20 via-transparent to-white/30 blur-3xl" />
                        <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white/60 shadow-[0_20px_45px_rgba(15,23,42,0.18)] dark:border-slate-700/60 dark:bg-white/10">
                            <img
                                src={profileImage}
                                alt="Portrait of Harry"
                                className="h-full w-full aspect-square object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 flex w-[50%] -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/40 bg-white/85 px-4 py-2 text-[10px] font-jetbrains text-slate-900 shadow-lg backdrop-blur dark:bg-slate-900/80 dark:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-[12.5px]">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 sm:h-2.5 sm:w-2.5" />
                            <span className="text-center sm:text-left">
                                Always exploring new technologies
                            </span>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-slate-200/40 bg-white/30 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700/40 dark:bg-white/5"
                            >
                                <p className="text-xs font-jetbrains uppercase tracking-[0.25em] text-secondary">
                                    {item.title}
                                </p>
                                <p className="mt-3 text-2xl font-jetbrains font-semibold text-primary">
                                    {item.value}
                                </p>
                                <p className="mt-2 text-sm text-secondary">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <article
                className="mt-14 flex w-full flex-col items-center"
                style={calendarStyle}
            >
                <div className="w-full max-w-6xl rounded-2xl border border-slate-200/40 bg-white/10 p-6 sm:p-8 md:p-10 shadow-[0_20px_45px_rgba(15,23,42,0.18)] backdrop-blur dark:border-slate-700/40 dark:bg-white/5">
                    <div className="flex flex-col gap-6 text-left lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="rounded-2xl border border-slate-200/40 bg-surface shadow-[0_20px_45px_rgba(15,23,42,0.18)] p-3 dark:border-slate-700/40 dark:bg-white/10">
                                    <Github className="h-6 w-6 text-primary" />
                                </span>
                                <div>
                                    <p className="text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary">
                                        GitHub Activity
                                    </p>
                                    <a
                                        href="https://github.com/IteratorInnovator"
                                        target="_blank"
                                        className="text-base sm:text-lg md:text-2xl font-jetbrains font-semibold text-primary hover:text-accent"
                                    >
                                        @IteratorInnovator
                                    </a>
                                </div>
                            </div>
                            <p className="text-[10px] sm:text-xs text-secondary">
                                Contributions over the past few years across
                                experiments, learning, and launches.
                            </p>
                        </div>
                        <div className="flex w-auto flex-row items-center justify-end gap-2 text-xs text-secondary sm:text-sm sm:gap-4">
                            <label
                                htmlFor="github-year"
                                className="text-xs sm:text-sm font-jetbrains uppercase tracking-[0.3em]"
                            >
                                Year
                            </label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        id="github-year"
                                        type="button"
                                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/70 px-4 py-2 font-jetbrains text-xs sm:text-sm text-primary shadow-sm transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:border-slate-700/60 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                                    >
                                        <span>{selectedYear}</span>
                                        <ChevronDown className="h-4 w-4 text-secondary dark:text-slate-300" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-32 rounded-xl border border-slate-200/60 bg-white/95 p-1 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/90"
                                >
                                    {availableYears.map((year) => (
                                        <DropdownMenuItem
                                            key={year}
                                            onClick={() =>
                                                setSelectedYear(year)
                                            }
                                            className={`font-jetbrains text-sm transition hover:bg-accent/20 hover:text-primary dark:hover:bg-accent/20 ${
                                                selectedYear === year
                                                    ? "bg-accent/20 text-primary dark:text-white"
                                                    : "text-secondary dark:text-slate-300"
                                            }`}
                                        >
                                            {year}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="mt-8 flex w-full justify-center overflow-x-auto">
                        <GitHubCalendar
                            username="IteratorInnovator"
                            colorScheme={theme}
                            fontSize={calenderFontSize}
                            year={selectedYear}
                            showColorLegend={true}
                            showTotalCount={true}
                            showMonthLabels={true}
                            showWeekdayLabels={true}
                            labels={{
                                totalCount:
                                    "{{count}} contributions in {{year}}",
                            }}
                            tooltips={{
                                activity: {
                                    text: (activity) => {
                                        const formattedDate =
                                            formatContributionDate(
                                                activity.date
                                            );
                                        const count = activity.count || 0;
                                        if (count === 0) {
                                            return `No contributions on ${formattedDate}`;
                                        }
                                        return `${count} contribution${
                                            count === 1 ? "" : "s"
                                        } on ${formattedDate}`;
                                    },
                                },
                                colorLegend: {
                                    text: (level) =>
                                        legendDescriptions[level] ??
                                        `Level ${level} activity`,
                                },
                            }}
                        />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default About;
