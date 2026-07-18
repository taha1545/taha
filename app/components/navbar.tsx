"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import {
    Sheet,
    SheetContent,
    SheetTitle,
} from "@/components/ui/sheet";

const NAVBAR_OFFSET = 80;
const LINKEDIN_URL = "https://www.linkedin.com/in/taha-mohamed-mansouri-15a99924b/";
const GITHUB_URL = "https://github.com/taha1545";

const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
] as const;

const linkedInClasses = cn(
    "inline-flex items-center justify-center rounded-xl",
    "border border-[#d4a574]/30 bg-[#2a1e15]/80",
    "backdrop-blur-sm px-6 py-2.5",
    "text-sm font-medium text-[#d4a574]",
    "transition-all duration-200",
    "hover:border-[#d4a574]/50 hover:bg-[#342418] hover:text-[#e8c9a0]",
    "active:scale-[0.96]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574]/30"
);

const githubClasses = cn(
    "inline-flex items-center justify-center rounded-xl",
    "border border-white/20 bg-black/5",
    "backdrop-blur-sm px-6 py-2.5",
    "text-sm font-medium text-white/80",
    "transition-all duration-200",
    "hover:border-white/35 hover:bg-white/10 hover:text-white",
    "active:scale-[0.96]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const scrollPos = window.scrollY + NAVBAR_OFFSET;
            let current: string = links[0].id;

            for (const { id } of links) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos) {
                    current = id;
                }
            }

            const contactEl = document.getElementById("contact");
            if (contactEl && contactEl.offsetTop <= scrollPos) {
                current = "contact";
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", damping: 22, stiffness: 180, delay: 0.05 }}
            className={cn(
                "fixed top-3 left-0 right-0 z-50 h-16 max-w-7xl  rounded-4xl mx-auto  transition-all duration-300",
                scrolled
                    ? "border border-white/6 bg-background/40 backdrop-blur-xs"
                    : "border border-white/5 bg-background/20 "
            )}
        >
            <div className="mx-auto flex h-16  items-center justify-between px-6 sm:px-8 md:px-6">
                <Logo />

                <nav className="hidden items-center gap-10 md:flex">
                    {links.map(({ label, id }) => {
                        const isActive = activeSection === id;

                        return (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={cn(
                                    "group relative py-1.5 text-[15px] transition-colors duration-200",
                                    isActive ? "text-white" : "text-white/60 hover:text-white/90"
                                )}
                            >
                                {label}

                                {isActive ? (
                                    <motion.span
                                        layoutId="nav-active-indicator"
                                        className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-[#d4a574] to-[#c2783a]"
                                        transition={{
                                            type: "spring",
                                            damping: 28,
                                            stiffness: 320,
                                        }}
                                    />
                                ) : (
                                    <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-white/40 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={githubClasses}
                    >
                        GitHub
                    </a>

                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkedInClasses}
                    >
                        LinkedIn
                    </a>
                </div>

                <button
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(true)}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/20 p-2.5 text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/11 hover:text-white active:scale-[0.96] md:hidden"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetContent
                    side="right"
                    className="flex w-[min(100vw-2rem,20rem)] flex-col border-white/10 bg-[#1f140d]/60 p-0 backdrop-blur-md"
                >
                    <SheetTitle className="sr-only">Navigation menu</SheetTitle>

                    <div className="border-b border-white/8 px-6 py-5 mt-8 mx-auto">
                        <Logo />
                    </div>

                    <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                        {links.map(({ label, id }) => {
                            const isActive = activeSection === id;

                            return (
                                <Link
                                    key={id}
                                    href={`#${id}`}
                                    onClick={closeMobile}
                                    className={cn(
                                        "rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-200",
                                        isActive
                                            ? "bg-white/8 text-white"
                                            : "text-white/60 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <span className="flex items-center justify-center">
                                        {label}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex flex-col gap-3 border-t border-white/8 px-4 py-6">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobile}
                            className={cn(githubClasses, "w-full")}
                        >
                            GitHub
                        </a>

                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobile}
                            className={cn(linkedInClasses, "w-full")}
                        >
                            LinkedIn
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
        </motion.header>
    );
}