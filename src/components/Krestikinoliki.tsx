import React, { useState } from "react";
import "./styles.css";

const Krestikinoliki = () => {
  const [cells, setCells] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const check = (arr: string[]) => {
    const win = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let line of win) {
      const [a,b,c] = line;
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) return arr[a];
    }
    return "";
  };

  const click = (i: number) => {
    if (cells[i] || winner) return;

    const copy = [...cells];
    copy[i] = turn;
    setCells(copy);

    const w = check(copy);
    if (w) {
      setWinner(w);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  return (
    <div className="wrap">
      <h3>Крестики-нолики</h3>

      {winner && <div className="win">WIN: {winner}</div>}

      <div className="board">
        {cells.map((c, i) => (
          <div key={i} className="cell" onClick={() => click(i)}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Krestikinoliki;