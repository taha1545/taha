"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SecondaryButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

export default function SecondaryButton({
  href,
  children,
  className,
  onClick,
  icon,
  iconRight,
}: SecondaryButtonProps) {
  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2",
    "rounded-xl border border-white/20 bg-black/20",
    "px-6 py-2.5 text-sm font-medium text-white/80",
    "backdrop-blur-sm transition-all duration-200",
    "hover:border-white/35 hover:bg-white/11 hover:text-white",
    "active:scale-[0.96]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
    className
  );

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {iconRight && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
}