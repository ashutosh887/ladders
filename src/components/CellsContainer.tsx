// @ts-nocheck

import { useEffect } from "react";
import Cell from "./Cell";

const CellsContainer = ({ playerIndex }) => {
  const cellArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // the cell container will re-render whenever Player Progresses... to update cell contents
  useEffect(() => {}, [playerIndex]);

  return (
    <div style={cellsContainerStyles}>
      {cellArray.map((cell) => {
        return <Cell key={cell} playerIndex={playerIndex} index={cell} />;
      })}
    </div>
  );
};

const cellsContainerStyles = {
  display: "flex",
  flexDirection: "row",
  margin: "50px",
};

export default CellsContainer;
