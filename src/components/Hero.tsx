"use client";
import React from "react";
import PrimaryButton from "./utils/PrimaryButton";
import useNextTransition from "../hooks/useNextTransition";
import Container from "./utils/Container";

export default function Hero() {
  const { transit, toggletransit } = useNextTransition({ path: "intro" });

  return (
    <Container
      animated={true}
      animateProps={{ transit, toggletransit }}
      className="items-center justify-center text-center opacity-0"
    >
      <h1 className="sm:text-6xl text-4xl text-slate-900">
        Discover your{" "}
        <span className="text-clip gradient-text-1">inner elements</span> and
        connect better with everyone.
      </h1>
      <PrimaryButton className="text-lg" onClick={toggletransit}>
        Next
      </PrimaryButton>
    </Container>
  );
}
