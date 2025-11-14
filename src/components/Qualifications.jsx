import { useState } from "react";

const tabs = [
    { name: "education", label: "Education" },
    { name: "experience", label: "Experience" },
];

const educationTimeline = [
    {
        title: "B.Sc. Computer Science",
        place: "State University",
        period: "2019 – 2023",
        description:
            "Focused on distributed systems, human-centered design, and full-stack development fundamentals.",
    },
    {
        title: "Frontend Engineering Nanodegree",
        place: "Udacity",
        period: "2023",
        description:
            "Completed advanced coursework on responsive UI, accessibility best practices, and performance profiling.",
    },
];

const experienceTimeline = [
    {
        title: "Software Engineering Intern",
        place: "Tech Labs",
        period: "Summer 2024",
        description:
            "Shipped a design system sandbox and dashboards that reduced UI prototyping time for the product team.",
    },
    {
        title: "Freelance Developer",
        place: "Self-employed",
        period: "2022 – Present",
        description:
            "Built bespoke web experiences for small businesses, integrating CMS workflows and analytics tooling.",
    },
];

const Qualifications = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section
            id="qualifications"
            className="bg-background px-6 py-24 md:px-24"
        >
            <h1 className="mb-12 text-center font-jetbrains text-4xl font-semibold text-primary md:text-5xl">
                Qualifications
            </h1>

            <div className="mx-auto flex max-w-2xl flex-col gap-10">
                {/* Tabs */}
                <div
                    className="relative grid grid-cols-2 rounded-full bg-surface border border-border px-1 py-2 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]"
                >
                    {/* Slider */}
                    <span
                        className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full border border-border bg-tertiary shadow-[0_15px_35px_rgba(15,23,42,0.12)] transition-transform duration-200 ease-out ${
                            activeTab === "experience"
                                ? "translate-x-full"
                                : "translate-x-0"
                        }`}
                    />

                    {tabs.map(({ name, label }) => {
                        const isActive = activeTab === name;
                        return (
                            <button
                                key={name}
                                type="button"
                                onClick={() => setActiveTab(name)}
                                className={`relative z-10 rounded-full px-4 py-2 font-semibold font-jetbrains transition-colors ${
                                    isActive ? "text-primary" : "text-secondary"
                                }`}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* Panels */}
                <div className="w-full">
                    {activeTab === "education" && (
                        <div className="space-y-4">
                            
                        </div>
                    )}

                    {activeTab === "experience" && (
                        <div className="space-y-4">
                            
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
