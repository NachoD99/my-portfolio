"use client";

import { useTranslation } from "react-i18next";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
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
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

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
            <Typography fontSize="1.2rem">{lang.flag}</Typography>
            <Typography variant="body2">{lang.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
