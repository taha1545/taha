"use client";

import SkillsContent from "./content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32 border-b border-white/30 "
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <SkillsContent />
      </div>
    </section>
  );
}