import { useEffect, useState } from "react";
import { wordType } from "../constants/types";

export default function useWordGenerator(
  words: wordType[],
  selectedWords: wordType[]
) {
  const [wordObj1, setWordObj1] = useState<wordType | undefined>();
  const [wordObj2, setWordObj2] = useState<wordType | undefined>();

  const handleWordChange = (selectedWords: wordType[]) => {
    var index = Math.floor(Math.random() * (words.length - 1));
    while (selectedWords.includes(words[index])) {
      index = Math.floor(Math.random() * (words.length - 1));
    }

    var index2 = Math.floor(Math.random() * (words.length - 1));
    while (index2 === index || selectedWords.includes(words[index2])) {
      index2 = Math.floor(Math.random() * (words.length - 1));
    }

    setWordObj1(words[index]);
    setWordObj2(words[index2]);
  };

  useEffect(() => {
    handleWordChange(selectedWords);
  }, []);

  return { wordObj1, wordObj2, handleWordChange };
}
