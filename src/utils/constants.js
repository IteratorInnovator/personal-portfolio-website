import {
    Award,
    FolderGit2,
    GraduationCap,
    Home,
    Layers,
    Mail,
} from "lucide-react";

import CSS3 from "../assets/CSS3.svg";
import Docker from "../assets/Docker.svg";
import Express from "../assets/Express.svg";
import Firebase from "../assets/Firebase.svg";
import Git from "../assets/Git.svg";
import GitLab from "../assets/GitLab.svg";
import Golang from "../assets/Golang.svg";
import GoogleCloud from "../assets/GoogleCloud.svg";
import HTML5 from "../assets/HTML5.svg";
import JavaScript from "../assets/JavaScript.svg";
import MongoDB from "../assets/MongoDB.svg";
import MySQL from "../assets/MySQL.svg";
import NodeJS from "../assets/Node.js.svg";
import Python from "../assets/Python.svg";
import ReactIcon from "../assets/React.svg";
import TailwindCSS from "../assets/TailwindCSS.svg";
import Ubuntu from "../assets/Ubuntu.svg";
import Vercel from "../assets/Vercel.svg";
import Vite from "../assets/Vite.svg";

import { Github, Linkedin, Instagram } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";

import GoogleITAutomation from "../assets/GoogleITAutomation.png";
import DockerFoundations from "../assets/DockerFoundations.png";
import JavascriptMozilla from "../assets/JavascriptMozilla.png";
import TestAutomation from "../assets/TestAutomation.png";
import SoftwareTesting from "../assets/SoftwareTesting.png";

import InfosysCelebration1 from "../assets/InfosysInstep25Celebration.jpg";
import InfosysCelebration2 from "../assets/InfosysInstep25Celebration(2).jpg";

import { getAge } from "../utils/helpers";

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
        value: `${getAge()} Year Old SWE`,
        description:
            "I’m a software engineer looking for chances to build things that actually help people.",
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
        grade: "Grade: Cum Laude",
        description:
            "Comprehensive study in Fullstack Development, Distributed Systems, and Digital Design with hands-on project experience.",
        highlights: [
            "Programmes Lead - SMU Artificial Intelligence Club",
            "Developer Subcommittee - SMU Fintech Club",
            "Teaching Assistant - IS442 Object-Oriented Programming",
            "Teaching Assistant - IS113 Web Application Development I",
            "Teaching Assistant - IS115 Algorithms & Programming",
            "Teaching Assistant - COR-IS1704 Computational Thinking",
            "Coding Mentor - SMU Coder's Assembly",
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
        title: "Software Engineer Intern",
        place: "AI Shophouse",
        period: "Dec 2025 - Present",
        location: "Singapore",
        status: "ongoing",
        description: "Developing and optimizing AI tutor chatbots.",
        responsibilities: [],
        technologies: ["Python", "Hugging Face", "Gradio"],
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
        title: "DevOps Engineer Intern",
        place: "Infosys Limited",
        period: "Jun 2025 - Aug 2025",
        location: "Bangalore, India",
        status: "completed",
        description:
            "Autonomous Mobile Robot (AMR) under Education, Training, and Assessment unit.",
        responsibilities: [
            "Implemented a Docker-based ROS build environment on RHEL 9, standardizing development workflows and reducing setup inconsistencies",
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
];

export const certifications = [
    {
        name: "LambdaTest Software Testing Professional Certificate",
        issuer: "LambdaTest",
        issueDate: "Dec 2025",
        skills: [
            "Software Testing",
            "Software Quality Assurance",
            "Agile Testing",
        ],
        thumbnail: SoftwareTesting,
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/ae496edcf9226b094095851e400e76516391fd2fcec1bde335970b6c717a2a0d",
    },
    {
        name: "LambdaTest Test Automation Professional Certificate",
        issuer: "LambdaTest",
        issueDate: "Dec 2025",
        skills: ["Test Automation", "Selenium", "Web Drivers"],
        thumbnail: TestAutomation,
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/8ddad38542acc01d08466b8a2de81994016780fe48b5b8125cb35c51e8ce0053",
    },
    {
        name: "JavaScript Foundations Professional Certificate",
        issuer: "Mozilla",
        issueDate: "May 2025",
        skills: ["JavaScript", "Web Fundamentals"],
        thumbnail: JavascriptMozilla,
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/0d09d912c50ff3179435b16737ae49695cda67fea6df8515f6c95b3e988136c8",
    },
    {
        name: "Docker Foundations Professional Certificate",
        issuer: "Docker, Inc",
        issueDate: "Jan 2025",
        skills: ["Docker", "Docker Compose"],
        thumbnail: DockerFoundations,
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/0ac348144dd199c4de891f0a921b8e824a2c533402f07f614d09c6b683db08ef",
    },
    {
        name: "Google IT Automation with Python",
        issuer: "Google",
        issueDate: "Jan 2025",
        skills: ["Python", "Git", "APIs", "Google Cloud Platform"],
        thumbnail: GoogleITAutomation,
        credentialUrl:
            "https://www.coursera.org/account/accomplishments/specialization/DB7KDGI7VB4U",
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
            { name: "Node.js", icon: NodeJS },
            { name: "Express", icon: Express },
        ],
    },
    {
        category: "Databases & Cloud",
        subSkills: [
            { name: "MySQL", icon: MySQL },
            { name: "MongoDB", icon: MongoDB },
            { name: "Firebase", icon: Firebase },
            { name: "Vercel", icon: Vercel },
            { name: "Google Cloud", icon: GoogleCloud },
        ],
    },
    {
        category: "DevOps & Tools",
        subSkills: [
            { name: "Docker", icon: Docker },
            { name: "Git", icon: Git },
            { name: "GitLab", icon: GitLab },
            { name: "Ubuntu", icon: Ubuntu },
        ],
    },
];

