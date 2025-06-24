"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation("skills");
    const skillCategories = t("categories", { returnObjects: true });

    return (
        <Box id="skills" sx={{ py: 10, px: 3 }}>
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

                <Grid container spacing={4} justifyContent="center">
  {skillCategories.map(({ title, skills }, i) => {
    const colors = [
      "#60a5fa", "#a78bfa", "#f472b6", "#34d399", "#facc15", "#22d3ee"
    ];
    const bgColors = [
      "rgba(96,165,250,0.2)", "rgba(168,139,250,0.2)", "rgba(236,72,153,0.2)",
      "rgba(52,211,153,0.2)", "rgba(234,179,8,0.2)", "rgba(34,211,238,0.2)"
    ];
    const color = colors[i];
    const bgColor = bgColors[i];

    return (
      <Grid item key={title}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Paper
            elevation={3}
            sx={{
              width: 300,
              p: 3,
              backgroundColor: "rgba(30,41,59,0.5)",
              border: "1px solid #374151",
              borderRadius: 8,
              '&:hover': {
                scale: 1.05,
                boxShadow: `0px 0px 15px ${color}`
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color, fontFamily: 'Space Grotesk' }}>
              {title}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: index * 0.1,
                  }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      backgroundColor: bgColor,
                      color,
                      fontSize: "0.875rem",
                      borderRadius: "16px",
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Grid>
    );
  })}
</Grid>
            </Box>
        </Box>
    );
}