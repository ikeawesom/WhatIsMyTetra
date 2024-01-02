import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ELEMENTS_DATA } from "@/src/constants/dataModels";

export default function ElementBox({
  element,
  score,
  big,
  className,
}: {
  element: "earth" | "air" | "water" | "fire";
  score: number;
  big?: boolean;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-start w-fit gap-y-3 hover:scale-105 duration-200 bg-white p-4 rounded-md shadow-sm self-stretch",
        big
          ? "animate-pulse shadow-[#7950f2] highlight"
          : "hover:brightness-100 sm:brightness-90",
        className
      )}
    >
      <Image
        className="rounded-md "
        alt={element}
        src={
          element === "air"
            ? "/elements/svgs/icon_air.svg"
            : element === "earth"
            ? "/elements/svgs/icon_earth.svg"
            : element === "fire"
            ? "/elements/svgs/icon_fire.svg"
            : "/elements/svgs/icon_water.svg"
        }
        width={big ? 200 : 100}
        height={big ? 200 : 100}
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg">{element.toUpperCase()}</h1>
        <h1 className="text-4xl font-medium">{score}</h1>
        <p className="text-sm text-gray-700 mt-4">
          {ELEMENTS_DATA[element].desc}
        </p>
      </div>
    </div>
  );
}
