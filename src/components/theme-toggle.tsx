'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="hidden dark:block" />
      <Icons.moon className="dark:hidden" />
    </Button>
  );
};
