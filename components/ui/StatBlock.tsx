"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function StatBlock({
  value,
  label,
  className,
  theme = "light",
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  // Extract number from string, e.g., "25+" -> 25, "10L+" -> 10, "100%" -> 100
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView && numericPart > 0) {
      let animationFrameId: number;
      const duration = 2500; // Slow, weighted 2.5 seconds count-up
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Premium Ease-out expo curve
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * numericPart));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(numericPart);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isInView, numericPart]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-2 relative z-10",
        className
      )}
    >
      {/* Number in Fraunces, oversized */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "text-5xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight leading-none",
          theme === "dark" ? "text-yellow" : "text-yellow"
        )}
      >
        {count}
        {suffix}
      </motion.div>
      
      {/* Label beneath, small, quiet */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "text-[9px] sm:text-[10px] tracking-[0.15em] font-sans font-light uppercase mt-1",
          theme === "dark" ? "text-grey-light/50" : "text-grey/60"
        )}
      >
        {label}
      </motion.div>
    </div>
  );
}
