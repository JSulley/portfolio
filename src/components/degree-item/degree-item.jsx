export default function Degree({ degree }) {
  const { title, university, timeFrame } = degree;

  return (
    <div className="border-2 border-gray-950 rounded-xl mx-4pl-2 p-2">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p>{university}</p>
      <p>{timeFrame}</p>
    </div>
  );
}