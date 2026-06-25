"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useMotionValue, useReducedMotion, MotionValue, animate } from "framer-motion";
import { cn } from "@/lib/utils";

// Carousel project card data with titles and images
const scatteredItems = [
  {
    title: "Corporate Offices",
    image: "/images/projects/corporate-offices.png",
    slug: "corporate-offices",
  },
  {
    title: "IT Workspaces",
    image: "/images/projects/it-workspaces.png",
    slug: "it-technology",
  },
  {
    title: "Banking & Financial Institutions",
    image: "/images/projects/Bank.png",
    slug: "banking-financial",
  },
  {
    title: "Healthcare & Diagnostic Facilities",
    image: "/images/projects/healthcare-facilities.png",
    slug: "healthcare",
  },
  {
    title: "Retail & Showrooms",
    image: "/images/projects/retail-showroom.png",
    slug: "retail-showrooms",
  },
  {
    title: "Hospitality Spaces",
    image: "/images/projects/hospitality-spaces.png",
    slug: "hospitality",
  },
];

interface CarouselCardProps {
  idx: number;
  mvCenterIndex: MotionValue<number>;
  item: typeof scatteredItems[0];
  focusCard: (idx: number) => void;
  handleKeyDown: (e: React.KeyboardEvent, idx: number) => void;
  handleCardClick: (idx: number) => void;
}

