"use client";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useColorMode } from "../../../context/ThemeContext";

export default function Hero() {
  const { mode } = useColorMode();

  const GlowBox = ({ top, left, bottom, right, width, height, color }) => (
    <Box
      component={motion.div}
      initial={{ opacity: 0.6, scale: 1 }}
      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      sx={{
        position: "absolute",
        top,
        left,
        bottom,
        right,
        width,
        height,
        backgroundColor: color,
        borderRadius: "50%",
        filter: "blur(48px)",
        zIndex: 0,
      }}
    />
  );
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(88, 28, 135, 0.2))",
          backgroundImage: "",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/images/${mode === "dark" ? "bg-dark" : "bg-light"}.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.7,
          zIndex: 0,
        }}
      />
      <GlowBox top="20%" left="20%" width={320} height={320} color="rgba(59, 130, 246, 0.18)" />
      <GlowBox top="5%" left="80%" width={300} height={300} color="rgba(224, 59, 246, 0.18)" />
      <GlowBox bottom="20%" right="20%" width={450} height={450} color="rgba(168, 85, 247, 0.16)" />
      <GlowBox bottom="-10%" left="5%" width={420} height={420} color="rgba(78, 59, 246, 0.16)" />
      <GlowBox top="50%" left="50%" width={200} height={200} color="rgba(236, 72, 153, 0.1)" />
    </>
  );
}