import { cn } from "@/lib/utils";
import React from "react";

const Section = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("container px-8 my-16 flex flex-col gap-6", className)}
    {...props}
  />
));

Section.displayName = "Section";

const SectionHeader = React.forwardRef<
  HTMLHeadingElement,
  React.AllHTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
));

SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLParagraphElement,
  React.AllHTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-start font-Poppins text-2xl font-semibold leading-none tracking-tight md:text-3xl",
      className,
    )}
    {...props}
  />
));

SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.AllHTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-balance text-sm text-muted-foreground", className)}
    {...props}
  />
));

SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionTitle, SectionDescription };
