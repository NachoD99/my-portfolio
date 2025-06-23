"use client";
import { GraduationCap } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

export default function Education() {

    return (
        <Box id="education" sx={{ py: 10, px: 3, backgroundColor: "rgba(31,41,55,0.3)" }}>
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
                    Education
                </Typography>

                <Stack spacing={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, delay:  0.15 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                backgroundColor: "rgba(30,41,59,0.5)",
                                border: "1px solid #374151",
                                '&:hover': {
                                    borderColor: "rgba(96,165,250,0.5)",
                                    boxShadow: "0 0 15px rgba(96,165,250)",
                                },
                                borderRadius: 8,
                                transition: "all 0.3s ease",
                            }}
                        >
                            <Grid container spacing={2} alignItems="flex-start">
                                <Grid item>
                                    <Box
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            backgroundColor: "rgba(59,130,246,0.2)",
                                            display: "inline-flex",
                                        }}
                                    >
                                        <GraduationCap size={24} color="#60a5fa" />
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#fff" }}>
                                        Diploma in Information Systems Engineering
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: "#60a5fa", mb: 1 }}>
                                        National Technological University
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#9ca3af", mb: 2 }}>
                                        March 2018 - October 2023 • GPA 3.0
                                    </Typography>
                                    <Stack component="ul" spacing={0.5} sx={{ pl: 2, color: "#d1d5db" }}>
                                        <li>Participation in the Industry 4.0 Research Group</li>
                                        <li>Capstone Project: Managing Contributions for NGOs Using a Progressive Web Application</li>
                                        <li>Participation in annual national conferences</li>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Paper>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, delay:  0.15 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                backgroundColor: "rgba(30,41,59,0.5)",
                                border: "1px solid #374151",
                                '&:hover': {
                                    borderColor: "rgba(168,85,247,0.5)",
                                    boxShadow: "0 0 15px rgba(168,85,247)",
                                },
                                borderRadius: 8,
                                transition: "all 0.3s ease",
                            }}
                        >
                            <Grid container spacing={2} alignItems="flex-start">
                                <Grid item>
                                    <Box
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            backgroundColor: "rgba(168,85,247,0.2)",
                                            display: "inline-flex",
                                        }}
                                    >
                                        <GraduationCap size={24} color="#a78bfa" />
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#fff" }}>
                                        Bachelor in Economics and Business Administration
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: "#a78bfa", mb: 1 }}>
                                        "Pablo VI" Institute
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                                        March 2012 - December 2017
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </motion.div>
                </Stack>
            </Box>
        </Box>
    );
}
