"use client";

import { motion, type Variants } from "framer-motion";

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

function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
    return (
        <div className="group flex flex-col items-center gap-2">
            {/* Card container — larger and responsive */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(234,88,12,0.08)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                {/* Icon image — bigger and responsive */}
                <img
                    src={`/skills/${skill.file}`}
                    alt={skill.name}
                    className="h-8 w-8 object-contain transition-all duration-300 group-hover:scale-110 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                />
            </div>
            {/* Label — slightly larger too */}
            <span className="text-xs font-medium text-white/40 transition-colors duration-300 group-hover:text-white/70 sm:text-sm">
                {skill.name}
            </span>
        </div>
    );
}

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