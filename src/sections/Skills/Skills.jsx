import styles from "./StylesSkills.module.css";
import checkmark from "../../assets/checkmark-dark.svg";
import SkillCard from "../../common/SkillCard";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <h2 className={styles.category}>Frontend Development</h2>
      <div className={styles.skillList}>
        <SkillCard src={checkmark} skill="HTML" />
        <SkillCard src={checkmark} skill="CSS" />
        <SkillCard src={checkmark} skill="JavaScript" />
        <SkillCard src={checkmark} skill="React" />
        <SkillCard src={checkmark} skill="Angular" />
      </div>
      <hr />

      <h2 className={styles.category}>Backend Development</h2>
      <div className={styles.skillList}>
        <SkillCard src={checkmark} skill="ASP.NET" />
        <SkillCard src={checkmark} skill="Entity Framework" />
        <SkillCard src={checkmark} skill="SQL Server" />
      </div>
      <hr />

      <h2 className={styles.category}>Tools & Technologies</h2>
      <div className={styles.skillList}>
        <SkillCard src={checkmark} skill="Git" />
        <SkillCard src={checkmark} skill="Docker" />
        <SkillCard src={checkmark} skill="Vs Code" />
        <SkillCard src={checkmark} skill="Github" />
      </div>
    </section>
  );
}

export default Skills;
