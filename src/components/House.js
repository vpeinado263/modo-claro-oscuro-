import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const House = () => {
  const data = useContext(ThemeContext);
  const [toggleTheme] = data;

  return (
    <div
      style={{
        height: "100vh",
      }}
      className={toggleTheme}
    >
      Home
    </div>
  );
};

export default House;
