"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 25, stiffness: 80 },
  },
};

const stats = [
  { label: "Systems Built", value: "30+" },
  { label: "Projects Deployed", value: "10+" },
  { label: "Years Brewing", value: "3+" },
];

export default function AboutContent() {
  return (
    <div className="text-center lg:text-left">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-primary"
        >
          About Me
        </motion.span>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span
            className="block"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Designing Scalable Infrastructure
          </span>
        </motion.h2>

        {/* Body */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-10 max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base lg:space-y-12 lg:mt-16  md:text-lg lg:mx-0 lg:max-w-7xl"
        >
          <p>{`
            I'm Taha Mansouri, a Network & Cloud Engineering student passionate about
            backend development, cloud infrastructure, and DevOps. I enjoy designing
            reliable, scalable, and maintainable systems, from building secure APIs and
            deploying cloud applications to automating infrastructure.
          `}</p>

          <p>
            My foundation in computer networking gives me a deep understanding of how
            systems communicate, perform, and remain secure. Combined with modern backend
            technologies, I focus on creating architectures that are clean, efficient,
            and built to grow.
          </p>

          <p>
            I primarily work with Node.js, TypeScript, PostgreSQL, Docker, Kubernetes,
            and cloud technologies while continuously expanding my knowledge of system
            design, distributed systems, and platform engineering. Every project is an
            opportunity to improve performance, simplify complexity, and write code that
            stands the test of time.
          </p>

          <p>{`
            Beyond development, I'm constantly learning and exploring emerging
            technologies in cloud computing, artificial intelligence, and modern software
            architecture. I believe great software is built through thoughtful
            engineering, continuous improvement, and attention to detail.
         `} </p>
        </motion.div>


        <motion.div
          variants={fadeUp}
          className="mt-10 grid w-[98%] mx-auto grid-cols-3 gap-3 sm:gap-5 md:mt-24"
        >
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-1 rounded-2xl border border-white/8 bg-white/4 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.07] sm:p-6 lg:items-start"
            >
              <span className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                {value}
              </span>
              <span className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-white/70 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}