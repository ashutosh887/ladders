// @ts-nocheck

import { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";

function App() {
  // will mark this false later
  const [gameStatus, setGameSatus] = useState(false);
  const [diceClickCount, setDiceClickCount] = useState(0);
  const [resultStatus, setResultStatus] = useState(false);

  const startMessage = "Click here to Start the Game!";
  const endMessage = "Click here to Exit the Game!";

  useEffect(() => {
    setGameSatus(false);
    setResultStatus(false);
    return setDiceClickCount(0);
  }, [resultStatus]);

  const updateGameStatus = () => {
    setGameSatus(!gameStatus);
  };

  return (
    <div className="app">
      {gameStatus === true && (
        <GameBoard
          resultStatus={resultStatus}
          setResultStatus={setResultStatus}
          diceClickCount={diceClickCount}
          setDiceClickCount={setDiceClickCount}
        />
      )}
      <button onClick={updateGameStatus} className="button">
        {gameStatus === true ? endMessage : startMessage}
      </button>
    </div>
  );
}

export default App;
