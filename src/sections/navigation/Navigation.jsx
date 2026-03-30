"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Sun, Moon } from "lucide-react";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
import { useColorMode } from "../../context/ThemeContext";

export default function Navigation() {
  const { toggle, mode } = useColorMode();

  return (
    <AppBar
      position="fixed"
      elevation={4}
      color="transparent"
      sx={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "var(--nav-bg)",
        borderBottom: "1px solid rgba(96, 165, 250, 0.15)",
        boxShadow: "0 1px 30px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1536px",
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: 1,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: 'Space Grotesk',
            background: "linear-gradient(to right, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Ignacio Davanzo
        </Typography>

        <DesktopNav />
        <IconButton
          onClick={toggle}
          size="small"
          sx={{ color: "var(--text-secondary)", mx: 1 }}
        >
          {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </IconButton>
        <MobileNav />
      </Toolbar>
    </AppBar>
  );
}
