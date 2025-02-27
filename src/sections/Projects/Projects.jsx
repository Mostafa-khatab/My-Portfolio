import { useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import useGitHubRepos from "../../common/useGitHubRepos";
import styles from "./ProjectStyles.module.css";

const Projects = () => {
  const navigate = useNavigate();
  const { repos, loading, error } = useGitHubRepos("Mostafa-khatab");

  return (
    <motion.section
      className={styles.projects}
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Some of my most interesting projects.
      </motion.p>

      <div className={styles.stateMessages}>
        {loading && <div className={styles.loader}>Loading...</div>}
        {error && <div className={styles.error}>Error: {error}</div>}
        {!loading && !error && repos.length === 0 && (
          <div className={styles.empty}>No projects found</div>
        )}
      </div>

      <div className={styles.projectList}>
        {repos.slice(0, 4).map((project, index) => (
          <motion.article
            key={project.id}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
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
      </div>

      {repos.length > 4 && (
        <motion.div
          className={styles.viewAllContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => navigate("/all-projects")}
            className={styles.viewAllButton}
          >
            View All Projects
          </button>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
