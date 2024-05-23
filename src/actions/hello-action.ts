'use server';
import { initializeLanguage } from '@inlang/paraglide-next';
initializeLanguage();

export const helloAction = async (name: string) => {
  return { message: `Hello ${name}, from server!` };
};
