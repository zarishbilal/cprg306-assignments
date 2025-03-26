"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./Item-list";
import MealIdeas from "./meal-ideas"; // Import the new component
import itemsData from "./items.json";

export default function ShoppingListApp() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // New state variable

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0] // Remove size or additional details if present
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "") // Remove all emojis
      .trim(); // Trim whitespace
    setSelectedItemName(cleanedName);
  };

  return (
    <div
      style={{
        backgroundColor: "#8B9AA7", // Light greyish background
        minHeight: "100vh", // Ensure it covers the full viewport height
        padding: "20px", // Add padding for spacing
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Align MealIdeas and ItemList */}
          <div style={{ flex: 1 }}>
            <ItemList items={items} onItemSelect={handleItemSelect} />{" "}
            {/* ItemList */}
          </div>
          <div style={{ flex: 1 }}>
            <MealIdeas ingredient={selectedItemName} /> {/* MealIdeas */}
          </div>
        </div>
      </div>
    </div>
  );
}
