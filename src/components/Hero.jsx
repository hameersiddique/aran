"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  TRANSITIONS,
  Z_INDEX,
  responsive,
  blur,
} from "../theme/constants";

const Hero = ({ lang, translation, videos, currentSlide }) => {
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
            autoPlay
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
              filter: "brightness(0.4)",
            }}
          />
        ))}
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3))",
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
          top: "10%", // starting position
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          width: { xs: 100, md: 150 },
          mt: 15,
          animation: "moveUpDown 3s ease-in-out infinite",
          "@keyframes moveUpDown": {
            "0%, 100%": { transform: "translate(-50%, 0)" },
            "50%": { transform: "translate(-50%, 20px)" }, // moves down by 20px
          },
        }}
      />

      {/* Hero Content */}
      <Container
        sx={{ position: "relative", zIndex: 2, textAlign: "center", mt: 20 }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
            mb: 4,
            fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),

            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
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
              borderColor: "#ffd700",
              color: "white",
              borderWidth: 2,
              "&:hover": {
                background: "#ffd700",
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
