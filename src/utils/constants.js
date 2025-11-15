import AWS from "../assets/AWS.svg";
import AWSCertificate from "../assets/AWS.png";
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

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";

import JavascriptMozilla from "../assets/JavascriptMozilla.png";
import GoogleITAutomation from "../assets/GoogleITAutomation.png";
import DockerFoundations from "../assets/DockerFoundations.png";


export const navigationItems = [
    { name: "Home", path: "/", isSection: true },
    { name: "Qualifications", path: "/", isSection: true },
    { name: "Skills", path: "/", isSection: true },
    { name: "Projects", path: "/projects", isSection: false },
    { name: "Certifications", path: "/certifications", isSection: false },
    { name: "Contact", path: "/contact", isSection: false },
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

export const experienceTimeline = [
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
