"use client";

import HeroBackground from "./background";
import HeroContent from "./content";

const fontStyle = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');`;

export default function Hero() {
  return (
    <>
      <style>{fontStyle}</style>
      <section
        id="home"
        className="relative flex min-h-screen w-full items-center justify-start overflow-hidden border-b border-white/30"
      >
        <HeroBackground />
        <div className="relative z-10  pt-10 px-4 mx-auto max-w-7xl w-full sm:px-12 xl:pt-12 xl:px-6">
          <HeroContent />
        </div>
      </section>
    </>
  );
}