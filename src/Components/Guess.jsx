// import { useState } from "react";

// const Guess = () => {
//   const [number, setNumber] = useState(generateRandomNumber());
//   const [guess, setGuess] = useState(null);
//   const [response, setResponse] = useState("");
//   const [trial, setTrial] = useState(3);

//   function generateRandomNumber() {
//     return Math.floor(Math.random() * 10) + 1; // You can adjust the range as needed
//   }

//   function HandleNewGame() {
//     setGuess(null);
//     setResponse("");
//     setTrial(3);
//     setNumber(generateRandomNumber());
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (guess === number) {
//       setResponse("You guessed the correct number!");
//       setNumber(generateRandomNumber());
//     } else if (guess > 10) {
//       setResponse("guess between 1-10");
//       setTrial(trial - 1);
//       setNumber(generateRandomNumber());
//     } else {
//       setResponse("Try again.");
//       setTrial(trial - 1);
//       setNumber(generateRandomNumber());

//       if (trial === 1) {
//         setResponse(`Game over. The correct number was ${number}.`);
//         setNumber(number);
//         setTrial(3);
//         setNumber(generateRandomNumber());
//       }
//     }
//     setGuess(null);
//   }
//   return (
//     <div className="bg-black h-screen text-[#fff] flex justify-center align-middle">
//       <div>
//         <h1 className="text-center text-[30px] font-bold pt-8 ">Guess Game</h1>
//         <p className="text-[#EF4040] text-center text-[12px] w-[100%] font-bold">
//           {response}
//         </p>
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <label className="block text-center">
//             Input a number between 1 and 10
//             <input
//               type="number"
//               min="1"
//               max="100"
//               value={guess}
//               onChange={(event) => setGuess(parseInt(event.target.value))}
//               className="block m-auto p-1 border-none outline-none mt-6 text-[#000]"
//             />
//           </label>
//           <button
//             type="submit"
//             disabled={trial === 0}
//             className="border-[2px] bg-[#fff] text-black font-bold mt-4 rounded-sm"
//           >
//             Guess
//           </button>
//         </form>
//         <button
//           onClick={HandleNewGame}
//           className="flex p-1 w-[100%] bg-[#EF4040] justify-center border-[2px] text-[#fff] font-bold mt-4 rounded-sm outline-none border-none"
//         >
//           New game
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Guess;

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
    console.log(guess);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userGuess = parseInt(guess, 10);
    console.log;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      setResponse("Please enter a valid number between 1 and 10.");
      console.log(response);

      return;
    }

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

// import { useState } from "react";

// const Guess = () => {
//   const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
//   const [userGuess, setUserGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [message, setMessage] = useState("");
//   const [gameOver, setGameOver] = useState(false);

//   function generateRandomNumber() {
//     return Math.floor(Math.random() * 10) + 1;
//   }

//   console.log(secretNumber);

//   const handleInputChange = (event) => {
//     setUserGuess(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     const guess = parseInt(userGuess, 10);

//     if (isNaN(guess) || guess < 1 || guess > 10) {
//       setMessage("Please enter a valid number between 1 and 10.");
//       return;
//     }

//     setAttempts(attempts + 1);

//     if (guess === secretNumber) {
//       setMessage(
//         `Congratulations! You guessed the correct number in ${attempts} attempts.`
//       );
//       setGameOver(true);
//     } else if (attempts === 2) {
//       setMessage(`Game over! The correct number was ${secretNumber}.`);
//       setGameOver(true);
//     } else {
//       setMessage(
//         `Incorrect guess. You have ${2 - attempts} ${
//           attempts === 1 ? "attempt" : "attempts"
//         } left.`
//       );
//     }
//   };

//   const handleRestartGame = () => {
//     setSecretNumber(generateRandomNumber());
//     setUserGuess("");
//     setAttempts(0);
//     setMessage("");
//     setGameOver(false);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Guessing Game</h1>
//       {!gameOver && (
//         <form onSubmit={handleFormSubmit} className="mb-4">
//           <label className="block mb-2">
//             Enter your guess (between 1 and 10):
//             <input
//               type="number"
//               value={userGuess}
//               onChange={handleInputChange}
//               className="block w-full p-2 border rounded"
//             />
//           </label>
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Submit Guess
//           </button>
//         </form>
//       )}
//       <p
//         className={`text-lg ${
//           message.includes("Congratulations")
//             ? "text-green-500"
//             : "text-red-500"
//         }`}
//       >
//         {message}
//       </p>
//       {gameOver && (
//         <div className="mt-4">
//           <p>Do you want to play again?</p>
//           <button
//             onClick={handleRestartGame}
//             className="bg-green-500 text-white p-2 rounded mr-2"
//           >
//             Restart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Guess;
