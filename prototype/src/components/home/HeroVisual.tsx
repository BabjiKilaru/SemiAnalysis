"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ORBIT_RADIUS = { 1: 34, 2: 42, 3: 48 } as const;
const ORBIT_SPEED = { 1: 140, 2: 95, 3: 65 } as const;

/** Dots spawn on a fixed outer ring and flow inward along radial lines. */
const FIXED_RADIUS = 46;
const INNER_RADIUS = 14;
const INFLOW_COUNT = 48;

const INFLOW_DOTS = Array.from({ length: INFLOW_COUNT }, (_, i) => ({
  id: i,
  angle: (i / INFLOW_COUNT) * 360,
  size: 2 + (i % 3),
  color:
    i % 4 === 0
      ? "var(--sa-amber)"
      : i % 4 === 1
        ? "var(--sa-cobalt)"
        : i % 4 === 2
          ? "var(--sa-mint)"
          : "var(--sa-coral)",
  delay: (i / INFLOW_COUNT) * 3.2,
  duration: 2.8 + (i % 5) * 0.35,
}));

const RING_NODES = [
  { angle: -70, orbit: 1 as const, color: "var(--sa-cobalt)", size: 9 },
  { angle: 10, orbit: 1 as const, color: "var(--sa-cobalt)", size: 7 },
  { angle: 55, orbit: 2 as const, color: "var(--sa-amber)", size: 8 },
  { angle: 130, orbit: 2 as const, color: "var(--sa-mint)", size: 7 },
  { angle: 195, orbit: 2 as const, color: "var(--sa-amber)", size: 7 },
  { angle: 250, orbit: 1 as const, color: "var(--sa-cobalt)", size: 7 },
  { angle: 310, orbit: 3 as const, color: "var(--sa-coral)", size: 6 },
];

function polarToPercent(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + radiusPct * Math.cos(rad),
    y: 50 + radiusPct * Math.sin(rad),
  };
}

function RadialInflowDot({
  angle,
  size,
  color,
  delay,
  duration,
  reduceMotion,
}: {
  angle: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  reduceMotion: boolean | null;
}) {
  const start = polarToPercent(angle, FIXED_RADIUS);
  const end = polarToPercent(angle, INNER_RADIUS);

  return (
    <motion.span
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 10px 2px color-mix(in srgb, ${color} 65%, transparent)`,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      initial={{ left: `${start.x}%`, top: `${start.y}%`, opacity: 0 }}
      animate={
        reduceMotion
          ? { left: `${start.x}%`, top: `${start.y}%`, opacity: 0.6 }
          : {
              left: [`${start.x}%`, `${end.x}%`, `${start.x}%`],
              top: [`${start.y}%`, `${end.y}%`, `${start.y}%`],
              opacity: [0.15, 1, 0.15],
              scale: [0.7, 1.25, 0.5],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block"
      aria-hidden="true"
    >
      {/* Fade left only — keeps right side bright */}
      <div className="absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-[var(--sa-bg)] via-[var(--sa-bg)]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[var(--sa-bg)]/30 to-transparent" />

      <motion.div
        className="absolute right-[-6%] top-[44%] aspect-square w-[min(92dvh,1100px)] max-w-[78vw] -translate-y-1/2 lg:right-[-4%] xl:right-[-2%] xl:w-[min(96dvh,1200px)]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: reduceMotion ? 0.72 : [0.68, 0.82, 0.68], scale: 1 }}
        transition={{
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {/* Fixed-radius perimeter ring — spawn boundary */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-[var(--sa-cobalt)]/45"
          style={{
            width: `${FIXED_RADIUS * 2}%`,
            height: `${FIXED_RADIUS * 2}%`,
            translate: "-50% -50%",
          }}
        />

        {/* Ambient glow */}
        <motion.div
          className="absolute inset-[5%] rounded-full bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--sa-cobalt)_28%,transparent)_0%,transparent_68%)]"
          animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Radial inflow — all directions, fixed radius */}
        {!reduceMotion &&
          INFLOW_DOTS.map((dot) => (
            <RadialInflowDot key={dot.id} {...dot} reduceMotion={reduceMotion} />
          ))}

        {/* Pulse ripples from center */}
        {!reduceMotion &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border border-[var(--sa-cobalt)]/40"
              style={{ translate: "-50% -50%" }}
              initial={{ width: "6%", height: "6%", opacity: 0.45 }}
              animate={{ width: `${FIXED_RADIUS * 2}%`, height: `${FIXED_RADIUS * 2}%`, opacity: 0 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: i * 1.6 }}
            />
          ))}

        {/* Orbit rings */}
        {!reduceMotion && (
          <>
            <motion.div
              className="absolute inset-[12%] rounded-full border border-[var(--sa-border)]/55"
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[22%] rounded-full border border-dashed border-[var(--sa-cobalt)]/45"
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[32%] rounded-full border border-[var(--sa-amber)]/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}

        {/* Radar sweep */}
        {!reduceMotion && (
          <motion.div
            className="absolute inset-[6%] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, color-mix(in srgb, var(--sa-cobalt) 22%, transparent) 36deg, transparent 72deg)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Radial spokes */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          {RING_NODES.map((node, i) => {
            const pos = polarToPercent(node.angle, ORBIT_RADIUS[node.orbit]);
            return (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                stroke={node.color}
                strokeWidth={0.1}
                strokeOpacity={0.38}
              />
            );
          })}
        </svg>

        {/* Decorative orbit nodes */}
        {([1, 2, 3] as const).map((orbit) => {
          const nodes = RING_NODES.filter((n) => n.orbit === orbit);
          const radius = ORBIT_RADIUS[orbit];
          const speed = ORBIT_SPEED[orbit];
          const reverse = orbit === 2;

          return (
            <motion.div
              key={orbit}
              className="absolute inset-0"
              animate={{ rotate: reduceMotion ? 0 : reverse ? -360 : 360 }}
              transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
              {nodes.map((node) => (
                <motion.div
                  key={node.angle}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    transform: `rotate(${node.angle}deg) translateY(-${radius}%)`,
                  }}
                  animate={{ rotate: reduceMotion ? 0 : reverse ? 360 : -360 }}
                  transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                >
                  <span
                    className="block -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: node.size,
                      height: node.size,
                      background: node.color,
                      boxShadow: `0 0 14px 3px color-mix(in srgb, ${node.color} 55%, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          );
        })}

        {/* Core ring */}
        {!reduceMotion && (
          <motion.div
            className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, var(--sa-amber), var(--sa-cobalt), var(--sa-mint), var(--sa-amber))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Company icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--sa-amber)]/45 bg-[var(--sa-bg-card)]/95 shadow-[0_0_70px_-6px_rgba(247,176,65,0.55)] backdrop-blur-sm"
          animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex h-[68%] w-[68%] items-center justify-center">
            <Image
              src="/favicon.png"
              alt=""
              width={96}
              height={96}
              className="h-full w-full object-contain drop-shadow-[0_0_16px_rgba(247,176,65,0.55)]"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
