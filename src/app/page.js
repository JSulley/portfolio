import Introduction from "@/components/introduction/introduction";
import Projects from "@/components/projects/projects";
import Education from "@/components/education/education";
import Certificates from "@/components/certificates/certificates";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Projects />
      <Education />
      <Certificates />
      <Footer />
    </main>
  );
}
