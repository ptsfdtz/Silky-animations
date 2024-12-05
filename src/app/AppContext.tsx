"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const ThemeOptions = {
  dark: "dark",
  light: "light",
} as const;

type Theme = keyof typeof ThemeOptions;

const ThemeContext = createContext<{
  theme: Theme;
  switchTheme: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    document.startViewTransition
      ? document.startViewTransition(() => applyTheme(newTheme))
      : applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () =>
  useContext(ThemeContext) as {
    theme: Theme;
    switchTheme: () => void;
  };
