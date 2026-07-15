"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./project-card";
import ProjectModal from "./project-modal";

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
        shortDesc: "unified CPaaS that lets you send SMS, Emails, and manage Cloud Storage ",
        fullDesc:
            "unified CPaaS platform that lets you send SMS, Emails, and manage Cloud Storage using a single API billed locally in Algerian Dinars (DZD). try for free now and dont miss our offers",
        tags: ["Next.js", "Docker", "Microservices", "RabbitMQ"],
        demoUrl: "https://axedz.com",
        githubUrl: "https://github.com/taha1545/axeDz-front.git",
    },
    {
        id: "2",
        name: "Affrah dz",
        icon: "/projects/affrah.png",
        shortDesc: "SAAS platform for managing Affrah in Algeria.",
        fullDesc:
            "A php  API gateway handling 10k+ req/s with sub-10ms latency. Features JWT authentication, Redis-based rate limiting, NGINX load balancing, and automatic service discovery via Consul. Includes a custom dashboard for real-time traffic analytics and health checks.",
        tags: ["Satim", "php", "Api"],
        demoUrl: "https://www.afrahdz.com",
    },
    {
        id: "3",
        name: "schutzstaffel",
        icon: "/projects/logo.png",
        shortDesc: "Gamification tasks and rewards system for Univ Students.",
        fullDesc:
            "A gamified task and reward system for university students. Students can complete tasks, earn points, and redeem rewards. The platform includes a leaderboard, achievement badges, and social sharing features to encourage engagement and competition among students.",
        tags: ["Next", "Node.js", "PostgreSQL"],
        githubUrl: "https://github.com/taha1545/schutzstaffel-students.git",
         demoUrl: "https://schutzstaffel-students.vercel.app",
    },
    {
        id: "4",
        name: "RanaJayin",
        icon: "/projects/logo4.svg",
        shortDesc: "Roadside Assistance Anytime, Anywhere",
        fullDesc:
            "Rana Jayen, roadside assistance is always within reach. Whether you need towing, quick on-site repairs, battery charging, or emergency help, our platform connects you instantly with the nearest trusted service provider. Fast, reliable, and available anytime, anywhere, so you can get back on the road with confidence.",
        tags: ["react", "node", "PostgreSQL", "Docker"],
        demoUrl: "https://rana-jayin-frint.vercel.app",
        githubUrl: "https://github.com/taha1545/Rana-Jayin-frint.git",
    },
      {
        id: "5",
        name: "Yaqin ",
        icon: "/projects/logo5.webp",
        shortDesc: "Yaqin  Student Progress Tracking System",
        fullDesc:
            "Educational platform for tracking student progress, assignments, and performance analytics for parents and schools. It provides real-time updates, detailed reports, and communication tools to enhance the learning experience and foster collaboration between students, teachers, and parents.",
        tags: ["laravel", "pusher"],
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
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <>
            <div className="mx-auto max-w-6xl text-center lg:text-left">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Header */}
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
                        <span className="block"> Most Important Projects I&apos;ve</span>
                    </motion.h2>

                    {/* Grid */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7"
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onViewDetails={() => setSelected(project)}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <ProjectModal
                project={selected}
                isOpen={!!selected}
                onClose={() => setSelected(null)}
            />
        </>
    );
}