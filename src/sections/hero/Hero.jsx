"use client";

import { useState, useEffect } from "react";
import { TypingText } from "../../components/animate-ui/text/typing";
import {
  ChevronDown,
  Code,
} from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";

export default function Hero() {
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

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        px: 3,
      }}
    >
      {/* Background gradient overlays */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(88, 28, 135, 0.2))",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: 256,
          height: 256,
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderRadius: "50%",
          filter: "blur(48px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: 384,
          height: 384,
          backgroundColor: "rgba(168, 85, 247, 0.1)",
          borderRadius: "50%",
          filter: "blur(48px)",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: "64rem", mx: "auto" }}>
        <Box sx={{ mb: {xs: 0, md: 6} }}>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Box
              sx={{
                width: {xs: 250, md: 384},
                height: {xs: 250, md: 384},
                mx: "auto",
                mb: 4,
                borderRadius: "50%",
                p: 0.5,
                background: "linear-gradient(to bottom right, #60a5fa, #a78bfa)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  bgcolor: "#0f172a",
                  overflow: "hidden",
                }}
              >
                <img
                  src="src/images/ignaciodavanzo.png"
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>


        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 3,
            background: "linear-gradient(to right, #60a5fa, #a78bfa, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <TypingText text="Software Engineer" />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#d1d5db",
            mb: 5,
            lineHeight: 1.6,
          }}
        >
          Fullstack Developer specializing in{' '}
          <Box component="span" sx={{ color: "#60a5fa" }}>.NET</Box>,{' '}
          <Box component="span" sx={{ color: "#a78bfa" }}>React</Box>, and{' '}
          <Box component="span" sx={{ color: "#ec4899" }}>Web3</Box> solutions
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Button
            variant="contained"
            onClick={() => scrollToSection("contact")}
            sx={{
              px: 4,
              py: 1.5,
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              fontWeight: "600",
              textTransform: "none",
              '&:hover': {
                background: "linear-gradient(to right, #2563eb, #7c3aed)",
                transform: "scale(1.05)",
              },
            }}
          >
            Get In Touch
          </Button>

          <Button
            variant="outlined"
            onClick={() => scrollToSection("experience")}
            sx={{
              px: 4,
              py: 1.5,
              borderColor: "#4b5563",
              color: "#e5e7eb",
              fontWeight: "600",
              textTransform: "none",
              '&:hover': {
                borderColor: "#60a5fa",
                color: "#60a5fa",
              },
            }}
          >
            View My Work
          </Button>
        </Stack>

        <IconButton onClick={() => scrollToSection("about")}
          sx={{
            animation: "bounce 2s infinite",
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          }}
        >
          <ChevronDown style={{ width: 32, height: 32, color: "#9ca3af" }} />
        </IconButton>
      </Box>
    </Box >
  );
}