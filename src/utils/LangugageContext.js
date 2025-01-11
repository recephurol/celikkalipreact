import React, { createContext, useState, useContext } from 'react';

// Dil verileri
import en from '../lang/en.json';
import tr from '../lang/tr.json';
import de from '../lang/de.json';

const LanguageContext = createContext();

// Dil seçenekleri
const languages = {
  en: en,
  tr: tr,
  de: de
};

// LanguageProvider: Context'i sağlayan component
export const LanguageProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(savedLanguage); // Varsayılan dil: İngilizce

  // Dil değiştirici fonksiyon
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language: languages[language], changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// useLanguage hook'u, dil verilerini kolayca almak için
export const useLanguage = () => {
  return useContext(LanguageContext);
};