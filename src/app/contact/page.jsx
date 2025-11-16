"use client";

import { Send as SendIcon } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  BORDER_RADIUS,
  COLORS,
  SPACING,
  TRANSITIONS,
  TYPOGRAPHY,
  blur,
  responsive,
} from "../../theme/constants";
import {
  getDirection,
  getDirectionSx,
  getFlexDirectionSx,
  getTextAlign,
  getTextAlignSx,
} from "../../utils/languageHelpers";
import { useLanguage } from "../LayoutClient";

const Label = ({ text, name, lang }) => {
  return (
    <label
      htmlFor={name}
      style={{
        display: "block",
        marginBottom: "0.5rem",
        color: "#1a1a1a",
        fontWeight: 600,
        fontSize: "0.875rem",
        textAlign: getTextAlign(lang),
      }}
    >
      {text}
    </label>
  );
};

export default function ContactPage() {
  const { lang, translation } = useLanguage();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "48396165-b2ef-4dd2-ad01-1c98128ba88f");
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: translation.contact.notifications.success,
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSnackbar({
          open: true,
          message: translation.contact.notifications.error,
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: translation.contact.notifications.error,
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        py: responsive(SPACING.padding["6xl"]),
        px: responsive(SPACING.padding["xs"]),
        backgroundColor: "grey.100",
        minHeight: "100vh",
      }}
    >
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
        {translation.contact.title}
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "grey.600",
          mb: 6,
          fontSize: responsive(TYPOGRAPHY.fontSize["md"]),
        }}
      >
        {translation.contact.subtitle}
      </Typography>

      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, sm: 4 },
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {/* Google Map */}
        <Box
          sx={{
            flex: "1",
            maxWidth: { md: "600px" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: 300, sm: 400, md: "100%" },
              minHeight: { md: 600 },
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(74, 159, 213, 0.15)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              position: "relative",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 30px rgba(74, 159, 213, 0.15)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
                zIndex: 1,
              },
            }}
          >
            <iframe
              title="Google Map - ARAN"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps?q=26.399080,50.044590&z=17&output=embed&markers=color:red%7Clabel:A%7C26.399080,50.044590"
            ></iframe>
          </Box>
        </Box>

        {/* Contact Form */}
        <Box
          sx={{
            flex: "1",
            maxWidth: { md: "600px" },
            width: "100%",
          }}
        >
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 3,
              background: "#ffffff",
              border: "1px solid rgba(74, 159, 213, 0.15)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 30px rgba(74, 159, 213, 0.15)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #4a9fd5 0%, #3b9ac7 100%)",
              },
              ...getDirectionSx(lang),
              "& .MuiInputLabel-root": {
                color: "#1a1a1a",
                [lang === "ar" ? "right" : "left"]: 0,
                transformOrigin: lang === "ar" ? "top right" : "top left",
              },
              "& .MuiOutlinedInput-input": {
                color: "#1a1a1a",
                ...getTextAlignSx(lang),
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(74, 159, 213, 0.2)",
                textAlign: getTextAlign(lang),
              },
              "& .MuiOutlinedInput-root": {
                ...getDirectionSx(lang),
                borderRadius: 2,
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(74, 159, 213, 0.4)",
                },
                "&.Mui-focused": {
                  backgroundColor: "#ffffff",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4a9fd5",
                    borderWidth: "2px",
                  },
                },
              },
            }}
          >
            {/* First Row: Name and Email */}
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              <Grid item xs={12} sm={6}>
                <Label
                  text={translation.contact.form.namePlaceholder}
                  name="name"
                  lang={lang}
                />
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder={translation.contact.form.namePlaceholder}
                  inputProps={{
                    dir: getDirection(lang),
                    style: { textAlign: getTextAlign(lang) },
                  }}
                  InputProps={{
                    sx: {
                      ...getDirectionSx(lang),
                      "& input": {
                        ...getTextAlignSx(lang),
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Label
                  text={translation.contact.form.email}
                  name="email"
                  lang={lang}
                />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder={translation.contact.form.email}
                  inputProps={{
                    dir: getDirection(lang),
                    style: { textAlign: getTextAlign(lang) },
                  }}
                  InputProps={{
                    sx: {
                      ...getDirectionSx(lang),
                      "& input": {
                        ...getTextAlignSx(lang),
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Second Row: Phone and Service */}
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              <Grid item xs={12} sm={6}>
                <Label
                  text={translation.contact.form.phone}
                  name="phone"
                  lang={lang}
                />
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder={translation.contact.form.phonePlaceholder}
                  inputProps={{
                    dir: getDirection(lang),
                    style: { textAlign: getTextAlign(lang) },
                  }}
                  InputProps={{
                    sx: {
                      ...getDirectionSx(lang),
                      "& input": {
                        ...getTextAlignSx(lang),
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Label
                  text={translation.contact.form.service}
                  name="service"
                  lang={lang}
                />
                <TextField
                  fullWidth
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder={translation.contact.form.servicePlaceholder}
                  inputProps={{
                    dir: getDirection(lang),
                    style: { textAlign: getTextAlign(lang) },
                  }}
                  InputProps={{
                    sx: {
                      ...getDirectionSx(lang),
                      "& input": {
                        ...getTextAlignSx(lang),
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Message Field */}
            <Box sx={{ mb: { xs: 3, sm: 4 }, flex: 1 }}>
              <Label
                text={translation.contact.form.message}
                name="message"
                lang={lang}
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                variant="outlined"
                multiline
                rows={5}
                placeholder={translation.contact.form.messagePlaceholder}
                inputProps={{
                  dir: getDirection(lang),
                  style: { textAlign: getTextAlign(lang) },
                }}
                InputProps={{
                  sx: {
                    ...getDirectionSx(lang),
                    "& textarea": {
                      ...getTextAlignSx(lang),
                    },
                  },
                }}
              />
            </Box>

            {/* Submit Button */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                {...(lang === "ar"
                  ? { startIcon: <SendIcon /> }
                  : { endIcon: <SendIcon /> })}
                sx={{
                  background:
                    "linear-gradient(135deg, #4a9fd5 0%, #3b9ac7 100%)",
                  color: "#ffffff",
                  fontWeight: 600,
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 1.75 },
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  borderRadius: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 4px 14px rgba(74, 159, 213, 0.3)",
                  textTransform: "none",
                  letterSpacing: "0.5px",
                  ...getFlexDirectionSx(lang),
                  "&:hover": {
                    transform: "translateY(-2px)",
                    background:
                      "linear-gradient(135deg, #3b9ac7 0%, #4a9fd5 100%)",
                    boxShadow: "0 8px 24px rgba(74, 159, 213, 0.4)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                  "&.Mui-disabled": {
                    background: "#cccccc",
                    color: "#666666",
                  },
                }}
              >
                {isSubmitting
                  ? translation.contact.form.sending
                  : translation.contact.form.submit}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            borderRadius: 2,
            fontWeight: 500,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
