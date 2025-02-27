import { useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import useGitHubRepos from "../../common/useGitHubRepos";
import styles from "./ProjectStyles.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const AllProjects = () => {
  const navigate = useNavigate();
  const { repos, loading, error } = useGitHubRepos("Mostafa-khatab");

  return (
    <motion.section
      className={styles.allProjects}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.button
        onClick={() => navigate(-1)}
        className={styles.backButton}
        aria-label="Go back"
        variants={fadeInUp}
        custom={0.1}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)",
        }}
        whileTap={{ scale: 0.98, boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)" }}
      >
        <FaArrowLeft /> Back to Featured
      </motion.button>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        All Projects
      </motion.h2>

      <motion.div
        className={styles.projectList}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {repos.map((project, index) => (
          <motion.article
            key={project.id}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className={styles.projectContent}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDescription}>
                {project.description || "No description available."}
              </p>
              <div className={styles.projectMeta}>
                <span className={styles.language}>
                  {project.language || "Various"}
                </span>
                <span className={styles.updated}>
                  Updated: {new Date(project.updated_at).toLocaleDateString()}
                </span>
              </div>

              <div className={styles.links}>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={styles.icon} /> Source Code
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className={styles.icon} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AllProjects;
