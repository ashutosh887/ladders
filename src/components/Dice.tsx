// @ts-nocheck

import { useState } from "react";
import onDiceUpdate from "../utils/onDiceUpdate";

const Dice = ({
  playerIndex,
  setPlayerIndex,
  diceClickCount,
  setDiceClickCount,
  resultStatus,
  setResultStatus,
}) => {
  const [defaultDiceDigit, updateDefaultDiceDigit] = useState(0);
  const [currentPosition, updateCurrentPosition] = useState(playerIndex);

  const onDiceButtonClick = async () => {
    await onDiceUpdate(
      currentPosition,
      updateCurrentPosition,
      setPlayerIndex,
      defaultDiceDigit,
      updateDefaultDiceDigit,
      resultStatus,
      setResultStatus,
      diceClickCount
    );

    const clicks = diceClickCount + 1;
    setDiceClickCount(clicks);
  };

  return (
    <>
      <button onClick={onDiceButtonClick} className="button">
        Dice Output:
        {defaultDiceDigit === 0
          ? ` ${defaultDiceDigit} (default)`
          : defaultDiceDigit}
      </button>
      <p>The dice has been rolled {diceClickCount} times 😊</p>
      <p>Player Position: Index {playerIndex}</p>
    </>
  );
};

export default Dice;
