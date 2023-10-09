import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  const handleAddGues = (guess) => {
    if (results.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const nextResults = [
      ...results,
      {
        id: crypto.randomUUID(),
        guess,
      },
    ];

    setResults(nextResults);
  };

  return (
    <>
      <GuessResults answer={answer} results={results}></GuessResults>
      <GuessInput onUseGuess={handleAddGues}></GuessInput>
    </>
  );
}

export default Game;
