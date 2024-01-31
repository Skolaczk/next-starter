'use client';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const SignInButton = () => {
  return <Button onClick={() => signIn('github')}>Sign in</Button>;
};
