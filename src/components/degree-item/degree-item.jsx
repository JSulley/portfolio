export default function Degree({ degree }) {
  const { title, university, timeFrame } = degree;

  return (
    <div className="relative h-[10em] border-2 border-gray-950 bg-gray-950 rounded-xl p-2">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="mt-1">{university}</p>
      <p>{timeFrame}</p>
    </div>
  );
}
