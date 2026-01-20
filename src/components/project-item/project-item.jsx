import { FiGithub, FiExternalLink } from "react-icons/fi";

function GitHubLink({ project }) {
  return (
    <a
      href={project.links.repoLink}
      target="_blank"
      rel="noopener noreferrer"
      title="View repository"
      className="text-2xl transition hover:text-[#9ecaff] md:text-3xl"
    >
      <FiGithub />
    </a>
  );
}

function DemoLink({ project }) {
  return (
    <a
      href={project.links.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      title="View demo"
      className="text-2xl transition hover:text-[#9ecaff] md:text-3xl"
    >
      <FiExternalLink />
    </a>
  );
}

export default function ProjectItem({ project }) {
  return (
    <div className="flex h-full flex-col rounded-xl border-2 border-gray-950 bg-gray-950 p-4">
      {/* Project Title */}
      <span className="block text-xl font-semibold text-white">
        {project.title}
      </span>

      {/* One-line description (always visible) */}
      <p className="mt-1 text-sm text-gray-300">{project.description}</p>

      {/* Bullets (hidden on small screens) */}
      {project.bullets && project.bullets.length > 0 && (
        <ul className="mt-3 hidden list-disc space-y-1 pl-5 text-sm text-gray-400 md:block">
          {project.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      )}

      {/* Tech Stack */}
      <div className="my-3 flex flex-wrap gap-2">
        {project.tech.map((skill, idx) => (
          <div
            key={idx}
            className="rounded-xl border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 px-2 py-1 text-xs text-[#9ecaff]"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Project Links */}
      <div className="mt-auto flex justify-center gap-6 text-white">
        {project.links.repoLink ? (
          <GitHubLink project={project} />
        ) : (
          <FiGithub
            title="Private repository"
            className="cursor-not-allowed text-2xl text-sm text-gray-600 md:text-3xl"
          />
        )}
        {project.links.demoLink ? (
          <DemoLink project={project} />
        ) : (
          <FiExternalLink
            title="Demo unavailable"
            className="cursor-not-allowed text-2xl text-sm text-gray-600 md:text-3xl"
          />
        )}
      </div>
    </div>
  );
}
