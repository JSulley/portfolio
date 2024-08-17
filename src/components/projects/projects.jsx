import ProjectItem from "../project-item/project-item";

const projects = [
  {
    'id': 1,
    'title': 'Portfolio',
    'description': 'You\'re looking at it! What\'s infinite recursion you ask? Well, click on that external link icon below (the one next to the GitHub icon) and find out!',
    'techStack': [
      {
        'id': 1,
        'skill': 'JavaScript',
      },
      {
        'id': 2,
        'skill': 'Next.js',
      },
      {
        'id': 3,
        'skill': 'Tailwind CSS',
      }
    ],
    'repoLink': 'https://github.com/JSulley/portfolio',
    'demoLink': 'https://jamessullivan.dev'
  },
  {
    'id': 2,
    'title': 'NASA Mission Control Project',
    'description': 'React app leverages a Node API that lets users schedule missions to go to a habitable Kepler Exoplanet.',
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
    'id': 3,
    'title': 'Math Assessment',
    'description': 'A mini quiz covering some college algebra concepts.',
    'techStack': [
    {
      'id': 1,
      'skill': 'HTML'
    },
    {
      'id': 2,
      'skill': 'CSS'
    },
    {
      'id': 3,
      'skill': 'Bootstrap'
    },
    {
      'id': 4,
      'skill': 'MathJax'
    }],
    'repoLink': 'https://github.com/JSulley/Math-Assessment',
    'demoLink': 'https://jsulley.github.io/Math-Assessment'
  },
  {
    'id': 4,
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
    'repoLink': 'https://github.com/JSulley/Solar-Cell-Research-Application',
    'demoLink': 'https://sulley.shinyapps.io/Solar_Cell_Research_App/'
  }
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl mt-6 text-center font-bold">Projects</h2>
      <div className="flex flex-wrap flex-col space-y-4 m-4">
        {projects.map(project => <ProjectItem key={project.id} project={project}/>)}
      </div>
    </div>
  );
};