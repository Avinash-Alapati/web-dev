import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    // console.log(`Moves : ${moves.blue}`);
    setMoves((prevMoves) => {
      return {...prevMoves , blue : prevMoves.blue + 1}
    }); // sending the object by spreading to make a copy - making a copy to detect the change and for state to re-render
  }

  let updateYellow = () => {
    setMoves((prevMoves) => {
      return {...prevMoves , yellow : prevMoves.yellow + 1}
    }); // sending the object by spreading to make a copy - making a copy to detect the change and for state to re-render
  }

  let updateGreen = () => {
    setMoves((prevMoves) => {
      return {...prevMoves , green : prevMoves.green + 1}
    }); // sending the object by spreading to make a copy - making a copy to detect the change and for state to re-render
  }

  let updateRed = () => {
    setMoves((prevMoves) => {
      return {...prevMoves , red : prevMoves.red + 1}
    }); // sending the object by spreading to make a copy - making a copy to detect the change and for state to re-render
  }

  return (
    <>
      <div>
        <h1>Game Begins!</h1>
        <div className="board">
          <p >Blue Moves = {moves.blue}</p>
          <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>

          <p >Yellow Moves = {moves.yellow}</p>
          <button style={{backgroundColor : "yellow"}} onClick={updateYellow}>+1</button>

          <p >Green Moves = {moves.green}</p>
          <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>

          <p >Red Moves = {moves.red}</p>
          <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
        </div>
      </div>
    </>
  );
}
