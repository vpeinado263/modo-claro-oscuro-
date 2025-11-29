import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const House = () => {
  const { theme } = useContext(ThemeContext); // <-- ahora usamos theme, no toggleTheme

  return (
    <div
      style={{
        height: "100vh",
      }}
      className={theme} // <-- aplicación del tema actual
    >
      Home
    </div>
  );
};

export default House;
