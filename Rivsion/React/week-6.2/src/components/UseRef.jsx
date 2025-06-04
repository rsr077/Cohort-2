import React, { useState, useRef } from "react";

export default function Timer() {
  const [stateCount, setStateCount] = useState(0);  // causes re-render
  const refCount = useRef(0);                       // does NOT cause re-render

  const incrementState = () => {
    setStateCount(stateCount + 1);  // UI updates every click
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log("Ref count:", refCount.current);  // updates internally only
  };

  return (
    <div>
      <h2>useState count (UI updates): {stateCount}</h2>
      <button onClick={incrementState}>Increment useState</button>

      <h2>useRef count (no UI update): {refCount.current}</h2>
      <button onClick={incrementRef}>Increment useRef</button>
    </div>
  );
}
