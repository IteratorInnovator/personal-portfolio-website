import {
    Award,
    FolderGit2,
    GraduationCap,
    Home,
    Layers,
    Mail,
} from "lucide-react";

import AWS from "../assets/AWS.svg";
import CPP from "../assets/CPP.svg";
import CSS3 from "../assets/CSS3.svg";
import Docker from "../assets/Docker.svg";
import Express from "../assets/Express.svg";
import FastAPI from "../assets/FastAPI.svg";
import Firebase from "../assets/Firebase.svg";
import Git from "../assets/Git.svg";
import Golang from "../assets/Golang.svg";
import HTML5 from "../assets/HTML5.svg";
import Java from "../assets/Java.svg";
import JavaScript from "../assets/JavaScript.svg";
import MongoDB from "../assets/MongoDB.svg";
import MySQL from "../assets/MySQL.svg";
import Python from "../assets/Python.svg";
import RHEL from "../assets/RHEL.svg";
import ROS from "../assets/ROS.svg";
import ReactIcon from "../assets/React.svg";
import TailwindCSS from "../assets/TailwindCSS.svg";
import Ubuntu from "../assets/Ubuntu.svg";
import Vite from "../assets/Vite.svg";

import { Github, Linkedin, Instagram } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";

import JavascriptMozilla from "../assets/JavascriptMozilla.png";
import GoogleITAutomation from "../assets/GoogleITAutomation.png";
import DockerFoundations from "../assets/DockerFoundations.png";

import InfosysCelebration1 from "../assets/InfosysInstep25Celebration.jpg";
import InfosysCelebration2 from "../assets/InfosysInstep25Celebration(2).jpg";

export const navigationItems = [
    { name: "Home", path: "/", isSection: true, icon: Home },
    { name: "Qualifications", path: "/", isSection: true, icon: GraduationCap },
    { name: "Skills", path: "/", isSection: true, icon: Layers },
    { name: "Projects", path: "/projects", isSection: false, icon: FolderGit2 },
    { name: "Certifications", path: "/certifications", isSection: false, icon: Award },
    { name: "Contact", path: "/contact", isSection: false, icon: Mail },
];

export const highlights = [
    {
        title: "Profile",
        value: "22-year-old SWE",
        description:
            "I’m a 22-year-old aspiring software engineer looking for chances to build things that actually help people.",
    },
    {
        title: "Journey",
        value: "From curiosity to craft",
        description:
            "I started out curious about how tech solves problems, and that curiosity grew into a drive to build real applications end to end.",
    },
    {
        title: "Focus Areas",
        value: "Backend · Automation · DevOps",
        description:
            "I enjoy backend work, automation, and devops; I care about writing clean, efficient code and building systems that scale.",
    },
    {
        title: "Beyond Code",
        value: "Travel · Fitness · Games",
        description:
            "When I’m not coding, I like travelling, hitting the gym, and getting lost in story-driven games, and I’m always up for projects that can make a difference.",
    },
];

export const educationTimeline = [
    {
        title: "B.Sc. Software Engineering",
        place: "Singapore Management University",
        period: "2024 - Present",
        status: "ongoing",
        grade: "CGPA: 3.54/4 (Cum Laude)",
        description:
            "Comprehensive study in Fullstack Development, Distributed Systems, and Digital Design with hands-on project experience.",
        highlights: [
            "Programmes Lead - SMU Artificial Intelligence Club",
            "Developer Subcommittee - SMU Fintech Club",
            "Teaching Assistant - COR-IS1704 Computational Thinking",
            "Teaching Assistant - IS115 Algorithms & Programming",
        ],
    },
    {
        title: "GCE 'A' Levels",
        place: "Yishun Innova Junior College",
        period: "2021 - 2022",
        status: "completed",
        grade: "RP: 80/90",
        description:
            "Completion of a rigorous interdisciplinary curriculum in advanced mathematics, biology, chemistry, and economics.",
        highlights: [
            "Edusave Merit & Good Progress Awards",
            "Member - Class Leader Committee",
            "Member - Outdoor Adventures Club (ODAC)",
        ],
    },
];

