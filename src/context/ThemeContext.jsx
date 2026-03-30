import { createContext, useContext, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ColorModeContext = createContext({ toggle: () => {}, mode: "dark" });

export const useColorMode = () => useContext(ColorModeContext);

function buildTheme(mode) {
  return createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: { default: "#0d1117", paper: "rgba(30,41,59,0.5)" },
            text: { primary: "#e5e7eb", secondary: "#9ca3af" },
            divider: "#374151",
          }
        : {
            background: { default: "#f1f5f9", paper: "rgba(255,255,255,0.85)" },
            text: { primary: "#1e293b", secondary: "#64748b" },
            divider: "#e2e8f0",
          }),
    },
  });
}

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ColorModeContext.Provider value={{ toggle, mode }}>
      <ThemeProvider theme={buildTheme(mode)}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
