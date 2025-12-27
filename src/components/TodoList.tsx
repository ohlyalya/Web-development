import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(["Погамать в дотку", "Покормить кота"]);

  const [doneFlags, setDoneFlags] = useState<boolean[]>([false, false]);

  const [input, setInput] = useState<string>("");

  const [search, setSearch] = useState<string>("");

  const searchRef = useRef<HTMLInputElement>(null);

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

  const clearSearch = () => {
    setSearch("");
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const filtered = todos.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6, marginTop: 16 }}>
      <h3>Список дел today</h3>

      {/* Добавить новое дело */}
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

      {/* Поиск */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          ref={searchRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по делам"
          style={{ flex: 1, padding: 6 }}
        />
        <button onClick={clearSearch} style={{ padding: "6px 10px" }}>
          Очистить
        </button>
      </div>

      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
        {filtered.map((t, i) => (
          <TodoItem
            key={i}
            text={t}
            done={doneFlags[todos.indexOf(t)] ?? false}
            onToggle={() => toggleDone(todos.indexOf(t))}
            onDelete={() => deleteTodo(todos.indexOf(t))}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;