export const experienceTimeline = [
    {
        title: "DevOps Engineer Intern",
        place: "Infosys Limited",
        period: "June 2025 - Aug 2025",
        location: "Bangalore, India",
        status: "completed",
        description:
            "Autonomous Mobile Robot (AMR) under Education, Training, and Assessment unit",
        responsibilities: [
            "Implementeded a Docker-based ROS build environment on RHEL 9, standardizing development workflows and reducing setup inconsistencies",
            "Configured custom Docker networks using Docker Compose to facilitate ROS node-to-node communication.",
            "Created comprehensive software architecture and process documentation of the ROS build environment using PlantUML and MS Word, reducing developer onboarding time and improving knowledge transfer across teams.",
        ],
        technologies: ["Python", "ROS", "Docker", "RHEL"],
        images: [
            {
                src: InfosysCelebration1,
                alt: "Infosys Instep 25 Years Celebration",
                caption: "Infosys Instep 25 Years Celebration",
            },
            {
                src: InfosysCelebration2,
                alt: "Infosys Instep 25 Years Celebration",
                caption: "Infosys Instep 25 Years Celebration",
            },
        ],
    },
    {
        title: "Stem Instructor",
        place: "The Brainery Code",
        period: "Mar 2025 – Present",
        location: "Singapore",
        status: "ongoing",
        description:
            "Design and teach STEM lessons for primary and secondary students using coding platforms and robotics kits to build creativity and computational thinking.",
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
        title: "Pre-Admissions Coordinator",
        place: "Singapore Institute of Management",
        period: "Feb 2024 - June 2024",
        location: "Singapore",
        status: "completed",
        description:
            "Processing of student applications with accurate documentation under the Pre-Admissions Team",
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

export const certifications = [
    {
        name: "Google IT Automation with Python",
        issuer: "Google",
        issueDate: "Jan 2025",
        thumbnail: GoogleITAutomation,
        credentialUrl:
            "https://www.coursera.org/account/accomplishments/specialization/DB7KDGI7VB4U",
    },
    {
        name: "Docker Foundations Professional Certificate",
        issuer: "Docker, Inc",
        issueDate: "Jan 2025",
        thumbnail: DockerFoundations,
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/0ac348144dd199c4de891f0a921b8e824a2c533402f07f614d09c6b683db08ef",
    },
    {
        name: "JavaScript Foundations Professional Certificate",
        issuer: "Mozilla",
        issueDate: "May 2025",
        thumbnail: JavascriptMozilla,
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/0d09d912c50ff3179435b16737ae49695cda67fea6df8515f6c95b3e988136c8",
    },
];

export const skills = [
    {
        category: "Frontend",
        subSkills: [
            { name: "HTML5", icon: HTML5 },
            { name: "CSS3", icon: CSS3 },
            { name: "JavaScript", icon: JavaScript },
            { name: "React", icon: ReactIcon },
            { name: "Tailwind CSS", icon: TailwindCSS },
            { name: "Vite", icon: Vite },
        ],
    },
    {
        category: "Backend",
        subSkills: [
            { name: "Python", icon: Python },
            { name: "Golang", icon: Golang },
            { name: "Java", icon: Java },
            { name: "C++", icon: CPP },
            { name: "Express", icon: Express },
            { name: "FastAPI", icon: FastAPI },
        ],
    },
    {
        category: "Databases & Cloud",
        subSkills: [
            { name: "MySQL", icon: MySQL },
            { name: "MongoDB", icon: MongoDB },
            { name: "Firebase", icon: Firebase },
            { name: "AWS", icon: AWS },
        ],
    },
    {
        category: "DevOps & Tools",
        subSkills: [
            { name: "Docker", icon: Docker },
            { name: "Git", icon: Git },
            { name: "ROS", icon: ROS },
            { name: "RHEL", icon: RHEL },
            { name: "Ubuntu", icon: Ubuntu },
        ],
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/IteratorInnovator",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/ngkokjing/",
    },
    {
        name: "Leetcode",
        icon: TbBrandLeetcode,
        href: "https://leetcode.com/u/HNKJ/",
    },
    { name: "Email", icon: Mail, href: "mailto:harryngkokjing.com" },
];
