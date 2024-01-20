'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex gap-2 bg-neutral-100 px-5 py-2 dark:bg-neutral-800"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <span>{theme === 'light' ? <Icons.moon /> : <Icons.sun />}</span>
      toggle theme
    </button>
  );
};
