import React from "react";
import { twMerge } from "tailwind-merge";

type ScreenProps = {
  children?: React.ReactNode;
  className?: string;
};
export default function DefScreen({ children, className }: ScreenProps) {
  return (
    <div
      className={twMerge("grid place-items-center w-full h-screen", className)}
    >
      {children}
    </div>
  );
}
