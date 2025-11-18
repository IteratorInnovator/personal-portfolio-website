import {
    Award,
    FolderGit2,
    GraduationCap,
    Home,
    Layers,
    Mail,
} from "lucide-react";

import AWS from "../assets/AWS.svg";
import Cloudflare from "../assets/Cloudflare.svg";
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
import Vercel from "../assets/Vercel.svg";
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
    {
        name: "Certifications",
        path: "/certifications",
        isSection: false,
        icon: Award,
    },
    { name: "Contact", path: "/contact", isSection: false, icon: Mail },
];

export const highlights = [
    {
        title: "Profile",
        value: `${new Date().getFullYear() - 2003} Year Old SWE`,
        description:
            "I’m a aspiring software engineer looking for chances to build things that actually help people.",
    },
    {
        title: "Journey",
        value: "From curiosity to craft",
        description:
            "I started out curious about how tech solves problems, and that curiosity grew into a drive to build real applications end to end.",
    },
    {
        title: "Focus Areas",
        value: "Backend · DevOps · Automation",
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
        period: "Jun 2025 - Aug 2025",
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
        period: "Feb 2024 - Jun 2024",
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
            { name: "Vercel", icon: Vercel },
            { name: "Cloudflare", icon: Cloudflare },
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

export const projects = [
    {
        id: "notesync",
        title: "NoteSync",
        type: "Fullstack Web App",
        summary:
            "Designed and built a YouTube note taking app for rich, timestamped lecture notes and progress tracking without juggling tabs, as coursework for IS216 Web Application Development II with my team.",
        problem:
            "Note taking from YouTube required switching windows and guessing timestamps, which slowed revision and made long lectures harder to navigate.",
        solution:
            "Implemented a custom editor with timestamp insertion, integrated the YouTube IFrame API for direct control, and designed a Firestore data model for videos, notes, and playlists.",
        outcome:
            "Gives learners a fast way to jump between explanations, build structured notes, save study progress, and keep everything synced across sessions and devices.",
        highlights: [
            "Rich text editor with timestamp shortcuts, autosave, and fullscreen note taking.",
            "In place and fullscreen YouTube player controls with seek, playback rate, and synced note interactions.",
            "Firestore storage for videos, playlists, and progress plus Cloud Functions for cleanup and automation.",
        ],
        metrics: [
            { label: "Videos saved", value: "Unlimited" },
            { label: "Note type", value: "Timestamped rich text" },
            { label: "Status", value: "Live" },
        ],
        stack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Firebase Auth",
            "Cloud Firestore",
            "Cloud Functions",
            "YouTube IFrame API",
        ],
        categories: ["Web Development", "Coursework"],
        repoUrl: "https://github.com/IteratorInnovator/note-sync",
        liveUrl: "https://wad2-44a13.web.app/",
        status: "Live",
    },
    {
        id: "personal-portfolio",
        title: "Personal Portfolio Website",
        type: "Frontend Experience",
        summary:
            "The site you’re browsing: a React + Vite build with themed navigation, section offsets, and intentional typography to tell my story quickly.",
        problem:
            "Wanted a single home for my journey, work, and contact details that didn’t rely on template builders.",
        solution:
            "Designed a component system (Hero, Highlights, Qualifications, Skills) with custom theme handling, motion flourishes, and responsive layouts.",
        outcome:
            "Gives recruiters and collaborators an interactive overview, and powers quick links to certifications, experience, and the contact form.",
        highlights: [
            "Typewriter hero, floating background beams, and sticky theme-aware navigation.",
            "Qualifications and experience tabs with collapsible details plus floating image previews.",
            "Embla-powered certification carousel and a Resend-backed contact form with transactional emails.",
        ],
        metrics: [
            { label: "Pages", value: "3+" },
            { label: "Framework", value: "React + Vite" },
            { label: "Status", value: "Live" },
        ],
        stack: [
            "React",
            "Tailwind CSS",
            "Vite",
            "Resend",
            "Vercel",
            "Radix UI",
            "Aceternity UI",
        ],
        categories: ["Web Development", "Personal"],
        repoUrl:
            "https://github.com/IteratorInnovator/personal-portfolio-website",
        liveUrl: "https://harryngkokjing.com",
        status: "Live",
    },
    {
        id: "activity-analytics-board",
        title: "Activity Analytics Board",
        type: "Data Visualization",
        summary:
            "Custom GitHub calendar experience with theme-sync, tooltip formatting, and a responsive layout that surfaces streaks across years.",
        problem:
            "Default GitHub widgets clashed with my site’s typography and didn’t expose the details recruiters asked about (dates, streaks, months).",
        solution:
            "Wrapped react-github-calendar with bespoke theming, dropdown year selection, and tooltip overrides tied to my theme toggle.",
        outcome:
            "Visitors can quickly see when I’m shipping, zoom into specific contributions, and cross-reference stacks shown elsewhere on the site.",
        highlights: [
            "Year switcher to compare 2024 vs. 2025 output without scrolling forever.",
            "Intl.DateTimeFormat helpers to humanize tooltips, keeping accessibility intact.",
            "Live theme sync via custom events so the calendar adapts instantly to light/dark.",
        ],
        metrics: [
            { label: "Years", value: "2" },
            { label: "Theme", value: "Light + Dark" },
            { label: "Status", value: "Live" },
        ],
        stack: ["React", "react-github-calendar", "Radix UI", "Tailwind CSS"],
        categories: ["Web Development"],
        repoUrl:
            "https://github.com/IteratorInnovator/personal-portfolio-website",
        liveUrl: null,
        status: "Live",
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
