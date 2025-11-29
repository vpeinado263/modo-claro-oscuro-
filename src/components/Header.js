import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";
import Image from "next/image"; // Importa el componente Image de next/image

const Header = () => {
  const data = useContext(ThemeContext);
  const [toggleTheme, handleTheme] = data;

  return (
    <header className={toggleTheme}>
      <button onClick={handleTheme}>
        <Image
          src={toggleTheme === "light" ? "/sun.png" : "/sunDark.png"} //Ternario
          alt="theme-logos"
          width={30}
          height={30}
        />
      </button>
      <style jsx>{`
        button {
          background-color: transparent;
          border: none;
        }
        img {
          width: 30px;
        }
      `}</style>
    </header>
  );
};

export default Header;
