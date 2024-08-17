import Introduction from "@/components/introduction/introduction";
import Projects from "@/components/projects/projects";
import Education from "@/components/education/education";
import Certificates from "@/components/certificates/certificates";
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="mx-auto md:w-[900px]">
      <main>
        <Introduction />
        <Projects />
        <Education />
        <Certificates />
        <Footer />
      </main>
    </div>
  );
}
