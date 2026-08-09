import { useLocale } from "next-intl";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LangSwitcherProps = {
  className?: ComponentProps<"a">["className"];
};

// A plain anchor forces a full document load. Switching locale swaps the whole
// `[locale]` layout, and a client-side transition would remount next-themes'
// inline script inside the React tree (pacocoursey/next-themes#385).
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const locale = useLocale();

  return (
    <a
      className={cn(
        buttonVariants({ variant: "outline", size: "icon" }),
        className,
      )}
      href={locale === "en" ? "/pl" : "/en"}
    >
      {locale === "en" ? "PL" : "EN"}
    </a>
  );
};
