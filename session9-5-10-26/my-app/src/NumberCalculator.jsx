import { useState } from "react";
import NumberInput from "./NumberInput";
import Button from "./Button";

export const NumberCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (num1 === "" || num2 === "") return;
    setSum(Number(num1) + Number(num2));
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setSum(null);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Calculate the Sum of Two Numbers
      </h2>

      <form onSubmit={handleCalculate} className="space-y-4">
        <NumberInput
          label="First Number"
          value={num1}
          onChange={setNum1}
          placeholder="0"
        />

        <NumberInput
          label="Second Number"
          value={num2}
          onChange={setNum2}
          placeholder="0"
        />

        <div className="flex gap-2 pt-2">
          <Button type="submit" variant="primary" className="flex-1">
            Calculate
          </Button>
          <Button type="button" variant="secondary" onClick={handleReset}>
            Clear
          </Button>
        </div>
      </form>

      {sum !== null && (
        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Result
          </span>
          <p className="text-3xl font-bold text-gray-900 mt-1">{sum}</p>
        </div>
      )}
    </div>
  );
}
