"use client";

import AboutContent from "./content";
import AboutEffect from "./effect";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-38 border-b border-white/30"
    >

      <AboutEffect />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <AboutContent />
      </div>
    </section>
  );
}