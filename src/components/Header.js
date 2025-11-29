import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";
import Image from "next/image";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <button onClick={handleTheme}>
        <Image
          src={theme === "light" ? "/sun.png" : "/sunDark.png"} 
          alt="theme-icon"
          width={30}
          height={30}
        />
      </button>

      <style jsx>{`
        header {
          padding: 1rem;
          display: flex;
          justify-content: flex-end;
        }
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;
