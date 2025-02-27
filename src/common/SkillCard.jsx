function SkillCard({ src, skill }) {
  return (
    <span>
      <img src={src} alt="checkmark" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillCard;
