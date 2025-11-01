import React from "react";
import currency from "currency.js";

const CurrencyInput: React.FC = () => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = parseFloat(event.target.value) || 0;
    const random = Math.random();
    const sum = currency(value).add(random);
    console.log(`Результат: ${sum.value}`);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Введите число"
        onChange={handleChange}
        style={{ padding: "5px", fontSize: "16px" }}
      />
    </div>
  );
};

export default CurrencyInput;