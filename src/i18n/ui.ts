import enHome from "./en/home";
import esHome from "./es/home";
import enPython from "./en/python";
import esPython from "./es/python";
import enSql from "./en/sql";
import esSql from "./es/sql";
import esDsa from "./es/dsa.ts"
import enDsa from "./en/dsa.ts"
import { DEFAULT_LANGUAGE, type SupportedLanguage } from "./constants";

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
    ...enDsa,
  },
  es: {
    ...esHome,
    ...esPython,
    ...esSql,
    ...esDsa
  },
} as const;
