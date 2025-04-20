import ProjectItem from "../project-item/project-item";

const projectTitles = [
  "Perudo Game Implementation",
  "Portfolio",
  "NASA Mission Control Project",
  "Math Assessment",
  "Solar Cell Research Application",
];

const projectDescriptions = [
  "Terminal-based version of Perudo (Liar's Dice) using the C language",
  "You're looking at it! What's infinite recursion you ask? Well, click on that external link icon below (the one next to the GitHub icon) and find out!",
  "React app leverages a Node API that lets users schedule missions to go to a habitable Kepler Exoplanet.",
  "A mini quiz covering some college algebra concepts.",
  "Shiny web app built for the Engineering department at Texas A&M University-Central Texas.",
];

const projectSkills = [
  ["C"],
  ["JavaScript", "Next.js", "Tailwind CSS"],
  ["JavaScript", "Node.js", "Express.js"],
  ["HTML", "CSS", "Bootstrap", "MathJax"],
  ["R", "Shiny", "ggplot2"],
];

const projectLinks = [
  {
    repoLink: null,
    demoLink: null,
  },
  {
    repoLink: "https://github.com/JSulley/portfolio",
    demoLink: "https://jamessullivan.dev",
  },
  {
    repoLink: "https://github.com/JSulley/nasa-project",
  },
  {
    repoLink: "https://github.com/JSulley/Math-Assessment",
    demoLink: "https://jsulley.github.io/Math-Assessment",
  },
  {
    repoLink: "https://github.com/JSulley/Solar-Cell-Research-Application",
    demoLink: "https://sulley.shinyapps.io/Solar_Cell_Research_App/",
  },
];

const projects = Array(projectTitles.length);

for (let i = 0; i < projectTitles.length; i++) {
  projects[i] = {
    id: i + 1,
    title: projectTitles[i],
    description: projectDescriptions[i],
    techStack: Array(projectSkills[i].length),
  };

  for (let j = 0; j < projectSkills[i].length; j++) {
    projects[i].techStack[j] = {
      id: j + 1,
      skill: projectSkills[i][j],
    };
  }

  if (projectLinks[i].repoLink) {
    projects[i].repoLink = projectLinks[i].repoLink;
  }

  if (projectLinks[i].demoLink) {
    projects[i].demoLink = projectLinks[i].demoLink;
  }
}

export default function Projects() {
  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold">Projects</h2>
      <div className="mx-auto grid w-full max-w-sm max-w-xs gap-4 sm:max-w-xl md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
