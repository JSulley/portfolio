import ProjectItem from "../project-item/project-item";

const projects = [
  {
    'id': 1,
    'title': 'NASA Mission Control Project',
    'description': 'Aliquip veniam commodo excepteur Lorem ullamco duis esse veniam nostrud elit ullamco.',
    'techStack': [
    {
      'id': 1,
      'skill': 'JavaScript'
    },
    {
      'id': 2,
      'skill': 'Node.js'
    },
    {
      'id': 3,
      'skill': 'Express.js'
    },
    {
      'id': 4,
      'skill': 'Jest'
    }],
    'repoLink': 'https://github.com/JSulley/nasa-project'
  },
  {
    'id': 2,
    'title': 'Solar Cell Research Application',
    'description': 'Shiny web app built for the Engineering department at Texas A&M University-Central Texas.',
    'techStack': [
      {
        'id': 1,
        'skill': 'R',
      },
      {
        'id': 2,
        'skill': 'Shiny',
      },
      {
        'id': 3,
        'skill': 'ggplot2',
      },
    ],
    'repoLink': 'https://github.com/JSulley/Solar-Cell-Research-Application'
  }
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl mt-6 ml-2 mb-4">Projects</h2>
      <div className="grid gap-3 grid-cols-2">
        {projects.map(project => <ProjectItem key={project.id} project={project}/>)}
      </div>
    </div>
  );
};