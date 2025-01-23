export default function Item({ name, quantity, category }) {
  return (
    <li className="m-2 mr-96 bg-slate-500 p-2 ">
      <h3 className="text-xl font-bold text-black-200">{name}</h3>
      <p>quantity: {quantity}</p>
      <p>category: {category}</p>
    </li>
  );
}
