"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "WebSite",
    image: "/images/projects/trioptimo-web.png",
    link: "https://trioptimo.com/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export default function Projects() {
  const { t } = useTranslation("projects");
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
                    width: 320,
                    height: 320,
                    borderRadius: 8,
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
                      objectFit: "contain",
                      loading: "lazy",
                      borderBottom: "1px solid #374151",
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#e5e7eb", fontFamily: 'Space Grotesk' }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mt: 1,
                      color: "#9ca3af",
                      fontSize: "0.75rem",
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
                          backgroundColor: "#1f2937",
                          px: 1,
                          py: 0.2,
                          m: 0.5,
                          borderRadius: 1,
                          fontSize: "0.7rem",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Typography>
                </Paper>
              </motion.a>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
