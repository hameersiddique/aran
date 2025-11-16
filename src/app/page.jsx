"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
} from "@mui/material";
import Hero from "../components/Hero";
import {
  CheckCircle2,
  Users2,
  Zap,
  Award,
  TrendingUp,
  Heart,
  Wrench,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Plane,
  Droplets,
  Target,
  Handshake,
  Shield,
  Building,
  Home,
  Briefcase,
  School,
  UserCheck,
  Hospital,
} from "lucide-react";
import { useLanguage } from "./LayoutClient";
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  responsive,
  SHADOWS,
} from "../theme/constants";
import ClientsHoneyComb from "../components/ClientsSection";
import {
  getTextAlignSx,
  getFlexDirectionSx,
  getDirection,
  getDirectionSx,
} from "../utils/languageHelpers";

export default function PremiumHomePage() {
  const { lang, translation } = useLanguage();
  const [hoveredReason, setHoveredReason] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const videos = [
    "/media/civil.mp4",
    "/media/electrical.mp4",
    "/media/mechanical.mp4",
    // "/media/security.mp4",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [videos.length]);

  const whyChooseUsIcons = [
    <Target key="1" size={40} strokeWidth={2} />,
    <Handshake key="2" size={40} strokeWidth={2} />,
    <Users2 key="3" size={40} strokeWidth={2} />,
    <Zap key="4" size={40} strokeWidth={2} />,
    <Heart key="5" size={40} strokeWidth={2} />,
    <TrendingUp key="6" size={40} strokeWidth={2} />,
  ];

  const ourServicesIcons = [
    <Wrench key="1" size={44} strokeWidth={1.5} />,
    <Zap key="2" size={44} strokeWidth={1.5} />,
    <Droplets key="3" size={44} strokeWidth={1.5} />,
    <Building2 key="4" size={44} strokeWidth={1.5} />,
    <UserCheck key="5" size={44} strokeWidth={1.5} />,
  ];

  const industriesIcons = [
    <Building key="1" size={36} strokeWidth={1.5} />,
    <Home key="2" size={36} strokeWidth={1.5} />,
    <Factory key="3" size={36} strokeWidth={1.5} />,
    <Hospital key="4" size={36} strokeWidth={1.5} />,
    <Briefcase key="5" size={36} strokeWidth={1.5} />,
    <School key="6" size={36} strokeWidth={1.5} />,
    <Plane key="7" size={36} strokeWidth={1.5} />,
  ];

  return (
    <Box sx={{ pt: 0, direction: getDirection(lang) }}>
      <Hero
        lang={lang}
        translation={translation}
        videos={videos}
        currentSlide={currentSlide}
      />

      {/* Who We Are Section */}
      <Box
        sx={{
          py: responsive(SPACING.padding["xl"]),
          background: COLORS.background.white,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
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
              }}
            >
              {translation.home.whoWeAre.title}
            </Typography>

            <Typography
              sx={{
                color: "grey.600",
                fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
              }}
            >
              {translation.home.whoWeAre.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={5} alignItems="center">
            {/* Left Side - Enhanced Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                {/* Main Description Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    borderRadius: "24px",
                    background: "white",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                    border: `1px solid ${COLORS.primary.main}10`,
                    mb: 4,
                    position: "relative",
                    overflow: "hidden",
                    ...getTextAlignSx(lang),
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      ...(lang === "ar" ? { right: 0 } : { left: 0 }),
                      width: "100%",
                      height: "4px",
                      background: `linear-gradient(${
                        lang === "ar" ? "-90deg" : "90deg"
                      }, ${COLORS.primary.main} 0%, ${
                        COLORS.primary.light
                      } 100%)`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: COLORS.primary.dark,
                      fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
                      mb: 3,
                      "& strong": {
                        color: COLORS.primary.main,
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                      },
                    }}
                  >
                    {translation.home.whoWeAre.paragraph1}
                  </Typography>
                  <Typography
                    sx={{
                      color: COLORS.primary.dark,
                      fontSize: responsive(TYPOGRAPHY.fontSize["base"]),
                    }}
                  >
                    {translation.home.whoWeAre.paragraph2}
                  </Typography>
                </Paper>

                {/* Promise Highlight Box */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    p: 4,
                    borderRadius: "20px",
                    background: `linear-gradient(135deg, ${COLORS.primary.main} 0%, ${COLORS.primary.dark} 100%)`,
                    boxShadow: `0 15px 40px ${COLORS.primary.main}40`,
                    position: "relative",
                    overflow: "hidden",
                    direction: lang === "ar" ? "rtl" : "ltr",
                    flexDirection: "row",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-50%",
                      ...(lang === "ar" ? { left: "-50%" } : { right: "-50%" }),
                      width: "200px",
                      height: "200px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "70px",
                      height: "70px",
                      borderRadius: "16px",
                      bgcolor: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                      flexShrink: 0,
                    }}
                  >
                    <Handshake size={36} strokeWidth={2.5} color="white" />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      textAlign: lang === "ar" ? "right" : "left",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: responsive(TYPOGRAPHY.fontSize["xs"]),
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        mb: 0.5,
                        opacity: 0.9,
                      }}
                    >
                      {translation.home.whoWeAre.promise.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        lineHeight: 1.5,
                      }}
                    >
                      {translation.home.whoWeAre.promise.paragraph1}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Stats Bar */}
          <Box
            sx={{
              mt: 8,
              p: 5,
              borderRadius: "24px",
              background: "white",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              border: `1px solid ${COLORS.primary.main}10`,
            }}
          >
            <Grid
              container
              spacing={{ xs: 4, md: 10, lg: 20 }}
              justifyContent="center"
              alignItems="center"
            >
              {[
                {
                  icon: <Award size={36} />,
                  value: translation.home.whoWeAre.stats.stat1.number,
                  label: translation.home.whoWeAre.stats.stat1.label,
                },
                {
                  icon: <Users2 size={36} />,
                  value: translation.home.whoWeAre.stats.stat2.number,
                  label: translation.home.whoWeAre.stats.stat2.label,
                },
                {
                  icon: <Building2 size={36} />,
                  value: translation.home.whoWeAre.stats.stat3.number,
                  label: translation.home.whoWeAre.stats.stat3.label,
                },
                {
                  icon: <TrendingUp size={36} />,
                  value: translation.home.whoWeAre.stats.stat4.number,
                  label: translation.home.whoWeAre.stats.stat4.label,
                },
              ].map((stat, index) => (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  md={3}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      width: "100%",
                      maxWidth: "200px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        "& .stat-icon": {
                          transform: "rotateY(360deg)",
                          background: COLORS.primary.main,
                          color: "white",
                        },
                      },
                    }}
                  >
                    <Box
                      className="stat-icon"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "64px",
                        height: "64px",
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${COLORS.primary.main}12 0%, ${COLORS.primary.light}18 100%)`,
                        color: COLORS.primary.main,
                        mb: 2,
                        transition: "all 0.6s ease",
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      sx={{
                        color: COLORS.primary.dark,
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.primary.dark,
                        fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
                        opacity: 0.8,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: responsive(SPACING.padding["xl"]),
          backgroundColor: "grey.100",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            textAlign="center"
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
            }}
          >
            {translation.home.services.title}
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              color: "grey.600",
              fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
              mb: responsive(SPACING.margin["lg"]),
            }}
          >
            {translation.home.services.subtitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {translation.home.services.list.map((service, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(50% - 12px)",
                    md: "0 1 calc(33.333% - 16px)",
                    lg: "0 1 calc(20% - 19.2px)",
                  },
                  minWidth: 0,
                }}
              >
                <Card
                  sx={{
                    p: 6,
                    textAlign: "center",
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: COLORS.primary.main,
                      color: "white",
                      "& .service-icon": { color: "white" },
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{ color: COLORS.primary.main, mb: 2 }}
                  >
                    {ourServicesIcons[index]}
                  </Box>
                  <Typography
                    sx={{
                      color: COLORS.primary.black,
                      fontWeight: TYPOGRAPHY.fontWeight.bold,
                      fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
                    }}
                  >
                    {service.name}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Industries Section */}
      <Box
        sx={{
          py: responsive(SPACING.padding["xl"]),
          px: responsive(SPACING.padding["xs"]),
          backgroundColor: COLORS.background.white,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
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
              }}
            >
              {translation.home.industries.title}
            </Typography>
            <Typography
              sx={{
                color: "grey.600",
                fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
              }}
            >
              {translation.home.industries.subtitle}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 3,
              p: { xs: 3, md: 5 },
              border: "1px solid rgba(74, 159, 213, 0.15)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
              },
            }}
          >
            <Grid container spacing={3} justifyContent="center">
              {translation.home.industries.list.map((industry, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Box
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      p: 3,
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor:
                        hoveredIndex === index
                          ? "#4a9fd5"
                          : "rgba(74, 159, 213, 0.1)",
                      backgroundColor:
                        hoveredIndex === index
                          ? "rgba(74, 159, 213, 0.04)"
                          : "transparent",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 28px rgba(74, 159, 213, 0.2)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
                        transform:
                          hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: lang === "ar" ? "right" : "left",
                        transition:
                          "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        background:
                          hoveredIndex === index
                            ? "linear-gradient(135deg, #4a9fd5 0%, #3b9ac7 100%)"
                            : "rgba(74, 159, 213, 0.08)",
                        color: hoveredIndex === index ? "#ffffff" : "#4a9fd5",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow:
                          hoveredIndex === index
                            ? "0 8px 24px rgba(74, 159, 213, 0.3)"
                            : "none",
                        transform:
                          hoveredIndex === index
                            ? "scale(1.05) rotate(-5deg)"
                            : "scale(1)",
                      }}
                    >
                      {industriesIcons[index]}
                    </Box>

                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        fontSize: { xs: "0.875rem", sm: "0.95rem" },
                        color: hoveredIndex === index ? "#1a1a1a" : "#333333",
                        transition: "color 0.3s ease",
                        lineHeight: 1.4,
                      }}
                    >
                      {industry.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box
        sx={{
          py: responsive(SPACING.padding["xl"]),
          position: "relative",
          overflow: "hidden",
          backgroundColor: "grey.100",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            ...(lang === "ar" ? { left: 0 } : { right: 0 }),
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle, ${COLORS.primary.dark}15 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg">
          <Typography
            textAlign="center"
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
            }}
          >
            {translation.home.whyChooseUs.title}
          </Typography>

          <Typography
            textAlign="center"
            sx={{
              color: "grey.600",
              fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
              mb: responsive(SPACING.margin["lg"]),
            }}
          >
            {translation.home.whyChooseUs.subtitle}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {translation.home.whyChooseUs.reasons.map((reason, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredReason(index)}
                onMouseLeave={() => setHoveredReason(null)}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 3,
                  background: "#ffffff",
                  border: "1px solid rgba(74, 159, 213, 0.15)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "#4a9fd5",
                    boxShadow: "0 20px 40px rgba(74, 159, 213, 0.25)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
                    transform:
                      hoveredReason === index ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: lang === "ar" ? "right" : "left",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg, rgba(74, 159, 213, 0.03), transparent)",
                    opacity: hoveredReason === index ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  },
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 1,
                    ...getTextAlignSx(lang),
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 72,
                      height: 72,
                      borderRadius: 2,
                      background:
                        hoveredReason === index
                          ? "linear-gradient(135deg, #4a9fd5 0%, #3b9ac7 100%)"
                          : "rgba(74, 159, 213, 0.08)",
                      color: hoveredReason === index ? "#ffffff" : "#4a9fd5",
                      mb: 3,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow:
                        hoveredReason === index
                          ? "0 8px 24px rgba(74, 159, 213, 0.3)"
                          : "none",
                      transform:
                        hoveredReason === index
                          ? "scale(1.05) rotate(5deg)"
                          : "scale(1)",
                      alignSelf: lang === "ar" ? "flex-end" : "flex-start",
                    }}
                  >
                    {whyChooseUsIcons[index]}
                  </Box>

                  <Typography
                    sx={{
                      color: "#1a1a1a",
                      fontWeight: TYPOGRAPHY.fontWeight.bold,
                      fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
                      mb: 2,
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {reason.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666666",
                      fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
                      lineHeight: 1.7,
                      letterSpacing: "0.01em",
                      flex: 1,
                    }}
                  >
                    {reason.description}
                  </Typography>

                  <Box
                    sx={{
                      width: hoveredReason === index ? "100%" : "40px",
                      height: "3px",
                      background:
                        "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
                      borderRadius: 2,
                      mt: 3,
                      transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      alignSelf: lang === "ar" ? "flex-end" : "flex-start",
                    }}
                  />
                </CardContent>

                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    ...(lang === "ar" ? { left: 0 } : { right: 0 }),
                    width: 60,
                    height: 60,
                    background:
                      lang === "ar"
                        ? "linear-gradient(225deg, transparent 50%, rgba(74, 159, 213, 0.08) 50%)"
                        : "linear-gradient(135deg, transparent 50%, rgba(74, 159, 213, 0.08) 50%)",
                    opacity: hoveredReason === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                />
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Clients Section */}
      <Box
        sx={{
          py: responsive(SPACING.padding["xl"]),
          backgroundColor: COLORS.background.white,
          direction: 'ltr'
        }}
      >
        <Container maxWidth="lg">
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
            }}
          >
            {translation.home.clients.title}
          </Typography>
          <Typography
            sx={{
              color: "grey.600",
              fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
              textAlign: "center",
              pb: responsive(SPACING.margin["lg"]),
            }}
          >
            {translation.home.clients.subtitle}
          </Typography>
          <ClientsHoneyComb
            clients={[
              { logo: "/clients-logos/1.png" },
              { logo: "/clients-logos/2.png" },
              { logo: "/clients-logos/3.png" },
              { logo: "/clients-logos/4.png" },
              { logo: "/clients-logos/5.png" },
              { logo: "/clients-logos/6.png" },
              { logo: "/clients-logos/7.png" },
              { logo: "/clients-logos/8.png" },
              { logo: "/clients-logos/9.png" },
              { logo: "/clients-logos/10.png" },
              { logo: "/clients-logos/11.png" },
              { logo: "/clients-logos/12.png" },
            ]}
          />
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 12,
          px: 2.5,
          background: `linear-gradient(135deg, ${COLORS.primary.main} 0%, ${COLORS.primary.light} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Circles Animation */}
        <Box
          sx={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-30px)" },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            animation: "float 8s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-30px)" },
            },
          }}
        />

        <Box
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: COLORS.primary.white,
              fontWeight: TYPOGRAPHY.fontWeight.bold,
              fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
              mb: responsive(SPACING.margin["sm"]),
            }}
          >
            {translation.home.cta.title}
          </Typography>

          <Typography
            sx={{
              color: COLORS.primary.white,
              fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
              mb: responsive(SPACING.margin["sm"]),
            }}
          >
            {translation.home.cta.subtitle}
          </Typography>

          <Button
            variant="contained"
            href="/contact"
            sx={{
              backgroundColor: "white",
              color: COLORS.primary.main,
              fontWeight: TYPOGRAPHY.fontWeight.bold,
              fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
              py: responsive(SPACING.margin["xs"]),
              px: responsive(SPACING.margin["md"]),
              borderRadius: "50px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              "&:hover": {
                backgroundColor: "white",
                transform: "translateY(-5px) scale(1.05)",
                boxShadow: "0 15px 50px rgba(0,0,0,0.25)",
              },
            }}
          >
            {translation.home.cta.button}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
