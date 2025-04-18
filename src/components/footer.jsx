import Image from "next/image";
import GitHub from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

const socialPlatforms = [
  {
    id: 1,
    icon: GitHub,
    hyperlink: "https://github.com/JSulley",
    iconDesc: "Icon of GitHub",
  },
  {
    id: 2,
    icon: LinkedIn,
    hyperlink: "https://linkedin.com/in/sullivan-james",
    iconDesc: "Icon of LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d3748] h-[10rem] mt-12">
      <div className="grid grid-cols-2 h-[100%] place-items-center">
        <Image
          src="/personal-icon.svg"
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
                alt={social.iconDesc}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
