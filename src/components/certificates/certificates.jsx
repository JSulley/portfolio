import CertificateItem from "../certificate-item/certificate-item";

const certificates = [
  {
    id: 1,
    name: "C Programming with Linux Specialization",
    skillsLearned: [
      {
        id: 1,
        skill: "Linux",
      },
      {
        id: 2,
        skill: "C",
      },
    ],
    institution: "Coursera, Dartmouth College",
    dateReceived: "September 2023",
    description:
      "Specialization by Dartmouth College and Institut Mines-Télécom covering the fundamentals of the C programming language, modular programming, memory management, and the command line interface in the Linux operating system.",
    hyperlink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/P87AL4S9V3HF",
  },
  {
    id: 2,
    name: "Introduction to Databases for Back-End Development",
    skillsLearned: [
      {
        id: 1,
        skill: "SQL",
      },
      {
        id: 2,
        skill: "Database Management Systems (DBMS)",
      },
      {
        id: 3,
        skill: "SQLite",
      },
    ],
    institution: "Coursera, Meta",
    dateReceived: "February 2023",
    description:
      "Course taught by Meta providing a comprehensive introduction to databases and their role in back-end development. It covered how to use Structured Query Language (SQL) to perform CRUD operations, operators, and sorting/filtering queries to subset data in databases. Finally, database design principles such as schema, relational database design, and normalization were introduced.",
    hyperlink:
      "https://www.coursera.org/account/accomplishments/certificate/54XGZYBWTT9C",
  },
  {
    id: 3,
    name: "Programming with JavaScript",
    skillsLearned: [
      {
        id: 1,
        skill: "JavaScript",
      },
    ],
    institution: "Coursera, Meta",
    dateReceived: "September 2022",
    description:
      "Course taught by Meta exploring the fundamentals of JavaScript (e.g., data types, operators, etc.), arrays, objects, functions, error prevention, and programming paradigms like functional programming and object-oriented programming. Additionally, it covered testing code using the Jest framework and how JavaScript operates in the browser.",
    hyperlink:
      "https://www.coursera.org/account/accomplishments/certificate/EHGYTLVDQRQH",
  },
  {
    id: 4,
    name: "Programming in Python",
    skillsLearned: [
      {
        id: 1,
        skill: "Python",
      },
    ],
    institution: "Coursera, Meta",
    dateReceived: "August 2022",
    description:
      "Course taught by Meta that provided a comprehensive introduction to Python. It covered Python fundamentals (e.g., control flow, data types, functions), programming paradigms (e.g., procedural, and Object-Oriented Programming (OOP)), and the importance of testing using Test-Driven Development (TDD).",
    hyperlink:
      "https://www.coursera.org/account/accomplishments/certificate/G54R8FDXKV57",
  },
];

export default function Certificates() {
  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold">Certificates</h2>
      <div className="mx-auto grid w-full max-w-sm max-w-xs gap-4 sm:max-w-xl md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        {certificates.map((certificate) => (
          <CertificateItem key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
