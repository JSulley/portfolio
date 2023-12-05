import Projects from "@/components/projects/projects";
import Education from "@/components/education/education";
import Certificates from "@/components/certificates/certificates";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <h1 className="text-5xl my-2">James Sullivan</h1>
        <h3>Aspiring Data Scientist/Software Engineer</h3>
      </div>

      <Projects />
      <Education />
      <Certificates />
    </main>
  );
}
