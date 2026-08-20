import React, { useState, useMemo } from "react";

const allNames = ["Anuj", "Amit", "Priya", "Pooja", "Rahul", "Riya", "Suresh", "Sneha", "Vikram", "Vishal"];

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // useMemo - only re-runs when search changes, NOT when count changes
  const filteredNames = useMemo(() => {
    console.log("Filtering running...");
    return allNames.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); // <-- only depends on search

  console.log("App rendered!");

  return (
    <div>
      <h2>Name Filter</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search name..."
      />

      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}