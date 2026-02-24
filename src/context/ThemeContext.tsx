"use client";

import { createContext, useContext, ReactNode } from "react";

// Simplified theme: Only one standard theme
const themeData = {
  primary: "#065f46",
  secondary: "#059669",
  accent: "#047857",
  button: "#047857",
  buttonHover: "#064e3b",
  greeting: "Formando futuro desde el corazón de Chiloé",
  decoration: "",
  decorationHidden: true,
  bannerSrc:
    "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};

interface ThemeContextValue {
  themeData: typeof themeData;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // No state needed, just constant theme data
  return (
    <ThemeContext.Provider value={{ themeData }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
