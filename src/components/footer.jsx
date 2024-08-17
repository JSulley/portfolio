import Image from "next/image";
import GitHubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const socialPlatforms = [
  {
    id: 1,
    icon: GitHubIcon,
    hyperlink: "https://github.com/JSulley",
  },
  {
    id: 2,
    icon: LinkedinIcon,
    hyperlink: "https://linkedin.com/in/sullivan-james",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d3748] h-[10rem] mt-12">
      <div className="grid grid-cols-2 h-[100%] place-items-center">
        
        {/* Personal Icon */}
        <Image
          src="/icon.svg"
          width={50}
          height={50}
          alt="James's personal icon"
        />

        {/* Social Media Links */}
        <div className="text-center">
          {socialPlatforms.map((social) => (
            <a
              key={social.id}
              className="inline-block mt-2 mx-3 first:mr-3 last:ml-3"
              href={social.hyperlink}
              target="_blank"
            >
              <Image
                src={social.icon}
                width={32}
                height={32}
                className="opacity-40 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
