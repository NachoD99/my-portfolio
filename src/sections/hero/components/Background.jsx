"use client";
import Box from "@mui/material/Box";

export default function Hero() {
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
          top: "25%",
          left: "25%",
          width: 256,
          height: 256,
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderRadius: "50%",
          filter: "blur(48px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: 384,
          height: 384,
          backgroundColor: "rgba(168, 85, 247, 0.1)",
          borderRadius: "50%",
          filter: "blur(48px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('src/images/blob-scene-haikei.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.7,
          zIndex: 0,
        }}
      />
    </>
  );
}