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
import Background from "./components/Background"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("hero");
  const { t } = useTranslation("hero");

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
        mt: {xs: 6}
      }}
    >
      <Background/>

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: "64rem", mx: "auto" }}>
        <Box sx={{ mb: { xs: 0, md: 6 } }}>
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
                width: { xs: 250, md: 384 },
                height: { xs: 250, md: 384 },
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
                  src="/images/ignaciodavanzo.png"
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
          <TypingText text={t("title")} />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#d1d5db",
            mb: 5,
            lineHeight: 1.6,
          }}
        >
          {t("description")}{' '}
          <Box component="span" sx={{ color: "#60a5fa" }}>{t("stack1")}</Box>,{' '}
          <Box component="span" sx={{ color: "#a78bfa" }}>{t("stack2")}</Box> {t("conector")}{' '}
          <Box component="span" sx={{ color: "#ec4899" }}>{t("stack3")}</Box> {t("end")}
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
              borderRadius: 8,
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              fontWeight: "600",
              textTransform: "none",
              '&:hover': {
                background: "linear-gradient(to right, #2563eb, #7c3aed)",
                transform: "scale(1.05)",
              },
            }}
          >
             {t("contact")}
          </Button>

          <Button
            variant="outlined"
            onClick={() => scrollToSection("experience")}
            sx={{
              px: 4,
              py: 1.5,
              borderColor: "#4b5563",
              borderRadius: 8,
              color: "#e5e7eb",
              fontWeight: "600",
              textTransform: "none",
              '&:hover': {
                borderColor: "#60a5fa",
                color: "#60a5fa",
              },
            }}
          >
             {t("work")}
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