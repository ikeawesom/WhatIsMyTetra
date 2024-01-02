import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  TIPS_ADVISE,
  TIPS_CORRECT,
  TIPS_MOTIVATE,
  TIPS_SPEAK,
} from "@/src/constants/dataModels";

export default function TipBox({
  element,
  className,
}: {
  element: "earth" | "air" | "water" | "fire";
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-start justify-start w-full gap-4 hover:scale-105 duration-200 bg-white p-4 rounded-md shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-start gap-3">
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
          width={50}
          height={50}
        />
        <h1 className="font-medium text-xl text-start">
          {element.toUpperCase()}
        </h1>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-4">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Speaking: </span> {TIPS_SPEAK[element]}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Advising: </span>
          {TIPS_ADVISE[element]}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Correcting: </span>
          {TIPS_CORRECT[element]}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Motivating: </span>
          {TIPS_MOTIVATE[element]}
        </p>
      </div>
    </div>
  );
}
