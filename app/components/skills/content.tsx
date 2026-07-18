"use client";

import { motion, type Variants } from "framer-motion";
import SkillCard from "./card";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", damping: 25, stiffness: 80 },
    },
};

const skills = [
    { name: "Postman", file: "Postman.svg" },
    { name: "Ansible", file: "Ansible.svg" },
    { name: "PHP", file: "PHP.svg" },
    { name: "Laravel", file: "Laravel.svg" },
    { name: "Express", file: "Express.svg" },
    { name: "PostgreSQL", file: "PostgresSQL.svg" },
    { name: "NGINX", file: "NGINX.svg" },
    { name: "Terraform", file: "Terraform.svg" },
    { name: "Kubernetes", file: "Kubernetes.svg" },
    { name: "Docker", file: "Docker.svg" },
    { name: "Kafka", file: "Kafka.svg" },
    { name: "Linux", file: "Linux.svg" },
    { name: "Git", file: "Git.svg" },
    { name: "Cloud", file: "Cloud.svg" },
    { name: "Python", file: "Python.svg" },
    { name: "Node.js", file: "Node.js.svg" },
    { name: "TypeScript", file: "TypeScript.svg" },
    { name: "Next.js", file: "Next.js.svg" },
];

// Diamond pyramid for 18 items: 1-2-3-5-4-2-1
const columnLayout = [
    [0],
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14],
    [15, 16],
    [17],
];



export default function SkillsContent() {
    return (
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
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
                    Tech Stack
                </motion.span>

                <motion.h2
                    variants={fadeUp}
                    className="mt-3 text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl"
                >
                    <span className="block">Skills And Tools I Work With</span>
                </motion.h2>

                {/* Diamond Grid */}
                <motion.div variants={fadeUp} className="mt-12 lg:mt-16">
                    {/* Mobile: wrap */}
                    <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:hidden">
                        {skills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>

                    {/* Desktop+: diamond columns */}
                    <div className="hidden items-center justify-center gap-4 md:flex lg:gap-5">
                        {columnLayout.map((colIndices, i) => (
                            <div key={i} className="flex flex-col gap-4 lg:gap-5">
                                {colIndices.map((index) => (
                                    <SkillCard key={skills[index].name} skill={skills[index]} />
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}