"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RadialGlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function RadialGlowButton({
  children = "Get Extension",
  className,
  ...props
}: RadialGlowButtonProps) {
  return (
    <div className="relative">  {/* removed inline-block */}
      <style>{`
        @property --rg-pos-x { syntax: '<percentage>'; initial-value: 0%; inherits: false; }
        @property --rg-pos-y { syntax: '<percentage>'; initial-value: 120%; inherits: false; }
        @property --rg-spread-x { syntax: '<percentage>'; initial-value: 110.24%; inherits: false; }
        @property --rg-spread-y { syntax: '<percentage>'; initial-value: 110.2%; inherits: false; }
        @property --rg-color-1 { syntax: '<color>'; initial-value: #2a1e15; inherits: false; }
        @property --rg-color-2 { syntax: '<color>'; initial-value: #fdba74; inherits: false; }
        @property --rg-color-3 { syntax: '<color>'; initial-value: #f97316; inherits: false; }
        @property --rg-color-4 { syntax: '<color>'; initial-value: #c2410c; inherits: false; }
        @property --rg-color-5 { syntax: '<color>'; initial-value: #180e08; inherits: false; }
        @property --rg-border-angle { syntax: '<angle>'; initial-value: 190deg; inherits: true; }
        @property --rg-border-color-1 { syntax: '<color>'; initial-value: hsla(25, 75%, 90%, 0.1); inherits: true; }
        @property --rg-border-color-2 { syntax: '<color>'; initial-value: hsla(25, 50%, 90%, 0.35); inherits: true; }
        @property --rg-stop-1 { syntax: '<percentage>'; initial-value: 0%; inherits: false; }
        @property --rg-stop-2 { syntax: '<percentage>'; initial-value: 10%; inherits: false; }
        @property --rg-stop-3 { syntax: '<percentage>'; initial-value: 35.44%; inherits: false; }
        @property --rg-stop-4 { syntax: '<percentage>'; initial-value: 71.34%; inherits: false; }
        @property --rg-stop-5 { syntax: '<percentage>'; initial-value: 150%; inherits: false; }

        .rg-button {
          --transition: 0.25s;
          --spark: 1.8s;
          --speed: 1.2s;
          --cut: 1px;
          --bg: radial-gradient(
            var(--rg-spread-x) var(--rg-spread-y) at var(--rg-pos-x) var(--rg-pos-y),
            var(--rg-color-1) var(--rg-stop-1),
            var(--rg-color-2) var(--rg-stop-2),
            var(--rg-color-3) var(--rg-stop-3),
            var(--rg-color-4) var(--rg-stop-4),
            var(--rg-color-5) var(--rg-stop-5)
          );
          
          position: relative;
          min-width: 160px;
          min-height: 51px;
          padding: 16px 24px;
          border: none;
          border-radius: 11px;
          font-family: inherit;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          color: rgba(255, 255, 255, 0.95);
          background: var(--bg);
          cursor: pointer;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.95);
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
          transition: 
            --rg-pos-x .75s, --rg-pos-y .75s,
            --rg-spread-x .75s, --rg-spread-y .75s,
            --rg-color-1 .75s, --rg-color-2 .75s, --rg-color-3 .75s, --rg-color-4 .75s, --rg-color-5 .75s,
            --rg-border-angle .75s, --rg-border-color-1 .75s, --rg-border-color-2 .75s,
            --rg-stop-1 .75s, --rg-stop-2 .75s, --rg-stop-3 .75s, --rg-stop-4 .75s, --rg-stop-5 .75s;
        }

        .rg-button::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background-image: linear-gradient(var(--rg-border-angle), var(--rg-border-color-1), var(--rg-border-color-2));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }

        .rg-button:hover {
          --rg-pos-x: 40%;
          --rg-pos-y: 140%;
          --rg-spread-x: 130%;
          --rg-spread-y: 170%;
          --rg-color-1: #180e08;
          --rg-color-2: #7c2d12;
          --rg-color-3: #ea580c;
          --rg-color-4: #f97316;
          --rg-stop-1: 37.35%;
          --rg-stop-2: 61.36%;
          --rg-stop-3: 78.42%;
          --rg-stop-4: 93.52%;
          --rg-stop-5: 100%;
          --rg-border-angle: 180deg;
          --rg-border-color-1: hsla(20, 75%, 90%, 0.7);
          --rg-border-color-2: hsla(20, 50%, 90%, 0.25);
          --button-line-opacity: 0;
        }

        .rg-label {
          position: relative;
          z-index: 1;
        }

        .rg-bg {
          position: absolute;
          inset: var(--cut);
          background: var(--bg);
          border-radius: inherit;
          transition: background var(--transition), opacity var(--transition);
        }

        .rg-shine {
          position: absolute;
          inset: 0;
          container-type: size;
          border-radius: inherit;
          mix-blend-mode: soft-light;
          opacity: var(--button-line-opacity, 1);
          transition: opacity 0.3s;
          overflow: visible;
        }

        .rg-shine span {
          position: absolute;
          inset: 0;
          height: 100cqh;
          aspect-ratio: 1;
          animation: rg-slide var(--speed) ease-in-out infinite alternate;
          overflow: visible;
        }

        .rg-shine span::before {
          content: "";
          position: absolute;
          inset: -100%;
          background: conic-gradient(
            from calc(270deg - (90deg * 0.5)),
            transparent 0,
            #fff 90deg,
            transparent 90deg
          );
          animation: rg-spin calc(var(--speed) * 2) infinite linear;
        }

        @keyframes rg-spin {
          0% { rotate: 0deg; }
          15%, 35% { rotate: 90deg; }
          65%, 85% { rotate: 270deg; }
          100% { rotate: 360deg; }
        }

        @keyframes rg-slide {
          to { transform: translate(calc(100cqw - 100%), 0); }
        }
      `}</style>

      <button className={cn("rg-button", className)} type="button" {...props}>
        <span className="rg-shine">
          <span></span>
        </span>
        <span className="rg-bg"></span>
        <span className="rg-label">{children}</span>
      </button>
    </div>
  );
}

export default RadialGlowButton;