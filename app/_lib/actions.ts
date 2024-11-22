'use server';

import {
  auth,
  signIn,
  signOut,
} from '@/app/_lib/auth';
import { supabase } from './supabase';
import { revalidatePath } from 'next/cache';
import { getBookings } from './data-service';
import toast from 'react-hot-toast';

export async function SignInAction() {
  return await signIn('google', {
    redirectTo: '/account',
  });
}

export async function SignOutAction() {
  return await signOut({ redirectTo: '/' });
}

export async function updateGuest(formData) {
  const session = await auth();

  const nationalID = formData.get('nationalID');
  if (!session.user)
    throw new Error('You must be logged in');
  const [nationality, countryFlag] = formData
    .get('nationality')
    .split('%');
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error(
      'Please provide a valid national Id'
    );

  const updateData = {
    nationalID,
    countryFlag,
    nationality,
  };
  console.log(updateData);
  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session?.user?.guestId);
  revalidatePath('/account/profile');
  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }
}

export async function deleteReservation(
  bookingId
) {
  console.log(bookingId);
  const session = await auth();
  if (!session.user)
    throw new Error('You must be logged in');

  const bookings = await getBookings(
    session?.user?.guestId
  );
  const bookingIds = bookings.map(
    (booking) => booking.id
  );
  console.log(
    bookingIds.includes(bookingId),
    bookingId
  );

  if (!bookingIds.includes(bookingId)) {
    throw new Error(
      'You are not allowed to delete this reservation'
    );
  }

  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  revalidatePath('/account/reservations');

  if (error) {
    console.error(error);
    throw new Error(
      'Booking could not be deleted'
    );
  }
}
