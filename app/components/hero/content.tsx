"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RadialGlowButton } from "@/components/radial-glow-button";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", damping: 30, stiffness: 70 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 25, stiffness: 90, delay: 0.6 },
    },
};

export default function HeroContent() {
    return (
        <div className="mx-auto max-w-2xl text-center lg:mx-0 sm:text-left">
            <motion.h1
                variants={container}
                initial="hidden"
                animate="show"
                className="text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]"
            >
                <motion.span variants={item} className="block">
                    Backend Developer
                </motion.span>
                <motion.span
                    variants={item}
                    className="block"
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: "italic",
                        fontWeight: 300,
                    }}
                >
                    Network & Cloud
                </motion.span>
            </motion.h1>

            <motion.blockquote
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-5 text-base italic leading-relaxed text-white/80 sm:mt-6 sm:text-lg"
            >
                &ldquo;Great infrastructure, like great Tea, is brewed with patience,
                precision.&rdquo;
            </motion.blockquote>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className=" mt-6  max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
            >
                I&apos;m a Network & Cloud Engineer who writes backend code and debugs
                with a fresh cup beside the keyboard. I build systems that scale,
                secure what matters, and ship with the patience of a pourover.
            </motion.p>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-6 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:items-center"
            >
                <Link href="#projects" className="w-full sm:w-auto">
                    <RadialGlowButton className="w-full sm:w-auto">
                        <span className="flex items-center justify-center gap-2">
                            View Projects
                            <ArrowUpRight className="h-4 w-4" />
                        </span>
                    </RadialGlowButton>
                </Link>

                <Link
                    href="#contact"
                    className="flex w-full  items-center justify-center rounded-xl border border-white/20 bg-white/5 px-9 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:border-white/35 hover:bg-white/11 hover:text-white sm:w-auto"
                >
                    Let&apos;s Talk
                </Link>
            </motion.div>
        </div>
    );
}