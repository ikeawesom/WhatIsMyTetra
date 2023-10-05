"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type PrimaryButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function PrimaryButton({
  children,
  className,
  onClick,
}: PrimaryButtonProps) {
  {
    return (
      <motion.button
        whileHover={{
          opacity: 0.9,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.97 }}
        className={twMerge(
          "py-2 px-10 bg-gradient-to-br from-[#7950f2] to-[#4dabf7] text-slate-50 rounded-full shadow-lg",
          className
        )}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }
}
