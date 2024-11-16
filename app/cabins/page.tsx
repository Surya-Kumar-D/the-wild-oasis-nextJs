import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '../_lib/data-service';
import { z } from 'zod';

const cabinsSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    maxCapacity: z.number(),
    regularPrice: z.number(),
    discount: z.number(),
    image: z.string().url(),
  })
);

export type Cabins = z.infer<typeof cabinsSchema>;

export default async function Page() {
  // CHANGE
  const cabins = [];
  const rawCabins = await getCabins();
  const validateCabins =
    cabinsSchema.safeParse(rawCabins);
  if (!validateCabins.success) {
    console.error(validateCabins.error);
  }

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

      {validateCabins.data.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
          {validateCabins.data.map((cabin) => (
            <CabinCard
              cabin={cabin}
              key={cabin.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
