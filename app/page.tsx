import Link from 'next/link';
import Navigation from '@/app/_components/Navigation';
import Image from 'next/image';
import bg from '@/public/bg.png';

const pages = () => {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        alt="Mountains and forests with two cabins"
        objectFit="cover"
        objectPosition="top"
        placeholder="blur"
        quality={80}
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 font-normal tracking-tight text-8xl text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="px-8 py-6 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
};

export default pages;
