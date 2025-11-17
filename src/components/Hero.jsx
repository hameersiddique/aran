"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { COLORS, TYPOGRAPHY, responsive } from "../theme/constants";
import { useLanguage } from "./../app/LayoutClient";

const Hero = () => {
  const { lang, translation } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    "/videos/civil-1.mp4",
    "/videos/mechanical-2.mp4",
    "/videos/electrical-1.mp4",
    "/videos/civil-2.mp4",
    "/videos/electrical-2.mp4",
    "/videos/mechanical-1.mp4",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [videos.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          // Start electrical-2.mp4 at 2 seconds, others at 0
          if (videos[index] === "/videos/electrical-2.mp4") {
            video.currentTime = 2;
          } else {
            video.currentTime = 0;
          }
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide, videos]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        mt: 0,
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Background Slider */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {videos.map((video, index) => (
          <Box
            key={index}
            component="video"
            src={video}
            ref={(el) => (videoRefs.current[index] = el)}
            autoPlay={index === 0}
            loop
            muted
            playsInline
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}
      </Box>

      {/* Minimal Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Logo with up-down animation */}
      <Box
        component="img"
        src="/logos/logo.png"
        alt="ARAN Logo"
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          width: { xs: 100, md: 150 },
          mt: 15,
          animation: "moveUpDown 3s ease-in-out infinite",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
          "@keyframes moveUpDown": {
            "0%, 100%": { transform: "translate(-50%, 0)" },
            "50%": { transform: "translate(-50%, 20px)" },
          },
        }}
      />

      {/* Hero Content */}
      <Container
        sx={{ position: "relative", zIndex: 2, textAlign: "center", mt: 20 }}
      >
        <Typography
          sx={{
            color: "white",
            mb: 4,
            fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
            textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)",
            fontWeight: 700,
          }}
        >
          {translation.common.tagline}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            href="/contact"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: responsive(TYPOGRAPHY.fontSize["xs"]),
              fontWeight: 700,
              borderRadius: 50,
              background: "linear-gradient(135deg, #4a9fd5, #3b9ac7)",
              boxShadow: "0 10px 30px rgba(74, 159, 213, 0.4)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 15px 40px rgba(74, 159, 213, 0.6)",
              },
            }}
          >
            {translation.hero.getStarted}
          </Button>
          <Button
            variant="outlined"
            href="/services"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: responsive(TYPOGRAPHY.fontSize["xs"]),
              fontWeight: 700,
              borderRadius: 50,
              borderColor: "white",
              color: "white",
              borderWidth: 2,
              backgroundColor: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "white",
                color: "#0a0e27",
                borderWidth: 2,
                transform: "translateY(-5px)",
              },
            }}
          >
            {translation.hero.exploreServices}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;