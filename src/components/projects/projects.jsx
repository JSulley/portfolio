import ProjectItem from "../project-item/project-item";

const projects = [
  {
    title: "Transaction Validation Stress Tester",
    description:
      "C-based transaction validation and stress-testing tool that simulates, executes, and analyzes thousands of account transactions with automated workflows.",
    tech: ["C", "Bash", "Linux/Unix", "Jira"],
    bullets: [
      "Develop a C transaction engine to process deposits, withdrawals, and transfers across large datasets",
      "Automate CSV data loading and stress-testing workflows using Bash, ensuring system correctness under load",
    ],
    links: {
      repoLink: null,
      demoLink: null,
    },
  },
  {
    title: "Custom CI/CD Pipeline",
    description:
      "A shell-script-driven CI/CD pipeline designed to automate build and test workflows for C-based projects.",
    tech: ["Bash", "Linux/Unix"],
    bullets: [
      "Building local automation workflows to standardize builds and tests across multiple C projects",
      "Designing the pipeline to be lightweight, reproducible, and easy to extend",
    ],
    links: {
      repoLink: null,
      demoLink: null,
    },
  },
  {
    title: "Perudo Game Implementation",
    description:
      "Terminal-based implementation of the dice game Perudo (Liar's Dice) in C, featuring interactive gameplay and robust game logic handling.",
    tech: ["C", "Linux/Unix"],
    bullets: [
      "Implemented core game logic, managing multiple players, bids, and dice outcomes",
      "Built a terminal-based interface for interactive gameplay and user-friendly experience",
    ],
    links: {
      repoLink: null,
      demoLink: null,
    },
  },
  {
    title: "Solar Cell Research Application",
    description:
      "Interactive Shiny web app built to streamline solar cell research for the Engineering department at Texas A&M-Central Texas",
    tech: ["R", "Shiny", "ggplot2"],
    bullets: [
      "Implemented data visualizations, such as interactive heatmaps, improving clarity and efficiency in interpreting experimental results",
      "Created a curve detection feature with hover-triggered animations to support streamlined data modeling and analysis with minimal manual effort",
    ],
    links: {
      repoLink: "https://github.com/JSulley/Solar-Cell-Research-Application",
      demoLink: "https://sulley.shinyapps.io/Solar_Cell_Research_App/",
    },
  },
];

export default function Projects() {
  return (
    <div className="px-4 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Projects</h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, idx) => (
          <ProjectItem key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
