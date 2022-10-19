// @ts-nocheck

import onSnake from "./onSnake";
import onSnakeBite from "./onSnakeBite";
import onWinnerALert from "./onWinnerAlert";

const onDiceUpdate = async (
  currentPosition,
  updateCurrentPosition,
  setPlayerIndex,
  defaultDiceDigit,
  updateDefaultDiceDigit,
  resultStatus,
  setResultStatus,
  diceClickCount
) => {
  const randomDiceOutput = Math.ceil(Math.random() * 6);

  if (onSnake(currentPosition + randomDiceOutput) === false) {
    if (currentPosition + randomDiceOutput === 20) {
      // player reached end index
      // show results
      await setResultStatus(true);
      onWinnerALert(diceClickCount, resultStatus);
      console.log("Player won the Game!");
    } else if (currentPosition + randomDiceOutput > 20) {
      // if currentPosition + diceOutput > 20... don't perform this operation this time
      alert("Dice output exceeds max limit! 🚫");
      console.log("No updates for now... Exceeding max index");
    } else {
      await updateDefaultDiceDigit(randomDiceOutput);
      await setPlayerIndex(currentPosition + randomDiceOutput);
      await updateCurrentPosition(currentPosition + randomDiceOutput);
    }
  } else {
    // the position has a snake!
    console.log("Player got bit by snake!");
    // show an alert on snake bite
    onSnakeBite(currentPosition, randomDiceOutput);

    if (currentPosition < 6) {
      await setPlayerIndex(1);
      await updateCurrentPosition(1);
    } else {
      const previousSafePosition = currentPosition - (currentPosition % 6) - 1;
      await setPlayerIndex(previousSafePosition);
      await updateCurrentPosition(previousSafePosition);
    }
  }
};

export default onDiceUpdate;
