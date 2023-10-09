import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, result }) {
  const cols = range(5);
  const check = checkGuess(result.guess, answer);

  return (
    <p className="guess">
      {cols.map((col) => {
        const letterCheck = check ? check[col] : null;
        const className = letterCheck ? `cell ${letterCheck.status}` : "cell";
        const letter = letterCheck ? letterCheck.letter : "";

        return (
          <span key={col} className={className}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
