"use client";

import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { KeyboardArrowUp as ArrowUpIcon } from "@mui/icons-material";
import { COLORS, Z_INDEX, blur } from "../theme/constants";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showBackToTop) return null;

  return (
    <Fab
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 35,
        right: 35,
        background: COLORS.primary.main,
        backdropFilter: blur(12),
        border: `1px solid ${COLORS.white.opacity35}`,
        color: COLORS.primary.dark,
        zIndex: Z_INDEX.fab,
        "&:hover": {
          background: COLORS.white.opacity22,
          transform: "translateY(-4px)",
        },
      }}
    >
      <ArrowUpIcon />
    </Fab>
  );
}
