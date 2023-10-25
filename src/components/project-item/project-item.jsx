export default function ProjectItem({ project }) {
  const { title, description, techStack, repoLink } = project;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{techStack}</p>
      <ul>
        <li>Skill</li>
      </ul>
      <a href={repoLink} target="_blank">View on GitHub</a>
    </div>
  );
};