import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const Footer = () => {
  const data = useContext(ThemeContext);
  const [toggleTheme] = data;

  return (
    <div
      style={{
        height: "100vh",
      }}
      className={toggleTheme}
    >
      Footer
    </div>
  );
};

export default Footer;
