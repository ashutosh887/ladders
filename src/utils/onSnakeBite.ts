// @ts-nocheck

// if snake bites player... show this alert
const onSnakeBite = (currentPosition, randomDiceOutput) => {
  if (currentPosition === 1) {
    alert("Oops... You got 5! Can't proceed... 🤦");
  } else if (currentPosition < 6) {
    alert("Shifting you back to 1! 🥲");
  } else
    alert(
      `You got ${randomDiceOutput}! Shifting you back to safe position ${
        currentPosition - (currentPosition % 6) - 1
      } 🥲`
    );
};

export default onSnakeBite;
