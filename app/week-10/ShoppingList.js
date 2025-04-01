import React, { useEffect, useState } from "react";
import { getItems, addItem } from "./_services/shopping-list-service";

function ShoppingList({ user }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems = await getItems(user);
      setItems(fetchedItems);
    };
    loadItems();
  }, [user]);

  const handleAddItemClick = async (newItem) => {
    const newItemId = await addItem(user, newItem);
    setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => handleAddItemClick({ name: "New Item" })}>
        Add Item
      </button>
    </div>
  );
}

export default ShoppingList;
