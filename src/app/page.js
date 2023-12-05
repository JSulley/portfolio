import Projects from "@/components/projects/projects";
import Education from "@/components/education/education";
import Certificates from "@/components/certificates/certificates";
import Introduction from "@/components/introduction/introduction";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Projects />
      <Education />
      <Certificates />
    </main>
  );
}
