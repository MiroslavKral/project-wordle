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
  const win = results.some((result) => result.guess === answer);
  const loose = results.length === NUM_OF_GUESSES_ALLOWED;

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
      <GuessResults answer={answer} results={results} />
      <GuessInput
        disabled={win || loose}
        onUseGuess={handleAddGues}
      ></GuessInput>

      {win && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{results.length} guesses</strong>.
          </p>
        </div>
      )}

      {loose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
