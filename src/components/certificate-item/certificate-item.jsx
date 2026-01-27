export default function CertificateItem({ certificate }) {
  const {
    name,
    institution,
    skillsLearned,
    dateReceived,
    description,
    hyperlink,
    appliedIn,
  } = certificate;

  return (
    <div className="flex h-full flex-col rounded-xl border-2 border-gray-950 bg-gray-950 p-4">
      {/* Course Title */}
      <span className="block text-xl font-semibold text-white">{name}</span>

      {/* Course Information */}
      <p className="text-sm text-gray-400">
        {institution}
        {dateReceived && ` · ${dateReceived}`}
      </p>

      {description && (
        <p className="mb-3 mt-1 hidden text-gray-200 md:line-clamp-2 lg:line-clamp-3">
          {description}
        </p>
      )}

      {/* Skills */}
      <div className="my-2">
        {skillsLearned.map((skill) => (
          <span
            key={skill.id}
            className="mx-1 mb-2 inline-block rounded-xl border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 px-2 py-1 text-sm text-[#9ecaff]"
          >
            {skill.skill}
          </span>
        ))}
      </div>

      {appliedIn && (
        <p className="mt-2 text-sm text-gray-300">
          <span className="font-semibold text-gray-200">Applied in:</span>{" "}
          {appliedIn}
        </p>
      )}

      {/* Link to Certificate */}
      <div className="mt-auto text-center">
        <a
          href={hyperlink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-blue-400 hover:underline"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
}
