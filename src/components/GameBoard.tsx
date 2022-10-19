// @ts-nocheck

import Dice from "./Dice";

import CellsContainer from "./CellsContainer";
import { useState } from "react";

const GameBoard = ({
  resultStatus,
  setResultStatus,
  diceClickCount,
  setDiceClickCount,
}) => {
  const [playerIndex, setPlayerIndex] = useState(1);

  return (
    <div style={gameBoardStyles}>
      <CellsContainer playerIndex={playerIndex} />
      <Dice
        playerIndex={playerIndex}
        setPlayerIndex={setPlayerIndex}
        diceClickCount={diceClickCount}
        setDiceClickCount={setDiceClickCount}
        resultStatus={resultStatus}
        setResultStatus={setResultStatus}
      />
    </div>
  );
};

const gameBoardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default GameBoard;
