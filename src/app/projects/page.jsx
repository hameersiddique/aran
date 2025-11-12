"use client";

import { Box, Container, Typography } from "@mui/material";
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  responsive,
} from "./../../theme/constants";
import { useLanguage } from "../LayoutClient";
import ProjectsSection from "../../components/ProjectsSection";

export default function ProjectsPage() {
  const { lang, translation } = useLanguage();

  const projectObj = translation.projects;
  const projects = Object.keys(projectObj)
    .filter((key) => key.startsWith("project_"))
    .map((key) => ({
      id: key,
      ...projectObj[key],
    }));

  return (
    <Box
      sx={{
        py: responsive(SPACING.padding['6xl']),
        background: COLORS.background.gradient2,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
            mb: 2,
            color: COLORS.primary.main,
            direction: lang === "ar" ? "rtl" : "ltr",
          }}
        >
          {translation.projects.title}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: COLORS.white.full,
            mb: 8,
            fontSize: responsive(TYPOGRAPHY.fontSize["lg"]),
          }}
        >
          {translation.projects.subtitle}
        </Typography>

        <ProjectsSection
          lang={lang}
          translation={translation}
          projects={projects}
        />
      </Container>
    </Box>
  );
}
