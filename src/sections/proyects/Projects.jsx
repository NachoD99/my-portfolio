"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Crypto Price Tracker",
    image: "/images/projects/crypto-price-tracker.png",
    link: "https://cryptopricetracker-0w43.onrender.com",
    technologies: ["React", "Express", "Node.js", "CoinCap API", "MUI"],
  },
  {
    title: "Portfolio",
    image: "/images/projects/amy-portfolio.png",
    link: "https://amydonald.xyz/",
    technologies: ["Node.js", "Framer Motion", "Mail Sender", "MUI", "React"],
  },
  {
    title: "WebSite",
    image: "/images/projects/trioptimo-web.png",
    link: "https://trioptimo.com/",
    technologies: ["Node.js", "JavaScript", "Mail Sender", "MUI", "Framer Motion", "React"],
  },
  {
    title: "WebSite Catalog",
    image: "/images/projects/costumbres-argentinas-web.png",
    link: "https://costumbresargentinas.onrender.com/",
    technologies: ["HTML", "CSS", "EJS", "Mail Sender", "WhatsApp"],
  },
  // {
  //   title: "SaaS de gestión de incidencias diseñado para equipos internos de PYMEs. Arquitectura escalable basada en .NET 8 + React + Azure.",
  //   image: "/images/projects/costumbres-argentinas-web.png",
  //   link: "https://costumbresargentinas.onrender.com/",
  //   technologies: ["HTML", "CSS", "EJS", "Mail Sender", "WhatsApp"],
  // },
];

export default function Projects() {
  const { t } = useTranslation("projects");
  return (
    <Box id="projects" sx={{ py: 14, px: 3 }}>
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
                    width: 360,
                    minHeight: 300,
                    borderRadius: 8,
                    overflow: "hidden",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      borderColor: "rgba(96,165,250,0.5)",
                      boxShadow: "0 0 25px rgba(96,165,250,0.5), 0 0 50px rgba(139,92,246,0.2)",
                    },
                    '&:hover .project-overlay': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: 220,
                        objectFit: "cover",
                        display: "block",
                        borderBottom: "1px solid #374151",
                      }}
                    />
                    <Box
                      className="project-overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(59,130,246,0.75), rgba(139,92,246,0.75))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <ExternalLink size={36} color="white" />
                    </Box>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "var(--text-primary)", fontFamily: 'Space Grotesk', mb: 1.5 }}
                    >
                      {project.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <Box
                          key={tech}
                          component="span"
                          sx={{
                            backgroundColor: "var(--bg-chip)",
                            color: "var(--text-secondary)",
                            px: 1,
                            py: 0.3,
                            borderRadius: 1,
                            fontSize: "0.7rem",
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
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
