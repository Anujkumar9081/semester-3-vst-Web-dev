import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputName, setInputName] = useState("");  // what user types
  const [name, setName] = useState("");             // what shows in card

  console.log("App rendered!");

  function handleAddName() {
    setName(inputName);  // only updates card when button clicked
  }

  return (
    <div>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleAddName}>Add name</button>

      <ProfileCard title={name} city="Pune" />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}