"use client";

import { LocationOn } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { COLORS, TYPOGRAPHY, responsive } from "../theme/constants";
import { getFlexDirectionSx, getTextAlignSx } from "../utils/languageHelpers";

const categoryColors = {
  civil: "#e74c3c",
  electrical: "#f39c12",
  mechanical: "#4a9fd5",
  security: "#34495e",
};

const ProjectsSection = ({ lang, translation, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Show 1 card in mobile, 3 in desktop
  const cardsToShow = isMobile ? 1 : 3;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          overflow: "hidden",
        }}
      >
        {projects.map((project, idx) => {
          const actualIndex = (currentIndex + idx) % projects.length;
          const isHovered = hoveredIndex === actualIndex;

          const primaryCategory = project.categories?.[0] || "civil";

          return (
            <Card
              key={actualIndex}
              onMouseEnter={() => setHoveredIndex(actualIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                height: "100%",
                background:
                  "linear-gradient(135deg, rgba(26, 31, 58, 0.9), rgba(15, 20, 40, 0.95))",
                borderRadius: 3,
                border: `2px solid ${
                  isHovered
                    ? categoryColors[primaryCategory]
                    : "rgba(74, 159, 213, 0.2)"
                }`,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                boxShadow: isHovered
                  ? `0 20px 40px ${categoryColors[primaryCategory]}40`
                  : "0 4px 12px rgba(0, 0, 0, 0.3)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${categoryColors[primaryCategory]}, transparent)`,
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.3s ease",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {project.categories?.map((category) => (
                    <Chip
                      key={category}
                      label={
                        category.charAt(0).toUpperCase() + category.slice(1)
                      }
                      size="small"
                      sx={{
                        background: `${categoryColors[category]}20`,
                        color: categoryColors[category],
                        border: `1px solid ${categoryColors[category]}40`,
                        fontWeight: 600,
                        fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Typography
                    sx={{
                      color: COLORS.accent.gold,
                      fontWeight: TYPOGRAPHY.fontWeight.bold,
                      fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
                      lineHeight: 1.3,
                      ...getTextAlignSx(lang),
                      width: "100%",
                    }}
                  >
                    {project.company_name}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                    flex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
                      color: "#fff",
                      mt: 1,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      ...getTextAlignSx(lang),
                      width: "100%",
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: 2,
                    borderTop: "1px solid rgba(74, 159, 213, 0.5)",
                    mt: "auto",
                    ...getFlexDirectionSx(lang),
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ...getFlexDirectionSx(lang),
                    }}
                  >
                    <LocationOn
                      sx={{
                        color: categoryColors[primaryCategory],
                        [lang === "ar" ? "ml" : "mr"]: 1,
                        fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: responsive(TYPOGRAPHY.fontSize["xs"]),
                        fontWeight: TYPOGRAPHY.fontWeight.medium,
                        ...getTextAlignSx(lang),
                      }}
                    >
                      {project.location}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
