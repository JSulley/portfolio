import Certificates from "@/components/certificates/certificates";

const certificates = [
  {
    'name': 'C Programming with Linux Specialization',
    'skillsLearned': 'Lorem',
    'dateReceived': 'September 2023',
    'description': 'Ad occaecat magna dolore nisi elit.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/specialization/certificate/P87AL4S9V3HF',
  },
  {
    'name': 'Django Web Framework',
    'skillsLearned': 'Lorem',
    'dateReceived': 'August 2023',
    'description': 'Nulla enim ea excepteur cupidatat et deserunt voluptate reprehenderit id excepteur exercitation ea.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/R5ZPX7HS6XHZ',
  },
  {
    'name': 'Introduction to Databases for Back-End Development',
    'skillsLearned': 'Lorem',
    'dateReceived': 'February 2023',
    'description': 'Minim cillum culpa deserunt nisi anim occaecat occaecat adipisicing dolore elit nulla ex anim.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/54XGZYBWTT9C',
  },
  {
    'name': 'Programming with JavaScript',
    'skillsLearned': 'Lorem',
    'dateReceived': 'September 2022',
    'description': 'Minim cillum culpa deserunt nisi anim occaecat occaecat adipisicing dolore elit nulla ex anim.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/EHGYTLVDQRQH',
  },
  {
    'name': 'Programming in Python',
    'skillsLearned': 'Lorem',
    'dateReceived': 'August 2022',
    'description': 'Voluptate officia deserunt proident id ut culpa aliqua sit mollit sit deserunt.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/G54R8FDXKV57',
  },
]

export default function Home() {
  return (
    <main>
      <h1>James Sullivan</h1>
      <h3>Aspiring Data Scientist/Software Engineer</h3>
      <h3>About Me</h3>
      <p>Sint Lorem est dolor labore exercitation Lorem nisi laboris ex mollit.</p>
      
      <h2>Projects</h2>
      <h3>NASA Mission Control Project</h3>
      <p>Project Description: Aliquip veniam commodo excepteur Lorem ullamco duis esse veniam nostrud elit ullamco.</p>
      <p>Technologies Used</p>
      <ul>
        <li>Skill</li>
      </ul>
      <a>GitHub Repo</a>

      <h3>Solar Cell Research Application</h3>
      <p>Project Description: Culpa in officia eu est anim cillum.</p>
      <p>Technologies Used</p>
      <ul>
        <li>Skill</li>
      </ul>
      <a>GitHub Repo</a>

      <h2>Education</h2>
      <h3>Degree: Master of Science in Mathematics</h3>
      <h4>University: Texas A&M University-Central Texas</h4>
      <h4>Time Frame: 2020 - 2022</h4>
      <h3>Degree: Bachelor of Science in Mathematics</h3>
      <h4>University: Texas A&M University-Central Texas</h4>
      <h4>Time Frame: 2018 - 2020</h4>

      <Certificates certificates={certificates}/>
    </main>
  )
}
