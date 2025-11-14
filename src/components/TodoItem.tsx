import React from "react";

type Props = {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<Props> = ({ text, done, onToggle, onDelete }) => {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <span style={{ textDecoration: done ? "line-through" : "none", flex: 1 }}>
        {text}
      </span>
      <button onClick={onToggle} style={{ padding: "2px 6px" }}>
        {done ? "Снять" : "Готово"}
      </button>
      <button onClick={onDelete} style={{ padding: "2px 6px" }}>
        УдОлить
      </button>
    </li>
  );
};

export default TodoItem;