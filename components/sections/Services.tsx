"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="bg-charcoal text-white py-32 md:py-40 border-b border-black relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Sticky Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <SectionHeading
              eyebrow="What We Offer"
              heading="Design Services"
              subheading="From initial workplace strategy to final design compliance, we act as the custodians of your project, ensuring design excellence at every stage."
              className="mb-0"
              theme="dark"
            />
          </div>

          {/* Right Column: Spacious Typographic List of Services */}
          <div className="lg:col-span-8 flex flex-col border-t border-white/10">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="border-b border-white/10 py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start group transition-colors duration-500"
              >
                {/* Quiet Index Numeral */}
                <div className="md:col-span-1 font-sans text-xs text-white/25 group-hover:text-yellow transition-colors duration-500 select-none">
                  {service.number}
                </div>

                {/* Service Name in Fraunces */}
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl font-light text-white leading-snug tracking-tight group-hover:text-yellow transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description, spacious */}
                <div className="md:col-span-6 text-sm sm:text-base font-sans font-light text-grey-light/65 leading-[1.65]">
                  {service.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
