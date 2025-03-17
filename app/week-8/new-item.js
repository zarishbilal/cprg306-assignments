"use client";
import Quantity from "./quantity";
import { useState } from "react";

export default function ItemForm({ onAddItem }) {
  const [item, setItem] = useState({
    name: "",
    category: "produce",
    quantity: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 10000); // generate an id
    const newItem = { ...item, id };
    onAddItem(newItem);
    setItem({ name: "", category: "produce", quantity: 1 });
  };

  const handleNameChange = (event) => {
    setItem({ ...item, name: event.target.value });
  };

  const handleCategoryChange = (event) => {
    setItem({ ...item, category: event.target.value });
  };

  const handleQuantityChange = (quantity) => {
    setItem({ ...item, quantity });
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
            value={item.name}
            onChange={handleNameChange}
            required
            className="w-full p-2 mt-1 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter item name"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-300 font-medium">
            Category
          </label>
          <select
            id="category"
            value={item.category}
            onChange={handleCategoryChange}
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
        <Quantity count={item.quantity} setCount={handleQuantityChange} />

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
