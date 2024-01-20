'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex gap-2 bg-neutral-100 p-3 dark:bg-neutral-800"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="hidden dark:block" />
      <Icons.moon className="dark:hidden" />
    </button>
  );
};
