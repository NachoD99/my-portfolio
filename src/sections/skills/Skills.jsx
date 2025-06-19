"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            color: "#60a5fa",
            bgColor: "rgba(96,165,250,0.2)",
            chips: [".NET6", "Python", "JavaScript", "TypeScript"],
        },
        {
            title: "Technologies",
            color: "#a78bfa",
            bgColor: "rgba(168,139,250,0.2)",
            chips: ["React", "Blazor WASM", "Material UI", "MudBlazor"],
        },
        {
            title: "APIs",
            color: "#f472b6",
            bgColor: "rgba(236,72,153,0.2)",
            chips: ["RESTFULL", "SOAP", "WCF", "WebHook"],
        },
        {
            title: "Cloud Platforms",
            color: "#34d399",
            bgColor: "rgba(52,211,153,0.2)",
            chips: ["Azure Cloud", "Google Cloud", "Meta Cloud"],
        },
        {
            title: "Database & ORM",
            color: "#facc15",
            bgColor: "rgba(234,179,8,0.2)",
            chips: ["SQL Server", "Azure DB", "NHibernate", "Entity Framework"],
        },
        {
            title: "Tools & Management",
            color: "#22d3ee",
            bgColor: "rgba(34,211,238,0.2)",
            chips: ["SCRUM", "Jira", "Azure DevOps", "Kanban", "GitLab", "GitHub"],
        },
    ];

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
                    }}
                >
                    Technical Skills
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {skillCategories.map(({ title, color, bgColor, chips }) => (
                        <Grid item key={title}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.05, boxShadow: `0px 0px 15px ${color}` }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        width: 300,
                                        p: 3,
                                        backgroundColor: "rgba(30,41,59,0.5)",
                                        border: "1px solid #374151",
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600, mb: 2, color }}
                                    >
                                        {title}
                                    </Typography>

                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        {chips.map((skill, index) => (
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
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}