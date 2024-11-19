import DateSelector from '@/app/_components/DateSelector';
import ReservationForm from '@/app/_components/ReservationForm';
import TextExpander from '@/app/_components/TextExpander';
import {
  getCabin,
  getCabins,
} from '@/app/_lib/data-service';
import {
  EyeSlashIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { type Cabin } from '../page';
import { Suspense } from 'react';
import Loading from '../loading';
import Reservation from '@/app/_components/Reservation';
import CabinComponent from '@/app/_components/Cabin';

// export const metadata: Metadata = {
//   title: 'Cabin',
// };

export async function generateMetadata({
  params,
}: PageProps) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => {
    return { cabinId: String(cabin.id) };
  });
  return ids;
}

type PageProps = {
  params: {
    cabinId: number;
  };
};

export default async function Page({
  params,
}: PageProps) {
  const cabin = (await getCabin(
    params.cabinId
  )) as Cabin;

  const {
    id,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <CabinComponent cabin={cabin} />
      <div>
        <h2 className="mb-10 text-5xl font-semibold text-center text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
