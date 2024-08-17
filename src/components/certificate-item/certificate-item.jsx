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
    <div className="border-2 border-gray-950 rounded-xl mx-4pl-2 p-2">
      {/* Course Title */}
      <span className="text-xl font-semibold">{name}</span>

      {/* Course Information */}
      <p>{institution}</p>
      <p>Completed: {dateReceived}</p>
      <p className="break-all hyphens-auto my-3">{description}</p>

      {/* Skills */}
      {skillsLearned.map((skill) => (
        <div
          key={skill.id}
          className="border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 text-[#9ecaff] rounded-xl mx-1 p-1 inline-block sm:max-lg:my-1 mb-2"
        >
          {skill.skill}
        </div>
      ))}

      {/* Link to Certificate */}
      <div className="text-center">
        <a href={hyperlink} className="mt-2 hover:underline">
          View Certificate
        </a>
      </div>
    </div>
  );
}
