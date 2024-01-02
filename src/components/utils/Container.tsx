"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
  animated?: boolean;
  animateProps?: { transit: boolean; toggletransit: () => void };
  delay?: number;
};
export default function Container({
  children,
  className,
  animated,
  animateProps,
  delay,
}: Props) {
  if (animated && animateProps)
    return (
      <motion.div
        animate={
          animateProps?.transit
            ? { x: [0, -100], opacity: [1, 0] }
            : { x: [100, 0], opacity: [0, 1] }
        }
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: delay ? delay : 0,
        }}
        className={twMerge(
          "max-w-3xl flex flex-col gap-y-8 p-6 opacity-0",
          className
        )}
      >
        {children}
      </motion.div>
    );
  return (
    <div className={twMerge("max-w-3xl flex flex-col gap-y-8 p-6", className)}>
      {children}
    </div>
  );
}
