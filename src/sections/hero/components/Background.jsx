"use client";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function Hero() {

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
          backgroundImage: `url('/images/blob-scene-haikei.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.7,
          zIndex: 0,
        }}
      />
      <GlowBox top="25%" left="25%" width={256} height={256} color="rgba(59, 130, 246, 0.1)" />
      <GlowBox top="10%" left="85%" width={256} height={256} color="rgba(224, 59, 246, 0.1)" />
      <GlowBox bottom="25%" right="25%" width={384} height={384} color="rgba(168, 85, 247, 0.1)" />
      <GlowBox bottom="-15%" left="10%" width={384} height={384} color="rgba(78, 59, 246, 0.1)" />
    </>
  );
}