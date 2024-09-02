"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);
  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
}
