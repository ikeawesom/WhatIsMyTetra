"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "./utils/PrimaryButton";
import useNextTransition from "../hooks/useNextTransition";
import Container from "./utils/Container";

export function Intro() {
  const { transit, toggletransit } = useNextTransition({ path: "quiz" });

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <motion.h1
          className="text-5xl font-medium opacity-0"
          animate={{
            x: transit ? [0, -100] : [100, 0],
            opacity: transit ? [1, 0] : [0, 1],
          }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        >
          A personality checkup that's as fun as it is enlightening
        </motion.h1>
        <motion.p
          className="opacity-0 text-lg"
          animate={{
            x: transit ? [0, -100] : [100, 0],
            opacity: transit ? [1, 0] : [0, 1],
          }}
          transition={{ ease: "easeInOut", duration: 0.6, delay: 0.05 }}
        >
          {" "}
          This simple and interactive questionnaire is like your own personality
          mirror, reflecting who you truly are and giving you a glimpse of how
          you stack up against your fantastic team members. Remember, there are
          no <span className="text-clip gradient-text-2">right</span> or{" "}
          <span className="text-clip gradient-text-3">wrong</span> answers here;
          it's all about discovering your unique self.
        </motion.p>
      </div>

      <motion.a
        animate={{
          x: transit ? [0, -100] : [100, 0],
          opacity: transit ? [1, 0] : [0, 1],
        }}
        transition={{ ease: "easeInOut", duration: 0.6, delay: 0.1 }}
        className="opacity-0"
      >
        <PrimaryButton onClick={toggletransit} className="w-fit">
          Next
        </PrimaryButton>
      </motion.a>
    </Container>
  );
}

function InstructionsTwo() {
  const { transit, toggletransit } = useNextTransition({});

  return (
    <Container animated={true} animateProps={{ transit, toggletransit }}>
      <h1>
        Take a peek at these words and pick out the four that scream "you!" Be
        honest with yourself—this is all about who you are, not who you wish you
        could be
      </h1>
    </Container>
  );
}
