const socials = new Map([
  ["social", "hyperlink"],
]);

const sections = [
  "About Me",
  "Projects",
  "Certifications"
];

export default function Home() {
  return (
    <main>
      <h1>James Sullivan</h1>
      <h2>Aspiring Data Scientist/Software Engineer</h2>
      <nav>
        <ul>
          {sections.map((section) => <li>{section}</li>)}
        </ul>
      </nav>
    </main>
  )
}
