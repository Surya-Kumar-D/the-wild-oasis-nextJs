import { auth } from '@/app/_lib/auth';
import { MiddlewareConfig } from 'next/server';

export const middleware = auth;

export const config: MiddlewareConfig = {
  matcher: ['/account'],
};
