"use client";

import {
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

export default function Navigation() {
  return (
    <AppBar
      position="fixed"
      elevation={4}
      color="transparent"
      sx={{
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderBottom: "1px solid rgba(71, 85, 105, 0.8)",
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
            background: "linear-gradient(to right, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Ignacio Davanzo
        </Typography>

        <DesktopNav/>
        <MobileNav/>
      </Toolbar>
    </AppBar>
  );
}
