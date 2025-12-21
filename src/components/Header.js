import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";
import Image from "next/image";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className="nav">
        <h1 className="title">CONTADOR</h1>

        <button className="theme-btn" onClick={handleTheme}>
          <Image
            src={theme === "light" ? "/sun.png" : "/sunDark.png"}
            width={28}
            height={28}
            alt="theme-icon"
          />
        </button>
      </nav>

      <style jsx>{`
        header {
          padding: 1rem 2rem;
          border-bottom: 1px solid var(--border);
          background: var(--bg-soft);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          font-size: 1.3rem;
        }

        .theme-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .theme-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </header>
  );
};

export default Header;
