import { Card, CardContent, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
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

const ServiceCard = ({ icon, title, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images for each category - using icon to identify category
  const getBackgroundImages = () => {
    switch (icon) {
      case "👮": // Security
        return [
          "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
          "https://images.unsplash.com/photo-1554224311-beee2c446dd7?w=800&q=80",
          "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        ];
      case "🏗️": // Civil Engineering
        return [
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
          "https://images.unsplash.com/photo-1590496793907-8323f8a60ea2?w=800&q=80",
          "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
        ];
      case "⚡": // Electrical Engineering
        return [
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
          "https://images.unsplash.com/photo-1581092918484-8313f2f2e7e7?w=800&q=80",
        ];
      case "⚙️": // Mechanical Engineering
        return [
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80",
          "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
          "https://images.unsplash.com/photo-1581093458791-9d42e2e7d1f6?w=800&q=80",
        ];
      default:
        return [
          "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
          "https://images.unsplash.com/photo-1554224311-beee2c446dd7?w=800&q=80",
          "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        ];
    }
  };

  const images = getBackgroundImages();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Card
      sx={{
        background:
          "linear-gradient(135deg, rgba(74, 159, 213, 0.1), rgba(59, 154, 199, 0.1))",
        border: "2px solid rgba(74, 159, 213, 0.3)",
        borderRadius: 4,
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-15px) scale(1.02)",
          borderColor: "#4a9fd5",
          boxShadow: "0 20px 60px rgba(74, 159, 213, 0.4)",
        },
      }}
    >
      {/* Rotating Background Images */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          transition: "background-image 1s ease-in-out",
          zIndex: 0,
        }}
      />

      {/* Content Overlay */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
            mb: 2,
            color: "#4a9fd5",
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
            color: COLORS.accent.gold,
            mb: 2,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            lineHeight: 1.8,
            fontSize: responsive(TYPOGRAPHY.fontSize["sm"]),
            flexGrow: 1,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Image Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          display: "flex",
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor:
                currentImageIndex === index
                  ? "#4a9fd5"
                  : "rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Card>
  );
};

export default ServiceCard;
