import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button
      className="bg-amber-600 p-5 m-3 text-black"
      onClick={() => setCounter((prev) => ++prev)}
    >
      Add - {counter}
    </button>
  );
};
