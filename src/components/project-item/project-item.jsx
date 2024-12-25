import Image from "next/image";
import GitHubIcon from "../../../public/github-icon.svg";
import ExternalLinkIcon from "../../../public/external-link-icon.svg";

function GitHubLink({ project }) {
  const { repoLink } = project;

  return (
    <a href={repoLink} target="_blank">
      <Image
        src={GitHubIcon}
        width={32}
        height={32}
        className="inline opacity-40 hover:opacity-100"
        alt="Icon of GitHub"
      />
    </a>
  )
}

function DemoLink({ project }) {
  const { demoLink } = project;

  return (
    <a href={demoLink} target="_blank">
      <Image
        src={ExternalLinkIcon}
        width={32}
        height={32}
        className="ml-2 inline opacity-40 hover:opacity-100"
      />
    </a>
  );
}

export default function ProjectItem({ project }) {
  const { title, description, techStack } = project;

  return (
    <div className="border-2 border-gray-950 rounded-xl mx-4pl-2 p-2">

      {/* Project Title */}
      <span className="text-xl font-semibold">{title}</span>

      {/* Description */}
      <p className="mt-1 mb-3">{description}</p>

      {/* Tech Stack */}
      {techStack.map((skill) => (
        <div
          key={skill.id}
          className="border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 text-[#9ecaff] rounded-xl mx-1 p-1 inline-block sm:max-lg:my-1 mb-2"
        >
          {skill.skill}
        </div>
      ))}

      {/* Project Links */}
      <div className="mt-2 text-center">
        {("repoLink" in project) && <GitHubLink project={project}/>}
        {("demoLink" in project) && <DemoLink project={project}/>}
      </div>
    </div>
  );
}
