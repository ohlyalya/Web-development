import React from "react";
import { useCounter } from "../hooks/useCounter";

type Props = {
  initialValue?: number;
};

const Counter: React.FC<Props> = ({ initialValue }) => {
  const { count, plus, minus, reset } = useCounter(initialValue ?? 0);

  return (
    <div style={{ border: "1px solid #aaa", padding: 10, marginTop: 10 }}>
      <h4>Counter</h4>
      <div>Значение: {count}</div>

      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>Сброс</button>
    </div>
  );
};

export default Counter;