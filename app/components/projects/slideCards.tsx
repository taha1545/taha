"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "./content";

interface SlideCardProps {
    project: Project;
}

const item = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.15 + i * 0.08,
            type: "spring" as const,
            stiffness: 120,
            damping: 20,
        },
    }),
} as const;

export function SlideCard({ project }: SlideCardProps) {
    return (
        <div className="flex h-full min-h-135 flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/4 backdrop-blur-sm lg:min-h-120 lg:flex-row">
            <div className="relative flex w-full items-center justify-center overflow-hidden bg-linear-to-b from-white/4 via-white/1 to-transparent p-10 lg:w-[55%] lg:p-16">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                    }}
                />
                <motion.div
                    initial={{ scale: 0.85, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 22,
                        delay: 0.1,
                    }}
                    className="relative z-10 h-40 w-40 lg:h-56 lg:w-56"
                >
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
                    <Image
                        src={project.icon}
                        alt={project.name}
                        fill
                        className="relative z-10 object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                        sizes="(max-width: 1024px) 160px, 224px"
                    />
                </motion.div>
            </div>

            <div className="flex w-full flex-col justify-center p-8 lg:w-[45%] lg:p-12">
                <motion.h3
                    custom={0}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="text-2xl font-medium tracking-tight text-white lg:text-3xl"
                >
                    {project.name}
                </motion.h3>

                <motion.p
                    custom={1}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="mt-4 text-sm leading-relaxed text-white/50 lg:text-[15px]"
                >
                    {project.fullDesc}
                </motion.p>

                <motion.div
                    custom={2}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="mt-6 flex flex-wrap gap-2"
                >
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium tracking-wide text-white/60"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    custom={3}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="mt-8 flex flex-wrap items-center gap-3"
                >
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_14px_rgba(234,88,12,0.25)] transition-all duration-200 hover:bg-orange-500 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_20px_rgba(234,88,12,0.35)] active:scale-[0.96]"
                        >
                            Live Demo
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8.5 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
                        >
                            <Image
                                src="/skills/Git.svg"
                                alt="Git"
                                width={16}
                                height={16}
                                className="h-4 w-4 opacity-80 invert"
                            />
                            Source
                        </a>
                    )}
                </motion.div>
            </div>
        </div>
    );
}