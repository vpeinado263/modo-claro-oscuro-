import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div className="footer-container">
        <p>© 2025 — Víctor Peinado</p>

        <div className="icons">
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <Image src="/github.svg" width={26} height={26} alt="GitHub" />
          </Link>
          <Link href="https://github.com/" target="_blank">
            <Image src="/linkedin.svg" width={26} height={26} alt="LinkedIn" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        footer {
          border-top: 1px solid var(--border);
          padding: 1.5rem 0;
          margin-top: 3rem;
          background: var(--bg-soft);
        }

        .footer-container {
          max-width: 960px;
          margin: auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icons {
          display: flex;
          gap: 1rem;
        }

        a {
          opacity: 0.8;
          transition: opacity 0.2s, transform 0.2s;
        }

        a:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
