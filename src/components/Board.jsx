import { useState } from "react";
import Squar from "./Squar";
import style from "./board.module.css";

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xoro, setXoro] = useState(false);
  function clickhandle(index) {
    const copystate = [...state];
    copystate[index] = xoro ? "x" : "o";
    setXoro(!xoro);
    setState(copystate);
  }

  function checkwinner() {
    const allpossibleties = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of allpossibleties) {
      const [a, b, c] = logic;
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[b] === state[c] &&
        state[c] === state[a]
      ) {
        return state[a];
      }
    }
    return false;
  }

  const finalwinner = checkwinner();
  return (
    <>
      <div className={style.board_inside}>
        {finalwinner ? (
          <>
            <h1>
              <span>{finalwinner}</span> won The Game
            </h1>
          </>
        ) : (
          <>
            <div className={style.board_row}>
              <Squar
                onClick={() => {
                  clickhandle(0);
                }}
                value={state[0]}
              />
              <Squar
                onClick={() => {
                  clickhandle(1);
                }}
                value={state[1]}
              />
              <Squar
                onClick={() => {
                  clickhandle(2);
                }}
                value={state[2]}
              />
            </div>
            <div className={style.board_row}>
              <Squar
                onClick={() => {
                  clickhandle(3);
                }}
                value={state[3]}
              />
              <Squar
                onClick={() => {
                  clickhandle(4);
                }}
                value={state[4]}
              />
              <Squar
                onClick={() => {
                  clickhandle(5);
                }}
                value={state[5]}
              />
            </div>
            <div className={style.board_row}>
              <Squar
                onClick={() => {
                  clickhandle(6);
                }}
                value={state[6]}
              />
              <Squar
                onClick={() => {
                  clickhandle(7);
                }}
                value={state[7]}
              />
              <Squar
                onClick={() => {
                  clickhandle(8);
                }}
                value={state[8]}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
