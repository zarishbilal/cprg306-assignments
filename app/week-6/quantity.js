import React from "react";

export default function Quantity({ count, setCount }) {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={decrement}
        className="bg-gray-600 text-white px-2 py-1 rounded-md"
      >
        -
      </button>
      <span className="text-white">{count}</span>
      <button
        type="button"
        onClick={increment}
        className="bg-gray-600 text-white px-2 py-1 rounded-md"
      >
        +
      </button>
    </div>
  );
}
