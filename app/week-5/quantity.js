"use client";

export default function Quantity({ count, setCount }) {
  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-gray-700 font-medium text-lg">Quantity</h3>
      <div className="flex items-center gap-3 mt-2">
        <button
          type="button"
          onClick={decrement}
          className={`w-10 h-10 rounded-md flex items-center justify-center font-bold transition ${
            count === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
          disabled={count === 1}
        >
          -
        </button>

        <p className="text-lg font-semibold">{count}</p>

        <button
          type="button"
          onClick={increment}
          className={`w-10 h-10 rounded-md flex items-center justify-center font-bold transition ${
            count === 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
          disabled={count === 20}
        >
          +
        </button>
      </div>
    </div>
  );
}
