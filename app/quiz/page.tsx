import React from "react";
import DefScreen from "@/src/components/utils/DefScreen";
import Container from "@/src/components/utils/Container";

import WordHandler from "@/src/supabase/wordsHandler";
import WordScreen from "@/src/components/WordScreen";

export default async function Quiz() {
  const data = await WordHandler.fetchWords();

  return (
    <DefScreen>
      <Container>
        <WordScreen words={data} />
      </Container>
    </DefScreen>
  );
}
