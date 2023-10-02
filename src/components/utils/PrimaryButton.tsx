"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type PrimaryButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function PrimaryButton({
  children,
  className,
}: PrimaryButtonProps) {
  {
    return (
      <motion.button
        whileHover={{
          opacity: 0.8,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95, y: 5 }}
        className={twMerge(
          "py-2 px-10 bg-gradient-to-br from-[#be4bdb] to-[#9775fa] text-slate-50 rounded-md shadow-md",
          className
        )}
      >
        {children}
      </motion.button>
    );
  }
}
