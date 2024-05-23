import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/lib/i18n';
import {
  AvailableLanguageTag,
  availableLanguageTags,
  languageTag,
} from '@/paraglide/runtime';

const LanguageLabel: Record<AvailableLanguageTag, string> = {
  en: '🇬🇧 English',
};

export const LanguageSwitcher = () => {
  const currentLanguageLabel = LanguageLabel[languageTag()];
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{currentLanguageLabel}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {availableLanguageTags.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => {
              router.push(pathname, { locale });
            }}
          >
            {LanguageLabel[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
