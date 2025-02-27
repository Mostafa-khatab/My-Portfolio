import styles from "./AboutMe.module.css";
import profileImage from "../../assets/me.jpg";
import { FaReact, FaAngular, FaDocker } from "react-icons/fa";
import { DiDotnet, DiDatabase } from "react-icons/di"; // Alternative for .NET & Database
import { TbDatabaseCog } from "react-icons/tb"; // EF Core & Repository Pattern

const AboutMe = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.container}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />

        <div className={styles.textContainer}>
          <p>
            Hi! I'm <strong>Mostafa Khattab</strong>, a software development
            engineer and a Bachelor's student in Computer Science at Modern
            Academy University in Egypt. I have a strong academic record,
            achieving an Excellent grade, and I'm passionate about building
            innovative software solutions.
          </p>
        </div>
      </div>

      <h3 className={styles.techTitle}>
        These are a few technologies that I've been working with recently:
      </h3>

      <div className={styles.techIcons}>
        <div className={styles.techItem}>
          <DiDotnet size={40} color="#5C2D91" />
          <span>ASP.NET</span>
        </div>
        <div className={styles.techItem}>
          <TbDatabaseCog size={40} color="#FFC107" />
          <span>EF Core</span>
        </div>
        <div className={styles.techItem}>
          <TbDatabaseCog size={40} color="#FF5733" />
          <span>LINQ</span>
        </div>
        <div className={styles.techItem}>
          <TbDatabaseCog size={40} color="#3498db" />
          <span>Repository Pattern</span>
        </div>
        <div className={styles.techItem}>
          <DiDatabase size={40} color="#CC2927" />
          <span>SQL Server</span>
        </div>
        <div className={styles.techItem}>
          <FaReact size={40} color="#61DAFB" />
          <span>React</span>
        </div>
        <div className={styles.techItem}>
          <FaAngular size={40} color="#DD0031" />
          <span>Angular</span>
        </div>
        <div className={styles.techItem}>
          <FaDocker size={40} color="#2496ED" />
          <span>Docker</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
