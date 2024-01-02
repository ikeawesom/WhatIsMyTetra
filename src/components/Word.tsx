import React from "react";
import { wordType } from "../constants/types";

type WordType = {
  text: wordType;
  onClick: (wordObj: wordType) => void;
  design: number;
};

export default function Word({ text, onClick, design }: WordType) {
  return (
    <div
      onClick={() => onClick(text)}
      className={`md:text-2xl text:lg text-center py-4 px-10 rounded-full shadow-md text-slate-50 cursor-pointer hover:brightness-90 duration-300 ease-in-out ${
        design === 1 ? "bg-design-1" : "bg-design-2"
      }`}
    >
      {text.word}
    </div>
  );
}
