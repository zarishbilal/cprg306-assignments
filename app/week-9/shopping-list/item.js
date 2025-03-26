export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition cursor-pointer"
      onClick={onSelect} // Ensure onClick triggers onSelect
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">Quantity: {quantity}</p>
      <p className="text-sm text-gray-400">Category: {category}</p>
    </li>
  );
}
