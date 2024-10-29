import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the language detector
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

// Initialize i18next with the language detector
i18n
  .use(LanguageDetector) // Use the language detector plugin
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Fallback language if detection fails
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    detection: {
      // Optional configuration for the language detector
      order: ['navigator', 'htmlTag', 'path', 'subdomain'], // Preferred detection order
      caches: ['localStorage', 'cookie'], // Cache the detected language
    },
  });

export default i18n;
