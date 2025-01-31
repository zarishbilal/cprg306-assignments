"use client";
import { useState } from "react";
export default function counter() {
  const [count, setCount] = useState(1);
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
    <div>
      <h1>Counter</h1>
      <div className="flex items-center">
        <button
          onClick={decrement}
          className={`p-2 m-2 ${
            count === 1
              ? "bg-gray-300 hover:bg-gray-300"
              : "bg-blue-500 hover:bg-blue-300"
          }
      active:bg-blue-800 w-38 rounded flex items-center justify-center`}
          style={{ width: "30px", height: "30px" }}
          disabled={count === 1}
        >
          -
        </button>

        <p className="m-2">{count}</p>
        <button
          onClick={increment}
          className={`p-2 m-2 ${
            count === 20
              ? "bg-gray-300 hover:bg-gray-300"
              : "bg-blue-500 hover:bg-blue-300"
          }
      active:bg-blue-800 w-38 rounded flex items-center justify-center`}
          style={{ width: "30px", height: "30px" }}
          disabled={count === 20}
        >
          +
        </button>
      </div>
    </div>
  );
}
