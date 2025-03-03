"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./Item-list";
import itemsData from "./items.json";

export default function ShoppingListApp() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
