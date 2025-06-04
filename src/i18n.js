// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from './language/uz.json';
import ru from './language/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
    },
    fallbackLng: 'uz', // Fallback — agar boshqa til topilmasa 'uz' bo'ladi
    detection: {
      // Tilda aniqlash manbaalari tartibi
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Faqat localStorage va htmlTag orqali tekshiradi — URL, cookie va boshqalar emas
      caches: ['localStorage'], // tanlangan tilni saqlaydi
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
