// @ts-nocheck

import { useState } from "react";

const Cell = ({ playerIndex, index }) => {
  if (index === 6 || index === 12 || index === 18) {
    return <div className="cell snakeCell">🐍</div>;
  }

  return <div className="cell">{index === playerIndex ? "😊" : "0"}</div>;
};

export default Cell;
