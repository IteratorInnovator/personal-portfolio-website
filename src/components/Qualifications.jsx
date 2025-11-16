import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";


const tabs = [
    { name: "education", label: "Education" },
    { name: "experience", label: "Experience" },
];


const Qualifications = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section
            id="qualifications"
            className="bg-background px-6 py-24 md:px-24"
        >
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                    Journey
                </p>
                <h2 className="mt-3 text-4xl font-jetbrains font-semibold text-primary md:text-5xl">
                    Qualifications
                </h2>
                <p className="mt-4 text-secondary font-inter text-base md:text-lg">
                    Milestones that shaped how I design, build, and deliver -
                    from formal education to learning by shipping real products.
                </p>
            </div>

            <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-10">
                {/* Tabs */}
                <div className="relative grid grid-cols-2 rounded-full bg-surface/60 border border-border px-1 py-2 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]">
                    {/* Slider */}
                    <span
                        className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full border border-border dark:bg-[#4a4f5d] shadow-[0_15px_35px_rgba(15,23,42,0.12)] transition-transform duration-200 ease-out ${
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
                                className={`cursor-pointer relative z-10 rounded-full px-4 py-2 font-semibold font-jetbrains transition-colors ${
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
                    {activeTab === "education" ? (
                        <Education />
                    ) : activeTab === "experience" ? (
                        <Experience />
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
