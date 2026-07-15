"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface AnimatedFooterProps {
  headingLines?: string[];
  background?: string;
  textColor?: string;
  revealOnScroll?: boolean;
  className?: string;
}

export function AnimatedFooter({
  headingLines = ["Sensipav"],
  background = "#180e08",
  textColor = "#ffffff",
  revealOnScroll = true,
  className,
}: AnimatedFooterProps) {
  const rootRef = useRef<HTMLElement>(null);
  const animateInRef = useRef<() => void>(() => { });
  const animateOutRef = useRef<() => void>(() => { });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const chars = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-af-char]")
    );

    const animateIn = () => {
      gsap.to(chars, {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
        stagger: { each: 0.04, from: "center" },
        overwrite: true,
      });
    };

    const animateOut = () => {
      gsap.to(chars, {
        yPercent: 125,
        duration: 0.4,
        ease: "power2.in",
        stagger: { each: 0.01, from: "center" },
        overwrite: true,
      });
    };

    animateInRef.current = animateIn;
    animateOutRef.current = animateOut;

    const maskAll = () => gsap.set(chars, { yPercent: 125 });
    const showAll = () => gsap.set(chars, { yPercent: 0 });

    let observer: IntersectionObserver | null = null;

    if (revealOnScroll) {
      maskAll();
      let isRevealed = false;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !isRevealed) {
              isRevealed = true;
              animateIn();
            } else if (!entry.isIntersecting && isRevealed) {
              isRevealed = false;
              animateOut();
            }
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(root);
    } else {
      showAll();
    }

    return () => {
      observer?.disconnect();
      gsap.killTweensOf(chars);
    };
  }, [revealOnScroll]);

  return (
    <footer
      id="contact"
      ref={rootRef}
      className={cn(
        "relative flex h-[50vh] min-h-75 w-full items-end justify-center overflow-hidden",
        className
      )}
      style={{ backgroundColor: background, color: textColor }}
    >
      <div className="flex gap-4 px-8 pb-12">
        {headingLines.map((word, wi) => (
          <h2
            key={`${word}-${wi}`}
            aria-label={word}
            className="overflow-hidden pb-[0.15em] mb-[-0.15em] font-medium leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 12vw, 10rem)" }}
          >
            {Array.from(word).map((ch, ci) => (
              <span
                key={ci}
                data-af-char
                aria-hidden="true"
                className="inline-block will-change-transform"
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h2>
        ))}
      </div>
    </footer>
  );
}

export default AnimatedFooter;