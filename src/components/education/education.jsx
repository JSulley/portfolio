import DegreeItem from '../degree-item/degree-item'

const degrees = [
  {
    'id': 1,
    'title': 'Master of Science in Mathematics',
    'university': 'Texas A&M University-Central Texas',
    'timeFrame': 'January 2020 - May 2022'
  },
  {
    'id': 2,
    'title': 'Bachelor of Science in Mathematics',
    'university': 'Texas A&M University-Central Texas',
    'timeFrame': 'August 2018 - May 2020'
  },
];

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl mt-6 ml-2 mb-4">Education</h2>
      <div className="grid gap-3 grid-cols-2">
        {degrees.map(degree => <DegreeItem key={degree.id} degree={degree} />)}
      </div>
    </div>
  );
}