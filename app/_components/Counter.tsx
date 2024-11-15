'use client';
import { useState } from 'react';

export default function Counter({ users }) {
  const [count, setCount] =
    useState<number>(null);
  console.log(users);
  return (
    <div>
      <button
        onClick={() =>
          setCount((prev) => prev + 1)
        }
      >
        +
      </button>
      {count}
      <button
        onClick={() =>
          setCount((prev) => prev - 1)
        }
      >
        -
      </button>
    </div>
  );
}
