"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Crypto Tracker",
    image: "/projects/crypto-tracker.jpg",
    link: "https://cryptopricetracker-0w43.onrender.com",
  },
  {
    title: "AI Chatbot",
    image: "/projects/ai-chatbot.jpg",
    link: "https://chatbot.example.com",
  },
  {
    title: "E-commerce Admin",
    image: "/projects/ecommerce-admin.jpg",
    link: "https://admin-dashboard.example.com",
  },
  {
    title: "Portfolio 2025",
    image: "/projects/portfolio.jpg",
    link: "https://portfolio.ignaciodavanzo.com",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 10, px: 3 }}>
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
          Mis Proyectos
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, idx) => (
            <Grid item key={project.title} xs="auto">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{ textDecoration: "none" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: 320,
                    borderRadius: 2,
                    overflow: "hidden",
                    backgroundColor: "rgba(30,41,59,0.5)",
                    border: "1px solid #374151",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      borderColor: "rgba(96,165,250,0.5)",
                      boxShadow: "0 0 15px rgba(96,165,250)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderBottom: "1px solid #374151",
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#e5e7eb" }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </Paper>
              </motion.a>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
