import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

function Experience() {
    const workExperiences = [
        {
            id: 0,
            company: "Infosys Limited",
            position: "DevOps Engineer Intern",
            duration: "2025 - Present",
            location: "Bangalore, India",
            status: "Current",
            description:
                "Designing and implementing a ROS build environment container using Docker in a RHEL 9 environment.",
            responsibilities: [
                "Implementeded a Docker-based ROS build environment on RHEL, standardizing development workflows and reducing setup inconsistencies",
                "Optimized Docker container build times by restructuring Dockerfiles to maximize layer caching and implementing multi-stage builds, reducing redundant steps and minimizing image size, which accelerated CI build cycles by 60%",
                "Integrated vulnerability scanning tools into the container build process to enforce security compliance, ensuring 100% of deployed environments met company security standards",
            ],
            technologies: ["Python", "ROS", "Docker", "RHEL"],
        },
        {
            id: 1,
            company: "The Brainery Code",
            position: "STEM Instructor",
            duration: "2025 - Present",
            location: "Singapore",
            status: "Current",
            description:
                "Teach and design engaging STEM lessons for primary and secondary students using coding platforms and robotics kits to foster creativity and computational thinking.",
            responsibilities: [
                "Conduct hands-on classes in Scratch, Python, Minecraft Education, and LEGO robotics for students aged 7–16",
                "Design structured coding projects that enhance problem-solving and teamwork",
                "Adapt teaching methods to accommodate various learning styles and age groups",
                "Mentor students through challenges to build foundational programming logic",
                "Collaborate with fellow instructors to refine curriculum and improve lesson delivery",
            ],
            technologies: [
                "Python",
                "Lego Robotics",
                "EV3",
                "Minecraft Education",
                "Scratch",
            ],
        },
        {
            id: 2,
            company: "Singapore Institute of Management",
            position: "Pre-admissions Coordinator",
            duration: "2024 - 2024",
            location: "Singapore",
            status: "Completed",
            description:
                "Processed student applications and ensured accurate documentation during the admissions process. Served as the main liaison between student applicants and the admissions team, ensuring clear communication and efficient resolution of application issues.",
            responsibilities: [
                "Validated 500+ student applications with over 90% accuracy using Salesforce CRM",
                "Verified 300+ documents via Zoom, ICA, OpenCerts, and CBSE platforms",
                "Identified and escalated 3 fraudulent submissions to senior management",
                "Resolved discrepancies by liaising with internal teams to meet tight application deadlines",
                "Maintained applicant data and ensured compliance with institutional requirements",
            ],
            technologies: ["Salesforce CRM", "Excel", "Zoom"],
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 400); // Remove animation class after 400ms
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    const currentExp = workExperiences[currentIndex];

    const statusColor =
        currentExp.status === "Current"
            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
            : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";

    return (
        <section id="Experience" className="p-8 pt-24 mx-auto">
            <SectionHeader title="Experience" />

            <div className="flex flex-col space-y-14  mx-auto">
                {/* Slider Navigation Buttons */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-left md:items-center gap-4">
                    {workExperiences.map(function (exp, index) {
                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`text-left p-4 rounded-xl transition-all duration-300 border  hover:border-cyan-500 hover:transform hover:scale-105 ${
                                    index === currentIndex
                                        ? "border-cyan-400 shadow-lg shadow-cyan-500/25"
                                        : "border-gray-700 bg-gray-800 hover:bg-gray-750"
                                }`}
                            >
                                <div className="space-y-2">
                                    <div className="flex items-left">
                                        <h3
                                            className={`font-semibold text-base ${
                                                index === currentIndex
                                                    ? "text-white"
                                                    : "text-gray-200"
                                            }`}
                                        >
                                            {exp.position}
                                        </h3>
                                    </div>

                                    <p
                                        className={`text-left text-sm ${
                                            index === currentIndex
                                                ? "text-cyan-100"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        {exp.company}
                                    </p>

                                    <div
                                        className={`flex items-center gap-2 text-xs ${
                                            index === currentIndex
                                                ? "text-cyan-200"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        <span className="flex items-center gap-1">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            {exp.duration}
                                        </span>
                                        <span className="text-lg">•</span>
                                        <span className="flex items-center gap-1">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div class="flex items-center justify-center">
                    <div class="md:w-5/6">
                        {/* Experience Details Card*/}
                        <div className={`bg-[#0a0b2e] p-8 border-2 rounded-2xl border-[#06b6d4] card-hover space-y-6 transition-all ${animate ? "animate-fade-out animate-slide-in-bottom" : ""}`}>
                            {/* Card Header Container */}
                            <div className="border-b border-gray-600 pb-4">
                                <div className="space-y-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-2xl font-semibold text-white">
                                            {currentExp.position}
                                        </h3>
                                        <span
                                            className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}
                                        >
                                            {currentExp.status}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4 text-[#3b82f6]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9v6h12V9H4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            {currentExp.company}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4 text-[#06b6d4]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            {currentExp.duration}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4 text-purple-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            {currentExp.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* End of Card Header Container */}

                            {/* Description Container */}
                            <div>
                                <p className="text-gray-300 leading-relaxed mb-5 text-sm">
                                    {currentExp.description}
                                </p>

                                <div className="space-y-4">
                                    {/* Key Responsibilities Container */}
                                    <div>
                                        <h4 className="flex items-center gap-1 text-base font-semibold text-white mb-3">
                                            <svg
                                                className="w-auto h-[1em] pt-0.5 text-yellow-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            Key Responsibilities
                                        </h4>
                                        <ul className="space-y-2">
                                            {currentExp.responsibilities.map(
                                                (responsibility, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-gray-300 text-sm"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full mt-2 flex-shrink-0"></div>
                                                        <span>
                                                            {responsibility}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    {/* Technologies Container */}
                                    <div>
                                        <h4 className="flex items-center gap-1 text-base font-semibold text-white mb-3">
                                            <svg
                                                className="w-auto h-[1em] pt-0.5 text-[#06b6d4]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {currentExp.technologies.map(
                                                (tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 font-medium transition-colors border rounded-full text-[#3b82f6] bg-[#0c62ed]/20 border-[#3b82f6]/30 hover:bg-[#3b82f6]/30 text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    {/* End of Technologies Container */}
                                </div>
                            </div>
                            {/* End of Description Container */}
                        </div>
                        {/* End of Experience Details Container */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
