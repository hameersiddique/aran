"use client";

import { Box, Grid, Typography } from "@mui/material";
import ServiceCard from "../../components/ServiceCard";
import { useLanguage } from "../LayoutClient";
import { COLORS, TYPOGRAPHY, SPACING, responsive } from "../../theme/constants";
import { getDirectionSx } from "../../utils/languageHelpers";
import { Building2, Settings, Zap } from "lucide-react";

export default function ServicesPage() {
  const { lang, translation } = useLanguage();

  const services = [
    // {
    //   icon: "👮",
    //   title: translation.services.security.title,
    //   description: translation.services.security.description,
    // },
    {
      icon: Building2,
      title: translation.services.civil.title,
      description: translation.services.civil.description,
      images: [
        '/gallery/4.jpg',
        '/gallery/5.jpg',
        "https://images.unsplash.com/photo-1652303713917-2666b8bee507?w=800&q=80",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        // "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80",
        "https://images.unsplash.com/photo-1684497404598-6e844dff9cde?w=800&q=80",
      ],
    },
    {
      icon: Settings,
      title: translation.services.mechanical.title,
      description: translation.services.mechanical.description,
      images: [
        '/gallery/15.jpg',
        '/gallery/16.jpg',
        "https://images.pexels.com/photos/239419/pexels-photo-239419.jpeg",
        // "https://images.pexels.com/photos/191738/pexels-photo-191738.jpeg",
        "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
        // "https://images.pexels.com/photos/416339/pexels-photo-416339.jpeg",
      ],
    },
    {
      icon: Zap,
      title: translation.services.electrical.title,
      description: translation.services.electrical.description,
      images: [
        '/gallery/20.jpg',
        '/gallery/21.jpg',
        '/gallery/14.jpg',
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
        // "https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg",
        // "https://images.unsplash.com/photo-1625123817473-eede237e097b?w=800&q=80",
        // "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: responsive(SPACING.padding["6xl"]),
        backgroundColor: "grey.100",
        minHeight: "100vh",
        ...getDirectionSx(lang),
      }}
    >
      <Box sx={{ px: responsive(SPACING.padding.lg) }}>
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
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  images={service.images}
                  index={index}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
