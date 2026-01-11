import Projects from "@/components/projects/projects";
import Education from "@/components/education/education";
import Certificates from "@/components/certificates/certificates";
import Footer from "@/components/footer";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Education />
      <Certificates />
      <Footer />
    </main>
  );
}
