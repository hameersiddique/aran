"use client";

import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import { COLORS, TYPOGRAPHY, TRANSITIONS } from "../theme/constants";
import { getTextAlign, getTextAlignSx } from "../utils/languageHelpers";

export default function Footer({ lang, translation }) {
  const navItems = [
    { label: translation.nav.services, href: "/services" },
    { label: translation.nav.projects, href: "/projects" },
    { label: translation.nav.about, href: "/about" },
    { label: translation.nav.contact, href: "/contact" },
  ];

  return (
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
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "40%" } }}>
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
            <Box
              component="img"
              src="/logos/logo.png"
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

          <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "20%" } }}>
            <Typography
              sx={{
                color: COLORS.accent.gold,
                mb: 2,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
              }}
            >
              {translation.footer.quickLinks.title}
            </Typography>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    display: "block",
                    color: COLORS.white.opacity70,
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
              </Link>
            ))}
          </Box>

          <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "40%" } }}>
            <Typography
              sx={{
                color: COLORS.accent.gold,
                mb: 2,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                textAlign: { xs: "center", md: getTextAlign(lang) },
              }}
            >
              {translation.footer.contactInfo.title}
            </Typography>
            <Typography
              sx={{
                color: COLORS.white.opacity70,
                mb: 1,
                wordBreak: "break-word",
                textAlign: { xs: "center", md: getTextAlign(lang) },
              }}
            >
              {translation.footer.contactInfo.location}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  md: lang === "ar" ? "flex-end" : "flex-start",
                },
                mb: 1,
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: COLORS.white.opacity70,
                  direction: "ltr",
                }}
              >
                {translation.footer.contactInfo.phone}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  md: lang === "ar" ? "flex-end" : "flex-start",
                },
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: COLORS.white.opacity70,
                  wordBreak: "break-all",
                  direction: "ltr",
                }}
              >
                {translation.footer.contactInfo.email}
              </Typography>
            </Box>
          </Box>
        </Box>

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
  );
}
