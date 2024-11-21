'use server';

import {
  auth,
  signIn,
  signOut,
} from '@/app/_lib/auth';
import { supabase } from './supabase';
import { revalidatePath } from 'next/cache';

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
  console.log(session);
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
