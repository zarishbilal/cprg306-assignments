"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context"; // Import the useUserAuth hook
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import NewItem from "./new-item";
import ItemList from "./Item-list";
import MealIdeas from "./meal-ideas"; // Import the new component
import itemsData from "./items.json";

export default function ShoppingListApp() {
  const { user } = useUserAuth(); // Get the user from the auth context
  const router = useRouter(); // Initialize useRouter for redirection

  // If the user is not logged in, redirect them to the landing page
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to the landing page
    }
  }, [user, router]);

  // If the user is not logged in, don't render the shopping list page
  if (!user) {
    return <p>Loading...</p>; // Show a loading message or nothing until redirection
  }

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
