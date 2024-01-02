import React from "react";
import DefScreen from "@/src/components/utils/DefScreen";
import Container from "@/src/components/utils/Container";
import WordScreen from "@/src/components/WordScreen";
import { WORDS } from "@/src/constants/dataModels";

export default async function Quiz() {


  return (
    <DefScreen>
      <Container>
        <WordScreen words={WORDS} />
      </Container>
    </DefScreen>
  );
}
