"use client";

import { Box, Container, Typography } from "@mui/material";
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  responsive,
} from "./../../theme/constants";
import { useLanguage } from "../LayoutClient";
import ProjectCard from "../../components/ProjectCard";

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
        py: responsive(SPACING.padding["6xl"]),
        backgroundColor: "grey.100",
        minHeight: "100vh",
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
            mb: 2,
          }}
        >
          {translation.projects.title}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: COLORS.primary.black,
            mb: 8,
            fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
          }}
        >
          {translation.projects.subtitle}
        </Typography>

        {/* Grid Layout for Project Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
