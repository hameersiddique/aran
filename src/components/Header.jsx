"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
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
  getFlexDirectionSx,
  getTextAlignSx,
  getPosition,
} from "../utils/languageHelpers";

export default function Header({ lang, setLang, translation }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: translation.nav.home, href: "/" },
    { label: translation.nav.about, href: "/about" },
    { label: translation.nav.services, href: "/services" },
    { label: translation.nav.projects, href: "/projects" },
    { label: translation.nav.gallery, href: "/gallery" },
    { label: translation.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: Z_INDEX.header,
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          borderBottom: `2px solid ${COLORS.border.primary}`,
          px: responsive(SPACING.padding.xs),
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          direction: "ltr",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              borderRadius: BORDER_RADIUS.sm,
              p: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 120,
            }}
          >
            <Box
              component="img"
              src="/logos/logo-full-3.PNG"
              alt="ARAN Logo"
              sx={{
                width: 150,
                height: "auto",
                // filter: "drop-shadow(0 0 12px rgba(255,255,255,0.75))",
              }}
            />
          </Box>
        </Link>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            variant={lang === "en" ? "contained" : "outlined"}
            onClick={() => setLang("en")}
            sx={{
              minWidth: 50,
              backgroundColor: lang === "en" ? "grey.400" : "grey.300",
              borderColor: COLORS.border.white,
              color: COLORS.primary.black,
              "&:hover": {
                backgroundColor: COLORS.primary.white,
                color: COLORS.primary.black,
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
              backgroundColor: lang === "ar" ? "grey.400" : "grey.300",
              borderColor: COLORS.border.white,
              color: COLORS.primary.black,
              "&:hover": {
                backgroundColor: COLORS.primary.white,
                color: COLORS.primary.black,
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
                background: COLORS.primary.dark,
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 380,
            left: "auto",
            right: 0,
            background: COLORS.background.gradient3,
            backdropFilter: blur(40),
            borderLeft: `1px solid ${COLORS.white.opacity06}`,
            boxShadow: SHADOWS.combined.drawer,
            position: "fixed",
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ textDecoration: "none" }}
              onClick={() => setSidebarOpen(false)}
            >
              <ListItem
                button
                sx={{
                  display: "flex",
                  color: COLORS.white.full,
                  py: 2,
                  px: 3,
                  mb: 1,
                  borderRadius: BORDER_RADIUS.md,
                  position: "relative",
                  overflow: "hidden",
                  background: COLORS.background.gradient5,
                  border: `1px solid ${COLORS.white.opacity05}`,
                  backdropFilter: blur(10),
                  transition: TRANSITIONS.allBounce,
                  ...getFlexDirectionSx(lang),
                  "&:hover": {
                    transform:
                      lang === "ar" ? "translateX(12px)" : "translateX(-12px)",
                    background: COLORS.white.opacity04,
                    border: `1px solid ${COLORS.border.primary}`,
                    boxShadow: SHADOWS.combined.card,
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
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
