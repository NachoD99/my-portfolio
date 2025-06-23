"use client";

import { useTranslation } from "react-i18next";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  Stack,
  Button,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function LanguagesSwitch() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const languages = [
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/us.png" },
    { code: "es", label: "Español", flag: "https://flagcdn.com/w40/es.png" },
  ];

  // --- MOBILE RENDERING ---
  if (isMobile) {
    return (
  <Box sx={{ mt: 2 }}>
    <Stack direction="column" spacing={1}>
      {languages.map((lang) => {
        const isActive = i18n.language === lang.code;
        return (
          <Box
            key={lang.code}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1,
              py: 0.5,
              borderRadius: 1,
              cursor: "pointer",
              backgroundColor: isActive ? "rgba(167, 139, 250, 0.1)" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(96,165,250,0.1)",
              },
            }}
            onClick={() => i18n.changeLanguage(lang.code)}
          >
            <Box
              component="img"
              src={lang.flag}
              alt={lang.label}
              sx={{
                width: 20,
                height: 14,
                borderRadius: "2px",
                objectFit: "cover",
                boxShadow: "0 0 2px rgba(0,0,0,0.4)",
              }}
            />
            <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
              {lang.label}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  </Box>
);

  }

  // --- DESKTOP RENDERING ---
  return (
    <Box>
      <IconButton
        onClick={handleOpen}
        sx={{
          color: "#a78bfa",
          transition: "0.3s",
          "&:hover": {
            color: "#c084fc",
            transform: "scale(1.1)",
          },
        }}
      >
        <LanguageIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            backgroundColor: "#0f172a",
            border: "1px solid #374151",
            color: "#cbd5e1",
            minWidth: 140,
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            selected={i18n.language === lang.code}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              "&.Mui-selected": {
                backgroundColor: "rgba(167, 139, 250, 0.1)",
              },
              "&:hover": {
                backgroundColor: "rgba(96,165,250,0.1)",
              },
            }}
          >
            <Box
              component="img"
              src={lang.flag}
              alt={lang.label}
              sx={{
                width: 20,
                height: 14,
                borderRadius: "2px",
                objectFit: "cover",
                boxShadow: "0 0 2px rgba(0,0,0,0.4)",
              }}
            />
            <Typography variant="body2">{lang.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
