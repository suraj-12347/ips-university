// i18n.js

const languages = {
  en: () => import("./locales/en.json"),
  hi: () => import("./locales/hi.json"),
  es: () => import("./locales/es.json"),
  fr: () => import("./locales/fr.json"),
};

let cache = {};

// SAFE FALLBACK FUNCTION
export const getTranslation = (lang, key) => {
  const data = cache[lang];

  if (!data) return key; // fallback (never undefined)

  return key.split(".").reduce((obj, k) => obj?.[k], data) || key;
};

// LAZY LOADER (THIS FIXES YOUR ERROR)
export const loadLanguage = async (lang) => {
  if (cache[lang]) return cache[lang];

  if (!languages[lang]) {
    const fallback = await languages.en();
    cache.en = fallback.default;
    return cache.en;
  }

  const module = await languages[lang]();
  cache[lang] = module.default;

  return cache[lang];
};

// preload default
loadLanguage("en");