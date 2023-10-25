import DegreeItem from '../degree-item/degree-item'

export default function Education({ degrees }) {
  return (
    <div>
      <h2>Education</h2>
      {degrees.map(degree => <DegreeItem key={degree.id} degree={degree} />)}
    </div>
  );
}