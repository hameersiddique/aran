"use client";

import { Grid, Box, Container, Typography, Fade } from "@mui/material";
import {
  BORDER_RADIUS,
  COLORS,
  SHADOWS,
  SPACING,
  TRANSITIONS,
  TYPOGRAPHY,
  responsive,
} from "../../theme/constants";
import { getTextAlignSx } from "../../utils/languageHelpers";
import { useLanguage } from "../LayoutClient";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const { lang, translation } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const cardData = [
    {
      title: translation.about.vision.title,
      text: translation.about.vision.text,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🎯",
    },
    {
      title: translation.about.mission.title,
      text: translation.about.mission.text,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🚀",
    },
    {
      title: translation.about.quality_policy.title,
      text: translation.about.quality_policy.text,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "⭐",
    },
    {
      title: translation.about.safety_policy.title,
      text: translation.about.safety_policy.text,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "🦺",
    },
  ];

  return (
    <Box
      sx={{
        py: responsive(SPACING.padding["lg"]),
        backgroundColor: "grey.100",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <Fade in={visible} timeout={1000}>
          <Box
            sx={{
              pt: { xs: 8, md: 12 },
              pb: { xs: 6, md: 8 },
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: COLORS.primary.dark,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
                background: COLORS.background.fontgradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                letterSpacing: "1px",
                textTransform: "uppercase",
                mb: responsive(SPACING.margin["md"]),
              }}
            >
              {translation.about.title}
            </Typography>

            <Typography
              sx={{
                color: COLORS.primary.main,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                ...getTextAlignSx(lang),
              }}
            >
              {translation.about.heading}
            </Typography>
          </Box>
        </Fade>

        {/* Main Content Section */}
        <Fade in={visible} timeout={1200}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 4, lg: 6 },
              mb: { xs: 8, md: 12 },
              alignItems: "center",
            }}
          >
            {/* Text Section */}
            <Box
              sx={{
                flex: { xs: "1", lg: "0 0 55%" },
                animation: "slideInLeft 1s ease-out",
                "@keyframes slideInLeft": {
                  from: { opacity: 0, transform: "translateX(-50px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              {[
                translation.about.paragraph1,
                translation.about.paragraph2,
                translation.about.paragraph3,
              ]
                .filter(Boolean)
                .map((para, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      color: COLORS.primary.black,
                      mb: 2,
                      lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                      fontSize: responsive(TYPOGRAPHY.fontSize.base),
                      ...getTextAlignSx(lang),
                    }}
                  >
                    {para}
                  </Typography>
                ))}

              {/* Stats Section */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 3,
                  mt: 6,
                }}
              >
                {[
                  {
                    number: translation.home.whoWeAre.stats.stat1.number,
                    label: translation.home.whoWeAre.stats.stat1.label,
                  },
                  {
                    number: translation.home.whoWeAre.stats.stat2.number,
                    label: translation.home.whoWeAre.stats.stat2.label,
                  },
                  {
                    number: translation.home.whoWeAre.stats.stat3.number,
                    label: translation.home.whoWeAre.stats.stat3.label,
                  },
                ].map((stat, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      textAlign: "center",
                      p: 2,
                      borderRadius: "16px",
                      background: "rgba(102, 126, 234, 0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        background: "rgba(102, 126, 234, 0.1)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.75rem", md: "2.25rem" },
                        fontWeight: 800,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 0.5,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#718096",
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Image Section */}
            <Box
              sx={{
                flex: { xs: "1", lg: "0 0 45%" },
                position: "relative",
                animation: "slideInRight 1s ease-out",
                "@keyframes slideInRight": {
                  from: { opacity: 0, transform: "translateX(50px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)",
                    zIndex: 1,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover::before": {
                    opacity: 1,
                  },
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
                  alt="Team Meeting"
                  sx={{
                    width: "100%",
                    height: { xs: "300px", md: "500px" },
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Fade>

        {/* Cards Section */}
        <Box sx={{ pb: { xs: 8, md: 12 } }}>
          <Fade in={visible} timeout={1400}>
            <Typography
              sx={{
                textAlign: "center",
                color: COLORS.primary.main,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
              }}
            >
              {translation.about.values.title}
            </Typography>
          </Fade>

          <Fade in={visible} timeout={1600}>
            <Typography
              sx={{
                // fontSize: "1.125rem",
                // textAlign: "center",
                // color: "#718096",
                mb: 8,
                // maxWidth: "600px",
                // mx: "auto",
                textAlign: "center",
                color: COLORS.primary.black,
                fontSize: responsive(TYPOGRAPHY.fontSize["base"]),
              }}
            >
              {translation.about.values.heading}
            </Typography>
          </Fade>

          <Grid
            container
            spacing={4}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gridTemplateRows: { xs: "auto", md: "auto auto" },
              gap: 4,
            }}
          >
            {cardData.map((card, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Fade in={visible} timeout={1800 + idx * 200}>
                  <Box
                    sx={{
                      position: "relative",
                      height: "100%",
                      borderRadius: "24px",
                      background: "white",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "6px",
                        background: card.gradient,
                      },
                    }}
                  >
                    <Box sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "20px",
                          background: card.gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2rem",
                          mb: 3,
                          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                        }}
                      >
                        {card.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#2d3748",
                          mb: 2,
                          ...getTextAlignSx(lang),
                        }}
                      >
                        {card.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "1rem",
                          lineHeight: 1.7,
                          color: "#4a5568",
                          ...getTextAlignSx(lang),
                        }}
                      >
                        {card.text}
                      </Typography>
                    </Box>

                    {/* Decorative Element */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: -30,
                        right: -30,
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        background: card.gradient,
                        opacity: 0.1,
                      }}
                    />
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
