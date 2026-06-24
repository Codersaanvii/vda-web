"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PILLARS } from "@/lib/constants";


// Accompanying local images matching the editorial mood
const pillarImages = [
  "/images/general/design philosophy/01.png",
  "/images/general/design philosophy/02.png",
  "/images/general/design philosophy/03.png",
];

export default function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nativeScrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [useDesktopScroll, setUseDesktopScroll] = useState(false);

  // Scroll linkage for desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate by the calculated offset so the 3rd card aligns perfectly at the end of the scroll
  const xTransform = useTransform(scrollYProgress, (value) => `calc(${value * -104}vw - ${value * 128}px)`);
  // Slide the yellow dash across the progress bar
  const dashLeft = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);

  useEffect(() => {
    const checkDevice = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setUseDesktopScroll(isLargeScreen && !shouldReduceMotion);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [shouldReduceMotion]);


  return (
    <div
      ref={containerRef}
      className={useDesktopScroll ? "relative h-[250vh] bg-white" : "relative bg-white"}
    >
      {useDesktopScroll ? (
        /* DESKTOP STICKY HORIZONTAL SCROLL LAYOUT */
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-24 md:py-28 z-10">
          
          {/* Pinned Title Section */}
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex justify-between items-start z-10 shrink-0">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-6 text-[10px] tracking-[0.22em] uppercase font-sans font-medium text-grey/85">
                <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.03em] leading-[1.15] text-black">
                Design Philosophy
              </h2>
            </div>
          </div>

          {/* Horizontal Track Area */}
          <div className="w-full flex items-center relative overflow-hidden flex-grow my-8">
            <motion.div
              style={{ x: xTransform }}
              className="flex gap-16 px-[12vw] w-max items-center"
            >
              {PILLARS.map((pillar, index) => (
                <div
                  key={index}
                  className="w-[60vw] h-[340px] shrink-0 border border-grey-light/35 bg-off-white/40 p-10 flex justify-between relative group hover:border-grey-light/60 transition-colors duration-500"
                >
                  {/* Left: Outline Numeral & Copy */}
                  <div className="flex flex-col justify-between max-w-md h-full">
                    {/* Numeral */}
                    <span className="font-serif text-6xl md:text-7xl font-extralight text-yellow/30 select-none group-hover:text-yellow transition-colors duration-700">
                      {pillar.number}
                    </span>
                    {/* Copy Block */}
                    <div>
                      <h3 className="font-serif text-2xl lg:text-[28px] text-black font-light leading-snug tracking-tight mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-sans font-light text-grey leading-relaxed max-w-[40ch]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Accompanying Photo Placeholder */}
                  <div className="relative w-[200px] h-full overflow-hidden shrink-0 border border-grey-light/20">
                    {/* TODO: replace with VDA project photography */}
                    <Image
                      src={pillarImages[index]}
                      alt={pillar.title}
                      fill
                      className="object-cover image-blend grayscale contrast-110 brightness-[97%] group-hover:grayscale-0 group-hover:scale-104 transition-all duration-700"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Scroller Details */}
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex justify-between items-center shrink-0 z-10">
            <span className="text-[9px] font-sans font-light tracking-[0.2em] text-grey/40 uppercase">
              SCROLL VERTICALLY TO NAVIGATE
            </span>

            {/* Slidable yellow dash on thin rule */}
            <div className="w-48 h-[1px] bg-grey-light/40 relative">
              <motion.div
                style={{ left: dashLeft }}
                className="absolute top-[-1px] h-[3px] w-8 bg-yellow"
              />
            </div>
          </div>

        </div>
      ) : (
        /* ACCESSIBLE NATIVE SWIPE LAYOUT (Touch & Reduced Motion fallback) */
        <div className="py-24 md:py-32 border-b border-grey-light/30 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            
            {/* Header */}
            <div className="mb-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.22em] uppercase font-sans font-medium text-grey/85">
                  <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
                  <span>Our Approach</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[-0.03em] leading-tight text-black">
                  Design Philosophy
                </h2>
              </div>
            </div>

            {/* Native Snap Scroller */}
            <div
              ref={nativeScrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-8 w-full"
            >
              {PILLARS.map((pillar, index) => (
                <div
                  key={index}
                  className="snap-align-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[48vw] border border-grey-light/35 bg-off-white/40 p-8 flex flex-col sm:flex-row justify-between gap-6 relative"
                >
                  {/* Copy */}
                  <div className="flex flex-col justify-between flex-grow">
                    <span className="font-serif text-5xl font-light text-yellow/30 mb-8 block select-none">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-black font-light leading-snug mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-sans font-light text-grey leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Photo */}
                  <div className="relative w-full sm:w-[150px] h-[180px] sm:h-auto overflow-hidden shrink-0 border border-grey-light/20">
                    <Image
                      src={pillarImages[index]}
                      alt={pillar.title}
                      fill
                      className="object-cover image-blend"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

