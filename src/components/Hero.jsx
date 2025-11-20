"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { COLORS, TYPOGRAPHY, responsive } from "../theme/constants";
import { useLanguage } from "./../app/LayoutClient";

const Hero = () => {
  const { lang, translation } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const videoRefs = useRef([]);
  const slideTimerRef = useRef(null);

  const videos = [
    "/videos/civil-1.mp4",
    "/videos/mechanical-2.mp4",
    "/videos/electrical-1.mp4",
    "/videos/civil-2.mp4",
    "/videos/electrical-2.mp4",
    "/videos/mechanical-1.mp4",
  ];

  // Fallback images (create corresponding images or use first frame)
  const fallbackImages = [
    "/images/hero-civil-1.jpg",
    "/images/hero-mechanical-2.jpg",
    "/images/hero-electrical-1.jpg",
    "/images/hero-civil-2.jpg",
    "/images/hero-electrical-2.jpg",
    "/images/hero-mechanical-1.jpg",
  ];

  // Detect mobile and video support
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check video support
    const video = document.createElement('video');
    setIsVideoSupported(video.canPlayType('video/mp4') !== '');

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload first video
  useEffect(() => {
    if (videoRefs.current[0] && !isMobile) {
      videoRefs.current[0].load();
    }
  }, [isMobile]);

  // Handle video loading
  const handleVideoLoad = (index) => {
    setVideosLoaded((prev) => ({ ...prev, [index]: true }));
  };

  // Slide timer with cleanup
  useEffect(() => {
    // Only auto-slide if videos are supported and loaded
    if (!isVideoSupported && isMobile) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % videos.length;
        // Preload next video
        if (videoRefs.current[nextSlide] && !videosLoaded[nextSlide]) {
          videoRefs.current[nextSlide].load();
        }
        return nextSlide;
      });
    }, 3500);

    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [videos.length, isVideoSupported, isMobile, videosLoaded]);

  // Handle video playback
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentSlide) {
        // Handle specific video start time
        if (videos[index] === "/videos/electrical-2.mp4") {
          video.currentTime = 2;
        } else {
          video.currentTime = 0;
        }

        // Play with error handling
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing
            })
            .catch((error) => {
              console.log("Video autoplay prevented:", error);
              // On mobile, videos might not autoplay - this is expected
              if (!isMobile) {
                // Try muted playback
                video.muted = true;
                video.play().catch(() => {
                  console.log("Muted playback also failed");
                });
              }
            });
        }
      } else {
        video.pause();
      }
    });
  }, [currentSlide, videos, isMobile]);

  // User interaction to enable video (for mobile autoplay restrictions)
  const handleUserInteraction = () => {
    videoRefs.current.forEach((video) => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    });
  };

  return (
    <Box
      id="home"
      onClick={handleUserInteraction}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        mt: 0,
        direction: lang === "ar" ? "rtl" : "ltr",
        backgroundColor: "#0a0e27", // Fallback background
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
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              backgroundColor: "#0a0e27",
            }}
          >
            {/* Video element */}
            {(!isMobile || isVideoSupported) && (
              <Box
                component="video"
                src={video}
                ref={(el) => (videoRefs.current[index] = el)}
                autoPlay={index === 0}
                loop
                muted
                playsInline
                preload={index === 0 ? "auto" : "metadata"}
                onLoadedData={() => handleVideoLoad(index)}
                onError={(e) => {
                  console.log(`Video ${index} failed to load:`, e);
                  setVideosLoaded((prev) => ({ ...prev, [index]: false }));
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: videosLoaded[index] ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  display: videosLoaded[index] === false ? "none" : "block",
                }}
              />
            )}

            {/* Fallback image for mobile or failed videos */}
            {(isMobile || videosLoaded[index] === false) && (
              <Box
                component="img"
                src={fallbackImages[index] || "/images/hero-fallback.jpg"}
                alt={`Hero background ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: videosLoaded[index] === false || isMobile ? "block" : "none",
                }}
              />
            )}

            {/* Loading shimmer effect */}
            {!videosLoaded[index] && currentSlide === index && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  animation: "shimmer 2s infinite",
                  "@keyframes shimmer": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                  },
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Dark overlay for better text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
        }}
      />

      {/* Slide indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          gap: 1.5,
        }}
      >
        {videos.map((_, index) => (
          <Box
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            sx={{
              width: currentSlide === index ? 40 : 12,
              height: 12,
              borderRadius: 6,
              backgroundColor:
                currentSlide === index
                  ? "rgba(255, 255, 255, 0.9)"
                  : "rgba(255, 255, 255, 0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              },
            }}
          />
        ))}
      </Box>

      {/* Logo with optimized animation */}
      <Box
        component="img"
        src="/logos/logo.png"
        alt="ARAN Logo"
        loading="eager"
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          width: { xs: 100, md: 150 },
          mt: { xs: 12, md: 15 },
          animation: "moveUpDown 3s ease-in-out infinite",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
          willChange: "transform",
          "@keyframes moveUpDown": {
            "0%, 100%": { transform: "translate(-50%, 0)" },
            "50%": { transform: "translate(-50%, 20px)" },
          },
        }}
      />

      {/* Hero Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          mt: { xs: 15, md: 20 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          sx={{
            color: "white",
            mb: 4,
            fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
            textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)",
            fontWeight: 700,
            lineHeight: 1.3,
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
              transition: "all 0.3s ease",
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
              transition: "all 0.3s ease",
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