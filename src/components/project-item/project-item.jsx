import Image from "next/image";
import GitHubIcon from "../../../public/github-icon.svg";

export default function ProjectItem({ project }) {
  const { title, description, techStack, repoLink } = project;

  return (
    <div className="even:mr-4 odd:ml-4 border-2 border-gray-950 rounded-xl mx-4pl-2 p-2">
      <div className="mb-2">
        <span className="text-xl align-middle">{title}</span>
        <a href={repoLink} target="_blank" className="ml-2">
          <Image
            src={GitHubIcon}
            width={32}
            height={32}
            className="inline opacity-40 hover:opacity-100"
          />
        </a>
      </div>
      {techStack.map(skill => <div key={skill.id} className="border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 text-[#9ecaff] rounded-xl mx-1 p-1 inline-block sm:max-lg:my-1">{skill.skill}</div>)}
      <p className="mt-2">{description}</p>
    </div>
  );
};