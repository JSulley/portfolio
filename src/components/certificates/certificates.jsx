import CertificateItem from "../certificate-item/certificate-item";

const certificates = [
  {
    'id': 1,
    'name': 'C Programming with Linux Specialization',
    'skillsLearned': 'Lorem',
    'dateReceived': 'September 2023',
    'description': 'Ad occaecat magna dolore nisi elit.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/specialization/certificate/P87AL4S9V3HF',
  },
  {
    'id': 2,
    'name': 'Django Web Framework',
    'skillsLearned': 'Lorem',
    'dateReceived': 'August 2023',
    'description': 'Nulla enim ea excepteur cupidatat et deserunt voluptate reprehenderit id excepteur exercitation ea.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/R5ZPX7HS6XHZ',
  },
  {
    'id': 3,
    'name': 'Introduction to Databases for Back-End Development',
    'skillsLearned': 'Lorem',
    'dateReceived': 'February 2023',
    'description': 'Minim cillum culpa deserunt nisi anim occaecat occaecat adipisicing dolore elit nulla ex anim.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/54XGZYBWTT9C',
  },
  {
    'id': 4,
    'name': 'Programming with JavaScript',
    'skillsLearned': 'Lorem',
    'dateReceived': 'September 2022',
    'description': 'Minim cillum culpa deserunt nisi anim occaecat occaecat adipisicing dolore elit nulla ex anim.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/EHGYTLVDQRQH',
  },
  {
    'id': 5,
    'name': 'Programming in Python',
    'skillsLearned': 'Lorem',
    'dateReceived': 'August 2022',
    'description': 'Voluptate officia deserunt proident id ut culpa aliqua sit mollit sit deserunt.',
    'hyperlink': 'https://www.coursera.org/account/accomplishments/certificate/G54R8FDXKV57',
  },
];

export default function Certificates() {
  return (
    <div>
      <h2>Certificates</h2>
      {certificates.map(certificate => <CertificateItem key={certificate.id} certificate={certificate} />)}
    </div>
  );
}
