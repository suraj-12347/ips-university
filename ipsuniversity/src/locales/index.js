const languages = {
  en: () => import("./en.json"),
  hi: () => import("./hi.json"),
  es: () => import("./es.json"),
  fr: () => import("./fr.json"),
};

let cache = {};

export const loadLanguage = async (lang) => {
  if (cache[lang]) return cache[lang];

  try {
    const data = await languages[lang]();
    cache[lang] = data.default;
    return cache[lang];
  } catch (err) {
    console.warn("Language load failed, fallback to EN");
    const fallback = await languages.en();
    cache.en = fallback.default;
    return fallback.default;
  }
};