"use client";

import { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguagesSwitch from "./LanguagesSwitch";
import { useTranslation } from "react-i18next";

export default function DesktopNav() {
    const [activeSection, setActiveSection] = useState("hero");
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const { t } = useTranslation("navigation");

    const navItems = [
        "about",
        "education",
        "skills",
        "experience",
        "certifications",
        "contact",
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.toLowerCase());
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {isMdUp && (
                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                        alignItems: "center",
                    }}
                >
                    {navItems.map((item) => {
                        const key = item.toLowerCase();
                        const isActive = activeSection === key;
                        return (
                            <Button
                                key={item}
                                onClick={() => scrollToSection(key)}
                                size="small"
                                sx={{
                                    position: "relative",
                                    px: 1,
                                    py: 0.5,
                                    color: isActive ? "#a78bfa" : "#cbd5e1",
                                    fontWeight: isActive ? 600 : 400,
                                    fontSize: "0.9rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    transition: "all 0.3s ease",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -4,
                                        left: 0,
                                        height: 2,
                                        width: isActive ? "100%" : "0%",
                                        backgroundColor: "#a78bfa",
                                        transition: "width 0.3s ease",
                                    },
                                    "&:hover": {
                                        color: "#a78bfa",
                                        "&::after": {
                                            width: "100%",
                                        },
                                    },
                                }}
                            >
                                {t(item)}
                            </Button>
                        );
                    })}

                    <LanguagesSwitch />
                </Box>
            )
            }
        </>
    );
}
