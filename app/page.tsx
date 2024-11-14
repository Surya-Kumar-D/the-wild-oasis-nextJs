import Link from 'next/link';
import Navigation from './components/Navigation';

const pages = () => {
  return (
    <div>
      <h1>
        The Wild Oasis. Welcome to paradise.
      </h1>
      <Link href={'/cabins'}>
        Explore luxury cabins
      </Link>
    </div>
  );
};

export default pages;
