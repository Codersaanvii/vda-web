import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isRight = align === "right";

  return (
    <div
      className={cn(
        "mb-16 max-w-4xl",
        isCenter && "mx-auto text-center",
        isRight && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2 mb-6 text-[10px] tracking-[0.22em] uppercase font-sans font-medium",
            isCenter && "justify-center",
            isRight && "justify-end",
            theme === "dark" ? "text-grey-light/60" : "text-grey/85"
          )}
        >
          <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
          <span>{eyebrow}</span>
        </div>
      )}
      
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.03em] leading-[1.15]",
          theme === "dark" ? "text-white" : "text-black"
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            "mt-6 text-base md:text-[17px] max-w-xl font-sans font-light leading-[1.65]",
            theme === "dark" ? "text-grey-light/60" : "text-grey",
            isCenter && "mx-auto"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
