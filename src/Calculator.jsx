import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleEvaluate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "+",
    "=",
  ];

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly />
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() =>
              button === "=" ? handleEvaluate() : handleClick(button)
            }
          >
            {button}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
