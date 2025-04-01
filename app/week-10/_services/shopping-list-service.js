import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - An array of items.
 */
export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, `users/${userId}/items`);
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

/**
 * Adds a new item to a specific user's list of items in Firestore.
 * @param {string} userId - The ID of the user.
 * @param {Object} item - The item to add.
 * @returns {Promise<string>} - The ID of the newly created document.
 */
export async function addItem(userId, item) {
  const itemsRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
