import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <p>{count}</p>
      <div className="flex gap-12">
        <button
          onClick={() => setCount(count + 1)}
          className="py-4 px-8 rounded-xl bg-red-300"
        >
          Increase
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="py-4 px-8 rounded-xl bg-blue-300"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
