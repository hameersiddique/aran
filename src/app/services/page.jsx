"use client";

import { Box, Grid, Typography } from "@mui/material";
import ServiceCard from "../../components/ServiceCard";
import { useLanguage } from "../LayoutClient";
import { COLORS, TYPOGRAPHY, SPACING, responsive } from "../../theme/constants";
import { getDirectionSx } from "../../utils/languageHelpers";

export default function ServicesPage() {
  const { lang, translation } = useLanguage();

  const services = [
    // {
    //   icon: "👮",
    //   title: translation.services.security.title,
    //   description: translation.services.security.description,
    // },
    {
      icon: "🏗️",
      title: translation.services.civil.title,
      description: translation.services.civil.description,
    },
    {
      icon: "⚙️",
      title: translation.services.mechanical.title,
      description: translation.services.mechanical.description,
    },
    {
      icon: "⚡",
      title: translation.services.electrical.title,
      description: translation.services.electrical.description,
    },
  ];

  return (
    <Box
      sx={{
        py: responsive(SPACING.padding["6xl"]),
        background: COLORS.background.gradient2,
        minHeight: "100vh",
        ...getDirectionSx(lang),
      }}
    >
      <Box sx={{ px: responsive(SPACING.padding.lg) }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: TYPOGRAPHY.fontWeight.black,
            fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
            color: COLORS.primary.main,
            mb: 8,
          }}
        >
          {translation.services.title}
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: 2,
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1, // equal width for all
                  minWidth: { xs: "100%", md: "0" },
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
