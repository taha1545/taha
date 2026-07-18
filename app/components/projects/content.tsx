// content.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { Effect } from "./effect";

export interface Project {
    id: string;
    name: string;
    icon: string;
    shortDesc: string;
    fullDesc: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        id: "1",
        name: "AxeDZ",
        icon: "/projects/axedz.svg",
        shortDesc:
            "A unified CPaaS for SMS, Email, and Cloud Storage",
        fullDesc:
            "A unified CPaaS platform that lets you send SMS, Emails, and manage Cloud Storage using a single API billed locally in Algerian Dinars (DZD). Try it for free now and do not miss our offers.",
        tags: ["Next.js", "Docker", "Microservices", "RabbitMQ"],
        demoUrl: "https://axedz.com",
        githubUrl: "https://github.com/taha1545/axeDz-front.git",
    },
    {
        id: "2",
        name: "Affrah DZ",
        icon: "/projects/affrah.png",
        shortDesc: "SaaS platform for managing Affrah in Algeria",
        fullDesc:
            "A SaaS platform for managing traditional Algerian celebrations (Affrah) with elegance and ease. Features a PHP API gateway, Satim payment integration, and a seamless booking experience.",
        tags: ["Satim", "PHP", "API"],
        demoUrl: "https://www.afrahdz.com",
    },
    {
        id: "3",
        name: "Schutzstaffel",
        icon: "/projects/logo.png",
        shortDesc: "Gamified tasks and rewards for university students",
        fullDesc:
            "A gamified task and reward system for university students. Complete tasks, earn points, and redeem rewards. Features a leaderboard, achievement badges, and social sharing to drive engagement.",
        tags: ["Next.js", "Node.js", "PostgreSQL"],
        githubUrl: "https://github.com/taha1545/schutzstaffel-students.git",
        demoUrl: "https://schutzstaffel-students.vercel.app",
    },
    {
        id: "4",
        name: "RanaJayin",
        icon: "/projects/logo4.svg",
        shortDesc: "Roadside assistance anytime, anywhere",
        fullDesc:
            "Roadside assistance always within reach. Whether you need towing, on-site repairs, battery charging, or emergency help, connect instantly with the nearest trusted service provider.",
        tags: ["React", "Node.js", "PostgreSQL", "Docker"],
        demoUrl: "https://rana-jayin-frint.vercel.app",
        githubUrl: "https://github.com/taha1545/Rana-Jayin-frint.git",
    },
    {
        id: "5",
        name: "Yaqin",
        icon: "/projects/logo5.webp",
        shortDesc: "Student progress tracking system",
        fullDesc:
            "An educational platform for tracking student progress, assignments, and performance analytics for parents and schools. Real-time updates, detailed reports, and communication tools.",
        tags: ["Laravel", "Pusher"],
        demoUrl: "https://yaqin-front.vercel.app",
        githubUrl: "https://github.com/taha1545/yaqin.git",
    },
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", damping: 25, stiffness: 80 },
    },
};

export default function ProjectsContent() {
    return (
        <div className="mx-auto max-w-6xl text-center lg:text-left">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.span
                    variants={fadeUp}
                    className="inline-block text-xs font-semibold uppercase tracking-widest text-primary"
                >
                    Selected Work
                </motion.span>

                <motion.h2
                    variants={fadeUp}
                    className="mt-3 text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl"
                >
                    <span className="block">Most Important Projects</span>
                </motion.h2>

                <motion.div variants={fadeUp} className="mt-12 lg:mt-20">
                    <Effect projects={projects} />
                </motion.div>
            </motion.div>
        </div>
    );
}