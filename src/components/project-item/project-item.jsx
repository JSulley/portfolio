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
    <div className="flex h-full flex-col rounded-xl border-2 border-gray-950 bg-gray-950 p-4">
      {/* Project Title */}
      <span className="block text-xl font-semibold text-white">{title}</span>

      {/* Description */}
      <p className="mb-3 mt-1 hidden md:line-clamp-2 lg:line-clamp-3">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="my-2">
        {techStack.map((skill) => (
          <div
            key={skill.id}
            className="m-1 inline-block rounded-xl border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 p-1 text-[#9ecaff]"
          >
            {skill.skill}
          </div>
        ))}
      </div>

      {/* Project Links */}
      <div className="mt-auto text-center">
        {"repoLink" in project && <GitHubLink project={project} />}
        {"demoLink" in project && <DemoLink project={project} />}
      </div>
    </div>
  );
}
