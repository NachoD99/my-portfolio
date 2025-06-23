"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const navItems = [
    "About",
    "Education",
    "Skills",
    "Experience",
    "Certifications",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setDrawerOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

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

        {isMdUp ? (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) => {
              const key = item.toLowerCase();
              const isActive = activeSection === key;
              return (
                <Button
                  key={item}
                  onClick={() => scrollToSection(key)}
                  size="small"
                  color={isActive ? "primary" : "inherit"}
                  sx={{
                    textTransform: "none",
                    fontSize: "0.875rem",
                    ...(isActive && { fontWeight: 600 }),
                    "&:hover": {
                      color: "#60a5fa",
                    },
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </Box>
        ) : (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  width: "70%",
                },
              }}
            >
              <List>
                {navItems.map((item) => {
                  const key = item.toLowerCase();
                  return (
                    <ListItem key={item} disablePadding>
                      <ListItemButton onClick={() => scrollToSection(key)}>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            fontSize: "1rem",
                            fontWeight: 500,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
