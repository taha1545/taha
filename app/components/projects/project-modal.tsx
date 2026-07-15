"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "./content";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!project) return null;

    const hasDemo = !!project.demoUrl;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
                    >
                        <div
                            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.1] bg-[#1f140d]/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            {/* Icon + Title */}
                            <div className="flex items-center gap-4 pr-8">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05]">
                                    <img
                                        src={project.icon}
                                        alt={project.name}
                                        className="h-7 w-7 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                        {project.name}
                                    </h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-white/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base">
                                {project.fullDesc}
                            </p>

                            {/* Actions */}
                            <div className="mt-8 flex items-center gap-3">
                                {hasDemo ? (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "inline-flex flex-1 items-center justify-center gap-2 rounded-xl",
                                            "bg-primary px-5 py-3 text-sm font-semibold text-white",
                                            "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_14px_rgba(234,88,12,0.25)]",
                                            "transition-all duration-200 hover:bg-orange-500",
                                            "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_20px_rgba(234,88,12,0.35)]",
                                            "active:scale-[0.96]"
                                        )}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </a>
                                ) : (
                                    <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 text-sm font-medium text-white/25">
                                        <ExternalLink className="h-4 w-4" />
                                        No Demo
                                    </span>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05] text-white/70 transition-all hover:border-white/25 hover:bg-white/[0.1] hover:text-white active:scale-[0.96]"
                                    >
                                        <img
                                            src="/skills/Git.svg"
                                            alt="GitHub"
                                            className="h-5 w-5 object-contain"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}