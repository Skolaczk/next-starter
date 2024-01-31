'use client';

import Image from 'next/image';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const UserDropdown = ({ session }: { session: Session }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          className="overflow-hidden rounded-full"
          src={`${session.user?.image}`}
          alt={`${session.user?.name}`}
          width={32}
          height={32}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => signOut()}>
          <Icons.logOut className="mr-2 size-4" /> <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
