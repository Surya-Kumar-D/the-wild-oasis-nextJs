import { useState } from 'react';
import Counter from '../components/Counter';

const CabinPage = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data: [{ id: number; name: string }] =
    await res.json();
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
};

export default CabinPage;
