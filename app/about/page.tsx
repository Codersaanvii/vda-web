import React from "react";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Pillars from "@/components/sections/Pillars";
import VisionMission from "@/components/sections/VisionMission";
import { TEAM } from "@/lib/constants";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">

        {/* Header Block in dark charcoal, oversized typography */}
        <section className="bg-charcoal text-white py-32 border-b border-black">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.25em] text-yellow uppercase select-none">
              <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
              <span>Who We Are</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.03em] max-w-4xl leading-tight">
              Crafting High-Performance Commercial Workspaces Since 2000
            </h1>
            <p className="mt-8 text-base md:text-lg font-sans font-light text-grey-light/60 max-w-2xl leading-relaxed">
              For over two decades, Vinay Desai Architects has partnered with forward-thinking organizations across India to bridge the gap between architectural vision and operational reality.
            </p>
          </div>
        </section>

        {/* Detail Story Section with asymmetric layout */}
        <section className="bg-white py-32 md:py-40 border-b border-grey-light/30 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[600px] w-full bg-off-white overflow-hidden">
                {/* TODO: replace with VDA project photography */}
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  alt="VDA Design Studio Workspace"
                  fill
                  className="object-cover image-blend"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col gap-8 lg:-mt-1.5">
                <SectionHeading
                  eyebrow="Our Journey"
                  heading="Two Decades of Refinement"
                  className="mb-0"
                />

                <div className="flex flex-col gap-6 text-[15px] sm:text-base font-sans font-light text-grey leading-[1.65]">
                  <p>
                    VDA was established in Navi Mumbai with a single founding conviction: that commercial interior design must be function-led. An office is not simply an exercise in styling; it is an organizational tool that influences workflow, staff engagement, and operational output.
                  </p>
                  <p>
                    From corporate headquarters to banking branches and research labs, we approach each project with rigorous analysis. We study circulation, spatial adjacencies, acoustic isolation, and building mechanical systems before pencil ever meets paper.
                  </p>
                  <blockquote className="border-l border-yellow pl-6 my-4">
                    <p className="font-serif text-lg md:text-xl font-light italic text-black leading-relaxed">
                      &ldquo;We treat every square inch of space as an asset that must yield value. If a design element does not contribute to workflow or human comfort, it does not belong in the plan.&rdquo;
                    </p>
                    <cite className="block text-[10px] font-sans font-light uppercase tracking-[0.2em] text-grey/50 mt-3 not-italic">
                      — Vinay Desai, Founder
                    </cite>
                  </blockquote>
                  <p>
                    Today, our multidisciplinary team of architects, workspace strategists, design coordinators, and compliance monitors represents a comprehensive delivery framework. We represent the client&apos;s interests, navigating complex approvals and execution details to deliver projects on-time and exactly as specified.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pillars Section (Reused) */}
        <Pillars />

        {/* Vision & Mission (Reused) */}
        <VisionMission />

        {/* Leadership Team Section - Redesigned, clean grid, no cards */}
        <section className="bg-white py-32 md:py-40 border-b border-grey-light/30 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <SectionHeading
              eyebrow="Leadership"
              heading="The Minds Behind VDA"
              subheading="Meet the core leaders driving workplace strategy, design execution, and compliance at Vinay Desai Architects."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {TEAM.map((member, idx) => {
                const isLastCentered = idx === 6; // Center the 7th member (Jayvant) in the middle column on desktop
                return (
                  <div
                    key={idx}
                    className={`flex flex-col gap-6 group cursor-pointer ${isLastCentered ? "md:col-start-2" : ""}`}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal">
                      <Image
                        src={member.imageSearch}
                        alt={member.name}
                        fill
                        className="object-cover image-blend"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 px-2 items-center text-center">
                      <span className="text-[9px] font-sans font-light tracking-[0.25em] text-yellow uppercase">
                        {"// "}{member.role}
                      </span>
                      <h3 className="font-serif text-2xl font-light text-black leading-snug tracking-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
