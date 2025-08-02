import Link from "next/link";
import { useLocale } from "next-intl";
import { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LangSwitcherProps = {
  className?: ComponentProps<typeof Link>["className"];
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const locale = useLocale();

  return (
    <Link
      className={cn(
        buttonVariants({ variant: "outline", size: "icon" }),
        className,
      )}
      href={locale === "en" ? "/pl" : "/en"}
    >
      {locale === "en" ? "PL" : "EN"}
    </Link>
  );
};
