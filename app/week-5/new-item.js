"use client";
import Quantity from "./quantity";
import { useState } from "react";

export default function ItemForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setError("⚠️ Name cannot be empty!");
      return;
    }

    setError("");

    let item = { name, quantity, category };
    console.log(item);
    alert(`Added ${quantity} ${name} from ${category} to the list`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <section className="max-w-md mx-auto bg-gray-900 shadow-xl rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-white text-center mb-4">
        Add New Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter item name"
          />
          {error && <p className="text-red-500 mt-1 animate-pulse">{error}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-300 font-medium">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
          </select>
        </div>

        {/* Quantity Component */}
        <Quantity count={quantity} setCount={setQuantity} />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md font-medium transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
