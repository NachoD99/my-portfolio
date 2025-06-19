"use client";
import {
    MapPin,
    ExternalLink,
    Code,
    Database,
    Cloud,
    Briefcase,
} from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

export default function About() {
    const features = [
        {
            icon: <Code size={32} color="#60a5fa" />,
            title: "Frontend",
            description: "React, TypeScript, Material UI",
            color: "#60a5fa",
        },
        {
            icon: <Database size={32} color="#a78bfa" />,
            title: "Backend",
            description: ".NET, Python, REST APIs",
            color: "#a78bfa",
        },
        {
            icon: <Cloud size={32} color="#ec4899" />,
            title: "Cloud",
            description: "Azure, Google Cloud, Meta",
            color: "#ec4899",
        },
        {
            icon: <ExternalLink size={32} color="#34d399" />,
            title: "Web3",
            description: "Blockchain, Crypto Trading",
            color: "#34d399",
        },
    ];

    return (
        <Box id="about" sx={{ py: 10, px: 3 }}>
            <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
                {/* Heading */}
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
                    About Me
                </Typography>

                <Grid container spacing={3}>
                    {/* Text Column */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="body1"
                            sx={{ color: "#d1d5db", mb: 3, lineHeight: 1.75 }}
                        >
                            I'm a passionate Software Engineer with expertise in fullstack development, currently working on
                            cutting-edge Web3 and blockchain solutions. My journey spans from traditional enterprise applications to
                            modern cryptocurrency trading platforms.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ color: "#d1d5db", mb: 3, lineHeight: 1.75 }}
                        >
                            With a strong foundation in .NET technologies and modern web frameworks like React, I bring both
                            technical depth and leadership experience to every project.
                        </Typography>

                        <Stack direction="row" spacing={3} flexWrap="wrap">
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "#60a5fa" }}>
                                <MapPin size={20} />
                                <Typography variant="body2">Spain</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "#a78bfa" }}>
                                <Briefcase size={20} />
                                <Typography variant="body2">5+ Years Experience</Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Features Column */}
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            {features.map((item, idx) => (
                                <Grid item xs={12} sm={6} key={idx}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ type: "spring", stiffness: 300, delay: idx * 0.1 }}
                                    >
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 3,
                                                backgroundColor: "rgba(30,41,59,0.5)",
                                                border: "1px solid #374151",
                                                borderRadius: 2,
                                                transition: "transform 0.3s, box-shadow 0.3s",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                    boxShadow: `0 0 15px ${item.color}`,
                                                },
                                            }}
                                        >
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                {item.icon}
                                                <Box>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#fff" }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}