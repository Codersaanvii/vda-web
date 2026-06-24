"use client";

import React from "react";
import { VISION_MISSION } from "@/lib/constants";

export default function VisionMission() {
  return (
    <section className="bg-charcoal text-white pt-32 md:pt-40 pb-16 border-b border-black relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Our Purpose Heading Block */}
        <div className="mb-16 max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-grey-light/60">
            <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
            <span>Our Purpose</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-[-0.03em] leading-[1.15] text-white">
            Our Purpose
          </h2>
          <p className="mt-6 text-base md:text-[17px] font-sans font-light leading-[1.65] text-grey-light/60 max-w-[55ch]">
            Good design is not merely about aesthetics — it is about creating spaces that enable people and businesses to perform at their best.
          </p>
        </div>

        {/* Clean Typographic Side-by-Side (Vision: 50% width, Mission: 50% width) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 mt-16">
          
          {/* Vision Block (50% width) */}
          <div className="col-span-1 md:col-span-6 flex flex-col md:pr-12 lg:pr-16">
            <span className="text-[10px] font-sans font-light tracking-[0.25em] text-white/30 uppercase mb-3">
              {"// 01 / DESTINATION"}
            </span>
            <h3 className="font-serif text-3xl font-light text-white tracking-tight leading-snug">
              {VISION_MISSION.vision.title}
            </h3>
            <p className="font-serif text-sm md:text-base font-light text-white leading-relaxed italic pr-6 mt-5">
              {VISION_MISSION.vision.text}
            </p>
          </div>

          {/* Mission Block (50% width) - Separated by yellow vertical border on left */}
          <div className="col-span-1 md:col-span-6 flex flex-col md:border-l md:border-yellow/80 md:pl-12 lg:pl-16">
            <span className="text-[10px] font-sans font-light tracking-[0.25em] text-white/30 uppercase mb-3">
              {"// 02 / DRIVING FORCE"}
            </span>
            <h3 className="font-serif text-3xl font-light text-white tracking-tight leading-snug">
              {VISION_MISSION.mission.title}
            </h3>
            <p className="font-serif text-sm md:text-base font-light text-white/90 leading-relaxed italic mt-5">
              {VISION_MISSION.mission.text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
