import React from 'react';
import { range } from '../../utils';

function Guess({ result }) {
  const cols = range(5);
  const chars = [...result.guess];

  return (
    <p className="guess">
      {cols.map((col) => {
        return (
          <span key={col} className="cell">
            {chars[col] ?? ""}
          </span>
        );
      })}
    </p>
  );;
}

export default Guess;
