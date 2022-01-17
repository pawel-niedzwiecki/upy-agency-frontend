import React, { useState, useEffect } from "react";
import translationsWords from "assets/lang/index.translationsWords";

export const LanguageContext = React.createContext({
  translations: { ...translationsWords.en },
  language: window.localStorage.lang || navigator.language,
  languageChange: (lang: string) => {},
});

interface UsersProviderProps {
  children?: JSX.Element | JSX.Element[] | any;
}

const LanguageProvider = ({ children }: UsersProviderProps) => {
  const locationPathname = window.location.pathname === "/en" ? "en" : window.location.pathname === "/pl" ? "pl" : null;
  const navigatorLanguage = navigator.language === "en-GB" ? "en" : navigator.language === "pl-PL" ? "pl" : navigator.language;
  const [language, setLanguage] = useState(locationPathname || window.localStorage.lang || navigatorLanguage);
  const [translations, setTranslations] = useState({ ...translationsWords.en });

  const translationsSwitch = (lang: string) => {
    switch (lang) {
      case "pl":
        return setTranslations(translationsWords["pl"]);
      case "en":
        return setTranslations(translationsWords["en"]);
    }
  };

  const languageChange = (lang: string) => {
    setLanguage(lang);
    window.localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const setLang = window.localStorage.lang;
    translationsSwitch(language);
    if (!setLang) return window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        languageChange,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
