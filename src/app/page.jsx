"use client";

import {
  KeyboardArrowUp as ArrowUpIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Drawer,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import ClientsHoneyComb from "../components/ClientsSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import ServiceCard from "../components/ServiceCard";
import { translations } from "../i18n/config";
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
import {
  getTextAlign,
  getFlexDirection,
  getDirection,
  getTranslateX,
  getPosition,
  getTextAlignSx,
  getFlexDirectionSx,
  getDirectionSx,
} from "../utils/languageHelpers";

const ARANWebsite = () => {
  const [lang, setLang] = useState("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const translation = translations[lang];

  const videos = [
    "../assets/civil.mp4",
    "/assets/electrical.mp4",
    "/assets/mechanical.mp4",
    "/assets//security.mp4",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [videos.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = window.innerHeight * 0.05; // 5% of viewport height
          const elementPosition =
            targetEl.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "48396165-b2ef-4dd2-ad01-1c98128ba88f");
    Objectranslation.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: translation.contact.notifications.success,
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSnackbar({
          open: true,
          message: translation.contact.notifications.error,
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: translation.contact.notifications.error,
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { label: translation.nav.home, href: "#home" },
    { label: translation.nav.services, href: "#services" },
    { label: translation.nav.projects, href: "#projects" },
    { label: translation.nav.clients, href: "#clients" },
    { label: translation.nav.about, href: "#about" },
    { label: translation.nav.contact, href: "#contact" },
  ];

  const services = [
    {
      icon: "👮",
      title: translation.services.security.title,
      description: translation.services.security.description,
    },
    {
      icon: "🏗️",
      title: translation.services.civil.title,
      description: translation.services.civil.description,
    },
    {
      icon: "⚡",
      title: translation.services.electrical.title,
      description: translation.services.electrical.description,
    },
    {
      icon: "⚙️",
      title: translation.services.mechanical.title,
      description: translation.services.mechanical.description,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.targetranslation.name]: e.targetranslation.value,
    });
  };

  const projectObj = translations[lang].projects;

  const projects = Object.keys(projectObj)
    .filter((key) => key.startsWith("project_"))
    .map((key) => ({
      id: key,
      ...projectObj[key],
    }));

  return (
    <Box>
      {/* Fixed Header with Logo and Language/Menu */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: Z_INDEX.header,
          background: COLORS.overlay.dark,
          backdropFilter: blur(20),
          borderBottom: `2px solid ${COLORS.border.primary}`,
          px: responsive(SPACING.padding.xs),
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          direction: "ltr",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            borderRadius: BORDER_RADIUS.sm,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 120,
          }}
        >
          <Box
            component="img"
            src="/assets/logo-2.png"
            alt="ARAN Logo"
            sx={{
              width: 100,
              height: "auto",
            }}
          />
        </Box>

        {/* Language Switcher and Menu Button */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            variant={lang === "en" ? "contained" : "outlined"}
            onClick={() => setLang("en")}
            sx={{
              minWidth: 50,
              bgcolor: lang === "en" ? COLORS.white.opacity25 : "transparent",
              borderColor: COLORS.border.white,
              color: COLORS.white.full,
              "&:hover": {
                bgcolor: COLORS.white.opacity35,
              },
              fontSize: responsive(TYPOGRAPHY.fontSize["2xs"]),
            }}
          >
            EN
          </Button>
          <Button
            variant={lang === "ar" ? "contained" : "outlined"}
            onClick={() => setLang("ar")}
            sx={{
              minWidth: 50,
              bgcolor: lang === "ar" ? COLORS.white.opacity25 : "transparent",
              borderColor: COLORS.border.white,
              color: COLORS.white.full,
              "&:hover": {
                bgcolor: COLORS.white.opacity35,
              },
              fontSize: responsive(TYPOGRAPHY.fontSize["2xs"]),
            }}
          >
            AR
          </Button>

          <IconButton
            onClick={() => setSidebarOpen(true)}
            sx={{
              color: COLORS.white.full,
              ml: 3,
              background: COLORS.primary.light,
              "&:hover": {
                background: COLORS.border.primaryHover,
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 380,
            left: "auto",
            right: 0,
            background: COLORS.background.gradient5,
            backdropFilter: blur(40),
            borderLeft: `1px solid ${COLORS.white.opacity06}`,
            boxShadow: SHADOWS.combined.drawer,
            position: "fixed",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              background: COLORS.radial.primary,
              pointerEvents: "none",
            },
          },
        }}
      >
        <Box
          sx={{
            p: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: COLORS.white.opacity40,
                fontSize: responsive(TYPOGRAPHY.fontSize.xs),
                letterSpacing: TYPOGRAPHY.letterSpacing.wide,
                textTransform: "uppercase",
                fontWeight: TYPOGRAPHY.fontWeight.medium,
              }}
            >
              Navigation
            </Typography>
            <Typography
              sx={{
                color: COLORS.white.full,
                fontWeight: TYPOGRAPHY.fontWeight.light,
                fontSize: responsive(TYPOGRAPHY.fontSize.xl),
                letterSpacing: TYPOGRAPHY.letterSpacing.tight,
                mt: 0.5,
              }}
            >
              Explore
            </Typography>
          </Box>
          <IconButton
            onClick={() => setSidebarOpen(false)}
            sx={{
              color: COLORS.white.opacity70,
              width: 44,
              height: 44,
              border: `1px solid ${COLORS.white.opacity08}`,
              background: COLORS.white.opacity02,
              backdropFilter: blur(10),
              "&:hover": {
                background: COLORS.white.opacity05,
                borderColor: COLORS.white.opacity15,
                color: COLORS.white.full,
                transform: "rotate(90deg) scale(1.05)",
              },
              transition: TRANSITIONS.allBounce,
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <List sx={{ px: 3, pt: 2 }}>
          {navItems.map((item, index) => (
            <ListItem
              key={item.label}
              button
              component="a"
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              sx={{
                display: "flex",
                color: COLORS.white.full,
                py: 2,
                px: 3,
                mb: 1,
                borderRadius: BORDER_RADIUS.md,
                position: "relative",
                overflow: "hidden",
                background: COLORS.white.opacity02,
                border: `1px solid ${COLORS.white.opacity05}`,
                backdropFilter: blur(10),
                transition: TRANSITIONS.allBounce,
                ...getFlexDirectionSx(lang),
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  width: "3px",
                  height: "100%",
                  background: `linear-gradient(180deg, transparent, ${COLORS.primary.main}, transparent)`,
                  opacity: 0,
                  transition: TRANSITIONS.opacity,
                  ...getPosition(lang, "left"),
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  height: "100%",
                  background: COLORS.radial.primaryStrong,
                  transform: "translate(-50%, -50%) scale(0)",
                  transition: TRANSITIONS.transformOpacity,
                  borderRadius: BORDER_RADIUS.circle,
                },
                "&:hover": {
                  transform:
                    lang === "ar" ? "translateX(12px)" : "translateX(-12px)",
                  background: COLORS.white.opacity04,
                  border: `1px solid ${COLORS.border.primary}`,
                  boxShadow: SHADOWS.combined.card,
                  "&::before": {
                    opacity: 1,
                  },
                  "&::after": {
                    transform: "translate(-50%, -50%) scale(2)",
                  },
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  ...getTextAlignSx(lang),
                  "& .MuiListItemText-primary": {
                    ...getTextAlignSx(lang),
                  },
                }}
              />
              <Box
                sx={{
                  width: 28,
                  height: 8,
                  borderRadius: BORDER_RADIUS.lg,
                  background: COLORS.white.opacity03,
                  border: `1px solid ${COLORS.white.opacity08}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderTop: `1.5px solid ${COLORS.white.opacity50}`,
                    borderRight: `1.5px solid ${COLORS.white.opacity50}`,
                    transform:
                      lang === "ar" ? "rotate(-135deg)" : "rotate(45deg)",
                  }}
                />
              </Box>
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 4,
            background: COLORS.overlay.gradient,
            backdropFilter: blur(20),
          }}
        >
          <Box
            sx={{
              height: 1,
              background: `linear-gradient(90deg, transparent, ${COLORS.white.opacity08}, transparent)`,
              mb: 3,
            }}
          />
        </Box>
      </Drawer>

      {/* Hero Section */}
      <Hero
        lang={lang}
        translation={translation}
        videos={videos}
        currentSlide={currentSlide}
      />

      {/* Services Section */}
      <Box
        id="services"
        sx={{
          py: responsive(SPACING.padding.xl),
          background: COLORS.background.gradient1,
          ...getDirectionSx(lang),
        }}
      >
        <Box sx={{ px: responsive(SPACING.padding.lg) }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: TYPOGRAPHY.fontWeight.black,
              mb: 8,
              fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
              background: COLORS.primary.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {translation.services.title}
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
          >
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  justifyContent: { md: "space-between" },
                }}
                key={index}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box id="projects">
        <ProjectsSection
          lang={lang}
          translation={translation}
          projects={projects}
        />
      </Box>

      {/* Clients Section */}
      <Box id="clients">
        <ClientsHoneyComb
          title={translation.clients.title}
          clients={[
            { logo: "/assets/unicoil-logo.jpg" },
            { logo: "/assets/alayuni-logo.jpg" },
            { logo: "/assets/tamimi-logo.jpg" },
          ]}
        />
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: responsive(SPACING.padding.xl),
          background: COLORS.background.gradient2,
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: TYPOGRAPHY.fontWeight.black,
              fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
              mb: 8,
              background: COLORS.primary.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {translation.about.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 0,
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Box sx={{ flex: { xs: "1", md: "0 0 60%" }, pr: 5, minWidth: 0 }}>
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                  mb: 3,
                  fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                  background: COLORS.primary.gradient,
                  WebkitBackgroundClip: "text",
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.heading}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.white.opacity80,
                  mb: 2,
                  lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.paragraph1}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.white.opacity80,
                  mb: 2,
                  lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.paragraph2}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.white.opacity80,
                  mb: 2,
                  lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.paragraph3}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: "1", md: "0 0 40%" },
                minWidth: 0,
                overflow: "hidden",
                borderRadius: BORDER_RADIUS.md,
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
                alt="Team Meeting"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: { xs: 200, md: 300 },
                  objectFit: "cover",
                  borderRadius: BORDER_RADIUS.md,
                  border: `3px solid ${COLORS.border.cyanStrong}`,
                  boxShadow: SHADOWS.md,
                  transition: TRANSITIONS.all,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: SHADOWS.lg,
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          background: COLORS.background.gradient4,
          py: responsive(SPACING.padding.xl),
          px: responsive(SPACING.padding.lg),
          color: COLORS.white.full,
          ...getDirectionSx(lang),
        }}
      >
        {/* Header */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: TYPOGRAPHY.fontWeight.black,
            fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
            mb: 8,
            background: COLORS.primary.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {translation.contact.title}
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{
            maxWidth: 800,
            mx: "auto",
            p: responsive(SPACING.padding.md),
            borderRadius: BORDER_RADIUS.md,
            background: COLORS.white.opacity05,
            border: `2px solid ${COLORS.border.primaryHover}`,
            boxShadow: `0 0 30px ${COLORS.shadow.primary}`,
            ...getDirectionSx(lang),
            "& .MuiInputLabel-root": {
              color: COLORS.primary.main,
              [lang === "ar" ? "right" : "left"]: 0,
              transformOrigin: lang === "ar" ? "top right" : "top left",
            },
            "& .MuiOutlinedInput-input": {
              color: COLORS.white.full,
              ...getTextAlignSx(lang),
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: COLORS.border.primaryHover,
              textAlign: getTextAlign(lang),
            },
            "& .MuiOutlinedInput-root": {
              ...getDirectionSx(lang),
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: COLORS.accent.cyan,
              },
            },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ width: "100%" }}>
              <Label
                text={translation.contact.form.namePlaceholder}
                name="name"
                lang={lang}
              />
              <TextField
                fullWidth
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                placeholder={translation.contact.form.namePlaceholder}
                inputProps={{
                  dir: getDirection(lang),
                  style: { textAlign: getTextAlign(lang) },
                }}
                InputProps={{
                  sx: {
                    ...getDirectionSx(lang),
                    "& input": {
                      ...getTextAlignSx(lang),
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sx={{ width: "100%" }}>
              <Label
                text={translation.contact.form.email}
                name="email"
                lang={lang}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                placeholder={translation.contact.form.email}
                inputProps={{
                  dir: getDirection(lang),
                  style: { textAlign: getTextAlign(lang) },
                }}
                InputProps={{
                  sx: {
                    ...getDirectionSx(lang),
                    "& input": {
                      ...getTextAlignSx(lang),
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sx={{ width: "100%" }}>
              <Label
                text={translation.contact.form.phone}
                name="phone"
                lang={lang}
              />
              <TextField
                fullWidth
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                variant="outlined"
                placeholder={translation.contact.form.phonePlaceholder}
                inputProps={{
                  dir: getDirection(lang),
                  style: { textAlign: getTextAlign(lang) },
                }}
                InputProps={{
                  sx: {
                    ...getDirectionSx(lang),
                    "& input": {
                      ...getTextAlignSx(lang),
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sx={{ width: "100%" }}>
              <Label
                text={translation.contact.form.service}
                name="service"
                lang={lang}
              />
              <TextField
                fullWidth
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                variant="outlined"
                placeholder={translation.contact.form.servicePlaceholder}
                inputProps={{
                  dir: getDirection(lang),
                  style: { textAlign: getTextAlign(lang) },
                }}
                InputProps={{
                  sx: {
                    ...getDirectionSx(lang),
                    "& input": {
                      ...getTextAlignSx(lang),
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sx={{ width: "100%" }}>
              <Label
                text={translation.contact.form.message}
                name="message"
                lang={lang}
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                variant="outlined"
                multiline
                rows={5}
                placeholder={translation.contact.form.messagePlaceholder}
                inputProps={{
                  dir: getDirection(lang),
                  style: { textAlign: getTextAlign(lang) },
                }}
                InputProps={{
                  sx: {
                    ...getDirectionSx(lang),
                    "& textarea": {
                      ...getTextAlignSx(lang),
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  {...(lang === "ar"
                    ? { startIcon: <SendIcon /> }
                    : { endIcon: <SendIcon /> })}
                  sx={{
                    background: COLORS.accent.gradient,
                    color: COLORS.white.full,
                    fontWeight: TYPOGRAPHY.fontWeight.semibold,
                    px: 4,
                    py: 1.5,
                    borderRadius: BORDER_RADIUS.full,
                    transition: TRANSITIONS.all,
                    ...getFlexDirectionSx(lang),
                    "&:hover": {
                      transform: "translateY(-2px)",
                      background: COLORS.accent.gradientReverse,
                      boxShadow: `0 0 15px ${COLORS.shadow.cyan}`,
                    },
                  }}
                >
                  {isSubmitting
                    ? translation.contact.form.sending
                    : translation.contact.form.submit}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          background: COLORS.background.gradient3,
          color: COLORS.white.full,
          py: 6,
          borderTop: `2px solid ${COLORS.border.cyan}`,
        }}
      >
        <Container>
          {/* === TOP SECTION === */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: getTextAlign(lang) },
              gap: { xs: 4, md: 8 },
              mb: 4,
            }}
          >
            {/* === Column 1 === */}
            <Box sx={{ flex: 1, maxWidth: "40%" }}>
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  mb: 2,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                }}
              >
                {translation.footer.company.title}
              </Typography>
              <Typography sx={{ color: COLORS.white.opacity70, mb: 2 }}>
                {translation.common.tagline}
              </Typography>

              {/* LOGO */}
              <Box
                component="img"
                src="/assets/logo.png"
                alt="ARAN Consultancy Logo"
                sx={{
                  width: 120,
                  height: "auto",
                  mt: 2,
                  opacity: 0.9,
                  filter: "brightness(0.9)",
                  display: "block",
                  mx: "auto",
                }}
              />
            </Box>

            {/* === Column 2 === */}
            <Box sx={{ flex: 1, maxWidth: "20%" }}>
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  mb: 2,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                }}
              >
                {translation.footer.quickLinks.title}
              </Typography>
              {navItems.slice(1).map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    display: "block",
                    color: COLORS.white.opacity70,
                    textDecoration: "none",
                    mb: 1,
                    transition: TRANSITIONS.all,
                    "&:hover": {
                      color: COLORS.primary.main,
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* === Column 3 === */}
            <Box sx={{ flex: 1, maxWidth: "40%" }}>
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  mb: 2,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                }}
              >
                {translation.footer.contactInfo.title}
              </Typography>
              <Typography sx={{ color: COLORS.white.opacity70, mb: 1 }}>
                {translation.footer.contactInfo.location}
              </Typography>
              <Typography sx={{ color: COLORS.white.opacity70, mb: 1 }}>
                {translation.footer.contactInfo.phone}
              </Typography>
              <Typography sx={{ color: COLORS.white.opacity70 }}>
                {translation.footer.contactInfo.email}
              </Typography>
            </Box>
          </Box>

          {/* === BOTTOM COPYRIGHT === */}
          <Box
            sx={{
              borderTop: `1px solid ${COLORS.border.cyan}`,
              pt: 3,
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: COLORS.white.opacity50 }}>
              {translation.footer.copyright}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Fab
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 35,
            right: 35,
            background: COLORS.white.opacity12,
            backdropFilter: blur(12),
            border: `1px solid ${COLORS.white.opacity35}`,
            color: COLORS.white.full,
            zIndex: Z_INDEX.fab,
            "&:hover": {
              background: COLORS.white.opacity22,
              transform: "translateY(-4px)",
            },
          }}
        >
          <ArrowUpIcon />
        </Fab>
      )}

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            background: COLORS.overlay.dark,
            backdropFilter: blur(8),
            color: COLORS.white.full,
            border: `1px solid ${COLORS.white.opacity15}`,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ARANWebsite;

const Label = ({ text, name, lang }) => {
  return (
    <label
      htmlFor={name}
      style={{
        display: "block",
        marginBottom: "0.8rem",
        color: COLORS.accent.gold,
        fontWeight: TYPOGRAPHY.fontWeight.bold,
        fontSize: responsive(TYPOGRAPHY.fontSize["2xs"]),
        textAlign: getTextAlign(lang), // Now dynamic based on language
      }}
    >
      {text}
    </label>
  );
};
