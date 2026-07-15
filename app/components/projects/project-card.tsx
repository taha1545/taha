"use client";

import { ExternalLink, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "./content";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const hasDemo = !!project.demoUrl;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.05] hover:shadow-[0_8px_32px_rgba(234,88,12,0.06)]">
      {/* Top gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header: Icon + Name */}
      <div className="flex items-start gap-4 p-6 pb-0 sm:p-7 sm:pb-0">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/[0.08] transition-all duration-300 group-hover:ring-primary/30">
          <img
            src={project.icon}
            alt={project.name}
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="text-lg font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-primary">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 pt-4 sm:p-7 sm:pt-4">
        <p className="text-sm leading-relaxed text-white/50 line-clamp-3">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-white/[0.05] bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-2.5 pt-6 sm:flex-row sm:items-center">
          <button
            onClick={onViewDetails}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:scale-[0.96]"
          >
            <Eye className="h-3.5 w-3.5" />
            Details
          </button>

          {hasDemo ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex flex-1 items-center justify-center gap-2 rounded-xl",
                "bg-primary px-4 py-2.5 text-sm font-semibold text-white",
                "shadow-[0_4px_14px_rgba(234,88,12,0.2)]",
                "transition-all duration-200 hover:bg-orange-500",
                "hover:shadow-[0_6px_20px_rgba(234,88,12,0.3)]",
                "active:scale-[0.96]"
              )}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </a>
          ) : (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-white/20">
              <ExternalLink className="h-3.5 w-3.5 opacity-40" />
              Demo
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] active:scale-[0.96]"
            >
              <img
                src="/skills/Git.svg"
                alt="GitHub"
                className="h-4 w-4 object-contain opacity-60 transition-opacity group-hover:opacity-100"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}