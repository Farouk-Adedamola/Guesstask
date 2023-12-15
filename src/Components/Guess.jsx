import { useState } from "react";

const Guess = () => {
  const [number, setNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState(null);
  const [response, setResponse] = useState("");
  const [trial, setTrial] = useState(3);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; // You can adjust the range as needed
  }

  function HandleNewGame() {
    setGuess(null);
    setResponse("");
    setTrial(3);
    setNumber(generateRandomNumber());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (guess === number) {
      setResponse("You guessed the correct number!");
      setNumber(generateRandomNumber());
    } else if (guess > 10) {
      setResponse("guess between 1-10");
      setTrial(trial - 1);
      setNumber(generateRandomNumber());
    } else {
      setResponse("Try again.");
      setTrial(trial - 1);
      setNumber(generateRandomNumber());

      if (trial === 1) {
        setResponse(`Game over. The correct number was ${number}.`);
        setNumber(number);
        setTrial(3);
        setNumber(generateRandomNumber());
      }
    }
    setGuess(null);
  }
  return (
    <div className="bg-black h-screen text-[#fff] flex justify-center align-middle">
      <div>
        <h1 className="text-center text-[30px] font-bold pt-8 ">Guess Game</h1>
        <p className="text-[#EF4040] text-center text-[12px] w-[100%] font-bold">
          {response}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="block text-center">
            Input a number between 1 and 10
            <input
              type="number"
              min="1"
              max="100"
              value={guess}
              onChange={(event) => setGuess(parseInt(event.target.value))}
              className="block m-auto p-1 border-none outline-none mt-6 text-[#000]"
            />
          </label>
          <button
            type="submit"
            disabled={trial === 0}
            className="border-[2px] bg-[#fff] text-black font-bold mt-4 rounded-sm"
          >
            Guess
          </button>
        </form>
        <button
          onClick={HandleNewGame}
          className="flex p-1 w-[100%] bg-[#EF4040] justify-center border-[2px] text-[#fff] font-bold mt-4 rounded-sm outline-none border-none"
        >
          New game
        </button>
      </div>
    </div>
  );
};

export default Guess;
