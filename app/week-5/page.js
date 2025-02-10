import ItemForm from "./new-item.js";

export default function Page() {
  return (
    <main className="m-4 bg-gray-800 min-h-screen p-6">
      <h1 className="text-4xl m-2 font-bold text-white text-center">
        Week 5 Interactivity with Forms
      </h1>
      <div className="flex justify-center">
        <ItemForm />
      </div>
    </main>
  );
}
