"use client";

import { useAOS, aosVariants, type AOSOptions } from "@/hooks/useAOS";
import { cn } from "@/lib/utils";
import React from "react";

interface AOSWrapperProps extends AOSOptions {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof aosVariants;
  duration?: number;
  as?: React.ElementType;
}

export function AOSWrapper({
  children,
  className,
  variant = "fade-up",
  duration = 600,
  delay = 0,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
}: AOSWrapperProps) {
  const { ref, isVisible } = useAOS({ threshold, delay, once });
  const { hidden, visible } = aosVariants[variant];

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : hidden,
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </Tag>
  );
}
