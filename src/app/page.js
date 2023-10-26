import Projects from "@/components/projects/projects";
import Education from "@/components/education/education";
import Certificates from "@/components/certificates/certificates";

export default function Home() {
  return (
    <main>
      <h1>James Sullivan</h1>
      <h3>Aspiring Data Scientist/Software Engineer</h3>
      <h3>About Me</h3>
      <p>Sint Lorem est dolor labore exercitation Lorem nisi laboris ex mollit.</p>

      <Projects />
      <Education />
      <Certificates />
    </main>
  );
}
