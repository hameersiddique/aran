"use client";

import { Box, Container, Typography } from "@mui/material";
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

const ClientsHoneyComb = ({ title, clients }) => {
  return (
    <Box
      id="clients"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%)",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: responsive(TYPOGRAPHY.fontSize["2xl"]),
            color: COLORS.primary.main,
            mb: 8,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            position: "relative",
          }}
        >
          {/* Row 1 - 5 hexagons */}
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              mb: "0px",
            }}
          >
            {clients.slice(0, 5).map((client, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 120, sm: 150, md: 180 },
                  height: { xs: 140, sm: 175, md: 210 },
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "#ffffff",
                  border: "4px solid #3b9ac7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all .3s",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.08)",
                    zIndex: 10,
                    boxShadow: "0 10px 30px rgba(212, 162, 74, 0.5)",
                  },
                }}
              >
                <img
                  src={client.logo}
                  alt={client.alt ?? "client"}
                  style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Row 2 - 6 hexagons (offset) */}
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              mb: "-32px",
              ml: { xs: "62px", sm: "77px", md: "0px" },
            }}
          >
            {clients.slice(5, 11).map((client, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 120, sm: 150, md: 180 },
                  height: { xs: 140, sm: 175, md: 210 },
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "#ffffff",
                  border: "4px solid #3b9ac7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all .3s",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.08)",
                    zIndex: 10,
                    boxShadow: "0 10px 30px rgba(212, 162, 74, 0.5)",
                  },
                }}
              >
                <img
                  src={client.logo}
                  alt={client.alt ?? "client"}
                  style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Row 3 - 5 hexagons */}
          <Box
            sx={{
              display: "flex",
              gap: "4px",
            }}
          >
            {clients.slice(11, 16).map((client, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 120, sm: 150, md: 180 },
                  height: { xs: 140, sm: 175, md: 210 },
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "#ffffff",
                  border: "4px solid #3b9ac7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all .3s",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.08)",
                    zIndex: 10,
                    boxShadow: "0 10px 30px rgba(212, 162, 74, 0.5)",
                  },
                }}
              >
                <img
                  src={client.logo}
                  alt={client.alt ?? "client"}
                  style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsHoneyComb;
