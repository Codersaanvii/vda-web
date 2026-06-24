"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const imageVariants: any = {
    hidden: { scale: shouldReduceMotion ? 1 : 1.05 },
    visible: {
      scale: 1,
      transition: {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const fadeUpVariants: any = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 25 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as any,
        delay: custom,
      },
    }),
  };

  const markVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: shouldReduceMotion ? 0 : 1.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full h-screen bg-black flex flex-col justify-end p-8 md:p-16 overflow-hidden">
      
      {/* Background Image with Desaturated Look */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="w-full h-full relative"
        >
          <Image
            src="/images/hero/hero.png"
            alt="VDA Workplace Interior Architecture Design"
            fill
            priority
            className="object-cover object-center opacity-40 image-blend"
          />
        </motion.div>
        {/* Bottom shadow scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* Small Label Text Top-Left directly on Photo */}
      <div className="absolute top-24 left-8 z-10 text-[9px] sm:text-[10px] tracking-[0.3em] font-sans text-white/40 uppercase select-none">
        Vinay Desai Architects
      </div>

      {/* Small Project Photo Subheading Top-Right directly on Photo */}
      <div className="absolute top-24 right-8 z-10 text-[8px] tracking-[0.15em] font-sans text-white/30 uppercase select-none">
        Actual Project Photo
      </div>

      {/* Corner Brackets / Registration Marks */}
      {!shouldReduceMotion && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={markVariants}
          className="absolute inset-0 pointer-events-none z-10"
        >
          {/* Mark 1: Bracket Top-Left */}
          <div className="absolute top-[20%] left-[12%] w-3.5 h-3.5 border-t border-l border-white/25" />
          
          {/* Mark 2: Crosshair Top-Right */}
          <div className="absolute top-[28%] right-[22%] w-4 h-4 flex items-center justify-center before:content-[''] before:absolute before:w-4 before:h-[1px] before:bg-white/20 after:content-[''] after:absolute after:h-4 after:w-[1px] after:bg-white/20" />
          
          {/* Mark 3: Crosshair Bottom-Left-ish */}
          <div className="absolute bottom-[38%] left-[28%] w-4 h-4 flex items-center justify-center before:content-[''] before:absolute before:w-4 before:h-[1px] before:bg-white/20 after:content-[''] after:absolute after:h-4 after:w-[1px] after:bg-white/20" />
          
          {/* Mark 4: Bracket Bottom-Right */}
          <div className="absolute bottom-[25%] right-[12%] w-3.5 h-3.5 border-b border-r border-white/25" />
        </motion.div>
      )}

      {/* Content bottom-anchored inside card */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-auto">
        {/* Left Column: Headline */}
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUpVariants}
            className="flex flex-col gap-3"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-white/50">
              Workplace Strategy & Architecture
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.2] text-white tracking-tight max-w-xl">
              From Square Foot to Square Inch
            </h1>
          </motion.div>
        </div>

        {/* Right Column: Description & Text-Link CTA */}
        <div className="lg:col-span-5 flex flex-col gap-5 items-start">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUpVariants}
            className="text-xs sm:text-sm font-sans font-light text-grey-light/70 leading-relaxed max-w-md"
          >
            Strategic workplace and commercial interior design, built around how businesses actually work. Creating high-performing spaces across India.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={fadeUpVariants}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-white hover:text-yellow transition-colors duration-300"
            >
              <span>Start Your Design Journey</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
