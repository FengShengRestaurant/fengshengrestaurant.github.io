// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Language Context with default value 'en' for English
const LanguageContext = createContext({
  language: 'en',
  switchLanguage: () => {},
});

// LanguageProvider component to wrap the application
export const LanguageProvider = ({ children }) => {
  // Function to get the initial language from localStorage or default to 'en'
  const getInitialLanguage = () => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      return savedLanguage ? savedLanguage : 'zh';
    }
    return 'zh';
  };

  // Initialize language state with persisted value
  const [language, setLanguage] = useState(getInitialLanguage);

  // Function to switch language and persist it
  const switchLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  // Optional: Sync state with localStorage if it changes elsewhere
  useEffect(() => {
    const handleStorageChange = () => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && savedLanguage !== language) {
        setLanguage(savedLanguage);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy access to the Language Context
export const useLanguage = () => useContext(LanguageContext);
