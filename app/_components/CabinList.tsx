import { getCabins } from '../_lib/data-service';
import { cabinsSchema } from '../cabins/page';
import CabinCard from './CabinCard';

import { unstable_noStore as noStore } from 'next/cache';

async function CabinList({
  filter,
}: {
  filter: string;
}) {
  noStore();
  const rawCabins = await getCabins();

  const validateCabins =
    cabinsSchema.safeParse(rawCabins);

  if (!validateCabins.success) {
    console.error(validateCabins.error);
  }
  if (!validateCabins.data.length) return null;

  let displayedCabins;
  if (filter === 'all')
    displayedCabins = validateCabins.data;
  if (filter === 'small')
    displayedCabins = validateCabins.data.filter(
      (cabin) => cabin.maxCapacity <= 3
    );
  if (filter === 'medium')
    displayedCabins = validateCabins.data.filter(
      (cabin) =>
        cabin.maxCapacity > 3 &&
        cabin.maxCapacity <= 7
    );
  if (filter === 'large')
    displayedCabins = validateCabins.data.filter(
      (cabin) => cabin.maxCapacity >= 8
    );

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
