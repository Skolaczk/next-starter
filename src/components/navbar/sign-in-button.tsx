'use client';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import * as m from '@/paraglide/messages';

export const SignInButton = () => {
  return <Button onClick={() => signIn('github')}>{m.sign_in()}</Button>;
};
