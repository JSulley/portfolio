import CertificateItem from "../certificate-item/certificate-item";

const certificates = [
  {
    id: 1,
    name: "C Programming with Linux Specialization",
    institution: "Dartmouth College · Institut Mines-Télécom · Coursera",
    description:
      "Systems programming in C with emphasis on manual memory management, modular design, and Linux command-line workflows.",
    dateReceived: "2023",
    skillsLearned: [
      { id: 1, skill: "Manual Memory Management" },
      { id: 2, skill: "Linux Command Line" },
      { id: 3, skill: "Modular Programming" },
    ],
    appliedIn: "Perudo Game (C, Linux)",
    hyperlink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/P87AL4S9V3HF",
  },
  {
    id: 2,
    name: "Programming in Python",
    institution: "Meta · Coursera",
    description:
      "Python fundamentals including control flow, data structures, functions, procedural and object-oriented programming, and test-driven development (TDD).",
    dateReceived: "2022",
    skillsLearned: [
      { id: 1, skill: "Python" },
      { id: 2, skill: "Data Structures" },
      { id: 3, skill: "Test-Driven Development (TDD)" },
    ],
    appliedIn: null,
    hyperlink:
      "https://www.coursera.org/account/accomplishments/certificate/G54R8FDXKV57",
  },
  {
    id: 3,
    name: "Programming with JavaScript",
    institution: "Meta · Coursera",
    description:
      "JavaScript fundamentals including data structures, functions, object-oriented and functional programming, testing with Jest, and browser-based execution.",
    dateReceived: "2022",
    skillsLearned: [
      { id: 1, skill: "JavaScript" },
      { id: 2, skill: "OOP" },
      { id: 3, skill: "Jest Testing" },
    ],
    appliedIn: null,
    hyperlink:
      "https://www.coursera.org/account/accomplishments/certificate/EHGYTLVDQRQH",
  },
  {
    id: 4,
    name: "Introduction to Databases for Back-End Development",
    institution: "Meta · Coursera",
    description:
      "Introduction to relational databases covering SQL CRUD operations, schema design, and normalization principles for backend applications.",
    dateReceived: "2023",
    skillsLearned: [
      { id: 1, skill: "SQL" },
      { id: 2, skill: "Relational Database Design" },
      { id: 3, skill: "Database Management Systems (DBMS)" },
      { id: 4, skill: "SQLite" },
    ],
    applinedIn: null,
    hyperlink:
      "https://www.coursera.org/account/accomplishments/certificate/54XGZYBWTT9C",
  },
];

export default function Certificates() {
  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold">Certificates</h2>
      <div className="mx-auto grid w-full gap-6 px-4 sm:max-w-xl md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        {certificates.map((certificate) => (
          <CertificateItem key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
