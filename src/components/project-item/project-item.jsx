export default function ProjectItem({ project }) {
  const { title, description, techStack, repoLink } = project;

  return (
    <div className="even:mr-4 odd:ml-4 border-2 border-gray-950 rounded-xl mx-4pl-2 p-2">
      <h3 className="text-xl mb-2">{title}</h3>
      {techStack.map(skill => <div key={skill.id} className="border-2 border-sky-400 bg-sky-400 rounded-xl mx-1 p-1 inline-block sm:max-lg:my-1">{skill.skill}</div>)}
      <p>{description}</p>
      <a href={repoLink} target="_blank">View on GitHub</a>
    </div>
  );
};