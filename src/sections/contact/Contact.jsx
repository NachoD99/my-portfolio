"use client";
import { Mail, Linkedin, Github } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("contact");
  return (
    <Box id="contact" sx={{ py: 10, px: 3, backgroundColor: "rgba(31,41,55,0.3)" }}>
      <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(to right, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 4,
              fontFamily: 'Space Grotesk',
            }}
          >
            {t("title")}
          </Typography>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#d1d5db", mb: 6 }}
          >
            {t("description")}
          </Typography>
        </motion.div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 8}}
        >
          {[
            {
              href: "mailto:nachodavanzo@gmail.com",
              icon: <Mail size={18} />,
              label: "Email",
              sx: {
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                color: "white",
                '&:hover': {
                  background: "linear-gradient(to right, #2563eb, #7c3aed)",
                  transform: "scale(1.05)",
                },
              },
            },
            {
              href: "https://linkedin.com/in/ignaciodavanzo",
              icon: <Linkedin size={18} />,
              label: "LinkedIn",
              sx: {
                borderColor: "#4b5563",
                color: "#d1d5db",
                '&:hover': {
                  borderColor: "#60a5fa",
                  color: "#60a5fa",
                },
              },
            },
            {
              href: "https://github.com/NachoD99",
              icon: <Github size={18} />,
              label: "GitHub",
              sx: {
                borderColor: "#4b5563",
                color: "#d1d5db",
                '&:hover': {
                  borderColor: "#a78bfa",
                  color: "#a78bfa",
                },
              },
            },
          ].map((btn, idx) => (
            <motion.div
              key={btn.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.15 }}
            >
              <Button
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                component={Link}
                startIcon={btn.icon}
                variant={btn.label === "Send Email" ? "contained" : "outlined"}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 8,
                  width:{md:"300px", xs: "200px"},
                  fontWeight: 600,
                  textTransform: "none",
                  ...btn.sx,
                }}
              >
                {btn.label}
              </Button>
            </motion.div>
          ))}
        </Stack>
        <Typography variant="body2" sx={{ color: "#9ca3af" }}>
           {t("footer")}
        </Typography>
      </Box>
    </Box>
  );
}
