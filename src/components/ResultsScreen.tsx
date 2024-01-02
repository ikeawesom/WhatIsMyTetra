"use client";
import React, { useEffect, useState } from "react";
import useNextTransition from "../hooks/useNextTransition";
import Container from "./utils/Container";
import ElementBox from "./utils/ElementBox";
import { elementScores } from "../constants/types";
import { useRouter } from "next/navigation";
import TipBox from "./utils/TipBox";
import PrimaryButton from "./utils/PrimaryButton";
import SharingButtons from "./SharingButtons";

export type MaxType = { elements: string[]; score: number };

export default function ResultsScreen() {
  const [scores, setScores] = useState<elementScores>();
  const [maxElement, setMaxElement] = useState<MaxType | undefined>();
  const router = useRouter();

  function getMax(scores: { [elementName: string]: number }) {
    var maxElementArr = [] as string[];
    var maxScore = -1;

    Object.keys(scores).forEach((element: string) => {
      if (maxElementArr.length === 0) {
        maxElementArr.push(element);
        maxScore = scores[element];
      } else {
        if (scores[element] > maxScore) {
          maxScore = scores[element];
          maxElementArr = [`${element}`];
        } else if (scores[element] === maxScore) {
          maxElementArr.push(element);
        }
      }
    });

    return { elementArr: maxElementArr, score: maxScore };
  }
  useEffect(() => {
    const result = localStorage.getItem("results");
    if (result) {
      const resultJson = JSON.parse(result) as elementScores;
      setScores(resultJson);

      const maxed = getMax(resultJson);
      setMaxElement({ elements: maxed.elementArr, score: maxed.score });
    } else {
      router.replace("/");
    }
  }, []);
  const { transit, toggletransit } = useNextTransition({ path: "intro" });

  const handleReattempt = () => {
    localStorage.clear();
    router.push("/");
  };

  if (scores && maxElement) {
    return (
      <Container>
        <Container
          animated
          animateProps={{ transit, toggletransit }}
          className="flex-col flex items-center justify-center gap-4 mt-4 w-full"
        >
          <h1 className="header font-medium mb-2">You are...</h1>

          <div className="flex items-center justify-center gap-4 w-full max-[500px]:flex-wrap">
            {maxElement.elements.map((elementUpper: string) => {
              const element = elementUpper.toLowerCase();
              if (
                element === "earth" ||
                element === "air" ||
                element === "water" ||
                element === "fire"
              ) {
                return (
                  <ElementBox
                    key={elementUpper}
                    element={element}
                    big
                    score={maxElement.score}
                  />
                );
              }
            })}
          </div>
        </Container>

        <Container
          animated
          animateProps={{ transit, toggletransit }}
          delay={0.2}
          className="flex-col flex items-center justify-center gap-4 mt-4 w-full"
        >
          <h1 className="header2 font-medium">
            How to deal with other elements?
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            {Object.keys(scores).map((elementName: string) => {
              const elementNameLower = elementName.toLowerCase();
              if (
                !maxElement.elements.includes(elementName) &&
                (elementNameLower === "earth" ||
                  elementNameLower === "air" ||
                  elementNameLower === "water" ||
                  elementNameLower === "fire") &&
                (elementName === "Earth" ||
                  elementName === "Air" ||
                  elementName === "Water" ||
                  elementName === "Fire")
              ) {
                return <TipBox key={elementName} element={elementNameLower} />;
              }
            })}
          </div>
        </Container>

        <Container
          animated
          animateProps={{ transit, toggletransit }}
          delay={0.4}
          className="flex-col flex items-center justify-center gap-4 mt-4"
        >
          <h1 className="header2 font-medium">Your Other Elements</h1>
          <div className="flex items-center justify-center gap-4 w-fit max-[550px]:flex-wrap">
            {Object.keys(scores).map((elementName: string) => {
              const elementNameLower = elementName.toLowerCase();
              if (
                !maxElement.elements.includes(elementName) &&
                (elementNameLower === "earth" ||
                  elementNameLower === "air" ||
                  elementNameLower === "water" ||
                  elementNameLower === "fire") &&
                (elementName === "Earth" ||
                  elementName === "Air" ||
                  elementName === "Water" ||
                  elementName === "Fire")
              ) {
                return (
                  <ElementBox
                    key={elementName}
                    element={elementNameLower}
                    score={scores[elementName]}
                  />
                );
              }
            })}
          </div>
        </Container>
        <div className="flex flex-col items-center justify-center gap-2">
          <PrimaryButton onClick={handleReattempt} className="w-fit">
            Start again!
          </PrimaryButton>
          <SharingButtons data={maxElement} />
        </div>
      </Container>
    );
  }

  return <h1 className="header text-center">Generating your score...</h1>;
}
