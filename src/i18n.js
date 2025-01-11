import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Eğer dil dosyalarını bir API üzerinden yükleyecekseniz, aşağıdaki satırı ekleyin:
// import Backend from 'i18next-http-backend';

// Dil dosyalarınızı burada doğrudan da ekleyebilirsiniz, ya da dışarıdan yükleyebilirsiniz.
const resources = {
  en: {
    translation: {
      "anasayfa": "Home Page",
      "greeting": "Hello, how are you?",
    }
  },
  tr: {
    translation: {
      "anasayfa": "Anasayfa",
      "greeting": "Merhaba, nasılsınız?",
    }
  }
};

i18n
  .use(initReactI18next) // React ile entegrasyon
  .init({
    resources,
    lng: "en", // Varsayılan dil
    fallbackLng: "en", // Eğer dil dosyası bulunamazsa kullanılacak yedek dil
    interpolation: {
      escapeValue: false // React zaten güvenlidir
    }
  });

export default i18n;