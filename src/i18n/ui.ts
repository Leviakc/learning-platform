import enHome from "./en/home";
import esHome from "./es/home";
import enPython from "./en/python";
import esPython from "./es/python";
import enSql from "./en/sql";
import esSql from "./es/sql";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type SupportedLanguage } from "./constants";

export const languages: Record<SupportedLanguage, string> = {
  en: "English",
  es: "Español",
};

export const defaultLang = DEFAULT_LANGUAGE;

export const ui = {
  en: {
    ...enHome,
    ...enPython,
    ...enSql,
  },
  es: {
    ...esHome,
    ...esPython,
    ...esSql,
  },
} as const;
