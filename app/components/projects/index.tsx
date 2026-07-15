"use client";

import ProjectsContent from "./content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-hidden py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-1/2 h-[200px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[100px]"
      />


      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-32 -left-32 h-[200px] w-[400px] rounded-full bg-orange-600/[0.03] blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "100% 64px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <ProjectsContent />
      </div>
    </section>
  );
}