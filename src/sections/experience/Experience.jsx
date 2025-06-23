"use client";
import { Briefcase } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export default function Experience() {

  const jobs = [
    {
      title: "Software Engineer",
      company: "G.C.S SL • Spain",
      date: "May 2025 - Present",
      description:
        "I work as a Software Engineer and Web3 solutions developer, focusing on cryptocurrency trading platforms and related blockchain-based services.",
      iconColor: "#60a5fa",
      bgColor: "rgba(96,165,250,0.2)",
      borderHover: "rgba(96,165,250,0.5)",
    },
    {
      title: ".NET Fullstack Developer",
      company: "Cegsoft • Porto Rico",
      date: "July 2023 - Present",
      description:
        "I was responsible for the annual update of tax collection forms for the IRS and the Treasury Department, adapting program logic to reflect new tax legislation. My role also involved development testing, as well as task estimation and management to ensure timely and accurate delivery.",
      iconColor: "#a78bfa",
      bgColor: "rgba(168,139,250,0.2)",
      borderHover: "rgba(168,85,247,0.5)",
    },
    {
      title: ".NET Fullstack Developer",
      company: "SanCor Seguros • Argentina",
      date: "February 2021 - June 2023",
      description:
        "I worked on two projects for this important Argentine insurance company, where I was involved in the maintenance and development of two applications, in which I have resolved critical errors in production, improvements of execution time, requirements of requirements, testing. On the other hand, I have also led a team and trained new members.",
      iconColor: "#f472b6",
      bgColor: "rgba(236,72,153,0.2)",
      borderHover: "rgba(236,72,153,0.5)",
    },
  ];

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
          }}
        >
          Professional Experience
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, rotateY: -10, scaleX: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <Paper
                key={idx}
                elevation={3}
                sx={{
                  p: 4,
                  backgroundColor: "rgba(30,41,59,0.5)",
                  border: "1px solid #374151",
                  borderRadius: 8,
                  transition: "all 0.3s ease",
                  '&:hover': {
                    borderColor: job.borderHover,
                    boxShadow: `0 0 15px ${job.iconColor}`,
                  },
                }}
              >
                <Grid container spacing={2} alignItems="flex-start">
                  <Grid item>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: job.bgColor,
                        display: "inline-flex",
                      }}
                    >
                      <Briefcase size={24} color={job.iconColor} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#fff" }}>
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: job.iconColor, mb: 1 }}>
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
          ))}
        </Box>
      </Box>
    </Box>
  );
}