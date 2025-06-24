"use client";
import { Briefcase } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Experience() {

  const { t } = useTranslation("experience");
  const jobs = t("jobs", { returnObjects: true });

  return (
    <Box id="experience" sx={{ py: 10, px: 3, backgroundColor: "rgba(31,41,55,0.3)" }}>
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

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
         {jobs.map((job, idx) => {
  const colors = [
    "#60a5fa", "#a78bfa", "#f472b6"
  ];
  const bgColors = [
    "rgba(96,165,250,0.2)",
    "rgba(168,139,250,0.2)",
    "rgba(236,72,153,0.2)"
  ];
  const borderHovers = [
    "rgba(96,165,250,0.5)",
    "rgba(168,85,247,0.5)",
    "rgba(236,72,153,0.5)"
  ];

  const iconColor = colors[idx];
  const bgColor = bgColors[idx];
  const borderHover = borderHovers[idx];

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, rotateY: -10, scaleX: 0.9 }}
      whileInView={{ opacity: 1, rotateY: 0, scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
      whileHover={{ scale: 1.02 }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: "rgba(30,41,59,0.5)",
          border: "1px solid #374151",
          borderRadius: 8,
          transition: "all 0.3s ease",
          '&:hover': {
            borderColor: borderHover,
            boxShadow: `0 0 15px ${iconColor}`,
          },
        }}
      >
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                backgroundColor: bgColor,
                display: "inline-flex",
              }}
            >
              <Briefcase size={24} color={iconColor} />
            </Box>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#fff", fontFamily: 'Space Grotesk' }}>
              {job.title}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: iconColor, mb: 1 }}>
              {job.company}
            </Typography>
            <Typography variant="body2" sx={{ color: "#9ca3af", mb: 2 }}>
              {job.date}
            </Typography>
            <Typography variant="body1" sx={{ color: "#d1d5db" }}>
              {job.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
})}

        </Box>
      </Box>
    </Box>
  );
}