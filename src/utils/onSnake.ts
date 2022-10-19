const snakeIndexes: number[] = [6, 12, 18];

// the cells are divided into 3 zones as of now
// this function checks if the position is having snake present there...

// returns true if snake is present at that index
const onSnake = (index: number): boolean => {
  if (
    index === snakeIndexes[0] ||
    index === snakeIndexes[1] ||
    index === snakeIndexes[2]
  ) {
    return true;
  }

  return false;
};

export default onSnake;
