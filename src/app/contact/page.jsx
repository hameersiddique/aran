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
        marginBottom: "0.8rem",
        color: COLORS.accent.gold,
        fontWeight: TYPOGRAPHY.fontWeight.bold,
        fontSize: responsive(TYPOGRAPHY.fontSize["2xs"]),
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
        background: COLORS.background.gradient2,
        minHeight: "100vh",
        // ...getDirectionSx(lang),
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: TYPOGRAPHY.fontWeight.black,
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
          color: COLORS.primary.main,
          mb: { xs: 4, sm: 6, md: 8 },
          px: 2,
        }}
      >
        {translation.contact.title}
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
          // ...getDirectionSx(lang),
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
              borderRadius: BORDER_RADIUS.md,
              overflow: "hidden",
              border: `2px solid ${COLORS.border.primaryHover}`,
              boxShadow: `0 0 20px ${COLORS.shadow.primary}`,
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
              p: { xs: 2.5, sm: 3, md: 4 },
              borderRadius: BORDER_RADIUS.md,
              background: COLORS.white.opacity05,
              border: `2px solid ${COLORS.border.primaryHover}`,
              boxShadow: `0 0 30px ${COLORS.shadow.primary}`,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              ...getDirectionSx(lang),
              "& .MuiInputLabel-root": {
                color: COLORS.primary.main,
                [lang === "ar" ? "right" : "left"]: 0,
                transformOrigin: lang === "ar" ? "top right" : "top left",
              },
              "& .MuiOutlinedInput-input": {
                color: COLORS.white.full,
                ...getTextAlignSx(lang),
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: COLORS.border.primaryHover,
                textAlign: getTextAlign(lang),
              },
              "& .MuiOutlinedInput-root": {
                ...getDirectionSx(lang),
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: COLORS.accent.cyan,
                },
              },
            }}
          >
            {/* First Row: Name and Email */}
            <Grid
              container
              spacing={{ xs: 2, sm: 2.5 }}
              sx={{ mb: { xs: 2, sm: 2.5 } }}
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
              spacing={{ xs: 2, sm: 2.5 }}
              sx={{ mb: { xs: 2, sm: 2.5 } }}
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
            <Box sx={{ mb: { xs: 2, sm: 2.5 } }}>
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
                rows={4}
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
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                {...(lang === "ar"
                  ? { startIcon: <SendIcon /> }
                  : { endIcon: <SendIcon /> })}
                sx={{
                  background: COLORS.accent.gradient,
                  color: COLORS.white.full,
                  fontWeight: TYPOGRAPHY.fontWeight.semibold,
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.2, sm: 1.5 },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  borderRadius: BORDER_RADIUS.full,
                  transition: TRANSITIONS.all,
                  ...getFlexDirectionSx(lang),
                  "&:hover": {
                    transform: "translateY(-2px)",
                    background: COLORS.accent.gradientReverse,
                    boxShadow: `0 0 15px ${COLORS.shadow.cyan}`,
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
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            background: COLORS.overlay.dark,
            backdropFilter: blur(8),
            color: COLORS.white.full,
            border: `1px solid ${COLORS.white.opacity15}`,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
