import React from "react";
import SectionHeader from "./ui/section-header";
import EducationCard from "./ui/education-card";

const educations = [
    {
        course: "Bachelor of Science (Software Engineering)",
        status_tag: {
            status: "Ongoing",
            color_theme: "from-emerald-500 to-teal-500",
        },
        school: "Singapore Management University",
        description:
            "Comprehensive study in Software Development, Computer Systems, and Digital Design with hands-on project experience.",
        duration: "2024-2028 (Expected)",
        grade_info: [
            {
                text: "GPA: 3.54 / 4.0",
                color_theme:
                    "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
            },
            {
                text: "Cum Laude",
                color_theme:
                    "text-purple-400 bg-purple-500/20 border-purple-500/30",
            },
        ],
        highlights: [
            "Programmes Lead - SMU Artificial Intelligence Club",
            "Co-Lead - Project HeartCode 2025",
            "Teaching Assistant - COR-IS1704 Computational Thinking",
            "Teaching Assistant - IS115 Algorithms & Programming",
            "Top 50 in SMU Ellipsis #Code25 Competition",
        ],
        logo: {
            filename: "SMU_logo.png",
            color_theme: "border-[#3b82f6]",
        },
    },
    {
        course: "GCE A Levels",
        status_tag: {
            status: "Pre-University",
            color_theme: "from-[#8b5cf6] to-pink-500",
        },
        school: "Yishun Innova Junior College",
        description:
            "Completion of a rigorous interdisciplinary curriculum in advanced mathematics, biology, chemistry, and economics.",
        duration: "2020 - 2021",
        grade_info: [
            {
                text: "RP: 80/90",
                color_theme: "text-pink-400 bg-pink-500/20 border-pink-500/30",
            },
        ],
        highlights: [
            "Edusave Merit & Good Progress Awards",
            "Member - Class Leader Committee",
            "Member - Outdoor Adventures Club (ODAC)",
        ],
        logo: {
            filename: "KCPSS_logo.jpg",
            color_theme: "border-[#06b6d4]",
        },
    },
];

function Education() {
    return (
        <section
            id="Education"
            className="flex flex-col items-center justify-around w-full max-w-6xl mx-auto pt-24 px-8 text-white font-mont"
        >
            <SectionHeader title="Education" />
            {/* Timeline + cards container */}
            <div class="relative block max-w-6xl mx-auto">
                <div class="flex">
                    {/* Timeline */}
                    <div class="w-24 flex-shrink-0 relative">
                        <div class="absolute w-1 left-6 top-0 bottom-0 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full"></div>
                    </div>

                    {/* Education cards container */}
                    <div className="flex-1 pl-8 space-y-16">
                        {educations.map(function (education, index) {
                            return (
                                <div>
                                    <div className={`absolute left-[0em] transform w-12 h-12 rounded-full backdrop-blur-sm border-2 ${education.logo.color_theme} z-10`}>
                                        <img
                                            src={`/${education.logo.filename}`}
                                            alt=""
                                            className="rounded-full"
                                        />
                                    </div>
                                    <EducationCard
                                        key={index}
                                        course={education.course}
                                        status_tag={education.status_tag}
                                        school={education.school}
                                        description={education.description}
                                        duration={education.duration}
                                        grade_info={education.grade_info}
                                        highlights={education.highlights}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
