import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '../_lib/data-service';
import { z } from 'zod';
import CabinList from '../_components/CabinList';
import { Suspense } from 'react';
import Spinner from '../_components/Spinner';
import { Metadata } from 'next';
import Filter from '../_components/Filter';

// export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Cabins',
};

export const cabinSchema = z.object({
  id: z.number(),
  name: z.string(),
  maxCapacity: z.number(),
  regularPrice: z.number(),
  discount: z.number(),
  description: z.string().optional(),
  image: z.string().url(),
});
export const cabinsSchema = z.array(cabinSchema);
export type Cabin = z.infer<typeof cabinSchema>;
export type Cabins = z.infer<typeof cabinsSchema>;

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? 'all';

  // CHANGE

  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right
        in the heart of the Italian Dolomites.
        Imagine waking up to beautiful mountain
        views, spending your days exploring the
        dark forests around, or just relaxing in
        your private hot tub under the stars.
        Enjoy nature&apos;s beauty in your own
        little home away from home. The perfect
        spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense
        fallback={<Spinner />}
        key={filter}
      >
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
