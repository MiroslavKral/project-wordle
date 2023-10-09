import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ answer, results }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((row) => {
        const result = results[row] ?? { id: null, guess: "" };
        return <Guess key={result.id ?? row} answer={answer} result={result} />;
      })}
    </div>
  );
}

export default GuessResults;
