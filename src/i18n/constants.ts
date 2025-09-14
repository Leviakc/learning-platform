/**
 * Internationalization constants
 * Single source of truth for language configuration
 */

export const SUPPORTED_LANGUAGES = ["es", "en"] as const;
export const DEFAULT_LANGUAGE = "es" as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Helper functions for static path generation
export const createLanguageParams = () => {
  return SUPPORTED_LANGUAGES.map(lang => ({ params: { lang } }));
};

export const generateLanguagePaths = <T>(
  generateForLanguage: (lang: SupportedLanguage) => T[]
): T[] => {
  return SUPPORTED_LANGUAGES.flatMap(generateForLanguage);
};

// Validation helper
export const isValidLanguage = (lang: string): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};
