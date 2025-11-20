"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  Dialog,
  IconButton,
  Fade,
  Backdrop,
  useMediaQuery,
  useTheme,
  Skeleton,
} from "@mui/material";
import {
  Close as CloseIcon,
  ChevronLeft,
  ChevronRight,
  Fullscreen,
  Download,
} from "@mui/icons-material";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { COLORS, TYPOGRAPHY, SPACING, responsive } from "../../theme/constants";
import { useLanguage } from "./../LayoutClient";

export default function GalleryPage() {
  const { lang, translation } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadStates, setImageLoadStates] = useState({});

  const projectObj = translation.gallery.images;
  const galleryData = Object.keys(projectObj).map((key, index) => ({
    id: key,
    image: `/gallery/${index + 1}.jpg`,
    ...projectObj[key],
  }));

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

  // Preload adjacent images when modal opens
  useEffect(() => {
    if (selectedImage) {
      const preloadImage = (index) => {
        if (filteredImages[index]) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = filteredImages[index].image;
          document.head.appendChild(link);
        }
      };

      const nextIndex = (currentImageIndex + 1) % filteredImages.length;
      const prevIndex =
        (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;

      preloadImage(nextIndex);
      preloadImage(prevIndex);
    }
  }, [currentImageIndex, selectedImage, filteredImages]);

  const handleImageClick = useCallback((image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentImageIndex, filteredImages]);

  const handlePrevious = useCallback(() => {
    const prevIndex =
      (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentImageIndex, filteredImages]);

  const handleFullscreen = useCallback(() => {
    if (selectedImage) {
      const img = document.getElementById("fullscreen-image");
      if (img?.requestFullscreen) {
        img.requestFullscreen();
      } else if (img?.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      }
    }
  }, [selectedImage]);

  const handleDownload = useCallback(() => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.image;
      link.download = `${selectedImage.title}.jpg`;
      link.click();
    }
  }, [selectedImage]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        lang === "ar" ? handlePrevious() : handleNext();
      } else if (e.key === "ArrowLeft") {
        lang === "ar" ? handleNext() : handlePrevious();
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [selectedImage, lang, handleNext, handlePrevious, handleClose]
  );

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      lang === "ar" ? handlePrevious() : handleNext();
    }
    if (isRightSwipe) {
      lang === "ar" ? handleNext() : handlePrevious();
    }
  }, [touchStart, touchEnd, lang, handleNext, handlePrevious]);

  const handleImageLoad = (id) => {
    setImageLoadStates((prev) => ({ ...prev, [id]: true }));
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
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Typography
          component="h1"
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
          component="nav"
          aria-label="Gallery categories"
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
          component="section"
          aria-label="Gallery images"
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
                  "& .image-wrapper": {
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
              {/* Image with Next.js Image Component */}
              <Box
                className="image-wrapper"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 280,
                  overflow: "hidden",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {!imageLoadStates[item.id] && (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bgcolor: "grey.300",
                    }}
                  />
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  style={{
                    objectFit: "cover",
                    opacity: imageLoadStates[item.id] ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                  onLoad={() => handleImageLoad(item.id)}
                  loading={index < 8 ? "eager" : "lazy"}
                  quality={75}
                />
              </Box>

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

      {/* Fixed Image Viewer Dialog */}
      <Dialog
        open={selectedImage !== null}
        onClose={handleClose}
        maxWidth={false}
        fullScreen
        TransitionComponent={Fade}
        transitionDuration={300}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            boxShadow: "none",
            overflow: "hidden",
            margin: 0,
            maxWidth: "100%",
            maxHeight: "100%",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top Control Bar */}
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: { xs: 1.5, sm: 2 },
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)",
              zIndex: 1500,
              direction: lang === "ar" ? "rtl" : "ltr",
            }}
          >
            {/* Image Counter */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.75, sm: 1 },
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  fontWeight: 600,
                }}
              >
                {currentImageIndex + 1} / {filteredImages.length}
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              {!isMobile && (
                <>
                  <IconButton
                    onClick={handleFullscreen}
                    aria-label="Fullscreen"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(10px)",
                      color: "#ffffff",
                      width: 40,
                      height: 40,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Fullscreen />
                  </IconButton>

                  <IconButton
                    onClick={handleDownload}
                    aria-label="Download"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(10px)",
                      color: "#ffffff",
                      width: 40,
                      height: 40,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Download />
                  </IconButton>
                </>
              )}

              <IconButton
                onClick={handleClose}
                aria-label="Close"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                  width: 40,
                  height: 40,
                  "&:hover": {
                    backgroundColor: "rgba(255, 59, 48, 0.8)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Navigation Buttons - Desktop Only */}
          {!isMobile && (
            <>
              <IconButton
                onClick={handlePrevious}
                aria-label="Previous image"
                sx={{
                  position: "fixed",
                  [lang === "ar" ? "right" : "left"]: 24,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                  width: 56,
                  height: 56,
                  zIndex: 1500,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    transform: "translateY(-50%) scale(1.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {lang === "ar" ? (
                  <ChevronRight fontSize="large" />
                ) : (
                  <ChevronLeft fontSize="large" />
                )}
              </IconButton>

              <IconButton
                onClick={handleNext}
                aria-label="Next image"
                sx={{
                  position: "fixed",
                  [lang === "ar" ? "left" : "right"]: 24,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                  width: 56,
                  height: 56,
                  zIndex: 1500,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    transform: "translateY(-50%) scale(1.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {lang === "ar" ? (
                  <ChevronLeft fontSize="large" />
                ) : (
                  <ChevronRight fontSize="large" />
                )}
              </IconButton>
            </>
          )}

          {/* Image Container - FIXED */}
          {selectedImage && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: {
                  xs: "80px 16px 160px",
                  sm: "80px 80px 160px",
                },
              }}
            >
              <Box
                id="fullscreen-image"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  quality={90}
                  priority
                />
              </Box>
            </Box>
          )}

          {/* Bottom Info Bar - FIXED */}
          {selectedImage && (
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)",
                p: { xs: 2, sm: 3 },
                zIndex: 1500,
                direction: lang === "ar" ? "rtl" : "ltr",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  fontWeight: 600,
                  mb: 0.5,
                  textAlign: lang === "ar" ? "right" : "left",
                }}
              >
                {selectedImage.title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textAlign: lang === "ar" ? "right" : "left",
                }}
              >
                {selectedImage.category}
              </Typography>
            </Box>
          )}

          {/* Mobile Swipe Indicator */}
          {isMobile && selectedImage && (
            <Box
              sx={{
                position: "fixed",
                bottom: 100,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
                zIndex: 1600,
              }}
            >
              {filteredImages.map((_, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: idx === currentImageIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor:
                      idx === currentImageIndex
                        ? "rgba(255, 255, 255, 0.9)"
                        : "rgba(255, 255, 255, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
