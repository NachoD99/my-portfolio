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
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation("about");

    const features = [
        {
            icon: <Code size={32} color="#60a5fa" />,
            title: t("features.frontend.title"),
            description: t("features.frontend.description"),
            color: "#60a5fa",
        },
        {
            icon: <Database size={32} color="#a78bfa" />,
            title: t("features.backend.title"),
            description: t("features.backend.description"),
            color: "#a78bfa",
        },
        {
            icon: <Cloud size={32} color="#ec4899" />,
            title: t("features.cloud.title"),
            description: t("features.cloud.description"),
            color: "#ec4899",
        },
        {
            icon: <ExternalLink size={32} color="#34d399" />,
            title: t("features.web3.title"),
            description: t("features.web3.description"),
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
                        fontFamily: 'Space Grotesk',
                    }}
                >
                    {t("title")}
                </Typography>

                {/* Flex container */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                        width: "100%",
                    }}
                >
                    {/* Text */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="body1"
                            sx={{ color: "#d1d5db", mb: 3, lineHeight: 1.75 }}
                        >
                            {t("paragraph1")}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "#d1d5db", mb: 3, lineHeight: 1.75 }}
                        >
                            {t("paragraph2")}
                        </Typography>

                        <Stack direction="row" spacing={3} flexWrap="wrap">
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "#60a5fa" }}>
                                <MapPin size={20} />
                                <Typography variant="body2">{t("location")}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "#a78bfa" }}>
                                <Briefcase size={20} />
                                <Typography variant="body2">{t("experience")}</Typography>
                            </Stack>
                        </Stack>
                    </Box>

                    {/* Features */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                            gap: 3,
                        }}
                    >
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ type: "spring", stiffness: 300, delay: idx * 0.1 }}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        width: "100%",
                                        backgroundColor: "rgba(30,41,59,0.5)",
                                        border: "1px solid #374151",
                                        borderRadius: 8,
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
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 600, mb: 1, color: "#fff", fontFamily: 'Space Grotesk' }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
