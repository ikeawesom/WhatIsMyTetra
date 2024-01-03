"use client";
import React, { useEffect, useState } from "react";
import Word from "./Word";
import { wordType, elementScores } from "../constants/types";
import useWordGenerator from "../hooks/useWordGenerator";
import useWordScorer from "../hooks/useWordScorer";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import Container from "./utils/Container";
import useNextTransition from "../hooks/useNextTransition";

type WordsProps = {
  words: wordType[];
};

export default function WordScreen({ words }: WordsProps) {
  const router = useRouter();
  const { transit, toggletransit } = useNextTransition({ path: "intro" });
  const [count, setCount] = useState(0);
  const { score, updateScore, wordObj1, wordObj2, handleWordChange } =
    useWordScorer(words);

  const handleClick = (wordObj: wordType) => {
    updateScore(wordObj);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    handleWordChange();
  }, []);

  useEffect(() => {
    if (count === 24) {
      localStorage.setItem("results", JSON.stringify(score));
      setTimeout(() => {
        router.push("/results");
      }, 400);
    }
  }, [count]);

  const pathlength = count / 24;
  // console.log(pathlength);
  if (wordObj1 && wordObj2 && count <= 24)
    return (
      <>
        <div className="w-full h-[80vh] grid place-items-center absolute top-0 left-0">
          <svg className="relative flex min-[680px]:w-[80vh] min-[680px]:h-[80vh] h-[100vw] w-[100vw] items-center justify-center transform -rotate-90 -z-10">
            <circle
              className="text-slate-400 max-[400px]:hidden drop-shadow-lg"
              stroke="currentColor"
              strokeWidth="50"
              cx="50%"
              cy="50%"
              r="180"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="180"
              stroke="currentColor"
              id="robin"
              strokeDasharray={Math.round(Math.PI * (2 * 180))}
              strokeDashoffset={
                Math.round(Math.PI * (2 * 180)) -
                (Math.PI * (2 * 180) * count) / 24
              }
              strokeLinecap="round"
              strokeWidth="50"
              fill="transparent"
              className="max-[400px]:hidden text-purple-700 transition-all duration-500"
            />
            <circle
              className="min-[400px]:hidden text-slate-400 drop-shadow-lg "
              stroke="currentColor"
              strokeWidth="20"
              cx="50%"
              cy="50%"
              r="120"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="120"
              stroke="currentColor"
              id="robin"
              strokeDasharray={Math.round(Math.PI * (2 * 120))}
              strokeDashoffset={
                Math.round(Math.PI * (2 * 120)) -
                (Math.PI * (2 * 120) * count) / 24
              }
              strokeLinecap="round"
              strokeWidth="20"
              fill="transparent"
              className="opacity-40 min-[400px]:hidden text-purple-700 transition-all duration-500 drop-shadow-lg"
            />
          </svg>
        </div>
        <div className="w-full h-[80vh] grid place-items-center absolute top-0 left-0">
          <Container animated animateProps={{ transit, toggletransit }}>
            <div className="flex flex-col items-center justify-center gap-10">
              <Word onClick={handleClick} text={wordObj1} design={1} />
              <Word onClick={handleClick} text={wordObj2} design={2} />
            </div>
          </Container>
        </div>
      </>
    );
}
