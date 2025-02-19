"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [itemList, setItemList] = useState(items);
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemList].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = itemList.reduce((acc, item) => {
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
            <h2 className="capitalize">{category}</h2>
            {groupedItems[category]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <Item key={item.id} {...item} />
              ))}
          </div>
        ));
    } else {
      return sortedItems.map((item) => <Item key={item.id} {...item} />);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? "lightblue" : "white",
            marginRight: "10px",
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? "lightblue" : "white",
            marginRight: "10px",
          }}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          style={{
            backgroundColor: sortBy === "grouped" ? "lightblue" : "white",
          }}
        >
          Group by Category
        </button>
      </div>
      {renderItems()}
    </div>
  );
}
