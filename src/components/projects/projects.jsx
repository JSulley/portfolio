import ProjectItem from "../project-item/project-item";

const projects = [
  {
    title: "Custom CI/CD Pipeline",
    description:
      "Currently developing a shell-script-driven CI/CD pipeline to automate build and test workflows for my Perudo game and other personal C projects. Focused on local automation, with plans to integrate GitHub Actions for remote builds and deployment.",
    tech: ["Bash", "Linux/Unix"],
    links: {
      repoLink: null,
      demoLink: null,
    },
  },
  {
    title: "Perudo Game Implementation",
    description:
      "Developing a terminal-based version of the classic Perudo game using C. Features a turn-based bidding system between a human player and a computer opponent, with full implementation of core game rules. Designed with a focus on portability, memory safety, and clean code structure.",
    tech: ["C"],
    links: {
      repoLink: null,
      demoLink: null,
    },
  },
  {
    title: "Portfolio",
    description:
      "You're looking at it! What's infinite recursion you ask? Well, click on that external link icon below (the one next to the GitHub icon) and find out!",
    tech: ["JavaScript", "Next.js", "Tailwind CSS"],
    links: {
      repoLink: "https://github.com/JSulley/portfolio",
      demoLink: "https://jamessullivan.dev",
    },
  },
  {
    title: "Solar Cell Research Application",
    description:
      "Shiny web app built for the Engineering department at Texas A&M University-Central Texas.",
    tech: ["R", "Shiny", "ggplot2"],
    links: {
      repoLink: "https://github.com/JSulley/Solar-Cell-Research-Application",
      demoLink: "https://sulley.shinyapps.io/Solar_Cell_Research_App/",
    },
  },
];

for (let i = 0; i < projects.length; i++) {
  projects[i].id = i + 1;

  projects[i].techStack = [];
  for (let j = 0; j < projects[i].tech.length; j++) {
    projects[i].techStack.push({
      id: j + 1,
      skill: projects[i].tech[j],
    });
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
