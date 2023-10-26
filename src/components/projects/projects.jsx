import ProjectItem from "../project-item/project-item";

const projects = [
  {
    'id': 1,
    'title': 'NASA Mission Control Project',
    'description': 'Aliquip veniam commodo excepteur Lorem ullamco duis esse veniam nostrud elit ullamco.',
    'techStack': 'Lorem',
    'repoLink': 'https://github.com/JSulley/nasa-project'
  },
  {
    'id': 2,
    'title': 'Solar Cell Research Application',
    'description': 'Culpa in officia eu est anim cillum.',
    'techStack': 'Lorem',
    'repoLink': 'https://github.com/JSulley/Solar-Cell-Research-Application'
  }
];

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => <ProjectItem key={project.id} project={project}/>)}
    </div>
  );
};