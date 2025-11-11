// src/i18n/config.js
import { en } from "./locales/en";
import { ar } from "./locales/ar";

export const translations = { en, ar };

export const defaultLanguage = "en";

export const supportedLanguages = ["en", "ar"];

export const languageNames = {
  en: "English",
  ar: "العربية",
};

export const getTranslation = (lang, key) => {
  const keys = key.split(".");
  let value = translations[lang];

  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      return key;
    }
  }

  return value || key;
};

export const getDirection = (lang) => (lang === "ar" ? "rtl" : "ltr");
