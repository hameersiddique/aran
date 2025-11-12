"use client";

import { Grid, Box, Container, Typography } from "@mui/material";
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

export default function AboutPage() {
  const { lang, translation } = useLanguage();

  return (
    <Box
      sx={{
        py: responsive(SPACING.padding["6xl"]),
        background: COLORS.background.gradient2,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: TYPOGRAPHY.fontWeight.black,
            fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
            color: COLORS.primary.main,
            mb: 8,
          }}
        >
          {translation.about.title}
        </Typography>

        {/* Intro Section: Text + Image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Text Section */}
          <Box sx={{ flex: { xs: "1", md: "0 0 60%" }, minWidth: 0 }}>
            <Typography
              sx={{
                color: COLORS.accent.gold,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                mb: 2,
                fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                ...getTextAlignSx(lang),
              }}
            >
              {translation.about.heading}
            </Typography>

            {[
              translation.about.paragraph1,
              translation.about.paragraph2,
              translation.about.paragraph3,
            ].map((para, idx) => (
              <Typography
                key={idx}
                sx={{
                  color: COLORS.white.opacity80,
                  mb: 2,
                  lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {para}
              </Typography>
            ))}
          </Box>

          {/* Image Section */}
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

        {/* Vision, Mission, Quality & Safety Section */}
        <Box sx={{ mt: 8 }}>
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
            {/* VISION */}
            <Box
              sx={{
                p: 3,
                borderRadius: BORDER_RADIUS.md,
                background: COLORS.white.opacity05,
                border: `2px solid ${COLORS.border.primaryHover}`,
              }}
            >
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                  mb: 2,
                  fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.vision.title}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.white.opacity80,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.vision.text}
              </Typography>
            </Box>

            {/* MISSION */}
            <Box
              sx={{
                p: 3,
                borderRadius: BORDER_RADIUS.md,
                background: COLORS.white.opacity05,
                border: `2px solid ${COLORS.border.primaryHover}`,
              }}
            >
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                  mb: 2,
                  fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.mission.title}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.white.opacity80,
                  lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.mission.text}
              </Typography>
            </Box>

            {/* QUALITY POLICY */}
            <Box
              sx={{
                p: 3,
                border: 1,
                borderRadius: BORDER_RADIUS.md,
                background: COLORS.white.opacity05,
                border: `2px solid ${COLORS.border.primaryHover}`,
              }}
            >
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                  mb: 2,
                  fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.quality_policy.title}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.white.opacity80,
                  lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.quality_policy.text}
              </Typography>
            </Box>

            {/* SAFETY POLICY */}
            <Box
              sx={{
                p: 3,
                border: 1,
                borderRadius: BORDER_RADIUS.md,
                background: COLORS.white.opacity05,
                border: `2px solid ${COLORS.border.primaryHover}`,
              }}
            >
              <Typography
                sx={{
                  color: COLORS.accent.gold,
                  fontWeight: TYPOGRAPHY.fontWeight.bold,
                  mb: 2,
                  fontSize: responsive(TYPOGRAPHY.fontSize["xl"]),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.safety_policy.title}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.white.opacity80,
                  lineHeight: TYPOGRAPHY.lineHeight.relaxed,
                  fontSize: responsive(TYPOGRAPHY.fontSize.sm),
                  ...getTextAlignSx(lang),
                }}
              >
                {translation.about.safety_policy.text}
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
