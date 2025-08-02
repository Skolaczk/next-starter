"use client";

import Image from "next/image";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

type AuthControlsProps = {
  session: Session | null;
};

export const AuthControls = ({ session }: AuthControlsProps) => {
  const t = useTranslations("home");

  if (!session)
    return (
      <Button
        className="cursor-pointer"
        onClick={async () => await signIn("github")}
      >
        {t("signIn")}
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
        {t("signOut")}
      </Button>
    </>
  );
};
