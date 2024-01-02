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

  const [count, setCount] = useState(25);
  const { updateScore, selectedWords, score } = useWordScorer();
  const { wordObj1, wordObj2, handleWordChange } = useWordGenerator(
    words,
    selectedWords
  );
  const [curScore, setCurScore] = useState<elementScores>();

  const handleClick = (wordObj: wordType) => {
    updateScore(wordObj);
    handleWordChange(selectedWords);
    setCurScore(score);
  };

  useEffect(() => {
    setCount((count) => count - 1);
  }, [curScore]);

  useEffect(() => {
    if (count === 0) {
      localStorage.setItem("results", JSON.stringify(curScore));
      router.push("/results");
    }
  }, [count]);

  if (wordObj1 && wordObj2 && count > 0)
    return (
      <>
        <div
          className={twMerge(
            "absolute top-10 left-1/2 -translate-x-1/2 p-3 rounded-full text-white shadow-lg",
            count % 2 === 0 ? "bg-design-1" : "bg-design-2"
          )}
        >
          {count}
        </div>
        <Container animated animateProps={{ transit, toggletransit }}>
          <div className="flex flex-col items-center justify-center gap-10">
            <Word onClick={handleClick} text={wordObj1} design={1} />
            <Word onClick={handleClick} text={wordObj2} design={2} />
          </div>
        </Container>
      </>
    );
}
