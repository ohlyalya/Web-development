import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>(["Погамать в дотку", "Покормить кота"]);

    const [doneFlags, setDoneFlags] = useState<boolean[]>([false, false]);

    const [input, setInput] = useState<string>("");

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setTodos([...todos, trimmed]);
    setDoneFlags([...doneFlags, false]);
    setInput("");
  };

   const toggleDone = (index: number) => {
    const copy = [...doneFlags];
    copy[index] = !copy[index];
    setDoneFlags(copy);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    const newFlags = doneFlags.filter((_, i) => i !== index);
    setTodos(newTodos);
    setDoneFlags(newFlags);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6, marginTop: 16 }}>
      <h3>Список дел today</h3>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Новое дело"
          style={{ flex: 1, padding: 6 }}
        />
        <button onClick={addTodo} style={{ padding: "6px 10px" }}>
          Добавить
        </button>
      </div>

      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
        {todos.map((t, i) => (
          <TodoItem
            key={i}
            text={t}
            done={doneFlags[i] ?? false}
            onToggle={() => toggleDone(i)}
            onDelete={() => deleteTodo(i)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;