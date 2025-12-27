import { useState } from "react";

export function useCounter(initial: number = 0) {
  const [count, setCount] = useState(initial);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const reset = () => setCount(initial);

  return { count, plus, minus, reset };
}