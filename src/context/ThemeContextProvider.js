import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // Estado inicial: intenta leerlo de localStorage o usa "light"
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // Actualiza localStorage cuando cambia el tema
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme; // agrega clase al <html>
  }, [theme]);

  // Alternar entre light/dark
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const data = { theme, handleTheme };

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
