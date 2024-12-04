// src/components/LanguageSelector.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Adjust the path if necessary
import { contactContent } from '../data/contact'; // Import translations

const LanguageSelector = () => {
  const { language, switchLanguage } = useLanguage();

  // Select content based on current language for button labels
  const content = contactContent[language] || contactContent.en;

  return (
    <div className="flex space-x-4">
      {/* English Button */}
      <button
        onClick={() => switchLanguage('en')}
        aria-pressed={language === 'en'}
        className={`min-w-[100px] px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'en'
            ? 'bg-orange text-white'
            : 'border border-orange text-orange bg-transparent hover:bg-bright-yellow focus:ring-orange hover:text-black'
        }`}
      >
        {content.english}
      </button>

      {/* 中文 Button */}
      <button
        onClick={() => switchLanguage('zh')}
        aria-pressed={language === 'zh'}
        className={`min-w-[100px] px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'zh'
            ? 'bg-orange text-white'
            : 'border border-orange text-orange bg-transparent hover:bg-bright-yellow focus:ring-orange hover:text-black'
        }`}
      >
        {content.chinese}
      </button>
    </div>
  );
};

export default LanguageSelector;
