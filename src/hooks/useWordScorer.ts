import { useState } from "react";
import { wordType, elementScores } from "../constants/types";

export default function useWordScorer() {
  const [selectedWords, setSelectedWords] = useState<wordType[]>([]);

  const [score, setScore] = useState<elementScores>({
    Earth: 0,
    Air: 0,
    Water: 0,
    Fire: 0,
  });

  const handleScore = (n: number) => {
    const value_str = n.toString();
    if (value_str[1] === "2") {
      setScore({ ...score, Air: score.Air + 1 });
    } else if (value_str[1] === "3") {
      setScore({ ...score, Water: score.Water + 1 });
    } else if (value_str[1] === "4") {
      setScore({ ...score, Fire: score.Fire + 1 });
    } else if (value_str[1] === "1") {
      setScore({ ...score, Earth: score.Earth + 1 });
    }
  };

  const updateScore = (randomWordObj: wordType) => {
    setSelectedWords((selectedWords) => [...selectedWords, randomWordObj]);
    handleScore(randomWordObj.value);
  };

  return { updateScore, score, selectedWords };
}
