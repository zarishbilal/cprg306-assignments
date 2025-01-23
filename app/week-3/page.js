import Item from "./item";
import Itemlist from "./Itemlist";
export default function Page() {
  return (
    <main className="m-4 bg-gray-600 p-4">
      <h1 className="text-2xl font-bold text-slate-200"> Shopping List</h1>
      <Itemlist />
    </main>
  );
}
