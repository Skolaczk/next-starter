import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { ThemeToggle } from '@/components/navbar/theme-toggle';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          {m.app_name()}
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session ? <UserDropdown session={session} /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
};
