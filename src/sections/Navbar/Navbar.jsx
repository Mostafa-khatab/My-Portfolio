import { useEffect } from "react";
import styles from "./NavbarStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for navbar height
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li>
            <a href="#hero" className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.link}>
              About Me
            </a>
          </li>
          {/* <li>
            <a href="#skills" className={styles.link}>
              Skills
            </a>
          </li> */}
          <li>
            <a href="#projects" className={styles.link}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>

        <div className={styles.rightSection}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <img src={themeIcon} alt="Theme toggle icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
