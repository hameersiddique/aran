
import { useEffect, useState } from 'react';
import { defaultLanguage, getDirection, translations } from '../i18n/config';

export const useTranslation = () => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [direction, setDirection] = useState('ltr');

    useEffect(() => {
        // Load language from localStorage if available
        const savedLang = localStorage.getItem('language');
        if (savedLang && translations[savedLang]) {
            setLanguage(savedLang);
            setDirection(getDirection(savedLang));
        }
    }, []);

    const changeLanguage = (lang) => {
        if (translations[lang]) {
            setLanguage(lang);
            setDirection(getDirection(lang));
            localStorage.setItem('language', lang);
            document.documentElement.dir = getDirection(lang);
            document.documentElement.lang = lang;
        }
    };

    const t = translations[language];

    return {
        t,
        language,
        direction,
        changeLanguage
    };
};