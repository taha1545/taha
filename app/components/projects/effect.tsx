"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideCard } from "./slideCards";
import type { Project } from "./content";

interface EffectProps {
  projects: Project[];
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export function Effect({ projects }: EffectProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const count = projects.length;
  const current = ((page % count) + count) % count;

  const paginate = useCallback(
    (dir: number) => setPage(([p]) => [p + dir, dir]),
    []
  );

  useEffect(() => {
    if (!isAutoPlaying || count <= 1) return;
    const t = setInterval(() => paginate(1), 3000);
    return () => clearInterval(t);
  }, [isAutoPlaying, paginate, count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) paginate(1);
    else if (swipe > swipeConfidenceThreshold) paginate(-1);
  };

  const goTo = useCallback(
    (i: number) => setPage(([p]) => [i, i > p ? 1 : -1]),
    []
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative min-h-135 overflow-hidden rounded-3xl lg:min-h-120">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{
              x: direction > 0 ? 300 : -300,
              opacity: 0,
              scale: 0.96,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{
              x: direction < 0 ? 300 : -300,
              opacity: 0,
              scale: 0.96,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={onDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <SlideCard project={projects[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 h-0.5 w-full overflow-hidden rounded-full bg-white/6">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={isAutoPlaying ? { width: "100%" } : { width: "0%" }}
          transition={
            isAutoPlaying
              ? { duration: 5, ease: "linear" }
              : { duration: 0.3 }
          }
          key={`${current}-${isAutoPlaying}`}
        />
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          onClick={() => paginate(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/60 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8 hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group relative h-2 w-8 overflow-hidden rounded-full bg-white/6"
              aria-label={`Go to ${i + 1}`}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                initial={false}
                animate={{
                  scaleX: i === current ? 1 : 0,
                  opacity: i === current ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ originX: 0 }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/60 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8 hover:text-white"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}