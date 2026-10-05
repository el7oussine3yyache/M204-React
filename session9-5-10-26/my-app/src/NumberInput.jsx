export const NumberInput = ({ label, value, onChange, placeholder = "0" }) => {
  const handleIncrement = () => {
    const current = Number(value) || 0;
    onChange((current + 1).toString());
  };

  const handleDecrement = () => {
    const current = Number(value) || 0;
    onChange((current - 1).toString());
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="flex rounded-lg shadow-sm">
        <button
          type="button"
          onClick={handleDecrement}
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-r-0 border-gray-300 rounded-l-lg font-bold text-lg select-none transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Decrement"
        >
          −
        </button>

        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full text-center px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          onClick={handleIncrement}
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-lg font-bold text-lg select-none transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
}
