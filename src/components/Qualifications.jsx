import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Education from "./Education";
import Experience from "./Experience";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

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
            <motion.div
                className="mx-auto max-w-5xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
            >
                <p className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                    Journey
                </p>
                <h2 className="mt-3 text-4xl font-jetbrains font-semibold text-primary md:text-5xl">
                    Qualifications
                </h2>
                <p className="mt-4 text-secondary font-inter text-sm sm:text-base md:text-lg">
                    Milestones from my studies and work that shaped my growth.
                </p>
            </motion.div>

            <motion.div
                className="mx-auto mt-14 flex max-w-3xl flex-col gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {/* Tabs */}
                <div className="relative grid grid-cols-2 rounded-lg bg-surface/60 border border-border px-1 py-2 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]">
                    {/* Slider */}
                    <span
                        className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-lg border border-border dark:bg-[#4a4f5d] shadow-[0_15px_35px_rgba(15,23,42,0.12)] transition-transform duration-200 ease-out ${
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
                                className={`cursor-pointer relative z-10 rounded-lg px-4 py-2 font-semibold font-jetbrains transition-colors ${
                                    isActive ? "text-primary" : "text-secondary"
                                }`}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* Panels */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className="w-full"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === "education" ? (
                            <Education />
                        ) : activeTab === "experience" ? (
                            <Experience />
                        ) : null}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Qualifications;
