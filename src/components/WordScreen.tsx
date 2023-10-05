import React from "react";

type WordsProps = {
  words: [{ word: string; value: number }];
};

export default function WordScreen({ words }: WordsProps) {
  return (
    <>
      <div>
        <h1>Words</h1>
        {words.map((item) => (
          <>
            <p>{item.word}</p>
            <h1>{item.value}</h1>
          </>
        ))}
        ;
      </div>
    </>
  );
}
