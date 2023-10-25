export default function Degree({ degree }) {
  const { title, university, timeFrame } = degree;

  return (
    <div>
      <h3>{title}</h3>
      <h4>{university}</h4>
      <h4>{timeFrame}</h4>
    </div>
  );
}