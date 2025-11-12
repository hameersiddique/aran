"use client";

import { createContext, useContext, useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { translations } from "../i18n/config";

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};

export default function LayoutClient({ children }) {
    const [lang, setLang] = useState("en");
    const translation = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, translation }}>
            <Box>
                <Header lang={lang} setLang={setLang} translation={translation} />
                <Box component="main">{children}</Box>
                <Footer lang={lang} translation={translation} />
                <BackToTop />
            </Box>
        </LanguageContext.Provider>
    );
}