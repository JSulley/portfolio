export default function CertificateItem({ certificate }) {
  const {
    name,
    institution,
    skillsLearned,
    dateReceived,
    description,
    hyperlink,
  } = certificate;

  return (
    <div className="flex h-full flex-col rounded-xl border-2 border-gray-950 bg-gray-950 p-4">
      {/* Course Title */}
      <span className="block text-xl font-semibold text-white">{name}</span>

      {/* Course Information */}
      <p>{institution}</p>
      <p>Completed: {dateReceived}</p>
      <p className="mb-3 mt-1 hidden md:line-clamp-2 lg:line-clamp-3">
        {description}
      </p>

      {/* Skills */}
      <div className="my-2">
        {skillsLearned.map((skill) => (
          <div
            key={skill.id}
            className="mx-1 mb-2 inline-block rounded-xl border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 p-1 text-[#9ecaff] sm:max-lg:my-1"
          >
            {skill.skill}
          </div>
        ))}
      </div>

      {/* Link to Certificate */}
      <div className="mt-auto text-center">
        <a href={hyperlink} className="mt-2 hover:underline">
          View Certificate
        </a>
      </div>
    </div>
  );
}
