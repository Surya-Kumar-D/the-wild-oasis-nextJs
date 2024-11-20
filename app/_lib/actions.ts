'use server';

import { signIn, signOut } from '@/app/_lib/auth';

export async function SignInAction() {
  return await signIn('google', {
    redirectTo: '/account',
  });
}

export async function SignOutAction() {
  return await signOut({ redirectTo: '/' });
}
