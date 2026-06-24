import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects | Vinay Desai Architects",
  description: "Browse the selected commercial architecture and strategic workplace projects designed by Vinay Desai Architects (VDA).",
};

const projects = [
  {
    number: "01",
    title: "Corporate Offices",
    description: "Circulation-first corporate layouts that align physical workspace with brand culture, enhancing occupant collaboration and workflow.",
    image: "/images/projects/corporate-offices.png",
    slug: "corporate-offices",
    aspectRatio: "aspect-[4/3]",
  },
  {
    number: "02",
    title: "IT & Technology Workspaces",
    description: "Flexible, hybrid workspaces featuring open layouts, integrated low-voltage IT cabling routes, and acoustically isolated phone booth designs.",
    image: "/images/projects/it-workspaces.png",
    slug: "it-technology",
    aspectRatio: "aspect-[3/4.2]",
  },
  {
    number: "03",
    title: "Banking & Financial Institutions",
    description: "Highly secure and welcoming commercial bank branches and financial offices designed for efficiency and absolute customer trust.",
    image: "/images/projects/Bank.png",
    slug: "banking-financial",
    aspectRatio: "aspect-[4/3]",
  },
  {
    number: "04",
    title: "Healthcare & Diagnostic Facilities",
    description: "Modern diagnostic centers and clinic layouts optimized for hygiene, emergency egress code compliance, and patient circulation.",
    image: "/images/projects/healthcare-facilities.png",
    slug: "healthcare",
    aspectRatio: "aspect-[3/4.2]",
  },
  {
    number: "05",
    title: "Retail & Showrooms",
    description: "Aesthetically striking retail spaces and product showrooms combining custom millwork, thematic lighting, and brand storytelling.",
    image: "/images/projects/retail-showroom.png",
    slug: "retail-showrooms",
    aspectRatio: "aspect-[3/4.2]",
  },
  {
    number: "06",
    title: "Hospitality Spaces",
    description: "Bespoke hotel lounges, restaurants, and executive reception spaces prioritizing tactile materials, ergonomics, and atmosphere.",
    image: "/images/projects/hospitality-spaces.png",
    slug: "hospitality",
    aspectRatio: "aspect-[4/3]",
  },
];

export default function ProjectsPage() {
  // Distribute projects into 3 columns for desktop masonry rhythm
  const col1 = [projects[0], projects[4]]; // Corporate Offices (Wide), Retail & Showrooms (Tall)
  const col2 = [projects[1], projects[5]]; // IT & Tech Workspaces (Tall), Hospitality Spaces (Wide)
  const col3 = [projects[2], projects[3]]; // Banking & Financial (Square), Healthcare & Diagnostic (Wide)

  const renderCard = (project: typeof projects[0]) => (
    <div key={project.number} className="flex flex-col gap-5 group cursor-pointer w-full">
      {/* Card Image Container with Hover Badge */}
      <Link
        href={`/services#${project.slug}`}
        className={cn(
          "block relative w-full overflow-hidden bg-charcoal shadow-sm group-hover:shadow-md transition-shadow duration-500",
          project.aspectRatio
        )}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover image-blend image-blend-hover transition-all duration-700 group-hover:scale-[1.02]"
        />
        {/* Explore Project Overlay on Hover */}
        <div className="absolute bottom-4 right-4 bg-yellow text-black px-4 py-2 text-[8px] font-sans font-bold tracking-[0.2em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-md">
          Explore Project →
        </div>
      </Link>

      {/* Project Metadata */}
      <div className="flex flex-col gap-2.5 px-1">
        <div className="flex items-center gap-2.5">
          <span className="text-[9px] font-sans font-light tracking-[0.25em] text-yellow uppercase">
            {"// "}{project.number}
          </span>
          <span className="w-1.5 h-[1px] bg-grey-light" />
          <span className="text-[9px] font-sans font-light tracking-[0.2em] text-grey/60 uppercase">
            {project.title}
          </span>
        </div>
        
        <Link href={`/services#${project.slug}`} className="hover:text-yellow transition-colors duration-300 w-fit">
          <h3 className="font-serif text-xl md:text-2xl font-light text-black leading-snug tracking-tight">
            {project.title}
          </h3>
        </Link>

        <p className="text-xs md:text-sm font-sans font-light text-grey leading-relaxed mt-1 max-w-md">
          {project.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        
        {/* Header Block in dark charcoal */}
        <section className="bg-charcoal text-white py-32 border-b border-black">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.25em] text-yellow uppercase select-none">
              <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
              <span>Our Work</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.03em] max-w-4xl leading-tight">
              Spaces Designed for Performance and Belonging
            </h1>
            <p className="mt-8 text-base md:text-lg font-sans font-light text-grey-light/60 max-w-2xl leading-relaxed">
              Explore our selected commercial architecture and workplace design projects across India, built around how businesses actually work.
            </p>
          </div>
        </section>

        {/* Editorial Projects Grid */}
        <section className="bg-white py-32 md:py-40 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <SectionHeading
              eyebrow="Projects"
              heading="Selected Projects"
              subheading="Detailed layouts and designs optimized for workflow efficiency, mechanical coordination, and aesthetic refinement."
              align="left"
            />

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-12 mt-16 md:mt-24 items-start">
              
              {/* Column 1: Left Column */}
              <div className="flex flex-col gap-12 md:gap-16">
                {col1.map(renderCard)}
              </div>

              {/* Column 2: Middle Column */}
              <div className="flex flex-col gap-12 md:gap-16">
                {col2.map(renderCard)}
              </div>

              {/* Column 3: Right Column */}
              <div className="flex flex-col gap-12 md:gap-16">
                {col3.map(renderCard)}
              </div>

            </div>
          </div>
        </section>

        {/* B2B Consulting CTA Strip - Solid Yellow Background */}
        <section className="bg-yellow text-black py-32 border-t border-yellow-dim relative overflow-hidden text-center flex flex-col items-center justify-center gap-6">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-black tracking-tight">
              Looking to Build or Renovate Your Workspace?
            </h2>
            <p className="text-sm md:text-base font-sans font-light text-black/75 max-w-sm mx-auto leading-relaxed">
              Partner with VDA to design a commercial layout centered entirely on performance, compliance, and user comfort.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="text-link" className="text-xs text-black hover:text-black/70 transition-colors">
                Initiate Project Discussion
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
