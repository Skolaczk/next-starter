"use client";

import Image from "next/image";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

type AuthControlsProps = {
  session: Session | null;
};

export const AuthControls = ({ session }: AuthControlsProps) => {
  if (!session)
    return (
      <Button
        className="cursor-pointer"
        onClick={async () => await signIn("github")}
      >
        Sign in
      </Button>
    );

  const { user } = session;

  return (
    <>
      <Image
        className="overflow-hidden rounded-full"
        src={`${user?.image}`}
        alt={`${user?.name}`}
        width={32}
        height={32}
      />
      <Button className="cursor-pointer" onClick={async () => await signOut()}>
        Sign out
      </Button>
    </>
  );
};
