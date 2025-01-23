export default function Item({ name, quantity, category }) {
  return (
    <li className="m-2 bg-slate-100 p-2">
      <h3 className="text-xl font-bold text-gray-600">{name}</h3>
      <p>
        <span className="font-bold text-gray-600">quantity: </span>
        {quantity}
      </p>
      <p>category: {category}</p>
    </li>
  );
}
