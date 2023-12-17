import Image from "next/image";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg"

const socialPlatforms = [
  {
    'id': 1,
    'icon': GitHubIcon,
    'hyperlink': 'https://github.com/JSulley'
  },
  {
    'id': 2,
    'icon': LinkedinIcon,
    'hyperlink': 'https://linkedin.com/in/jsulley'
  }
]

export default function Introduction() {
    return (
      <div className="text-center">
        <h1 className="text-5xl my-2">James Sullivan</h1>
        <h3>Aspiring Software Engineer</h3>
        <div>
          {socialPlatforms.map(social => (
            <a key={social.id} className="inline-block mt-2 mx-1" href={social.hyperlink} target="_blank">
              <Image
                src={social.icon}
                width={32}
                height={32}
                className="inline opacity-40 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    );
}