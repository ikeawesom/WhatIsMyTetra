import { useEffect, useState } from "react";
import { wordType } from "../constants/types";

export default function useWordGenerator(words: wordType[]) {
  const [wordObj1, setWordObj1] = useState<wordType | undefined>();
  const [wordObj2, setWordObj2] = useState<wordType | undefined>();

  const handleWordChange = () => {
    var index = Math.floor(Math.random() * (words.length - 1));
    var index2 = Math.floor(Math.random() * (words.length - 1));

    while (index2 === index) {
      index2 = Math.floor(Math.random() * (words.length - 1));
    }
    setWordObj1(words[index]);
    setWordObj2(words[index2]);
  };

  useEffect(() => {
    handleWordChange();
  }, []);

  return { wordObj1, wordObj2, handleWordChange };
}
