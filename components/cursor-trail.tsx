"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRAIL_COUNT = 12; // Increased for a more substantial trail

export default function CursorTrail() {
  // Primary mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {[...Array(TRAIL_COUNT)].map((_, i) => (
        <Dot key={i} index={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
}

function Dot({ 
  index, 
  mouseX, 
  mouseY 
}: { 
  index: number; 
  mouseX: any; 
  mouseY: any 
}) {
  // Config for a "snappy yet smooth" trail
  const config = {
    damping: 15 + index * 2.5,
    stiffness: 180 - index * 10,
    mass: 0.4 + index * 0.05,
  };

  const x = useSpring(mouseX, config);
  const y = useSpring(mouseY, config);

  // Bold and striking styling
  // Dots start larger and stay visible longer
  const size = 12 - index * 0.8; 
  const opacity = 0.8 - index * 0.05;

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        opacity: opacity,
      }}
      className="absolute rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_15px_rgba(52,211,153,0.6)] dark:from-emerald-300 dark:to-cyan-300 dark:shadow-[0_0_20px_rgba(110,231,183,0.5)]"
    />
  );
}
