import { useState, useEffect } from "react";

const useGitHubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok)
          throw new Error(`GitHub API Error: ${response.status}`);

        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid API response");

        const filteredRepos = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(filteredRepos);
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};

export default useGitHubRepos;
