import React from "react";

function GuessInput({ disabled, onUseGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    onUseGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        autoComplete="off"
        title="Five letter word."
        disabled={disabled}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
