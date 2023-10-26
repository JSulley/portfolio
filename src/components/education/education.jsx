import DegreeItem from '../degree-item/degree-item'

const degrees = [
  {
    'id': 1,
    'title': 'Master of Science in Mathematics',
    'university': 'Texas A&M University-Central Texas',
    'timeFrame': '2020 - 2022'
  },
  {
    'id': 2,
    'title': 'Bachelor of Science in Mathematics',
    'university': 'Texas A&M University-Central Texas',
    'timeFrame': '2018 - 2020'
  },
];

export default function Education() {
  return (
    <div>
      <h2>Education</h2>
      {degrees.map(degree => <DegreeItem key={degree.id} degree={degree} />)}
    </div>
  );
}