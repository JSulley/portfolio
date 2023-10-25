import ProjectItem from "../project-item/project-item";

export default function Projects({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => <ProjectItem key={project.id} project={project}/>)}
    </div>
  );
};