"use client";

import { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import LanguagesSwitch from "./LanguagesSwitch";

export default function MobileNav() {
    const [activeSection, setActiveSection] = useState("hero");
    const [drawerOpen, setDrawerOpen] = useState(false);
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
        setDrawerOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {!isMdUp && (
                <>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        PaperProps={{
                            sx: {
                                backgroundColor: "#0f172a",
                                color: "#ffffff",
                                width: "70%",
                            },
                        }}
                    >
                        <List>
                            {navItems.map((item) => {
                                const key = item.toLowerCase();
                                return (
                                    <ListItem key={item} disablePadding>
                                        <ListItemButton onClick={() => scrollToSection(key)}>
                                            <ListItemText
                                                primary={t(item)}
                                                primaryTypographyProps={{
                                                    fontSize: "1rem",
                                                    fontWeight: 500,
                                                    fontFamily: 'Space Grotesk'
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                        <LanguagesSwitch />
                    </Drawer>
                </>
            )}
        </>
    );
}
