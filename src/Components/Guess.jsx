import { useState } from "react";

const Guess = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(null);
  const [response, setResponse] = useState("");
  const [trial, setTrial] = useState(3);

  function handleSubmit(event) {
    event.preventDefault();
    if (guess === number) {
      setResponse("You guessed the correct number!");
    } else {
      setResponse("Try again.");
      setTrial(trial - 1);

      if (trial === 1) {
        setResponse(`Game over. The correct number was ${number}.`);
        setNumber(number);
        setTrial(3);
      }
    }
    setGuess(null);
  }
  return (
    <div>
      <div>
        <h1>Number Guessing Game</h1>
        <p>{response}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Input a number between 1 and 100:
            <input
              type="number"
              min="1"
              max="100"
              value={guess}
              onChange={(event) => setGuess(parseInt(event.target.value))}
            />
          </label>
          <button type="submit">Guess</button>
        </form>
      </div>
    </div>
  );
};

export default Guess;
