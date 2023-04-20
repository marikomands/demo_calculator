import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const evaluateExpression = (expression) => {
    const tokens = expression.split(/([+\-*/])/).filter(Boolean);
    const stack = [];

    const applyOperator = (operator, a, b) => {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          return 0;
      }
    };

    tokens.forEach((token) => {
      if (isNaN(token)) {
        const b = parseFloat(stack.pop());
        const a = parseFloat(stack.pop());
        stack.push(applyOperator(token, a, b));
      } else {
        stack.push(token);
      }
    });

    return stack[0];
  };

  const handleEvaluate = () => {
    try {
      const result = evaluateExpression(displayValue);
      setDisplayValue(result.toString());
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
