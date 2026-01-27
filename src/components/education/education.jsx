import DegreeItem from "../degree-item/degree-item";

const degrees = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    university: "The University of Texas at San Antonio",
    timeFrame: "May 2027",
  },
  {
    id: 2,
    title: "Master of Science in Mathematics",
    university: "Texas A&M University-Central Texas",
    timeFrame: "May 2022",
  },
  {
    id: 3,
    title: "Bachelor of Science in Mathematics",
    university: "Texas A&M University-Central Texas",
    timeFrame: "May 2020",
  },
];

export default function Education() {
  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold">Education</h2>
      <div className="mx-auto grid w-full gap-6 px-4 sm:max-w-xl md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-3 xl:max-w-5xl 2xl:max-w-7xl">
        {degrees.map((degree) => (
          <DegreeItem key={degree.id} degree={degree} />
        ))}
      </div>
    </div>
  );
}
