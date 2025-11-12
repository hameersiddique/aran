"use client";

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import ClientsHoneyComb from "../components/ClientsSection";
import { useLanguage } from "./LayoutClient";

export default function HomePage() {
  const { lang, translation } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    "/media/civil.mp4",
    "/media/electrical.mp4",
    "/media/mechanical.mp4",
    "/media/security.mp4",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [videos.length]);

  return (
    <Box sx={{ pt: 0 }}>
      <Hero
        lang={lang}
        translation={translation}
        videos={videos}
        currentSlide={currentSlide}
      />

      <Box id="clients">
        <ClientsHoneyComb
          title={translation.clients.title}
          clients={[
            { logo: "/media/unicoil-logo.jpg" },
            { logo: "/media/alayuni-logo.jpg" },
            { logo: "/media/tamimi-logo.jpg" },
          ]}
        />
      </Box>
    </Box>
  );
}
