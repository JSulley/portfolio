export default function Degree({ degree }) {
  const { title, university, timeFrame } = degree;

  return (
    <div className="flex h-full flex-col rounded-xl border-2 border-gray-950 bg-gray-950 p-4">
      <h3 className="block text-xl font-semibold text-white">{title}</h3>
      <p>{university}</p>
      <p>{timeFrame}</p>
    </div>
  );
}
