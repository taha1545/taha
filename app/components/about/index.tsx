"use client";

import AboutContent from "./content";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* ── Background: soft warm glow + dot grid ── */}

      {/* Center-left warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-0 h-[200px] w-[600px] -translate-x-1/4 rounded-full bg-primary/5 blur-[120px]"
      />

      {/* Bottom-right subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 right-0 h-[200px] w-[500px] translate-x-1/4 rounded-full bg-orange-600/5 blur-[100px]"
      />

      {/* Dot grid pattern — fades at edges via mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <AboutContent />
      </div>
    </section>
  );
}