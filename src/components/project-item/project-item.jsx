import Image from "next/image";
import GitHub from "@/assets/icons/github.svg";
import ExternalLink from "@/assets/icons/external-link.svg";

function GitHubLink({ project }) {
  const { repoLink } = project;

  return (
    <a href={repoLink} target="_blank">
      <Image
        src={GitHub}
        width={32}
        height={32}
        className="inline opacity-40 hover:opacity-100"
        alt="Icon of GitHub"
      />
    </a>
  );
}

function DemoLink({ project }) {
  const { demoLink } = project;

  return (
    <a href={demoLink} target="_blank">
      <Image
        src={ExternalLink}
        width={32}
        height={32}
        className="ml-2 inline opacity-40 hover:opacity-100"
        alt="Icon of External Link"
      />
    </a>
  );
}

export default function ProjectItem({ project }) {
  const { title, description, techStack } = project;

  return (
    <div className="relative h-[20em] border-2 border-gray-950 bg-gray-950 rounded-xl p-2">
      {/* Project Title */}
      <span className="text-white text-xl font-semibold">{title}</span>

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
      <div className="absolute mt-2 text-center bottom-4 right-0 left-0">
        {"repoLink" in project && <GitHubLink project={project} />}
        {"demoLink" in project && <DemoLink project={project} />}
      </div>
    </div>
  );
}
