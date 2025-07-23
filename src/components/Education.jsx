import React from "react";
import SectionHeader from "./ui/section-header";

function Education() {
    return (
        <section
            id="Education"
            className="flex flex-col items-center justify-around w-full max-w-6xl mx-auto pt-24 px-8 text-white font-mont"
        >
            <SectionHeader title="Education" />
            {/* Timeline + cards wrapper */}
            <div class="relative block max-w-6xl mx-auto">
                <div class="flex">
                    <div class="w-32 flex-shrink-0 relative">
                        <div class="absolute w-1 left-6 top-0 bottom-0 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