export const projects = [
    {
        id: "sea-link-finance",
        title: "Sea Link Finance",
        type: "Blockchain Web App",
        summary:
            "A decentralized maritime financing platform my team built for the NUS Fintech Summit 2026 hackathon that connects ship owners and investors through blockchain-based credit evaluation and real-time voyage tracking.",
        problem:
            "Shipping finance is trapped in a black box. Lack of transparent performance data makes short-term lending risky for investors and expensive for shipowners, while traditional settlement delays tie up vital working capital.",
        solution:
            "Built a platform that transforms shipping voyages into bankable assets using XRPL. Shipowners establish on-chain credit through Transaction Execution Reliability scores, while investors fund short-term loans backed by real-time voyage cash flows with atomic stablecoin settlement.",
        outcome:
            "Enables faster funding for ship owners through transparent, data-driven credit evaluation and provides investors with flexible yield opportunities backed by real-time voyage cash flows.",
        highlights: [
            "DID-based identity system using XRPL's native decentralized identifiers to persist shipowner credit history on-chain.",
            "Atomic RLUSD settlement via xrpl.js ensuring instant, stable-value invoice and loan transactions.",
            "XRPL Hooks for programmable loan logic with custom repayment conditions and fail-safes.",
            "Real-time voyage tracking dashboard with maps showing ship positions and routes.",
            "Crossmark SDK integration for browser-based wallet connection and transaction signing.",
        ],
        metrics: [
            { label: "Award", value: "3rd Place" },
            { label: "Blockchain", value: "XRPL Ledger" },
            { label: "Settlement", value: "RLUSD" },
        ],
        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "xrpl.js",
            "Crossmark SDK",
        ],
        categories: ["Hackathon", "Web Development"],
        repoUrl: "https://github.com/junshenlye/Lab-Rats-LXVII",
        devpostUrl: "https://devpost.com/software/sea-link-finance",
        videoUrl: null,
        status: "Prototype",
    },
    {
        id: "git-gram",
        title: "Git Gram",
        type: "Telegram Bot",
        summary:
            "A Go-based Telegram bot backend that consumes GitHub App webhooks and delivers real-time repository activity notifications to Telegram chats, with in-chat controls for status and notification settings.",
        problem:
            "GitHub notifications get noisy and easy to miss, and setting up workflows or custom webhooks for simple chat-based updates typically requires extra setup or per-repo configuration.",
        solution:
            "Built a GitHub App + webhook receiver on Cloud Run that verifies signatures, maps GitHub App installations to Telegram chat IDs in Firestore, and dispatches formatted Telegram messages through slash commands for setup, status checks, muting, and unlinking.",
        outcome:
            "Lets you receive focused repo activity updates directly in Telegram, control noise per chat, and manage installation linkage without touching repository configuration files.",
        highlights: [
            "Consumes GitHub App webhooks with HMAC signature verification for request authenticity.",
            "Stores chat to installation mapping and per-chat notification settings in Firestore with CRUD operations using the Go SDK.",
            "Implements Telegram slash commands (/start, /help, /status, etc) with MarkdownV2-safe message formatting.",
            "Utilized GitHub App JWT-Authenticated API calls to fetch installation account info and delete installations on unlink.",
            "Deployed as a containerized Go service to Google Cloud Run with automated CI/CD via GitLab.",
        ],
        metrics: [
            { label: "Config setup: ", value: "0 YAML files" },
            { label: "Supported event types", value: "5+" },
            { label: "Delivery speed", value: "Real-time" },
        ],
        stack: [
            "Go",
            "Fiber",
            "Telegram Bot API",
            "GitHub App (webhooks, JWT)",
            "Firestore (Go SDK)",
            "Google Cloud Run",
            "Docker",
            "GitLab CI/CD",
        ],
        categories: ["Personal"],
        repoUrl: "https://github.com/IteratorInnovator/git-gram",
        liveUrl: "https://t.me/gitgram_67bot",
        videoUrl: null,
        status: "Active",
    },
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
            "Tailwind CSS",
            "Zustand",
            "Vite",
            "Firebase Auth",
            "Cloud Firestore",
            "Cloud Functions",
            "Quill.js",
            "Youtube Data API",
            "YouTube IFrame API",
        ],
        categories: ["Web Development", "Coursework"],
        repoUrl: "https://github.com/IteratorInnovator/note-sync",
        liveUrl: "https://wad2-44a13.web.app/",
        videoUrl: "https://youtu.be/Bmmdfy6yyX0",
        status: "Live",
    },
    {
        id: "personal-portfolio",
        title: "Personal Portfolio Website",
        type: "Frontend Experience",
        summary:
            "The site you’re browsing now: a React + Vite build with themed navigation, section offsets, and intentional typography to tell my story quickly.",
        problem:
            "Wanted a single home for my journey, work, and contact details that didn’t rely on template builders.",
        solution:
            "Designed a component system (Hero, Highlights, Qualifications, Skills) with custom theme handling, motion flourishes, and responsive layouts.",
        outcome:
            "Gives recruiters and collaborators an interactive overview, and powers quick links to certifications, experience, and the contact form.",
        highlights: [
            "Typewriter hero, floating background beams, and sticky theme-aware navigation.",
            "Qualifications and experience tabs with collapsible details plus floating image previews.",
            "Embla-powered certification carousel and a Resend-backed, Cloudflare Turnstile-protected contact form with transactional emails.",
        ],
        metrics: [
            { label: "Pages", value: "3+" },
            { label: "Theme", value: "Light + Dark" },
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
            "Cloudflare Turnstile",
        ],
        categories: ["Web Development", "Personal"],
        repoUrl:
            "https://github.com/IteratorInnovator/personal-portfolio-website",
        liveUrl: "https://harryngkokjing.com",
        videoUrl: null,
        status: "Live",
    },
    {
        id: "smart-attendance-system",
        title: "Smart Student Attendance System",
        type: "Desktop Application",
        summary:
            "My team and I built a JavaFX based face recognition attendance system for CS102 Programming Fundamentals II. It lets teachers register faces, verify liveness, and mark attendance automatically through the camera.",
        problem:
            "Manual roll calls take time, are easy to fake, and do not scale well when teachers handle multiple classes and sessions.",
        solution:
            "Designed a JavaFX application with event driven services, an OpenCV recognition engine, and a SQLite data layer modelled through domain objects and repository patterns. Added onboarding flows for teachers and students, registration steps, and reusable UI components.",
        outcome:
            "Automates attendance, reduces spoofing, and keeps records organised by teacher, class, and session. The system demonstrates architectural layering, design patterns, and applied computer vision techniques.",
        highlights: [
            "Layered architecture with presentation, service, recognition, and data layers linked through interfaces and event driven messaging.",
            "Face detection using HaarCascade and multi feature histogram based recognition with preprocessing (CLAHE, bilateral filtering, normalization).",
            "Liveness checks using Laplacian variance to stop printed photo spoofing.",
            "Flexible onboarding pipeline where each step implements a RegistrationStep interface with lifecycle hooks and its own validation.",
            "Custom JavaFX Table component with sorting support; items implement TableChipItem to control display and ordering.",
            "Type safe SQL through jOOQ with transactions, joins, and pagination.",
        ],
        metrics: [
            { label: "Recognition", value: "Classroom-proven" },
            { label: "Accuracy", value: "70%+ in tests" },
            { label: "Liveness", value: "Spoof guard" },
        ],
        stack: [
            "Java",
            "JavaFX",
            "SQLite",
            "OpenCV",
            "jOOQ",
            "OpenCSV",
            "PDFBox",
            "Apache POI",
            "Maven",
        ],
        categories: ["Coursework"],
        repoUrl: "https://github.com/tiongg/cs102-proj",
        liveUrl: "",
        videoUrl: null,
        status: "Prototype",
    },
    {
        id: "privacylens",
        title: "PrivacyLens",
        type: "Mobile App + Backend",
        summary:
            "A React Native app my team and I built for the TikTok TechJam 2025 hackathon, focused on helping users check and improve the privacy of short form videos before uploading.",
        problem:
            "People often post clips that accidentally expose faces, screens, or identifying details, and most tools only detect issues after the video is already online.",
        solution:
            "Developed a pipeline that scans videos locally with computer vision, highlights privacy risks, and suggests fixes. Built a simple review interface that lets users preview, flag, and clean sensitive frames before sharing.",
        outcome:
            "Gives creators a quick way to catch privacy issues early and reduces accidental oversharing on social platforms, all within a mobile friendly workflow.",
        highlights: [
            "On device detection of faces and sensitive regions using lightweight models.",
            "Frame by frame privacy preview with clear visual markers for flagged content.",
            "Backend service that stores anonymized results and supports future analytics.",
        ],
        metrics: [
            { label: "Platform", value: "React Native" },
            { label: "Detection", value: "On-device CV" },
            { label: "Flags", value: "~3+ issues/clip" },
        ],
        stack: ["React Native", "FastAPI", "Python", "OpenCV", "YOLO"],
        categories: ["Hackathon"],
        repoUrl: "https://github.com/JarudeC/privacylens",
        liveUrl: "",
        devpostUrl: "https://devpost.com/software/privacylens",
        videoUrl: null,
        status: "Prototype",
    },
    {
        id: "automated-email-reminder",
        title: "Automated Email Reminder",
        type: "Backend Automation",
        summary:
            "A Python based email reminder system I built to email myself 24 hour advance reminders for classes, quizzes, exams, and events.",
        problem:
            "I wanted a simple way to stay on top of classes and deadlines without constantly checking calendars or forgetting important dates.",
        solution:
            "Designed a JSON driven event store and a Python script that composes context aware emails and sends them via SMTP on a fixed schedule, supporting both recurring and one time events.",
        outcome:
            "Keeps upcoming commitments visible in my inbox, reduces the chance of missed classes or deadlines, and gives me a reusable pattern for future scheduling automations.",
        highlights: [
            "Supports recurring weekly events and one time events with a common JSON format.",
            "Generates tailored email bodies for classes, exams, and general activities using event metadata.",
            "Integrates with scheduled runs (cron or GitHub Actions) so reminders go out 24 hours before each event.",
        ],
        metrics: [
            { label: "Email reminders sent", value: "100+" },
            { label: "Event types", value: "Classes, exams, activities" },
            { label: "Status", value: "Active" },
        ],
        stack: [
            "Python",
            "smtplib",
            "JSON",
            "Logging",
            "GitHub Actions",
            "Cron",
        ],
        categories: ["Personal"],
        repoUrl:
            "https://github.com/IteratorInnovator/automated-email-reminder",
        liveUrl: "",
        videoUrl: null,
        status: "Active",
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
