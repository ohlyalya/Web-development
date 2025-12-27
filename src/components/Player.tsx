import React, { useState } from "react";

const Player = () => {
  const [songs] = useState([
    "Song One",
    "Song Two",
    "Song Three",
  ]);

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = () => {
    if (index < songs.length - 1) {
      setIndex(index + 1);
      setProgress(0);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setProgress(0);
    }
  };

  const listen = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginTop: 20 }}>
      <h3>Плеер</h3>

      <div>Песня: {songs[index]}</div>

      <div style={{ marginTop: 10 }}>
        Прогресс: {progress}%
        <div style={{ background: "#eee", height: 8 }}>
          <div
            style={{
              background: "#777",
              height: "100%",
              width: progress + "%",
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={prev}>Назад</button>
        <button onClick={listen} style={{ margin: "0 8px" }}>
          Слушать
        </button>
        <button onClick={next}>Вперёд</button>
      </div>
    </div>
  );
};

export default Player;