"use client";
import { Languages } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export default function MyLanguages() {

  const languageData = [
    { lang: "Spanish", level: "Native", color: "#60a5fa" },
    { lang: "English", level: "Fluent", color: "#a78bfa" },
    { lang: "Italian", level: "Fluent", color: "#f472b6" },
    { lang: "German", level: "Basic", color: "#34d399" },
  ];

  return (
    <Box id="languages" sx={{ py: 10, px: 3,  }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: "linear-gradient(to right, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 8,
          }}
        >
          Languages
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {languageData.map(({ lang, level, color }, idx) => (
            <Grid item key={lang}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 200, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: 250, // fijo para centrar
                    p: 3,
                    textAlign: "center",
                    backgroundColor: "rgba(30,41,59,0.5)",
                    border: "1px solid #374151",
                    borderRadius: 2,
                      "&:hover": {
                        boxShadow: `0 0 15px ${color}`,
                      },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: color + "33",
                      p: 1.5,
                      borderRadius: 2,
                      display: "inline-flex",
                      mb: 2,
                    }}
                  >
                    <Languages size={24} color={color} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#fff" }}>
                    {lang}
                  </Typography>
                  <Typography variant="body2" sx={{ color }}>
                    {level}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}