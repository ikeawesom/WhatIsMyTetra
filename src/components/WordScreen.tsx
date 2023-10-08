"use client";
import React, { useEffect, useState } from "react";
import Word from "./Word";
import { wordType, elementScores } from "../constants/types";
import useWordGenerator from "../hooks/useWordGenerator";
import useWordScorer from "../hooks/useWordScorer";

type WordsProps = {
  words: wordType[];
};

export default function WordScreen({ words }: WordsProps) {
  const { wordObj1, wordObj2, handleWordChange } = useWordGenerator(words);
  const { updateScore, selectedWords, score } = useWordScorer();
  const [curScore, setCurScore] = useState<elementScores>();

  const handleClick = (wordObj: wordType) => {
    updateScore(wordObj);
    handleWordChange();
    setCurScore(score);
  };

  useEffect(() => {
    if (curScore) {
      console.log(curScore);
      // handle score calculation here
    }
  }, [curScore]);

  if (wordObj1 && wordObj2)
    return (
      <>
        <div className="flex flex-col items-center justify-center gap-10">
          <Word onClick={handleClick} text={wordObj1} design={1} />
          <Word onClick={handleClick} text={wordObj2} design={2} />
        </div>
      </>
    );
}
