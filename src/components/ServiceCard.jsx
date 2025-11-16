import { Card, CardContent, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  responsive,
} from "./../theme/constants";

const ServiceCard = ({ icon: Icon, title, description, images, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        background: "#ffffff",
        border: "1px solid rgba(74, 159, 213, 0.15)",
        borderRadius: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "&:hover": {
          transform: "translateY(-12px)",
          borderColor: "rgba(74, 159, 213, 0.4)",
          boxShadow: "0 24px 48px rgba(74, 159, 213, 0.2)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }}
    >
      {/* Image Container with Overlay */}
      <Box
        sx={{
          position: "relative",
          height: 240,
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
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
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered
              ? "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)"
              : "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
            transition: "all 0.4s ease",
          }}
        />

        {/* Icon Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.95)",
            color: COLORS.primary.main,
            borderRadius: 2,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          }}
        >
          <Icon />
        </Box>

        {/* Image Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            zIndex: 2,
          }}
        >
          {images.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: currentImageIndex === idx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  currentImageIndex === idx
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.4)",
                transition: "all 0.3s ease",
                boxShadow:
                  currentImageIndex === idx
                    ? "0 2px 8px rgba(0,0,0,0.3)"
                    : "none",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Content Section */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 4,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.5rem",
            color: "#1a1a1a",
            mb: 2,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#4a9fd5",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#666666",
            lineHeight: 1.7,
            fontSize: "0.95rem",
            flexGrow: 1,
            letterSpacing: "0.01em",
          }}
        >
          {description}
        </Typography>

        {/* Bottom Accent Line */}
        <Box
          sx={{
            width: isHovered ? "100%" : "40px",
            height: "3px",
            background: "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
            borderRadius: 2,
            mt: 3,
            transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
