"use client";

import { createContext, useContext, useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("mertsis-theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
      setThemeState(stored);
    }
  }, []);

  function applyTheme(t: Theme) {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(t);
  }

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("mertsis-theme", t);
    applyTheme(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("mertsis-theme", next);
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
