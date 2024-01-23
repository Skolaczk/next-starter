import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          next-starter
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};