// 3D Coverflow Card Sub-component to adhere to the Rules of Hooks
function CarouselCard({
  idx,
  mvCenterIndex,
  item,
  focusCard,
  handleKeyDown,
  handleCardClick,
}: CarouselCardProps) {
  // Call useTransform safely at the top level of this sub-component!
  const x = useTransform(mvCenterIndex, (centerVal: number) => {
    const diff = idx - centerVal;
    const gap = window.innerWidth >= 1280 ? 220 : 180;
    const sign = Math.sign(diff);
    const absDiff = Math.abs(diff);
    if (absDiff <= 1) {
      return diff * gap;
    } else {
      return sign * (gap + (absDiff - 1) * (gap * 0.65));
    }
  });

  const rotateY = useTransform(mvCenterIndex, (centerVal: number) => {
    const diff = idx - centerVal;
    if (diff === 0) return 0;
    return Math.min(Math.max(diff * -20, -25), 25);
  });

  const scale = useTransform(mvCenterIndex, (centerVal: number) => {
    const diff = idx - centerVal;
    return Math.max(1 - Math.abs(diff) * 0.15, 0.68);
  });

  const zIndex = useTransform(mvCenterIndex, (centerVal: number) => {
    const diff = idx - centerVal;
    return Math.round(30 - Math.abs(diff) * 10);
  });

  const opacity = useTransform(mvCenterIndex, (centerVal: number) => {
    const diff = idx - centerVal;
    return Math.max(1 - Math.abs(diff) * 0.35, 0);
  });

  const filter = useTransform(mvCenterIndex, (centerVal: number) => {
    const diff = Math.abs(idx - centerVal);
    const grayscaleVal = Math.min(diff * 75, 75);
    const brightnessVal = 100 - Math.min(diff * 10, 10);
    return `grayscale(${grayscaleVal}%) brightness(${brightnessVal}%)`;
  });

  const captionOpacity = useTransform(mvCenterIndex, (centerVal: number) => {
    const diff = Math.abs(idx - centerVal);
    return Math.max(1 - diff * 2.5, 0);
  });

  return (
    <motion.div
      tabIndex={0}
      onFocus={() => focusCard(idx)}
      onKeyDown={(e) => handleKeyDown(e, idx)}
      onClick={() => handleCardClick(idx)}
      className="absolute w-[380px] aspect-[3/4] outline-none group"
      style={{
        x,
        rotateY,
        scale,
        opacity,
        zIndex,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Polaroid Backing Layout */}
      <div className="relative w-full h-full bg-white p-2.5 pb-20 border border-grey-light/20 shadow-[0_4px_16px_rgba(0,0,0,0.04)] rounded-xs flex flex-col justify-between cursor-pointer transition-shadow duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <div className="relative w-full flex-grow overflow-hidden bg-charcoal">
          <motion.img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter }}
          />
        </div>

        {/* Caption label - rotates naturally with card, fades out when unfocused */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className="absolute bottom-6 left-0 right-0 text-center px-3"
        >
          <span className="text-[16px] font-sans font-semibold uppercase tracking-[0.12em] text-[#0A0A0A]">
            {item.title}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectsMosaic() {
  const router = useRouter();
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [useDesktopScroll, setUseDesktopScroll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll and animation state refs
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Drag interaction refs
  const isDragging = useRef(false);
  const dragStartIdx = useRef(0);

  // MotionValue tracking the current center index (floating number from 0 to 5)
  const mvCenterIndex = useMotionValue(0);

  // Check if screen supports desktop scroll and motion is not reduced
  useEffect(() => {
    const checkDevice = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setUseDesktopScroll(isLargeScreen && !shouldReduceMotion);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [shouldReduceMotion]);

  // Synchronize hover wheel events to horizontal carousel motion value
  useEffect(() => {
    const handleWindowWheel = (e: WheelEvent) => {
      if (isHoveredRef.current && useDesktopScroll && carouselRef.current?.contains(e.target as Node)) {
        if (isAnimatingRef.current) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        const delta = e.deltaY;
        // Ignore tiny accidental wheel/trackpad ticks
        if (Math.abs(delta) < 15) return;

        const direction = delta > 0 ? 1 : -1;
        const nextIdx = currentIndexRef.current + direction;

        if (nextIdx >= 0 && nextIdx <= scatteredItems.length - 1) {
          e.preventDefault();
          e.stopPropagation();

          currentIndexRef.current = nextIdx;
          isAnimatingRef.current = true;

          animate(mvCenterIndex, nextIdx, {
            type: "spring",
            stiffness: 120,
            damping: 18,
            onComplete: () => {
              isAnimatingRef.current = false;
            },
          });
        }
      }
    };

    const handleMouseEnterNative = () => {
      isHoveredRef.current = true;
      setIsHovered(true);
    };

    const handleMouseLeaveNative = () => {
      isHoveredRef.current = false;
      setIsHovered(false);
      const nearestIdx = Math.round(mvCenterIndex.get());
      currentIndexRef.current = nearestIdx;
      animate(mvCenterIndex, nearestIdx, {
        type: "spring",
        stiffness: 150,
        damping: 20,
      });
    };

    const el = carouselRef.current;
    if (el) {
      el.addEventListener("mouseenter", handleMouseEnterNative);
      el.addEventListener("mouseleave", handleMouseLeaveNative);
    }

    // Add capture listener to window to preempt Lenis/smooth-scroll bubble phase listeners
    window.addEventListener("wheel", handleWindowWheel, { capture: true, passive: false });

    return () => {
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnterNative);
        el.removeEventListener("mouseleave", handleMouseLeaveNative);
      }
      window.removeEventListener("wheel", handleWindowWheel, { capture: true });
    };
  }, [useDesktopScroll, mvCenterIndex]);

  // Maintain activeIndex state synchronized with motion value for dots and labels
  useEffect(() => {
    const unsubscribe = mvCenterIndex.on("change", (latest) => {
      setActiveIndex(Math.round(latest));
    });
    return () => unsubscribe();
  }, [mvCenterIndex]);

  // Unified function to focus and center a card
  const focusCard = (idx: number) => {
    if (useDesktopScroll) {
      currentIndexRef.current = idx;
      animate(mvCenterIndex, idx, {
        type: "spring",
        stiffness: 150,
        damping: 20,
      });
    } else {
      setActiveIndex(idx);
      const container = mobileScrollRef.current;
      if (container) {
        const cardWidth = 220 + 24; // card width + gap on mobile/tablet
        container.scrollTo({
          left: idx * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = Math.min(idx + 1, scatteredItems.length - 1);
      focusCard(nextIdx);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = Math.max(idx - 1, 0);
      focusCard(prevIdx);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(idx);
    }
  };

  // Card click behavior
  const handleCardClick = (idx: number) => {
    if (activeIndex === idx) {
      // Navigating to focus area detail section anchor on Services page
      router.push(`/services#${scatteredItems[idx].slug}`);
    } else {
      focusCard(idx);
    }
  };

  // Real-time centered card active tracking on mobile swipe
  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const centerOfContainer = scrollLeft + containerWidth / 2;

    let nearestIdx = 0;
    let minDiff = Infinity;

    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const diff = Math.abs(childCenter - centerOfContainer);
      if (diff < minDiff) {
        minDiff = diff;
        nearestIdx = i;
      }
    }

    if (nearestIdx !== activeIndex) {
      setActiveIndex(nearestIdx);
    }
  };

  return (
    <div className="relative bg-white">
      {useDesktopScroll ? (
        /* DESKTOP ARC CAROUSEL LAYOUT */
        <div className="relative w-full overflow-hidden flex flex-col justify-between pt-16 pb-16 z-10 bg-white select-none">

          {/* Pinned Title Heading Section (Left-aligned per standard) */}
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 z-10 shrink-0">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.22em] uppercase font-sans font-medium text-grey/85">
                <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
                <span>What We Design</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.03em] leading-[1.15] text-black">
                Spaces Built Around How Businesses Actually Work
              </h2>
              <p className="text-xs font-sans font-light text-grey/60 mt-4 leading-relaxed">
                Explore the range of commercial environments VDA designs for. Click the centered card to explore focus areas.
              </p>
            </div>
          </div>

          {/* Concave Arc / Coverflow 3D Carousel Track */}
          <div
            ref={carouselRef}
            className="w-full flex-grow flex items-center justify-center relative overflow-visible mt-4 mb-8 pb-10"
          >
            <motion.div
              drag="x"
              dragElastic={0.15}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => {
                isDragging.current = true;
                dragStartIdx.current = mvCenterIndex.get();
              }}
              onDrag={(event, info) => {
                const deltaIdx = -info.offset.x / 220; // 220px drag displacement per slide index
                const targetVal = Math.min(
                  Math.max(dragStartIdx.current + deltaIdx, 0),
                  scatteredItems.length - 1
                );
                mvCenterIndex.set(targetVal);
              }}
              onDragEnd={() => {
                isDragging.current = false;
                const nearestIdx = Math.round(mvCenterIndex.get());
                focusCard(nearestIdx);
              }}
              className="relative w-full h-[515px] xl:h-[525px] flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            >
              {scatteredItems.map((item, idx) => (
                <CarouselCard
                  key={idx}
                  idx={idx}
                  mvCenterIndex={mvCenterIndex}
                  item={item}
                  focusCard={focusCard}
                  handleKeyDown={handleKeyDown}
                  handleCardClick={handleCardClick}
                />
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator & Vertical Scroll Help */}
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 z-10 shrink-0 flex flex-col items-center gap-4">
            <span className="text-[9px] font-sans font-light tracking-[0.2em] text-grey/40 uppercase">
              SCROLL VERTICALLY OR DRAG HORIZONTALLY TO NAVIGATE
            </span>

            {/* Dots */}
            <div className="flex gap-3">
              {scatteredItems.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => focusCard(dotIdx)}
                  className="focus:outline-none"
                  aria-label={`Go to slide ${dotIdx + 1}`}
                >
                  <motion.div
                    animate={{
                      scale: activeIndex === dotIdx ? 1.3 : 1,
                      backgroundColor: activeIndex === dotIdx ? "#EAB308" : "#E2E8F0",
                    }}
                    className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* ACCESSIBLE SWIPE & REDUCED MOTION LAYOUT */
        <div className="py-20 md:py-28 border-b border-grey-light/30 overflow-hidden bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

            {/* Left-aligned Title Heading */}
            <div className="max-w-2xl mb-12 text-left">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.22em] uppercase font-sans font-medium text-grey/85">
                <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
                <span>What We Design</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-[-0.03em] leading-tight text-black">
                Spaces Built Around How Businesses Actually Work
              </h2>
              <p className="text-xs font-sans font-light text-grey/60 mt-3">
                Explore the range of commercial environments VDA designs for. Swipe or tap to explore.
              </p>
            </div>

            {/* Native Snap Scroller */}
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 w-full scroll-pl-6"
            >
              {scatteredItems.map((item, idx) => {
                const isMobileActive = activeIndex === idx;

                return (
                  <motion.div
                    key={idx}
                    tabIndex={0}
                    onFocus={() => focusCard(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    onClick={() => handleCardClick(idx)}
                    animate={{
                      scale: isMobileActive ? 1.03 : 0.94,
                      opacity: isMobileActive ? 1.0 : 0.65,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 snap-center w-[220px] outline-none"
                  >
                    {/* Polaroid Backing */}
                    <div className="bg-white p-2.5 pb-10 border border-grey-light/25 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-xs aspect-[3/4] relative overflow-hidden flex flex-col justify-between">
                      <div className="relative w-full flex-grow overflow-hidden bg-charcoal">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="220px"
                          className={cn(
                            "object-cover transition-all duration-500",
                            isMobileActive ? "grayscale-0 brightness-100" : "grayscale-[70%] brightness-[90%]"
                          )}
                        />
                      </div>

                      {/* Caption */}
                      <div className="absolute bottom-2 left-0 right-0 text-center px-2 select-none">
                        <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-black">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {scatteredItems.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => focusCard(dotIdx)}
                  className="focus:outline-none"
                  aria-label={`Go to slide ${dotIdx + 1}`}
                >
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      activeIndex === dotIdx ? "bg-yellow scale-125" : "bg-grey-light/50"
                    )}
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
