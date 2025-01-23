import Dog from "./dog";
export default function Page() {
  let dog1 = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 11,
    color: "brown",
  };
  let dog2 = {
    name: "Dingo",
    breed: "Miniature Schnauzer",
    age: 7,
    color: "black",
  };

  let dog3 = {
    name: "Ginger",
    breed: "Sausage Dog",
    age: 1,
    color: "ginger",
  };

  return (
    <main className="m-4 ">
      <h2 className="text-2xl font-bold"> Meet the dogs</h2>
      <Dog
        name={dog1.name}
        breed={dog1.breed}
        age={dog1.age}
        color={dog1.color}
      />
      <Dog
        name={dog2.name}
        breed={dog2.breed}
        age={dog2.age}
        color={dog2.color}
      />
      <Dog
        name={dog3.name}
        breed={dog3.breed}
        age={dog3.age}
        color={dog3.color}
      />
    </main>
  );
}
