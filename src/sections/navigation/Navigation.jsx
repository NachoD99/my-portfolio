"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Optional helper to hide the AppBar when scrolling down
 */
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: 0 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "education",
        "skills",
        "experience",
        "certifications",
        "languages",
        "contact",
      ];
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    "About",
    "Education",
    "Skills",
    "Experience",
    "Certifications",
    "Contact",
  ];

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HideOnScroll>
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

          {isMdUp && (
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
                    }}
                  >
                    {item}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
