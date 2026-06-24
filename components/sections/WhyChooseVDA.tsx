"use client";

import React from "react";
import { WHY_CHOOSE_VDA_A, WHY_CHOOSE_VDA_B } from "@/lib/constants";

export default function WhyChooseVDA() {
  // Combine into single array of 8 items, interleaved to maintain row assignments:
  // Odd indices (0, 2, 4, 6) sit above the rule on desktop.
  // Even indices (1, 3, 5, 7) sit below the rule on desktop.
  const advantages = [
    WHY_CHOOSE_VDA_A[0], // "25+ Years of Industry Experience" (Above)
    WHY_CHOOSE_VDA_B[0], // "450+ Successfully Delivered Projects" (Below)
    WHY_CHOOSE_VDA_A[2], // "Strong Understanding of Workplace Design" (Above)
    WHY_CHOOSE_VDA_B[2], // "Experience Across Diverse Sectors" (Below)
    WHY_CHOOSE_VDA_A[1], // "10L+ Sq Ft Designed & Delivered" (Above)
    WHY_CHOOSE_VDA_B[1], // "Process-Driven Methodology" (Below)
    WHY_CHOOSE_VDA_A[3], // "Focus on Function, Productivity & User Experience" (Above)
    WHY_CHOOSE_VDA_B[3], // "Long-Term Client Relationships" (Below)
  ];

  return (
    <section className="bg-white py-32 md:py-40 border-b border-grey-light/30 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow & Headline Block */}
        <div className="mb-8 max-w-2xl">
          <div className="flex items-center gap-2 mb-6 text-[10px] tracking-[0.22em] uppercase font-sans font-medium text-grey/85">
            <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
            <span>OUR ADVANTAGES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[-0.03em] leading-[1.15] text-black">
            Why Businesses
            <br />
            Choose VDA
          </h2>
        </div>

        {/* DESKTOP ZIGZAG RAIL SYSTEM (>= 1024px) */}
        <div className="relative w-full py-12 hidden lg:block select-none">
          {/* Main Horizontal Hairline Rule */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#1C1C1C] transform -translate-y-1/2 z-0" />

          {/* 8 Columns Grid */}
          <div className="grid grid-cols-8 gap-4 relative z-10">
            {advantages.map((item, idx) => {
              const isAbove = idx % 2 === 0;

              return (
                <div key={idx} className="flex flex-col items-center relative group cursor-pointer">
                  {isAbove ? (
                    <>
                      {/* Pill Container (Above Rail) */}
                      <div className="h-28 flex items-end justify-center pb-4">
                        <div className="border border-[#1C1C1C] bg-white group-hover:border-yellow px-5 py-3.5 rounded-full text-center text-[13.5px] text-[#1C1C1C] font-sans font-light tracking-wide max-w-[155px] leading-relaxed transition-all duration-500 hover:shadow-xs">
                          {item}
                        </div>
                      </div>

                      {/* Stem and Dot */}
                      <div className="h-16 flex flex-col items-center justify-start relative">
                        <div className="w-[1px] h-full bg-[#1C1C1C]/50 group-hover:bg-yellow transition-colors duration-500" />
                        {/* Interactive dot exactly centered on the hairline rule */}
                        <div className="absolute bottom-[-4px] w-2 h-2 rounded-full border border-[#1C1C1C] bg-[#1C1C1C] group-hover:bg-yellow group-hover:border-yellow group-hover:scale-125 transition-all duration-300 z-10" />
                      </div>

                      {/* Empty Spacer below to keep row symmetry */}
                      <div className="h-28" />
                    </>
                  ) : (
                    <>
                      {/* Empty Spacer above to keep row symmetry */}
                      <div className="h-28" />

                      {/* Stem and Dot */}
                      <div className="h-16 flex flex-col items-center justify-end relative">
                        {/* Interactive dot exactly centered on the hairline rule */}
                        <div className="absolute top-[-4px] w-2 h-2 rounded-full border border-[#1C1C1C] bg-[#1C1C1C] group-hover:bg-yellow group-hover:border-yellow group-hover:scale-125 transition-all duration-300 z-10" />
                        <div className="w-[1px] h-full bg-[#1C1C1C]/50 group-hover:bg-yellow transition-colors duration-500" />
                      </div>

                      {/* Pill Container (Below Rail) */}
                      <div className="h-28 flex items-start justify-center pt-4">
                        <div className="border border-[#1C1C1C] bg-white group-hover:border-yellow px-5 py-3.5 rounded-full text-center text-[13.5px] text-[#1C1C1C] font-sans font-light tracking-wide max-w-[155px] leading-relaxed transition-all duration-500 hover:shadow-xs">
                          {item}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET VERTICAL TIMELINE LAYOUT (< 1024px) */}
        <div className="relative pl-8 md:pl-12 py-4 lg:hidden">
          {/* Vertical Hairline Rule */}
          <div className="absolute top-0 bottom-0 left-3 md:left-4 w-[1px] bg-[#1C1C1C] z-0" />

          {/* Stacked single-column advantages list */}
          <div className="flex flex-col gap-8 relative z-10">
            {advantages.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 relative group cursor-pointer">
                
                {/* Timeline Dot on vertical rule */}
                <div className="absolute left-[-24px] md:left-[-36px] w-2 h-2 rounded-full border border-[#1C1C1C] bg-[#1C1C1C] group-hover:bg-yellow group-hover:border-yellow group-hover:scale-125 transition-all duration-300 z-10" />
                
                {/* Connecting small horizontal line snippet */}
                <div className="w-4 h-[1px] bg-[#1C1C1C]/50 group-hover:bg-yellow transition-colors duration-500 shrink-0" />
                
                {/* Pill Container */}
                <div className="border border-[#1C1C1C] bg-white group-hover:border-yellow px-5 py-3 rounded-full text-left text-[13.5px] text-[#1C1C1C] font-sans font-light tracking-wide leading-snug transition-all duration-500 max-w-[280px]">
                  {item}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

