"use client";
import { Languages } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MyLanguages() {
  const { t } = useTranslation("languages");
  const colorPalette = ["#60a5fa", "#a78bfa", "#f472b6", "#34d399"];
  const languageData = t("list", { returnObjects: true })?.map((item, idx) => ({
    ...item,
    color: colorPalette[idx % colorPalette.length],
  }));

  return (
    <Box id="languages" sx={{ py: 10, px: 3, }}>
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
            fontFamily: 'Space Grotesk',
          }}
        >
          {t("title")}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {languageData.map(({ lang, level, color, flag }, idx) => (
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
                    borderRadius: 8,
                    "&:hover": {
                      boxShadow: `0 0 15px ${color}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      display: "inline-flex",
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={flag}
                      alt={lang}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 1,
                        boxShadow: "0 0 2px rgba(0,0,0,0.4)",
                      }}
                    />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#fff", fontFamily: 'Space Grotesk' }}>
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