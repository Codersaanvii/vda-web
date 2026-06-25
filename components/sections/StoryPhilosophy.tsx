import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function StoryPhilosophy() {
  return (
    <section className="bg-charcoal text-white py-32 md:py-40 border-b border-black relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Image bleeding to the viewport edge */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[600px] w-full lg:w-[calc(100%+3rem)] lg:-ml-12 xl:w-[calc(100%+6rem)] xl:-ml-24 overflow-hidden bg-black/40">
            {/* TODO: replace with VDA project photography */}
            <Image
              src="/images/general/working.png"
              alt="Architects developing interior plans"
              fill
              className="object-cover sepia-[15%] grayscale-[15%] contrast-[1.05] brightness-[96%] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:sepia-0 hover:grayscale-0 hover:brightness-100"
            />
            {/* Elegant, thin border corner detail */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/10 pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/10 pointer-events-none" />
          </div>

          {/* Right Column: Off-center content with generous whitespace */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8 max-w-xl">

            {/* Eyebrow and Subline */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.22em] uppercase font-sans font-medium text-grey-light/60">
                <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight leading-snug">
                Workplace & Commercial Interior Design
              </h2>
              <p className="text-[10px] font-sans font-light uppercase tracking-[0.2em] text-grey-light/40 mt-3 select-none">
                Founded by Vinay Desai · 2000
              </p>
            </div>

            {/* Signature Pull Quote: Large, Italic, Fraunces */}
            <blockquote className="border-l border-yellow/80 pl-6 my-2">
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic text-white leading-relaxed tracking-tight">
                "Good design is not merely about aesthetics; it is about how a space functions, enhances productivity, and improves the user's experience."
              </p>
            </blockquote>

            <p className="text-[15px] sm:text-base font-sans font-light text-grey-light/65 leading-relaxed max-w-[55ch]">
              We help organisations create high-performing workplaces. From strategy and layout planning to completion, we ensure the design intent is fully realised. By aligning workspaces with business goals, we foster collaboration, efficiency, and a strong organisational culture.            </p>

            <div className="pt-2">
              <Button href="/about" variant="text-link-yellow">
                Read Our Full Story
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
