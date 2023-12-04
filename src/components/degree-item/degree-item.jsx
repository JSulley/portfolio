export default function Degree({ degree }) {
  const { title, university, timeFrame } = degree;

  return (
    <div className="even:mr-4 odd:ml-4 border-2 border-gray-950 rounded-xl mx-4pl-2 p-2">
      <h3 className="text-xl mb-2">{title}</h3>
      <h4>{university}</h4>
      <h4 className="mt-2">{timeFrame}</h4>
    </div>
  );
}