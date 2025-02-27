import { motion } from "framer-motion";
import styles from "./HeroStyles.module.css";
import Img from "../../assets/me.jpg";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import twitterlight from "../../assets/twitter-light.svg";
import twitterdark from "../../assets/twitter-dark.svg";
import facebooklight from "../../assets/facebook-light.svg";
import facebookdark from "../../assets/facebook-dark.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme } = useTheme();
  const twitterIcon = theme === "dark" ? twitterdark : twitterlight;
  const githubIcon = theme === "dark" ? githubdark : githublight;
  const linkedinIcon = theme === "dark" ? linkedindark : linkedinlight;
  const facebookIcon = theme === "dark" ? facebookdark : facebooklight;

  return (
    <motion.section
      id="hero"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.colorModeContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={Img} alt="Profile Pic" className={styles.image} />
      </motion.div>
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Hi, I'm</h2>
        <h1>
          Mostafa
          <br />
          Khattab
        </h1>
        <h2>Backend Developer</h2>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/mostafa-mohamed-b6aa8a275/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/Mostafa-khatab" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://github.com/Mostafa-khatab" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100015362012727"
            target="_blank"
          >
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
        </motion.span>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          With a passion for developing modern Asp.net web apps
        </motion.p>
        <motion.a
          href={cv}
          download
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
