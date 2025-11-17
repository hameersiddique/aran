"use client";

import { LocationOn } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { COLORS, TYPOGRAPHY, responsive } from "../theme/constants";
import { getTextAlignSx } from "../utils/languageHelpers";

const ProjectsSection = ({ lang, translation, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, p: 1 }}>
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

          return (
            <Card
              key={actualIndex}
              onMouseEnter={() => setHoveredIndex(actualIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                height: "100%",
                background: "#ffffff",
                borderRadius: 3,
                border: "1px solid rgba(74, 159, 213, 0.15)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                direction: lang === "ar" ? "rtl" : "ltr",
                transform: isHovered
                  ? "translateY(-8px) scale(1.02)"
                  : "translateY(0)",
                boxShadow: isHovered
                  ? "0 20px 40px rgba(74, 159, 213, 0.25)"
                  : "0 4px 20px rgba(0, 0, 0, 0.08)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
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
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Company Name with Badge Style */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    pb: 2,
                    borderBottom: "2px solid rgba(74, 159, 213, 0.1)",
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 24,
                      background:
                        "linear-gradient(180deg, #4a9fd5 0%, #3b9ac7 100%)",
                      borderRadius: 1,
                      flexShrink: 0,
                      [lang === "ar" ? "ml" : "mr"]: 2,
                      transition: "height 0.3s ease",
                      ...(isHovered && { height: 32 }),
                    }}
                  />
                  <Typography
                    sx={{
                      color: COLORS.primary.black,
                      fontWeight: TYPOGRAPHY.fontWeight.bold,
                      fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                      ...getTextAlignSx(lang),
                    }}
                  >
                    {project.company_name}
                  </Typography>
                </Box>

                {/* Description */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 3,
                    flex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
                      color: "grey.600",
                      lineHeight: 1.7,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      letterSpacing: "0.01em",
                      ...getTextAlignSx(lang),
                      width: "100%",
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Location Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: 3,
                    mt: "auto",
                    borderTop: "1px solid rgba(74, 159, 213, 0.12)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      padding: "8px 16px",
                      background: isHovered
                        ? "rgba(74, 159, 213, 0.1)"
                        : "rgba(74, 159, 213, 0.05)",
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <LocationOn
                      sx={{
                        color: "#ef4444",
                        fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
                        transition: "transform 0.3s ease",
                        ...(isHovered && { transform: "scale(1.1)" }),
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#1a1a1a",
                        fontSize: responsive(TYPOGRAPHY.fontSize["xs"]),
                        fontWeight: TYPOGRAPHY.fontWeight.semibold,
                        ...getTextAlignSx(lang),
                      }}
                    >
                      {project.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Decorative Corner Element */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    [lang === "ar" ? "left" : "right"]: 0,
                    width: 60,
                    height: 60,
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(74, 159, 213, 0.08) 50%)",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                />
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectsSection;