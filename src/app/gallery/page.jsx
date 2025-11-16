"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  CardMedia,
  Dialog,
  IconButton,
} from "@mui/material";
import {
  Close as CloseIcon,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useState } from "react";
import { COLORS, TYPOGRAPHY, SPACING, responsive } from "../../theme/constants";
import { useLanguage } from "./../LayoutClient";

export default function GalleryPage() {
  const { lang, translation } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectObj = translation.gallery.images;
  const galleryData = Object.keys(projectObj).map((key, index) => ({
    id: key,
    image: `/gallery/${index + 1}.jpg`,
    ...projectObj[key],
  }));

  console.log("galleryData", galleryData);

  const categories = [
    {
      id: "all",
      label: translation.gallery.categories.all,
      count: galleryData.length,
    },
    {
      id: "civil",
      label: translation.gallery.categories.civil,
      count: galleryData.filter(
        (item) =>
          item.category.toLowerCase() ===
          translation.gallery.categories.civil.toLowerCase()
      ).length,
    },
    {
      id: "mechanical",
      label: translation.gallery.categories.mechanical,
      count: galleryData.filter(
        (item) =>
          item.category.toLowerCase() ===
          translation.gallery.categories.mechanical.toLowerCase()
      ).length,
    },
    {
      id: "electrical",
      label: translation.gallery.categories.electrical,
      count: galleryData.filter(
        (item) =>
          item.category.toLowerCase() ===
          translation.gallery.categories.electrical.toLowerCase()
      ).length,
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <Box
      sx={{
        py: responsive(SPACING.padding["6xl"]),
        px: responsive(SPACING.padding["xs"]),
        backgroundColor: "grey.100",
        minHeight: "100vh",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
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
          {translation.gallery.title}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#666666",
            mb: 6,
            fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
          }}
        >
          {translation.gallery.subtitle}
        </Typography>

        {/* Category Filter */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 6,
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category.id}
              label={`${category.label} (${category.count})`}
              onClick={() => setSelectedCategory(category.id)}
              sx={{
                px: 2,
                py: 2.5,
                fontSize: "0.95rem",
                fontWeight: 600,
                borderRadius: 2,
                border: "2px solid",
                borderColor:
                  selectedCategory === category.id
                    ? "#4a9fd5"
                    : "rgba(74, 159, 213, 0.2)",
                backgroundColor:
                  selectedCategory === category.id ? "#4a9fd5" : "#ffffff",
                color: selectedCategory === category.id ? "#ffffff" : "#1a1a1a",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                boxShadow:
                  selectedCategory === category.id
                    ? "0 4px 14px rgba(74, 159, 213, 0.3)"
                    : "0 2px 8px rgba(0, 0, 0, 0.05)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "#4a9fd5",
                  backgroundColor:
                    selectedCategory === category.id ? "#3b9ac7" : "#f8f9fa",
                  boxShadow: "0 6px 20px rgba(74, 159, 213, 0.25)",
                },
              }}
            />
          ))}
        </Box>

        {/* Gallery Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {filteredImages.map((item, index) => (
            <Card
              key={item.id}
              onClick={() => handleImageClick(item, index)}
              sx={{
                position: "relative",
                cursor: "pointer",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(74, 159, 213, 0.15)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 20px 40px rgba(74, 159, 213, 0.25)",
                  borderColor: "#4a9fd5",
                  "& .image": {
                    transform: "scale(1.1)",
                  },
                  "& .overlay": {
                    opacity: 1,
                  },
                  "& .title": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                className="image"
                sx={{
                  height: 280,
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />

              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  p: 3,
                }}
              >
                <Typography
                  className="title"
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    transform: "translateY(20px)",
                    opacity: 0,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    textAlign: lang === "ar" ? "right" : "left",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              {/* Category Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  [lang === "ar" ? "left" : "right"]: 12,
                  px: 2,
                  py: 0.75,
                  borderRadius: 1.5,
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#4a9fd5",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {item.category}
              </Box>
            </Card>
          ))}
        </Box>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >
            <Typography
              sx={{
                color: "#666666",
                fontSize: "1.1rem",
              }}
            >
              {translation.gallery.noImageText}
            </Typography>
          </Box>
        )}
      </Container>

      {/* Image Dialog/Modal */}
      <Dialog
        open={selectedImage !== null}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          {/* Close Button - Fixed Position */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "fixed",
              top: 16,
              [lang === "ar" ? "left" : "right"]: 16,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              color: "#1a1a1a",
              zIndex: 1500,
              "&:hover": {
                backgroundColor: "#ffffff",
                transform: "scale(1.1)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Previous Button - Fixed Position */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "fixed",
              [lang === "ar" ? "right" : "left"]: 16,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              color: "#1a1a1a",
              zIndex: 1500,
              "&:hover": {
                backgroundColor: "#ffffff",
                transform: "translateY(-50%) scale(1.1)",
              },
            }}
          >
            {lang === "ar" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>

          {/* Image */}
          {selectedImage && (
            <Box
              sx={{
                position: "relative",
                maxHeight: "85vh",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                direction: lang === "ar" ? "rtl" : "ltr",
              }}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "85vh",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%)",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    mb: 1,
                    textAlign: lang === "ar" ? "right" : "left",
                  }}
                >
                  {selectedImage.title}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    textAlign: lang === "ar" ? "right" : "left",
                  }}
                >
                  {selectedImage.category}
                </Typography>
              </Box>
            </Box>
          )}

          {/* Next Button - Fixed Position */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "fixed",
              [lang === "ar" ? "left" : "right"]: 16,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              color: "#1a1a1a",
              zIndex: 1500,
              "&:hover": {
                backgroundColor: "#ffffff",
                transform: "translateY(-50%) scale(1.1)",
              },
            }}
          >
            {lang === "ar" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
}
