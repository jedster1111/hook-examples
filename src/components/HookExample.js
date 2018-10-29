import React, { useState } from "react";

const HookExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>Your name is {name}</p>
      <input onChange={e => setName(e.target.value)} value={name} />
    </div>
  );
};

export default HookExample;
