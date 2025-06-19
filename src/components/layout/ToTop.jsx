"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Fab, Zoom } from "@mui/material";
import { styled } from "@mui/material/styles";

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  zIndex: 1000,
  backgroundColor: "#60a5fa",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#3b82f6",
  },
}));

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <ScrollTopButton size="medium" onClick={scrollToTop} aria-label="scroll back to top">
        <ArrowUp size={20} />
      </ScrollTopButton>
    </Zoom>
  );
}
