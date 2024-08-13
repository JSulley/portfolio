import DegreeItem from '../degree-item/degree-item'

const degrees = [
  {
    'id': 1,
    'title': 'Bachelor of Science in Computer Science',
    'university': 'The University of Texas at San Antonio',
    'timeFrame': 'May 2027'
  },
  {
    'id': 2,
    'title': 'Master of Science in Mathematics',
    'university': 'Texas A&M University-Central Texas',
    'timeFrame': 'May 2022'
  },
  {
    'id': 3,
    'title': 'Bachelor of Science in Mathematics',
    'university': 'Texas A&M University-Central Texas',
    'timeFrame': 'May 2020'
  },
];

export default function Education() {
  return (
    <div>
      <h2 className="text-3xl mt-6 text-center font-bold">Education</h2>
      <div className="flex flex-wrap flex-col space-y-4 m-4">
        {degrees.map(degree => <DegreeItem key={degree.id} degree={degree} />)}
      </div>
    </div>
  );
}