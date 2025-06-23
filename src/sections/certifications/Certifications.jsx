"use client";
import { Award } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

export default function Certifications() {

  const certifications = [
    "Complete Blockchain/Web3 Bootcamp from Zero to Expert",
    "Cognitive Agent with IBM Watson Assistant",
    ".NET 6 Essential",
    "Pandas with Python for Data Science",
  ];

  return (
    <Box id="certifications" sx={{ py: 10, px: 3, backgroundColor: "rgba(31,41,55,0.3)" }}>
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
          Certifications
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="flex-start"
          wrap="wrap"
        >
          {certifications.map((cert, idx) => (
            <Grid item key={cert} sx={{width: { md:"auto", xs:"100%"}}}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: {md:"500px", xs:"100%"},
                    p: 3,
                    m: 0,
                    backgroundColor: "rgba(30,41,59,0.5)",
                    border: "1px solid #374151",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    '&:hover': {
                      borderColor: "rgba(96,165,250,0.5)",
                      boxShadow: "0 0 15px rgba(96,165,250)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: {xs:"100%"} }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: "rgba(96,165,250,0.2)",
                        display: "inline-flex",
                      }}
                    >
                      <Award size={24} color="#60a5fa" />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#e5e7eb" }}
                    >
                      {cert}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}