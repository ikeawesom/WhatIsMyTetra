import { useEffect, useState } from "react";
import { wordType, elementScores } from "../constants/types";

export default function useWordScorer(words: wordType[]) {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [wordObj1, setWordObj1] = useState<wordType | undefined>();
  const [wordObj2, setWordObj2] = useState<wordType | undefined>();

  const handleWordChange = () => {
    var index = Math.floor(Math.random() * (words.length - 1));
    while (selectedWords.includes(words[index].word)) {
      index = Math.floor(Math.random() * (words.length - 1));
    }

    var index2 = Math.floor(Math.random() * (words.length - 1));
    while (index2 === index || selectedWords.includes(words[index2].word)) {
      index2 = Math.floor(Math.random() * (words.length - 1));
    }

    setWordObj1(words[index]);
    setWordObj2(words[index2]);
  };

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
    setSelectedWords((selectedWords) => [...selectedWords, randomWordObj.word]);
    handleScore(randomWordObj.value);
  };

  useEffect(() => {
    handleWordChange();
  }, [selectedWords]);

  return {
    updateScore,
    score,
    setScore,
    selectedWords,
    wordObj1,
    wordObj2,
    handleWordChange,
  };
}
