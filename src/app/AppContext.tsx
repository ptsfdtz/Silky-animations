"use client";

import {
  Context,
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
  const [theme, setTheme] = useState<Theme>(ThemeOptions.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && Object.values(ThemeOptions).includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === ThemeOptions.dark
      );
    }
  }, []);

  const switchTheme = () => {
    const newTheme =
      theme === ThemeOptions.light ? ThemeOptions.dark : ThemeOptions.light;

    if (!document.startViewTransition) {
      applyTheme(newTheme);
      return;
    }

    document.startViewTransition(() => applyTheme(newTheme));
  };

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === ThemeOptions.dark
    );
    document.documentElement.classList.toggle(
      "light",
      newTheme === ThemeOptions.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () =>
  useContext(
    ThemeContext as Context<{
      theme: keyof typeof ThemeOptions;
      switchTheme: () => void;
    }>
  );
