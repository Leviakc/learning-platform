export const SUPPORTED_LANGUAGES = ["es", "en"] as const;
export const DEFAULT_LANGUAGE = "es" as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_METADATA = {
  es: {
    name: "Español",
    nativeName: "Español",
    flag: "🇲🇽",
  },
  en: {
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
  },
} as const satisfies Record<
  SupportedLanguage,
  {
    name: string;
    nativeName: string;
    flag: string;
  }
>;

export const createLanguageParams = () => {
  return SUPPORTED_LANGUAGES.map((lang) => ({ params: { lang } }));
};

export const generateLanguagePaths = <T>(
  generateForLanguage: (lang: SupportedLanguage) => T[],
): T[] => {
  return SUPPORTED_LANGUAGES.flatMap(generateForLanguage);
};

export const isValidLanguage = (lang: string): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};
