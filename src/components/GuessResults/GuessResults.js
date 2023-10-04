import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(({ id, guess }) => {
        return (
          <div key={id} className="guess">
            {guess}
          </div>
        );
      })}
    </div>
  );
}

export default GuessResults;
