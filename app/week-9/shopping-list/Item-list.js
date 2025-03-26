"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const renderItems = () => {
    if (sortBy === "grouped") {
      return Object.keys(groupedItems)
        .sort()
        .map((category) => (
          <div key={category}>
            <h2 className="capitalize text-white font-semibold mb-2">
              {category}
            </h2>
            <ul className="space-y-2">
              {groupedItems[category]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <Item
                    key={item.id}
                    {...item}
                    onSelect={() => onItemSelect(item)} // Ensure onItemSelect is passed
                  />
                ))}
            </ul>
          </div>
        ));
    } else {
      return (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              {...item}
              onSelect={() => onItemSelect(item)} // Ensure onItemSelect is passed
            />
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="bg-gray-900 p-2 rounded-lg shadow-lg">
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-medium transition ml-2 ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 rounded-md font-medium transition ml-2 ${
            sortBy === "grouped"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Group by Category
        </button>
      </div>
      {renderItems()}
    </div>
  );
}
