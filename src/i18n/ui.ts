import enHome from "./en/home";
import esHome from "./es/home";
import enPython from "./en/python";
import esPython from "./es/python";
import enSql from "./en/sql";
import esSql from "./es/sql";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

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
