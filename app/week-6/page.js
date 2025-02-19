import Item from "./item";
import Itemlist from "./Itemlist";
export default function Page() {
  return (
    <main className=" bg-gray-600 p-4">
      <h1 className="text-4xl m-4 ml-7 font-bold text-gray-300">
        {" "}
        Shopping List
      </h1>
      <Itemlist />
    </main>
  );
}
