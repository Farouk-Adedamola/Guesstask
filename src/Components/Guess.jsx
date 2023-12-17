import { useState } from "react";

const Guess = () => {
  const [number, setNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [trial, setTrial] = useState(0);
  const [response, setResponse] = useState("");
  const [gameOver, setGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  console.log(number);

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userGuess = parseInt(guess, 10);
    console.log(userGuess);
    // if check to see if input is valid
    // redundant since min max in the input already checked

    // if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    //   setResponse("Please enter a valid number between 1 and 10.");
    //   console.log(response);

    //   return;
    // }

    setTrial(trial + 1);

    if (userGuess === number) {
      setResponse(
        `Congratulations! You guessed the correct number in ${trial + 1} trial.`
      );
      console.log(response);

      setGameOver(true);
    } else if (trial === 2) {
      setResponse(` Oooops! Game over! The correct number was ${number}.`);
      setGameOver(true);
      console.log(response);
    } else {
      setResponse(
        `Oops! wrong guess. You have ${2 - trial} ${
          trial === 1 ? "attempt" : "trial"
        } left.`
      );
      console.log(response);
    }
  };

  const handleRestartGame = () => {
    setNumber(generateRandomNumber());
    setGuess("");
    setTrial(0);
    setResponse("");
    setGameOver(false);
  };

  return (
    // <div className="bg-black h-screen py-8">
    <div className="max-w-md mx-auto py-8 px-4 rounded-lg">
      <h1 className=" text-center text-white text-2xl font-bold mb-4">
        Number Guessing Game
      </h1>
      <p
        className={`text-sm mb-4 text-center ${
          response.includes("Congratulations")
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {response}
      </p>

      {!gameOver && (
        <form
          onSubmit={handleFormSubmit}
          className="mb-4 flex flex-col items-center justify-center "
        >
          <label className="block mb-2 text-white font-bold text-1xl">
            Input a number
            <span className="text-green-500"> (between 1 and 10)</span>
          </label>

          <input
            type="number"
            value={guess}
            min="1"
            max="10"
            onChange={handleInputChange}
            className="block w-[50%] p-2 border rounded m-auto outline-none"
          />
          <button
            type="submit"
            className="bg-green-500 text-white w-full rounded my-6 p-4 font-bold"
          >
            Check Guess
          </button>
        </form>
      )}

      {/* trying to implement a Game over seperate text to be fixed */}
      {/* {trial ? (
          <p className="text-red-500 text-center font-bold text-xl mb-2 p-2">
            Game Over
          </p>
        ) : (
          ""
        )} */}

      {gameOver && (
        <div className="mt-4 flex flex-col justify-center">
          <p className="text-white text-center mb-2 p-2">
            Do you want to play again?
          </p>
          <button
            onClick={handleRestartGame}
            className="bg-green-500 flex-1 text-white p-4 rounded mr-2"
          >
            New Game
          </button>
        </div>
      )}
    </div>
    // </div>
  );
};

export default Guess;
