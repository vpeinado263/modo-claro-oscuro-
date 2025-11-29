import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme}>
      <div className="footer-content">
        <p>© 2025 - Mi Proyecto React/Next.js Sistema Claro - Oscuro</p>
      </div>

      <style jsx>{`
        footer {
          padding: 2rem;
          text-align: center;
          border-top: 1px solid var(--border);
          margin-top: 3rem;
        }

        .footer-content p {
          margin: 5px 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
