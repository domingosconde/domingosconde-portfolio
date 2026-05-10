import { Globe, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, useLanguage, type LangCode } from "@/i18n/LanguageProvider";

const LanguageSwitcher = () => {
  const { lang, setLang, loading } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        data-no-translate
        aria-label="Change language"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Globe className="w-4 h-4" />
        )}
        <span className="hidden sm:inline">{current.flag} {current.label}</span>
        <span className="sm:hidden">{current.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        data-no-translate
        className="bg-background border-border z-[100] max-h-80 overflow-y-auto"
      >
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code as LangCode)}
            className="cursor-pointer flex items-center gap-2"
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
            {lang === l.code && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
